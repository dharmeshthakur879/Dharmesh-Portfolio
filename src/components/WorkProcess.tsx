import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import { Search, Compass, Target, Play, ShieldAlert, FilePieChart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WorkProcess() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    { name: "Discovery", icon: <Search className="w-5 h-5 text-primary" />, desc: "Unearthing unique client constraints, target metrics, and existing domain health." },
    { name: "Research", icon: <Compass className="w-5 h-5 text-primary" />, desc: "Deconstructing competitor organic strategies and identifying keyword opportunities." },
    { name: "Planning", icon: <Target className="w-5 h-5 text-primary" />, desc: "Structuring programmatic execution steps, content clusters, and ad account budgets." },
    { name: "Execution", icon: <Play className="w-5 h-5 text-primary" />, desc: "Launching high-end SEO audits, pixel setups, and deploying automation nodes." },
    { name: "Optimization", icon: <ShieldAlert className="w-5 h-5 text-primary" />, desc: "Iterating landing layouts, testing headlines, and excluding negative placements." },
    { name: "Reporting", icon: <FilePieChart className="w-5 h-5 text-primary" />, desc: "Providing granular, data-honest ROI breakdowns and forecasting next growth actions." },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const line = lineRef.current;
    if (!line) return;

    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile vertical line height animation
        if (stepsRef.current) {
          gsap.fromTo(
            line,
            { height: "0%" },
            {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: stepsRef.current,
                start: "top 60%",
                end: "bottom 40%",
                scrub: true,
              },
            }
          );
        }
      } else {
        // Desktop horizontal line width animation
        if (containerRef.current) {
          gsap.fromTo(
            line,
            { width: "0%" },
            {
              width: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom 30%",
                scrub: true,
              },
            }
          );
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="work-process" className="relative py-24 bg-transparent border-y border-border-gold overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              The Blueprint
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Strategic Work Process
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Steps Layout */}
        <div className="relative">
          {/* Timeline connecting line behind items (Desktop Horizontal, Mobile Vertical) */}
          <div className="absolute top-[40px] left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:top-[28px] w-[1px] h-full lg:w-full lg:h-[2px] bg-primary/10" />

          {/* Animating line overlays (GSAP Scrub) */}
          <div
            ref={lineRef}
            className="absolute top-[40px] left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:top-[28px] w-[2px] h-0 lg:w-0 lg:h-[2px] bg-primary shadow-[0_0_15px_rgba(212,168,83,0.8)] z-10"
          />

          {/* steps map */}
          <div
            ref={stepsRef}
            id="work-process-steps"
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-4 relative z-20"
          >
            {steps.map((step, idx) => (
              <ScrollReveal
                key={idx}
                className="w-full max-w-sm lg:max-w-[15%] flex flex-col items-center text-center group"
                delay={0.05 * idx}
              >
                {/* Node circle */}
                <div className="w-14 h-14 rounded-full bg-[#020408] border border-border-gold flex items-center justify-center mb-4 shadow-lg group-hover:border-primary group-hover:scale-110 transition-all duration-300 relative z-30">
                  <span className="text-[#020408] font-mono font-bold text-xs absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    {idx + 1}
                  </span>
                  {step.icon}
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-primary transition-colors duration-200">
                  {step.name}
                </h3>

                <p className="text-xs text-[#A8B3C4] leading-relaxed font-light mt-2 max-w-[200px]">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
