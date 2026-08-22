import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, Smartphone, Download, BarChart2, TrendingUp, Sparkles, ExternalLink
} from "lucide-react";

interface OppoCaseStudyDeckProps {
  onClose: () => void;
}

export default function OppoCaseStudyDeck({ onClose }: OppoCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#07130e] border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0a1e16] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-emerald-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" /> OPPO
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Smartphone Launch & Digital Media Campaign Audit
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct PDF Link */}
            <a
              href="https://pdflink.to/oppo/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Open Official PDF Report in New Tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#040c09] font-sans relative">
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
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase rounded-full">
                        CASE STUDY #16 · SMARTPHONE LAUNCH & DIGITAL AUDIT
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Oppo India <span className="text-emerald-400">Launch Blueprint</span>
                      </h1>
                      <p className="text-emerald-300 font-bold text-sm sm:text-base mt-1">
                        High-Impact Digital Campaign & Gen-Z Paid Media Funnel Strategy
                      </p>
                    </div>
                    <div className="p-4 bg-[#0a1e16] border border-emerald-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">CAMPAIGN ROI POTENTIAL</span>
                      <span className="text-4xl font-black text-emerald-400 block my-1">4.5x<span className="text-xl text-slate-400"> ROAS</span></span>
                      <span className="text-[11px] font-mono text-emerald-300">Launch Window Scaling</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-emerald-400 font-mono text-xs font-bold uppercase mb-1">01 · Target Audience</div>
                      <h4 className="font-bold text-white text-base mb-2">Gen-Z & Mobile Photography Enthusiasts</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Precision targeting across tier 1 and tier 2 cities for portrait camera flagships, targeting users upgrading from entry-level smartphones.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-emerald-400 font-mono text-xs font-bold uppercase mb-1">02 · Channel Mix</div>
                      <h4 className="font-bold text-white text-base mb-2">Multi-Touch Search & Paid Social</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        YouTube shorts creator collaborations, Instagram Reels dynamic product ads, and Google Search high-intent launch keyword domination.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-emerald-400 font-mono text-xs font-bold uppercase mb-1">03 · Key Outcome</div>
                      <h4 className="font-bold text-white text-base mb-2">Pre-Order Conversion Spike</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Lowering customer acquisition cost (CAC) by 32% while driving direct-to-retail store visits and online pre-bookings.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-950/40 border border-emerald-500/20 rounded-xl flex items-center justify-between">
                    <div className="text-xs text-slate-300 font-mono">
                      Official Deck URL: <span className="text-emerald-400">https://pdflink.to/oppo/</span>
                    </div>
                    <a
                      href="https://pdflink.to/oppo/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-emerald-400 hover:text-white font-mono font-bold flex items-center gap-1"
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
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 02 · STRATEGIC LANDSCAPE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Smartphones in India: High-Competition Battleground</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-emerald-400" />
                        Core Market Challenges
                      </h3>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span><strong>Ad Fatigue:</strong> Consumers are bombarded with repetitive smartphone spec comparisons.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span><strong>Short Launch Windows:</strong> 70% of flagship launch sales occur within the first 14 days of release.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span><strong>Multi-Channel Leakage:</strong> Users research on Google, view reels on IG, and buy offline or on Amazon/Flipkart.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-400" />
                        Strategic Solutions
                      </h3>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span><strong>Lifestyle Hook Ads:</strong> Focus on real-life low-light portraits and AI studio editing over raw megapixel numbers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span><strong>Hyperlocal Store Locators:</strong> Google Maps Local Ads targeting users within 5km of Oppo authorized stores.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span><strong>Dynamic Remarketing:</strong> High-frequency retargeting to cart-abandoners with exclusive launch bundles.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Search & PPC Architecture */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 03 · SEARCH & PPC ARCHITECTURE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Full-Funnel Google Search Keyword Matrix</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#0a1e16] border border-emerald-500/20 rounded-xl">
                      <h4 className="font-bold text-emerald-300 text-sm mb-2">1. Brand & Launch Intent</h4>
                      <p className="text-[11px] text-slate-300 mb-3">Exact Match protection against competitors bidding on Oppo launch names.</p>
                      <div className="space-y-1 font-mono text-[11px] text-emerald-400 bg-black/40 p-2.5 rounded">
                        <div>• [oppo reno series price india]</div>
                        <div>• [oppo find n3 flip buy online]</div>
                        <div>• [oppo official launch offers]</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0a1e16] border border-emerald-500/20 rounded-xl">
                      <h4 className="font-bold text-emerald-300 text-sm mb-2">2. Category & Feature Terms</h4>
                      <p className="text-[11px] text-slate-300 mb-3">High-intent camera and battery life seekers searching for the best device.</p>
                      <div className="space-y-1 font-mono text-[11px] text-emerald-400 bg-black/40 p-2.5 rounded">
                        <div>• "best portrait camera phone 2026"</div>
                        <div>• "fast charging 5g phone under 30k"</div>
                        <div>• "top slim design smartphones"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0a1e16] border border-emerald-500/20 rounded-xl">
                      <h4 className="font-bold text-emerald-300 text-sm mb-2">3. Comparison & Switchers</h4>
                      <p className="text-[11px] text-slate-300 mb-3">Intercepting users considering Samsung, OnePlus, and Vivo competitors.</p>
                      <div className="space-y-1 font-mono text-[11px] text-emerald-400 bg-black/40 p-2.5 rounded">
                        <div>• "oppo vs vivo camera test"</div>
                        <div>• "oppo reno vs oneplus nord"</div>
                        <div>• "best alternative to samsung a55"</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Meta & Social Media Strategy */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 04 · PAID SOCIAL & CREATIVE HOOKS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">High-CTR Creative Architecture on Meta & YouTube</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Visual Hooks (First 3 Seconds)</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        Split-screen night portrait test showing standard phone vs. Oppo AI Ultra-Night mode in low-light café settings.
                      </p>
                      <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 rounded text-xs text-emerald-300 font-mono">
                        CTR Boost: +48% higher engagement than static billboard banners.
                      </div>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Offer Stack & Urgency Drivers</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">
                        Launch day exchange bonus, zero down payment EMI, and complimentary wireless earbuds for the first 5,000 orders.
                      </p>
                      <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 rounded text-xs text-emerald-300 font-mono">
                        Conversion Lift: +28% pre-order deposit velocity.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Omnichannel Retailing & Local SEO */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 05 · OMNICHANNEL & STORE SYNERGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Connecting Online Search to Offline Store Walk-Ins</h2>
                  </div>

                  <div className="p-5 bg-[#0a1e16] border border-emerald-500/20 rounded-xl space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/40 rounded-xl">
                        <span className="text-2xl font-black text-emerald-400">1,200+</span>
                        <span className="block text-[11px] text-slate-300 font-mono uppercase mt-1">Stores Optimized on GMB</span>
                      </div>
                      <div className="p-4 bg-black/40 rounded-xl">
                        <span className="text-2xl font-black text-emerald-400">3.8x</span>
                        <span className="block text-[11px] text-slate-300 font-mono uppercase mt-1">Directions & Call Clicks</span>
                      </div>
                      <div className="p-4 bg-black/40 rounded-xl">
                        <span className="text-2xl font-black text-emerald-400">&lt; 15 min</span>
                        <span className="block text-[11px] text-slate-300 font-mono uppercase mt-1">Local Lead Callback SLA</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Conversion Funnel Optimization */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 06 · CONVERSION FUNNEL</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Landing Page CRO & Checkout Friction Removal</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">1-Click Pin Code Delivery Estimator</h4>
                      <p className="text-xs text-slate-300">
                        Shows same-day delivery availability based on user IP and pin code, increasing checkout initiation by 34%.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Interactive Color & Spec Selector</h4>
                      <p className="text-xs text-slate-300">
                        3D interactive 360-degree render viewer allowing users to rotate the device and preview camera finishes before purchasing.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: 90-Day Execution Roadmap */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 07 · EXECUTION ROADMAP</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">3-Phase Campaign Implementation Plan</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold rounded">PHASE 1 (Day 1-14)</span>
                      <h4 className="font-bold text-white text-sm mt-2 mb-1">Teaser & Pre-Booking</h4>
                      <p className="text-xs text-slate-300">Blind camera challenges, VIP pass signups, and Google Search capture.</p>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold rounded">PHASE 2 (Day 15-45)</span>
                      <h4 className="font-bold text-white text-sm mt-2 mb-1">Launch Surge & Scale</h4>
                      <p className="text-xs text-slate-300">Mass media push, creator reviews, performance max ads, and festive bundles.</p>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold rounded">PHASE 3 (Day 46-90)</span>
                      <h4 className="font-bold text-white text-sm mt-2 mb-1">Sustained Dominance</h4>
                      <p className="text-xs text-slate-300">Retargeting, customer review UGC, exchange promotions, and accessory cross-sells.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Key Takeaways & Contact */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="p-8 bg-[#0a1e16] border border-emerald-500/30 rounded-2xl text-center space-y-4">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-mono text-xs uppercase font-bold rounded-full">
                      CASE STUDY COMPLETE · STRATEGY DECK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      Ready to Scale Your Brand Campaigns?
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto">
                      Engineered by Dharmesh Thakur — Senior SEO Specialist & Digital Growth Strategist.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://pdflink.to/oppo/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Full Oppo PDF Report</span>
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
        <div className="px-6 py-3 bg-[#0a1e16] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Oppo India Launch Case Study Deck · Slide {currentSlide} of {totalSlides}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition-colors flex items-center gap-1"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
