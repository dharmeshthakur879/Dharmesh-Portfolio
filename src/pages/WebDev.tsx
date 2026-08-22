import { useState, useMemo } from "react";
import { Search, Filter, Globe, Sparkles, X, LayoutGrid, Code2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WEB_DEV_PROJECTS, WEB_DEV_CATEGORIES } from "../data/webDevProjects";
import WebDevProjectCard from "../components/WebDevProjectCard";

export default function WebDev() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Calculate project counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: WEB_DEV_PROJECTS.length };
    WEB_DEV_PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return WEB_DEV_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        project.url.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm"
          >
            <Code2 className="w-4 h-4" />
            <span>Web Development Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
          >
            Live Client & Practice{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4A853] to-[#A8782A]">
              Websites
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-text-sec text-sm sm:text-base leading-relaxed"
          >
            A curated agency-grade showcase of <span className="text-white font-semibold">{WEB_DEV_PROJECTS.length} live websites</span> across diverse industry verticals. Every project is fully responsive, SEO-optimized, and built for speed and conversions.
          </motion.p>

          {/* Key Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#0A0E17]/60 border border-[#D4A853]/20 backdrop-blur-md"
          >
            <div className="flex flex-col items-center p-2">
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#D4A853]">22+</span>
              <span className="text-[11px] font-mono text-text-sec uppercase tracking-wider">Live Deployments</span>
            </div>
            <div className="flex flex-col items-center p-2 border-l border-[#D4A853]/15">
              <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">100%</span>
              <span className="text-[11px] font-mono text-text-sec uppercase tracking-wider">Mobile Responsive</span>
            </div>
            <div className="flex flex-col items-center p-2 border-l border-[#D4A853]/15">
              <span className="text-xl sm:text-2xl font-mono font-bold text-white">15+</span>
              <span className="text-[11px] font-mono text-text-sec uppercase tracking-wider">Niche Categories</span>
            </div>
            <div className="flex flex-col items-center p-2 border-l border-[#D4A853]/15">
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#D4A853]">60 FPS</span>
              <span className="text-[11px] font-mono text-text-sec uppercase tracking-wider">Smooth UX</span>
            </div>
          </motion.div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-6">
          {/* Top Bar: Search Input + Status indicator */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0A0E17]/80 p-4 rounded-2xl border border-[#D4A853]/20 backdrop-blur-md shadow-md">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A853]" />
              <input
                type="text"
                placeholder="Search by title, industry, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-[#020408]/80 text-white placeholder-text-sec/60 text-xs font-mono rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-sec hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results Count & Quick Reset */}
            <div className="flex items-center space-x-3 text-xs font-mono text-text-sec w-full md:w-auto justify-between md:justify-end">
              <span>
                Showing <strong className="text-[#D4A853]">{filteredProjects.length}</strong> of{" "}
                {WEB_DEV_PROJECTS.length} Live Sites
              </span>

              {(selectedCategory !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#020408] transition-all text-[11px] font-bold"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Horizontal Category Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-[#D4A853]/20">
            {WEB_DEV_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-300 flex items-center space-x-2 border cursor-pointer ${
                    isSelected
                      ? "bg-[#D4A853] text-[#020408] border-[#D4A853] font-bold shadow-[0_4px_15px_rgba(212,168,83,0.3)] scale-102"
                      : "bg-[#0A0E17]/70 text-text-sec border-[#D4A853]/15 hover:border-[#D4A853]/40 hover:text-white hover:bg-[#0D1322]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isSelected
                        ? "bg-[#020408] text-[#D4A853]"
                        : "bg-[#020408]/80 text-text-sec"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <WebDevProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 px-4 bg-[#0A0E17]/40 border border-[#D4A853]/20 rounded-3xl"
            >
              <Globe className="w-12 h-12 text-[#D4A853]/40 mx-auto mb-4 animate-bounce" />
              <h3 className="text-lg font-display font-bold text-white">No Live Websites Found</h3>
              <p className="text-xs text-text-sec mt-1 max-w-md mx-auto">
                No project matched "{searchQuery}" in category "{selectedCategory}". Try adjusting your query or resetting filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2.5 bg-[#D4A853] text-[#020408] font-mono text-xs font-bold uppercase rounded-xl hover:bg-white transition-colors"
              >
                Clear All Search Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Data Maintenance Footer Note */}
      <div className="mt-20 pt-6 border-t border-[#D4A853]/15 text-center text-xs font-mono text-text-sec/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-[#D4A853]" />
          <span>Dynamically driven by single JSON/Data array (<code className="text-white">src/data/webDevProjects.ts</code>)</span>
        </div>
        <div className="text-[11px]">
          Click any card to launch the live website in a new tab.
        </div>
      </div>
    </div>
  );
}
