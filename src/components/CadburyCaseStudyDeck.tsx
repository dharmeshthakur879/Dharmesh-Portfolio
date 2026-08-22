import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, Gift, Download, BarChart2, TrendingUp, Sparkles, ExternalLink, Heart
} from "lucide-react";

interface CadburyCaseStudyDeckProps {
  onClose: () => void;
}

export default function CadburyCaseStudyDeck({ onClose }: CadburyCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#13071c] border border-purple-500/30 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#210c31] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-purple-700 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5 text-yellow-300" /> CADBURY
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Festive Campaign & Viral Confectionery Engagement Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct PDF Link */}
            <a
              href="https://pdflink.to/cadbury/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Open Official PDF Report in New Tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-purple-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-purple-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-purple-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#09030e] font-sans relative">
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
                      <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase rounded-full">
                        CASE STUDY #22 · CONFECTIONERY & VIRAL FESTIVE CAMPAIGNS
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Cadbury <span className="text-purple-400">Celebrations</span>
                      </h1>
                      <p className="text-purple-300 font-bold text-sm sm:text-base mt-1">
                        "Kuch Meetha Ho Jaaye" Festive AI Personalized Gifting Strategy
                      </p>
                    </div>
                    <div className="p-4 bg-[#210c31] border border-purple-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">VIRAL REACH & ENGAGEMENT</span>
                      <span className="text-4xl font-black text-purple-400 block my-1">85M+<span className="text-xl text-slate-400"> Impressions</span></span>
                      <span className="text-[11px] font-mono text-purple-300">Festive Season Reach</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-purple-400 font-mono text-xs font-bold uppercase mb-1">01 · Emotional Branding</div>
                      <h4 className="font-bold text-white text-base mb-2">Modernizing Traditional Gifting</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Positioning Cadbury Celebrations chocolate gift packs as the go-to alternative to traditional Indian sweets during Diwali, Raksha Bandhan, and New Year.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-purple-400 font-mono text-xs font-bold uppercase mb-1">02 · Hyperlocal AI Video Gifting</div>
                      <h4 className="font-bold text-white text-base mb-2">Personalized Celebrity AI Ads</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Interactive microsites enabling consumers to generate personalized video greetings from brand ambassadors for their local neighborhood shopkeepers.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-purple-400 font-mono text-xs font-bold uppercase mb-1">03 · Quick Commerce Domination</div>
                      <h4 className="font-bold text-white text-base mb-2">10-Minute Festive Rush Intercept</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Sponsored brand banner placements across Zepto, Blinkit, and Swiggy Instamart during the critical 48-hour festive gifting window.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-950/40 border border-purple-500/20 rounded-xl flex items-center justify-between">
                    <div className="text-xs text-slate-300 font-mono">
                      Official Deck URL: <span className="text-purple-400">https://pdflink.to/cadbury/</span>
                    </div>
                    <a
                      href="https://pdflink.to/cadbury/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-purple-400 hover:text-white font-mono font-bold flex items-center gap-1"
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
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase">PAGE 02 · CONFECTIONERY LANDSCAPE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Winning the ₹15,000 Cr+ Indian Festive Gifting Market</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Campaign Challenges
                      </h3>
                      <p className="text-xs text-slate-300">
                        • Short 10-day conversion peak where 65% of annual gifting sales occur.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Premium chocolate competitors (Ferrero Rocher, Lindt) attacking high-end gifting.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Traditional local sweet shop loyalty across Tier 2 and Tier 3 cities.
                      </p>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        Strategic Pillars
                      </h3>
                      <p className="text-xs text-slate-300">
                        • Emotional storytelling celebrating local community kirana stores.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Personalized custom name sleeve print orders on Cadbury D2C portal.
                      </p>
                      <p className="text-xs text-slate-300">
                        • High-frequency countdown reminder push on YouTube, Meta & OTT platforms.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: High-Intent Gifting Keywords */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase">PAGE 03 · KEYWORD TARGETING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">High-Intent Festive & Chocolate Search Matrix</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#210c31] border border-purple-500/20 rounded-xl">
                      <h4 className="font-bold text-purple-300 text-sm mb-2">1. Festive Gift Boxes</h4>
                      <div className="space-y-1 font-mono text-[11px] text-purple-400 bg-black/40 p-2.5 rounded">
                        <div>• "cadbury celebrations gift pack price"</div>
                        <div>• "diwali chocolate gift box online delivery"</div>
                        <div>• "best rakhi gift for sister cadbury"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#210c31] border border-purple-500/20 rounded-xl">
                      <h4 className="font-bold text-purple-300 text-sm mb-2">2. Personalized Gifting</h4>
                      <div className="space-y-1 font-mono text-[11px] text-purple-400 bg-black/40 p-2.5 rounded">
                        <div>• "personalized cadbury silk bar with photo"</div>
                        <div>• "customized chocolate box for anniversary"</div>
                        <div>• "send birthday chocolate hamper india"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#210c31] border border-purple-500/20 rounded-xl">
                      <h4 className="font-bold text-purple-300 text-sm mb-2">3. Silk & Premium Range</h4>
                      <div className="space-y-1 font-mono text-[11px] text-purple-400 bg-black/40 p-2.5 rounded">
                        <div>• "dairy milk silk hazelnut bar price"</div>
                        <div>• "cadbury dark chocolate bournville"</div>
                        <div>• "cadbury oreo chocolate combo pack"</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: AI Personalized Gifting Microsite */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase">PAGE 04 · AI ENGAGEMENT MICROSITE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Interactive Generative AI Video Personalization</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Consumers customize digital greeting cards with their recipient's name and favorite childhood memories. The AI automatically compiles a custom animated video greeting that can be shared instantly via WhatsApp and Instagram DMs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/40 border border-purple-500/20 rounded-xl">
                        <span className="text-2xl font-black text-purple-400">1.8M+</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">AI Videos Generated</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-purple-500/20 rounded-xl">
                        <span className="text-2xl font-black text-emerald-400">4.9x</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Social Share Multiplier</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-purple-500/20 rounded-xl">
                        <span className="text-2xl font-black text-purple-400">₹0 CAC</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Earned Viral Media</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Quick Commerce Synchronization */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase">PAGE 05 · QUICK COMMERCE SYNERGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Instant 10-Minute Delivery Interception</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#210c31] border border-purple-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Cart Upsell Placements</h4>
                      <p className="text-xs text-slate-300">
                        Suggesting ₹99 Cadbury Celebrations minis as an impulse add-on on Zepto and Blinkit checkout screens for users ordering festive lights and puja items.
                      </p>
                    </div>

                    <div className="p-5 bg-[#210c31] border border-purple-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Dark Store Stock Prioritization</h4>
                      <p className="text-xs text-slate-300">
                        Geo-targeted demand forecasting ensuring zero out-of-stock events across 800+ dark store hubs in top 15 metros.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: D2C Custom Pack Personalizer */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase">PAGE 06 · D2C PERSONALIZATION ENGINE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Custom Photo & Message Box Printing</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-purple-400 font-bold">Interactive 3D Box Preview:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          Users upload family photos to see real-time 3D rotating previews of their personalized Celebrations tin box.
                        </div>
                      </div>
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-emerald-400 font-bold">AOV & Margin Surge:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          Customized tin packs sold at ₹799 (vs ₹250 standard pack), generating 3.2x gross margin per unit.
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
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase">PAGE 07 · RESULTS & MARKET SHARE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Festive Market Leadership Retained</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#210c31] border border-purple-500/30 rounded-xl">
                      <span className="text-2xl font-black text-purple-400">71%</span>
                      <h4 className="font-bold text-white text-sm mt-1">Share of Voice in Chocolate Gifting</h4>
                      <p className="text-xs text-slate-300 mt-1">Dominated across digital search queries and festive social media conversations.</p>
                    </div>

                    <div className="p-5 bg-[#210c31] border border-purple-500/30 rounded-xl">
                      <span className="text-2xl font-black text-emerald-400">+28%</span>
                      <h4 className="font-bold text-white text-sm mt-1">Total Festive Gifting Revenue Lift</h4>
                      <p className="text-xs text-slate-300 mt-1">Driven by online D2C orders and rapid quick-commerce replenishment.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Summary & PDF Access */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="p-8 bg-[#210c31] border border-purple-500/30 rounded-2xl text-center space-y-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 font-mono text-xs uppercase font-bold rounded-full">
                      CASE STUDY COMPLETE · CADBURY CELEBRATIONS DECK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      Festive Viral Engagement Engineering
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto">
                      Engineered by Dharmesh Thakur — Senior SEO Specialist & Digital Growth Strategist.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://pdflink.to/cadbury/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Full Cadbury PDF Report</span>
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
        <div className="px-6 py-3 bg-[#210c31] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Cadbury Strategy Deck · Slide {currentSlide} of {totalSlides}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-purple-700 hover:bg-purple-600 text-white rounded font-bold transition-colors flex items-center gap-1"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
