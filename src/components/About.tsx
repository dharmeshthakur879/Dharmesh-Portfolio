import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { 
  Headphones, 
  TrendingUp, 
  Search, 
  Share2, 
  Target, 
  BarChart3, 
  Mail, 
  MapPin, 
  Bot, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";

export default function About() {
  const [imgSrc, setImgSrc] = useState("/Dharmesh_Thakur_New.webp");
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const fallbackImages = [
    "/Dharmesh_Thakur_New.webp",
    "/dharmesh.webp",
    "/Dharmesh Thakur New.webp",
    "/images/dharmesh.webp",
    "/images/dharmesh.png"
  ];

  const handleImageError = () => {
    if (fallbackIndex < fallbackImages.length - 1) {
      const nextIndex = fallbackIndex + 1;
      setFallbackIndex(nextIndex);
      setImgSrc(fallbackImages[nextIndex]);
    }
  };

  const coreSkills = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "On-page, technical SEO audits, site speed optimization, and search indexation strategies.",
      icon: <Search className="w-5 h-5 text-primary" />,
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: "Targeted brand campaigns, organic social engagement, creative storytelling, and audience retention.",
      icon: <Share2 className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: "Google Ads & Meta Ads",
      desc: "Paid search, PPC campaign configuration, Meta pixel tracking, and conversion-focused paid ads.",
      icon: <Target className="w-5 h-5 text-primary" />,
    },
    {
      title: "Keyword Research & Content",
      desc: "Search intent mapping, competitive gap analysis, and high-converting copy creation.",
      icon: <FileText className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: "Google Analytics & Data",
      desc: "GA4 setup, traffic source attribution, conversion tracking, and performance dashboards.",
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
    },
    {
      title: "Email Marketing",
      desc: "Audience segmentation, drip automation funnels, newsletter sequences, and CTR optimization.",
      icon: <Mail className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: "Local SEO & GMB",
      desc: "Google Business Profile optimization, local citations, geo-targeted search, and customer reviews.",
      icon: <MapPin className="w-5 h-5 text-primary" />,
    },
    {
      title: "AI Tools for Digital Marketing",
      desc: "Leveraging LLMs, generative AI prompt engineering, automated workflows, and research toolchains.",
      icon: <Bot className="w-5 h-5 text-primary" />,
    },
  ];

  const targetRoles = [
    "SEO Executive",
    "Digital Marketing Executive",
    "Social Media Marketing (SMM)",
    "Content Marketing Specialist",
    "Performance Marketing Executive",
  ];

  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Professional Overview
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              About Dharmesh
            </h1>
            <p className="font-sans text-sm sm:text-base text-text-sec mt-3 max-w-2xl mx-auto">
              Bridging customer empathy, sales acumen, and data-driven digital marketing systems.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Top Section: Portrait & Story Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Visual Left */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal className="w-full max-w-sm">
              <div className="relative aspect-[4/5] glass-panel p-2 flex items-end overflow-hidden border-primary/30 group hover:border-primary/60 transition-all duration-500 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#050B14]">
                {/* Owner Photo */}
                <img
                  src={imgSrc}
                  alt="Dharmesh - Digital Marketing & AI Specialist"
                  width="400"
                  height="500"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />

                {/* Subtle Bottom Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/60 via-40% to-transparent opacity-90 transition-opacity duration-500" />
                
                {/* Text Content Overlay */}
                <div className="relative z-10 w-full p-5 text-center">
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-primary/40 bg-[#020408]/85 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(212,168,83,0.2)]">
                    <span className="font-display text-xs font-bold text-primary uppercase tracking-widest">Dharmesh Thakur</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                    Digital Marketing & Growth Specialist
                  </h3>
                  <p className="text-xs text-text-sec mt-1.5 font-light flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> Delhi, India • dk3891315@gmail.com
                  </p>
                </div>

                {/* Corner Accents */}
                <span className="absolute top-4 left-4 w-4 h-[1px] bg-primary/50" />
                <span className="absolute top-4 left-4 w-[1px] h-4 bg-primary/50" />
                <span className="absolute bottom-4 right-4 w-4 h-[1px] bg-primary/50" />
                <span className="absolute bottom-4 right-4 w-[1px] h-4 bg-primary/50" />
              </div>
            </ScrollReveal>
          </div>

          {/* Story Narrative Right */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                Applying Customer Understanding & Sales Acumen to <span className="text-primary">Digital Marketing</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                With professional experience in <strong className="text-white font-semibold">Customer Service and Sales</strong>, I have developed a strong foundation in communication, customer understanding, and business development. Having recently completed my <strong className="text-primary font-semibold">Digital Marketing course</strong>, I am now focused on applying these transferable skills to build a successful career in the digital marketing industry.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                I have completed my <strong className="text-white font-semibold">B.Sc. in Chemistry</strong> and <strong className="text-white font-semibold">M.A. in English</strong>, both from <strong className="text-primary font-semibold">IGNOU</strong>. My academic background has helped me develop strong analytical, communication, and problem-solving skills.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl border border-primary/20 bg-[#0A0E17]/80 backdrop-blur-sm flex items-start gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/30 text-primary shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">Academic Qualifications</h3>
                    <p className="text-xs text-text-sec mt-1 leading-normal font-light">
                      B.Sc. (Chemistry) & M.A. (English) from IGNOU — strong analytical & communication foundation.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-primary/20 bg-[#0A0E17]/80 backdrop-blur-sm flex items-start gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-blue shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">Commercial Exposure</h3>
                    <p className="text-xs text-text-sec mt-1 leading-normal font-light">
                      Customer Service (Tech Mahindra) & Sales Execution (Mystic MoneyMart / Bridge Funding).
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Section 2: Professional Experience Cards */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
                Professional Foundation
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mt-1">
                Corporate Background & Experience
              </h2>
              <div className="w-12 h-[2px] bg-primary mx-auto mt-3" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tech Mahindra Card */}
            <ScrollReveal className="h-full">
              <div className="glass-panel p-8 bg-[#020408]/80 border-primary/20 hover:border-primary/40 transition-all duration-300 rounded-2xl h-full flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(212,168,83,0.1)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Headphones className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                      Flipkart Process
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">
                    Customer Service Executive
                  </h3>
                  <h4 className="font-mono text-xs text-accent-blue mt-1 uppercase tracking-wider font-semibold">
                    Tech Mahindra
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                    Worked on the Flipkart process, where I developed strong skills in customer communication, active problem-solving, query handling, conflict resolution, and maintaining a consistently positive customer experience.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {["Customer Communication", "Query Handling", "Problem Solving", "CX Management"].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Mystic MoneyMart Card */}
            <ScrollReveal className="h-full">
              <div className="glass-panel p-8 bg-[#020408]/80 border-primary/20 hover:border-primary/40 transition-all duration-300 rounded-2xl h-full flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(56,189,248,0.1)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                      Bridge Funding
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-accent-blue transition-colors">
                    Sales Executive
                  </h3>
                  <h4 className="font-mono text-xs text-primary mt-1 uppercase tracking-wider font-semibold">
                    Mystic MoneyMart (Bridge Funding)
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
                    Gained extensive commercial exposure in active sales execution, lead qualification and handling, client communication, proactive follow-ups, diagnosing customer requirements, and consistently delivering toward business targets.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {["Lead Handling", "Sales Conversion", "Client Follow-ups", "Target Achievement"].map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Section 3: Digital Marketing Key Competencies */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
                Domain Competencies
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mt-1">
                Completed Digital Marketing Course & Core Skills
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-sec mt-3 max-w-2xl mx-auto">
                Comprehensive training and hands-on skill development across full-funnel digital marketing channels.
              </p>
              <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 bg-[#020408]/60 border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0A0E17] border border-border-gold flex items-center justify-center mb-4 group-hover:border-primary group-hover:scale-105 transition-all">
                    {skill.icon}
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-text-sec mt-2 leading-relaxed font-light">
                    {skill.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-primary text-[11px] font-mono font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Certified Competency</span>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Section 4: Strategic Vision & Approach */}
        <ScrollReveal className="mb-24">
          <div className="glass-panel p-8 sm:p-12 bg-gradient-to-r from-[#0A0E17] via-[#020408] to-[#0A0E17] border border-primary/30 rounded-2xl max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.25em] font-bold block mb-2">
                Strategic Vision & Value Proposition
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Driving Measurable Business Growth Through Digital Execution
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-4">
                I am particularly interested in understanding how digital marketing strategies can help businesses <strong className="text-primary font-semibold">increase online visibility</strong>, <strong className="text-white font-semibold">attract the right target audience</strong>, <strong className="text-accent-blue font-semibold">generate qualified leads</strong>, and <strong className="text-primary font-semibold">achieve measurable revenue growth</strong>.
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                I am eager to learn, highly adaptable, hardworking, and committed to continuously refining and upgrading my skills with modern digital marketing frameworks and AI tools.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Section 5: Target Roles & Opportunities Callout */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-10 bg-[#020408]/90 border-2 border-primary/30 rounded-2xl max-w-4xl mx-auto text-center shadow-[0_0_30px_rgba(212,168,83,0.12)]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs uppercase tracking-widest font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Open for Immediate Opportunities
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
              Seeking Digital Marketing Internship & Entry-Level Roles
            </h2>
            <p className="text-xs sm:text-sm text-text-sec max-w-2xl mx-auto mb-6 leading-relaxed font-light">
              I am currently looking for an Internship or Entry-Level Job opportunity where I can apply my knowledge, gain hands-on industry experience, learn from experienced marketing leaders, and contribute to meaningful business campaigns.
            </p>

            {/* Target Role Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
              {targetRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/40 text-primary font-mono text-xs uppercase tracking-wider font-semibold shadow-sm hover:scale-105 transition-transform"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="btn-shine-sweep px-8 py-3.5 bg-primary text-[#020408] font-mono text-xs uppercase tracking-widest font-extrabold rounded-lg inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <span>Connect For Hiring</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="/Dharmesh_Thakur_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-transparent border border-primary/40 text-primary font-mono text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-primary/5 hover:border-primary transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Resume (PDF)</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
