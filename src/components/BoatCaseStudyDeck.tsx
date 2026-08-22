import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, HeadphoneOff, Headphones, Download
} from "lucide-react";

interface BoatCaseStudyDeckProps {
  onClose: () => void;
}

export default function BoatCaseStudyDeck({ onClose }: BoatCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#180812] border border-pink-500/30 rounded-2xl shadow-[0_0_50px_rgba(236,72,153,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#2b0c20] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-pink-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5" /> boAt LIFESTYLE
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Full-Funnel Meta Ads Campaign Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/boAt_Lifestyle_Meta_Ads_Strategy.pdf?download=true"
              download="boAt_Lifestyle_Meta_Ads_Strategy.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-pink-600/20 hover:bg-pink-600 text-pink-400 hover:text-white border border-pink-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-pink-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-pink-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-pink-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#0d040a] font-sans relative">
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
                      <div className="inline-block px-3 py-1 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold uppercase rounded-full">
                        META ADS CASE STUDY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-tight text-pink-500">boAt LIFESTYLE</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          Full-Funnel Meta Ads Campaign Strategy
                        </h1>
                        <p className="text-pink-400 text-xl font-bold mt-2">India's #1 Audio & Wearable Brand | D2C Growth</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-pink-500/40 pl-4">
                        Full-funnel paid social strategy for boAt Lifestyle — covering TOFU awareness, MOFU engagement, BOFU conversions, custom creative direction, and ₹50,000 monthly budget allocation.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Meta Ads", "Facebook / IG", "Reels", "D2C Growth", "Pixel + CAPI", "Retargeting"].map((t) => (
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
                          <p className="font-bold text-white mt-1">Meta Ads Specialist & Paid Social Consultant</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.boat-lifestyle.com/" target="_blank" rel="noreferrer" className="font-bold text-pink-400 hover:underline mt-1 block truncate">
                            boat-lifestyle.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#2b0c20] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-pink-500/10 border border-pink-500/20 rounded-xl w-full">
                        <span className="block text-4xl font-black text-pink-400">₹50,000</span>
                        <span className="text-xs font-mono text-slate-300">Phase 1 Monthly Budget</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">7</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Campaigns</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-pink-400">12</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Ad Sets</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">#1</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">India Earwear</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">#2</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Global Wearable</span>
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
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 01 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      boAt Lifestyle — <span className="text-pink-400">India's Leading D2C Earwear Brand</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Founded 2016 by Aman Gupta & Sameer Mehta. India's #1 earwear brand and world's 2nd largest wearable brand (IDC Q3 2022). Competes in ₹500–₹5,000 price bracket across TWS Earbuds, Smartwatches, Speakers & Neckbands.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Campaign Strategy & Funnel */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 02 · CAMPAIGN STRATEGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Full-Funnel <span className="text-pink-400">Architecture (TOFU → MOFU → BOFU)</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Campaign Theme: "Plug Into Your Vibe". 4 core campaigns: Brand Awareness TOFU (Reels/Video), Traffic MOFU (Carousels/Collection), Conversions BOFU (Catalog/Dynamic Offer), Retargeting BOFU (Cart abandoners & past buyers).</p>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Audience Research */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 03 · AUDIENCE RESEARCH</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Audience Research & <span className="text-pink-400">Segmentation</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Primary segments: Students (16-22), Young Professionals (22-32), Gamers (18-30), Fitness Enthusiasts (20-35), Music Listeners (18-35). Custom Pixel audiences + 1-3% LAL purchasers.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Creative Strategy */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 04 · CREATIVE STRATEGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Creative Strategy & <span className="text-pink-400">Ad Copy Library</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">15 primary ad copy texts, 10 headlines, 10 descriptions, and 8 hook types (Price shock "Premium sound. ₹999 only", FOMO "Sale ends in 24 hours", Social proof "10M+ boAtheads can't be wrong").</p>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Landing Page Strategy */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 05 · LANDING PAGE & CRO</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Landing Page & <span className="text-pink-400">Conversion Strategy</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Hero Blueprint: "India's #1 Audio Brand — Premium Sound at Unreal Prices", sticky header CTA, 1-tap UPI/Google Pay checkout, load speed &lt;3s on 4G.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Budget Allocation */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 06 · BUDGET & TRACKING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Budget Allocation & <span className="text-pink-400">Pixel / CAPI / GA4 Setup</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">₹50,000 monthly budget split: Brand Reels (₹10K), Conversions (₹10K), Traffic (₹8K), Video Views (₹7K), Catalog (₹7K), Retargeting (₹5K), Creative Reserve (₹5K). 40/30/30 cold/warm/hot split.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: 30/60/90 Day Roadmap */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 07 · ROADMAP</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      30 / 60 / 90 Day <span className="text-pink-400">Optimization Roadmap</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Days 1-30: Launch Pixel/CAPI, TOFU/MOFU/BOFU campaigns, A/B test static vs Reel. Days 31-60: Scale winning creatives by 20%, launch retargeting & lookalikes. Days 61-90: Scale top campaigns by 30-50%, Tier 2 expansion.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Results */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 08 · RESULTS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Expected Results & <span className="text-pink-400">Business Impact</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Compounding first-party Pixel data asset, reduced CPA over time, automated cart-abandoner recovery, and high D2C web store sales growth.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-pink-400 font-bold uppercase">SECTION 09 · REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-pink-400">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#2b0c20] rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                    <p className="text-slate-300 font-sans">
                      "The best Meta Ads campaigns are not built on the biggest budgets — they are built on the clearest strategy."
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white font-bold">Dharmesh — Meta Ads Specialist & Paid Social Consultant</span>
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
