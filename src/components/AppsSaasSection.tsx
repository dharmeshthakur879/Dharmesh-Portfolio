import { useState, useMemo } from "react";
import { 
  Search, X, Layers, Sparkles, ExternalLink, Globe, CheckCircle2, 
  Cpu, Rocket, ShieldCheck, Zap, BarChart2, Filter, Info, ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { APPS_SAAS_PROJECTS, APPS_SAAS_CATEGORIES } from "../data/appsSaasData";
import { AppSaasProject } from "../types";
import AppsSaasCard from "./AppsSaasCard";

export default function AppsSaasSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalProject, setModalProject] = useState<AppSaasProject | null>(null);

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: APPS_SAAS_PROJECTS.length };
    APPS_SAAS_PROJECTS.forEach((proj) => {
      proj.categories.forEach((cat) => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Filtered projects list based on search and category
  const filteredProjects = useMemo(() => {
    return APPS_SAAS_PROJECTS.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" ||
        p.category === selectedCategory ||
        p.categories.includes(selectedCategory);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.projectName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.technologies.some((tech) => tech.toLowerCase().includes(q)) ||
        p.features.some((f) => f.toLowerCase().includes(q)) ||
        p.liveUrl.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="apps-saas" className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Header & Title */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs uppercase tracking-widest mb-3 font-semibold shadow-sm"
        >
          <Rocket className="w-3.5 h-3.5 text-[#D4A853]" />
          <span>Product Showcase & SaaS Directory</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          Live Apps &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4A853] to-[#A8782A]">
            SaaS Products
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-text-sec text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Explore <span className="text-white font-bold">{APPS_SAAS_PROJECTS.length} functional web applications</span> and SaaS tools engineered for digital marketing, AI search, productivity, and SEO automation. Click any card to launch the live product.
        </motion.p>

        {/* Compact Key Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-[#0A0E17]/80 border border-[#D4A853]/20 backdrop-blur-md shadow-md max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center p-1.5">
            <span className="text-lg sm:text-xl font-mono font-bold text-[#D4A853]">{APPS_SAAS_PROJECTS.length}+ Live</span>
            <span className="text-[10px] font-mono text-text-sec uppercase tracking-wider">Functional SaaS</span>
          </div>
          <div className="flex flex-col items-center p-1.5 border-l border-[#D4A853]/15">
            <span className="text-lg sm:text-xl font-mono font-bold text-emerald-400">100%</span>
            <span className="text-[10px] font-mono text-text-sec uppercase tracking-wider">Live & Active</span>
          </div>
          <div className="flex flex-col items-center p-1.5 border-l border-[#D4A853]/15">
            <span className="text-lg sm:text-xl font-mono font-bold text-white">6-Col</span>
            <span className="text-[10px] font-mono text-text-sec uppercase tracking-wider">Compact View</span>
          </div>
          <div className="flex flex-col items-center p-1.5 border-l border-[#D4A853]/15">
            <span className="text-lg sm:text-xl font-mono font-bold text-[#D4A853]">0s Load</span>
            <span className="text-[10px] font-mono text-text-sec uppercase tracking-wider">Instant New Tab</span>
          </div>
        </motion.div>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-8 space-y-4">
        {/* Search Input & Counter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#0A0E17]/90 p-3.5 rounded-xl border border-[#D4A853]/20 backdrop-blur-md shadow-md">
          {/* Live Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#D4A853]" />
            <input
              type="text"
              placeholder={`Search ${APPS_SAAS_PROJECTS.length}+ apps by name, tech, or feature...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-[#020408]/80 text-white placeholder-text-sec/60 text-xs font-mono rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-sec hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Result Counter & Reset Button */}
          <div className="flex items-center space-x-3 text-xs font-mono text-text-sec w-full md:w-auto justify-between md:justify-end">
            <span>
              Showing <strong className="text-[#D4A853]">{filteredProjects.length}</strong> of {APPS_SAAS_PROJECTS.length} Products
            </span>

            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-2.5 py-1 rounded-lg bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#020408] transition-all text-[10px] font-bold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#D4A853]/20">
          {APPS_SAAS_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer flex items-center space-x-1.5 border ${
                  isSelected
                    ? "bg-[#D4A853] text-[#020408] border-[#D4A853] font-bold shadow-md scale-102"
                    : "bg-[#0A0E17]/80 text-text-sec border-[#D4A853]/15 hover:border-[#D4A853]/40 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[9px] font-bold ${
                    isSelected ? "bg-[#020408] text-[#D4A853]" : "bg-[#020408]/80 text-text-sec"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* COMPACT 6-COLUMN GRID FOR DESKTOP (grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6) */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4"
          >
            {filteredProjects.map((project, idx) => (
              <AppsSaasCard
                key={project.id}
                project={project}
                index={idx}
                onOpenDetails={(p) => setModalProject(p)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-4 bg-[#0A0E17]/50 border border-[#D4A853]/20 rounded-2xl"
          >
            <Globe className="w-10 h-10 text-[#D4A853]/40 mx-auto mb-3 animate-bounce" />
            <h3 className="text-base font-display font-bold text-white">No Matching Apps Found</h3>
            <p className="text-xs text-text-sec mt-1 max-w-sm mx-auto">
              No product matches "{searchQuery}" in "{selectedCategory}". Try clearing search or selecting "All".
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-[#D4A853] text-[#020408] font-mono text-xs font-bold uppercase rounded-lg hover:bg-white transition-colors"
            >
              Clear Search Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Project Details Modal */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A0E17] border border-[#D4A853]/40 rounded-2xl overflow-hidden shadow-2xl p-6 text-white max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#020408]/80 text-text-sec hover:text-white border border-[#D4A853]/20 hover:border-[#D4A853] transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-[#020408] mb-5 border border-[#D4A853]/20">
                <img
                  src={modalProject.thumbnail}
                  alt={modalProject.projectName}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded bg-[#D4A853] text-[#020408] font-mono text-xs font-bold uppercase">
                    {modalProject.category}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#020408]/80 text-emerald-400 border border-emerald-500/40 font-mono text-xs font-bold uppercase flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live App</span>
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    {modalProject.projectName}
                  </h3>
                </div>

                <p className="text-sm text-text-sec leading-relaxed">
                  {modalProject.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#D4A853] font-bold mb-2">Key Product Capabilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {modalProject.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs font-mono text-slate-200 bg-[#020408]/60 p-2 rounded-lg border border-[#D4A853]/15">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#D4A853] font-bold mb-2">Built With:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {modalProject.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#020408] text-white border border-[#D4A853]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Action Button */}
                <div className="pt-4 border-t border-[#D4A853]/20 flex items-center justify-between gap-4">
                  <span className="text-xs font-mono text-text-sec">
                    URL: <code className="text-[#D4A853]">{modalProject.liveUrl}</code>
                  </span>
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#D4A853] text-[#020408] rounded-xl font-mono text-xs uppercase font-bold hover:bg-white transition-colors flex items-center space-x-2 shadow-lg"
                  >
                    <span>Launch Live SaaS</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Centralized JSON Source Note */}
      <div className="mt-12 text-center text-xs font-mono text-text-sec/60 flex items-center justify-center space-x-2">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A853]" />
        <span>Centralized JSON Source Data: <code className="text-white">src/data/appsSaasData.ts</code></span>
      </div>
    </section>
  );
}
