import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, Pill, Download
} from "lucide-react";

interface SunPharmaCaseStudyDeckProps {
  onClose: () => void;
}

export default function SunPharmaCaseStudyDeck({ onClose }: SunPharmaCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0a1120] border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0f1d36] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-amber-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Pill className="w-3.5 h-3.5" /> SUN PHARMA
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Google Ads Campaign Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Sun_Pharma_Google_Ads_Strategy.pdf?download=true"
              download="Sun_Pharma_Google_Ads_Strategy.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-amber-600/20 hover:bg-amber-600 text-amber-400 hover:text-white border border-amber-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-amber-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-amber-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-amber-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#060b14] font-sans relative">
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
                      <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase rounded-full">
                        GOOGLE ADS CAMPAIGN STRATEGY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-3xl sm:text-5xl tracking-tight text-amber-400">SUN PHARMACEUTICAL INDUSTRIES LTD.</span>
                        </div>
                        <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tight">
                          Reaching People in Over 100 Countries
                        </h1>
                        <p className="text-amber-300 text-lg font-bold mt-2">B2B Lead Generation · Brand Awareness · HCP Engagement · API Sales</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-amber-500/40 pl-4">
                        A compliant multi-campaign Google Ads strategy designed for India's largest pharma manufacturer — structuring B2B search, Performance Max, HCP retargeting, and dedicated landing pages.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Google Ads", "Pharma PPC", "B2B Lead Gen", "API Sales", "CDMO Marketing", "GA4 + GTM"].map((t) => (
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
                          <p className="font-bold text-white mt-1">Google Ads Specialist & Senior PPC Strategist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.sunpharma.com/" target="_blank" rel="noreferrer" className="font-bold text-amber-400 hover:underline mt-1 block truncate">
                            sunpharma.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#0f1d36] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl w-full">
                        <span className="block text-4xl font-black text-amber-400">₹30,000</span>
                        <span className="text-xs font-mono text-slate-300">Phase 1 Monthly Budget</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">6</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Campaigns</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-amber-400">43+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Mfg Sites</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">100+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Countries</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-amber-400">USD 4B+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Enterprise</span>
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
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 01 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Sun Pharma — <span className="text-amber-400">India's Largest Pharma Company</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">USD 4B+ global enterprise operating in 100+ countries with 43 manufacturing sites. Portfolio: Branded Generics, Specialty Medicines, APIs, CDMO Contract Manufacturing (US FDA, EMA, WHO-GMP certified).</p>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Campaign Strategy */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 02 · CAMPAIGN STRATEGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      6-Campaign <span className="text-amber-400">Account Architecture</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-2 font-mono text-xs">
                    <p className="text-amber-300 font-bold">Campaign 1: Search — API & Bulk Ingredients (Max Clicks → tCPA)</p>
                    <p className="text-amber-300 font-bold">Campaign 2: Search — CDMO & Contract Mfg (Max Clicks → tCPA)</p>
                    <p className="text-slate-300">Campaign 3: Search — Branded Generics (Target Impression Share)</p>
                    <p className="text-slate-300">Campaign 4: Performance Max — Brand & Global (Max Conversion Value)</p>
                    <p className="text-slate-300">Campaign 5: Display — HCP & Distributor Retargeting (Target CPM)</p>
                    <p className="text-slate-300">Campaign 6: YouTube — Brand Awareness (Target CPV)</p>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Keyword Strategy */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 03 · KEYWORD STRATEGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Intent-Mapped <span className="text-amber-400">Keyword Taxonomy</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Commercial terms: "pharmaceutical API supplier India", "CDMO pharma India", "contract pharmaceutical manufacturing". Negative keywords: B2C retail, patient queries, job searches, lawsuit queries.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Ad Copy Strategy */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 04 · AD COPY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Pharma-Compliant <span className="text-amber-400">RSA Copy Library</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">15 Headlines (max 30 chars), 8 Long Headlines (max 90 chars), 10 Descriptions (max 90 chars) focusing on WHO-GMP, US FDA certification, 43+ sites, and 40+ years pharma expertise.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Landing Page Strategy */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 05 · LANDING PAGES</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Dedicated B2B <span className="text-amber-400">Landing Pages</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Dedicated URLs per campaign (/api-supplier-india, /cdmo-contract-manufacturing). 9-field B2B inquiry form, above-fold CTAs, regulatory trust badges, and load speed &lt;2s.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Budget & Conversion */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 06 · BUDGET & TRACKING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Budget Allocation & <span className="text-amber-400">GA4 / GTM Setup</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">₹30,000 monthly split: API Search (₹8K), CDMO Search (₹7K), Branded (₹5K), PMax (₹4.5K), Remarketing (₹3K), YouTube (₹2.5K). 8 tracked conversion actions via GA4 + GTM.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Campaign Optimization Plan */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 07 · OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      A/B Testing & <span className="text-amber-400">Bid Adjustments</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">RSA headline tests, landing page CRO tests, bid adjustments (+20% desktop B2B, +15% business hours 8am-6pm), and 30/60/90-day rollout phases.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Results */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 08 · IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Expected Results & <span className="text-amber-400">Business Impact</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">High-intent B2B lead capture for APIs & CDMO, HCP brand trust build, and automated smart bidding cost-efficiency.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 09 · REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-amber-400">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d36] rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                    <p className="text-slate-300 font-sans">
                      "Demonstrate sophisticated multi-campaign Google Ads strategy for pharma — one of the most complex, compliance-sensitive industries."
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white font-bold">Dharmesh — Google Ads Specialist & Senior PPC Strategist</span>
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
