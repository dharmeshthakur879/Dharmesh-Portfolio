import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, ShoppingBag, Users, MessageSquare, ArrowRight, Smartphone, Sparkles, Filter, BarChart3, TrendingUp, Download
} from "lucide-react";

interface MeeshoCaseStudyDeckProps {
  onClose: () => void;
}

export default function MeeshoCaseStudyDeck({ onClose }: MeeshoCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#180816] border border-fuchsia-500/30 rounded-2xl shadow-[0_0_50px_rgba(217,70,239,0.15)] flex flex-col overflow-hidden text-white min-h-[88vh] max-h-[94vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#2c0d28] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-fuchsia-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" /> MEESHO
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Lead Generation Funnel Strategy — Complete Case Study
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Meesho_Lead_Gen_Funnel_Strategy.pdf?download=true"
              download="Meesho_Lead_Gen_Funnel_Strategy.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-fuchsia-600/20 hover:bg-fuchsia-600 text-fuchsia-400 hover:text-white border border-fuchsia-500/30 rounded-lg text-xs font-mono font-bold transition-all"
              title="Download Complete PDF Case Study Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Slide Navigation Pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-slate-300">
              <button onClick={prevSlide} className="hover:text-fuchsia-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-fuchsia-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-fuchsia-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#0e040f] font-sans relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full space-y-6"
            >
              {/* SLIDE 01: Cover */}
              {currentSlide === 1 && (
                <div className="space-y-8">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                    <div className="space-y-6 max-w-2xl">
                      <div className="inline-block px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold uppercase rounded-full">
                        PORTFOLIO CASE STUDY · E-COMMERCE / SOCIAL COMMERCE
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-tight text-fuchsia-400">MEESHO</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          Lead Generation Funnel Strategy
                        </h1>
                        <p className="text-fuchsia-300 text-xl font-bold mt-2">Lowest Prices, Highest Value — Tier 2/3 & Rural Growth</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-fuchsia-500/40 pl-4">
                        A comprehensive end-to-end lead generation funnel strategy for Meesho — India's fastest-growing social commerce platform serving Tier 2/3 and rural markets.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["AWARENESS", "INTEREST", "CONSIDERATION", "INTENT", "CONVERT", "RETAIN", "REFER"].map((t) => (
                          <span key={t} className="px-3 py-1 bg-fuchsia-950/80 border border-fuchsia-500/30 text-[11px] font-mono text-fuchsia-200 font-bold rounded">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Industry</p>
                          <p className="font-bold text-white mt-1">E-Commerce / Social Commerce</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Prepared By</p>
                          <p className="font-bold text-white mt-1">Dharmesh</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Role</p>
                          <p className="font-bold text-fuchsia-400 mt-1">Lead Gen Specialist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#2c0d28] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl w-full">
                        <span className="block text-4xl font-black text-fuchsia-400">₹25-40</span>
                        <span className="text-xs font-mono text-slate-300">Target CPL</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-fuchsia-400">₹80-150</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Target CAC</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">7</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Funnel Stages</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">Tier 2/3</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Target Audience</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">+35%</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Conversion Lift</span>
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
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 2 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Business Overview & <span className="text-fuchsia-400">Target Audience</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">Meesho — India's fastest-growing social commerce and online marketplace platform, founded in 2015 by Vidit Aatrey and Sanjeev Barnwal.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Business Goals & USPs */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-mono font-bold text-fuchsia-300 uppercase">Business Goals</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden text-xs">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10">
                            <tr>
                              <th className="p-3 w-10">#</th>
                              <th className="p-3">Goal</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-3 font-mono font-bold text-fuchsia-400">1</td><td className="p-3">Make online shopping affordable for all income segments</td></tr>
                            <tr><td className="p-3 font-mono font-bold text-fuchsia-400">2</td><td className="p-3">Empower small businesses & entrepreneurs to sell online</td></tr>
                            <tr><td className="p-3 font-mono font-bold text-fuchsia-400">3</td><td className="p-3">Connect buyers with widest product range at lowest prices</td></tr>
                            <tr><td className="p-3 font-mono font-bold text-fuchsia-400">4</td><td className="p-3">Deliver seamless shopping: secure payments, reliable delivery</td></tr>
                            <tr><td className="p-3 font-mono font-bold text-fuchsia-400">5</td><td className="p-3">Expand seller ecosystem & strengthen customer loyalty</td></tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-[#1f091c] border border-fuchsia-500/20 p-4 rounded-xl space-y-2 text-xs">
                        <h4 className="font-bold text-fuchsia-300 uppercase font-mono">USP At A Glance</h4>
                        <ul className="space-y-1.5 text-slate-300">
                          <li>✅ Lowest prices — unbeatable value</li>
                          <li>✅ Zero commission for sellers</li>
                          <li>✅ COD-first approach builds trust</li>
                          <li>✅ Vernacular language support</li>
                          <li>✅ Built for India's next 500M internet users</li>
                        </ul>
                      </div>
                    </div>

                    {/* Target Audience Table */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-mono font-bold text-fuchsia-300 uppercase">Target Audience Segments</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden text-xs">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10">
                            <tr>
                              <th className="p-2.5">Segment</th>
                              <th className="p-2.5">Description</th>
                              <th className="p-2.5 text-right">Priority</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-2.5 font-bold text-white">Online Shoppers</td><td className="p-2.5 text-slate-400">Price-conscious deal seekers</td><td className="p-2.5 text-right"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-mono rounded">High</span></td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Budget Consumers</td><td className="p-2.5 text-slate-400">Tier 2/3 value buyers</td><td className="p-2.5 text-right"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-mono rounded">High</span></td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Homemakers</td><td className="p-2.5 text-slate-400">Women shopping for family</td><td className="p-2.5 text-right"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-mono rounded">High</span></td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Students</td><td className="p-2.5 text-slate-400">Affordable fashion & electronics</td><td className="p-2.5 text-right"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-mono rounded">High</span></td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Resellers</td><td className="p-2.5 text-slate-400">Entrepreneurs via social media</td><td className="p-2.5 text-right"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-mono rounded">High</span></td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Small Businesses</td><td className="p-2.5 text-slate-400">Local sellers going digital</td><td className="p-2.5 text-right"><span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-mono rounded">Medium</span></td></tr>
                            <tr><td className="p-2.5 font-bold text-white">D2C Brands</td><td className="p-2.5 text-slate-400">Marketplace distribution</td><td className="p-2.5 text-right"><span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-mono rounded">Medium</span></td></tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                          <span className="block font-bold text-fuchsia-400 text-sm">CPL</span>
                          <span className="text-[10px] text-slate-400">Cost Per Lead</span>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                          <span className="block font-bold text-fuchsia-400 text-sm">CAC</span>
                          <span className="text-[10px] text-slate-400">Customer Acquisition Cost</span>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                          <span className="block font-bold text-fuchsia-400 text-sm">NPS</span>
                          <span className="text-[10px] text-slate-400">Net Promoter Score</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: 7-Stage Lead Gen Funnel */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 3 · 7-STAGE FUNNEL</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      7-Stage <span className="text-fuchsia-400">Lead Generation Funnel</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">A dual-funnel system serving both buyer acquisition and seller onboarding — with distinct messaging, channels, and CTAs at each stage.</p>
                  </div>

                  <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-x-auto">
                    <table className="w-full text-left text-xs min-w-[600px]">
                      <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                        <tr>
                          <th className="p-3">Stage</th>
                          <th className="p-3">Audience</th>
                          <th className="p-3">Primary Goal</th>
                          <th className="p-3">Key Channels</th>
                          <th className="p-3">Primary CTA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-3 font-bold text-white">Awareness</td><td className="p-3 text-slate-400">Cold</td><td className="p-3">Reach & Visibility</td><td className="p-3">YouTube, Meta Ads, Influencers</td><td className="p-3 text-fuchsia-300 font-mono">Download App / Start Selling Free</td></tr>
                        <tr><td className="p-3 font-bold text-white">Interest</td><td className="p-3 text-slate-400">Warm</td><td className="p-3">Engagement & Exploration</td><td className="p-3">SEO, Instagram, WhatsApp</td><td className="p-3 text-fuchsia-300 font-mono">Browse Now / Explore Deals</td></tr>
                        <tr><td className="p-3 font-bold text-white">Consideration</td><td className="p-3 text-slate-400">Evaluating</td><td className="p-3">Trust Building</td><td className="p-3">Retargeting, Email, Reviews</td><td className="p-3 text-fuchsia-300 font-mono">See How It Works</td></tr>
                        <tr><td className="p-3 font-bold text-white">Intent</td><td className="p-3 text-slate-400">High-Intent</td><td className="p-3">Action Triggering</td><td className="p-3">SMS, Push, Retargeting</td><td className="p-3 text-fuchsia-300 font-mono">Claim Your Discount / Claim Deal</td></tr>
                        <tr><td className="p-3 font-bold text-white">Conversion</td><td className="p-3 text-slate-400">Decision</td><td className="p-3">First Purchase/Registration</td><td className="p-3">In-App, Landing Page</td><td className="p-3 text-fuchsia-300 font-mono">Place Order / Go Live</td></tr>
                        <tr><td className="p-3 font-bold text-white">Retention</td><td className="p-3 text-slate-400">Active</td><td className="p-3">Repeat Engagement</td><td className="p-3">Email, WhatsApp, Push</td><td className="p-3 text-fuchsia-300 font-mono">Shop Again / List New</td></tr>
                        <tr><td className="p-3 font-bold text-white">Referral</td><td className="p-3 text-slate-400">Loyal</td><td className="p-3">Organic Growth</td><td className="p-3">WhatsApp, Social, Referral Code</td><td className="p-3 text-fuchsia-300 font-mono">Invite & Earn</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-fuchsia-950/60 border border-fuchsia-500/30 rounded-xl text-xs text-fuchsia-200">
                    <span className="font-bold font-mono uppercase text-fuchsia-400">Key Takeaway:</span> Meesho's funnel must serve two parallel journeys — the buyer funnel and the seller onboarding funnel. Both share awareness and retention stages but diverge at consideration, intent, and conversion.
                  </div>
                </div>
              )}

              {/* SLIDE 04: Traffic Acquisition Strategy */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 4 · TRAFFIC ACQUISITION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Traffic Acquisition & <span className="text-fuchsia-400">Keyword Strategy</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">Balancing paid acquisition for speed with organic growth for sustainability. Separate messaging tracks for buyers and sellers.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                    {/* Buyer vs Seller Strategy */}
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">Buyer vs. Seller Strategy</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                            <tr>
                              <th className="p-2.5">Channel</th>
                              <th className="p-2.5">Buyer Focus</th>
                              <th className="p-2.5">Seller Focus</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-2.5 font-bold text-white">Google Ads</td><td className="p-2.5">Product keywords, deal searches</td><td className="p-2.5">"Sell online India" keywords</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Meta Ads</td><td className="p-2.5">Product discovery, app installs</td><td className="p-2.5">Seller testimonials, lead ads</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Instagram</td><td className="p-2.5">Trending products, fashion</td><td className="p-2.5">Seller success reels</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">WhatsApp</td><td className="p-2.5">Deal alerts, order updates</td><td className="p-2.5">Onboarding tips</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">SEO</td><td className="p-2.5">Category guides, reviews</td><td className="p-2.5">How-to sell blogs</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Referral</td><td className="p-2.5">Save more codes</td><td className="p-2.5">Reseller expansion</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* SEO Keyword Strategy */}
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">SEO Keyword Strategy</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                            <tr>
                              <th className="p-2.5">Type</th>
                              <th className="p-2.5">Example Keywords</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-2.5 font-bold text-white">Buyer</td><td className="p-2.5 font-mono text-fuchsia-300">"cheapest sarees online India"</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Seller</td><td className="p-2.5 font-mono text-fuchsia-300">"how to sell on Meesho"</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Brand</td><td className="p-2.5 font-mono text-fuchsia-300">"Meesho app download"</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Category</td><td className="p-2.5 font-mono text-fuchsia-300">"women's kurti below ₹300"</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Local</td><td className="p-2.5 font-mono text-fuchsia-300">"online shopping Jaipur cheap"</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Lead Capture Strategy */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 5 · LEAD CAPTURE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Lead Capture & <span className="text-fuchsia-400">Capture Priority Matrix</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">Converting traffic into identifiable, actionable leads — WhatsApp-first for Tier 2/3 accessibility.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">📄 LANDING PAGES</span>
                      <p className="text-slate-400 text-[11px]">Buyer: "India's Most Affordable Shopping App"<br />Seller: "Start Selling Free — Zero Commission"</p>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">🎁 LEAD MAGNETS</span>
                      <p className="text-slate-400 text-[11px]">Buyer: ₹100 Off First Order<br />Seller: Free Success Guide PDF</p>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">💬 WHATSAPP CTA</span>
                      <p className="text-slate-400 text-[11px]">Floating button on all pages. Instant auto-response via Business API.</p>
                    </div>
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">📝 SMART FORMS</span>
                      <p className="text-slate-400 text-[11px]">3-4 fields max. Phone as primary ID. One-tap Google/FB sign-in.</p>
                    </div>
                  </div>

                  <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-x-auto text-xs">
                    <table className="w-full text-left min-w-[500px]">
                      <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                        <tr>
                          <th className="p-2.5">Element</th>
                          <th className="p-2.5">Audience</th>
                          <th className="p-2.5">Priority</th>
                          <th className="p-2.5">Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr><td className="p-2.5 font-bold text-white">Landing Page (Buyer)</td><td className="p-2.5 text-slate-400">Buyers</td><td className="p-2.5"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 font-mono rounded">High</span></td><td className="p-2.5">Primary conversion</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Landing Page (Seller)</td><td className="p-2.5 text-slate-400">Sellers</td><td className="p-2.5"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 font-mono rounded">High</span></td><td className="p-2.5">Primary registration</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">WhatsApp CTA</td><td className="p-2.5 text-slate-400">Both</td><td className="p-2.5"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 font-mono rounded">High</span></td><td className="p-2.5">High-vol, low-friction</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Lead Magnet</td><td className="p-2.5 text-slate-400">Both</td><td className="p-2.5"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 font-mono rounded">High</span></td><td className="p-2.5">Significant opt-in lift</td></tr>
                        <tr><td className="p-2.5 font-bold text-white">Free Consultation</td><td className="p-2.5 text-slate-400">Sellers</td><td className="p-2.5"><span className="px-2 py-0.5 bg-red-500/20 text-red-400 font-mono rounded">High</span></td><td className="p-2.5">Converts hesitant leads</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Lead Nurturing Strategy */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 6 · LEAD NURTURING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Lead Nurturing & <span className="text-fuchsia-400">Retargeting Strategy</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">Multichannel nurturing sequence — WhatsApp-first, SMS-supported, email-backed, retargeting-reinforced.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                    {/* 10-Day Nurturing Timeline */}
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">10-Day Nurturing Timeline</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                            <tr>
                              <th className="p-2.5">Day</th>
                              <th className="p-2.5">Channel</th>
                              <th className="p-2.5">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-2.5 font-mono font-bold text-fuchsia-400">0</td><td className="p-2.5">Email</td><td className="p-2.5">Welcome email + lead magnet delivery (within 5 min)</td></tr>
                            <tr><td className="p-2.5 font-mono font-bold text-fuchsia-400">1</td><td className="p-2.5 text-emerald-400">WhatsApp</td><td className="p-2.5">Personalized follow-up with discount code / seller tips</td></tr>
                            <tr><td className="p-2.5 font-mono font-bold text-fuchsia-400">2</td><td className="p-2.5">Email</td><td className="p-2.5">Value delivery + buyer/seller success story</td></tr>
                            <tr><td className="p-2.5 font-mono font-bold text-fuchsia-400">4</td><td className="p-2.5">Email</td><td className="p-2.5">Social proof — testimonials + objection handling</td></tr>
                            <tr><td className="p-2.5 font-mono font-bold text-fuchsia-400">6</td><td className="p-2.5 text-amber-400">SMS</td><td className="p-2.5">Short urgency reminder (98% open rate)</td></tr>
                            <tr><td className="p-2.5 font-mono font-bold text-fuchsia-400">7</td><td className="p-2.5">Email</td><td className="p-2.5">Last chance offer + final CTA</td></tr>
                            <tr><td className="p-2.5 font-mono font-bold text-fuchsia-400">8</td><td className="p-2.5 text-blue-400">Phone</td><td className="p-2.5">Personal call — high-intent seller leads only</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Remarketing Audiences */}
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">Remarketing Audiences</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                            <tr>
                              <th className="p-2.5">Audience</th>
                              <th className="p-2.5">Platform</th>
                              <th className="p-2.5">CTA</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-2.5 font-bold text-white">Landing page visitors</td><td className="p-2.5">Meta + Google</td><td className="p-2.5 text-fuchsia-300 font-mono">"Come Back"</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Email openers (no click)</td><td className="p-2.5">Meta Custom</td><td className="p-2.5 text-fuchsia-300 font-mono">"5 Crore+ Chose Meesho"</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">App installers (no purchase)</td><td className="p-2.5">Google UAC</td><td className="p-2.5 text-fuchsia-300 font-mono">"₹100 Coupon Waiting"</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Seller leads (incomplete)</td><td className="p-2.5">Meta Lead Ads</td><td className="p-2.5 text-fuchsia-300 font-mono">"Start Selling — 10 Min"</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Conversion Rate Optimization */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 7 · CRO & MOBILE UX</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Conversion Rate <span className="text-fuchsia-400">Optimization & Trust</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">Mobile-first CRO is the foundation — not an afterthought. Over 90% of Meesho users are on mobile devices.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">Landing Page & CTA Optimization</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                            <tr>
                              <th className="p-2.5">Issue</th>
                              <th className="p-2.5">Recommendation</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-2.5 text-slate-400">Generic homepage as LP</td><td className="p-2.5 font-bold text-white">Dedicated buyer & seller landing pages</td></tr>
                            <tr><td className="p-2.5 text-slate-400">Too many nav links</td><td className="p-2.5 font-bold text-white">Remove nav menu — single-focus design</td></tr>
                            <tr><td className="p-2.5 text-slate-400">Slow hero section</td><td className="p-2.5 font-bold text-white">WebP images, lazy load below-fold</td></tr>
                            <tr><td className="p-2.5 text-slate-400">Generic CTA "Submit"</td><td className="p-2.5 font-bold text-white">Action + benefit: "Get ₹100 Off"</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">Pricing & Trust Signals</h3>
                      <div className="bg-[#1f091c] border border-fuchsia-500/20 p-4 rounded-xl space-y-2">
                        <p><strong>Anchor Pricing:</strong> Show MRP crossed out + Meesho price</p>
                        <p><strong>Savings Badge:</strong> "You Save ₹450 (60% OFF)" in green</p>
                        <p><strong>Free Shipping:</strong> On orders above ₹199</p>
                        <p><strong>COD Highlight:</strong> Reduces purchase anxiety for Tier 2/3</p>
                        <p><strong>Security Badges:</strong> "100% Safe Payment" near form fields</p>
                        <p><strong>Social Proof:</strong> "Trusted by 5 Crore+ Shoppers" & "1 Crore+ Sellers"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Marketing Automation & Tracking */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 8 · AUTOMATION & TRACKING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Marketing Automation & <span className="text-fuchsia-400">Lead Scoring</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">A fully integrated stack transforms lead generation from guesswork into a data-driven system.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                    {/* Tool Stack */}
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">Recommended Tool Stack</h3>
                      <div className="bg-[#2c0d28] border border-white/10 rounded-xl overflow-hidden">
                        <table className="w-full text-left">
                          <thead className="bg-white/5 text-fuchsia-400 border-b border-white/10 font-mono">
                            <tr>
                              <th className="p-2.5">Category</th>
                              <th className="p-2.5">Tool</th>
                              <th className="p-2.5">Purpose</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-slate-300">
                            <tr><td className="p-2.5 font-bold text-white">CRM</td><td className="p-2.5">HubSpot / Zoho CRM</td><td className="p-2.5 text-slate-400">Pipeline, lead scoring</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">WhatsApp</td><td className="p-2.5">Wati / AiSensy</td><td className="p-2.5 text-slate-400">Business API, chatbot flows</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Analytics</td><td className="p-2.5">Google Analytics 4</td><td className="p-2.5 text-slate-400">Full funnel tracking</td></tr>
                            <tr><td className="p-2.5 font-bold text-white">Ad Tracking</td><td className="p-2.5">Meta Pixel + Google Ads</td><td className="p-2.5 text-slate-400">Paid attribution</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Lead Scoring */}
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">Lead Classification</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                          <span className="block font-bold text-slate-400 text-sm">0–30: COLD</span>
                          <span className="text-[10px] text-slate-400">Auto nurture via email</span>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                          <span className="block font-bold text-amber-400 text-sm">31–60: WARM</span>
                          <span className="text-[10px] text-slate-400">+ WhatsApp messages</span>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                          <span className="block font-bold text-fuchsia-400 text-sm">61–90: HOT</span>
                          <span className="text-[10px] text-slate-400">+ Phone outreach</span>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                          <span className="block font-bold text-emerald-400 text-sm">90+: SALES READY</span>
                          <span className="text-[10px] text-slate-400">Immediate seller demo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Outcomes */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 9 · OUTCOMES</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Expected Business <span className="text-fuchsia-400">Outcomes</span>
                    </h2>
                    <p className="text-slate-400 text-xs mt-1">Strategic expectations based on industry best practices — NOT fabricated campaign metrics.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 bg-[#2c0d28] border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">✅ HIGHER LEAD QUALITY</span>
                      <p className="text-slate-400 text-[11px]">Targeted lead magnets align prospects with Meesho's value prop.</p>
                    </div>
                    <div className="p-3 bg-[#2c0d28] border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">✅ IMPROVED UX</span>
                      <p className="text-slate-400 text-[11px]">Faster mobile experience reduces bounce & improves form completion.</p>
                    </div>
                    <div className="p-3 bg-[#2c0d28] border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">✅ BETTER NURTURING</span>
                      <p className="text-slate-400 text-[11px]">Multichannel sequence reduces decay across 7-10 touchpoints.</p>
                    </div>
                    <div className="p-3 bg-[#2c0d28] border border-white/10 rounded-xl space-y-1">
                      <span className="font-bold text-fuchsia-300 block">✅ MORE DEMOS</span>
                      <p className="text-slate-400 text-[11px]">Free consultations convert hesitant seller leads into active sellers.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase">PAGE 10 · PORTFOLIO REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio Reflection & <span className="text-fuchsia-400">5 Key Learnings</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">Strategy — Three Core Pillars</h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                          <span className="font-bold text-fuchsia-400 block">PILLAR 1 — REACH</span>
                          <p className="text-slate-300 text-[11px]">Maximize exposure through Meta Ads, Google Ads, SEO, and Instagram Reels.</p>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                          <span className="font-bold text-fuchsia-400 block">PILLAR 2 — CAPTURE</span>
                          <p className="text-slate-300 text-[11px]">Convert traffic via landing pages, WhatsApp CTAs, lead magnets, and low-friction forms.</p>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                          <span className="font-bold text-fuchsia-400 block">PILLAR 3 — NURTURE & CONVERT</span>
                          <p className="text-slate-300 text-[11px]">Multichannel sequence (Email + WhatsApp + SMS) with CRM lead scoring.</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-mono font-bold text-fuchsia-300 uppercase">5 Key Learnings</h3>
                      <ol className="list-decimal list-inside space-y-2 text-slate-300">
                        <li><strong>Dual Funnel = Opportunity:</strong> Shared awareness but distinct buyer & seller journeys.</li>
                        <li><strong>WhatsApp Is Not Optional:</strong> For Tier 2/3 India, WhatsApp automation is as critical as email.</li>
                        <li><strong>Mobile-First CRO = Foundation:</strong> Every decision must prioritize mobile.</li>
                        <li><strong>Lead Scoring Prevents Burnout:</strong> Behavioral scoring transforms pipeline management.</li>
                        <li><strong>Attribution Without UTMs = Guesswork:</strong> Tag every channel from day one.</li>
                      </ol>
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
