import { FileText, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudyTeaser() {
  const featuredCaseStudies = CASE_STUDIES.filter((cs) => cs.featured).slice(0, 6);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#D4A853]/15">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Marketing Case Studies</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Featured Marketing &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4A853] to-[#A8782A]">
              SEO Case Studies
            </span>
          </h2>

          <p className="mt-2 text-text-sec text-xs sm:text-sm max-w-2xl">
            Explore 22+ real-world digital marketing audit decks and strategy PDF reports engineered for leading brands including Nike, Zomato, Netflix, Sun Pharma, and boAt.
          </p>
        </div>

        {/* View All CTA Button */}
        <div>
          <Link
            to="/case-studies"
            className="btn-shine-sweep px-6 py-3 bg-[#D4A853] text-[#020408] font-mono text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-[0_8px_25px_rgba(212,168,83,0.3)] hover:scale-105"
          >
            <span>View All 22 Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Grid Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCaseStudies.map((caseStudy, index) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A0E17] via-[#0D1322] to-[#0A0E17] border border-[#D4A853]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-[#D4A853]/10 border border-[#D4A853]/40 flex items-center justify-center text-[#D4A853] shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-display font-bold text-white">
              Need a comprehensive digital audit or strategy for your brand?
            </h3>
            <p className="text-xs text-text-sec mt-0.5">
              From Technical SEO & AEO/GEO readiness to Meta & Google Ads performance scaling.
            </p>
          </div>
        </div>

        <Link
          to="/case-studies"
          className="px-5 py-2.5 rounded-xl bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#020408] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap"
        >
          Explore All Case Studies →
        </Link>
      </div>
    </section>
  );
}
