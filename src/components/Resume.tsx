import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { FileText, ExternalLink, Download, Sparkles, ChevronLeft, ChevronRight, Eye, Layers } from "lucide-react";
import MagneticButton from "./MagneticButton";

const RESUME_PAGES = [
  { page: 1, title: "Summary & Core Experience", webp: "/images/resume-page-1.webp", png: "/images/resume-page-1.png" },
  { page: 2, title: "Case Studies & Metrics", webp: "/images/resume-page-2.webp", png: "/images/resume-page-2.png" },
  { page: 3, title: "Web Dev & Tech Stack", webp: "/images/resume-page-3.webp", png: "/images/resume-page-3.png" },
  { page: 4, title: "Training, Profiles & Skills", webp: "/images/resume-page-4.webp", png: "/images/resume-page-4.png" },
];

export default function Resume() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [viewMode, setViewMode] = useState<"pages" | "pdf_embed">("pages");

  return (
    <section id="resume" className="relative py-24 bg-transparent border-y border-border-gold overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              The Dossier
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Curriculum Vitae
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Resume Card with Live Visual Preview */}
        <ScrollReveal className="max-w-5xl mx-auto">
          <div className="glass-panel p-5 sm:p-8 md:p-10 bg-[#020408]/85 border-primary/25 hover:border-primary/45 transition-colors duration-500 rounded-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            
            {/* Top Action & Meta Info */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-primary/15 text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#050B14] border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(212,168,83,0.15)] flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    Exact Original PDF • 4 Pages
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight mt-0.5">
                    Dharmesh's Professional Resume
                  </h3>
                </div>
              </div>

              {/* View Switcher & Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
                {/* View Mode Toggle */}
                <div className="bg-[#050B14] p-1 rounded-lg border border-primary/20 flex items-center gap-1">
                  <button
                    onClick={() => setViewMode("pages")}
                    className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all flex items-center gap-1.5 ${
                      viewMode === "pages"
                        ? "bg-primary text-[#020408] font-bold shadow-sm"
                        : "text-text-sec hover:text-white"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Pages</span>
                  </button>
                  <button
                    onClick={() => setViewMode("pdf_embed")}
                    className={`px-3 py-1.5 rounded-md font-mono text-xs transition-all flex items-center gap-1.5 ${
                      viewMode === "pdf_embed"
                        ? "bg-primary text-[#020408] font-bold shadow-sm"
                        : "text-text-sec hover:text-white"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Exact PDF</span>
                  </button>
                </div>

                <MagneticButton>
                  <a
                    href="/Dharmesh_Thakur_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine-sweep flex items-center justify-center gap-1.5 px-4 py-2 bg-primary text-[#020408] font-mono text-xs uppercase tracking-widest font-extrabold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open PDF</span>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="/Dharmesh_Thakur_Resume.pdf"
                    download="Dharmesh_Thakur_Resume.pdf"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 bg-white/[0.03] border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary font-mono text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </MagneticButton>
              </div>
            </div>

            {viewMode === "pages" ? (
              <>
                {/* Interactive Page Selector Tabs */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 pb-4">
                  {RESUME_PAGES.map((p) => (
                    <button
                      key={p.page}
                      onClick={() => setCurrentPage(p.page)}
                      className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-300 flex items-center gap-1.5 ${
                        currentPage === p.page
                          ? "bg-primary text-[#020408] font-bold shadow-[0_0_15px_rgba(212,168,83,0.3)]"
                          : "bg-white/[0.03] text-text-sec border border-white/10 hover:border-primary/40 hover:text-white"
                      }`}
                    >
                      <span>Page {p.page}</span>
                      <span className="opacity-70 hidden sm:inline">• {p.title}</span>
                    </button>
                  ))}
                </div>

                {/* Visual Page Preview Display */}
                <div className="relative mt-2 mx-auto max-w-2xl bg-[#0a101d] rounded-xl border border-primary/25 p-2 sm:p-4 shadow-2xl">
                  <div 
                    className="relative rounded-lg overflow-hidden border border-border-gold/30 bg-white group cursor-pointer shadow-inner"
                    onClick={() => setShowFullPreview(true)}
                  >
                    <picture>
                      <source srcSet={RESUME_PAGES[currentPage - 1].webp} type="image/webp" />
                      <img
                        src={RESUME_PAGES[currentPage - 1].png}
                        alt={`Dharmesh Thakur Resume - Page ${currentPage}`}
                        width="1241"
                        height="1755"
                        loading="lazy"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </picture>
                    
                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-[1px]">
                      <Eye className="w-5 h-5 text-primary" />
                      <span className="font-bold">Click to Expand Page {currentPage} in Fullscreen</span>
                    </div>
                  </div>

                  {/* Prev / Next Page Pagination */}
                  <div className="flex items-center justify-between mt-3 px-2 text-xs font-mono text-text-sec">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors py-1 px-2 rounded hover:bg-white/5"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous Page
                    </button>
                    <span className="text-white font-bold tracking-wide">
                      Page {currentPage} of 4 — <span className="text-primary">{RESUME_PAGES[currentPage - 1].title}</span>
                    </span>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(4, prev + 1))}
                      disabled={currentPage === 4}
                      className="flex items-center gap-1 hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors py-1 px-2 rounded hover:bg-white/5"
                    >
                      Next Page <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Exact Embedded PDF Viewer */
              <div className="mt-6 w-full rounded-xl overflow-hidden border border-primary/30 bg-[#0a101d] shadow-2xl p-2 sm:p-4">
                <div className="w-full h-[650px] sm:h-[800px] rounded-lg overflow-hidden border border-border-gold/20 bg-white">
                  <object
                    data="/Dharmesh_Thakur_Resume.pdf#toolbar=1&navpanes=0"
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <iframe
                      src="/Dharmesh_Thakur_Resume.pdf#toolbar=1"
                      className="w-full h-full border-0"
                      title="Dharmesh Thakur Resume"
                    >
                      <div className="p-8 text-center bg-[#020408] text-white">
                        <p className="mb-4">Your browser does not support inline PDF viewing.</p>
                        <a
                          href="/Dharmesh_Thakur_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-primary text-black font-bold rounded-lg inline-flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" /> Open Resume PDF in New Tab
                        </a>
                      </div>
                    </iframe>
                  </object>
                </div>
              </div>
            )}

          </div>
        </ScrollReveal>
      </div>

      {/* Expanded Lightbox Modal */}
      {showFullPreview && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
          onClick={() => setShowFullPreview(false)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[95vh] bg-[#050B14] border border-primary/40 rounded-2xl p-4 overflow-auto shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-primary/20 mb-3 sticky top-0 bg-[#050B14]/95 backdrop-blur-sm z-10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">
                  Page {currentPage} of 4 — {RESUME_PAGES[currentPage - 1].title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/Dharmesh_Thakur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-primary/20 text-primary hover:bg-primary hover:text-black rounded-lg text-xs font-mono transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" /> PDF Tab
                </a>
                <button
                  onClick={() => setShowFullPreview(false)}
                  className="px-3 py-1 bg-white/10 text-white hover:bg-red-500 hover:text-white rounded-lg text-xs font-mono transition-colors"
                >
                  Close (ESC)
                </button>
              </div>
            </div>
            
            <div className="overflow-auto max-h-[82vh] rounded-lg border border-border-gold/20 flex justify-center bg-[#020408] p-2">
              <picture className="w-full flex justify-center">
                <source srcSet={RESUME_PAGES[currentPage - 1].webp} type="image/webp" />
                <img
                  src={RESUME_PAGES[currentPage - 1].png}
                  alt={`Dharmesh Thakur Resume - Page ${currentPage}`}
                  width="1241"
                  height="1755"
                  className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-md"
                />
              </picture>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
