import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, UtensilsCrossed, Download, BarChart2, TrendingUp, Sparkles, ExternalLink
} from "lucide-react";

interface HaldiramCaseStudyDeckProps {
  onClose: () => void;
}

export default function HaldiramCaseStudyDeck({ onClose }: HaldiramCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#180907] border border-orange-500/30 rounded-2xl shadow-[0_0_50px_rgba(234,88,12,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#230f0b] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-orange-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <UtensilsCrossed className="w-3.5 h-3.5 text-yellow-300" /> HALDIRAM'S
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              FMCG E-Commerce Expansion & Global Search Audit
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct PDF Link */}
            <a
              href="https://pdflink.to/haldiram/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-orange-600/20 hover:bg-orange-600 text-orange-400 hover:text-white border border-orange-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Open Official PDF Report in New Tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-orange-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-orange-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-orange-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#0d0403] font-sans relative">
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
                      <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase rounded-full">
                        CASE STUDY #19 · FMCG & PACKAGED FOODS AUDIT
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Haldiram's <span className="text-orange-400">Global D2C Growth</span>
                      </h1>
                      <p className="text-orange-300 font-bold text-sm sm:text-base mt-1">
                        Sweets, Namkeen & Ready-to-Eat Global E-Commerce Search Blueprint
                      </p>
                    </div>
                    <div className="p-4 bg-[#230f0b] border border-orange-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">FESTIVE D2C SURGE</span>
                      <span className="text-4xl font-black text-orange-400 block my-1">3.2x<span className="text-xl text-slate-400"> Order Volume</span></span>
                      <span className="text-[11px] font-mono text-orange-300">Diwali & Rakhi Peak Seasons</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-orange-400 font-mono text-xs font-bold uppercase mb-1">01 · NRI & Global Gifting</div>
                      <h4 className="font-bold text-white text-base mb-2">Cross-Border Sweet Deliveries</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        International landing page optimization for US, UK, Canada, and UAE diasporas sending festive gift hampers home to India.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-orange-400 font-mono text-xs font-bold uppercase mb-1">02 · Quick Commerce Defense</div>
                      <h4 className="font-bold text-white text-base mb-2">Blinkit & Zepto Search Synergy</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Bridging instant 10-minute snack cravings with brand search dominance on Google and marketplace platforms.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-orange-400 font-mono text-xs font-bold uppercase mb-1">03 · Restaurant & Cloud Kitchen</div>
                      <h4 className="font-bold text-white text-base mb-2">Local Thali & Chaat SEO</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Optimizing 120+ Haldiram's restaurant dine-in locations for breakfast, chole bhature, and family dinner searches.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-950/40 border border-orange-500/20 rounded-xl flex items-center justify-between">
                    <div className="text-xs text-slate-300 font-mono">
                      Official Deck URL: <span className="text-orange-400">https://pdflink.to/haldiram/</span>
                    </div>
                    <a
                      href="https://pdflink.to/haldiram/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-orange-400 hover:text-white font-mono font-bold flex items-center gap-1"
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
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PAGE 02 · FMCG AUDIT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">FMCG Snack & Mithai Search Landscape</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Identified Friction Points
                      </h3>
                      <p className="text-xs text-slate-300">
                        • <strong>Perishable Mithai Logistics:</strong> Customers anxious about shelf-life during long shipping.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>Fragmented Regional Divisions:</strong> Haldiram's Nagpur vs. Delhi split causing domain cannibalization.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>Untapped B2B Corporate Gifting:</strong> Losing bulk Diwali order search queries to generic vendors.
                      </p>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        Growth Solutions
                      </h3>
                      <p className="text-xs text-slate-300">
                        • <strong>Vacuum Sealed Freshness Guarantee:</strong> Clear shelf-life badges on all product detail pages.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>Unified Corporate Portal:</strong> Dedicated B2B tax invoice and customized tin box branding tools.
                      </p>
                      <p className="text-xs text-slate-300">
                        • <strong>Geo-Targeted Routing:</strong> Intelligently sending users to the nearest regional kitchen dispatch.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: High-Intent Sweet & Snack Keywords */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PAGE 03 · KEYWORD TARGETING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Festive & Everyday Snack Search Terms</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#230f0b] border border-orange-500/20 rounded-xl">
                      <h4 className="font-bold text-orange-300 text-sm mb-2">1. Festive Sweets & Gifting</h4>
                      <div className="space-y-1 font-mono text-[11px] text-orange-400 bg-black/40 p-2.5 rounded">
                        <div>• "send diwali sweets to india online"</div>
                        <div>• "haldiram kaju katli 1kg price"</div>
                        <div>• "best corporate diwali gift hampers"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#230f0b] border border-orange-500/20 rounded-xl">
                      <h4 className="font-bold text-orange-300 text-sm mb-2">2. Namkeen & Daily Snacks</h4>
                      <div className="space-y-1 font-mono text-[11px] text-orange-400 bg-black/40 p-2.5 rounded">
                        <div>• "haldiram bhujia packet online"</div>
                        <div>• "all in one mixture wholesale"</div>
                        <div>• "healthy roasted snacks haldiram"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#230f0b] border border-orange-500/20 rounded-xl">
                      <h4 className="font-bold text-orange-300 text-sm mb-2">3. Ready-to-Eat & Meals</h4>
                      <div className="space-y-1 font-mono text-[11px] text-orange-400 bg-black/40 p-2.5 rounded">
                        <div>• "instant dal makhani ready to eat"</div>
                        <div>• "haldiram frozen paratha combo"</div>
                        <div>• "travel food packets non perishable"</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: International SEO & Currency Geo-Routing */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PAGE 04 · CROSS-BORDER D2C</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Serving the 35M+ Global Indian Diaspora</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-4">
                    <p className="text-xs text-slate-300">
                      Multi-currency checkout supporting USD, GBP, AED, and CAD with real-time international courier tracking via DHL and FedEx.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/40 border border-orange-500/20 rounded-xl">
                        <span className="text-2xl font-black text-orange-400">4-6 Days</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Global Express Delivery</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-orange-500/20 rounded-xl">
                        <span className="text-2xl font-black text-emerald-400">$65 USD</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Average International AOV</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-orange-500/20 rounded-xl">
                        <span className="text-2xl font-black text-orange-400">99.4%</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Customs Clearance Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Local Restaurant Dine-in SEO */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PAGE 05 · RESTAURANT OUTLET SEO</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Driving Footfall to 120+ Casual Dining Outlets</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#230f0b] border border-orange-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Google Menu & Order Integration</h4>
                      <p className="text-xs text-slate-300">
                        Embedding live food photos and prices directly on Google Maps cards, increasing "Order Delivery" clicks by 54%.
                      </p>
                    </div>

                    <div className="p-5 bg-[#230f0b] border border-orange-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Highway & Airport Outlets</h4>
                      <p className="text-xs text-slate-300">
                        Geo-targeted road trip campaigns capturing travelers searching for "pure veg food on Delhi-Jaipur highway".
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Corporate Bulk Gifting Portal */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PAGE 06 · B2B CORPORATE GIFTING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Unlocking Multi-Lakh Enterprise Orders</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-orange-400 font-bold">Custom Packaging Builder:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          Enterprise clients can upload company logos to preview branded sweet gift boxes in real time.
                        </div>
                      </div>
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-emerald-400 font-bold">Dedicated Account Managers:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          Automated quotes and multi-address pan-India courier dispatch for orders over 100 boxes.
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
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PAGE 07 · RESULTS & REVENUE IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Festive Digital Revenue Milestone</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#230f0b] border border-orange-500/30 rounded-xl">
                      <span className="text-2xl font-black text-orange-400">+220%</span>
                      <h4 className="font-bold text-white text-sm mt-1">D2C Online Sweets Revenue</h4>
                      <p className="text-xs text-slate-300 mt-1">Driven by early pre-order booking campaigns and NRI diaspora gifting.</p>
                    </div>

                    <div className="p-5 bg-[#230f0b] border border-orange-500/30 rounded-xl">
                      <span className="text-2xl font-black text-emerald-400">4.2x</span>
                      <h4 className="font-bold text-white text-sm mt-1">B2B Corporate Inquiries</h4>
                      <p className="text-xs text-slate-300 mt-1">Securing high-volume recurring festive corporate contracts.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Summary & PDF Access */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="p-8 bg-[#230f0b] border border-orange-500/30 rounded-2xl text-center space-y-4">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 font-mono text-xs uppercase font-bold rounded-full">
                      CASE STUDY COMPLETE · HALDIRAM'S GLOBAL DECK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      FMCG & D2C Growth Engineering
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto">
                      Engineered by Dharmesh Thakur — Senior SEO Specialist & Digital Growth Strategist.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://pdflink.to/haldiram/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Full Haldiram PDF Report</span>
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
        <div className="px-6 py-3 bg-[#230f0b] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Haldiram's Strategy Deck · Slide {currentSlide} of {totalSlides}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold transition-colors flex items-center gap-1"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
