import { AppSaasProject } from "../types";

export const APPS_SAAS_CATEGORIES = [
  "All",
  "SaaS",
  "AI Tools",
  "Marketing Tools",
  "Productivity",
  "Automation",
  "Dashboard",
  "Web Apps",
  "Business Tools"
] as const;

export const APPS_SAAS_PROJECTS: AppSaasProject[] = [
  {
    id: "seo-audit",
    projectName: "SEO Audit",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    description: "Automated technical & on-page SEO analyzer delivering site health scores and instant fix blueprints.",
    category: "SaaS",
    categories: ["SaaS", "SEO & Marketing", "AI Tools", "Business Tools"],
    features: [
      "Core Web Vitals & Technical Crawl",
      "Automated On-Page Health Score",
      "Priority Actionable Fix Checklist"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Tailwind"],
    status: "Live",
    liveUrl: "https://seoaudit.zite.so/",
    badge: "SEO Suite",
    featured: true
  },
  {
    id: "keyword-research",
    projectName: "Keyword Research",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    description: "AI keyword discovery tool calculating search volume, intent metrics, and long-tail growth ideas.",
    category: "Marketing Tools",
    categories: ["Marketing Tools", "AI Tools", "SaaS", "Business Tools"],
    features: [
      "Search Volume & Difficulty Scores",
      "Long-Tail Intent Discovery",
      "CPC & Competition Benchmarks"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "REST API"],
    status: "Live",
    liveUrl: "https://keywordresearch.zite.so/",
    badge: "High Growth",
    featured: true
  },
  {
    id: "keyword-conflict",
    projectName: "Keyword Conflict",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    description: "Cannibalization detector flagging competing internal URLs that rank for identical search terms.",
    category: "Business Tools",
    categories: ["Business Tools", "SaaS", "Productivity", "Marketing Tools"],
    features: [
      "SERP Cannibalization Checker",
      "URL Rank Conflict Alerts",
      "Consolidation Recommendations"
    ],
    technologies: ["TypeScript", "React", "D3.js", "Tailwind"],
    status: "Live",
    liveUrl: "https://keywordconflict.zite.so/",
    badge: "Analytics"
  },
  {
    id: "seo-gap",
    projectName: "SEO Gap",
    thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80",
    description: "Competitor search gap analyzer uncovering untargeted keywords and domain traffic opportunities.",
    category: "SaaS",
    categories: ["SaaS", "Marketing Tools", "Business Tools"],
    features: [
      "Domain vs Domain Comparison",
      "Unranked Keyword Extraction",
      "Opportunity Score Index"
    ],
    technologies: ["React", "Tailwind", "Node.js", "Chart.js"],
    status: "Live",
    liveUrl: "https://seogap.zite.so/",
    badge: "Competitor Intelligence"
  },
  {
    id: "search-intent-analyzer",
    projectName: "Search Intent Analyzer",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    description: "AI text classification engine categorizing search queries into Informational, Commercial, or Transactional intent.",
    category: "AI Tools",
    categories: ["AI Tools", "Marketing Tools", "SaaS", "Automation"],
    features: [
      "AI Query Classification",
      "SERP Feature Intent Mapping",
      "Content Match Alignment"
    ],
    technologies: ["Gemini AI", "React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://searchintent.zite.so/",
    badge: "Gemini AI",
    featured: true
  },
  {
    id: "keyword-mapper",
    projectName: "Keyword Mapper",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    description: "Visual URL-to-keyword assignment workspace ensuring every landing page targets unique search intent.",
    category: "Productivity",
    categories: ["Productivity", "Marketing Tools", "Web Apps"],
    features: [
      "Visual Page Architecture Map",
      "Duplicate Target Alert",
      "One-Click CSV Export"
    ],
    technologies: ["React", "Tailwind", "State Management"],
    status: "Live",
    liveUrl: "https://keywordmap.zite.so/",
    badge: "Architecture"
  },
  {
    id: "topic-clusters",
    projectName: "Topic Clusters",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description: "Semantic grouping SaaS organizing hundreds of keywords into pillar pages and supporting cluster posts.",
    category: "SaaS",
    categories: ["SaaS", "AI Tools", "Marketing Tools", "Productivity"],
    features: [
      "Pillar & Cluster Auto Builder",
      "Semantic Relevance Grouping",
      "Content Hierarchy Export"
    ],
    technologies: ["React", "Node.js", "AI Embeddings", "Tailwind"],
    status: "Live",
    liveUrl: "https://topicclusters.zite.so/",
    badge: "Topical Authority",
    featured: true
  },
  {
    id: "content-decay",
    projectName: "Content Decay",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    description: "Automated traffic monitor flagging declining articles and pages before organic search rankings drop.",
    category: "Dashboard",
    categories: ["Dashboard", "Automation", "SaaS", "Business Tools"],
    features: [
      "Real-Time Traffic Loss Alert",
      "Decay Rate Percentage Metric",
      "Actionable Refresh Checklist"
    ],
    technologies: ["React", "Recharts", "Tailwind CSS", "Node.js"],
    status: "Live",
    liveUrl: "https://contentdecay.zite.so/",
    badge: "Monitor"
  },
  {
    id: "topic-gap",
    projectName: "Topic Gap",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    description: "Sub-topic coverage analyzer identifying missing questions and concepts required for full E-E-A-T domain authority.",
    category: "Marketing Tools",
    categories: ["Marketing Tools", "SaaS", "AI Tools"],
    features: [
      "Sub-Topic Gap Identification",
      "FAQ & PAA Extractor",
      "Topical Authority Score"
    ],
    technologies: ["React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://topicgap.zite.so/",
    badge: "E-E-A-T"
  },
  {
    id: "backlink-gap",
    projectName: "Backlink Gap",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    description: "Competitive link intelligence tool discovering high-DR domains linking to competitors but not to you.",
    category: "SaaS",
    categories: ["SaaS", "Business Tools", "Marketing Tools"],
    features: [
      "Multi-Domain Link Overlap",
      "Domain Authority Scoring",
      "Outreach Target List Export"
    ],
    technologies: ["React", "Node.js", "Tailwind", "Express"],
    status: "Live",
    liveUrl: "https://backlinkgap.zite.so/",
    badge: "Link Building"
  },
  {
    id: "backlink-finder",
    projectName: "Backlink Finder",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    description: "Automated prospect finder discovering high-quality link placement opportunities in your niche.",
    category: "Automation",
    categories: ["Automation", "Marketing Tools", "Web Apps"],
    features: [
      "Niche Prospect Scoring",
      "Contact Info Extraction",
      "Filter by Domain Rating"
    ],
    technologies: ["React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://backlinkfinder.zite.so/",
    badge: "Outreach"
  },
  {
    id: "content-overlap",
    projectName: "Content Overlap",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    description: "Redundancy scanner detecting duplicate copy, overlapping posts, and thin content across large websites.",
    category: "Productivity",
    categories: ["Productivity", "SEO & Marketing", "Web Apps"],
    features: [
      "Content Similarity Percentage",
      "Near-Duplicate Detection",
      "Pruning & Merge Guide"
    ],
    technologies: ["React", "Vite", "Tailwind"],
    status: "Live",
    liveUrl: "https://contentoverlap.zite.so/",
    badge: "Audit Tool"
  },
  {
    id: "internal-link",
    projectName: "Internal Link",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description: "Smart internal link optimizer recommending contextual anchor text and page equity flow across your site.",
    category: "Automation",
    categories: ["Automation", "Marketing Tools", "SaaS"],
    features: [
      "Contextual Anchor Generator",
      "Link Equity Distribution",
      "Missing Internal Link Alerts"
    ],
    technologies: ["React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://internallink.zite.so/",
    badge: "SEO Equity"
  },
  {
    id: "orphan-page-finder",
    projectName: "Orphan Page Finder",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    description: "Site crawler utility identifying unlinked URLs missing from site architecture that search bots miss.",
    category: "Dashboard",
    categories: ["Dashboard", "SaaS", "Automation"],
    features: [
      "Sitemap vs Crawl Cross-Check",
      "Isolated URL Detection",
      "Instant Architecture Integration"
    ],
    technologies: ["React", "Node.js", "Tailwind"],
    status: "Live",
    liveUrl: "https://orphanpagefinder.zite.so/",
    badge: "Technical SEO"
  },
  {
    id: "schema-check",
    projectName: "Schema Check",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    description: "Structured data validator and JSON-LD markup builder ensuring rich snippet eligibility on search engines.",
    category: "Web Apps",
    categories: ["Web Apps", "Marketing Tools", "Productivity"],
    features: [
      "Live JSON-LD Syntax Validator",
      "Google Rich Snippet Preview",
      "One-Click Schema Code Generator"
    ],
    technologies: ["React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://schemacheck.zite.so/",
    badge: "Rich Snippets"
  },
  {
    id: "title-lab",
    projectName: "Title Lab",
    thumbnail: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=600&q=80",
    description: "AI-powered title tag and headline lab optimizing CTR using emotional triggers and pixel width validation.",
    category: "AI Tools",
    categories: ["AI Tools", "Marketing Tools", "Productivity"],
    features: [
      "CTR Prediction Simulator",
      "Google SERP Pixel Truncation Check",
      "AI Headline Variation Engine"
    ],
    technologies: ["Gemini AI", "React", "Tailwind"],
    status: "Live",
    liveUrl: "https://titlelab.zite.so/",
    badge: "AI Optimization",
    featured: true
  },
  {
    id: "meta-fixer",
    projectName: "Meta Fixer",
    thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
    description: "Bulk meta description generator and auditor fixing missing, duplicate, or truncated snippets instantly.",
    category: "Automation",
    categories: ["Automation", "Productivity", "Marketing Tools"],
    features: [
      "Bulk AI Snippet Writer",
      "Character Count Safe Guard",
      "Duplicate Description Cleaner"
    ],
    technologies: ["React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://metafixer.zite.so/",
    badge: "Bulk Automation"
  },
  {
    id: "heading-map",
    projectName: "Heading Map",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    description: "DOM H1-H6 heading hierarchy outline tool checking document structure, accessibility, and keyword flow.",
    category: "Web Apps",
    categories: ["Web Apps", "Productivity", "Business Tools"],
    features: [
      "DOM Heading Tree Visualization",
      "Accessibility Hierarchy Violations",
      "Heading Keyword Density Map"
    ],
    technologies: ["React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://headingmap.zite.so/",
    badge: "UX Structure"
  },
  {
    id: "content-gap",
    projectName: "Content Gap",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    description: "Deep content gap engine comparing your page section-by-section against top-ranking SERP competitors.",
    category: "SaaS",
    categories: ["SaaS", "Marketing Tools", "AI Tools"],
    features: [
      "Section-by-Section Gap Breakdown",
      "Competitor Keyword Density Map",
      "Comprehensive Outline Builder"
    ],
    technologies: ["React", "Vite", "Tailwind"],
    status: "Live",
    liveUrl: "https://contentgap.zite.so/",
    badge: "SERP Intelligence"
  },
  {
    id: "keyword-opportunity",
    projectName: "Keyword Opportunity",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    description: "Striking-distance keyword scanner uncovering page 2-3 rankings ready for rapid quick-win optimization.",
    category: "Dashboard",
    categories: ["Dashboard", "SaaS", "Business Tools", "Marketing Tools"],
    features: [
      "Page 2-3 Striking Distance Terms",
      "Estimated Traffic Lift Calculator",
      "Quick-Win Priority Ranking"
    ],
    technologies: ["React", "Recharts", "Tailwind"],
    status: "Live",
    liveUrl: "https://keywordopportunity.zite.so/",
    badge: "Quick Win ROI"
  },
  {
    id: "seo-opportunity-radar",
    projectName: "SEO Opportunity Radar",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    description: "Real-time keyword radar tracking high-ROI organic search opportunities and low-competition growth spikes.",
    category: "SaaS",
    categories: ["SaaS", "Marketing Tools", "AI Tools", "Business Tools"],
    features: [
      "Real-Time Keyword Spike Radar",
      "Low-Difficulty ROI Opportunity Index",
      "Competitive Content Gap Signals"
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Node.js"],
    status: "Live",
    liveUrl: "https://seoradar.zite.so/",
    badge: "Opportunity Radar",
    featured: true
  },
  {
    id: "ai-search-readiness-checker",
    projectName: "AI Search Readiness Checker",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    description: "GEO & AEO diagnostic suite evaluating website visibility across ChatGPT, Perplexity, Claude, and Gemini search engines.",
    category: "AI Tools",
    categories: ["AI Tools", "SaaS", "Marketing Tools", "Automation"],
    features: [
      "Generative Engine Optimization (GEO) Score",
      "AEO Citation & Source Readiness Audit",
      "AI Entity Extraction Diagnostic"
    ],
    technologies: ["Gemini AI", "React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://aisearchreadiness.zite.so/",
    badge: "GEO & AEO AI",
    featured: true
  },
  {
    id: "topical-authority-analyzer",
    projectName: "Topical Authority Analyzer",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    description: "Semantic domain depth tool mapping content coverage, pillar-cluster integrity, and entity completeness.",
    category: "Marketing Tools",
    categories: ["Marketing Tools", "SaaS", "AI Tools", "Productivity"],
    features: [
      "Domain Semantic Depth Rating",
      "Pillar-Cluster Integrity Audit",
      "Entity Knowledge Graph Coverage"
    ],
    technologies: ["React", "TypeScript", "D3.js", "Tailwind"],
    status: "Live",
    liveUrl: "https://topicalauthorityanalyzer.zite.so/",
    badge: "Topical Authority"
  },
  {
    id: "seo-cannibalization-detector",
    projectName: "SEO Cannibalization Detector",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    description: "Advanced SERP conflict engine detecting self-competing pages and generating URL consolidation action plans.",
    category: "Business Tools",
    categories: ["Business Tools", "SaaS", "Automation", "Marketing Tools"],
    features: [
      "SERP Keyword Conflict Mapping",
      "Rank Volatility & Split Traffic Alerts",
      "301 Redirect & Merge Recommendations"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    status: "Live",
    liveUrl: "https://cannibalizationdetector.zite.so/",
    badge: "SERP Conflict"
  },
  {
    id: "local-seo-opportunity-finder",
    projectName: "Local SEO Opportunity Finder",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    description: "Geographic search intelligence tool auditing Google Business Profiles, local pack rankings, and citation gaps.",
    category: "SaaS",
    categories: ["SaaS", "Business Tools", "Marketing Tools", "Dashboard"],
    features: [
      "Google Business Profile Audit",
      "Local Map Pack Grid Analysis",
      "NAP Citation Consistency Check"
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Google Maps API"],
    status: "Live",
    liveUrl: "https://localseoopportunityfinder.zite.so/",
    badge: "Local SEO"
  },
  {
    id: "eeat-signal-checker",
    projectName: "E-E-A-T Signal Checker",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    description: "Google Quality Rater guideline evaluator auditing author trust, credentials, citations, and transparency signals.",
    category: "AI Tools",
    categories: ["AI Tools", "SaaS", "Productivity", "Web Apps"],
    features: [
      "Author Credibility & Bio Analyzer",
      "Trust Signal & Policy Audit",
      "Quality Rater Guidelines Alignment Score"
    ],
    technologies: ["Gemini AI", "React", "TypeScript", "Tailwind"],
    status: "Live",
    liveUrl: "https://eeatsignalchecker.zite.so/",
    badge: "Trust & Authority",
    featured: true
  },
  {
    id: "toolsmaniaa",
    projectName: "ToolsMania",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    description: "Multi-utility developer & digital toolkit offering 50+ web utilities, converters, formatters, and SEO generators.",
    category: "Productivity",
    categories: ["Productivity", "Web Apps", "Marketing Tools", "Business Tools"],
    features: [
      "50+ Developer & SEO Utilities",
      "Instant Client-Side Code & Data Converters",
      "Fast Zero-Server Processing"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Live",
    liveUrl: "https://toolsmaniaa.vercel.app/",
    badge: "50+ Utilities",
    featured: true
  }
];
