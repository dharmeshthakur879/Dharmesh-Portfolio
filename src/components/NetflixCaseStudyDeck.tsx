import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, AlertTriangle, CheckCircle, TrendingUp, 
  BarChart2, Search, Target, Globe, ShieldCheck, Zap, Layers, Cpu, Smartphone, 
  BookOpen, Award, ArrowUpRight, Check, Sparkles, ExternalLink, Film, Tv, Download
} from "lucide-react";

interface NetflixCaseStudyDeckProps {
  onClose: () => void;
}

export default function NetflixCaseStudyDeck({ onClose }: NetflixCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#080304] border border-red-600/30 rounded-2xl shadow-[0_0_50px_rgba(229,9,20,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#120507] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-[#E50914] text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5" /> NETFLIX
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Competitive Intelligence & SEO Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Netflix_Competitive_Intelligence_Case_Study.pdf?download=true"
              download="Netflix_Competitive_Intelligence_Case_Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-red-500 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-red-500 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-red-500 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#050203] font-sans relative">
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
                      <div className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-500 text-xs font-mono font-bold uppercase rounded-full">
                        COMPETITIVE INTELLIGENCE CASE STUDY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-widest text-[#E50914] uppercase">NETFLIX</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          OTT Streaming Platform Analysis
                        </h1>
                        <p className="text-red-400 text-xl font-bold mt-2">Streaming the Future — Owning the Digital Screen</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-red-600/40 pl-4">
                        Demonstrates competitive intelligence, SEO thinking & digital marketing strategy applied to one of the world's most recognized streaming platforms.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Competitive Intelligence", "OTT Streaming", "SEO Benchmark", "Content Gap Analysis", "AEO / GEO Strategy", "SWOT"].map((t) => (
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
                          <p className="font-bold text-white mt-1">SEO & Competitor Specialist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.netflix.com/" target="_blank" rel="noreferrer" className="font-bold text-red-500 hover:underline mt-1 block truncate">
                            netflix.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#120507] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-red-600/10 border border-red-600/20 rounded-xl w-full">
                        <span className="block text-4xl font-black text-red-500">8.3 / 10</span>
                        <span className="text-xs font-mono text-slate-300">Website Leader Score</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">4</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Rivals Analyzed</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-red-500">13</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Audit Factors</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">20</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Blog Ideas</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">Top 20</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Strategic Moves</span>
                        </div>
                      </div>

                      <div className="w-full p-3 bg-white/5 rounded-xl text-xs font-mono text-slate-300 space-y-1">
                        <p className="text-red-500 font-bold">Rivals Benchmarked:</p>
                        <p className="text-[11px] text-slate-400">Disney+ · Prime Video · Max</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Business Overview */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 01 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Business & <span className="text-red-500">Target Audience</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-[#120507] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-red-500 uppercase">COMPANY SNAPSHOT</h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Netflix Inc. is the world's leading SVOD platform (founded 1997, HQ Los Gatos) operating in 190+ countries. Key edges: proprietary recommendation algorithm, massive original content investment (Netflix Originals), and multi-tiered subscriptions with mobile gaming expansion.
                      </p>
                      <div className="p-3 bg-white/5 rounded-xl text-xs font-mono space-y-1">
                        <p className="text-red-400 font-bold">Key Markets:</p>
                        <p className="text-slate-300 text-[11px]">Tier 1: USA, UK, Germany, Japan, South Korea, Brazil</p>
                        <p className="text-slate-300 text-[11px]">Tier 2 (High Growth): India, Indonesia, Mexico, Singapore</p>
                      </div>
                    </div>

                    <div className="bg-[#120507] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-red-500 uppercase">SERVICES & CONTENT ECOSYSTEM</h3>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-red-400 font-bold block">CONTENT</span>
                          <span className="text-slate-300 text-[11px]">Movies, TV Shows, Anime, Docs, Kids, Originals</span>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-red-400 font-bold block">FEATURES</span>
                          <span className="text-slate-300 text-[11px]">Offline Download, 4K HDR, Mobile Games, Dubs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Competitor Overview */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 02 · RIVAL LANDSCAPE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Competitor <span className="text-red-500">Overview</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="p-4 bg-[#120507] border-2 border-red-500/50 rounded-2xl space-y-2">
                      <span className="text-red-500 font-bold block text-sm">NETFLIX</span>
                      <p className="text-slate-300 text-[11px]">Strength: Breadth + Recommendation Algo</p>
                      <p className="text-slate-400 text-[10px]">Weakness: Price perception, no IP moat</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-blue-400 font-bold block text-sm">DISNEY+</span>
                      <p className="text-slate-300 text-[11px]">Strength: Unmatched IP (Marvel, Star Wars)</p>
                      <p className="text-slate-400 text-[10px]">Weakness: Narrow adult appeal</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-cyan-400 font-bold block text-sm">PRIME VIDEO</span>
                      <p className="text-slate-300 text-[11px]">Strength: Amazon Prime ecosystem bundle</p>
                      <p className="text-slate-400 text-[10px]">Weakness: Complex UI</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                      <span className="text-purple-400 font-bold block text-sm">MAX</span>
                      <p className="text-slate-300 text-[11px]">Strength: HBO prestige & library</p>
                      <p className="text-slate-400 text-[10px]">Weakness: Small international reach</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Website Comparison */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 03 · 13-FACTOR SCORING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Website <span className="text-red-500">Comparison</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-[#120507] p-4 rounded-2xl border border-white/10">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400 text-[10px]">
                            <th className="py-2 px-2">FACTOR</th>
                            <th className="py-2 px-2 text-red-400">NETFLIX</th>
                            <th className="py-2 px-2">DISNEY+</th>
                            <th className="py-2 px-2">PRIME</th>
                            <th className="py-2 px-2">MAX</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {[
                            { f: "Homepage Design", n: 9, d: 8, p: 6, m: 7 },
                            { f: "Navigation", n: 8, d: 8, p: 6, m: 7 },
                            { f: "Branding", n: 10, d: 9, p: 7, m: 7 },
                            { f: "Content Quality", n: 9, d: 8, p: 7, m: 8 },
                            { f: "Blog Presence", n: 3, d: 4, p: 4, m: 4 },
                            { f: "Mobile Experience", n: 9, d: 8, p: 7, m: 8 },
                          ].map(r => (
                            <tr key={r.f}>
                              <td className="py-2 px-2 text-slate-200 font-bold">{r.f}</td>
                              <td className="py-2 px-2 text-red-500 font-black">{r.n}</td>
                              <td className="py-2 px-2 text-slate-300">{r.d}</td>
                              <td className="py-2 px-2 text-slate-300">{r.p}</td>
                              <td className="py-2 px-2 text-slate-300">{r.m}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-[#120507] p-5 rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                      <span className="text-red-500 font-bold uppercase block">SCORE SUMMARY</span>
                      <div className="space-y-2">
                        <div className="p-2 bg-red-500/20 border border-red-500/40 rounded flex justify-between">
                          <span>NETFLIX</span><span className="font-bold text-red-400">8.3 (Leader)</span>
                        </div>
                        <div className="p-2 bg-white/5 rounded flex justify-between">
                          <span>DISNEY+</span><span>7.0</span>
                        </div>
                        <div className="p-2 bg-white/5 rounded flex justify-between">
                          <span>PRIME VIDEO</span><span>6.5</span>
                        </div>
                        <div className="p-2 bg-white/5 rounded flex justify-between">
                          <span>MAX</span><span>6.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: SEO Comparison */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 04 · BENCHMARKING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      SEO <span className="text-red-500">Comparison</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#120507] rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                    <p className="text-slate-300">
                      Netflix has solid technical SEO but gaps in content depth, FAQ coverage & GEO/AEO readiness — an industry-wide blind spot. The first mover in answer-formatted, AI-readable content gains substantial organic visibility.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Content Gap Analysis */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 05 · OPPORTUNITY DISCOVERY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Content Gap <span className="text-red-500">Analysis</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 bg-[#120507] rounded-2xl border border-white/10 space-y-2">
                      <span className="text-red-500 font-bold block">TOP 20 BLOG IDEAS</span>
                      <p className="text-slate-300">1. Best Netflix Shows in India</p>
                      <p className="text-slate-300">2. Netflix vs Disney+ vs Prime</p>
                      <p className="text-slate-300">3. Best Anime on Netflix 2025</p>
                      <p className="text-slate-300">4. How to Cancel Netflix (Guide)</p>
                    </div>

                    <div className="p-4 bg-[#120507] rounded-2xl border border-white/10 space-y-2">
                      <span className="text-red-500 font-bold block">MISSING / UNDER-OPTIMIZED PAGES</span>
                      <p className="text-slate-300">• Genre landing pages (Action, Drama)</p>
                      <p className="text-slate-300">• "Netflix in [Country]" localized pages</p>
                      <p className="text-slate-300">• Offline Download explainer</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Marketing Strategy Comparison */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 06 · BRAND POSITIONING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Marketing Strategy <span className="text-red-500">Comparison</span>
                    </h2>
                  </div>

                  <div className="p-5 bg-[#120507] rounded-2xl border border-white/10 space-y-2 font-mono text-xs">
                    <span className="text-red-500 font-bold uppercase block">BRAND TAGLINES</span>
                    <p className="text-white"><span className="text-red-400 font-bold">NETFLIX:</span> "Watch anywhere. Cancel anytime."</p>
                    <p className="text-slate-300"><span className="text-blue-400 font-bold">DISNEY+:</span> "All your favorites, one place."</p>
                    <p className="text-slate-300"><span className="text-cyan-400 font-bold">PRIME:</span> "The best of movies, TV & sports."</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: SWOT Analysis */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 07 · STRATEGIC SYNTHESIS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      SWOT <span className="text-red-500">Analysis</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-1">
                      <span className="text-emerald-400 font-bold uppercase block">STRENGTHS</span>
                      <p className="text-slate-300">Global brand, 190+ countries, UX/UI lead, personalization algo</p>
                    </div>
                    <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-xl space-y-1">
                      <span className="text-red-400 font-bold uppercase block">WEAKNESSES</span>
                      <p className="text-slate-300">No franchise IP moat, fragmented content mktg (Tudum split)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Strategic Recommendations */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 08 · ACTION PLAN</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Strategic <span className="text-red-500">Recommendations</span>
                    </h2>
                  </div>

                  <div className="p-5 bg-[#120507] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <span className="text-red-500 font-bold uppercase block">30 / 60 / 90-DAY ROADMAP</span>
                    <p className="text-slate-300"><span className="text-emerald-400 font-bold">30 Days:</span> FAQ schema, meta descriptions, GEO content, homepage social proof</p>
                    <p className="text-slate-300"><span className="text-amber-400 font-bold">60 Days:</span> Geo landing pages, localized blog series, Anime hub, Tudum linking</p>
                    <p className="text-slate-300"><span className="text-blue-400 font-bold">90 Days:</span> Help Center migration, hreflang audit, mobile gaming hub</p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Portfolio Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase">SECTION 09 · REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-red-500">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#120507] rounded-2xl border border-white/10 space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      This project demonstrates the ability to conduct thorough, honest, strategically valuable competitive analysis without paid tools or proprietary data — a structured methodology + industry knowledge + business-goal-first mindset.
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                      <span className="text-white font-bold">Dharmesh — SEO & Competitor Specialist</span>
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
