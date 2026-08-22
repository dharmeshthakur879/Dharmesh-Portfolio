import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, ShoppingCart, Download, BarChart2, TrendingUp, Sparkles, ExternalLink
} from "lucide-react";

interface FlipkartCaseStudyDeckProps {
  onClose: () => void;
}

export default function FlipkartCaseStudyDeck({ onClose }: FlipkartCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#07101e] border border-blue-500/30 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0c1b33] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-[#2874F0] text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-yellow-300" /> FLIPKART
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Big Billion Days Organic Growth & Festive SEO Architecture
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct PDF Link */}
            <a
              href="https://pdflink.to/flipkart/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Open Official PDF Report in New Tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-blue-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-blue-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-blue-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#040913] font-sans relative">
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
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase rounded-full">
                        CASE STUDY #17 · E-COMMERCE FESTIVE SEARCH ARCHITECTURE
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Flipkart <span className="text-[#FFE500]">Big Billion Days</span>
                      </h1>
                      <p className="text-blue-300 font-bold text-sm sm:text-base mt-1">
                        High-Volume Festive Traffic Infrastructure & Organic Search Domination
                      </p>
                    </div>
                    <div className="p-4 bg-[#0c1b33] border border-blue-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">TRAFFIC SURGE PREPARATION</span>
                      <span className="text-4xl font-black text-yellow-400 block my-1">+240%<span className="text-xl text-slate-400"> Surge</span></span>
                      <span className="text-[11px] font-mono text-blue-300">Festive Keyword Visibility</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-blue-400 font-mono text-xs font-bold uppercase mb-1">01 · Evergreen Landing Hubs</div>
                      <h4 className="font-bold text-white text-base mb-2">Preserving URL Authority Year-Round</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Stopping annual URL churn by maintaining permanent `/the-big-billion-days-store` evergreen hierarchy to aggregate backlinks and search rank history.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-blue-400 font-mono text-xs font-bold uppercase mb-1">02 · Category Cluster Crawlability</div>
                      <h4 className="font-bold text-white text-base mb-2">Automated Dynamic Internal Linking</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Real-time deal indexing using faceted search SEO tags, instant price-drop schemas, and product availability markup.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-blue-400 font-mono text-xs font-bold uppercase mb-1">03 · AEO & Generative Search</div>
                      <h4 className="font-bold text-white text-base mb-2">AI Search Overview Domination</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Structuring festive FAQs and comparison tables for instant citation across Google AI Overviews, Perplexity, and Gemini.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-950/40 border border-blue-500/20 rounded-xl flex items-center justify-between">
                    <div className="text-xs text-slate-300 font-mono">
                      Official Deck URL: <span className="text-blue-400">https://pdflink.to/flipkart/</span>
                    </div>
                    <a
                      href="https://pdflink.to/flipkart/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-400 hover:text-white font-mono font-bold flex items-center gap-1"
                    >
                      <span>Open Standalone PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Strategic Problem Statement */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PAGE 02 · CHALLENGES & PITFALLS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Festive E-Commerce SEO Challenges</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Common Industry Failure Modes
                      </h3>
                      <p className="text-xs text-slate-300">
                        • <strong>URL Deletion Post-Sale:</strong> 404 errors erasing link equity built over the campaign.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>Heavy Javascript rendering:</strong> Crawlers missing flash deals during peak hours.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>Aggressive competitor PPC:</strong> Amazon and Quick-Com apps capturing intent keywords.
                      </p>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        Our Strategic Framework
                      </h3>
                      <p className="text-xs text-slate-300">
                        • <strong>365-Day Pre-Warm Hubs:</strong> Countdown timers and early-bird email subscription forms.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>Edge CDN Server-Side Rendering:</strong> Delivering pre-rendered HTML to search bots in &lt; 80ms.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>High-Intent Search Defense:</strong> Tiered bidding on brand name + discount query keywords.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Keyword Architecture */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PAGE 03 · FESTIVE KEYWORD MATRIX</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">High-Volume Festive Intent Clusters</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#0c1b33] border border-blue-500/20 rounded-xl">
                      <h4 className="font-bold text-yellow-300 text-sm mb-2">1. Event Brand Terms</h4>
                      <div className="space-y-1 font-mono text-[11px] text-blue-300 bg-black/40 p-2.5 rounded">
                        <div>• "flipkart big billion days 2026 date"</div>
                        <div>• "flipkart sale offers today"</div>
                        <div>• "flipkart plus early access time"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0c1b33] border border-blue-500/20 rounded-xl">
                      <h4 className="font-bold text-yellow-300 text-sm mb-2">2. Product + Sale Intent</h4>
                      <div className="space-y-1 font-mono text-[11px] text-blue-300 bg-black/40 p-2.5 rounded">
                        <div>• "iphone 16 price in big billion days"</div>
                        <div>• "best 4k smart tv deal flipkart"</div>
                        <div>• "laptop exchange discount sale"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0c1b33] border border-blue-500/20 rounded-xl">
                      <h4 className="font-bold text-yellow-300 text-sm mb-2">3. Payment & Bank Offers</h4>
                      <div className="space-y-1 font-mono text-[11px] text-blue-300 bg-black/40 p-2.5 rounded">
                        <div>• "flipkart axis bank 10% instant discount"</div>
                        <div>• "no cost emi offers flipkart sale"</div>
                        <div>• "hdfc credit card flipkart coupon code"</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Structured Data & Schema */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PAGE 04 · STRUCTURED DATA & RICH SNIPPETS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Automated Merchant Schema Implementation</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Deploying granular <code className="text-yellow-300 font-mono">Product</code>, <code className="text-yellow-300 font-mono">AggregateOffer</code>, and <code className="text-yellow-300 font-mono">SpecialAnnouncement</code> schema markup to trigger Google SERP price drop badges and star ratings.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/50 border border-blue-500/20 rounded-lg">
                        <span className="text-xs font-mono text-emerald-400 font-bold">✓ Rich Results Captured:</span>
                        <div className="text-xs text-slate-300 mt-2 space-y-1">
                          <div>• Green "Sale Price" tags directly on Google SERP</div>
                          <div>• "In Stock" live delivery indicators</div>
                          <div>• Star rating snippets from 100,000+ verified buyers</div>
                        </div>
                      </div>
                      <div className="p-4 bg-black/50 border border-blue-500/20 rounded-lg">
                        <span className="text-xs font-mono text-yellow-400 font-bold">⚡ CTR Impact:</span>
                        <div className="text-xs text-slate-300 mt-2 space-y-1">
                          <div>• +38% CTR increase on Google organic listings</div>
                          <div>• Top 3 ranking stability across 120 key electronics terms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Mobile App Deep-Linking */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PAGE 05 · APP INDEXING & DEEP-LINKING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Seamless Web-to-App Conversion Flow</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#0c1b33] border border-blue-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Android App Links & iOS Universal Links</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Direct routing from Google Search results straight into the Flipkart native application cart with preserved referral attributes and coupon pre-application.
                      </p>
                    </div>

                    <div className="p-5 bg-[#0c1b33] border border-blue-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Smart Fallback Smart Banners</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Lightweight web checkout option for non-app users ensuring zero drop-off on low-bandwidth Tier 3 mobile devices.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Performance & Core Web Vitals */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PAGE 06 · INFRASTRUCTURE & SPEED</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Passing Core Web Vitals at 100M+ Requests/Hour</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <span className="text-3xl font-black text-emerald-400">&lt; 0.9s</span>
                      <span className="block text-xs font-mono text-slate-300 mt-1 uppercase">Largest Contentful Paint (LCP)</span>
                    </div>
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <span className="text-3xl font-black text-emerald-400">&lt; 25ms</span>
                      <span className="block text-xs font-mono text-slate-300 mt-1 uppercase">Interaction to Next Paint (INP)</span>
                    </div>
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <span className="text-3xl font-black text-emerald-400">0.00</span>
                      <span className="block text-xs font-mono text-slate-300 mt-1 uppercase">Cumulative Layout Shift (CLS)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Campaign Results & Uplift */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PAGE 07 · BUSINESS IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Festive Season Performance Breakdown</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#0c1b33] border border-blue-500/30 rounded-xl">
                      <span className="text-2xl font-black text-yellow-400">+180M</span>
                      <h4 className="font-bold text-white text-sm mt-1">Organic Festive Page Impressions</h4>
                      <p className="text-xs text-slate-300 mt-1">Generated via evergreen hub authority and faceted search keywords.</p>
                    </div>

                    <div className="p-5 bg-[#0c1b33] border border-blue-500/30 rounded-xl">
                      <span className="text-2xl font-black text-emerald-400">-42%</span>
                      <h4 className="font-bold text-white text-sm mt-1">Customer Acquisition Cost</h4>
                      <p className="text-xs text-slate-300 mt-1">Blended CAC reduction due to massive organic search traffic volume.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Summary & PDF Access */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="p-8 bg-[#0c1b33] border border-blue-500/30 rounded-2xl text-center space-y-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 font-mono text-xs uppercase font-bold rounded-full">
                      CASE STUDY COMPLETE · FLIPKART BBD DECK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      Scalable E-Commerce Growth Systems
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto">
                      Engineered by Dharmesh Thakur — Senior SEO Specialist & Digital Growth Strategist.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://pdflink.to/flipkart/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-[#FFE500] hover:bg-yellow-300 text-black font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Full Flipkart PDF Report</span>
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
        <div className="px-6 py-3 bg-[#0c1b33] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Flipkart Big Billion Days Strategy Deck · Slide {currentSlide} of {totalSlides}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-[#2874F0] hover:bg-blue-600 text-white rounded font-bold transition-colors flex items-center gap-1"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
