import ScrollReveal from "./ScrollReveal";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Company / Agency Alpha",
      position: "Lead Marketing Strategy & AI Consultant",
      duration: "Duration Placeholder",
      desc: "Tasked with formulating organic SEO funnels and paid ad portfolios. Managed complex marketing integrations and deployed API automations.",
    },
    {
      company: "Enterprise Beta Inc",
      position: "Senior Conversion Rate Auditor & Growth Specialist",
      duration: "Duration Placeholder",
      desc: "Audited multi-million traffic landing layouts. Crafted behavioral split testing campaigns and mapped data schemas for conversion optimization.",
    },
    {
      company: "Local Startup Gamma",
      position: "Technical SEO & Search Marketing Lead",
      duration: "Duration Placeholder",
      desc: "Boosted localized visibility and Google Business positions. Performed heavy crawl analyses and optimized structural indexing elements.",
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-transparent border-y border-border-gold overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              Corporate History
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Professional Experience
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Timeline Layout (Alternating Left/Right) */}
        <div className="relative border-l border-primary/20 md:border-l-0 md:flex md:flex-col md:items-center max-w-4xl mx-auto">
          {/* Centering Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full mb-12 ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Visual Circle Node */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-[#020408] z-10 transform -translate-x-2.5 md:-translate-x-1/2 shadow-[0_0_12px_rgba(212,168,83,0.4)] transition-all duration-300 hover:scale-125" />

                {/* Alternating Slide-Reveal Cards */}
                <ScrollReveal
                  className={`w-full pl-6 md:pl-0 md:w-[45%] ${
                    isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                  y={0}
                  // Custom fade directions
                  delay={0.05 * idx}
                >
                  <div className="glass-panel p-6 bg-[#020408]/40 hover:border-primary/40 transition-colors duration-300">
                    <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"} mb-2`}>
                      <span className="flex items-center space-x-1.5 font-mono text-[10px] text-accent-blue tracking-wider uppercase font-semibold">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.position}</span>
                      </span>
                      <span className="flex items-center space-x-1 font-mono text-[10px] text-text-sec mt-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.duration}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mt-2">
                      {exp.company}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#A8B3C4] leading-relaxed font-light mt-3">
                      {exp.desc}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
