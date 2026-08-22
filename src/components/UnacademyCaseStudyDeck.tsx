import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, X, CheckCircle, Search, Target, Globe, ShieldCheck, Zap, Layers, Award, GraduationCap, Download
} from "lucide-react";

interface UnacademyCaseStudyDeckProps {
  onClose: () => void;
}

export default function UnacademyCaseStudyDeck({ onClose }: UnacademyCaseStudyDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl my-auto bg-[#0a1221] border border-blue-500/30 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden text-white min-h-[85vh] max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#0f1d38] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-blue-600 text-white font-black text-xs font-mono rounded tracking-widest uppercase flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" /> UNACADEMY
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline truncate max-w-md">
              Social Media Strategy Case Study
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Download Full PDF Report */}
            <a
              href="/projects/Unacademy_Social_Media_Strategy.pdf?download=true"
              download="Unacademy_Social_Media_Strategy.pdf"
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
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#060b14] font-sans relative">
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
                      <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase rounded-full">
                        SOCIAL MEDIA STRATEGY CASE STUDY
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-black text-4xl sm:text-6xl tracking-tight text-blue-400">UNACADEMY</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                          Social Media Strategy Case Study
                        </h1>
                        <p className="text-blue-300 text-xl font-bold mt-2">EdTech / Online Education | India's Leading Platform</p>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-blue-500/40 pl-4">
                        A comprehensive end-to-end social media strategy for India's leading EdTech platform — covering audience research, content planning, community building & paid amplification.
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Social Media", "EdTech Marketing", "Instagram & YouTube", "30-Day Calendar", "Community Growth", "Meta Ads"].map((t) => (
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
                          <p className="font-bold text-white mt-1">Sr. Social Media Strategist</p>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Website</p>
                          <a href="https://www.unacademy.com/" target="_blank" rel="noreferrer" className="font-bold text-blue-400 hover:underline mt-1 block truncate">
                            unacademy.com
                          </a>
                        </div>
                        <div>
                          <p className="text-slate-500 uppercase text-[10px] font-mono">Date</p>
                          <p className="font-bold text-white mt-1">June 2026</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Highlights Block */}
                    <div className="w-full lg:w-80 flex flex-col items-center gap-4 bg-[#0f1d38] p-6 rounded-2xl border border-white/10">
                      <div className="text-center p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl w-full">
                        <span className="block text-4xl font-black text-blue-400">10M+</span>
                        <span className="text-xs font-mono text-slate-300">YouTube Subscribers</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">2M+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">IG Followers</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-blue-400">70%</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Non-Metro</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-white">25%</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">EdTech Share</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                          <span className="block text-xl font-black text-emerald-400">60+</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">Centers</span>
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
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 01 · BUSINESS OVERVIEW</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Unacademy at a Glance — <span className="text-blue-400">India's Largest Online Learning Platform</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Founded 2015 by Gaurav Munjal, Roman Saini & Hemesh Singh. USP: "Learn from India's Best Educators — Anytime, Anywhere, Affordably". Core categories: UPSC, SSC, Banking, JEE, NEET.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 03: Audience Research */}
              {currentSlide === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 02 · AUDIENCE RESEARCH</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Target Audience Persona — <span className="text-blue-400">Competitive Exam Aspirants</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Ages 17-28, Pan-India Tier 1/2/3 cities, mobile-first Android users. Pain points: Expensive offline coaching, lack of quality educators in Tier 2/3, exam anxiety, doubt resolution delays.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 04: Platform Strategy */}
              {currentSlide === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 03 · PLATFORM STRATEGY</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Platform Allocation — <span className="text-blue-400">70% Instagram + YouTube</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Instagram (40% effort) for Reels & short-form discovery. YouTube (30% effort) for long-form trust & depth. Facebook (20%) for exam groups & parents. X/Twitter (7%) for exam alerts & current affairs.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 05: Content Strategy */}
              {currentSlide === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 04 · CONTENT PLANNING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      5 Content Pillars & <span className="text-blue-400">30-Day Framework</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">5 Pillars: Educate (40%), Inspire (37%), Engage (13%), Convert (10%), Advocate (UGC). Format mix: 40% Reels, 30% Carousels, 20% Stories, 10% Statics.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 06: Engagement Tactics */}
              {currentSlide === 6 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 05 · COMMUNITY BUILDING</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Community Building & <span className="text-blue-400">#UnacademyWins UGC</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Tiered Hashtag strategy (Branded, Niche, Broad, Trending), #UnacademyWins student UGC spotlight campaign, and micro-influencer collaboration tiers.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 07: Paid Social Integration */}
              {currentSlide === 7 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 06 · PAID SOCIAL</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Meta Ads Funnel & <span className="text-blue-400">Amplification</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Top-of-Funnel reach, Middle-of-Funnel free trial sign-ups, Bottom-of-Funnel paid subscriber conversions, and boosted post strategy.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 08: Content Mockups */}
              {currentSlide === 8 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 07 · SAMPLE CONTENT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Sample Post Mockups & <span className="text-blue-400">Formats</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">"From Tier 3 City to IAS — Priya's Story" Reel mockup, "5 Time Management Hacks for Competitive Exams" Carousel mockup, and #UnacademyWins student feature.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 09: Expected Outcomes */}
              {currentSlide === 9 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 08 · IMPACT</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Projected Impact & <span className="text-blue-400">Community Growth Flywheel</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
                    <p className="text-slate-300">Significantly elevated brand awareness, deeper student engagement in exam FB groups, and lower acquisition cost through UGC & retargeting.</p>
                  </div>
                </div>
              )}

              {/* SLIDE 10: Reflection */}
              {currentSlide === 10 && (
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase">SECTION 09 · REFLECTION</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      Portfolio <span className="text-blue-400">Reflection</span>
                    </h2>
                  </div>

                  <div className="p-6 bg-[#0f1d38] rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                    <p className="text-slate-300 font-sans">
                      "Great social media strategy is not about posting more — it is about posting smarter, building deeper, and growing sustainably."
                    </p>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                      <span className="text-white font-bold">Dharmesh — Senior Social Media Strategist</span>
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
