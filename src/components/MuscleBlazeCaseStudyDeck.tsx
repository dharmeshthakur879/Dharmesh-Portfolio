import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, AlertTriangle, CheckCircle, TrendingUp, 
  BarChart2, Search, Target, Globe, ShieldCheck, Zap, Layers, Cpu, Smartphone, 
  BookOpen, Award, ArrowUpRight, Check, Sparkles, ExternalLink, Dumbbell, Flame, Download
} from "lucide-react";

interface MuscleBlazeCaseStudyDeckProps {
  onClose: () => void;
}

export default function MuscleBlazeCaseStudyDeck({ onClose }: MuscleBlazeCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0C0A04] border border-amber-500/30 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#181308] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-amber-500 text-black font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5" /> MUSCLEBLAZE
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Full-Funnel Content Strategy & SEO Case Study
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/MuscleBlaze_Content_Strategy_Case_Study.pdf?download=true"
              download="MuscleBlaze_Content_Strategy_Case_Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 rounded-lg text-xs font-mono font-bold transition-all"
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#070502] font-sans relative">
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
                        CONTENT STRATEGY CASE STUDY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-tight text-amber-400">MUSCLEBLAZE</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          India's Leading Sports Nutrition Brand
                        </h1>
                        <p className="text-amber-400 text-xl font-bold mt-2">From Awareness to Conversion — Full-Funnel Strategy</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-amber-500/40 pl-4">
                        A full-funnel content strategy that attracts, nurtures, and converts at every stage — from "what is whey protein" to "buy MuscleBlaze whey 2kg".
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Content Strategy", "Full-Funnel Marketing", "Topic Clusters", "GEO & AEO", "D2C E-Commerce", "30-Day Calendar"].map((t) => (
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
                          <p className="font-bold text-white mt-1">Content Marketing Strategist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.muscleblaze.com/" target="_blank" rel="noreferrer" className="font-bold text-amber-400 hover:underline mt-1 block truncate">
                            muscleblaze.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#181308] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl w-full">
                        <span className="block text-3xl font-black text-amber-400">TOFU · MOFU · BOFU</span>
                        <span className="text-xs font-mono text-slate-300">Full Content Funnel</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">30 Days</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Content Calendar</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-amber-400">63 / 110</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Audit Score</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">22</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Fix Recs</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">Pillar</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">+ Clusters</span>
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
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 01 · THE BRAND</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Business <span className="text-amber-400">Overview</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-[#181308] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-amber-400 uppercase">BRAND PROFILE</h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        MuscleBlaze is India's #1 homegrown sports nutrition brand (founded 2012, HQ New Delhi under HealthKart). Science-backed supplement brand serving bodybuilders, gym enthusiasts, athletes, and fitness beginners across D2C, marketplaces, and offline retail.
                      </p>
                    </div>

                    <div className="bg-[#181308] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-amber-400 uppercase">CORE PRODUCT LINES</h3>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-amber-400 font-bold block">PROTEIN</span>
                          <span className="text-slate-300 text-[11px]">Whey, Isolate, Plant, Mass Gainer</span>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-amber-400 font-bold block">PERFORMANCE</span>
                          <span className="text-slate-300 text-[11px]">Pre-Workout, Creatine, BCAA/EAA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Current Content Analysis */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 02 · CONTENT AUDIT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Current Content <span className="text-amber-400">Analysis</span>
                    </h2>
                  </div>

                  <div className="bg-[#181308] p-6 rounded-2xl border border-white/10 space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-amber-400 font-bold">OVERALL CONTENT SCORE</span>
                      <span className="text-2xl font-black text-white">63 / 110 (Moderate)</span>
                    </div>
                    <p className="text-slate-300 text-xs font-sans">
                      Strong product page content and excellent trust signals — but the primary gap is the absence of a structured blog strategy with pillar pages, consistent publishing, and AEO-optimized FAQ content.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Content Strategy Framework */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 03 · THE PLAN</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Customer Journey & <span className="text-amber-400">Content Funnel</span>
                    </h2>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-4 bg-cyan-950/30 border border-cyan-500/40 rounded-xl space-y-1">
                      <span className="text-cyan-400 font-bold block">TOFU · AWARENESS</span>
                      <p className="text-slate-300">"What protein should I take to build muscle?" → Educational blogs, infographics, recipes</p>
                    </div>
                    <div className="p-4 bg-amber-950/30 border border-amber-500/40 rounded-xl space-y-1">
                      <span className="text-amber-400 font-bold block">MOFU · CONSIDERATION</span>
                      <p className="text-slate-300">"Is MuscleBlaze Whey better than Gold Standard?" → Comparison guides, expert FAQs, complete guides</p>
                    </div>
                    <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-xl space-y-1">
                      <span className="text-emerald-400 font-bold block">BOFU · CONVERSION</span>
                      <p className="text-slate-300">"Buy MuscleBlaze Whey Protein 1kg" → Landing pages, offer bundles, reviews, Biozyme tests</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: 30-Day Content Calendar */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 04 · EXECUTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      30-Day <span className="text-amber-400">Content Calendar</span>
                    </h2>
                  </div>

                  <div className="p-5 bg-[#181308] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-3 bg-cyan-500/20 text-cyan-300 rounded font-bold">TOFU 55% (Educational)</div>
                      <div className="p-3 bg-amber-500/20 text-amber-300 rounded font-bold">MOFU 28% (Commercial)</div>
                      <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded font-bold">BOFU 17% (Conversion)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: SEO + GEO + AEO Strategy */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 05 · MODERN SEARCH</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      SEO + GEO + AEO <span className="text-amber-400">Strategy</span>
                    </h2>
                  </div>

                  <div className="p-5 bg-[#181308] rounded-2xl border border-white/10 space-y-2 font-mono text-xs">
                    <p className="text-slate-300">
                      Winning in 2026 needs more than traditional SEO. Structuring content for AI citations (GEO), voice search & featured snippets (AEO) lets MuscleBlaze dominate Google, ChatGPT, Perplexity, and voice devices simultaneously.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Pillar & Topic Clusters */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 06 · TOPICAL AUTHORITY ENGINE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Pillar & Topic <span className="text-amber-400">Cluster Strategy</span>
                    </h2>
                  </div>

                  <div className="p-5 bg-[#181308] rounded-2xl border border-white/10 space-y-2 font-mono text-xs">
                    <span className="text-amber-400 font-bold block uppercase">PILLAR PAGE (4,000-6,000 words)</span>
                    <p className="text-white font-bold">The Complete Guide to Protein Supplements in India (2025)</p>
                    <p className="text-slate-400 text-[11px]">10 Supporting Blogs + 10 FAQ (AEO) Schema + 10 Long-Tail Keywords</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Content Optimization Recs */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 07 · OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      22 Recommendations <span className="text-amber-400">& Fastest Wins</span>
                    </h2>
                  </div>

                  <div className="p-5 bg-[#181308] rounded-2xl border border-white/10 space-y-2 font-mono text-xs">
                    <span className="text-amber-400 font-bold block uppercase">FASTEST WINS</span>
                    <p className="text-slate-300">1. FAQ Schema on product pages</p>
                    <p className="text-slate-300">2. Blog → Product internal linking</p>
                    <p className="text-slate-300">3. SEO landing pages for commercial keywords</p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Results */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 08 · THE PAYOFF</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Expected <span className="text-amber-400">Results & Roadmap</span>
                    </h2>
                  </div>

                  <div className="p-5 bg-[#181308] rounded-2xl border border-white/10 space-y-2 font-mono text-xs">
                    <p className="text-slate-300">
                      Content marketing results are cumulative. The first 90 days establish the foundation; by Month 6 the pillar + cluster + AEO + schema stack positions MuscleBlaze to capture expanded organic visibility across search & AI tools.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Portfolio Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase">SECTION 09 · REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-amber-400">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#181308] rounded-2xl border border-white/10 space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Great content strategy is publishing smarter, not more — every decision tied to a business goal, audience need & search opportunity.
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                      <span className="text-white font-bold">Dharmesh — Content Marketing Strategist</span>
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
