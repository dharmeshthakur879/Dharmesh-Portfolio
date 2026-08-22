import React from "react";
import { ExternalLink, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { WebDevProject } from "../types";

interface WebDevProjectCardProps {
  project: WebDevProject;
  index: number;
  key?: React.Key;
}

export default function WebDevProjectCard({ project, index }: WebDevProjectCardProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Open project live website in a new browser tab without leaving portfolio
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4), ease: "easeOut" }}
      onClick={handleCardClick}
      className="group relative flex flex-col justify-between h-full bg-[#0A0E17]/95 hover:bg-[#0E1526] border border-[#D4A853]/35 hover:border-[#D4A853]/70 rounded-2xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-[0_16px_40px_-12px_rgba(212,168,83,0.25)] transition-all duration-500 cursor-pointer interactive-hover select-none"
    >
      {/* Top Animated Accent Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853]/0 group-hover:via-[#D4A853] to-transparent transition-all duration-700 z-20" />

      <div>
        {/* Mock Browser Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#050810]/90 border-b border-[#D4A853]/15 text-[11px] font-mono text-text-sec/70">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Browser Address Bar Mock */}
          <div className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-[#020408]/90 border border-[#D4A853]/10 max-w-[190px] truncate text-text-sec group-hover:border-[#D4A853]/30 transition-colors">
            <Globe className="w-3 h-3 text-[#D4A853] shrink-0" />
            <span className="truncate text-[10px] tracking-tight">{project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
          </div>

          {/* Live Pulsing Badge */}
          <div className="flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full text-emerald-400 font-sans font-medium text-[10px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wider uppercase font-mono font-semibold">Live</span>
          </div>
        </div>

        {/* Thumbnail Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#020408]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
            }}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.98] group-hover:brightness-100"
          />

          {/* Subtle gradient gradient overlay over image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-65" />

          {/* Category Chip Floating Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#020408]/85 text-[#D4A853] border border-[#D4A853]/30 backdrop-blur-md shadow-md font-semibold">
              {project.category}
            </span>
          </div>

          {/* Featured Ribbon if applicable */}
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#D4A853] text-[#020408] font-bold shadow-md">
                <Sparkles className="w-3 h-3" />
                <span>Featured</span>
              </span>
            </div>
          )}

          {/* Hover View Live Overlay */}
          <div className="absolute inset-0 bg-[#020408]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#D4A853] text-[#020408] font-mono text-xs uppercase tracking-widest font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-5 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-display font-bold text-white group-hover:text-[#D4A853] transition-colors duration-300 line-clamp-1">
                {project.title}
              </h3>
            </div>

            <p className="mt-2 text-xs text-text-sec line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
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

      {/* Card Footer CTA Button */}
      <div className="px-5 pb-5 pt-2 border-t border-[#D4A853]/10">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full btn-shine-sweep py-2.5 px-4 bg-[#D4A853]/10 group-hover:bg-[#D4A853] border border-[#D4A853]/40 group-hover:border-[#D4A853] text-[#D4A853] group-hover:text-[#020408] rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
        >
          <Globe className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12" />
          <span>View Live Website</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
