import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ExternalLink,
  X,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  SlidersHorizontal,
  ChevronDown,
  Globe,
  Award,
  Zap
} from "lucide-react";
import {
  AI_DM_TOOLS,
  TOOL_CATEGORIES,
  getToolLogo,
  AiDmTool
} from "../data/aiDmTools";
import ScrollReveal from "./ScrollReveal";

const INITIAL_BATCH = 50;
const LOAD_MORE_STEP = 40;

export default function AiDmToolsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_BATCH);
  const [selectedTool, setSelectedTool] = useState<AiDmTool | null>(null);
  const clickTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Single click handler (opens modal after short delay to check for double click)
  const handleToolClick = (tool: AiDmTool) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
    clickTimeoutRef.current = setTimeout(() => {
      setSelectedTool(tool);
      clickTimeoutRef.current = null;
    }, 220);
  };

  // Double click handler (opens official website directly in new browser tab)
  const handleToolDoubleClick = (e: React.MouseEvent, tool: AiDmTool) => {
    e.stopPropagation();
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
    setSelectedTool(null);
    window.open(tool.url, "_blank", "noopener,noreferrer");
  };

  // Reset pagination when filter or search changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH);
  }, [selectedCategory, searchQuery]);

  // Keyboard shortcut listener for Modal ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTool(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    return AI_DM_TOOLS.filter((tool) => {
      const matchesCat =
        selectedCategory === "All" || tool.category === selectedCategory;

      if (!matchesCat) return false;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;

      const nameMatch = tool.name.toLowerCase().includes(q);
      const catMatch = tool.category.toLowerCase().includes(q);
      const descMatch = tool.description.toLowerCase().includes(q);
      const useCaseMatch = tool.useCases.some((uc) =>
        uc.toLowerCase().includes(q)
      );
      const skillMatch = tool.skills.some((s) => s.toLowerCase().includes(q));

      return nameMatch || catMatch || descMatch || useCaseMatch || skillMatch;
    });
  }, [selectedCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: AI_DM_TOOLS.length };
    AI_DM_TOOLS.forEach((tool) => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });
    return counts;
  }, []);

  const visibleTools = filteredTools.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTools.length;

  const handleShowAll = () => {
    setVisibleCount(filteredTools.length);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, filteredTools.length));
  };

  return (
    <section className="relative py-12 md:py-20 bg-transparent text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
              <Cpu className="w-4 h-4" />
              <span>Professional Tech Stack & Directory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              AI + Digital Marketing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4A853] to-[#A8782A]">
                Toolkit Directory
              </span>
            </h1>

            <p className="mt-4 text-text-sec text-sm sm:text-base leading-relaxed">
              An active, curated directory of <strong className="text-[#D4A853]">{AI_DM_TOOLS.length}+ AI models, search engines, design generators, and digital marketing tools</strong> utilized in my professional workflow.
            </p>
            <p className="mt-2 text-xs font-mono text-[#D4A853]/80 bg-[#D4A853]/10 inline-block px-3 py-1 rounded-full border border-[#D4A853]/20">
              💡 Tip: Double-click on any tool card to open its official website directly in browser.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Statistics Bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
            <div className="p-4 bg-[#0A0E17]/80 border border-[#D4A853]/20 rounded-2xl text-center backdrop-blur-md shadow-md">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#D4A853]">
                {AI_DM_TOOLS.length}+
              </div>
              <div className="text-[11px] font-mono text-text-sec uppercase tracking-wider mt-1">
                AI & DM Tools
              </div>
            </div>

            <div className="p-4 bg-[#0A0E17]/80 border border-[#D4A853]/20 rounded-2xl text-center backdrop-blur-md shadow-md">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {TOOL_CATEGORIES.length - 1}
              </div>
              <div className="text-[11px] font-mono text-text-sec uppercase tracking-wider mt-1">
                Categories
              </div>
            </div>

            <div className="p-4 bg-[#0A0E17]/80 border border-[#D4A853]/20 rounded-2xl text-center backdrop-blur-md shadow-md">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
                100%+
              </div>
              <div className="text-[11px] font-mono text-text-sec uppercase tracking-wider mt-1">
                Verified Use Cases
              </div>
            </div>

            <div className="p-4 bg-[#0A0E17]/80 border border-[#D4A853]/20 rounded-2xl text-center backdrop-blur-md shadow-md">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-400 flex items-center justify-center space-x-1">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Daily</span>
              </div>
              <div className="text-[11px] font-mono text-text-sec uppercase tracking-wider mt-1">
                Active Workflow
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A0E17]/90 p-4 rounded-2xl border border-[#D4A853]/25 backdrop-blur-md shadow-lg">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A853]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 250+ tools (e.g. Gemini, SEO, Video, Canva)..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#020408]/90 text-white text-xs font-mono rounded-xl border border-[#D4A853]/30 focus:border-[#D4A853] focus:outline-none focus:ring-1 focus:ring-[#D4A853]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-sec hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono text-text-sec w-full sm:w-auto justify-between sm:justify-end">
              <span>
                Showing <strong className="text-[#D4A853]">{filteredTools.length}</strong> of {AI_DM_TOOLS.length} Tools
              </span>
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="px-2.5 py-1 rounded bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] text-[10px] font-mono hover:bg-[#D4A853] hover:text-[#020408] transition-all cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Horizontally Scrollable Category Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#D4A853]/30 scrollbar-track-transparent">
            {TOOL_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer flex items-center space-x-1.5 shrink-0 ${
                    isSelected
                      ? "bg-[#D4A853] text-[#020408] font-extrabold shadow-md scale-105"
                      : "bg-[#0A0E17] text-text-sec border border-[#D4A853]/15 hover:border-[#D4A853]/40 hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isSelected
                        ? "bg-[#020408] text-[#D4A853]"
                        : "bg-[#020408]/60 text-text-sec"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Tool Cards Responsive Grid */}
        {filteredTools.length === 0 ? (
          <div className="p-12 text-center bg-[#0A0E17]/60 border border-[#D4A853]/20 rounded-2xl">
            <Search className="w-8 h-8 text-[#D4A853] mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-display font-bold text-white">No matching tools found</h3>
            <p className="text-xs text-text-sec font-mono mt-1">Try adjusting your search terms or selecting another category.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-[#D4A853] text-[#020408] font-mono text-xs font-bold uppercase rounded-xl hover:bg-white transition-colors"
            >
              Clear Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2.5 sm:gap-3">
            {visibleTools.map((tool) => (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleToolClick(tool)}
                onDoubleClick={(e) => handleToolDoubleClick(e, tool)}
                title="Single click: View Details | Double click: Open Official Website"
                className="group relative bg-[#0A0E17]/80 hover:bg-[#0E1424] border border-[#D4A853]/20 hover:border-[#D4A853]/70 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_20px_rgba(212,168,83,0.12)] backdrop-blur-md overflow-hidden"
              >
                {/* Top Row: Logo & Proficiency Badge */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#020408] border border-[#D4A853]/30 p-1 flex items-center justify-center shrink-0 group-hover:border-[#D4A853] transition-colors">
                      <img
                        src={getToolLogo(tool.url)}
                        alt={tool.name}
                        loading="lazy"
                        className="w-full h-full object-contain rounded"
                        onError={(e) => {
                          // Fallback icon if domain logo fails
                          (e.target as HTMLImageElement).src =
                            "https://www.google.com/s2/favicons?domain=google.com&sz=128";
                        }}
                      />
                    </div>

                    <span
                      className={`text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        tool.proficiency === "Expert"
                          ? "bg-[#D4A853]/20 text-[#D4A853] border border-[#D4A853]/40"
                          : tool.proficiency === "Daily Use"
                          ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                          : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {tool.proficiency}
                    </span>
                  </div>

                  {/* Tool Name */}
                  <h3 className="font-display font-bold text-xs sm:text-xs text-white group-hover:text-[#D4A853] transition-colors line-clamp-1 leading-tight">
                    {tool.name}
                  </h3>

                  {/* Short Category */}
                  <p className="font-mono text-[9px] text-text-sec line-clamp-1 mt-0.5 opacity-80">
                    {tool.category.split("&")[0].trim()}
                  </p>
                </div>

                {/* Subtle Hover Action Link Indicator */}
                <div className="mt-2 pt-1.5 border-t border-[#D4A853]/10 flex items-center justify-between text-[9px] font-mono text-text-sec group-hover:text-[#D4A853]">
                  <span>2x Click: Visit</span>
                  <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More & Show All Controls */}
        {filteredTools.length > visibleCount && (
          <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleLoadMore}
              className="w-full sm:w-auto px-6 py-3 bg-[#D4A853] text-[#020408] rounded-xl font-mono text-xs uppercase font-extrabold hover:bg-white transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Load More Tools (+{Math.min(LOAD_MORE_STEP, filteredTools.length - visibleCount)})</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button
              onClick={handleShowAll}
              className="w-full sm:w-auto px-6 py-3 bg-[#0A0E17] border border-[#D4A853]/30 text-white rounded-xl font-mono text-xs uppercase font-bold hover:bg-[#D4A853]/15 hover:text-[#D4A853] transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Show All ({filteredTools.length} Tools)</span>
            </button>
          </div>
        )}
      </div>

      {/* Expanded Tool Details Modal */}
      <AnimatePresence>
        {selectedTool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020408]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl bg-[#0A0E17] border border-[#D4A853]/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#020408] text-text-sec hover:text-white border border-[#D4A853]/20 hover:border-[#D4A853] transition-colors cursor-pointer"
                title="Close (ESC)"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#020408] border border-[#D4A853]/40 p-2.5 flex items-center justify-center shrink-0 shadow-inner">
                  <img
                    src={getToolLogo(selectedTool.url)}
                    alt={selectedTool.name}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://www.google.com/s2/favicons?domain=google.com&sz=128";
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#D4A853]/15 text-[#D4A853] border border-[#D4A853]/30 font-bold">
                      {selectedTool.category}
                    </span>

                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                        selectedTool.proficiency === "Expert"
                          ? "bg-[#D4A853] text-[#020408]"
                          : "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                      }`}
                    >
                      {selectedTool.proficiency}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {selectedTool.name}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono text-text-sec uppercase tracking-wider mb-1">
                    Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedTool.description}
                  </p>
                </div>

                {/* Professional Use Cases */}
                <div>
                  <h4 className="text-xs font-mono text-text-sec uppercase tracking-wider mb-2">
                    How I Use This Tool Professionally
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTool.useCases.map((uc) => (
                      <div
                        key={uc}
                        className="flex items-center space-x-2 text-xs text-slate-200 font-mono bg-[#020408]/60 p-2 rounded-lg border border-[#D4A853]/15"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills & Workflow Tags */}
                <div>
                  <h4 className="text-xs font-mono text-text-sec uppercase tracking-wider mb-2">
                    Associated Skills & Strategy
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTool.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#020408] text-slate-300 border border-[#D4A853]/20"
                      >
                        #{s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Official Web Link Action */}
              <div className="pt-4 border-t border-[#D4A853]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-text-sec">
                  Official domain: <strong className="text-slate-200">{new URL(selectedTool.url).hostname}</strong>
                </span>

                <a
                  href={selectedTool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#D4A853] text-[#020408] rounded-xl font-mono text-xs uppercase font-extrabold hover:bg-white transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
