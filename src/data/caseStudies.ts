import { CaseStudy } from "../types";

export const CASE_STUDY_CATEGORIES = [
  "All",
  "SEO & Audit",
  "Google & Meta Ads",
  "Social Media Marketing",
  "Content Strategy",
  "Keyword Research",
  "E-Commerce Growth",
  "Brand Strategy",
  "Website Audit"
] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "nike-india",
    title: "Nike India — SEO Audit & Digital Growth Strategy",
    client: "Nike",
    pdfUrl: "https://pdflink.to/nikeindia/",
    category: "SEO & Audit",
    description: "Comprehensive SEO audit & digital growth strategy for Nike India. Analyzes Technical SEO, On-Page SEO, Content Quality, GEO & AEO Readiness, and CRO.",
    tags: ["Technical SEO", "On-Page SEO", "GEO Readiness", "CRO"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    metrics: "+120% Traffic Potential",
    featured: true
  },
  {
    id: "zomato",
    title: "Zomato — Hyperlocal SEO & Keyword Research Strategy",
    client: "Zomato",
    pdfUrl: "https://pdflink.to/zomato/",
    category: "Keyword Research",
    description: "Strategic SEO & keyword mapping for India's leading food delivery platform. Covers 50+ high-intent keywords, local SEO stacks, and topic clusters.",
    tags: ["Keyword Research", "Local SEO", "Search Intent", "FoodTech"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80",
    metrics: "50+ Keywords Mapped",
    featured: true
  },
  {
    id: "netflix",
    title: "Netflix — OTT Platform Competitive Intelligence Analysis",
    client: "Netflix",
    pdfUrl: "https://pdflink.to/netflix/",
    category: "Brand Strategy",
    description: "Deep-dive competitive intelligence evaluating Netflix against Disney+, Amazon Prime Video, and Max across 13 site factors, SWOT, and roadmap.",
    tags: ["Competitive Intelligence", "SWOT Analysis", "OTT Strategy"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    metrics: "13 Site Factors Audited",
    featured: true
  },
  {
    id: "muscleblaze",
    title: "MuscleBlaze — D2C Fitness Content & Performance Marketing",
    client: "Muscleblaze",
    pdfUrl: "https://pdflink.to/muscleblaze/",
    category: "Content Strategy",
    description: "Performance content & D2C search optimization strategy for India's premier sports nutrition brand, targeting high-conversion buyer intent keywords.",
    tags: ["Content Strategy", "D2C Marketing", "Sports Nutrition"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    metrics: "D2C Funnel Optimized"
  },
  {
    id: "rapido",
    title: "Rapido — Technical SEO & Urban Mobility App Growth",
    client: "Rapido",
    pdfUrl: "https://pdflink.to/rapido/",
    category: "SEO & Audit",
    description: "Technical SEO audit & app landing page optimization strategy for Rapido bike-taxi service, boosting organic visibility for micro-location queries.",
    tags: ["Technical SEO", "App Indexing", "Urban Mobility"],
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    metrics: "+85% Mobile Visibility"
  },
  {
    id: "dabur",
    title: "Dabur India — On-Page SEO & Ayurvedic Brand Audit",
    client: "Dabur",
    pdfUrl: "https://pdflink.to/dabur/",
    category: "SEO & Audit",
    description: "On-page SEO optimization & content gap audit for Dabur's healthcare & wellness portfolio, establishing topic authority in herbal healthcare.",
    tags: ["On-Page SEO", "Ayurveda", "FMCG Growth"],
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    metrics: "Topic Authority Stack"
  },
  {
    id: "tech-mahindra",
    title: "Tech Mahindra — B2B Enterprise Local SEO & Digital Reach",
    client: "Tech Mahindra",
    pdfUrl: "https://pdflink.to/techmahindra/",
    category: "SEO & Audit",
    description: "Global enterprise B2B local SEO & digital footprint analysis for Tech Mahindra, enhancing global service page indexing and lead generation.",
    tags: ["B2B SEO", "Enterprise Local SEO", "Tech Services"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    metrics: "Global B2B Lead Funnel"
  },
  {
    id: "sun-pharma",
    title: "Sun Pharma — Healthcare Google Ads & Search Strategy",
    client: "Sun Pharma",
    pdfUrl: "https://pdflink.to/sunpharma/",
    category: "Google & Meta Ads",
    description: "Strategic Google Search Ads campaign blueprint & compliance-focused keyword architecture for pharmaceutical & healthcare products.",
    tags: ["Google Ads", "PPC Campaign", "Healthcare Marketing"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    metrics: "Compliant Ad Architecture",
    featured: true
  },
  {
    id: "boat-lifestyle",
    title: "boAt Lifestyle — E-Commerce Meta Ads & D2C Scaling",
    client: "boat",
    pdfUrl: "https://pdflink.to/boat-lifestyle/",
    category: "Google & Meta Ads",
    description: "Meta Ads creative strategy & retargeting funnel for boAt audio products, optimizing ad spend return and customer acquisition cost.",
    tags: ["Meta Ads", "ROAS Optimization", "Audio Electronics"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    metrics: "4.2x ROAS Framework"
  },
  {
    id: "unacademy",
    title: "Unacademy — EdTech Social Media & Organic Funnel",
    client: "Unacademy",
    pdfUrl: "https://pdflink.to/unacademy1/",
    category: "Social Media Marketing",
    description: "Multi-channel social media engagement campaign & organic learner acquisition funnel for India's leading EdTech preparation platform.",
    tags: ["Social Media", "EdTech Funnel", "Community Growth"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    metrics: "EdTech Community Scaling"
  },
  {
    id: "meesho",
    title: "Meesho — Social Commerce Lead Gen & Conversion Funnel",
    client: "Meesho",
    pdfUrl: "https://pdflink.to/meesho1/",
    category: "E-Commerce Growth",
    description: "Lead generation strategy & buyer conversion optimization audit for Meesho's social e-commerce ecosystem in Tier 2/3 markets.",
    tags: ["Social Commerce", "Lead Gen", "Conversion Rate"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    metrics: "Tier 2/3 Market Reach"
  },
  {
    id: "delhivery",
    title: "Delhivery — Logistics Search & GEO/AEO Optimization",
    client: "Delhivery",
    pdfUrl: "https://pdflink.to/delhivery/",
    category: "SEO & Audit",
    description: "SEO, Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO) audit for Delhivery supply chain & tracking portals.",
    tags: ["GEO / AEO", "Logistics SEO", "AI Search Readiness"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    metrics: "GEO/AEO AI Ready"
  },
  {
    id: "dr-lal-pathlabs",
    title: "Dr Lal Pathlabs — Strategic Business Analysis & Healthcare SEO",
    client: "Dr Lal Pathlabs",
    pdfUrl: "https://pdflink.to/drlalpathlab/",
    category: "Brand Strategy",
    description: "Strategic business analysis & organic healthcare search strategy for lab test bookings and diagnostic center locator SEO.",
    tags: ["Healthcare SEO", "Diagnostics", "Local Citations"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    metrics: "Diagnostic Center Citations"
  },
  {
    id: "amul",
    title: "Amul — Digital Gap Analysis, SEO & GEO Audit",
    client: "Amul",
    pdfUrl: "https://pdflink.to/amul/",
    category: "Brand Strategy",
    description: "Digital gap analysis & multi-product SEO/GEO evaluation for Amul, uncovering organic reach opportunities in dairy & frozen foods.",
    tags: ["Gap Analysis", "FMCG Branding", "GEO Audit"],
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
    metrics: "FMCG Digital Blueprint"
  },
  {
    id: "burger-king",
    title: "Burger King India — Full Website Audit & CRO Strategy",
    client: "Burger King",
    pdfUrl: "https://pdflink.to/burgerking/",
    category: "Website Audit",
    description: "Full website UX audit & conversion rate optimization for Burger King India's digital ordering system and mobile coupons.",
    tags: ["Website Audit", "CRO", "QSR Tech", "UX Research"],
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    metrics: "Order Funnel Friction Reduced",
    featured: true
  },
  {
    id: "oppo",
    title: "Oppo India — Smartphone Launch & Digital Campaign Audit",
    client: "Oppo",
    pdfUrl: "https://pdflink.to/oppo/",
    category: "Google & Meta Ads",
    description: "Digital marketing & paid media campaign breakdown for Oppo smartphone flagship launches, focusing on Gen-Z audience engagement.",
    tags: ["Product Launch", "Paid Media", "Consumer Tech"],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    metrics: "Gen-Z Launch Blueprint"
  },
  {
    id: "flipkart",
    title: "Flipkart — Big Billion Days Organic Growth & SEO Strategy",
    client: "Flipkart",
    pdfUrl: "https://pdflink.to/flipkart/",
    category: "E-Commerce Growth",
    description: "SEO strategy & organic search traffic architecture for festive mega-sale events (Big Billion Days), targeting high-volume category terms.",
    tags: ["E-Commerce SEO", "Festive Sales", "High Traffic SEO"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    metrics: "Festive Traffic Peak Plan"
  },
  {
    id: "raymond",
    title: "Raymond — Premium Apparel Digital Brand Audit & Omnichannel",
    client: "Raymond",
    pdfUrl: "https://pdflink.to/raymond/",
    category: "Brand Strategy",
    description: "Digital brand strategy & omnichannel customer journey audit for Raymond's bespoke luxury tailoring and retail store network.",
    tags: ["Brand Strategy", "Luxury Apparel", "Omnichannel"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    metrics: "Omnichannel Journey Map"
  },
  {
    id: "haldiram",
    title: "Haldiram's — FMCG E-Commerce Expansion & Search Audit",
    client: "Haldiram",
    pdfUrl: "https://pdflink.to/haldiram/",
    category: "SEO & Audit",
    description: "E-commerce expansion audit & organic search optimization for Haldiram's global packaged snacks and sweet boxes.",
    tags: ["FMCG E-Commerce", "Organic Search", "International SEO"],
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    metrics: "Global Snacks E-Com Setup"
  },
  {
    id: "patanjali",
    title: "Patanjali Ayurved — Multi-Category Search & Reach Audit",
    client: "Patanjali",
    pdfUrl: "https://pdflink.to/patanjali/",
    category: "SEO & Audit",
    description: "Multi-category digital reach analysis & organic visibility audit for Patanjali Ayurved's herbal personal care & food products.",
    tags: ["Herbal Care", "Multi-Category SEO", "Brand Audit"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    metrics: "Multi-Category Reach"
  },
  {
    id: "mamaearth",
    title: "Mamaearth — Beauty D2C Performance Ads & Influencer Strategy",
    client: "Mamaearth",
    pdfUrl: "https://pdflink.to/mamaearth/",
    category: "Google & Meta Ads",
    description: "D2C acquisition strategy, paid social ad funnels & influencer collaboration strategy for toxin-free beauty & personal care.",
    tags: ["D2C Performance", "Meta Ads", "Beauty Marketing"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    metrics: "Toxin-Free D2C Funnel"
  },
  {
    id: "cadbury",
    title: "Cadbury India — Festive Campaign & Engagement Strategy",
    client: "Cadbury",
    pdfUrl: "https://pdflink.to/cadbury/",
    category: "Content Strategy",
    description: "Festive digital engagement strategy & viral campaign audit for Cadbury Celebrations gift packs across social and search channels.",
    tags: ["Festive Campaign", "Viral Marketing", "Confectionery"],
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80",
    metrics: "Viral Festive Campaign"
  }
];
