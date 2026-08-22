import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Eye, ArrowUpRight, Search, X, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_PREVIEWS, PROJECT_PREVIEW_CATEGORIES } from "../data/projectPreviewsData";
import ProjectPreviewCard from "./ProjectPreviewCard";
import ScrollReveal from "./ScrollReveal";

export default function ProjectPreviewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPreviews = useMemo(() => {
    return PROJECT_PREVIEWS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Display top 6 previews on home showcase or all when filtered
  const displayedPreviews = useMemo(() => {
    if (selectedCategory !== "All" || searchQuery) {
      return filteredPreviews;
    }
    return PROJECT_PREVIEWS.slice(0, 6);
  }, [filteredPreviews, selectedCategory, searchQuery]);

  return (
    <section id="pp-section" className="py-20 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
              <Eye className="w-3.5 h-3.5" />
              <span>PP • Dedicated Project Previews</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Interactive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4A853] to-[#A8782A]">
                Project Previews (PP)
              </span>
            </h2>

            <p className="mt-3 text-text-sec text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore 22 standalone PDF project previews across SEO, Paid Meta/Google Ads, Content Strategy, and Brand Audits. Click any card to launch the document in a new tab.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/pp"
              className="btn-shine-sweep px-5 py-3 rounded-xl bg-[#D4A853] text-[#020408] font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_4px_20px_rgba(212,168,83,0.25)] flex items-center gap-2 whitespace-nowrap"
            >
              <span>Explore All 22 Previews</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Filter & Search Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A0E17]/80 p-3.5 rounded-2xl border border-[#D4A853]/20 backdrop-blur-md">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A853]" />
              <input
                type="text"
                placeholder="Search 22 project previews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-[#020408]/80 text-white text-xs font-mono rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:outline-none"
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

            <div className="text-xs font-mono text-text-sec">
              Showing <strong className="text-[#D4A853]">{displayedPreviews.length}</strong> of {PROJECT_PREVIEWS.length} Previews
            </div>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#D4A853]/20">
            {PROJECT_PREVIEW_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D4A853] text-[#020408] font-bold shadow-md"
                    : "bg-[#0A0E17] text-text-sec border border-[#D4A853]/15 hover:border-[#D4A853]/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Previews Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedPreviews.map((item, index) => (
              <ProjectPreviewCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Banner CTA */}
        {selectedCategory === "All" && !searchQuery && (
          <div className="mt-12 text-center">
            <Link
              to="/pp"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-[#0A0E17] border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#020408] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <span>View All 22 Standalone PDF Previews</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
