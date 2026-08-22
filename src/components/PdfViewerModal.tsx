import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as pdfjsLib from "pdfjs-dist";
import { 
  X, Download, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, 
  FileText, Presentation, Loader2, Sparkles, Maximize2, Minimize2, Printer, Check
} from "lucide-react";

// Configure pdfjs worker using a fast, reliable CDN worker matching pdfjsLib version
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

interface PdfViewerModalProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
  onOpenDeck?: () => void;
}

export default function PdfViewerModal({ pdfUrl, title, onClose, onOpenDeck }: PdfViewerModalProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"continuous" | "single">("continuous");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<{ [key: number]: HTMLCanvasElement | null }>({});
  const renderTaskRefs = useRef<{ [key: number]: any }>({});
  const pdfDocRef = useRef<pdfjsLib.PDFDocumentProxy | null>(null);

  // Load PDF Document via ArrayBuffer fetch (Bypasses Chrome iframe PDF blocks)
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);
    setLoadingProgress(10);

    async function loadPdf() {
      try {
        const fullUrl = pdfUrl.startsWith("http") ? pdfUrl : `${window.location.origin}${pdfUrl.startsWith("/") ? "" : "/"}${pdfUrl}`;
        const response = await fetch(fullUrl);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}: Failed to fetch PDF report file.`);
        }

        setLoadingProgress(40);
        const arrayBuffer = await response.arrayBuffer();
        setLoadingProgress(70);

        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;

        if (isCancelled) return;

        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        setLoadingProgress(100);
        setLoading(false);
      } catch (err: any) {
        console.error("PDF Loading Error:", err);
        if (!isCancelled) {
          setError(err?.message || "Failed to load PDF document.");
          setLoading(false);
        }
      }
    }

    loadPdf();

    return () => {
      isCancelled = true;
      // Cancel any ongoing page render tasks
      Object.values(renderTaskRefs.current).forEach((task: any) => {
        if (task && typeof task.cancel === "function") {
          try { task.cancel(); } catch (_) {}
        }
      });
    };
  }, [pdfUrl]);

  // Render Canvas Pages whenever pdfDoc, scale, or viewMode changes
  useEffect(() => {
    if (!pdfDocRef.current || loading) return;

    const pdf = pdfDocRef.current;
    let activeTasks: any[] = [];

    async function renderPages() {
      const targetPages = viewMode === "single" ? [currentPage] : Array.from({ length: pdf.numPages }, (_, i) => i + 1);

      for (const pageNum of targetPages) {
        const canvas = canvasRefs.current[pageNum];
        if (!canvas) continue;

        try {
          // Cancel prior render task for this page if running
          if (renderTaskRefs.current[pageNum]) {
            renderTaskRefs.current[pageNum].cancel();
          }

          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale });
          const context = canvas.getContext("2d");

          if (!context) continue;

          // Support High DPI / Retina displays
          const outputScale = window.devicePixelRatio || 1;
          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;

          const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

          const renderContext = {
            canvasContext: context,
            transform: transform || undefined,
            viewport,
          };

          const renderTask = page.render(renderContext);
          renderTaskRefs.current[pageNum] = renderTask;
          activeTasks.push(renderTask);

          await renderTask.promise;
        } catch (err: any) {
          if (err?.name !== "RenderingCancelledException") {
            console.error(`Page ${pageNum} render error:`, err);
          }
        }
      }
    }

    renderPages();
  }, [loading, scale, viewMode, currentPage, numPages]);

  // Handle Scroll tracking to update current page indicator
  const handleScroll = () => {
    if (viewMode !== "continuous" || !containerRef.current) return;
    const container = containerRef.current;
    const scrollPos = container.scrollTop + container.clientHeight / 3;

    for (let i = 1; i <= numPages; i++) {
      const canvas = canvasRefs.current[i];
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const top = rect.top - containerRect.top + container.scrollTop;
        if (top <= scrollPos && top + rect.height >= scrollPos) {
          setCurrentPage(i);
          break;
        }
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl.includes("?") ? `${pdfUrl}&download=true` : `${pdfUrl}?download=true`;
    link.download = `${title.replace(/[^a-zA-Z0-9]+/g, "_")}_Full_Report.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className={`relative w-full ${isFullscreen ? "h-screen max-w-none rounded-none" : "max-w-6xl h-[92vh] rounded-2xl"} bg-[#080B11] border border-primary/20 shadow-[0_0_50px_rgba(212,168,83,0.15)] flex flex-col overflow-hidden z-10 text-white`}
        >
          {/* TOP HEADER CONTROLS BAR */}
          <div className="px-4 py-3 bg-[#050914] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 select-none">
            
            {/* Title & Badge */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 bg-primary/10 border border-primary/20 rounded-xl text-primary shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    PDF Document
                  </span>
                  {numPages > 0 && (
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {numPages} Pages • Uncropped Full Resolution
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base truncate max-w-xs sm:max-w-md">
                  {title}
                </h3>
              </div>
            </div>

            {/* CENTER TOOLBAR: ZOOM, PAGE NUM, VIEW MODE */}
            {!loading && !error && (
              <div className="flex items-center gap-2 bg-[#0C1222] border border-white/10 rounded-xl px-3 py-1.5 shadow-inner">
                {/* Page Navigation */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                  <button
                    onClick={() => {
                      if (currentPage > 1) {
                        const newPage = currentPage - 1;
                        setCurrentPage(newPage);
                        if (viewMode === "continuous" && canvasRefs.current[newPage]) {
                          canvasRefs.current[newPage]?.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    disabled={currentPage <= 1}
                    className="p-1 hover:text-primary disabled:opacity-30 disabled:hover:text-slate-300 transition-colors"
                    title="Previous Page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-primary font-bold">{currentPage}</span>
                  <span className="text-slate-500">/</span>
                  <span>{numPages}</span>
                  <button
                    onClick={() => {
                      if (currentPage < numPages) {
                        const newPage = currentPage + 1;
                        setCurrentPage(newPage);
                        if (viewMode === "continuous" && canvasRefs.current[newPage]) {
                          canvasRefs.current[newPage]?.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    disabled={currentPage >= numPages}
                    className="p-1 hover:text-primary disabled:opacity-30 disabled:hover:text-slate-300 transition-colors"
                    title="Next Page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="h-4 w-[1px] bg-white/10 mx-1" />

                {/* Zoom Controls */}
                <button
                  onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
                  className="p-1 text-slate-300 hover:text-primary transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-semibold text-slate-300 min-w-[42px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={() => setScale((s) => Math.min(2.5, s + 0.2))}
                  className="p-1 text-slate-300 hover:text-primary transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setScale(1.2)}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />

                {/* View Mode Toggle */}
                <button
                  onClick={() => setViewMode(viewMode === "continuous" ? "single" : "continuous")}
                  className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all hidden sm:block"
                >
                  {viewMode === "continuous" ? "Continuous Scroll" : "Single Page Mode"}
                </button>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-2">
              {onOpenDeck && (
                <button
                  onClick={onOpenDeck}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-amber-500/20 hover:from-amber-500 hover:to-amber-600 text-amber-400 hover:text-slate-950 border border-amber-500/30 rounded-xl font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                  title="Switch to Interactive Presentation Deck"
                >
                  <Presentation className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Interactive Deck</span>
                </button>
              )}

              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-slate-950 border border-primary/30 rounded-xl font-mono text-xs font-bold transition-all"
                title="Download Full Resolution PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors hidden sm:block"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1"
                title="Close PDF Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MAIN CANVAS BODY AREA */}
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex-1 bg-[#03060C] overflow-auto p-4 sm:p-8 flex flex-col items-center custom-scrollbar relative"
          >
            {loading && (
              <div className="my-auto flex flex-col items-center justify-center p-8 text-center">
                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                <h4 className="font-bold text-white text-base mb-1">
                  Rendering High-Resolution PDF Document...
                </h4>
                <p className="text-xs font-mono text-[#94A3B8] max-w-sm mb-4">
                  Fetching raw PDF binary buffer directly from project repository. No Chrome iframe block.
                </p>
                <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="my-auto flex flex-col items-center justify-center p-8 text-center max-w-md bg-[#0F172A]/80 border border-red-500/30 rounded-2xl">
                <FileText className="w-12 h-12 text-red-400 mb-3" />
                <h4 className="font-bold text-white text-lg mb-2">Document Stream Preview</h4>
                <p className="text-xs font-mono text-slate-400 mb-6 leading-relaxed">
                  {error}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-primary text-slate-950 font-mono text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download PDF File Directly
                  </button>
                  {onOpenDeck && (
                    <button
                      onClick={onOpenDeck}
                      className="px-4 py-2 bg-white/10 text-white font-mono text-xs font-bold rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2"
                    >
                      <Presentation className="w-4 h-4" /> View Interactive Deck
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* RENDERED CANVAS PAGES */}
            {!loading && !error && (
              <div className="flex flex-col items-center gap-6 my-auto">
                {viewMode === "continuous" ? (
                  Array.from({ length: numPages }, (_, index) => {
                    const pageNum = index + 1;
                    return (
                      <div 
                        key={pageNum}
                        className="relative group transition-all duration-300"
                      >
                        {/* Page Header / Number Badge */}
                        <div className="absolute -top-3 left-4 z-10 px-2.5 py-0.5 bg-[#0A0F1E] border border-primary/30 rounded-md text-[10px] font-mono font-bold text-primary shadow-lg flex items-center gap-1.5">
                          <span>Page {pageNum} of {numPages}</span>
                        </div>

                        {/* High-Resolution HTML Canvas */}
                        <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/10 bg-white">
                          <canvas
                            ref={(el) => { canvasRefs.current[pageNum] = el; }}
                            className="block"
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  /* Single Page Slide Mode */
                  <div className="relative group transition-all duration-300">
                    <div className="absolute -top-3 left-4 z-10 px-2.5 py-0.5 bg-[#0A0F1E] border border-primary/30 rounded-md text-[10px] font-mono font-bold text-primary shadow-lg">
                      Page {currentPage} of {numPages}
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/10 bg-white">
                      <canvas
                        ref={(el) => { canvasRefs.current[currentPage] = el; }}
                        className="block"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* BOTTOM STATUS FOOTER */}
          {!loading && !error && (
            <div className="px-6 py-2.5 bg-[#050914] border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Original PDF Rendered via Client-side PDF Engine (No Crop)</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Use mouse wheel or zoom controls to inspect details</span>
                <span>•</span>
                <button onClick={handlePrint} className="hover:text-primary transition-colors flex items-center gap-1">
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
