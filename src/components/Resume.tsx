import ScrollReveal from "./ScrollReveal";
import { FileText, ExternalLink, Download, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 bg-transparent border-y border-border-gold overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
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

        {/* Resume Card (Fade + scale) */}
        <ScrollReveal className="max-w-xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 bg-[#020408]/60 border-primary/20 hover:border-primary/40 transition-colors duration-500 relative overflow-hidden group">
            {/* Visual element */}
            <div className="w-20 h-20 rounded-full bg-[#020408] border border-border-gold flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:border-primary transition-all duration-300">
              <FileText className="w-10 h-10 text-primary" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-wider font-semibold mb-3">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Official Document (PDF)
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-2">
              Dharmesh's Professional Resume
            </h3>
            <p className="text-xs sm:text-sm text-text-sec leading-relaxed font-light mb-8 max-w-sm mx-auto">
              Review my comprehensive history of digital marketing metrics, programmatic ad strategies, and generative toolchain integrations in a print-ready document.
            </p>

            {/* Buttons (Magnetic, shining) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <a
                  href="/Dharmesh_Thakur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine-sweep flex items-center justify-center space-x-2 px-6 py-3.5 bg-primary text-[#020408] font-mono text-xs uppercase tracking-widest font-extrabold rounded-lg w-full sm:w-auto hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/Dharmesh_Thakur_Resume.pdf"
                  download="Dharmesh_Thakur_Resume.pdf"
                  className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-transparent border border-primary/40 text-primary hover:bg-primary/5 hover:border-primary font-mono text-xs uppercase tracking-widest font-bold rounded-lg w-full sm:w-auto transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
