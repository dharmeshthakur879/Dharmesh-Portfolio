import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, Scissors, Download, BarChart2, TrendingUp, Sparkles, ExternalLink, MapPin
} from "lucide-react";

interface RaymondCaseStudyDeckProps {
  onClose: () => void;
}

export default function RaymondCaseStudyDeck({ onClose }: RaymondCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#120f09] border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(217,119,6,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#1f180f] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-amber-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Scissors className="w-3.5 h-3.5 text-amber-200" /> RAYMOND
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Premium Apparel Digital Brand Audit & Omnichannel Architecture
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct PDF Link */}
            <a
              href="https://pdflink.to/raymond/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-amber-600/20 hover:bg-amber-600 text-amber-400 hover:text-white border border-amber-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Open Official PDF Report in New Tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#090704] font-sans relative">
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
                      <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase rounded-full">
                        CASE STUDY #18 · LUXURY APPAREL & OMNICHANNEL AUDIT
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Raymond <span className="text-amber-400">The Complete Man</span>
                      </h1>
                      <p className="text-amber-300 font-bold text-sm sm:text-base mt-1">
                        Luxury Suiting & Bespoke Tailoring Omnichannel Search Strategy
                      </p>
                    </div>
                    <div className="p-4 bg-[#1f180f] border border-amber-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">STORE VISIT UPLIFT</span>
                      <span className="text-4xl font-black text-amber-400 block my-1">+165%<span className="text-xl text-slate-400"> Walk-ins</span></span>
                      <span className="text-[11px] font-mono text-amber-300">High-Value Custom Tailoring</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-amber-400 font-mono text-xs font-bold uppercase mb-1">01 · Premium Heritage</div>
                      <h4 className="font-bold text-white text-base mb-2">100-Year Fabric Brand Authority</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Transitioning India's most trusted luxury suiting brand into the modern search era with bespoke appointment booking funnels.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-amber-400 font-mono text-xs font-bold uppercase mb-1">02 · Hyperlocal Tailor Locators</div>
                      <h4 className="font-bold text-white text-base mb-2">1,500+ Franchise Store Citations</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Optimizing "The Raymond Shop" local Google Business Profiles with master tailor reviews, wedding suit catalogs, and direct appointments.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-amber-400 font-mono text-xs font-bold uppercase mb-1">03 · Wedding Season Intent</div>
                      <h4 className="font-bold text-white text-base mb-2">Groom & Luxury Wedding Suiting</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Capturing high-ticket Q3/Q4 wedding searches with style guides, fabric weight calculators, and custom monogramming pages.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-950/40 border border-amber-500/20 rounded-xl flex items-center justify-between">
                    <div className="text-xs text-slate-300 font-mono">
                      Official Deck URL: <span className="text-amber-400">https://pdflink.to/raymond/</span>
                    </div>
                    <a
                      href="https://pdflink.to/raymond/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-amber-400 hover:text-white font-mono font-bold flex items-center gap-1"
                    >
                      <span>Open Standalone PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Omnichannel Customer Journey */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">PAGE 02 · CUSTOMER JOURNEY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">From Online Discovery to In-Store Master Fit</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Globe className="w-5 h-5 text-amber-400" />
                        Digital Touchpoint
                      </h3>
                      <p className="text-xs text-slate-300">
                        • 3D Virtual Fabric Swatch Explorer (Cashmere, Merino Wool, Linen).
                      </p>
                      <p className="text-xs text-slate-300">
                        • "Book a Master Tailor at Home" digital appointment workflow.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Wedding season bridal & groom lookbooks with curated color palettes.
                      </p>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-amber-400" />
                        Physical Store Conversion
                      </h3>
                      <p className="text-xs text-slate-300">
                        • Dedicated stylist ready with customer's digital moodboard upon arrival.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Average basket size increase from ₹8,500 to ₹24,000+ for tailored suiting.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Automated SMS and WhatsApp fit update notifications.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: High-Intent Suiting Keywords */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">PAGE 03 · KEYWORD STRATEGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">High-Ticket Luxury Search Mapping</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#1f180f] border border-amber-500/20 rounded-xl">
                      <h4 className="font-bold text-amber-300 text-sm mb-2">1. Bespoke & Tailoring</h4>
                      <div className="space-y-1 font-mono text-[11px] text-amber-400 bg-black/40 p-2.5 rounded">
                        <div>• "custom tailored suits near me"</div>
                        <div>• "raymond custom tailoring price"</div>
                        <div>• "best bespoke suit makers in mumbai"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#1f180f] border border-amber-500/20 rounded-xl">
                      <h4 className="font-bold text-amber-300 text-sm mb-2">2. Luxury Wedding Attire</h4>
                      <div className="space-y-1 font-mono text-[11px] text-amber-400 bg-black/40 p-2.5 rounded">
                        <div>• "tuxedo suit for groom raymond"</div>
                        <div>• "bandhgala suit design for wedding"</div>
                        <div>• "premium sherwani fabric raymond"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#1f180f] border border-amber-500/20 rounded-xl">
                      <h4 className="font-bold text-amber-300 text-sm mb-2">3. Fabric & Material Queries</h4>
                      <div className="space-y-1 font-mono text-[11px] text-amber-400 bg-black/40 p-2.5 rounded">
                        <div>• "pure wool suit fabric price per meter"</div>
                        <div>• "super 150s merino wool suit"</div>
                        <div>• "linen shirt fabric for summer"</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Local SEO & Store Locators */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">PAGE 04 · LOCAL SEO INFRASTRUCTURE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Domination Across 1,500+ Franchise Locations</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Deploying hyper-specific city and neighborhood landing pages (e.g., <code className="text-amber-300 font-mono">/stores/delhi/connaught-place/</code>) containing Geo-tagged images, localized FAQs, and live appointment booking widgets.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/40 border border-amber-500/20 rounded-xl">
                        <span className="text-2xl font-black text-amber-400">4.8★</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Average Store Rating</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-amber-500/20 rounded-xl">
                        <span className="text-2xl font-black text-amber-400">92%</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Local 3-Pack Presence</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-amber-500/20 rounded-xl">
                        <span className="text-2xl font-black text-amber-400">+78K</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Monthly Driving Directions</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Brand Heritage & Storytelling */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">PAGE 05 · BRAND STORYTELLING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Reinventing "The Complete Man" for Modern Gen-Z & Millennials</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#1f180f] border border-amber-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Modern Masculinity & Sustainability</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Content hub highlighting eco-friendly dyes, zero-waste bespoke tailoring, and heritage Indian artisanal craftsmanship.
                      </p>
                    </div>

                    <div className="p-5 bg-[#1f180f] border border-amber-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Corporate & Startup Wardrobe Consultations</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        B2B executive styling guides targeting C-suite leaders and young founders navigating high-stakes investor pitch presentations.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Conversion Rate Optimization */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">PAGE 06 · APPOINTMENT CRO</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Frictionless Bespoke Tailoring Bookings</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-amber-400 font-bold">Old Appointment Flow:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          12-field form requiring measurement details → 68% drop-off rate.
                        </div>
                      </div>
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-emerald-400 font-bold">New 2-Click WhatsApp Flow:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          Direct WhatsApp calendar lock with instant store manager confirmation → 89% completion rate.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Measurable Business ROI */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">PAGE 07 · BUSINESS IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Key Results & Performance Metrics</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#1f180f] border border-amber-500/30 rounded-xl">
                      <span className="text-2xl font-black text-amber-400">+165%</span>
                      <h4 className="font-bold text-white text-sm mt-1">Qualified In-Store Walk-ins</h4>
                      <p className="text-xs text-slate-300 mt-1">Directly attributed to localized high-intent wedding suiting queries.</p>
                    </div>

                    <div className="p-5 bg-[#1f180f] border border-amber-500/30 rounded-xl">
                      <span className="text-2xl font-black text-emerald-400">₹45,000+</span>
                      <h4 className="font-bold text-white text-sm mt-1">Average Wedding Basket Size</h4>
                      <p className="text-xs text-slate-300 mt-1">Driven by full 3-piece bespoke suiting & monogrammed accessory packages.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Summary & PDF Access */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="p-8 bg-[#1f180f] border border-amber-500/30 rounded-2xl text-center space-y-4">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 font-mono text-xs uppercase font-bold rounded-full">
                      CASE STUDY COMPLETE · RAYMOND LUXURY DECK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      Luxury Brand & Omnichannel Growth
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto">
                      Engineered by Dharmesh Thakur — Senior SEO Specialist & Digital Growth Strategist.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://pdflink.to/raymond/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Full Raymond PDF Report</span>
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
        <div className="px-6 py-3 bg-[#1f180f] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Raymond Digital Strategy Deck · Slide {currentSlide} of {totalSlides}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded font-bold transition-colors flex items-center gap-1"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
