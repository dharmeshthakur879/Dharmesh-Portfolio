import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, Sparkles, Download, BarChart2, TrendingUp, Heart, ExternalLink
} from "lucide-react";

interface MamaearthCaseStudyDeckProps {
  onClose: () => void;
}

export default function MamaearthCaseStudyDeck({ onClose }: MamaearthCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#071411] border border-teal-500/30 rounded-2xl shadow-[0_0_50px_rgba(20,184,166,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0d2620] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-teal-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> MAMAEARTH
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Beauty D2C Performance Ads & Influencer Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct PDF Link */}
            <a
              href="https://pdflink.to/mamaearth/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-teal-600/20 hover:bg-teal-600 text-teal-400 hover:text-white border border-teal-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Open Official PDF Report in New Tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-teal-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-teal-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-teal-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#040c0a] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* SLIDE 01: Executive Summary */}
              {currentSlide === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                      <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold uppercase rounded-full">
                        CASE STUDY #21 · BEAUTY & PERSONAL CARE D2C SCALING
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Mamaearth <span className="text-teal-400">Toxin-Free Scale</span>
                      </h1>
                      <p className="text-teal-300 font-bold text-sm sm:text-base mt-1">
                        Meta Ads ROAS Optimization & Influencer Whitelisting Funnels
                      </p>
                    </div>
                    <div className="p-4 bg-[#0d2620] border border-teal-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">PERFORMANCE BLENDED ROAS</span>
                      <span className="text-4xl font-black text-teal-400 block my-1">4.1x<span className="text-xl text-slate-400"> ROAS</span></span>
                      <span className="text-[11px] font-mono text-teal-300">Skin & Hair Care Portfolios</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-teal-400 font-mono text-xs font-bold uppercase mb-1">01 · Toxin-Free Messaging</div>
                      <h4 className="font-bold text-white text-base mb-2">Made Safe & Cruelty-Free Positioning</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Championing natural Onion Hair Oil, Ubtan Face Wash, and Rice Water skincare with authentic creator video proof hooks.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-teal-400 font-mono text-xs font-bold uppercase mb-1">02 · Creator Whitelisting</div>
                      <h4 className="font-bold text-white text-base mb-2">Dark Ads from Influencer Handles</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Running Meta Advantage+ Shopping Campaigns directly through micro and macro beauty influencer Facebook & Instagram handles.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-teal-400 font-mono text-xs font-bold uppercase mb-1">03 · Buy 1 Get 1 (BOGO) Funnels</div>
                      <h4 className="font-bold text-white text-base mb-2">High-AOV Festive Flash Sales</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Engineering irresistible tiered bundles and free gift promotions to double average cart values from ₹499 to ₹1,050+.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-teal-950/40 border border-teal-500/20 rounded-xl flex items-center justify-between">
                    <div className="text-xs text-slate-300 font-mono">
                      Official Deck URL: <span className="text-teal-400">https://pdflink.to/mamaearth/</span>
                    </div>
                    <a
                      href="https://pdflink.to/mamaearth/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-teal-400 hover:text-white font-mono font-bold flex items-center gap-1"
                    >
                      <span>Open Standalone PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Market Landscape */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-teal-400 font-bold uppercase">PAGE 02 · D2C BEAUTY LANDSCAPE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Overcoming Rising Meta CPMs & Ad Fatigue</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Industry Pain Points
                      </h3>
                      <p className="text-xs text-slate-300">
                        • Meta Ads CPM inflation (+45% YoY in beauty vertical).
                      </p>
                      <p className="text-xs text-slate-300">
                        • High return-to-origin (RTO) rates on cash-on-delivery orders.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Heavy competition from Plum, Dot & Key, WOW Skin Science, and Nykaa.
                      </p>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        Our Execution Formula
                      </h3>
                      <p className="text-xs text-slate-300">
                        • 15+ rapid UGC video ad variants tested weekly with dynamic hook testing.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Instant UPI / Prepaid discounts (Flat ₹50 off) cutting RTO to &lt; 8%.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Post-purchase cross-sell upsells inside 1-click checkout modal.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: High-Intent Skincare Keywords */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-teal-400 font-bold uppercase">PAGE 03 · KEYWORD TARGETING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Problem-Solution Skincare & Haircare Search Matrix</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#0d2620] border border-teal-500/20 rounded-xl">
                      <h4 className="font-bold text-teal-300 text-sm mb-2">1. Hair Fall & Dandruff</h4>
                      <div className="space-y-1 font-mono text-[11px] text-teal-400 bg-black/40 p-2.5 rounded">
                        <div>• "onion hair oil for hair regrowth"</div>
                        <div>• "best anti hair fall shampoo toxin free"</div>
                        <div>• "rosemary hair spray for thinning hair"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0d2620] border border-teal-500/20 rounded-xl">
                      <h4 className="font-bold text-teal-300 text-sm mb-2">2. Glow & Dark Spots</h4>
                      <div className="space-y-1 font-mono text-[11px] text-teal-400 bg-black/40 p-2.5 rounded">
                        <div>• "ubtan face wash for tan removal"</div>
                        <div>• "vitamin c serum for glowing skin"</div>
                        <div>• "rice water face moisturizer glass skin"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0d2620] border border-teal-500/20 rounded-xl">
                      <h4 className="font-bold text-teal-300 text-sm mb-2">3. Baby & Mom Care</h4>
                      <div className="space-y-1 font-mono text-[11px] text-teal-400 bg-black/40 p-2.5 rounded">
                        <div>• "safe baby body lotion pediatrician approved"</div>
                        <div>• "chemical free baby shampoo no tears"</div>
                        <div>• "stretch mark cream for new mothers"</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Creator Whitelisting Strategy */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-teal-400 font-bold uppercase">PAGE 04 · CREATOR WHITELISTING ADS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">High-Trust Dark Ads on Instagram & YouTube</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Securing advertiser access to 50+ dermatology and lifestyle creators. Running "Before vs After 21 Days" video case studies that appear native to user feeds rather than branded corporate advertisements.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/40 border border-teal-500/20 rounded-xl">
                        <span className="text-2xl font-black text-teal-400">3.8%</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Average Outbound CTR</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-teal-500/20 rounded-xl">
                        <span className="text-2xl font-black text-emerald-400">-38%</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Customer Acquisition Cost</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-teal-500/20 rounded-xl">
                        <span className="text-2xl font-black text-teal-400">4.5M+</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Targeted Video Views</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Retention & WhatsApp Marketing */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-teal-400 font-bold uppercase">PAGE 05 · RETENTION & WHATSAPP COMMERCE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Automated WhatsApp Care Flows & Re-Order Triggers</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#0d2620] border border-teal-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Automated Skincare Consultation</h4>
                      <p className="text-xs text-slate-300">
                        Interactive WhatsApp chatbot analyzing skin concerns and sending customized 3-step morning and night routines with direct purchase links.
                      </p>
                    </div>

                    <div className="p-5 bg-[#0d2620] border border-teal-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Replenishment Timers</h4>
                      <p className="text-xs text-slate-300">
                        Triggered on Day 35 post-delivery with a personalized "Running low on your Onion Shampoo?" 1-click checkout link.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: BOGO & Flash Sale CRO */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-teal-400 font-bold uppercase">PAGE 06 · BUNDLE CRO</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Tiered Basket Building & Free Gift Mechanics</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-teal-400 font-bold">Gamified Cart Progress Bar:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          "Add ₹149 more to unlock Free Vitamin C Serum + Free Shipping!"
                        </div>
                      </div>
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-emerald-400 font-bold">AOV Uplift:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          Lifted site-wide Average Order Value (AOV) from ₹540 to ₹980 on promotional days.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Campaign Results */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-teal-400 font-bold uppercase">PAGE 07 · RESULTS & ROAS SCALE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Key Performance Metrics & Scale</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#0d2620] border border-teal-500/30 rounded-xl">
                      <span className="text-2xl font-black text-teal-400">4.1x</span>
                      <h4 className="font-bold text-white text-sm mt-1">Blended Paid Media ROAS</h4>
                      <p className="text-xs text-slate-300 mt-1">Maintained across ₹1.5 Cr+ monthly ad spend on Meta & Google Ads.</p>
                    </div>

                    <div className="p-5 bg-[#0d2620] border border-teal-500/30 rounded-xl">
                      <span className="text-2xl font-black text-emerald-400">38%</span>
                      <h4 className="font-bold text-white text-sm mt-1">Repeat Customer Order Rate</h4>
                      <p className="text-xs text-slate-300 mt-1">Driven by automated WhatsApp refill reminders and loyalty cashbacks.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Summary & PDF Access */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="p-8 bg-[#0d2620] border border-teal-500/30 rounded-2xl text-center space-y-4">
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 font-mono text-xs uppercase font-bold rounded-full">
                      CASE STUDY COMPLETE · MAMAEARTH STRATEGY DECK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      Beauty D2C Performance Engineering
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto">
                      Engineered by Dharmesh Thakur — Senior SEO Specialist & Digital Growth Strategist.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://pdflink.to/mamaearth/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Full Mamaearth PDF Report</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={onClose}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase rounded-xl transition-all"
                      >
                        Close Deck
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-3 bg-[#0d2620] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Mamaearth Strategy Deck · Slide {currentSlide} of {totalSlides}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded font-bold transition-colors flex items-center gap-1"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
