import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, HeartPulse, ShieldCheck, Zap, Layers, Award, Users, ArrowRight, BarChart3, Activity, CheckCircle, PhoneCall, Download
} from "lucide-react";

interface LalPathLabsCaseStudyDeckProps {
  onClose: () => void;
}

export default function LalPathLabsCaseStudyDeck({ onClose }: LalPathLabsCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0a1813] border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col overflow-hidden text-white min-h-[88vh] max-h-[94vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0e271f] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-emerald-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <HeartPulse className="w-3.5 h-3.5" /> DR. LAL PATHLABS
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Strategic Business Analysis & Digital Marketing Strategy — Case Study
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Dr_Lal_PathLabs_Strategic_Business_Analysis.pdf?download=true"
              download="Dr_Lal_PathLabs_Strategic_Business_Analysis.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-emerald-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-emerald-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-emerald-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#050e0b] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full space-y-6"
            >
              {/* SLIDE 01: Company Profile */}
              {currentSlide === 1 && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 border-b border-white/10 pb-6">
                    <div>
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase rounded-full">
                        PORTFOLIO CASE STUDY · PAGE 01
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black text-white mt-3 tracking-tight">
                        Dr. Lal PathLabs <span className="text-emerald-400">Company Profile</span>
                      </h1>
                      <p className="text-emerald-300 text-sm sm:text-base font-bold mt-1">
                        India's Largest Diagnostics Chain — Trusted, Accurate, Accessible
                      </p>
                    </div>

                    <div className="p-4 bg-[#0e271f] border border-emerald-500/30 rounded-xl text-center min-w-[200px]">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">FY25 REVENUE</span>
                      <span className="text-3xl font-black text-emerald-400 my-1 block">₹2,461 Cr</span>
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full inline-block">
                        +10.5% YoY Growth
                      </span>
                    </div>
                  </div>

                  {/* Key Financial & Operational Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">FOUNDED</span>
                      <span className="text-xl font-black text-white">1949</span>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">75+ Years Excellence</span>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">NETWORK SCALE</span>
                      <span className="text-xl font-black text-white">6,607 PSCs</span>
                      <span className="text-[10px] text-slate-300 block mt-0.5">298 Labs · 12,365 Pickups</span>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">PATIENTS SERVED</span>
                      <span className="text-xl font-black text-white">28.8 Million</span>
                      <span className="text-[10px] text-slate-300 block mt-0.5">86M Samples Processed</span>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">ACCREDITATION</span>
                      <span className="text-xl font-black text-emerald-400">40 NABL Labs</span>
                      <span className="text-[10px] text-slate-300 block mt-0.5">2 CAP Accredited · BSE/NSE</span>
                    </div>
                  </div>

                  {/* Core Services */}
                  <div className="p-4 bg-[#0e271f] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-emerald-400 font-mono block uppercase">🩸 CORE SERVICES (3,172 PATHOLOGY TESTS)</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300 text-[11px]">
                      <div className="p-2 bg-white/5 rounded">• Routine Diagnostics</div>
                      <div className="p-2 bg-white/5 rounded">• Preventive SwasthFit Packages</div>
                      <div className="p-2 bg-white/5 rounded">• Specialist Testing</div>
                      <div className="p-2 bg-white/5 rounded">• Home Sample Collection</div>
                      <div className="p-2 bg-white/5 rounded">• Corporate Screening</div>
                      <div className="p-2 bg-white/5 rounded">• Imaging (Select Centers)</div>
                      <div className="p-2 bg-white/5 rounded">• Digital Reports App</div>
                      <div className="p-2 bg-white/5 rounded">• Hospital Partnerships</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Target Audience Profile */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 02 · TARGET AUDIENCE & SEGMENTATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Audience Profile & <span className="text-emerald-400">B2C/B2B Segments</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#0e271f] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-emerald-400 font-mono block uppercase">B2C CONSUMER SEGMENTS</span>
                      <ul className="space-y-2 text-slate-300">
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Individual Patients (25–65 yrs):</strong> Doctor-referred, price-conscious, values accurate results.</li>
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Families & Preventive Buyers (30–55 yrs):</strong> Annual checkups, package-oriented (SwasthFit).</li>
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Senior Citizens (60+ yrs):</strong> Chronic disease monitoring, demands home collection convenience.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#0e271f] border border-white/10 rounded-xl space-y-3">
                      <span className="font-bold text-emerald-400 font-mono block uppercase">B2B INSTITUTIONAL SEGMENTS</span>
                      <ul className="space-y-2 text-slate-300">
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Corporate Organizations:</strong> HR managers, bulk employee health packages, volume pricing.</li>
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Hospitals & Clinics:</strong> Outsources specialized pathology testing to LalPathLabs.</li>
                        <li className="p-2 bg-white/5 rounded"><strong className="text-white">Insurance & Franchise Partners:</strong> Cashless diagnostic ties and 500+ city franchise expansion.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Customer Problem & Value Proposition */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 03 · CUSTOMER PROBLEMS & VALUE PROPOSITION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Pain Points Heatmap & <span className="text-emerald-400">Value Gaps</span>
                    </h2>
                  </div>

                  {/* Heatmap */}
                  <div className="p-4 bg-[#0e271f] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-emerald-400 font-mono block uppercase">🔥 PAIN POINTS HEATMAP</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-[11px]">
                      <div className="p-2 bg-red-500/20 rounded">Result Accuracy: 95%</div>
                      <div className="p-2 bg-red-500/20 rounded">Pricing Transparency: 90%</div>
                      <div className="p-2 bg-amber-500/20 rounded">Waiting Time: 78%</div>
                      <div className="p-2 bg-amber-500/20 rounded">Report Comprehension: 72%</div>
                      <div className="p-2 bg-amber-500/20 rounded">Tier 2/3 Access: 68%</div>
                      <div className="p-2 bg-blue-500/20 rounded">App UX: 55%</div>
                      <div className="p-2 bg-blue-500/20 rounded">Post-Result Advice: 50%</div>
                      <div className="p-2 bg-emerald-500/20 rounded">Doctor Referral: 40%</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#0e271f] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-emerald-400 font-mono block uppercase">VALUE PROPOSITION OPPORTUNITIES</span>
                      <ul className="space-y-1.5 text-slate-300">
                        <li>• <strong>Report Simplification:</strong> Visual color-coded reports with plain language.</li>
                        <li>• <strong>Post-Report Doctor Connect:</strong> Free 15-min teleconsultation after report.</li>
                        <li>• <strong>Transparent Pricing:</strong> Clear price guarantee and package comparison.</li>
                        <li>• <strong>Family Health Vault:</strong> Centralized digital health records for all family members.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#0e271f] border border-white/10 rounded-xl space-y-2">
                      <span className="font-bold text-emerald-400 font-mono block uppercase">HIGH-IMPACT MESSAGING</span>
                      <blockquote className="p-3 bg-white/5 border-l-2 border-emerald-400 italic text-slate-200">
                        "75 years of trust — your health, our promise. NABL-certified accuracy delivered to your doorstep in 24 hours."
                      </blockquote>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Competitive Landscape */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 04 · COMPETITIVE LANDSCAPE & MARKET ANALYSIS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Market Comparison vs <span className="text-emerald-400">Metropolis, Thyrocare & D2C Players</span>
                    </h2>
                  </div>

                  <div className="bg-[#0e271f] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[600px]">
                      <thead className="bg-white/5 text-emerald-400 border-b border-white/10 font-mono">
                        <tr><th className="p-2.5">Competitor</th><th className="p-2.5">Positioning</th><th className="p-2.5">Revenue</th><th className="p-2.5">Key Strength</th><th className="p-2.5">Weakness</th></tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold text-emerald-300">Dr. Lal PathLabs</td><td>Market Leader</td><td className="font-mono">₹2,461 Cr</td><td>Trust, Network, NABL</td><td className="text-amber-300">App UX, Post-test advice</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Thyrocare</td><td>Low-Cost Leader</td><td className="font-mono">~₹600 Cr</td><td>Low Price, B2B volume</td><td>Limited test menu</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">SRL Diagnostics</td><td>Quality-Focused</td><td className="font-mono">~₹1,200 Cr</td><td>Advanced testing</td><td>Lower brand recall</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Metropolis</td><td>Urban Premium</td><td className="font-mono">~₹1,100 Cr</td><td>Premium positioning</td><td>Limited Tier 2/3 reach</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Redcliffe Labs</td><td>D2C Digital-First</td><td className="font-mono">~₹400 Cr</td><td>App UX, Home collection</td><td>Lower accreditation trust</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Business Strategy & Growth Roadmap */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 05 · BUSINESS STRATEGY & GROWTH ROADMAP</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      12-Month <span className="text-emerald-400">Growth Plan (Q1–Q4)</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl space-y-1.5">
                      <span className="font-mono text-emerald-400 font-bold text-[10px] block uppercase">Q1 · FOUNDATION</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• App UX Redesign Launch</li>
                        <li>• Transparent Pricing Campaign</li>
                        <li>• Home Collection Expansion</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl space-y-1.5">
                      <span className="font-mono text-emerald-400 font-bold text-[10px] block uppercase">Q2 · EXPANSION</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• Tier 2/3 Franchise Push</li>
                        <li>• Insurance Cashless Integration</li>
                        <li>• Doctor Referral Program</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl space-y-1.5">
                      <span className="font-mono text-emerald-400 font-bold text-[10px] block uppercase">Q3 · INNOVATION</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• Post-Report Doctor Connect</li>
                        <li>• Senior Citizen Care Packages</li>
                        <li>• Family Health Vault App</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl space-y-1.5">
                      <span className="font-mono text-emerald-400 font-bold text-[10px] block uppercase">Q4 · SCALE</span>
                      <ul className="text-slate-300 space-y-1 text-[11px]">
                        <li>• Year-end Health Promotions</li>
                        <li>• Genomics DNA Pilot Launch</li>
                        <li>• Corporate B2B Renewals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Digital Marketing Strategy & Funnel */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 06 · DIGITAL MARKETING & FUNNEL DESIGN</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Full-Funnel Blueprint & <span className="text-emerald-400">Target Metrics</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">WEBSITE TRAFFIC</span>
                      <span className="text-xl font-black text-emerald-400">2M → 3.5M/mo</span>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">APP DOWNLOADS</span>
                      <span className="text-xl font-black text-emerald-400">5M → 10M Total</span>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">BOOKING CONVERSION</span>
                      <span className="text-xl font-black text-emerald-400">3-4% → 7%</span>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl">
                      <span className="text-slate-400 text-[10px] block font-mono">GOOGLE RATING</span>
                      <span className="text-xl font-black text-emerald-400">4.1 → 4.5 ★</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Product & Service Enhancements */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 07 · PRODUCT & SERVICE ENHANCEMENTS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Visual Report Cards & <span className="text-emerald-400">Doctor Connect Feature</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-2">
                      <span className="font-bold text-red-400 font-mono block uppercase">❌ CURRENT REPORT FORMAT</span>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Plain numeric data table</li>
                        <li>• Complex medical jargon only</li>
                        <li>• No visual indicators or risk color coding</li>
                        <li>• No next-step health advice or doctor link</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-2">
                      <span className="font-bold text-emerald-400 font-mono block uppercase">✅ REDESIGNED VISUAL REPORT CARD</span>
                      <ul className="space-y-1 text-slate-300">
                        <li>• Color-coded green/amber/red risk indicators</li>
                        <li>• Plain language explanations & trend graphs</li>
                        <li>• Recommended follow-up tests & diet tips</li>
                        <li>• 1-click in-app teleconsultation with doctor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Partnerships & Revenue Diversification */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 08 · PARTNERSHIPS & REVENUE DIVERSIFICATION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      B2B Corporate Wellness & <span className="text-emerald-400">Insurance Partnerships</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-[#0e271f] border border-white/10 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-emerald-400 font-mono block uppercase">💼 B2B CORPORATE WELLNESS STRATEGY</span>
                    <p className="text-slate-300">
                      Target IT firms, banks, MNCs, and PSUs with 500+ employees. Offer annual checkup packages, on-site health camps, and HR analytics dashboard. Target: +25% corporate revenue YoY.
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Final QA Audit */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 09 · FINAL QA AUDIT & SCORECARD</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Strategy Quality Score: <span className="text-emerald-400">81/100 (STRONG)</span>
                    </h2>
                  </div>

                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-200">
                    ✅ High Strategic Alignment (95%): Comprehensive coverage across business goals, customer pain points, competitive differentiation, digital marketing, and multi-channel expansion.
                  </div>
                </div>
              )}

              {/* SLIDE 10: Master Action Plan & Recommendations */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">PAGE 10 · MASTER ACTION PLAN & CONCLUSION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Three Pillars of <span className="text-emerald-400">Future Success</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-emerald-400 block uppercase">PILLAR 1: TRUST & QUALITY</span>
                      <p className="text-slate-300 text-[11px]">Amplify 75-year legacy, NABL certifications, doctor testimonials, and visual health report clarity.</p>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-emerald-400 block uppercase">PILLAR 2: DIGITAL EXPERIENCE</span>
                      <p className="text-slate-300 text-[11px]">App UX redesign, post-report doctor connect, loyalty subscription, family health vault.</p>
                    </div>
                    <div className="p-3 bg-[#0e271f] border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-emerald-400 block uppercase">PILLAR 3: GEOGRAPHIC REACH</span>
                      <p className="text-slate-300 text-[11px]">Tier 2/3 franchise expansion, South/East India push, mobile collection labs.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 text-center font-bold">
                    🏁 Closing Statement: "The future of Dr. Lal PathLabs lies in going deeper — deeper digital experiences, deeper geographic reach, deeper patient relationships. The brand equity is already there. The strategy is ready. Now it's time to execute." — Dharmesh
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
