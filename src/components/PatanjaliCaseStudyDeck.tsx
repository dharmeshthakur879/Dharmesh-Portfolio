import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, Leaf, Download, BarChart2, TrendingUp, Sparkles, ExternalLink
} from "lucide-react";

interface PatanjaliCaseStudyDeckProps {
  onClose: () => void;
}

export default function PatanjaliCaseStudyDeck({ onClose }: PatanjaliCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 8;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0a140b] border border-green-500/30 rounded-2xl shadow-[0_0_50px_rgba(34,197,94,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#112213] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-green-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-yellow-300" /> PATANJALI
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Ayurveda FMCG Digital Architecture & Multi-Category Search Audit
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct PDF Link */}
            <a
              href="https://pdflink.to/patanjali/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-green-600/20 hover:bg-green-600 text-green-400 hover:text-white border border-green-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Open Official PDF Report in New Tab"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-green-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-green-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-green-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#050b06] font-sans relative">
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
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono font-bold uppercase rounded-full">
                        CASE STUDY #20 · AYURVEDA FMCG & HEALTHCARE AUDIT
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Patanjali <span className="text-green-400">Ayurveda Scale</span>
                      </h1>
                      <p className="text-green-300 font-bold text-sm sm:text-base mt-1">
                        Prakriti Healthcare, Herbal Cosmetics & Food Search Optimization
                      </p>
                    </div>
                    <div className="p-4 bg-[#112213] border border-green-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">AYURVEDA SEARCH SHARE</span>
                      <span className="text-4xl font-black text-green-400 block my-1">48%<span className="text-xl text-slate-400"> SOV</span></span>
                      <span className="text-[11px] font-mono text-green-300">Natural Herbal Remedies</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-green-400 font-mono text-xs font-bold uppercase mb-1">01 · Trust & Compliance</div>
                      <h4 className="font-bold text-white text-base mb-2">Scientific E-A-T & AYUSH Backing</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Medical author bios, clinical research citations, and lab-tested purity reports to establish high trust on Google Health algorithms.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-green-400 font-mono text-xs font-bold uppercase mb-1">02 · Multi-Category Structure</div>
                      <h4 className="font-bold text-white text-base mb-2">Separating Pharma, Food & Personal Care</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Architecting distinct taxonomy hubs for Patanjali Divya Pharmacy medicines vs. Coronil vs. Dant Kanti toothpaste vs. Cow Ghee.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-green-400 font-mono text-xs font-bold uppercase mb-1">03 · Arogya Kendra Local SEO</div>
                      <h4 className="font-bold text-white text-base mb-2">5,000+ Wellness Clinic Map Presence</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Connecting online doctor consultations with direct in-clinic Ayurvedic Vaidya pulse diagnosis appointments.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-950/40 border border-green-500/20 rounded-xl flex items-center justify-between">
                    <div className="text-xs text-slate-300 font-mono">
                      Official Deck URL: <span className="text-green-400">https://pdflink.to/patanjali/</span>
                    </div>
                    <a
                      href="https://pdflink.to/patanjali/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-green-400 hover:text-white font-mono font-bold flex items-center gap-1"
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
                    <span className="text-xs font-mono text-green-400 font-bold uppercase">PAGE 02 · AYURVEDA FMCG LANDSCAPE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Navigating Google's YMYL (Your Money Your Life) Filter</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Regulatory & Algorithmic Obstacles
                      </h3>
                      <p className="text-xs text-slate-300">
                        • Strict medical claim filters on Google Ads prohibiting direct disease cure promises.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Rising competition from modern D2C Ayurveda brands (Kapiva, Auric, The Ayurveda Experience).
                      </p>
                      <p className="text-xs text-slate-300">
                        • Cluttered catalog with 1,000+ SKUs leading to keyword cannibalization.
                      </p>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        Our Optimization Blueprint
                      </h3>
                      <p className="text-xs text-slate-300">
                        • Content verified by certified BAMS Ayurvedic doctors with schema attribution.
                      </p>
                      <p className="text-xs text-slate-300">
                        • "Dosha Quiz" interactive diagnostic tool for personalized herb recommendations.
                      </p>
                      <p className="text-xs text-slate-300">
                        • Canonicalized product variant hierarchy eliminating duplicate ranking pages.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: High-Intent Ayurveda Keywords */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-green-400 font-bold uppercase">PAGE 03 · KEYWORD TARGETING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">High-Intent Herbal Health & Daily FMCG Terms</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#112213] border border-green-500/20 rounded-xl">
                      <h4 className="font-bold text-green-300 text-sm mb-2">1. Herbal Healthcare</h4>
                      <div className="space-y-1 font-mono text-[11px] text-green-400 bg-black/40 p-2.5 rounded">
                        <div>• "patanjali ashwagandha capsule benefits"</div>
                        <div>• "divya medha vati for memory"</div>
                        <div>• "ayurvedic medicine for acidity patanjali"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#112213] border border-green-500/20 rounded-xl">
                      <h4 className="font-bold text-green-300 text-sm mb-2">2. Pure Foods & Essentials</h4>
                      <div className="space-y-1 font-mono text-[11px] text-green-400 bg-black/40 p-2.5 rounded">
                        <div>• "patanjali cow ghee 1 litre price"</div>
                        <div>• "pure honey purity test patanjali"</div>
                        <div>• "organic chyawanprash sugar free"</div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#112213] border border-green-500/20 rounded-xl">
                      <h4 className="font-bold text-green-300 text-sm mb-2">3. Personal Care & Dental</h4>
                      <div className="space-y-1 font-mono text-[11px] text-green-400 bg-black/40 p-2.5 rounded">
                        <div>• "dant kanti natural toothpaste combo"</div>
                        <div>• "kesh kanti herbal hair oil"</div>
                        <div>• "aloe vera gel for face glowing skin"</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Interactive Dosha Health Diagnostic */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-green-400 font-bold uppercase">PAGE 04 · INTERACTIVE HEALTH FUNNEL</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Personalized Ayurvedic Dosha Diagnostic Tool</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      A 2-minute 8-question digital questionnaire analyzing Vata, Pitta, and Kapha body constitution. Instantly generates a customized diet plan and recommended Patanjali herbal supplements.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-black/40 border border-green-500/20 rounded-xl">
                        <span className="text-2xl font-black text-green-400">72%</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Quiz Completion Rate</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-green-500/20 rounded-xl">
                        <span className="text-2xl font-black text-green-400">3.4x</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Basket Size Multiplier</span>
                      </div>
                      <div className="p-4 bg-black/40 border border-green-500/20 rounded-xl">
                        <span className="text-2xl font-black text-green-400">320K+</span>
                        <span className="block text-[11px] text-slate-300 font-mono mt-1">Monthly Active Leads Captured</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Arogya Kendra Local SEO */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-green-400 font-bold uppercase">PAGE 05 · AROGYA KENDRA CITATIONS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Connecting Local Patients to 5,000+ Vaidya Clinics</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#112213] border border-green-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Free Doctor Consultation Booking</h4>
                      <p className="text-xs text-slate-300">
                        Patients can book in-person consultations with certified Ayurvedic practitioners at their local Arogya Kendra directly through Google Search.
                      </p>
                    </div>

                    <div className="p-5 bg-[#112213] border border-green-500/20 rounded-xl">
                      <h4 className="font-bold text-white text-sm mb-2">Medicine Stock Availability</h4>
                      <p className="text-xs text-slate-300">
                        Live inventory lookup indicating whether Divya Pharmacy prescribed formulations are in stock at nearby franchise stores.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: E-Commerce Subscription & Repeat Orders */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-green-400 font-bold uppercase">PAGE 06 · RETENTION & SUBSCRIPTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Auto-Replenish Monthly Subscriptions</h2>
                  </div>

                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-green-400 font-bold">Monthly Essentials Refill:</span>
                        <div className="text-xs text-slate-300 mt-2">
                          10% discount on recurring monthly subscriptions for Cow Ghee, Honey, Mustard Oil, and Toothpaste.
                        </div>
                      </div>
                      <div className="p-4 bg-black/40 rounded-lg">
                        <span className="text-xs font-mono text-emerald-400 font-bold">Customer Lifetime Value (LTV):</span>
                        <div className="text-xs text-slate-300 mt-2">
                          Subscription churn reduced by 44% with automated WhatsApp refill reminders 3 days before expected depletion.
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
                    <span className="text-xs font-mono text-green-400 font-bold uppercase">PAGE 07 · BUSINESS IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Measurable Organic Growth Metrics</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#112213] border border-green-500/30 rounded-xl">
                      <span className="text-2xl font-black text-green-400">+195%</span>
                      <h4 className="font-bold text-white text-sm mt-1">Non-Brand Ayurvedic Traffic</h4>
                      <p className="text-xs text-slate-300 mt-1">Captured via symptom guides, herbal remedy wikis, and certified Vaidya articles.</p>
                    </div>

                    <div className="p-5 bg-[#112213] border border-green-500/30 rounded-xl">
                      <span className="text-2xl font-black text-emerald-400">140,000+</span>
                      <h4 className="font-bold text-white text-sm mt-1">Monthly Clinic Appointments</h4>
                      <p className="text-xs text-slate-300 mt-1">Generated organically across 5,000+ localized Google Business clinic pages.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Summary & PDF Access */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="p-8 bg-[#112213] border border-green-500/30 rounded-2xl text-center space-y-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 font-mono text-xs uppercase font-bold rounded-full">
                      CASE STUDY COMPLETE · PATANJALI STRATEGY DECK
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white">
                      Holistic Healthcare & Ayurveda Growth
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto">
                      Engineered by Dharmesh Thakur — Senior SEO Specialist & Digital Growth Strategist.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://pdflink.to/patanjali/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-mono font-bold text-xs uppercase rounded-xl transition-all flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>View Full Patanjali PDF Report</span>
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
        <div className="px-6 py-3 bg-[#112213] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div>Patanjali Ayurveda Strategy Deck · Slide {currentSlide} of {totalSlides}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white rounded font-bold transition-colors flex items-center gap-1"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
