import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, AlertTriangle, CheckCircle, TrendingUp, 
  BarChart2, Search, Target, Globe, ShieldCheck, Zap, Layers, Cpu, Smartphone, 
  BookOpen, Award, ArrowUpRight, Check, Sparkles, ExternalLink, Utensils, MapPin, Users, Download
} from "lucide-react";

interface ZomatoCaseStudyDeckProps {
  onClose: () => void;
}

export default function ZomatoCaseStudyDeck({ onClose }: ZomatoCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0F0506] border border-red-500/30 rounded-2xl shadow-[0_0_50px_rgba(226,55,68,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#18090B] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-[#E23744] text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5" /> ZOMATO
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Keyword Research & Local SEO Strategy
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Zomato_Keyword_Research_Case_Study.pdf?download=true"
              download="Zomato_Keyword_Research_Case_Study.pdf"
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
              <button onClick={prevSlide} className="hover:text-red-400 transition-colors p-1">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-red-400 font-bold">{String(currentSlide).padStart(2, "0")}</span>
              <span>/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
              <button onClick={nextSlide} className="hover:text-red-400 transition-colors p-1">
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#090304] font-sans relative">
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
                      <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase rounded-full">
                        PORTFOLIO CASE STUDY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-tighter text-red-500 italic">zomato</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          Keyword Research & SEO Strategy
                        </h1>
                        <p className="text-red-400 text-xl font-bold mt-2">Food Technology & Delivery Marketplace</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-red-500/40 pl-4">
                        Strategic SEO & keyword planning for India's leading food delivery & restaurant discovery platform — from search intent to a fully mapped, implementation-ready keyword architecture.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Keyword Research", "Local SEO", "Search Intent", "GEO & AEO", "Content Clusters", "FoodTech"].map((t) => (
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
                          <p className="font-bold text-white mt-1">Sr. SEO Specialist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.zomato.com/" target="_blank" rel="noreferrer" className="font-bold text-red-400 hover:underline mt-1 block truncate">
                            zomato.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#18090B] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl w-full">
                        <span className="block text-3xl font-black text-red-400">5-Layer</span>
                        <span className="text-xs font-mono text-slate-300">Local SEO Stack</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">50+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Mapped Keywords</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-red-400">5</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Topic Clusters</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">120+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">City Hubs</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">GEO/AEO</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">AI-Ready</span>
                        </div>
                      </div>

                      <div className="w-full p-3 bg-white/5 rounded-xl text-xs font-mono text-slate-300 space-y-1">
                        <p className="text-red-400 font-bold">Top Search Queries:</p>
                        <p className="text-[11px] text-slate-400">"food delivery near me"</p>
                        <p className="text-[11px] text-slate-400">"best restaurants in Mumbai"</p>
                        <p className="text-[11px] text-slate-400">"order food online"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 02: Business Understanding */}
              {currentSlide === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 01 · WHO WE'RE OPTIMISING FOR</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Business <span className="text-red-400">Understanding</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-[#18090B] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-red-400 uppercase">BUSINESS OVERVIEW</h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Zomato is India's leading food-tech platform (founded 2008, HQ Gurugram). It evolved from restaurant discovery & menu aggregation into a full food ecosystem: online ordering, delivery logistics, reviews, dining-out, B2B restaurant solutions, and Blinkit quick commerce.
                      </p>
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-300 italic">
                        "Zomato doesn't just deliver food — it delivers convenience, discovery, and dining experiences from a single platform trusted by millions."
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                      <div className="bg-[#18090B] p-6 rounded-2xl border border-white/10 space-y-3">
                        <h3 className="text-xs font-mono font-bold text-red-400 uppercase">TARGET AUDIENCE SEGMENTS</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-red-400 font-bold block">Students</span>
                            <span className="text-slate-400 text-[11px]">Affordable quick meals, late-night hostel orders</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-red-400 font-bold block">Working Professionals</span>
                            <span className="text-slate-400 text-[11px]">25-40 age, fast lunch/dinner, convenience</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-red-400 font-bold block">Families</span>
                            <span className="text-slate-400 text-[11px]">Variety, reliability, weekend meal deals</span>
                          </div>
                          <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-red-400 font-bold block">Restaurant Partners</span>
                            <span className="text-slate-400 text-[11px]">B2B acquisition, digital growth & analytics</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#18090B] p-6 rounded-2xl border border-white/10 space-y-3">
                        <h3 className="text-xs font-mono font-bold text-red-400 uppercase">CORE SERVICES & MARKET TIERS</h3>
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                          {["Online Delivery", "Restaurant Discovery", "Reviews & Ratings", "Table Booking", "Zomato Gold", "B2B Partner", "Blinkit"].map(s => (
                            <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-slate-200">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Keyword Research Strategy */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 02 · FROM BUSINESS GOALS TO QUERIES</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Keyword Research <span className="text-red-400">Strategy</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#18090B] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-red-400 uppercase">SEARCH INTENT MAPPING</h3>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center">
                          <div>
                            <span className="text-emerald-400 font-bold block">Transactional</span>
                            <span className="text-slate-300 text-[11px]">"order food online", "pizza delivery near me"</span>
                          </div>
                          <span className="text-[10px] text-slate-400">City / Food Pages</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center">
                          <div>
                            <span className="text-blue-400 font-bold block">Commercial</span>
                            <span className="text-slate-300 text-[11px]">"best restaurants in Delhi", "Zomato Gold benefits"</span>
                          </div>
                          <span className="text-[10px] text-slate-400">Discovery Pages</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center">
                          <div>
                            <span className="text-amber-400 font-bold block">Informational</span>
                            <span className="text-slate-300 text-[11px]">"how does Zomato delivery work"</span>
                          </div>
                          <span className="text-[10px] text-slate-400">Blog / FAQ</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#18090B] p-6 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="text-xs font-mono font-bold text-red-400 uppercase">5 TOPIC CLUSTER PLANNING</h3>
                      <ol className="space-y-2 text-xs font-mono text-slate-300">
                        <li className="p-2.5 bg-white/5 rounded-lg flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-red-500 text-white font-bold rounded">1</span>
                          <span>Food Delivery — Core Transactional Hub</span>
                        </li>
                        <li className="p-2.5 bg-white/5 rounded-lg flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-red-500 text-white font-bold rounded">2</span>
                          <span>Restaurant Discovery — Local & Category Hub</span>
                        </li>
                        <li className="p-2.5 bg-white/5 rounded-lg flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-red-500 text-white font-bold rounded">3</span>
                          <span>Zomato Gold & Offers — Loyalty & Subscription</span>
                        </li>
                        <li className="p-2.5 bg-white/5 rounded-lg flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-red-500 text-white font-bold rounded">4</span>
                          <span>Restaurant Partner / B2B — Merchant Acquisition</span>
                        </li>
                        <li className="p-2.5 bg-white/5 rounded-lg flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-red-500 text-white font-bold rounded">5</span>
                          <span>Food Culture & Content — Informational Blog TOFU</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Primary Keyword Research */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 03 · CORE REVENUE-DRIVING TERMS</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Primary <span className="text-red-400">Keyword Research</span>
                    </h2>
                  </div>

                  <div className="bg-[#18090B] p-4 rounded-2xl border border-white/10 overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 text-[10px] uppercase">
                          <th className="py-2 px-2">#</th>
                          <th className="py-2 px-2">PRIMARY KEYWORD</th>
                          <th className="py-2 px-2">INTENT</th>
                          <th className="py-2 px-2">PRIORITY</th>
                          <th className="py-2 px-2">RECOMMENDED LANDING PAGE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {[
                          { id: 1, kw: "order food online", intent: "Transactional", prio: "HIGH", page: "Homepage" },
                          { id: 2, kw: "food delivery near me", intent: "Transactional", prio: "HIGH", page: "/food-delivery/[city]" },
                          { id: 3, kw: "best restaurants in [city]", intent: "Commercial", prio: "HIGH", page: "/restaurants/[city]" },
                          { id: 4, kw: "Zomato", intent: "Navigational", prio: "HIGH", page: "Homepage" },
                          { id: 5, kw: "food delivery app India", intent: "Commercial", prio: "HIGH", page: "Homepage / App page" },
                          { id: 6, kw: "online food order", intent: "Transactional", prio: "HIGH", page: "Homepage" },
                          { id: 7, kw: "Zomato Gold", intent: "Commercial", prio: "HIGH", page: "/gold" },
                          { id: 8, kw: "biryani delivery near me", intent: "Transactional", prio: "HIGH", page: "/order/biryani/[city]" },
                          { id: 9, kw: "pizza delivery near me", intent: "Transactional", prio: "HIGH", page: "/order/pizza/[city]" },
                          { id: 10, kw: "list restaurant on Zomato", intent: "B2B Info", prio: "HIGH", page: "/partner" },
                        ].map((row) => (
                          <tr key={row.id} className="hover:bg-white/5">
                            <td className="py-2 px-2 font-bold text-red-400">{row.id}</td>
                            <td className="py-2 px-2 font-bold text-white">{row.kw}</td>
                            <td className="py-2 px-2 text-slate-300">{row.intent}</td>
                            <td className="py-2 px-2 text-red-400 font-bold">{row.prio}</td>
                            <td className="py-2 px-2 text-slate-400 font-sans text-[11px]">{row.page}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Secondary & Long-Tail Keywords */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 04 · LONG-TAIL & HIGH CONVERSION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Secondary & <span className="text-red-400">Long-Tail Keywords</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#18090B] p-5 rounded-2xl border border-white/10 space-y-3">
                      <h3 className="text-xs font-mono font-bold text-red-400 uppercase">LONG-TAIL KEYWORDS (EXAMPLES)</h3>
                      <ul className="space-y-2 text-xs font-mono text-slate-300">
                        <li className="p-2 bg-white/5 rounded flex justify-between">
                          <span>order biryani online in Hyderabad at midnight</span>
                          <span className="text-emerald-400 font-bold">Trans</span>
                        </li>
                        <li className="p-2 bg-white/5 rounded flex justify-between">
                          <span>best pizza delivery under 300 rupees Bengaluru</span>
                          <span className="text-emerald-400 font-bold">Trans</span>
                        </li>
                        <li className="p-2 bg-white/5 rounded flex justify-between">
                          <span>how to become a Zomato delivery partner</span>
                          <span className="text-amber-400 font-bold">Info</span>
                        </li>
                        <li className="p-2 bg-white/5 rounded flex justify-between">
                          <span>healthy tiffin service near me with delivery</span>
                          <span className="text-emerald-400 font-bold">Trans</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#18090B] p-5 rounded-2xl border border-white/10 space-y-3">
                      <h3 className="text-xs font-mono font-bold text-red-400 uppercase">SECONDARY MODIFIERS</h3>
                      <div className="flex flex-wrap gap-2 text-xs font-mono">
                        {["offers today", "coupon code", "healthy food delivery", "vegetarian near me", "late night delivery", "budget restaurants", "table booking", "party order"].map(m => (
                          <span key={m} className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-slate-200">
                            + {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Content Cluster Strategy */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 05 · HUB-AND-SPOKE ARCHITECTURE</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Content Cluster <span className="text-red-400">Strategy</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 bg-[#18090B] rounded-2xl border border-white/10 space-y-2">
                      <span className="text-red-400 font-bold block">CLUSTER 1: Online Food Delivery</span>
                      <p className="text-slate-300 text-[11px]">Pillar: Order Food Online — Best Food Delivery in India | Zomato</p>
                      <p className="text-slate-400 text-[10px]">Blogs: How Zomato Delivers in Under 30 Min · Top 10 Most Ordered Foods 2025</p>
                    </div>
                    <div className="p-4 bg-[#18090B] rounded-2xl border border-white/10 space-y-2">
                      <span className="text-red-400 font-bold block">CLUSTER 2: Restaurant Discovery</span>
                      <p className="text-slate-300 text-[11px]">Pillar: Best Restaurants Near You — Discover, Review & Book</p>
                      <p className="text-slate-400 text-[10px]">Blogs: 10 Best Restaurants Mumbai Family Dinner · Hidden Gem Cafes Bengaluru</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 07: GEO + AEO Keyword Strategy */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 06 · AI & VOICE SEARCH</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      GEO + AEO <span className="text-red-400">Keyword Strategy</span>
                    </h2>
                  </div>

                  <div className="bg-[#18090B] p-6 rounded-2xl border border-white/10 space-y-4">
                    <h3 className="text-xs font-mono font-bold text-red-400 uppercase">AI SEARCH & VOICE OPTIMIZATION CHECKLIST</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>FAQ Schema on Help & Landing Pages</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Authoritative Long-Form Guides (2000+ words)</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Answers in First 100 Words (Inverted Pyramid)</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>HowTo Schema for Step-by-Step Content</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Local SEO Keyword Strategy */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 07 · HYPERLOCAL FRAMEWORK</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Local SEO <span className="text-red-400">Keyword Strategy</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono text-center">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-red-400 font-bold block">LAYER 1</span>
                      <span className="text-[10px] text-slate-400">City + Service</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-red-400 font-bold block">LAYER 2</span>
                      <span className="text-[10px] text-slate-400">Near Me Intent</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-red-400 font-bold block">LAYER 3</span>
                      <span className="text-[10px] text-slate-400">Service + City</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-red-400 font-bold block">LAYER 4</span>
                      <span className="text-[10px] text-slate-400">Neighbourhood</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-red-400 font-bold block">LAYER 5</span>
                      <span className="text-[10px] text-slate-400">GBP Map Pack</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Master Keyword Implementation Plan */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 08 · DEPLOYMENT MATRIX</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Master Keyword <span className="text-red-400">Implementation Plan</span>
                    </h2>
                  </div>

                  <div className="bg-[#18090B] p-5 rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <span className="text-red-400 font-bold uppercase block">SCHEMA MARKUP PLAN</span>
                    <p className="text-slate-300 text-[11px]">
                      Homepage → Organization, WebSite · City/Locality → LocalBusiness · Restaurant → Restaurant, Review, AggregateRating · Cuisine → Menu, Offer · Membership → Product, Offer
                    </p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Portfolio Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">SECTION 09 · THINKING LIKE AN SEO STRATEGIST</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-red-400">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#18090B] rounded-2xl border border-white/10 space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      "A strategist doesn't just find words — they understand why people use them, map them to business objectives, assign them to the right pages, and build a deployment plan that connects intent to conversion."
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                      <span className="text-white font-bold">Dharmesh — SEO Strategist</span>
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
