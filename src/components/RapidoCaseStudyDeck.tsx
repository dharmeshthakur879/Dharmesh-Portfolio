import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, AlertTriangle, CheckCircle, TrendingUp, 
  BarChart2, Search, Target, Globe, ShieldCheck, Zap, Layers, Cpu, Smartphone, 
  BookOpen, Award, ArrowUpRight, Check, Sparkles, ExternalLink, Bike, Download
} from "lucide-react";

interface RapidoCaseStudyDeckProps {
  onClose: () => void;
}

export default function RapidoCaseStudyDeck({ onClose }: RapidoCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0A0A02] border border-yellow-500/30 rounded-2xl shadow-[0_0_50px_rgba(250,204,21,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#141405] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-yellow-400 text-black font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Bike className="w-3.5 h-3.5" /> RAPIDO
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Technical SEO Audit & Optimization Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Rapido_Technical_SEO_Audit_Case_Study.pdf?download=true"
              download="Rapido_Technical_SEO_Audit_Case_Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-yellow-400/20 hover:bg-yellow-400 text-yellow-400 hover:text-black border border-yellow-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-yellow-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-yellow-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-yellow-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#050501] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* SLIDE 01: Health Dashboard & Overview */}
              {currentSlide === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                      <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-mono font-bold uppercase rounded-full">
                        TECHNICAL SEO CASE STUDY · PAGE 01
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Rapido <span className="text-yellow-400">Technical SEO Audit</span>
                      </h1>
                      <p className="text-yellow-300 text-sm sm:text-base font-bold mt-1">
                        India's Leading Bike Taxi & Hyperlocal Mobility Platform (rapido.bike)
                      </p>
                    </div>

                    <div className="p-4 bg-[#1a1a08] border border-yellow-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">HEALTH SCORE</span>
                      <span className="text-3xl font-black text-amber-400 my-1 block">69<span className="text-xl text-slate-400">/100</span></span>
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full inline-block">
                        ⚠️ Moderate Score
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                    <div className="p-3 bg-white/5 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] block font-mono">HTTPS SECURITY</span>
                      <span className="text-xl font-black text-emerald-400">90/100</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] block font-mono">MOBILE FRIENDLY</span>
                      <span className="text-xl font-black text-emerald-400">80/100</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] block font-mono">URL STRUCTURE</span>
                      <span className="text-xl font-black text-amber-400">70/100</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] block font-mono">CRAWLABILITY</span>
                      <span className="text-xl font-black text-amber-400">60/100</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] block font-mono">CORE WEB VITALS</span>
                      <span className="text-xl font-black text-red-400">55/100</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] block font-mono">STRUCTURED DATA</span>
                      <span className="text-xl font-black text-red-400">45/100</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-center">
                    <div className="p-3 bg-[#1a1a08] border border-white/10 rounded-xl">
                      <span className="text-yellow-400 font-bold text-lg block">120+</span>
                      <span className="text-slate-400 text-[10px]">Cities Covered</span>
                    </div>
                    <div className="p-3 bg-[#1a1a08] border border-white/10 rounded-xl">
                      <span className="text-yellow-400 font-bold text-lg block">3.6M</span>
                      <span className="text-slate-400 text-[10px]">Daily Rides</span>
                    </div>
                    <div className="p-3 bg-[#1a1a08] border border-white/10 rounded-xl">
                      <span className="text-yellow-400 font-bold text-lg block">$1.1B</span>
                      <span className="text-slate-400 text-[10px]">Valuation</span>
                    </div>
                    <div className="p-3 bg-[#1a1a08] border border-white/10 rounded-xl">
                      <span className="text-red-400 font-bold text-lg block">15</span>
                      <span className="text-slate-400 text-[10px]">SEO Issues Found</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Business Overview */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 02 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Platform Scale & <span className="text-yellow-400">Target Audience</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#141405] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-yellow-400 font-mono block uppercase">ABOUT RAPIDO</span>
                      <p className="text-slate-300 leading-relaxed">
                        Founded 2015 by Aravind Sanka, Pavan Guntupalli, and SR Rishikesh in Bengaluru. Asset-light aggregator with $798M+ funding and 1.3 Crore+ driver Captains earning ₹15,000 Cr+.
                      </p>
                    </div>

                    <div className="p-4 bg-[#141405] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-yellow-400 font-mono block uppercase">CORE SERVICES</span>
                      <div className="grid grid-cols-2 gap-2 text-slate-300 text-[11px]">
                        <div>• Bike Taxi</div>
                        <div>• Auto Rickshaw</div>
                        <div>• Cab Booking</div>
                        <div>• Parcel Delivery</div>
                        <div>• Corporate Travel</div>
                        <div>• Captain Platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Technical SEO Scorecard */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 03 · TECHNICAL HEALTH SCORECARD</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Strengths vs <span className="text-yellow-400">Critical Weaknesses</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-2">
                      <span className="font-bold text-emerald-400 font-mono block uppercase">✅ TOP 5 STRENGTHS</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• HTTPS active — secure connection</li>
                        <li>• Mobile-responsive design (Next.js)</li>
                        <li>• Clean, descriptive URL structure</li>
                        <li>• App deep-linking implemented</li>
                        <li>• Brand page presence across platforms</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-2">
                      <span className="font-bold text-red-400 font-mono block uppercase">🚨 TOP 7 WEAKNESSES</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• Zero structured data / schema markup</li>
                        <li>• JS-heavy rendering — crawl risk</li>
                        <li>• Sitemap gaps — city pages missing</li>
                        <li>• CWV unconfirmed — LCP/CLS risk</li>
                        <li>• Image optimization gaps (no WebP)</li>
                        <li>• Missing breadcrumbs site-wide</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Detailed Audit Findings */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 04 · DETAILED AUDIT FINDINGS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      14-Factor Technical Audit Checklist
                    </h2>
                  </div>

                  <div className="p-4 bg-[#141405] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-yellow-400 font-mono block uppercase">TOP 3 CRITICAL FIXES</span>
                    <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                      <li><strong>JavaScript Rendering:</strong> Implement SSR/SSG for all city & service pages via Next.js.</li>
                      <li><strong>Canonical Tags:</strong> Add self-referencing canonicals on all city-service page variants.</li>
                      <li><strong>Breadcrumbs:</strong> Implement BreadcrumbList schema + visible breadcrumb UI.</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Performance & Core Web Vitals */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 05 · PERFORMANCE & CORE WEB VITALS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      CWV Benchmarks & <span className="text-yellow-400">Optimization Targets</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#141405] border border-red-500/30 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] font-mono block">LCP ESTIMATED</span>
                      <span className="text-xl font-black text-red-400 my-1 block">3–5s (JS-heavy)</span>
                      <span className="text-[10px] text-emerald-400 font-bold">Target ≤2.5s</span>
                    </div>
                    <div className="p-3 bg-[#141405] border border-amber-500/30 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] font-mono block">CLS RISK</span>
                      <span className="text-xl font-black text-amber-400 my-1 block">Dynamic Banners</span>
                      <span className="text-[10px] text-emerald-400 font-bold">Target ≤0.1</span>
                    </div>
                    <div className="p-3 bg-[#141405] border border-amber-500/30 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] font-mono block">INP RISK</span>
                      <span className="text-xl font-black text-amber-400 my-1 block">Heavy JS Handlers</span>
                      <span className="text-[10px] text-emerald-400 font-bold">Target ≤200ms</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Mobile SEO & Structured Data */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 06 · MOBILE SEO & STRUCTURED DATA</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      10/10 Schema Types Missing — <span className="text-yellow-400">Zero Schema Detected</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-xs space-y-2">
                    <span className="font-bold text-red-400 font-mono block uppercase">🚨 CRITICAL FINDING</span>
                    <p className="text-slate-300">
                      Rapido has zero structured data implementation across its entire website. Implementing Organization, FAQ, Breadcrumb, Service, and LocalBusiness schema could unlock rich results and increase SERP real estate by up to 30%.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 07: 90-Day Technical SEO Roadmap */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 07 · 90-DAY TECHNICAL SEO ROADMAP</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      3 Phases · 38 Tasks · <span className="text-yellow-400">Critical to Advanced</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#141405] border border-red-500/30 rounded-xl space-y-1">
                      <span className="font-mono text-red-400 font-bold text-[10px] block uppercase">PHASE 1 (DAYS 1–30)</span>
                      <span className="font-bold text-white block">Critical Fixes (12 Tasks)</span>
                      <p className="text-slate-300 text-[11px]">GSC setup, robots.txt, sitemap, Organization schema, canonical audit, fix 4xx errors.</p>
                    </div>

                    <div className="p-3 bg-[#141405] border border-amber-500/30 rounded-xl space-y-1">
                      <span className="font-mono text-amber-400 font-bold text-[10px] block uppercase">PHASE 2 (DAYS 31–60)</span>
                      <span className="font-bold text-white block">Core Improvements (14 Tasks)</span>
                      <p className="text-slate-300 text-[11px]">FAQ schema, Service schema, WebP conversion, Brotli compression, CDN deployment.</p>
                    </div>

                    <div className="p-3 bg-[#141405] border border-emerald-500/30 rounded-xl space-y-1">
                      <span className="font-mono text-emerald-400 font-bold text-[10px] block uppercase">PHASE 3 (DAYS 61–90)</span>
                      <span className="font-bold text-white block">Advanced Scaling (12 Tasks)</span>
                      <p className="text-slate-300 text-[11px]">Scale LocalBusiness schema to 120+ cities, SSR/SSG, LCP optimization, GEO/AEO audit.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Top 15 Technical Recommendations */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 08 · TOP 15 TECHNICAL RECOMMENDATIONS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Estimated Health Score Uplift: <span className="text-amber-400">69</span> → <span className="text-emerald-400">88–92/100</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-[#141405] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-yellow-400 font-mono block uppercase">PRIORITY SUMMARY</span>
                    <p className="text-slate-300">6 Critical Fixes (Days 1–30) · 3 High Priority (Days 1–45) · 5 Medium Priority (Days 31–60) · 1 Low Priority (Days 61–90)</p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Results & Business Impact */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 09 · EXPECTED RESULTS & BUSINESS IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Score Upgrade: <span className="text-amber-400">69</span> → <span className="text-emerald-400">90 (+21 Points)</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
                    <div className="p-3 bg-[#141405] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">LCP MOBILE</span>
                      <span className="text-xl font-black text-emerald-400">~3-5s → &lt;2.5s ✅</span>
                    </div>
                    <div className="p-3 bg-[#141405] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">SERP FEATURES</span>
                      <span className="text-xl font-black text-emerald-400">10+ Unlocked</span>
                    </div>
                    <div className="p-3 bg-[#141405] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">CITY PAGES INDEXED</span>
                      <span className="text-xl font-black text-emerald-400">120+ Pages</span>
                    </div>
                    <div className="p-3 bg-[#141405] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">TRAFFIC TIMELINE</span>
                      <span className="text-xl font-black text-emerald-400">3–6 Months</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Portfolio Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-yellow-400 font-bold uppercase">PAGE 10 · PORTFOLIO REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Consultant Reflection & <span className="text-yellow-400">6 Key Learnings</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-[#141405] border border-yellow-500/30 rounded-xl text-xs space-y-2 text-slate-300">
                    <p className="italic border-l-2 border-yellow-400 pl-3">
                      "A great technical SEO audit doesn't just find problems — it builds a clear path from crawl errors to commercial growth." — Dharmesh, Technical SEO Specialist
                    </p>
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
