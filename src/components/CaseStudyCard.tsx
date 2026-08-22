import React from "react";
import { ExternalLink, FileText, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { CaseStudy } from "../types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  key?: React.Key;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Open the PDF link directly in a new browser tab as a standalone document
    window.open(caseStudy.pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.35), ease: "easeOut" }}
      onClick={handleCardClick}
      className="group relative flex flex-col justify-between h-full bg-[#0A0E17]/95 hover:bg-[#0E1526] border border-[#D4A853]/35 hover:border-[#D4A853]/70 rounded-2xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-[0_18px_45px_-12px_rgba(212,168,83,0.25)] transition-all duration-500 cursor-pointer interactive-hover select-none"
    >
      {/* Top Animated Accent Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853]/0 group-hover:via-[#D4A853] to-transparent transition-all duration-700 z-20" />

      <div>
        {/* PDF Document Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#050810]/95 border-b border-[#D4A853]/15 text-[11px] font-mono text-text-sec/80">
          <div className="flex items-center space-x-1.5 text-[#D4A853] font-semibold">
            <FileText className="w-3.5 h-3.5 text-[#D4A853] shrink-0" />
            <span className="uppercase tracking-wider text-[10px]">Digital Marketing Case Study</span>
          </div>

          {/* PDF Format Badge */}
          <div className="flex items-center space-x-1 bg-[#D4A853]/10 border border-[#D4A853]/30 px-2 py-0.5 rounded-full text-[#D4A853] font-mono font-semibold text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] animate-pulse inline-block" />
            <span>PDF Deck</span>
          </div>
        </div>

        {/* Thumbnail Cover Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#020408]">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80";
            }}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.98] group-hover:brightness-100"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-65" />

          {/* Category Chip Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#020408]/85 text-[#D4A853] border border-[#D4A853]/30 backdrop-blur-md shadow-md font-semibold">
              {caseStudy.category}
            </span>
          </div>

          {/* Featured Badge */}
          {caseStudy.featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#D4A853] text-[#020408] font-bold shadow-md">
                <Sparkles className="w-3 h-3" />
                <span>Featured</span>
              </span>
            </div>
          )}

          {/* Metric Pill floating over cover */}
          {caseStudy.metrics && (
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#020408]/90 border border-[#D4A853]/40 text-emerald-400 font-mono text-[11px] font-bold shadow-lg backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{caseStudy.metrics}</span>
              </div>
            </div>
          )}

          {/* Hover View Case Study Overlay */}
          <div className="absolute inset-0 bg-[#020408]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#D4A853] text-[#020408] font-mono text-xs uppercase tracking-widest font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-5 flex flex-col justify-between space-y-3">
          <div>
            <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#D4A853] transition-colors duration-300 line-clamp-1">
              {caseStudy.title}
            </h3>

            <p className="mt-2 text-xs text-text-sec line-clamp-2 leading-relaxed">
              {caseStudy.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-mono text-text-sec/80 bg-[#020408]/60 border border-[#D4A853]/10 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-5 pb-5 pt-2 border-t border-[#D4A853]/10">
        <a
          href={caseStudy.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full btn-shine-sweep py-2.5 px-4 bg-[#D4A853]/10 group-hover:bg-[#D4A853] border border-[#D4A853]/40 group-hover:border-[#D4A853] text-[#D4A853] group-hover:text-[#020408] rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
        >
          <FileText className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
          <span>View Case Study</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
