import ScrollReveal from "./ScrollReveal";
import { FolderGit2 } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 bg-transparent border-y border-border-gold overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              Deep Dives
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Detailed Case Studies
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Premium Empty State Placeholder */}
        <ScrollReveal>
          <div className="max-w-xl mx-auto glass-panel p-10 border-dashed border-primary/20 bg-[#020408]/30">
            <div className="w-14 h-14 rounded-full bg-[#020408] border border-border-gold flex items-center justify-center mx-auto mb-6">
              <FolderGit2 className="w-6 h-6 text-[#A8B3C4]/60" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Case Studies Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-text-sec leading-relaxed font-light">
              This space is reserved for exhaustive narrative reviews. Here, we will map out step-by-step conversion auditing strategies, workflow automations, and search performance benchmarks for enterprise clients.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
