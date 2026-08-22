import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, AlertTriangle, CheckCircle, TrendingUp, 
  BarChart2, Search, Target, Globe, ShieldCheck, Zap, Layers, Cpu, Smartphone, 
  BookOpen, Award, ArrowUpRight, Check, Sparkles, ExternalLink, Utensils, MapPin, Users, Download
} from "lucide-react";

interface BurgerKingCaseStudyDeckProps {
  onClose: () => void;
}

export default function BurgerKingCaseStudyDeck({ onClose }: BurgerKingCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#180805] border border-orange-500/30 rounded-2xl shadow-[0_0_50px_rgba(249,115,22,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#230b06] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-[#F97316] text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5" /> BURGER KING
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Full Website Audit & Growth Strategy (New Delhi)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Burger_King_India_Full_Website_Audit.pdf?download=true"
              download="Burger_King_India_Full_Website_Audit.pdf"
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#120503] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {/* SLIDE 01: Executive Summary & Scorecard */}
              {currentSlide === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                      <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase rounded-full">
                        PORTFOLIO PROJECT
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Full Website <span className="text-orange-500">Audit Case Study</span>
                      </h1>
                      <p className="text-orange-300 font-bold text-sm sm:text-base mt-1">
                        Burger King India (RBA) — Technical SEO · On-Page · UX · Local SEO · CRO
                      </p>
                    </div>
                    <div className="p-4 bg-[#280c07] border border-orange-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-xs font-mono text-slate-400 uppercase block">OVERALL AUDIT SCORE</span>
                      <span className="text-4xl font-black text-orange-400 block my-1">57.6<span className="text-xl text-slate-400">/100</span></span>
                      <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full inline-block">
                        ⚠️ Major Fixes Needed
                      </span>
                    </div>
                  </div>

                  {/* Executive Audit Scorecard Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="block font-black text-2xl text-amber-400">58</span>
                      <span className="text-slate-300 font-bold block">Technical SEO</span>
                      <span className="text-[10px] text-amber-300 font-mono">⚠️ Needs Work</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="block font-black text-2xl text-amber-400">52</span>
                      <span className="text-slate-300 font-bold block">On-Page SEO</span>
                      <span className="text-[10px] text-amber-300 font-mono">⚠️ Needs Work</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="block font-black text-2xl text-amber-400">61</span>
                      <span className="text-slate-300 font-bold block">UX & Conversion</span>
                      <span className="text-[10px] text-amber-300 font-mono">🟡 Moderate</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="block font-black text-2xl text-amber-400">55</span>
                      <span className="text-slate-300 font-bold block">Local SEO</span>
                      <span className="text-[10px] text-amber-300 font-mono">⚠️ Needs Work</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="block font-black text-2xl text-emerald-400">90</span>
                      <span className="text-slate-300 font-bold block">Security & HTTPS</span>
                      <span className="text-[10px] text-emerald-300 font-mono">✅ Strong</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="block font-black text-2xl text-amber-400">70</span>
                      <span className="text-slate-300 font-bold block">Mobile Friendly</span>
                      <span className="text-[10px] text-amber-300 font-mono">🟡 Moderate</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-orange-400 uppercase font-mono block">AUDIT OBJECTIVES</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" /> Identify Crawl & Indexation Blockers</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" /> Evaluate On-Page Title Tags, Meta & Headings</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" /> UX & Conversion Flow Analysis (Online Order)</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-orange-400 shrink-0" /> Local SEO & Google Business Profile Audit (Delhi Outlets)</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-orange-400 uppercase font-mono block">AUDIT ROADMAP & METADATA</span>
                      <div className="grid grid-cols-2 gap-2 text-slate-300">
                        <div><strong className="text-white">Business:</strong> Restaurant Brands Asia Ltd.</div>
                        <div><strong className="text-white">Website:</strong> burgerking.in</div>
                        <div><strong className="text-white">Focus Region:</strong> New Delhi (30 Outlets)</div>
                        <div><strong className="text-white">Prepared By:</strong> Dharmesh</div>
                        <div><strong className="text-white">Role:</strong> Sr. SEO & Strategy Consultant</div>
                        <div><strong className="text-white">Date:</strong> June 2026</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl text-xs text-orange-200">
                    💡 <strong>Key Takeaway:</strong> Strong brand equity but significant technical and local SEO gaps costing organic traffic and online orders. Fixing key issues could drive 35–55% increase in organic visibility within 90 days.
                  </div>
                </div>
              )}

              {/* SLIDE 02: Phase 1 — Technical Audit & Crawlability */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PHASE 1 · TECHNICAL AUDIT & CRAWLABILITY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Crawlability, Core Web Vitals & <span className="text-orange-400">Technical Fixes</span>
                    </h2>
                  </div>

                  {/* Core Web Vitals Dashboard */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
                    <div className="p-3 bg-[#280c07] border border-red-500/30 rounded-xl text-center">
                      <span className="block font-mono text-slate-400 text-[10px]">LCP MOBILE</span>
                      <span className="block text-xl font-black text-red-400 my-0.5">4.8s</span>
                      <span className="text-[10px] text-red-300 bg-red-500/20 px-2 py-0.5 rounded font-bold">Critical</span>
                    </div>
                    <div className="p-3 bg-[#280c07] border border-amber-500/30 rounded-xl text-center">
                      <span className="block font-mono text-slate-400 text-[10px]">FID / INP</span>
                      <span className="block text-xl font-black text-amber-400 my-0.5">220ms</span>
                      <span className="text-[10px] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded font-bold">Needs Fix</span>
                    </div>
                    <div className="p-3 bg-[#280c07] border border-amber-500/30 rounded-xl text-center">
                      <span className="block font-mono text-slate-400 text-[10px]">CLS SCORE</span>
                      <span className="block text-xl font-black text-amber-400 my-0.5">0.19</span>
                      <span className="text-[10px] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded font-bold">Needs Fix</span>
                    </div>
                    <div className="p-3 bg-[#280c07] border border-amber-500/30 rounded-xl text-center">
                      <span className="block font-mono text-slate-400 text-[10px]">TTFB</span>
                      <span className="block text-xl font-black text-amber-400 my-0.5">1.2s</span>
                      <span className="text-[10px] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded font-bold">Needs Fix</span>
                    </div>
                    <div className="p-3 bg-[#280c07] border border-red-500/30 rounded-xl text-center col-span-2 sm:col-span-1">
                      <span className="block font-mono text-slate-400 text-[10px]">PAGESPEED MOBILE</span>
                      <span className="block text-xl font-black text-red-400 my-0.5">41</span>
                      <span className="text-[10px] text-red-300 bg-red-500/20 px-2 py-0.5 rounded font-bold">Critical</span>
                    </div>
                  </div>

                  {/* Redirects & Canonicals Table */}
                  <div className="bg-[#230b06] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-orange-400 border-b border-white/10 font-mono">
                        <tr>
                          <th className="p-2.5">Issue Type</th>
                          <th className="p-2.5">Count</th>
                          <th className="p-2.5">Priority</th>
                          <th className="p-2.5">Fix Required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold">Broken Links (404s)</td><td className="p-2.5 font-mono">18</td><td className="p-2.5 text-red-400 font-bold">High</td><td className="p-2.5">Fix or 301 redirect all 404s</td></tr>
                        <tr><td className="p-2.5 font-bold">Redirect Chains</td><td className="p-2.5 font-mono">7</td><td className="p-2.5 text-amber-400 font-bold">Medium</td><td className="p-2.5">Flatten redirect chains to single 301 hop</td></tr>
                        <tr><td className="p-2.5 font-bold">Missing Canonicals</td><td className="p-2.5 font-mono">23</td><td className="p-2.5 text-red-400 font-bold">High</td><td className="p-2.5">Add self-referencing canonicals sitewide</td></tr>
                        <tr><td className="p-2.5 font-bold">Self-Ref Canonicals Missing</td><td className="p-2.5 font-mono">40</td><td className="p-2.5 text-amber-400 font-bold">Medium</td><td className="p-2.5">Standardize canonical tags across all pages</td></tr>
                        <tr><td className="p-2.5 font-bold">Canonical ≠ Indexable</td><td className="p-2.5 font-mono">5</td><td className="p-2.5 text-red-400 font-bold">High</td><td className="p-2.5">Align canonical targets with indexable URLs</td></tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Priority Fix List */}
                  <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-orange-400 uppercase font-mono block">TOP 5 PRIORITY TECHNICAL FIXES</span>
                    <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                      <li><strong className="text-white">Fix Noindex on Menu/Category Pages:</strong> Incorrectly blocking key revenue pages from Google index.</li>
                      <li><strong className="text-white">Optimize Mobile PageSpeed (41 → 80+):</strong> Convert images to WebP, lazy loading, CDN, defer render-blocking JS.</li>
                      <li><strong className="text-white">Submit Sitemap to GSC & Add Delhi Outlets:</strong> Sitemap exists but not submitted to GSC; Delhi outlets missing.</li>
                      <li><strong className="text-white">Fix 18 Broken Links + 7 Redirect Chains:</strong> Prevents link equity leakage and crawl waste.</li>
                      <li><strong className="text-white">Add HSTS & Security Headers:</strong> Implement security headers to pass security audits.</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* SLIDE 03: On-Page SEO & Content Architecture */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PHASE 2 · ON-PAGE SEO & CONTENT ARCHITECTURE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Title Tags, Meta Descriptions & <span className="text-orange-400">Schema Gaps</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    {/* Title & Meta Audit */}
                    <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-orange-400 uppercase font-mono block">TITLE TAG & META DESCRIPTION AUDIT</span>
                      <ul className="space-y-2 text-slate-300">
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Homepage:</strong> Title too short, missing location ("New Delhi"). Meta description weak with no CTA.</li>
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Menu Page:</strong> Generic title without keywords. Meta description missing entirely.</li>
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Store Locator:</strong> Zero local keywords in title. Meta description missing entirely.</li>
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Offers Page:</strong> Generic copy, no brand mention in title tag.</li>
                      </ul>
                    </div>

                    {/* Schema Audit */}
                    <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-orange-400 uppercase font-mono block">SCHEMA MARKUP — ALL MISSING</span>
                      <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                        <div className="p-2 bg-red-500/10 border border-red-500/30 rounded text-red-300">❌ Restaurant Schema: Missing</div>
                        <div className="p-2 bg-red-500/10 border border-red-500/30 rounded text-red-300">❌ Menu Schema: Missing</div>
                        <div className="p-2 bg-red-500/10 border border-red-500/30 rounded text-red-300">❌ LocalBusiness Schema: Missing</div>
                        <div className="p-2 bg-red-500/10 border border-red-500/30 rounded text-red-300">❌ BreadcrumbList: Missing</div>
                        <div className="p-2 bg-red-500/10 border border-red-500/30 rounded text-red-300">❌ FAQPage Schema: Missing</div>
                        <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded text-amber-300">⚠️ Organization: Basic Only</div>
                      </div>
                      <p className="text-slate-400 text-[11px] pt-1">
                        70%+ of pages lack meta descriptions and structured schema markup, blocking rich snippets and local pack rankings.
                      </p>
                    </div>
                  </div>

                  {/* Keyword Optimization Map */}
                  <div className="bg-[#230b06] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-orange-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">Keyword</th><th className="p-2.5">Vol/Mo</th><th className="p-2.5">Current Rank</th><th className="p-2.5">Opportunity</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold text-white">burger king near me</td><td className="p-2.5 font-mono">550K</td><td className="p-2.5 text-emerald-400 font-bold">✅ Ranking</td><td className="p-2.5 text-slate-400">Maintain Position</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">best burgers in Delhi</td><td className="p-2.5 font-mono">18K</td><td className="p-2.5 text-red-400 font-bold">❌ Not Ranking</td><td className="p-2.5 text-orange-400 font-bold">High (Create Landing Page)</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">burger delivery Delhi</td><td className="p-2.5 font-mono">22K</td><td className="p-2.5 text-red-400 font-bold">❌ Not Ranking</td><td className="p-2.5 text-orange-400 font-bold">High (Delivery Hub Page)</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">veg burger Delhi</td><td className="p-2.5 font-mono">14K</td><td className="p-2.5 text-red-400 font-bold">❌ Not Ranking</td><td className="p-2.5 text-orange-400 font-bold">High (Veg Menu Page)</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">burger king menu price</td><td className="p-2.5 font-mono">90K</td><td className="p-2.5 text-amber-400 font-bold">⚠️ Page 3</td><td className="p-2.5 text-amber-300 font-bold">Medium (Add Price Schema)</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Content Architecture & Opportunities */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PHASE 2 CONT. · CONTENT ARCHITECTURE & OPPORTUNITIES</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Blog Launch, FAQ Schema & <span className="text-orange-400">Featured Snippets</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    {/* Content Gap Alert */}
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-2">
                      <span className="font-bold text-red-400 font-mono block uppercase">🚨 CRITICAL CONTENT GAP: NO BLOG</span>
                      <p className="text-slate-300 leading-relaxed">
                        Burger King India currently has <strong>ZERO content blog</strong>. Competitors like McDonald's and Domino's publish local food guides, menu deal breakdowns, and dietary option guides.
                      </p>
                      <div className="p-3 bg-[#230b06] border border-white/10 rounded-lg text-orange-300 font-bold">
                        Estimated Opportunity: 10,000 – 25,000 additional monthly organic visits by launching a blog with 8–12 keyword-targeted articles.
                      </div>
                    </div>

                    {/* FAQ Opportunities */}
                    <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-orange-400 font-mono block uppercase">❓ TOP FAQ OPPORTUNITIES (FAQPAGE SCHEMA)</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>What is the price of Whopper in India?</span><span className="font-mono text-orange-400 font-bold">90K/mo</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Does Burger King India have veg options?</span><span className="font-mono text-orange-400 font-bold">22K/mo</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>What are Burger King Delhi outlet timings?</span><span className="font-mono text-orange-400 font-bold">18K/mo</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>How to order Burger King online in Delhi?</span><span className="font-mono text-orange-400 font-bold">14K/mo</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Is Burger King India halal certified?</span><span className="font-mono text-orange-400 font-bold">12K/mo</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* Recommended Blog Calendar Table */}
                  <div className="bg-[#230b06] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-orange-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">Article Title</th><th className="p-2.5">Target Keyword</th><th className="p-2.5">Est. Monthly Traffic</th><th className="p-2.5">Priority</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold text-white">Best Burgers in Delhi 2026</td><td className="p-2.5 font-mono">best burgers Delhi</td><td className="p-2.5 font-mono text-emerald-400 font-bold">3,000–5,000/mo</td><td className="p-2.5 text-red-400 font-bold">High</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">BK Veg Menu — Complete Guide</td><td className="p-2.5 font-mono">veg burger Delhi</td><td className="p-2.5 font-mono text-emerald-400 font-bold">2,000–3,500/mo</td><td className="p-2.5 text-red-400 font-bold">High</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Burger King Offers & Coupons Delhi</td><td className="p-2.5 font-mono">BK offers today</td><td className="p-2.5 font-mono text-emerald-400 font-bold">4,000–6,000/mo</td><td className="p-2.5 text-red-400 font-bold">High</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">BK vs McDonald's India Comparison</td><td className="p-2.5 font-mono">BK vs McDonald's</td><td className="p-2.5 font-mono text-emerald-400 font-bold">1,500–2,500/mo</td><td className="p-2.5 text-amber-400 font-bold">Medium</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Burger King Delivery Delhi Guide</td><td className="p-2.5 font-mono">burger delivery Delhi</td><td className="p-2.5 font-mono text-emerald-400 font-bold">2,500–4,000/mo</td><td className="p-2.5 text-red-400 font-bold">High</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Phase 3 — UX & Conversion Audit */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PHASE 3 · UX & CONVERSION AUDIT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Homepage Layout, CTAs & <span className="text-orange-400">Conversion Funnel</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    {/* Leaky vs Recommended Funnel */}
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-2">
                      <span className="font-bold text-red-400 font-mono block uppercase">❌ CURRENT LEAKY FUNNEL</span>
                      <ol className="list-decimal list-inside space-y-2 text-slate-300">
                        <li>User lands on homepage — no "Order Now" CTA above fold</li>
                        <li>Scrolls 3+ times to find menu — high user drop-off</li>
                        <li>Redirected to Swiggy/Zomato — lead data & margin lost</li>
                        <li>No email/SMS capture — zero retargeting capability</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-2">
                      <span className="font-bold text-emerald-400 font-mono block uppercase">✅ RECOMMENDED OPTIMIZED FUNNEL</span>
                      <ol className="list-decimal list-inside space-y-2 text-slate-300">
                        <li>Hero CTA "Order Now" above fold — instant order action</li>
                        <li>1-click to menu with filters — frictionless selection</li>
                        <li>Lead capture before redirect — user data retained</li>
                        <li>WhatsApp/email retargeting — automated repeat orders</li>
                      </ol>
                    </div>
                  </div>

                  {/* Trust Signals & Benchmarks */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-orange-400 font-mono block uppercase">TRUST SIGNALS AUDIT</span>
                      <div className="space-y-1 text-slate-300">
                        <div>❌ Customer Reviews: Missing</div>
                        <div>❌ FSSAI Hygiene Badge: Missing</div>
                        <div>❌ Social Proof Numbers: Missing</div>
                        <div>❌ App Store Ratings: Missing</div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-orange-400 font-mono block uppercase">MOBILE UX ISSUES</span>
                      <div className="space-y-1 text-slate-300">
                        <div>⚠️ Hero text overlaps burger image</div>
                        <div>⚠️ Touch targets under 44px</div>
                        <div>⚠️ Horizontal scroll on menu bar</div>
                        <div>⚠️ Pop-up covers menu content</div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-orange-400 font-mono block uppercase">CRO BENCHMARKS</span>
                      <div className="space-y-1 text-slate-300">
                        <div><strong className="text-white">Conversion Rate:</strong> 1.8% → <span className="text-emerald-400 font-bold">3.5–4.5% (+94%)</span></div>
                        <div><strong className="text-white">Bounce Rate:</strong> 68% → <span className="text-emerald-400 font-bold">45–50%</span></div>
                        <div><strong className="text-white">Avg Session:</strong> 1m 20s → <span className="text-emerald-400 font-bold">2m 30s+</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Phase 4 — Local SEO & Google Business Profile */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PHASE 4 · LOCAL SEO & GOOGLE BUSINESS PROFILE AUDIT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      30 Delhi Outlets, Zero Dedicated <span className="text-orange-400">Location Pages</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-orange-400 font-mono block uppercase">GBP AUDIT & RATING SCORES</span>
                      <div className="grid grid-cols-2 gap-2 text-slate-300">
                        <div><strong className="text-white">Average Rating:</strong> 3.8 – 4.2 ★</div>
                        <div><strong className="text-white">Response Rate:</strong> ~30% (Low)</div>
                        <div><strong className="text-white">Unanswered Negatives:</strong> 25%</div>
                        <div><strong className="text-white">Target Rating:</strong> 4.5 ★+ (90 Days)</div>
                      </div>
                      <div className="p-2.5 bg-red-500/10 border border-red-500/30 rounded text-red-300">
                        🚨 Zero dedicated Delhi outlet pages exist on burgerking.in. 30 outlets rely entirely on generic store locator script.
                      </div>
                    </div>

                    <div className="p-4 bg-[#230b06] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-orange-400 font-mono block uppercase">PRIORITY DELHI HIGH-TRAFFIC AREAS</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li><strong className="text-white">Tier 1 Areas:</strong> Connaught Place, Saket, Lajpat Nagar, Rajouri Garden</li>
                        <li><strong className="text-white">Tier 2 Areas:</strong> Dwarka, Rohini, Janakpuri, Vasant Kunj</li>
                        <li><strong className="text-white">Expansion:</strong> Noida, Gurgaon, Faridabad</li>
                      </ul>
                      <div className="p-2.5 bg-white/5 border border-white/10 rounded font-mono text-[11px] text-orange-300">
                        Recommended URL: /locations/delhi/connaught-place/
                      </div>
                    </div>
                  </div>

                  {/* Local Search Opportunity Table */}
                  <div className="bg-[#230b06] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-orange-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">Local Search Query</th><th className="p-2.5">Vol/Mo</th><th className="p-2.5">Current Rank</th><th className="p-2.5">Action Plan</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold text-white">burger king near me</td><td className="p-2.5 font-mono">550K</td><td className="p-2.5 text-amber-400 font-bold">⚠️ Partial</td><td className="p-2.5">Optimize GBP + LocalBusiness Schema</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">burger king Delhi</td><td className="p-2.5 font-mono">90K</td><td className="p-2.5 text-red-400 font-bold">❌ Not Ranking</td><td className="p-2.5">Build Delhi Hub Landing Page</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">burger king Connaught Place</td><td className="p-2.5 font-mono">22K</td><td className="p-2.5 text-red-400 font-bold">❌ Not Ranking</td><td className="p-2.5">Build CP Outlet Landing Page</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">fast food near me Delhi</td><td className="p-2.5 font-mono">40K</td><td className="p-2.5 text-red-400 font-bold">❌ Not Ranking</td><td className="p-2.5">Local Category Content + GBP</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Before vs After Transformation Comparison */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">BEFORE VS AFTER · TRANSFORMATION COMPARISON</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Projected Metric Uplift & <span className="text-orange-400">Score Growth</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-xs text-center">
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">TECHNICAL</span>
                      <span className="text-lg font-black text-red-400">58 → <span className="text-emerald-400">88</span></span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">ON-PAGE</span>
                      <span className="text-lg font-black text-red-400">52 → <span className="text-emerald-400">85</span></span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">UX & CRO</span>
                      <span className="text-lg font-black text-amber-400">61 → <span className="text-emerald-400">84</span></span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">LOCAL SEO</span>
                      <span className="text-lg font-black text-red-400">55 → <span className="text-emerald-400">90</span></span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">SECURITY</span>
                      <span className="text-lg font-black text-emerald-400">90 → 97</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">MOBILE</span>
                      <span className="text-lg font-black text-amber-400">70 → <span className="text-emerald-400">92</span></span>
                    </div>
                    <div className="p-3 bg-[#280c07] border border-orange-500/40 rounded-xl col-span-2 sm:col-span-1">
                      <span className="text-orange-300 text-[10px] block font-mono">OVERALL</span>
                      <span className="text-xl font-black text-orange-400">57.6 → <span className="text-emerald-400">89.3</span></span>
                    </div>
                  </div>

                  <div className="bg-[#230b06] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[500px]">
                      <thead className="bg-white/5 text-orange-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">Metric</th><th className="p-2.5">Before</th><th className="p-2.5">After</th><th className="p-2.5">Projected Change</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold">Mobile PageSpeed</td><td className="p-2.5 font-mono text-red-400">41/100</td><td className="p-2.5 font-mono text-emerald-400">80+</td><td className="p-2.5 text-emerald-300 font-bold">+95% Improvement</td></tr>
                        <tr><td className="p-2.5 font-bold">LCP Mobile</td><td className="p-2.5 font-mono text-red-400">4.8s</td><td className="p-2.5 font-mono text-emerald-400">&lt;2.0s</td><td className="p-2.5 text-emerald-300 font-bold">-58% Load Time</td></tr>
                        <tr><td className="p-2.5 font-bold">Monthly Delhi Organic Traffic</td><td className="p-2.5 font-mono">15K</td><td className="p-2.5 font-mono text-emerald-400">45K–55K</td><td className="p-2.5 text-emerald-300 font-bold">+200–267% Uplift</td></tr>
                        <tr><td className="p-2.5 font-bold">Conversion Rate</td><td className="p-2.5 font-mono">1.8%</td><td className="p-2.5 font-mono text-emerald-400">3.5–4.5%</td><td className="p-2.5 text-emerald-300 font-bold">+94–150% Orders</td></tr>
                        <tr><td className="p-2.5 font-bold">Delhi Location Pages</td><td className="p-2.5 font-mono text-red-400">0</td><td className="p-2.5 font-mono text-emerald-400">15+</td><td className="p-2.5 text-emerald-300 font-bold">New Local Footprint</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Phase 5 — Final QA & Prioritized Improvements */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">PHASE 5 · FINAL QA & PRIORITIZED IMPROVEMENTS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      20 Actionable <span className="text-orange-400">Improvement Steps</span>
                    </h2>
                  </div>

                  <div className="bg-[#230b06] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-orange-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2">#</th><th className="p-2">Improvement Task</th><th className="p-2">Category</th><th className="p-2">Timeline</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2 font-mono">1</td><td className="p-2 font-bold text-white">Fix robots.txt — unblock menu pages</td><td className="p-2 text-red-400">Technical</td><td className="p-2 font-mono">Day 1</td></tr>
                        <tr><td className="p-2 font-mono">2</td><td className="p-2 font-bold text-white">Optimize LCP — WebP + CDN + lazy load</td><td className="p-2 text-red-400">Technical</td><td className="p-2 font-mono">Week 1</td></tr>
                        <tr><td className="p-2 font-mono">3</td><td className="p-2 font-bold text-white">Rewrite all title tags (keyword-rich)</td><td className="p-2 text-orange-400">On-Page</td><td className="p-2 font-mono">Week 1</td></tr>
                        <tr><td className="p-2 font-mono">4</td><td className="p-2 font-bold text-white">Add meta descriptions to all pages</td><td className="p-2 text-orange-400">On-Page</td><td className="p-2 font-mono">Week 1</td></tr>
                        <tr><td className="p-2 font-mono">5</td><td className="p-2 font-bold text-white">Implement Restaurant + Menu schema</td><td className="p-2 text-amber-400">Schema</td><td className="p-2 font-mono">Week 2</td></tr>
                        <tr><td className="p-2 font-mono">6</td><td className="p-2 font-bold text-white">Fix 18 broken links + 7 redirect chains</td><td className="p-2 text-red-400">Technical</td><td className="p-2 font-mono">Week 1</td></tr>
                        <tr><td className="p-2 font-mono">7</td><td className="p-2 font-bold text-white">Create 15 Delhi location landing pages</td><td className="p-2 text-emerald-400">Local SEO</td><td className="p-2 font-mono">Month 2</td></tr>
                        <tr><td className="p-2 font-mono">8</td><td className="p-2 font-bold text-white">Launch content blog (8–12 articles)</td><td className="p-2 text-blue-400">Content</td><td className="p-2 font-mono">Month 2</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl text-xs text-orange-200">
                    ⚡ <strong>Quick Win Impact:</strong> Top 10 critical fixes implementable within 2 weeks, projected to deliver 40–60% improvement in organic visibility and lead generation for New Delhi.
                  </div>
                </div>
              )}

              {/* SLIDE 09: 90-Day Sprint Implementation Plan */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">90-DAY ROADMAP · SPRINT IMPLEMENTATION PLAN</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      5-Sprint <span className="text-orange-400">Execution Framework</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                    <div className="p-3 bg-[#230b06] border border-red-500/30 rounded-xl space-y-1.5">
                      <span className="font-mono text-red-400 font-bold text-[10px] block uppercase">SPRINT 1 (DAYS 1-7)</span>
                      <span className="font-bold text-white block">Technical Emergency</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• Fix robots.txt</li>
                        <li>• Submit sitemap</li>
                        <li>• Fix 18 broken links</li>
                        <li>• WebP conversion</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#230b06] border border-orange-500/30 rounded-xl space-y-1.5">
                      <span className="font-mono text-orange-400 font-bold text-[10px] block uppercase">SPRINT 2 (DAYS 8-21)</span>
                      <span className="font-bold text-white block">On-Page & Schema</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• Title/Meta rewrites</li>
                        <li>• Restaurant Schema</li>
                        <li>• Menu Schema</li>
                        <li>• FAQPage Schema</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#230b06] border border-amber-500/30 rounded-xl space-y-1.5">
                      <span className="font-mono text-amber-400 font-bold text-[10px] block uppercase">SPRINT 3 (DAYS 22-45)</span>
                      <span className="font-bold text-white block">Local SEO & GBP</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• 15 Delhi Pages</li>
                        <li>• LocalBusiness Schema</li>
                        <li>• GBP Optimization</li>
                        <li>• NAP Alignment</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#230b06] border border-blue-500/30 rounded-xl space-y-1.5">
                      <span className="font-mono text-blue-400 font-bold text-[10px] block uppercase">SPRINT 4 (DAYS 46-60)</span>
                      <span className="font-bold text-white block">UX & CRO Redesign</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• Hero CTA redesign</li>
                        <li>• Review widget</li>
                        <li>• FSSAI trust bar</li>
                        <li>• Site search add</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#230b06] border border-emerald-500/30 rounded-xl space-y-1.5">
                      <span className="font-mono text-emerald-400 font-bold text-[10px] block uppercase">SPRINT 5 (DAYS 61-90)</span>
                      <span className="font-bold text-white block">Content & Blog</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• Content calendar</li>
                        <li>• Publish 4 guides</li>
                        <li>• GSC/GA4 setup</li>
                        <li>• Full re-audit</li>
                      </ul>
                    </div>
                  </div>

                  {/* 90-Day KPI Dashboard */}
                  <div className="bg-[#230b06] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[500px]">
                      <thead className="bg-white/5 text-orange-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">KPI Metric</th><th className="p-2.5">Baseline</th><th className="p-2.5">Day 30 Target</th><th className="p-2.5">Day 60 Target</th><th className="p-2.5">Day 90 Target</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300 font-mono">
                        <tr><td className="p-2.5 text-white font-bold">Mobile PageSpeed</td><td>41/100</td><td className="text-amber-300">65</td><td className="text-amber-300">75</td><td className="text-emerald-400 font-bold">85+</td></tr>
                        <tr><td className="p-2.5 text-white font-bold">Indexed Pages</td><td>150</td><td>200+</td><td>260+</td><td className="text-emerald-400 font-bold">320+</td></tr>
                        <tr><td className="p-2.5 text-white font-bold">Delhi Organic Traffic</td><td>15K</td><td>22K</td><td>35K</td><td className="text-emerald-400 font-bold">50K/mo</td></tr>
                        <tr><td className="p-2.5 text-white font-bold">GBP Avg Rating</td><td>3.9 ★</td><td>4.1 ★</td><td>4.3 ★</td><td className="text-emerald-400 font-bold">4.5 ★+</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Final Verdict, EEAT & Portfolio Summary */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase">FINAL VERDICT · E-E-A-T ANALYSIS & SUMMARY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      E-E-A-T Scorecard & <span className="text-orange-400">Consultant Conclusion</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="text-slate-400 text-[10px] font-mono block">EXPERIENCE</span>
                      <span className="text-2xl font-black text-amber-400 block">4/10</span>
                      <span className="text-[10px] text-slate-300">No UGC / reviews</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="text-slate-400 text-[10px] font-mono block">EXPERTISE</span>
                      <span className="text-2xl font-black text-red-400 block">3/10</span>
                      <span className="text-[10px] text-slate-300">No blog / nutrition</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="text-slate-400 text-[10px] font-mono block">AUTHORITATIVENESS</span>
                      <span className="text-2xl font-black text-amber-400 block">6/10</span>
                      <span className="text-[10px] text-slate-300">Strong brand power</span>
                    </div>
                    <div className="p-3 bg-[#230b06] border border-white/10 rounded-xl text-center space-y-1">
                      <span className="text-slate-400 text-[10px] font-mono block">TRUSTWORTHINESS</span>
                      <span className="text-2xl font-black text-amber-400 block">5/10</span>
                      <span className="text-[10px] text-slate-300">HTTPS active, no FSSAI</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#280c07] border border-orange-500/30 rounded-xl space-y-3 text-xs">
                    <span className="font-bold text-orange-400 font-mono block uppercase">💬 CLOSING STATEMENT</span>
                    <p className="text-slate-200 text-sm leading-relaxed italic border-l-2 border-orange-500 pl-3">
                      "A great website audit doesn't just find problems — it builds a clear, prioritized path from technical debt to commercial growth. Burger King India has the brand equity. Now it needs the digital infrastructure to match."
                    </p>
                    <div className="flex flex-wrap items-center justify-between text-slate-400 pt-2 border-t border-white/10 text-[11px]">
                      <div><strong>Consultant:</strong> Dharmesh (Senior SEO & Strategy Consultant)</div>
                      <div><strong>Contact:</strong> dk3891315@gmail.com | +91 8287107944</div>
                      <div><strong>Portfolio:</strong> adfinitydigital.netlify.app</div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl text-xs text-orange-200 text-center font-bold">
                    🏁 Final Verdict: Burger King India scores 57.6/100. With 20 prioritized improvements across 5 phases, projected to reach 89.1/100 — unlocking 3x organic traffic, 2x conversion rate, and dominant local search presence in New Delhi within 90 days.
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
