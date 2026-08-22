import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, Truck, ShieldCheck, Zap, Layers, Award, Users, ArrowRight, BarChart3, TrendingUp, Building2, Calculator, CheckCircle, Download
} from "lucide-react";

interface DelhiveryCaseStudyDeckProps {
  onClose: () => void;
}

export default function DelhiveryCaseStudyDeck({ onClose }: DelhiveryCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#071318] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col overflow-hidden text-white min-h-[88vh] max-h-[94vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0a2028] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-cyan-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5" /> DELHIVERY
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              SEO + GEO + AEO Audit Report — Complete Case Study
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Delhivery_SEO_GEO_AEO_Audit_Report.pdf?download=true"
              download="Delhivery_SEO_GEO_AEO_Audit_Report.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-cyan-600/20 hover:bg-cyan-600 text-cyan-400 hover:text-white border border-cyan-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-cyan-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-cyan-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-cyan-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#040a0d] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full space-y-6"
            >
              {/* SLIDE 01: Audit Overview & Scorecard */}
              {currentSlide === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase rounded-full">
                        PORTFOLIO PROJECT · AUDIT OVERVIEW
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Delhivery.com <span className="text-cyan-400">SEO + GEO + AEO Audit</span>
                      </h1>
                      <p className="text-cyan-300 text-sm sm:text-base font-bold mt-1">
                        India's Largest Integrated Logistics & Supply Chain Platform
                      </p>
                    </div>

                    <div className="p-4 bg-[#0a2028] border border-cyan-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">OVERALL HEALTH SCORE</span>
                      <span className="text-3xl font-black text-red-400 my-1 block">45<span className="text-xl text-slate-400">/100</span></span>
                      <span className="text-[10px] font-bold text-red-300 bg-red-500/20 px-2 py-0.5 rounded-full inline-block">
                        🚨 Critical — Needs Major Fixes
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">TECHNICAL SEO</span>
                      <span className="text-xl font-black text-amber-400 block my-1">58/100</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">ON-PAGE SEO</span>
                      <span className="text-xl font-black text-amber-400 block my-1">52/100</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">CONTENT DEPTH</span>
                      <span className="text-xl font-black text-red-400 block my-1">45/100</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">GEO / LOCAL SEO</span>
                      <span className="text-xl font-black text-red-400 block my-1">40/100</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">SCHEMA MARKUP</span>
                      <span className="text-xl font-black text-red-400 block my-1">35/100</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">AEO / ANSWER ENGINE</span>
                      <span className="text-xl font-black text-red-400 block my-1">30/100</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">EEAT SIGNALS</span>
                      <span className="text-xl font-black text-amber-400 block my-1">55/100</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] font-mono block">OVERALL DIGITAL</span>
                      <span className="text-xl font-black text-red-400 block my-1">45/100</span>
                    </div>
                  </div>

                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs text-cyan-200">
                    💡 Despite being India's #1 logistics brand with ₹9,372 Cr revenue and 18,850+ pin codes, Delhivery's digital search presence scores critically low across SEO, GEO, and AEO — representing a massive untapped growth opportunity.
                  </div>
                </div>
              )}

              {/* SLIDE 02: Phase 1 — SEO Audit: Technical + On-Page */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">PHASE 1 · SEO AUDIT: TECHNICAL + ON-PAGE ANALYSIS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Crawlability, Indexation & <span className="text-cyan-400">EEAT Assessment</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#0a2028] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-cyan-400 font-mono block uppercase">CRAWLABILITY & INDEXATION ISSUES</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• <strong>JS Rendering:</strong> Heavy JS dependency — Googlebot content rendering risk.</li>
                        <li>• <strong>Core Web Vitals:</strong> LCP &gt;4.8s, CLS layout shifts detected on mobile.</li>
                        <li>• <strong>Canonical Tags:</strong> Missing/conflicting canonicals on key revenue pages.</li>
                        <li>• <strong>Redirect Chains:</strong> Multiple 301 chains adding latency and wasting crawl budget.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#0a2028] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-cyan-400 font-mono block uppercase">EEAT SIGNALS ASSESSMENT</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• <strong>Expertise (Partial):</strong> No author bios, no logistics expert bylines.</li>
                        <li>• <strong>Experience (Absent):</strong> No customer case studies or verified testimonials.</li>
                        <li>• <strong>Authoritativeness (Strong):</strong> Wikipedia and major media coverage present.</li>
                        <li>• <strong>Trustworthiness (Partial):</strong> No review schema or ISO/NABL badges on pages.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Phase 1 (Cont.) — Content Depth, Schema & Linking */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">PHASE 1 CONT. · CONTENT DEPTH, SCHEMA & INTERNAL LINKING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      11 of 12 Schema Types Missing & <span className="text-cyan-400">Content Volume Gap</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-red-400 font-mono block uppercase">🚨 SCHEMA & STRUCTURED DATA AUDIT</span>
                    <p className="text-slate-300">
                      11 of 12 schema types are completely absent. Implementing FAQ, LocalBusiness, Service, and Organization schema alone could increase SERP real estate by up to 30%.
                    </p>
                  </div>

                  <div className="p-4 bg-[#0a2028] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-cyan-400 font-mono block uppercase">CONTENT VOLUME VS COMPETITORS</span>
                    <div className="space-y-1.5 text-slate-300 font-mono">
                      <div>BlueDart: 200+ articles (████████████)</div>
                      <div>FedEx India: 150+ articles (█████████)</div>
                      <div>DTDC: 50+ articles (████)</div>
                      <div className="text-red-400 font-bold">Delhivery: &lt;10 articles (▌) ← Critical Gap</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Phase 2 — GEO Audit: Local & Geographic SEO */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">PHASE 2 · GEO AUDIT: LOCAL & GEOGRAPHIC SEO</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Zero Dedicated City Landing Pages for <span className="text-cyan-400">18,850+ Pin Codes</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-[#0a2028] border border-white/10 rounded-xl space-y-3 text-xs">
                    <span className="font-bold text-cyan-400 font-mono block uppercase">RECOMMENDED CITY URL STRUCTURE</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] text-slate-300">
                      <div className="p-2 bg-white/5 rounded">/logistics-services/mumbai/</div>
                      <div className="p-2 bg-white/5 rounded">/logistics-services/bengaluru/</div>
                      <div className="p-2 bg-white/5 rounded">/courier-service/delhi-ncr/</div>
                      <div className="p-2 bg-white/5 rounded">/warehousing/hyderabad/</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Phase 3 — AEO Audit */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">PHASE 3 · AEO AUDIT: ANSWER ENGINE OPTIMIZATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      AEO Score: 30/100 — <span className="text-cyan-400">Invisible to AI Answer Engines</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-red-400 font-mono block uppercase">🚨 DIRECT ANSWER QUALITY ASSESSMENT</span>
                    <p className="text-slate-300">
                      Delhivery.com fails to provide direct answers for high-volume queries like "How to track Delhivery shipment?", "Delhivery courier charges per kg", and "How to file a complaint with Delhivery?". Competitor comparison sites rank instead.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Priority Action Matrix */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">PRIORITY ACTION MATRIX · 20 FIXES</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Effort vs. Impact <span className="text-cyan-400">Quadrant Analysis</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-1">
                      <span className="font-bold text-emerald-400 font-mono block">🚀 DO FIRST (QUICK WINS)</span>
                      <p className="text-slate-300 text-[11px]">• Deploy FAQ Schema · Title Tag Rewrites · Knowledge Panel Verification · NAP Fixes · Speakable Schema</p>
                    </div>
                    <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl space-y-1">
                      <span className="font-bold text-blue-400 font-mono block">🎯 PLAN & EXECUTE</span>
                      <p className="text-slate-300 text-[11px]">• Core Web Vitals Fixes · 30+ City Landing Pages · Pillar Content · Blog + Clusters</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Content Strategy & Topic Cluster Roadmap */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">CONTENT STRATEGY & TOPIC CLUSTER ROADMAP</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Pillar + Cluster Architecture for <span className="text-cyan-400">Logistics Authority</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-[#0a2028] border border-cyan-500/30 rounded-xl text-center text-xs">
                    <strong className="text-cyan-300 text-sm block">Pillar Page: "Complete Guide to Logistics & Courier Services in India"</strong>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3 text-slate-300 font-mono text-[11px]">
                      <div className="p-2 bg-white/5 rounded">Express Delivery</div>
                      <div className="p-2 bg-white/5 rounded">Freight & B2B</div>
                      <div className="p-2 bg-white/5 rounded">Warehousing</div>
                      <div className="p-2 bg-white/5 rounded">E-commerce</div>
                      <div className="p-2 bg-white/5 rounded">Cross-Border</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Schema Implementation & Technical Fixes */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">SCHEMA IMPLEMENTATION GUIDE & TECHNICAL FIXES</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      2-Week Schema Sprint & <span className="text-cyan-400">CWV Optimization</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs text-cyan-200">
                    ⚡ <strong>2-Week Schema Sprint Impact:</strong> Week 1 (Organization + FAQ + Breadcrumb) unlocks FAQ rich results and activates Knowledge Panel. Week 2 (LocalBusiness + Service) grants local pack eligibility and +30% SERP real estate.
                  </div>
                </div>
              )}

              {/* SLIDE 09: 6-Month Execution Roadmap & KPIs */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">6-MONTH EXECUTION ROADMAP & KPI FRAMEWORK</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Target Metric Progression: <span className="text-cyan-400">+60% Organic Traffic</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">ORGANIC TRAFFIC</span>
                      <span className="text-xl font-black text-emerald-400">+60% Uplift</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">TOP 10 KEYWORDS</span>
                      <span className="text-xl font-black text-emerald-400">30 → 120+</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">FEATURED SNIPPETS</span>
                      <span className="text-xl font-black text-emerald-400">0 → 15+</span>
                    </div>
                    <div className="p-3 bg-[#0a2028] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">HEALTH SCORE</span>
                      <span className="text-xl font-black text-emerald-400">45 → 88-92/100</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Consolidated Audit Report & Final Verdict */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">CONSOLIDATED AUDIT REPORT & FINAL VERDICT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Final Verdict: <span className="text-amber-400">Needs Major Fixes</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-[#0a2028] border border-cyan-500/30 rounded-xl text-xs space-y-3">
                    <p className="text-slate-200 text-sm leading-relaxed italic border-l-2 border-cyan-400 pl-3">
                      "A great SEO audit doesn't just find problems — it builds a clear path from crawl errors to commercial growth. Delhivery has the brand, the scale, and the operational excellence. Now it needs the digital foundation to match."
                    </p>
                    <div className="flex flex-wrap items-center justify-between text-slate-400 pt-2 border-t border-white/10 text-[11px]">
                      <div><strong>Consultant:</strong> Dharmesh (Senior Digital Marketing Consultant)</div>
                      <div><strong>Contact:</strong> dk3891315@gmail.com | +91 8287107944</div>
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
