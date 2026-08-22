import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, Leaf, Download
} from "lucide-react";

interface DaburCaseStudyDeckProps {
  onClose: () => void;
}

export default function DaburCaseStudyDeck({ onClose }: DaburCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#041208] border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#082212] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-emerald-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5" /> DABUR INDIA
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              On-Page SEO Audit & Optimization Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Dabur_India_OnPage_SEO_Audit_Case_Study.pdf?download=true"
              download="Dabur_India_OnPage_SEO_Audit_Case_Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-emerald-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-emerald-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-emerald-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#020b04] font-sans relative">
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
                      <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase rounded-full">
                        ON-PAGE SEO CASE STUDY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-tight text-emerald-400">DABUR INDIA</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          Ayurvedic Wellness & FMCG On-Page Strategy
                        </h1>
                        <p className="text-emerald-400 text-xl font-bold mt-2">140+ Year Legacy — Dedicated to Health & Well Being</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-emerald-500/40 pl-4">
                        A structured on-page SEO evaluation of www.dabur.com — surfacing optimization gaps, content opportunities and a prioritized strategy to grow organic visibility across India's FMCG & natural-wellness landscape.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["On-Page SEO", "Search Intent", "Content Depth", "AEO / GEO", "Internal Linking", "FMCG"].map((t) => (
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
                          <p className="font-bold text-white mt-1">Senior On-Page SEO Specialist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.dabur.com/" target="_blank" rel="noreferrer" className="font-bold text-emerald-400 hover:underline mt-1 block truncate">
                            dabur.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#082212] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl w-full">
                        <span className="block text-4xl font-black text-emerald-400">57 / 100</span>
                        <span className="text-xs font-mono text-slate-300">On-Page Health Score</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">12</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Audit Metrics</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">20</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Action Recs</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">8</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Quick Wins</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">4 Pillars</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Topic Clusters</span>
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
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 01 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      140-Year Ayurvedic <span className="text-emerald-400">FMCG Powerhouse</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono text-xs">
                    <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-4">
                      <p className="text-slate-300 leading-relaxed font-sans">
                        Founded in 1884 by Dr. S. K. Burman. Global FMCG powerhouse across Consumer Health (Chyawanprash), Personal Care (Vatika, Red Toothpaste), Food & Beverages (Real Fruit Juice, Dabur Honey).
                      </p>
                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-[11px]">
                        Target: Pan-India Tier 1/2/3 + Middle East, South Asia, Africa, UK, USA diaspora.
                      </div>
                    </div>

                    <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3">
                      <span className="text-emerald-400 font-bold block uppercase">SEO GOALS</span>
                      <p className="text-slate-300">• Grow organic visibility for wellness & product queries</p>
                      <p className="text-slate-300">• Drive discovery (honey, chyawanprash, hair oil, juices)</p>
                      <p className="text-slate-300">• Build topical authority in Ayurvedic wellness</p>
                      <p className="text-slate-300">• Capture AI search & voice queries (SGE, Perplexity, ChatGPT)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: On-Page SEO Health Score */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 02 · HEALTH SCORECARD</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      On-Page SEO <span className="text-emerald-400">Health Score: 57/100</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">
                      57/100 — Average. Most urgent gaps: Image ALT Text (45/100), Search Intent (55/100), Meta Descriptions (55/100), and Internal Linking (52/100). High-ROI fixes without full rebuild.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Page-Level SEO Audit */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 03 · PAGE-LEVEL AUDIT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Page-Level <span className="text-emerald-400">Audit</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-red-400 font-bold">Product/Category Pages (Critical): Thin content (&lt;150w), generic titles, missing keyword ALT.</p>
                    <p className="text-emerald-400 font-bold">Before: Dabur Chyawanprash | Dabur</p>
                    <p className="text-emerald-300 font-bold">After: Dabur Chyawanprash — Immunity Booster with 40+ Ayurvedic Herbs | Dabur</p>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Content Optimization Analysis */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 04 · CONTENT OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Content Depth & <span className="text-emerald-400">Semantic LSI</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Expand thin product pages to 300-500 words. Integrate LSI terms (e.g., Chyawanprash: immunity, ojas, amla; Honey: raw, pure, NMR-tested).</p>
                  </div>
                </div>
              )}

              {/* SLIDE 06: GEO + AEO Strategy */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 05 · AI & VOICE SEARCH</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      GEO + AEO <span className="text-emerald-400">Opportunities</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">FAQ Schema on product pages, concise 40-60 word answers for AI search snippets, and 4 pillar topic clusters (Ayurvedic Immunity, Natural Hair Care, Benefits of Honey, Oral Health).</p>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Internal Linking & UX */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 06 · INTERNAL LINKING & UX</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Internal Linking & <span className="text-emerald-400">UX Optimization</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Build Blog ↔ Product reciprocal internal links, benefit-led CTAs ("Buy Now", "Learn More"), and surface AYUSH/FSSAI trust badges above the fold.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Top 20 Recommendations */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 07 · RECOMMENDATIONS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Top 20 <span className="text-emerald-400">On-Page Recommendations</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">12 High Priority fixes, 8 Quick Wins (ALT text, blog↔product links, keyword H1s, structured H2/H3).</p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Results */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 08 · RESULTS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Expected Results & <span className="text-emerald-400">Business Impact</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Capturing non-branded wellness queries, winning featured snippets, driving higher D2C conversion, and generating B2B distributor leads.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Portfolio Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">SECTION 09 · REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-emerald-400">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#082212] rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                    <p className="text-slate-300 font-sans">
                      "Effective on-page SEO is about building a website that serves real people, earns trust through depth & expertise, and aligns every page with user intent and business goals."
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white font-bold">Dharmesh — Senior On-Page SEO Specialist</span>
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
