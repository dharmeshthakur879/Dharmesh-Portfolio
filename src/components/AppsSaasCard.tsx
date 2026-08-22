import React, { useState } from "react";
import { ExternalLink, Sparkles, CheckCircle2, Info, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { AppSaasProject } from "../types";

interface AppsSaasCardProps {
  key?: React.Key;
  project: AppSaasProject;
  index: number;
  onOpenDetails: (project: AppSaasProject) => void;
}

export default function AppsSaasCard({ project, index, onOpenDetails }: AppsSaasCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // If user clicked info button, modal handles it via stopPropagation
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.4) }}
      whileHover={{ y: -4, scale: 1.015 }}
      onClick={handleCardClick}
      className="group relative cursor-pointer flex flex-col justify-between bg-[#0A0E17]/90 hover:bg-[#0E1526] border border-[#D4A853]/20 hover:border-[#D4A853]/70 rounded-xl overflow-hidden shadow-md hover:shadow-[0_8px_25px_rgba(212,168,83,0.18)] transition-all duration-300 select-none h-full"
    >
      {/* Top Image & Badge Container */}
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#020408] border-b border-[#D4A853]/15">
          {/* Skeleton placeholder while loading */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-[#0E1526] animate-pulse" />
          )}

          <img
            src={imageError ? fallbackImage : project.thumbnail}
            alt={project.projectName}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-100 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Category / Badge Pill */}
          <div className="absolute top-2 left-2 z-10 flex items-center space-x-1.5">
            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-wider bg-[#020408]/85 text-[#D4A853] border border-[#D4A853]/30 font-bold backdrop-blur-sm shadow-sm">
              {project.badge || project.category}
            </span>
          </div>

          {/* Live Status Indicator */}
          <div className="absolute top-2 right-2 z-10 flex items-center space-x-1 px-2 py-0.5 rounded-full bg-[#020408]/85 border border-emerald-500/40 text-emerald-400 font-mono text-[9px] font-bold backdrop-blur-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-2.5" />
            <span>LIVE</span>
          </div>

          {/* Quick Info Modal Trigger Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(project);
            }}
            title="View Full Product Details"
            className="absolute bottom-2 right-2 z-20 p-1.5 rounded-lg bg-[#020408]/80 hover:bg-[#D4A853] text-[#D4A853] hover:text-[#020408] border border-[#D4A853]/30 transition-all opacity-80 hover:opacity-100"
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card Body */}
        <div className="p-3.5 space-y-2">
          {/* Title & Launch Arrow */}
          <div className="flex items-start justify-between gap-1.5">
            <h3 className="text-xs sm:text-sm font-display font-bold text-white group-hover:text-[#D4A853] transition-colors leading-snug line-clamp-1">
              {project.projectName}
            </h3>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A853]/60 group-hover:text-[#D4A853] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
          </div>

          {/* Concise Description */}
          <p className="text-[11px] text-text-sec/90 line-clamp-2 leading-snug font-sans">
            {project.description}
          </p>

          {/* Key Feature Bullets (Compact 1-2 items) */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-1 pt-1 border-t border-[#D4A853]/10">
              {project.features.slice(0, 1).map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center space-x-1.5 text-[10px] text-slate-300 font-mono truncate">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Compact Tech Badges */}
          <div className="flex flex-wrap gap-1 pt-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#020408]/70 text-text-sec/80 border border-[#D4A853]/15"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1 py-0.5 rounded text-[8px] font-mono bg-[#020408]/70 text-[#D4A853]/70">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer Button */}
      <div className="p-3.5 pt-0">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-full py-1.5 px-2 bg-[#D4A853]/15 group-hover:bg-[#D4A853] text-[#D4A853] group-hover:text-[#020408] border border-[#D4A853]/30 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-sm"
        >
          <span>View Live App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
