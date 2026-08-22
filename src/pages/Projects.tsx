import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Download, Eye, FileText, 
  BarChart3, Search, Globe, CheckCircle, Sparkles, X
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import TiltCard from "../components/TiltCard";

// Import all 22 Interactive Case Study Decks
import NikeCaseStudyDeck from "../components/NikeCaseStudyDeck";
import ZomatoCaseStudyDeck from "../components/ZomatoCaseStudyDeck";
import NetflixCaseStudyDeck from "../components/NetflixCaseStudyDeck";
import MuscleBlazeCaseStudyDeck from "../components/MuscleBlazeCaseStudyDeck";
import RapidoCaseStudyDeck from "../components/RapidoCaseStudyDeck";
import DaburCaseStudyDeck from "../components/DaburCaseStudyDeck";
import TechMahindraCaseStudyDeck from "../components/TechMahindraCaseStudyDeck";
import SunPharmaCaseStudyDeck from "../components/SunPharmaCaseStudyDeck";
import BoatCaseStudyDeck from "../components/BoatCaseStudyDeck";
import UnacademyCaseStudyDeck from "../components/UnacademyCaseStudyDeck";
import MeeshoCaseStudyDeck from "../components/MeeshoCaseStudyDeck";
import DelhiveryCaseStudyDeck from "../components/DelhiveryCaseStudyDeck";
import LalPathLabsCaseStudyDeck from "../components/LalPathLabsCaseStudyDeck";
import AmulCaseStudyDeck from "../components/AmulCaseStudyDeck";
import BurgerKingCaseStudyDeck from "../components/BurgerKingCaseStudyDeck";
import OppoCaseStudyDeck from "../components/OppoCaseStudyDeck";
import FlipkartCaseStudyDeck from "../components/FlipkartCaseStudyDeck";
import RaymondCaseStudyDeck from "../components/RaymondCaseStudyDeck";
import HaldiramCaseStudyDeck from "../components/HaldiramCaseStudyDeck";
import PatanjaliCaseStudyDeck from "../components/PatanjaliCaseStudyDeck";
import MamaearthCaseStudyDeck from "../components/MamaearthCaseStudyDeck";
import CadburyCaseStudyDeck from "../components/CadburyCaseStudyDeck";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  pdfUrl: string;
  downloadName: string;
  pdfPages: number;
  pdfSize: string;
  deckComponent: string;
  coverImage: string;
  highlights: string[];
  featured?: boolean;
}

export const ORIGINAL_15_PROJECTS: ProjectItem[] = [
  {
    id: "nike",
    title: "Nike India — SEO Audit & Growth Strategy",
    subtitle: "Technical SEO, GEO & AEO Readiness, Content Quality & CRO Audit",
    category: "SEO & Audit",
    tags: ["Technical SEO", "GEO Readiness", "CRO", "E-Commerce"],
    pdfUrl: "/projects/Nike_India_SEO_Audit_Case_Study.pdf",
    downloadName: "Nike_India_SEO_Audit_Case_Study.pdf",
    pdfPages: 10,
    pdfSize: "4.2 MB",
    deckComponent: "NikeCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    highlights: ["+120% Organic Growth Potential", "Core Web Vitals Audit", "GEO/AEO AI Search Architecture"],
    featured: true
  },
  {
    id: "zomato",
    title: "Zomato — Hyperlocal SEO & Keyword Strategy",
    subtitle: "Search Intent Mapping, Local SEO Stacks & Topic Clustering",
    category: "Keyword Research",
    tags: ["Hyperlocal SEO", "Keyword Research", "FoodTech", "Search Intent"],
    pdfUrl: "/projects/Zomato_Hyperlocal_SEO_Strategy.pdf",
    downloadName: "Zomato_Hyperlocal_SEO_Strategy.pdf",
    pdfPages: 10,
    pdfSize: "3.8 MB",
    deckComponent: "ZomatoCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80",
    highlights: ["50+ High-Intent Keywords", "Local Citations Stack", "App Store & Web Synergy"],
    featured: true
  },
  {
    id: "netflix",
    title: "Netflix — OTT Platform Competitive Intelligence",
    subtitle: "Evaluating Netflix vs Disney+, Prime & Max across 13 Factors",
    category: "Brand Strategy",
    tags: ["Competitive Intelligence", "SWOT Analysis", "OTT Strategy", "Market Research"],
    pdfUrl: "/projects/Netflix_Competitive_Intelligence.pdf",
    downloadName: "Netflix_Competitive_Intelligence.pdf",
    pdfPages: 10,
    pdfSize: "4.5 MB",
    deckComponent: "NetflixCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    highlights: ["13 Site Factors Audited", "Content Retention Roadmap", "SERP Share Comparison"],
    featured: true
  },
  {
    id: "muscleblaze",
    title: "MuscleBlaze — D2C Fitness Content Strategy",
    subtitle: "High-Conversion Buyer Intent Keyword Mapping & D2C Funnels",
    category: "Content Strategy",
    tags: ["Content Strategy", "D2C Funnel", "Sports Nutrition", "PPC Synergy"],
    pdfUrl: "/projects/MuscleBlaze_D2C_Content_Strategy.pdf",
    downloadName: "MuscleBlaze_D2C_Content_Strategy.pdf",
    pdfPages: 10,
    pdfSize: "3.9 MB",
    deckComponent: "MuscleBlazeCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    highlights: ["Content-to-Cart Funnels", "Fitness Buyer Keywords", "D2C CRO Optimization"],
    featured: true
  },
  {
    id: "rapido",
    title: "Rapido — Technical SEO & App Architecture Audit",
    subtitle: "10-Page In-Depth Audit with 15 Actionable Technical Recommendations",
    category: "SEO & Audit",
    tags: ["Technical SEO", "App Indexing", "Urban Mobility", "Crawl Budget"],
    pdfUrl: "/projects/Rapido_Technical_SEO_Audit.pdf",
    downloadName: "Rapido_Technical_SEO_Audit.pdf",
    pdfPages: 10,
    pdfSize: "4.1 MB",
    deckComponent: "RapidoCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    highlights: ["15 Priority Fixes", "App Deep-Linking Architecture", "Crawl Budget Scaling"],
    featured: true
  },
  {
    id: "dabur",
    title: "Dabur India — On-Page SEO & Content Quality Audit",
    subtitle: "Ayurvedic Healthcare Content Audit & Structured Schema Strategy",
    category: "SEO & Audit",
    tags: ["On-Page SEO", "Content Quality", "Healthcare SEO", "Schema Markup"],
    pdfUrl: "/projects/Dabur_India_OnPage_SEO_Audit.pdf",
    downloadName: "Dabur_India_OnPage_SEO_Audit.pdf",
    pdfPages: 10,
    pdfSize: "4.0 MB",
    deckComponent: "DaburCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    highlights: ["Healthcare E-A-T Compliance", "Medical Schema Strategy", "Ayurveda Category Hubs"]
  },
  {
    id: "techmahindra",
    title: "Tech Mahindra — Local SEO & Global Presence Audit",
    subtitle: "NAP Consistency, Multi-Location Citations & B2B IT Lead Architecture",
    category: "SEO & Audit",
    tags: ["Local SEO", "B2B Lead Gen", "NAP Citations", "Enterprise SEO"],
    pdfUrl: "/projects/Tech_Mahindra_Local_SEO_Audit.pdf",
    downloadName: "Tech_Mahindra_Local_SEO_Audit.pdf",
    pdfPages: 10,
    pdfSize: "3.7 MB",
    deckComponent: "TechMahindraCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    highlights: ["Global Multi-Office Citations", "B2B Enterprise Search", "GEO Visibility Map"]
  },
  {
    id: "sunpharma",
    title: "Sun Pharma — Google Ads Strategy (B2B & B2C Healthcare)",
    subtitle: "Search, Display, Performance Max & YouTube Ads Campaign Blueprint",
    category: "Google & Meta Ads",
    tags: ["Google Ads", "Healthcare PPC", "PMax Campaigns", "B2B Lead Gen"],
    pdfUrl: "/projects/Sun_Pharma_Google_Ads_Strategy.pdf",
    downloadName: "Sun_Pharma_Google_Ads_Strategy.pdf",
    pdfPages: 10,
    pdfSize: "4.3 MB",
    deckComponent: "SunPharmaCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    highlights: ["Healthcare Compliance Ad Strategy", "Performance Max Architecture", "B2B Doctor Funnels"],
    featured: true
  },
  {
    id: "boat",
    title: "boAt Lifestyle — Meta Ads Strategy (High-ROAS D2C Scaling)",
    subtitle: "Advantage+ Shopping, Creative Hook Testing & Retargeting Blueprint",
    category: "Google & Meta Ads",
    tags: ["Meta Ads", "D2C Scaling", "Advantage+ Shopping", "High ROAS"],
    pdfUrl: "/projects/boAt_Lifestyle_Meta_Ads_Strategy.pdf",
    downloadName: "boAt_Lifestyle_Meta_Ads_Strategy.pdf",
    pdfPages: 10,
    pdfSize: "4.6 MB",
    deckComponent: "BoatCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    highlights: ["Advantage+ Scaling Framework", "High-CTR Creative Hooks", "Dynamic Catalog Retargeting"],
    featured: true
  },
  {
    id: "unacademy",
    title: "Unacademy — Social Media Marketing & Community Strategy",
    subtitle: "Organic Growth, YouTube Strategy, WhatsApp & Telegram Learner Funnels",
    category: "Content Strategy",
    tags: ["EdTech Funnel", "Social Media", "Community Growth", "Learner CRO"],
    pdfUrl: "/projects/Unacademy_EdTech_Funnel_Strategy.pdf",
    downloadName: "Unacademy_EdTech_Funnel_Strategy.pdf",
    pdfPages: 10,
    pdfSize: "3.9 MB",
    deckComponent: "UnacademyCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    highlights: ["EdTech Learner Acquisition", "Competitive Exam Keywords", "App Conversion Funnel"]
  },
  {
    id: "meesho",
    title: "Meesho — Social Commerce Search & Lead Gen",
    subtitle: "Tier 2/3 Market Reseller Funnel & E-Commerce Audit",
    category: "E-Commerce Growth",
    tags: ["Social Commerce", "Tier 2/3 Markets", "Reseller Growth", "Lead Gen"],
    pdfUrl: "/projects/Meesho_Social_Commerce_Strategy.pdf",
    downloadName: "Meesho_Social_Commerce_Strategy.pdf",
    pdfPages: 10,
    pdfSize: "4.1 MB",
    deckComponent: "MeeshoCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    highlights: ["Tier 2/3 Market Penetration", "Vernacular Keyword Stacks", "Reseller Conversion Funnel"]
  },
  {
    id: "delhivery",
    title: "Delhivery — Supply Chain & Logistics SEO",
    subtitle: "GEO/AEO AI Search Optimization for Logistics Portals",
    category: "SEO & Audit",
    tags: ["GEO / AEO", "Logistics SEO", "AI Search", "Supply Chain"],
    pdfUrl: "/projects/Delhivery_Logistics_SEO_Strategy.pdf",
    downloadName: "Delhivery_Logistics_SEO_Strategy.pdf",
    pdfPages: 10,
    pdfSize: "3.8 MB",
    deckComponent: "DelhiveryCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    highlights: ["AI Search GEO Readiness", "Tracking Portal Optimization", "B2B Logistics Citations"]
  },
  {
    id: "laddpathlabs",
    title: "Dr Lal PathLabs — Diagnostic Health Search Strategy",
    subtitle: "Lab Test Bookings & Diagnostic Center Locator SEO",
    category: "Brand Strategy",
    tags: ["Healthcare SEO", "Diagnostics", "Local Citations", "Doctor Portal"],
    pdfUrl: "/projects/Dr_Lal_PathLabs_Healthcare_SEO.pdf",
    downloadName: "Dr_Lal_PathLabs_Healthcare_SEO.pdf",
    pdfPages: 10,
    pdfSize: "4.0 MB",
    deckComponent: "LalPathLabsCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    highlights: ["Diagnostic Center Locators", "Lab Test Keyword Architecture", "Trust & E-A-T Building"]
  },
  {
    id: "amul",
    title: "Amul India — FMCG Multi-Category SEO Audit",
    subtitle: "Digital Gap Analysis & GEO Evaluation in Dairy & Foods",
    category: "Brand Strategy",
    tags: ["FMCG Audit", "Gap Analysis", "GEO Audit", "Multi-Category"],
    pdfUrl: "/projects/Amul_FMCG_Digital_Audit.pdf",
    downloadName: "Amul_FMCG_Digital_Audit.pdf",
    pdfPages: 10,
    pdfSize: "4.4 MB",
    deckComponent: "AmulCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
    highlights: ["FMCG Multi-Category Strategy", "Dairy & Frozen Food Keywords", "GEO AI Search Readiness"]
  },
  {
    id: "burgerking",
    title: "Burger King India — QSR Digital CRO & SEO Audit",
    subtitle: "Digital Ordering System, Mobile Coupons & App CRO Strategy",
    category: "Website Audit",
    tags: ["Website Audit", "CRO", "QSR Tech", "Mobile UX"],
    pdfUrl: "/projects/Burger_King_QSR_Digital_Audit.pdf",
    downloadName: "Burger_King_QSR_Digital_Audit.pdf",
    pdfPages: 10,
    pdfSize: "4.2 MB",
    deckComponent: "BurgerKingCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    highlights: ["QSR App Order Funnel", "Mobile Coupon CRO", "Store Locator Local SEO"],
    featured: true
  },
  {
    id: "oppo",
    title: "Oppo — Smartphone Launch & Paid Media Funnel Strategy",
    subtitle: "Gen-Z Portrait Camera Flagship Launch & Local Store Footfall Strategy",
    category: "Google & Meta Ads",
    tags: ["Smartphone Launch", "Paid Media", "Meta Ads", "Local Footfall", "Gen-Z"],
    pdfUrl: "https://pdflink.to/oppo/",
    downloadName: "Oppo_Launch_Digital_Strategy.pdf",
    pdfPages: 8,
    pdfSize: "3.6 MB",
    deckComponent: "OppoCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    highlights: ["4.5x Campaign Launch ROAS", "Hyperlocal Store Walk-ins", "Gen-Z Creator Whitelisting"],
    featured: true
  },
  {
    id: "flipkart",
    title: "Flipkart — Big Billion Days Festive SEO Architecture",
    subtitle: "High-Volume Festive Traffic Infrastructure & Organic Search Domination",
    category: "E-Commerce Growth",
    tags: ["E-Commerce SEO", "Festive Sales", "Crawl Architecture", "Structured Data"],
    pdfUrl: "https://pdflink.to/flipkart/",
    downloadName: "Flipkart_BBD_Festive_SEO_Strategy.pdf",
    pdfPages: 8,
    pdfSize: "4.1 MB",
    deckComponent: "FlipkartCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    highlights: ["+240% Festive Traffic Surge", "Evergreen Hub Architecture", "-42% Blended CAC"],
    featured: true
  },
  {
    id: "raymond",
    title: "Raymond — Luxury Suiting & Omnichannel Brand Audit",
    subtitle: "Heritage Suiting Brand Modernization & In-Store Tailoring Booking Funnels",
    category: "Brand Strategy",
    tags: ["Luxury Retail", "Omnichannel SEO", "Bespoke Tailoring", "Local Citations"],
    pdfUrl: "https://pdflink.to/raymond/",
    downloadName: "Raymond_Omnichannel_Brand_Audit.pdf",
    pdfPages: 8,
    pdfSize: "3.7 MB",
    deckComponent: "RaymondCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    highlights: ["+165% Store Walk-in Uplift", "1,500+ Franchise Map Citations", "Bespoke Suiting Booking CRO"]
  },
  {
    id: "haldiram",
    title: "Haldiram's — FMCG E-Commerce Expansion & Global Search",
    subtitle: "Sweets, Namkeen & Cross-Border D2C Gifting Search Infrastructure",
    category: "SEO & Audit",
    tags: ["FMCG E-Commerce", "Global D2C", "Festive Gifting", "Quick Commerce"],
    pdfUrl: "https://pdflink.to/haldiram/",
    downloadName: "Haldirams_Global_FMCG_Strategy.pdf",
    pdfPages: 8,
    pdfSize: "3.9 MB",
    deckComponent: "HaldiramCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    highlights: ["3.2x Festive Order Volume", "Cross-Border NRI Gifting", "Restaurant Outlet Local SEO"]
  },
  {
    id: "patanjali",
    title: "Patanjali — Ayurveda Multi-Category Visibility & Clinic SEO",
    subtitle: "Ayurvedic Healthcare, Herbal Cosmetics & 5,000+ Clinic Search Blueprint",
    category: "Website Audit",
    tags: ["Ayurveda SEO", "YMYL Health", "Arogya Kendra", "FMCG Scaling"],
    pdfUrl: "https://pdflink.to/patanjali/",
    downloadName: "Patanjali_Ayurveda_Search_Audit.pdf",
    pdfPages: 8,
    pdfSize: "4.0 MB",
    deckComponent: "PatanjaliCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    highlights: ["48% Ayurveda Search SOV", "5,000+ Vaidya Clinic Maps", "Interactive Dosha Diagnostic"]
  },
  {
    id: "mamaearth",
    title: "Mamaearth — Beauty D2C Performance Ads & Whitelisting",
    subtitle: "Meta Ads ROAS Optimization & Beauty Creator Whitelisting Funnels",
    category: "Google & Meta Ads",
    tags: ["D2C Performance", "Creator Whitelisting", "Meta Ads", "BOGO Funnels"],
    pdfUrl: "https://pdflink.to/mamaearth/",
    downloadName: "Mamaearth_Performance_Ads_Strategy.pdf",
    pdfPages: 8,
    pdfSize: "3.8 MB",
    deckComponent: "MamaearthCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    highlights: ["4.1x Blended Paid ROAS", "-38% Customer Acquisition Cost", "WhatsApp Care & Reorder Triggers"]
  },
  {
    id: "cadbury",
    title: "Cadbury Celebrations — Festive Campaign & Viral Engagement",
    subtitle: "\"Kuch Meetha Ho Jaaye\" AI Personalized Video Gifting & Quick-Commerce",
    category: "Content Strategy",
    tags: ["Viral Campaigns", "Generative AI Gifting", "Quick Commerce", "Festive Gifting"],
    pdfUrl: "https://pdflink.to/cadbury/",
    downloadName: "Cadbury_Celebrations_Campaign_Strategy.pdf",
    pdfPages: 8,
    pdfSize: "4.3 MB",
    deckComponent: "CadburyCaseStudyDeck",
    coverImage: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
    highlights: ["85M+ Festive Impressions", "Interactive AI Video Gifting", "10-Min Quick Commerce Rush"],
    featured: true
  }
];

export const ALL_PROJECTS = ORIGINAL_15_PROJECTS;

export default function Projects() {
  const [activeDeck, setActiveDeck] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "SEO & Audit", "Keyword Research", "Brand Strategy", "Content Strategy", "Google & Meta Ads", "E-Commerce Growth", "Website Audit"];

  const filteredProjects = ORIGINAL_15_PROJECTS.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs uppercase tracking-widest mb-4 font-semibold shadow-sm">
              <BarChart3 className="w-4 h-4" />
              <span>Digital Marketing Projects & Decks</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Interactive Marketing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4A853] to-[#A8782A]">
                Case Study Decks
              </span>
            </h1>

            <p className="mt-4 text-text-sec text-sm sm:text-base leading-relaxed">
              Explore 22 interactive campaign slide decks complete with audits, growth frameworks, and downloadable PDF reports for industry leaders.
            </p>

            {/* Banner Quick Links */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/case-studies"
                className="px-5 py-2.5 rounded-xl bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#020408] text-xs font-mono font-bold uppercase transition-all flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>View All 22 PDF Case Studies →</span>
              </Link>
              <Link
                to="/web-dev"
                className="px-5 py-2.5 rounded-xl bg-[#0A0E17] border border-[#D4A853]/20 text-white hover:border-[#D4A853]/50 text-xs font-mono font-bold uppercase transition-all flex items-center space-x-2"
              >
                <Globe className="w-4 h-4 text-[#D4A853]" />
                <span>Explore 22+ Live Websites →</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0A0E17]/80 p-4 rounded-2xl border border-[#D4A853]/20 backdrop-blur-md">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A853]" />
              <input
                type="text"
                placeholder="Search 22 projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2 bg-[#020408]/80 text-white text-xs font-mono rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-sec hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-text-sec">
              Showing <strong className="text-[#D4A853]">{filteredProjects.length}</strong> of 22 Projects
            </div>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D4A853] text-[#020408] font-bold shadow-md"
                    : "bg-[#0A0E17] text-text-sec border border-[#D4A853]/15 hover:border-[#D4A853]/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id}>
              <div className="group relative h-full flex flex-col justify-between bg-[#0A0E17]/95 hover:bg-[#0E1526] border border-[#D4A853]/35 hover:border-[#D4A853]/70 rounded-2xl overflow-hidden shadow-lg transition-all duration-500">
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#020408]">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80";
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-65" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-[#020408]/90 text-[#D4A853] border border-[#D4A853]/30 font-bold">
                        {project.category}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-[#D4A853] text-[#020408] font-bold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-display font-bold text-white group-hover:text-[#D4A853] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-sec line-clamp-2">
                      {project.subtitle}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {project.highlights.map((hl) => (
                        <div key={hl} className="flex items-center space-x-2 text-[11px] text-slate-300 font-mono">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setActiveDeck(project.id)}
                    className="flex-1 py-2.5 px-3 bg-[#D4A853] text-[#020408] rounded-xl font-mono text-xs uppercase font-bold hover:bg-white transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Deck</span>
                  </button>

                  <a
                    href={project.pdfUrl}
                    download={project.downloadName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] rounded-xl hover:bg-[#D4A853] hover:text-[#020408] transition-colors cursor-pointer"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Decks Modal Handler */}
      <AnimatePresence>
        {activeDeck === "nike" && <NikeCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "zomato" && <ZomatoCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "netflix" && <NetflixCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "muscleblaze" && <MuscleBlazeCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "rapido" && <RapidoCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "dabur" && <DaburCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "techmahindra" && <TechMahindraCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "sunpharma" && <SunPharmaCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "boat" && <BoatCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "unacademy" && <UnacademyCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "meesho" && <MeeshoCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "delhivery" && <DelhiveryCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "laddpathlabs" && <LalPathLabsCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "amul" && <AmulCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "burgerking" && <BurgerKingCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "oppo" && <OppoCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "flipkart" && <FlipkartCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "raymond" && <RaymondCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "haldiram" && <HaldiramCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "patanjali" && <PatanjaliCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "mamaearth" && <MamaearthCaseStudyDeck onClose={() => setActiveDeck(null)} />}
        {activeDeck === "cadbury" && <CadburyCaseStudyDeck onClose={() => setActiveDeck(null)} />}
      </AnimatePresence>
    </div>
  );
}
