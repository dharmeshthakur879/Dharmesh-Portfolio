import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, AlertTriangle, CheckCircle, TrendingUp, 
  BarChart2, Search, Target, Globe, ShieldCheck, Zap, Layers, Cpu, Smartphone, 
  BookOpen, Award, ArrowUpRight, Check, Sparkles, ExternalLink, Download
} from "lucide-react";

interface NikeCaseStudyDeckProps {
  onClose: () => void;
}

export default function NikeCaseStudyDeck({ onClose }: NikeCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#080B11] border border-orange-500/30 rounded-2xl shadow-[0_0_50px_rgba(249,115,22,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0A0E17] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-orange-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase">
              NIKE INDIA
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              SEO Audit & Digital Growth Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Nike_India_SEO_Audit_Case_Study.pdf?download=true"
              download="Nike_India_SEO_Audit_Case_Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-orange-600/20 hover:bg-orange-600 text-orange-400 hover:text-white border border-orange-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#05070D] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* SLIDE 01: Title & Scorecard Overview */}
              {currentSlide === 1 && (
                <div className="space-y-8">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                    <div className="space-y-6 max-w-2xl">
                      <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase rounded-full">
                        PORTFOLIO PROJECT
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-5xl tracking-tighter text-white">NIKE</span>
                          <span className="border border-orange-500/40 text-orange-400 text-xs font-mono px-2 py-0.5 rounded font-bold">INDIA</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          SEO Audit & Digital Growth Strategy
                        </h1>
                        <p className="text-orange-400 text-xl font-bold mt-2">Nike India</p>
                      </div>

                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed border-l-2 border-orange-500/40 pl-4">
                        Comprehensive SEO Audit — Technical + On-Page + Content + GEO + AEO + UX
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Technical SEO", "On-Page SEO", "Content Quality", "GEO Readiness", "AEO Readiness", "UX / CRO", "Local SEO"].map((t) => (
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
                          <p className="font-bold text-white mt-1">Senior SEO Specialist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.nike.in/" target="_blank" rel="noreferrer" className="font-bold text-orange-400 hover:underline mt-1 block truncate">
                            nike.in
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-6 bg-[#0A0E17] p-6 rounded-2xl border border-white/10">
                      {/* Overall Score Circle */}
                      <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-8 border-orange-500/20 border-t-orange-500 border-r-orange-500">
                        <div className="text-center">
                          <span className="block text-4xl font-black text-white">63</span>
                          <span className="text-xs font-mono text-slate-400">/100</span>
                          <span className="block text-[10px] font-bold uppercase text-orange-400 mt-1">Overall Score</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-orange-400">15</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Issues Found</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">9</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Audit Areas</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">6mo</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Roadmap</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">+120%</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Traffic Potential</span>
                        </div>
                      </div>

                      <a
                        href="https://www.nike.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-mono text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors"
                      >
                        <span>www.nike.in</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Business & Market Context */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Business & <span className="text-orange-400">Market Context</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* About Nike India */}
                    <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">ABOUT NIKE INDIA</h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Nike Inc. is the world's largest athletic footwear & apparel brand. Nike.in serves as India's dedicated D2C e-commerce platform targeting the rapidly growing sports & fitness market (1.4B+ population).
                      </p>
                      
                      <div className="space-y-2 text-xs font-mono pt-2">
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-slate-500">MODEL</span>
                          <span className="text-white font-semibold">D2C E-Commerce + Retail</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-slate-500">FOUNDED</span>
                          <span className="text-white font-semibold">1964 (Blue Ribbon Sports)</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-slate-500">HQ</span>
                          <span className="text-white font-semibold">Beaverton, Oregon, USA</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-white/5">
                          <span className="text-slate-500">DOMAIN</span>
                          <span className="text-orange-400 font-semibold">nike.in (.in TLD)</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">TARGET AUDIENCE</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {["Urban Youth 18-35", "Fitness Enthusiasts", "Sneaker Culture", "Tier 1 Cities", "Growing Tier 2", "Athletes"].map(a => (
                            <span key={a} className="px-2 py-0.5 bg-white/5 text-[10px] font-mono text-slate-300 rounded border border-white/5">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Business Goals & Target Keywords */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10">
                        <h3 className="text-xs font-mono font-bold text-orange-400 uppercase mb-4">BUSINESS GOALS (SEO-RELEVANT)</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-white/5 rounded-xl flex items-center gap-3">
                            <Search className="w-5 h-5 text-orange-400 shrink-0" />
                            <span>Increase organic discovery & reduce paid dependency</span>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl flex items-center gap-3">
                            <Target className="w-5 h-5 text-orange-400 shrink-0" />
                            <span>Grow Nike Membership base via organic channels</span>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl flex items-center gap-3">
                            <BarChart2 className="w-5 h-5 text-orange-400 shrink-0" />
                            <span>Outrank Adidas, Puma, Decathlon in key categories</span>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl flex items-center gap-3">
                            <Smartphone className="w-5 h-5 text-orange-400 shrink-0" />
                            <span>Improve mobile experience & Core Web Vitals</span>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl flex items-center gap-3">
                            <Cpu className="w-5 h-5 text-orange-400 shrink-0" />
                            <span>Dominate voice & AI-powered search results</span>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl flex items-center gap-3">
                            <BookOpen className="w-5 h-5 text-orange-400 shrink-0" />
                            <span>Build topical authority in sports & fitness niche</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10">
                        <h3 className="text-xs font-mono font-bold text-orange-400 uppercase mb-3">TARGET KEYWORD STRATEGY</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-slate-500 block">BRAND</span>
                            <span className="text-orange-400 font-bold">nike shoes india</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-slate-500 block">CATEGORY</span>
                            <span className="text-white font-bold">running shoes india</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-slate-500 block">PRODUCT</span>
                            <span className="text-white font-bold">nike air max india</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-slate-500 block">INTENT</span>
                            <span className="text-white font-bold">buy nike shoes online</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-slate-500 block">LONG-TAIL</span>
                            <span className="text-white font-bold">nike shoes under 5000</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-slate-500 block">VOICE</span>
                            <span className="text-white font-bold">best running shoes men</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Website Audit Summary & Scorecard */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">AUDIT SCORECARD</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Website Audit <span className="text-orange-400">Summary & Scorecard</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Audit Scores Column */}
                    <div className="lg:col-span-2 space-y-3 bg-[#0A0E17] p-6 rounded-2xl border border-white/10">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase mb-4">SEO AUDIT BREAKDOWN BY AREA</h3>
                      {[
                        { area: "Technical SEO", score: 68, status: "Fair" },
                        { area: "On-Page SEO", score: 72, status: "Fair" },
                        { area: "Content Quality", score: 65, status: "Fair" },
                        { area: "Performance / Speed", score: 60, status: "Poor" },
                        { area: "Mobile Friendliness", score: 78, status: "Fair" },
                        { area: "User Experience (UX)", score: 75, status: "Fair" },
                        { area: "Local SEO", score: 55, status: "Poor" },
                        { area: "GEO Readiness", score: 50, status: "Poor" },
                        { area: "AEO Readiness", score: 48, status: "Poor" },
                      ].map((item) => (
                        <div key={item.area} className="space-y-1">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-slate-300 font-bold">{item.area}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-black">{item.score}</span>
                              <span className={`px-2 py-0.2 text-[10px] rounded font-bold ${
                                item.score >= 70 ? "bg-amber-500/20 text-amber-400" : "bg-red-500/20 text-red-400"
                              }`}>
                                {item.status}
                              </span>
                            </div>
                          </div>
                          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                item.score >= 70 ? "bg-amber-400" : "bg-red-500"
                              }`}
                              style={{ width: `${item.score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Strengths & Weaknesses Column */}
                    <div className="space-y-4">
                      <div className="bg-[#0A0E17] p-5 rounded-2xl border border-emerald-500/20">
                        <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" /> TOP STRENGHTS (7)
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                          <li className="flex items-center gap-2">✅ HTTPS / SSL Secured</li>
                          <li className="flex items-center gap-2">✅ Mobile-Responsive Design</li>
                          <li className="flex items-center gap-2">✅ Global Brand Authority (DA 90+)</li>
                          <li className="flex items-center gap-2">✅ Clean, Minimal Design System</li>
                          <li className="flex items-center gap-2">✅ Broad Product Catalog</li>
                          <li className="flex items-center gap-2">✅ Active Social Media Presence</li>
                          <li className="flex items-center gap-2">✅ .in TLD — India-Specific Domain</li>
                        </ul>
                      </div>

                      <div className="bg-[#0A0E17] p-5 rounded-2xl border border-red-500/20">
                        <h4 className="text-xs font-mono font-bold text-red-400 uppercase mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> CRITICAL WEAKNESSES (8)
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                          <li className="flex items-center gap-2">❌ Slow Page Load (CWV Failing)</li>
                          <li className="flex items-center gap-2">❌ Thin Product Content</li>
                          <li className="flex items-center gap-2">❌ Missing Structured Data / Schema</li>
                          <li className="flex items-center gap-2">❌ No FAQ / Q&A Content</li>
                          <li className="flex items-center gap-2">❌ Weak Local SEO Signals</li>
                          <li className="flex items-center gap-2">❌ No Blog / Content Hub</li>
                          <li className="flex items-center gap-2">❌ GEO Signals Absent</li>
                          <li className="flex items-center gap-2">❌ Weak Internal Linking</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Complete Technical SEO Audit */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">TECHNICAL AUDIT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Complete <span className="text-orange-400">Technical SEO Audit</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Technical Table */}
                    <div className="lg:col-span-3 bg-[#0A0E17] p-4 rounded-2xl border border-white/10 overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400 text-[10px] uppercase">
                            <th className="py-2 px-3">CHECK</th>
                            <th className="py-2 px-3">STATUS</th>
                            <th className="py-2 px-3">PRIORITY</th>
                            <th className="py-2 px-3">ISSUE & RECOMMENDATION</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {[
                            { check: "HTTPS / SSL", status: "Pass", priority: "LOW", issue: "Secure connection active; maintain SSL renewal." },
                            { check: "XML Sitemap", status: "Warn", priority: "MEDIUM", issue: "Sitemap incomplete; audit and add all product/category URLs." },
                            { check: "Canonical Tags", status: "Warn", priority: "HIGH", issue: "Duplicate filter URLs; add canonical tags on paginated pages." },
                            { check: "Structured Data", status: "Fail", priority: "HIGH", issue: "No Product, Review, or FAQ schema; implement JSON-LD." },
                            { check: "Core Web Vitals", status: "Fail", priority: "HIGH", issue: "LCP ~3.8s, INP 260ms; optimize images, defer JS." },
                            { check: "Image Optimization", status: "Fail", priority: "HIGH", issue: "Large uncompressed images; convert to WebP with lazy loading." },
                            { check: "Mobile Speed", status: "Fail", priority: "HIGH", issue: "Estimated mobile score 48/100; minify JS/CSS, CDN optimization." },
                          ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-white/5 transition-colors">
                              <td className="py-2.5 px-3 font-bold text-white">{row.check}</td>
                              <td className="py-2.5 px-3">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  row.status === "Pass" ? "bg-emerald-500/20 text-emerald-400" :
                                  row.status === "Warn" ? "bg-amber-500/20 text-amber-400" : "bg-red-500/20 text-red-400"
                                }`}>
                                  {row.status}
                                </span>
                              </td>
                              <td className="py-2.5 px-3">
                                <span className={`text-[10px] font-bold ${
                                  row.priority === "HIGH" ? "text-red-400" : "text-amber-400"
                                }`}>
                                  {row.priority}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-slate-300 text-[11px] font-sans">{row.issue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Core Web Vitals Box */}
                    <div className="space-y-4">
                      <div className="bg-[#0A0E17] p-5 rounded-2xl border border-white/10 space-y-4">
                        <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">CORE WEB VITALS STATUS</h3>
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-2.5 bg-white/5 rounded-lg">
                            <span className="text-[10px] text-slate-400 block">LCP (Largest Contentful Paint)</span>
                            <span className="text-red-400 font-bold text-base">~3.8s</span>
                            <span className="text-[10px] text-amber-400 block">Needs Work</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg">
                            <span className="text-[10px] text-slate-400 block">INP (Interaction to Next Paint)</span>
                            <span className="text-red-400 font-bold text-base">~260ms</span>
                            <span className="text-[10px] text-amber-400 block">Needs Work</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg">
                            <span className="text-[10px] text-slate-400 block">CLS (Cumulative Layout Shift)</span>
                            <span className="text-red-400 font-bold text-base">~0.15</span>
                            <span className="text-[10px] text-amber-400 block">Needs Work</span>
                          </div>
                          <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                            <span className="text-[10px] text-slate-400 block">MOBILE PAGESPEED SCORE</span>
                            <span className="text-red-400 font-black text-xl">48 / 100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: On-Page SEO Audit */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PAGE-BY-PAGE ANALYSIS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      On-Page <span className="text-orange-400">SEO Audit</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">PAGE TYPE SCORE SUMMARY</h3>
                      
                      <div className="space-y-4">
                        {[
                          { name: "Homepage", score: 65, issue: "Generic title, JS H1, no body text, missing alt text" },
                          { name: "Category Pages", score: 55, issue: "No category descriptions, templated meta, no alt text" },
                          { name: "Product Pages", score: 58, issue: "Thin descriptions, no review schema, no FAQ section" },
                          { name: "Blog / Content Hub", score: 0, issue: "COMPLETELY ABSENT — zero topical authority content" },
                          { name: "Contact Page", score: 62, issue: "No LocalBusiness schema, no structured contact data" },
                        ].map(page => (
                          <div key={page.name} className="p-3 bg-white/5 rounded-xl space-y-2">
                            <div className="flex justify-between items-center text-xs font-mono">
                              <span className="font-bold text-white">{page.name}</span>
                              <span className={`px-2 py-0.5 rounded font-black ${
                                page.score > 60 ? "bg-amber-500/20 text-amber-400" :
                                page.score > 0 ? "bg-red-500/20 text-red-400" : "bg-red-600 text-white"
                              }`}>
                                {page.score}%
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 font-sans">{page.issue}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-red-950/40 border border-red-500/40 p-6 rounded-2xl space-y-3">
                        <h4 className="text-xs font-mono font-bold text-red-400 uppercase">CRITICAL GAP: NO BLOG</h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Nike India has ZERO content hub or blog. This means no topical authority, no long-tail keyword coverage, no featured snippet opportunities, and zero AI Overview visibility.
                        </p>
                      </div>

                      <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-3">
                        <h4 className="text-xs font-mono font-bold text-orange-400 uppercase">QUICK WIN FIXES</h4>
                        <ul className="space-y-2 text-xs font-mono text-slate-300">
                          <li className="flex items-center gap-2">⚡ Rewrite title tags with target keywords</li>
                          <li className="flex items-center gap-2">⚡ Add unique category page descriptions</li>
                          <li className="flex items-center gap-2">⚡ Expand product descriptions (300+ words)</li>
                          <li className="flex items-center gap-2">⚡ Add descriptive alt text to all images</li>
                          <li className="flex items-center gap-2">⚡ Fix JS-rendered H1 on homepage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Content + GEO + AEO Audit */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">GENERATIVE & ANSWER ENGINE OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Content + GEO + AEO <span className="text-orange-400">Audit</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">GEO AUDIT (Generative Engine)</h3>
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-mono font-bold rounded">50 / 100</span>
                      </div>
                      <ul className="space-y-2 text-xs font-mono text-slate-300">
                        <li className="flex items-center gap-2">❌ Weak citable content — AI can't quote Nike India</li>
                        <li className="flex items-center gap-2">❌ No structured quotable statements or data</li>
                        <li className="flex items-center gap-2">❌ Insufficient schema for AI parsing</li>
                        <li className="flex items-center gap-2">❌ Not optimized for Google AI Overviews</li>
                      </ul>
                    </div>

                    <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">AEO AUDIT (Answer Engine)</h3>
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-mono font-bold rounded">48 / 100</span>
                      </div>
                      <ul className="space-y-2 text-xs font-mono text-slate-300">
                        <li className="flex items-center gap-2">❌ No featured snippet targeting</li>
                        <li className="flex items-center gap-2">❌ No People Also Ask (PAA) targeting</li>
                        <li className="flex items-center gap-2">❌ No voice search optimization</li>
                        <li className="flex items-center gap-2">❌ No structured Q&A content format</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">PROPOSED TOPIC CLUSTERS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div className="p-3 bg-white/5 rounded-xl space-y-2">
                        <p className="font-bold text-white font-mono">Pillar 1: Running in India</p>
                        <p className="text-[#94A3B8] text-[11px]">Best running shoes India, Marathon training, Running routes Mumbai</p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl space-y-2">
                        <p className="font-bold text-white font-mono">Pillar 2: Sports Training India</p>
                        <p className="text-[#94A3B8] text-[11px]">Cricket training gear, Gym shoes India, Fitness tips</p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl space-y-2">
                        <p className="font-bold text-white font-mono">Pillar 3: Nike Technology Hub</p>
                        <p className="text-[#94A3B8] text-[11px]">Air Max technology, React foam explained, Flyknit guide</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: UX + Conversion Optimization Audit */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">CONVERSION RATE OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      UX + Conversion <span className="text-orange-400">Optimization Audit</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">CONVERSION FUNNEL ANALYSIS</h3>
                      
                      <div className="space-y-3 text-xs font-mono">
                        {[
                          { stage: "Landing Page", pct: "100%", width: "100%", color: "bg-orange-500" },
                          { stage: "Category Browse", pct: "65%", width: "65%", color: "bg-orange-500/80" },
                          { stage: "Product View", pct: "45%", width: "45%", color: "bg-orange-500/60" },
                          { stage: "Add to Cart", pct: "20%", width: "20%", color: "bg-amber-500" },
                          { stage: "Purchase", pct: "~8%", width: "12%", color: "bg-red-500" },
                        ].map((item) => (
                          <div key={item.stage} className="space-y-1">
                            <div className="flex justify-between text-slate-300">
                              <span>{item.stage}</span>
                              <span className="font-bold text-white">{item.pct}</span>
                            </div>
                            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                              <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono text-center">
                        Target: 12 - 15% Conversion Rate with UX fixes
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[#0A0E17] p-5 rounded-2xl border border-white/10 space-y-3">
                        <h4 className="text-xs font-mono font-bold text-orange-400 uppercase">PROJECTED UX IMPACT</h4>
                        <div className="space-y-2 text-center">
                          <div className="p-3 bg-white/5 rounded-xl">
                            <span className="text-2xl font-black text-emerald-400 block">+40 - 60%</span>
                            <span className="text-[10px] font-mono text-slate-400">Conversion Rate Improvement</span>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl">
                            <span className="text-2xl font-black text-orange-400 block">-35%</span>
                            <span className="text-[10px] font-mono text-slate-400">Cart Abandonment Reduction</span>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl">
                            <span className="text-2xl font-black text-emerald-400 block">+25%</span>
                            <span className="text-[10px] font-mono text-slate-400">Mobile Revenue Uplift</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Top 15 SEO Recommendations & Roadmap */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">ACTION PLAN</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Top 15 SEO Recommendations & <span className="text-orange-400">Roadmap</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-[#0A0E17] p-4 rounded-2xl border border-white/10 overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400 text-[10px] uppercase">
                            <th className="py-2 px-2">#</th>
                            <th className="py-2 px-2">PRIORITY</th>
                            <th className="py-2 px-2">RECOMMENDATION</th>
                            <th className="py-2 px-2">IMPACT</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {[
                            { id: 1, prio: "Critical", rec: "Implement JSON-LD: Product, Review, FAQ, Breadcrumb", imp: "Very High" },
                            { id: 2, prio: "Critical", rec: "Optimize LCP under 2s, fix CLS banner shifts", imp: "Very High" },
                            { id: 3, prio: "Critical", rec: "Launch blog with 3 topic pillars (Running, Training, Tech)", imp: "Very High" },
                            { id: 4, prio: "Critical", rec: "Expand product descriptions to 300+ words", imp: "High" },
                            { id: 5, prio: "Critical", rec: "Add FAQ schema to product pages targeting PAA", imp: "High" },
                            { id: 6, prio: "Critical", rec: "Write unique 150-200 word descriptions for category pages", imp: "High" },
                            { id: 7, prio: "Critical", rec: "Rewrite all title tags and meta descriptions with keywords", imp: "High" },
                            { id: 8, prio: "Critical", rec: "Add descriptive keyword-rich alt text to product images", imp: "High" },
                          ].map(item => (
                            <tr key={item.id} className="hover:bg-white/5">
                              <td className="py-2 px-2 font-bold text-orange-400">{item.id}</td>
                              <td className="py-2 px-2 text-red-400 font-bold">{item.prio}</td>
                              <td className="py-2 px-2 text-slate-200 font-sans text-[11px]">{item.rec}</td>
                              <td className="py-2 px-2 text-emerald-400 font-bold">{item.imp}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-[#0A0E17] p-5 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">IMPLEMENTATION ROADMAP</h3>
                      <div className="space-y-3 text-xs font-mono">
                        <div className="p-3 bg-white/5 rounded-xl border-l-2 border-orange-500">
                          <p className="font-bold text-orange-400">Month 1 — Foundation & Quick Wins</p>
                          <p className="text-[11px] text-slate-400 mt-1">Title/Meta rewrites, Alt text, Category descriptions, FAQ sections</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border-l-2 border-amber-500">
                          <p className="font-bold text-amber-400">Month 2 — Technical & Schema</p>
                          <p className="text-[11px] text-slate-400 mt-1">JSON-LD schema, Canonical tags, Hreflang, Robots.txt audit</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border-l-2 border-emerald-500">
                          <p className="font-bold text-emerald-400">Month 3 — Performance & Content</p>
                          <p className="text-[11px] text-slate-400 mt-1">CWV optimization, Image compression, Product content expansion</p>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border-l-2 border-blue-500">
                          <p className="font-bold text-blue-400">Month 4-6 — GEO + AEO + Scale</p>
                          <p className="text-[11px] text-slate-400 mt-1">Voice search, AI Overview optimization, Local SEO & publishing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Results & Projections */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">12-MONTH OUTLOOK</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Expected Results & <span className="text-orange-400">Projections</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-[#0A0E17] p-4 rounded-xl border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">ORGANIC TRAFFIC</span>
                      <span className="text-2xl font-black text-emerald-400 block mt-1">+80 - 120%</span>
                      <span className="text-[10px] text-slate-500 block">Baseline uplift</span>
                    </div>
                    <div className="bg-[#0A0E17] p-4 rounded-xl border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">TOP 10 KEYWORDS</span>
                      <span className="text-2xl font-black text-white block mt-1">+200 - 350</span>
                      <span className="text-[10px] text-slate-500 block">New keywords</span>
                    </div>
                    <div className="bg-[#0A0E17] p-4 rounded-xl border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">FEATURED SNIPPETS</span>
                      <span className="text-2xl font-black text-orange-400 block mt-1">50 - 80</span>
                      <span className="text-[10px] text-slate-500 block">Appearances</span>
                    </div>
                    <div className="bg-[#0A0E17] p-4 rounded-xl border border-white/10 text-center">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">SERP FEATURES</span>
                      <span className="text-2xl font-black text-emerald-400 block mt-1">10+</span>
                      <span className="text-[10px] text-slate-500 block">From 2 current</span>
                    </div>
                  </div>

                  <div className="bg-[#0A0E17] p-6 rounded-2xl border border-white/10 space-y-4">
                    <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">SERP REAL ESTATE: BEFORE VS AFTER</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                      <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl space-y-2">
                        <p className="font-bold text-red-400">BEFORE (CURRENT)</p>
                        <p className="text-slate-300">✅ Organic listing</p>
                        <p className="text-slate-300">✅ Sitelinks (brand)</p>
                        <p className="text-slate-500">❌ No featured snippets</p>
                        <p className="text-slate-500">❌ No rich results</p>
                        <p className="text-slate-500">❌ No AI Overview</p>
                        <p className="text-slate-500 font-bold">Total: ~2 features</p>
                      </div>

                      <div className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-2">
                        <p className="font-bold text-emerald-400">AFTER (12 MONTHS)</p>
                        <p className="text-slate-300">✅ Organic listing & Sitelinks</p>
                        <p className="text-slate-300">✅ Featured snippets & Product rich results</p>
                        <p className="text-slate-300">✅ AI Overview inclusions & PAA boxes</p>
                        <p className="text-slate-300">✅ Review stars & FAQ rich results</p>
                        <p className="text-slate-300">✅ Local pack & Video results</p>
                        <p className="text-emerald-400 font-bold">Total: 10+ features</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Portfolio Reflection & Audit Process */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PORTFOLIO REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Audit Process & <span className="text-orange-400">Learnings</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-[#0A0E17] p-5 rounded-2xl border border-white/10 space-y-3">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">6-STEP AUDIT PROCESS</h3>
                      <ol className="space-y-2 text-xs font-mono text-slate-300">
                        <li><span className="text-orange-400 font-bold">1.</span> Business Research</li>
                        <li><span className="text-orange-400 font-bold">2.</span> Technical Review</li>
                        <li><span className="text-orange-400 font-bold">3.</span> On-Page Analysis</li>
                        <li><span className="text-orange-400 font-bold">4.</span> Content / GEO / AEO</li>
                        <li><span className="text-orange-400 font-bold">5.</span> UX / CRO Review</li>
                        <li><span className="text-orange-400 font-bold">6.</span> Strategic Roadmap</li>
                      </ol>
                    </div>

                    <div className="bg-[#0A0E17] p-5 rounded-2xl border border-white/10 space-y-3">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">TOOLS USED</h3>
                      <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                        {["Google Search Console", "PageSpeed Insights", "Screaming Frog", "Ahrefs / SEMrush", "Lighthouse", "Surfer SEO", "AnswerThePublic", "Hotjar", "GBP Manager", "Schema Validator"].map(t => (
                          <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#0A0E17] p-5 rounded-2xl border border-orange-500/30 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">CONTACT & AUTHOR</h3>
                      
                      <div>
                        <p className="text-lg font-black text-white">Dharmesh</p>
                        <p className="text-xs text-slate-400 font-mono">Senior SEO Specialist & Digital Marketing Strategist</p>
                      </div>

                      <div className="space-y-1 text-xs font-mono text-slate-300">
                        <p>📧 <a href="mailto:dk3891315@gmail.com" className="text-orange-400 hover:underline">dk3891315@gmail.com</a></p>
                        <p>📞 +91 8287107944</p>
                      </div>

                      <p className="text-[11px] italic text-slate-400 border-t border-white/10 pt-3">
                        "SEO is not about gaming algorithms. It is about making great content accessible, trustworthy, and answerable."
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-3 bg-[#0A0E17] border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <button
            onClick={prevSlide}
            className="flex items-center gap-1 text-slate-400 hover:text-orange-400 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <div className="hidden sm:flex items-center gap-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i + 1)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === i + 1 ? "bg-orange-500 scale-125" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-1 text-slate-400 hover:text-orange-400 transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
