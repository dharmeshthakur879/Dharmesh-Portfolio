import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { HelpCircle, Search, Cpu, BarChart, GraduationCap, Trophy } from "lucide-react";

export default function WhyHireMe() {
  const values = [
    {
      icon: <HelpCircle className="w-8 h-8 text-primary" />,
      title: "Problem Solver",
      desc: "Untangling complex acquisition and tracking issues with creative, logical architectures that remove operational blockages.",
    },
    {
      icon: <Search className="w-8 h-8 text-accent-blue" />,
      title: "SEO Focused",
      desc: "Obsessed with top-of-funnel search dominance. Aligning technical audits and semantic schema to drive steady compounding traffic.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "AI Driven",
      desc: "Harnessing LLM-agent toolchains and automated pipeline nodes to replace repetitive work and drive scale.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-accent-blue" />,
      title: "Performance Marketing",
      desc: "Laser-focused on revenue, conversion percentages, and actual campaign yields instead of hollow visual metrics.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Continuous Learner",
      desc: "Constantly testing beta algorithms, prompt engines, and indexing upgrades to keep campaigns ahead of the curve.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent-blue" />,
      title: "Results Oriented",
      desc: "Evaluating campaign successes on strict conversion targets and quantifiable client business growth.",
    },
  ];

  return (
    <section id="why-hire-me" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              The Advantage
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Why Hire Me?
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Staggered Cards Grid */}
        <ScrollReveal
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((val, idx) => (
            <TiltCard
              key={idx}
              glowColor={idx % 2 === 1 ? "blue" : "gold"}
              className="group hover:border-primary/40 transition-colors duration-300"
            >
              <div className="mb-5">{val.icon}</div>
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-sec leading-relaxed font-light">
                {val.desc}
              </p>
            </TiltCard>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
