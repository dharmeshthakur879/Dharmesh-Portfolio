import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, MapPin, Building2, Download
} from "lucide-react";

interface TechMahindraCaseStudyDeckProps {
  onClose: () => void;
}

export default function TechMahindraCaseStudyDeck({ onClose }: TechMahindraCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#070b16] border border-red-500/30 rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0f172a] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-red-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> TECH MAHINDRA
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Local SEO Strategy & GBP Optimization
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Tech_Mahindra_Local_SEO_Case_Study.pdf?download=true"
              download="Tech_Mahindra_Local_SEO_Case_Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-red-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-red-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-red-400 transition-colors p-1">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#040810] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* SLIDE 01: Cover */}
              {currentSlide === 1 && (
                <div className="space-y-8">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                    <div className="space-y-6 max-w-2xl">
                      <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase rounded-full">
                        LOCAL SEO CASE STUDY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-tight text-red-500">TECH MAHINDRA</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          Local SEO Strategy & GBP Optimization
                        </h1>
                        <p className="text-red-400 text-xl font-bold mt-2">Enterprise IT Services | Digital Transformation</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-red-500/40 pl-4">
                        "Enterprise B2B companies can leverage local search, GBP optimization, and citation authority to capture high-intent corporate leads at scale."
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Local SEO", "GBP Optimization", "B2B Lead Gen", "NAP Consistency", "Citations", "90-Day Roadmap"].map((t) => (
                          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-slate-300 rounded">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Prepared By</p>
                          <p className="font-bold text-white mt-1">Dharmesh</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Role</p>
                          <p className="font-bold text-white mt-1">Senior Local SEO Consultant</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.techmahindra.com/" target="_blank" rel="noreferrer" className="font-bold text-red-400 hover:underline mt-1 block truncate">
                            techmahindra.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#0f172a] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl w-full">
                        <span className="block text-4xl font-black text-red-400">54 / 100</span>
                        <span className="text-xs font-mono text-slate-300">Local SEO Health Score</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">20+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Indian Cities</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-red-400">90+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Countries</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">50+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">IT Directories</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">80+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Target Score</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Business Overview */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 01 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Tech Mahindra — <span className="text-red-400">Enterprise IT Global Leader</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Flagship subsidiary of Mahindra Group (est. 1986, HQ Pune). Top-5 Indian IT services company operating in 90+ countries with 145,000+ professionals. Primary hubs: Pune, Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Health Score */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 02 · LOCAL SEO HEALTH SCORE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Local SEO <span className="text-red-400">Health Score: 54/100</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Gaps: Incomplete GBP profiles, missing city location pages, NAP inconsistencies across directories, and limited LocalBusiness schema.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 04: GBP Optimization */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 03 · GOOGLE BUSINESS PROFILE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      GBP Profile <span className="text-red-400">Optimization</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">15-item GBP checklist: Standardize "Tech Mahindra", city-specific 750-char descriptions, location-specific URLs (not homepage), pre-populated Q&A, and 15+ photos per location.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Local Keyword Research */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 04 · LOCAL KEYWORDS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Local Keyword <span className="text-red-400">Strategy</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Focus on high-intent B2B city+service queries: "IT services company in Pune", "cloud migration services Pune", "AI solutions Bengaluru", "IT consulting firm Hyderabad".</p>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Citation & Reputation Management */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 05 · CITATIONS & REPUTATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Citation Building & <span className="text-red-400">Reputation Management</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">4-tier citation building (Core authority, Business dirs, IT specific NASSCOM/Clutch/G2, Local India) + 4-step client review acquisition framework.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Local Content Architecture */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 06 · CONTENT ARCHITECTURE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Local Content <span className="text-red-400">Strategy & Hierarchy</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">5-level hierarchy: L1 Location Hubs → L2 Service+City Pages → L3 Industry+City Pages → L4 Local Blog → L5 AEO/FAQ Q&A Pages.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: 30/60/90 Day Roadmap */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 07 · EXECUTION ROADMAP</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      30 / 60 / 90 Day <span className="text-red-400">Local SEO Roadmap</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-red-400 font-bold">Phase 1 (1-30 Days): GBP audit, NAP consistency, master spreadsheet, Organization schema</p>
                    <p className="text-amber-400 font-bold">Phase 2 (31-60 Days): 6 city hub pages, LocalBusiness schema, Tier 1/2 citations, review acquisition</p>
                    <p className="text-emerald-400 font-bold">Phase 3 (61-90 Days): Industry+City pages, Tier 3/4 citations, local backlink outreach, AEO optimization</p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Results */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 08 · IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Expected Results & <span className="text-red-400">Business Impact</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Health score upgrade: 54 → 80/100. Dominance in Local 3-Pack for major Indian tech hubs and qualified B2B consultation lead growth.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 09 · REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-red-400">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f172a] rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                    <p className="text-slate-300 font-sans">
                      "A technical SEO audit is only as valuable as the clarity and prioritization behind it. Translating Tech Mahindra's global brand strength into compounding local search authority across India's tech hubs."
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white font-bold">Dharmesh — Senior Local SEO Consultant</span>
                      <span className="text-slate-400">June 2026</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
