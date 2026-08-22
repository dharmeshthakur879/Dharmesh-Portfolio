import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, AlertTriangle, CheckCircle, TrendingUp, 
  BarChart2, Search, Target, Globe, ShieldCheck, Zap, Layers, Cpu, Smartphone, 
  BookOpen, Award, ArrowUpRight, Check, Sparkles, ExternalLink, Utensils, MapPin, Users, Download
} from "lucide-react";

interface AmulCaseStudyDeckProps {
  onClose: () => void;
}

export default function AmulCaseStudyDeck({ onClose }: AmulCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0a1018] border border-blue-500/30 rounded-2xl shadow-[0_0_50px_rgba(37,99,235,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#111927] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-[#2563EB] text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              🥛 AMUL
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              SEO + GEO + AEO Full Audit Report (Digital Gap Analysis)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Amul_Digital_Gap_Analysis_SEO_GEO_AEO.pdf?download=true"
              download="Amul_Digital_Gap_Analysis_SEO_GEO_AEO.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#070b12] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* SLIDE 01: Master Audit Scorecard */}
              {currentSlide === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase rounded-full">
                        PORTFOLIO PROJECT · FULL-SPECTRUM DIGITAL AUDIT
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Amul Digital <span className="text-blue-500">Gap Analysis</span>
                      </h1>
                      <p className="text-blue-300 font-bold text-sm sm:text-base mt-1">
                        India's #1 Dairy Brand — Offline Giant, Digital Underperformer
                      </p>
                    </div>
                    <div className="p-4 bg-[#111c2e] border border-blue-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">COMPOSITE SCORE</span>
                      <span className="text-4xl font-black text-amber-400 block my-1">44<span className="text-xl text-slate-400">/100</span></span>
                      <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full inline-block">
                        ⚠️ Moderate Risk
                      </span>
                    </div>
                  </div>

                  {/* 3 Component Scores */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-center">
                    <div className="p-4 bg-[#111927] border border-blue-500/30 rounded-xl">
                      <span className="text-slate-400 font-mono text-[10px] block">SEO SCORE</span>
                      <span className="text-3xl font-black text-blue-400 block my-1">58</span>
                      <span className="text-amber-300 text-[10px] font-bold">⚠️ Needs Work</span>
                    </div>
                    <div className="p-4 bg-[#111927] border border-red-500/30 rounded-xl">
                      <span className="text-slate-400 font-mono text-[10px] block">GEO SCORE</span>
                      <span className="text-3xl font-black text-red-400 block my-1">41</span>
                      <span className="text-red-300 text-[10px] font-bold">🚨 Critical Gap</span>
                    </div>
                    <div className="p-4 bg-[#111927] border border-red-500/30 rounded-xl">
                      <span className="text-slate-400 font-mono text-[10px] block">AEO SCORE</span>
                      <span className="text-3xl font-black text-red-400 block my-1">34</span>
                      <span className="text-red-300 text-[10px] font-bold">🚨 Critical Gap</span>
                    </div>
                  </div>

                  {/* Audit Breakdown Checklist */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">SSL / HTTPS: <strong className="text-emerald-400">10/10</strong></div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">Mobile Resp.: <strong className="text-amber-400">6/10</strong></div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">PageSpeed Mobile: <strong className="text-red-400">38/100</strong></div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">Content Depth: <strong className="text-red-400">3/10</strong></div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">Schema Markup: <strong className="text-red-400">1/12</strong></div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">Local SEO / GBP: <strong className="text-red-400">4/10</strong></div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">AEO Readiness: <strong className="text-red-400">2/10</strong></div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">GEO AI Content: <strong className="text-red-400">3/10</strong></div>
                  </div>

                  {/* Top 5 Critical Issues */}
                  <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-red-400 font-mono block uppercase">🚨 TOP 5 CRITICAL ISSUES IDENTIFIED</span>
                    <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                      <li><strong>No structured data/schema on product pages</strong> — losing all rich result opportunities daily.</li>
                      <li><strong>Zero AEO optimization</strong> — invisible to ChatGPT, Gemini, Perplexity, Google SGE.</li>
                      <li><strong>No multilingual/regional content strategy</strong> despite 600M+ regional language internet users.</li>
                      <li><strong>Critical Core Web Vitals failures</strong> — LCP 5.2s, CLS 0.22 on mobile.</li>
                      <li><strong>Thin product pages</strong> — image + one-line description, no nutrition, reviews, or CTAs.</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Phase 1 — Search Intent & Content Quality */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PHASE 1 · SEO AUDIT: SEARCH INTENT & CONTENT QUALITY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Search Intent Alignment & <span className="text-blue-400">Critical Content Fixes</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-blue-400 font-mono block uppercase">SEARCH INTENT ALIGNMENT</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• <strong>Navigational:</strong> ✅ Good (Brand pages present)</li>
                        <li>• <strong>Informational:</strong> ❌ Poor (No blog, guides, or articles)</li>
                        <li>• <strong>Transactional:</strong> ⚠️ Partial (No Buy Now / E-commerce CTAs)</li>
                        <li>• <strong>Commercial:</strong> ❌ Missing (No product comparison pages)</li>
                        <li>• <strong>Local Intent:</strong> ❌ Missing (No city/region pages)</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-blue-400 font-mono block uppercase">CONTENT QUALITY SCORECARD</span>
                      <div className="grid grid-cols-2 gap-2 text-slate-300">
                        <div>Product Depth: <span className="text-red-400 font-bold">3/10</span></div>
                        <div>Blog / Editorial: <span className="text-red-400 font-bold">2/10</span></div>
                        <div>Nutritional Info: <span className="text-amber-400 font-bold">4/10</span></div>
                        <div>Recipe Content: <span className="text-red-400 font-bold">3/10</span></div>
                        <div>Content Freshness: <span className="text-amber-400 font-bold">4/10</span></div>
                        <div>Customer Reviews: <span className="text-red-400 font-bold">2/10</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Keyword Cluster Opportunity */}
                  <div className="bg-[#111927] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-blue-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">Keyword Cluster</th><th className="p-2.5">Est. Monthly Vol</th><th className="p-2.5">Current Rank</th><th className="p-2.5">Opportunity</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold text-white">"amul butter" variants</td><td className="p-2.5 font-mono">450K</td><td className="p-2.5 text-emerald-400 font-bold">Top 3 ✅</td><td>Expand to recipes</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">"ghee benefits / uses"</td><td className="p-2.5 font-mono">180K</td><td className="p-2.5 text-red-400 font-bold">Not Ranking ❌</td><td className="p-2.5 text-red-400 font-bold">High Gap</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">"paneer nutrition / recipes"</td><td className="p-2.5 font-mono">220K</td><td className="p-2.5 text-red-400 font-bold">Not Ranking ❌</td><td className="p-2.5 text-red-400 font-bold">High Gap</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">"buy amul [product] online"</td><td className="p-2.5 font-mono">90K</td><td className="p-2.5 text-amber-400 font-bold">Partial ⚠️</td><td className="p-2.5 text-amber-300 font-bold">High Opportunity</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Phase 1 — EEAT & Topical Authority */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PHASE 1 · EEAT SIGNALS & TOPICAL AUTHORITY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      EEAT Scorecard & <span className="text-blue-400">Pillar + Cluster Architecture</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
                    <div className="p-3 bg-[#111927] border border-red-500/30 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">EXPERIENCE</span>
                      <span className="text-2xl font-black text-red-400 block my-1">2/10</span>
                      <span className="text-red-300 text-[10px]">No author bios</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-amber-500/30 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">EXPERTISE</span>
                      <span className="text-2xl font-black text-amber-400 block my-1">4/10</span>
                      <span className="text-amber-300 text-[10px]">Weak content depth</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-emerald-500/30 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">AUTHORITATIVENESS</span>
                      <span className="text-2xl font-black text-emerald-400 block my-1">8/10</span>
                      <span className="text-emerald-300 text-[10px]">Strong brand equity</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-amber-500/30 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">TRUSTWORTHINESS</span>
                      <span className="text-2xl font-black text-amber-400 block my-1">6/10</span>
                      <span className="text-amber-300 text-[10px]">HTTPS active, certs missing</span>
                    </div>
                  </div>

                  {/* Recommended Pillar Architecture */}
                  <div className="p-4 bg-[#111927] border border-blue-500/30 rounded-xl space-y-3 text-xs">
                    <span className="font-bold text-blue-400 font-mono block uppercase">️ RECOMMENDED PILLAR + CLUSTER ARCHITECTURE</span>
                    <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
                      <strong className="text-blue-300 text-sm block">Pillar Page: "Complete Guide to Dairy Nutrition & Indian Dairy Products"</strong>
                      <span className="text-slate-300 text-[11px]">3,000+ words · Targets all broad dairy queries</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px] text-slate-300">
                      <div className="p-2 bg-white/5 rounded">Cluster 1: Butter & Baking (10 articles)</div>
                      <div className="p-2 bg-white/5 rounded">Cluster 2: Ghee & Ayurveda (12 articles)</div>
                      <div className="p-2 bg-white/5 rounded">Cluster 3: Dairy Nutrition (10 articles)</div>
                      <div className="p-2 bg-white/5 rounded">Cluster 4: Recipes & Cooking (15 articles)</div>
                      <div className="p-2 bg-white/5 rounded">Cluster 5: Cheese & Paneer (10 articles)</div>
                      <div className="p-2 bg-white/5 rounded">Cluster 6: Cooperative Story (8 articles)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Technical SEO & Internal Linking */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PHASE 1 · TECHNICAL SEO & INTERNAL LINKING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Technical Deficiencies & <span className="text-blue-400">Hub & Spoke Linking</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-blue-400 font-mono block uppercase">TECHNICAL DEFICIENCIES</span>
                      <ul className="space-y-2 text-slate-300">
                        <li>• <strong>Mobile PageSpeed (38/100):</strong> PNG/JPEG uncompressed, no lazy loading, no CDN.</li>
                        <li>• <strong>Duplicate Content:</strong> Product size variants share identical content with no canonical tags.</li>
                        <li>• <strong>Missing Hreflang:</strong> Exports to 40+ countries but zero international hreflang setup.</li>
                        <li>• <strong>URL Parameters:</strong> Uses query params (?cat=butter&id=123) instead of clean URLs.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-blue-400 font-mono block uppercase">INTERNAL LINKING MODEL</span>
                      <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded text-red-300">
                        ❌ Current: Flat Silo (Homepage → Product, zero contextual links between related items)
                      </div>
                      <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-300">
                        ✅ Recommended: Hub & Spoke (Category Hubs → Sub-categories → Breadcrumbs → Contextual Cross-links)
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Schema, UX & Core Web Vitals */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PHASE 1 · SCHEMA, UX & CORE WEB VITALS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      11/12 Missing Schema Types & <span className="text-blue-400">Mobile CWV Failures</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#111927] border border-red-500/30 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] font-mono block">LCP MOBILE</span>
                      <span className="text-2xl font-black text-red-400 my-1 block">5.2s</span>
                      <span className="text-[10px] text-slate-300">Target &lt;2.5s</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-red-500/30 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] font-mono block">CLS MOBILE</span>
                      <span className="text-2xl font-black text-red-400 my-1 block">0.22</span>
                      <span className="text-[10px] text-slate-300">Target &lt;0.1</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-amber-500/30 rounded-xl text-center">
                      <span className="text-slate-400 text-[10px] font-mono block">TTFB</span>
                      <span className="text-2xl font-black text-amber-400 my-1 block">680ms</span>
                      <span className="text-[10px] text-slate-300">Target &lt;200ms</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-red-400 font-mono block uppercase">🚨 11 OUT OF 12 SCHEMA TYPES MISSING</span>
                    <p className="text-slate-300">
                      Missing Product, NutritionInformation, Recipe, FAQPage, LocalBusiness, HowTo, BreadcrumbList, Review, Article, VideoObject, and Offer schema.
                    </p>
                    <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded text-blue-200">
                      A 2-week schema sprint will unlock FAQ accordions, recipe cards, star ratings, and local pack eligibility simultaneously.
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Phase 2 — Local SEO Signals */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PHASE 2 · LOCAL SEO SIGNALS AUDIT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Local SEO & <span className="text-blue-400">Regional Language Opportunity</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-blue-400 font-mono block uppercase">CRITICAL LOCAL SEO ISSUES</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• <strong>No Local Landing Pages:</strong> Zero city pages despite serving 500+ cities.</li>
                        <li>• <strong>Underoptimized GBP:</strong> Incomplete profile, missing Q&A and weekly posts.</li>
                        <li>• <strong>Store Locator JS-Only:</strong> Locator is rendered in JS — Googlebot cannot index parlours.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-blue-400 font-mono block uppercase">REGIONAL LANGUAGE GAP</span>
                      <p className="text-slate-300 leading-relaxed">
                        600M Indian internet users browse in Hindi, Gujarati, Tamil, Telugu, Bengali. Amul.com is 100% English — completely missing regional organic discovery.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Phase 3 — GEO Audit */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PHASE 3 · GEO AUDIT: GENERATIVE ENGINE OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      GEO Score: 41/100 — <span className="text-blue-400">Invisible to AI Search</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <span className="font-bold text-white block">ChatGPT</span>
                      <span className="text-red-400 font-mono">Not Cited ❌</span>
                    </div>
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <span className="font-bold text-white block">Gemini</span>
                      <span className="text-red-400 font-mono">Not Cited ❌</span>
                    </div>
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                      <span className="font-bold text-white block">Perplexity</span>
                      <span className="text-amber-400 font-mono">Partial ⚠️</span>
                    </div>
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <span className="font-bold text-white block">Google SGE</span>
                      <span className="text-red-400 font-mono">Not Featured ❌</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#111927] border border-white/10 rounded-xl space-y-2 text-xs text-slate-300">
                    <span className="font-bold text-blue-400 font-mono block uppercase">GEO ACTION PLAN</span>
                    <p>1. Rewrite content into direct answer Q&A format ("Inverted Pyramid").</p>
                    <p>2. Publish "India Dairy Insights Report 2026" with original citable data.</p>
                    <p>3. Create Wikidata entries and SameAs schema for all product lines.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Phase 3 — AEO Audit */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PHASE 3 · AEO AUDIT: ANSWER ENGINE OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      AEO Score: 34/100 — <span className="text-blue-400">Zero Featured Snippets Owned</span>
                    </h2>
                  </div>

                  <div className="bg-[#111927] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[500px]">
                      <thead className="bg-white/5 text-blue-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">Query Category</th><th className="p-2.5">Example Query</th><th className="p-2.5">Volume</th><th className="p-2.5">Format Needed</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold text-white">Nutrition Facts</td><td>"amul butter nutrition per 100g"</td><td className="font-mono">22K</td><td>Table + NutritionInfo Schema</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Comparison</td><td>"amul ghee vs butter which is better"</td><td className="font-mono">18K</td><td>Comparison Table</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Recipe</td><td>"how to make paneer at home with amul milk"</td><td className="font-mono">45K</td><td>HowTo + Recipe Schema</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Complete Issue Log (35 Total Issues) */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">UX, CORE WEB VITALS & COMPLETE ISSUE LOG</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      35 Total Issues Identified (<span className="text-red-400">24 High</span>, <span className="text-amber-400">11 Medium</span>)
                    </h2>
                  </div>

                  <div className="bg-[#111927] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-blue-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2">#</th><th className="p-2">Issue Description</th><th className="p-2">Phase</th><th className="p-2">Priority</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2 font-mono">1</td><td className="p-2 font-bold text-white">No Product / NutritionInfo schema on any product page</td><td className="p-2">SEO</td><td className="p-2 text-red-400 font-bold">High</td></tr>
                        <tr><td className="p-2 font-mono">2</td><td className="p-2 font-bold text-white">Zero FAQPage schema — losing all PAA and snippet spots</td><td className="p-2">AEO</td><td className="p-2 text-red-400 font-bold">High</td></tr>
                        <tr><td className="p-2 font-mono">3</td><td className="p-2 font-bold text-white">Mobile page speed 38/100 (LCP 5.2s, CLS 0.22)</td><td className="p-2">SEO</td><td className="p-2 text-red-400 font-bold">High</td></tr>
                        <tr><td className="p-2 font-mono">4</td><td className="p-2 font-bold text-white">No local landing pages for any of 500+ cities</td><td className="p-2">GEO</td><td className="p-2 text-red-400 font-bold">High</td></tr>
                        <tr><td className="p-2 font-mono">5</td><td className="p-2 font-bold text-white">No "Buy Online" CTA on product pages</td><td className="p-2">SEO</td><td className="p-2 text-red-400 font-bold">High</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Projected Outcomes & Final Scorecard */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">PROJECTED OUTCOMES, FINAL SCORECARD & CLOSING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Composite Score Growth: <span className="text-amber-400">44</span> → <span className="text-emerald-400">77/100</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
                    <div className="p-3 bg-[#111927] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">ORGANIC TRAFFIC</span>
                      <span className="text-xl font-black text-emerald-400">320K → 560K/mo (+75%)</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">TOP 10 KEYWORDS</span>
                      <span className="text-xl font-black text-emerald-400">180 → 600 (+233%)</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">FEATURED SNIPPETS</span>
                      <span className="text-xl font-black text-emerald-400">0 → 40–60 New</span>
                    </div>
                    <div className="p-3 bg-[#111927] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">LOCAL PACK CITIES</span>
                      <span className="text-xl font-black text-emerald-400">12 → 50+ Cities</span>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-xs text-blue-200 text-center font-bold">
                    🏁 Consultant Closing Verdict: Amul scores 44/100 composite today. With 20 targeted improvements across SEO, GEO & AEO, Amul can reach 77/100+ within 6 months — dominating dairy search across India and international markets.
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
