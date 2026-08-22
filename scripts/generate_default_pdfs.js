import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const publicProjectsDir = path.join(process.cwd(), 'public', 'projects');

if (!fs.existsSync(publicProjectsDir)) {
  fs.mkdirSync(publicProjectsDir, { recursive: true });
}

const DEFAULT_PROJECTS = [
  {
    profileTitle: "Nike India — SEO Audit & Digital Growth Strategy",
    clientName: "Nike India",
    category: "SEO & Content",
    date: "June 2026",
    domain: "nike.in",
    industry: "Sportswear, Footwear, Apparel",
    author: "Dharmesh",
    role: "Senior SEO Specialist & Digital Marketing Strategist",
    overallScore: 63,
    issuesFound: 15,
    auditAreas: 9,
    roadmapTime: "6mo",
    trafficPotential: "+120%",
    serpFeaturesCount: "10+",
    shortSummary: "Comprehensive SEO Audit & Digital Growth Strategy for Nike India. Analyzes Technical SEO, On-Page SEO, Content Quality, GEO & AEO Readiness, and UX/CRO across a 10-page case study with a 6-month roadmap delivering +120% organic traffic potential.",
    tags: ["Technical SEO", "On-Page SEO", "Content Quality", "GEO Readiness", "AEO Readiness", "UX / CRO", "Local SEO"],
    pdfFileName: "Nike_India_SEO_Audit_Case_Study.pdf",
    targetKeywords: [
      { type: "BRAND", kw: "nike shoes india" },
      { type: "CATEGORY", kw: "running shoes india" },
      { type: "PRODUCT", kw: "nike air max india" },
      { type: "INTENT", kw: "buy nike shoes online india" },
      { type: "LONG-TAIL", kw: "nike shoes under 5000" },
      { type: "VOICE", kw: "best running shoes for men india" }
    ],
    scores: {
      technical: 68,
      onpage: 72,
      content: 65,
      performance: 60,
      mobile: 78,
      ux: 75,
      local: 55,
      geo: 50,
      aeo: 48
    },
    strengths: [
      "HTTPS / SSL Secured",
      "Mobile-Responsive Design",
      "Global Brand Authority (DA 90+)",
      "Clean, Minimal Design System",
      "Broad Product Catalog",
      "Active Social Media Presence",
      ".in TLD - India-Specific Domain"
    ],
    weaknesses: [
      "Slow Page Load (CWV Failing)",
      "Thin Product Content",
      "Missing Structured Data / Schema",
      "No FAQ / Q&A Content",
      "Weak Local SEO Signals",
      "No Blog / Content Hub",
      "GEO Signals Absent",
      "Weak Internal Linking"
    ]
  },
  {
    profileTitle: "Zomato — Keyword Research & Local SEO Strategy Case Study",
    clientName: "Zomato",
    category: "Keyword Research & SEO",
    date: "June 2026",
    domain: "zomato.com",
    industry: "FoodTech & Hyperlocal Delivery",
    author: "Dharmesh",
    role: "Senior SEO Specialist & Digital Marketing Strategist",
    overallScore: 57,
    issuesFound: 18,
    auditAreas: 9,
    roadmapTime: "6mo",
    trafficPotential: "+140%",
    serpFeaturesCount: "12+",
    shortSummary: "Strategic SEO & keyword planning for India's leading food delivery & restaurant discovery platform. Maps search intent across 50+ keywords, 5-layer hyperlocal local SEO strategy, GEO/AEO answer optimization, and topic clusters.",
    tags: ["Keyword Research", "Local SEO", "Search Intent", "GEO & AEO", "Content Clusters", "FoodTech"],
    pdfFileName: "Zomato_Keyword_Research_Case_Study.pdf",
    targetKeywords: [
      { type: "BRAND", kw: "zomato online order" },
      { type: "CATEGORY", kw: "best restaurants near me" },
      { type: "PRODUCT", kw: "biryani home delivery" },
      { type: "INTENT", kw: "order food online delhi" },
      { type: "LONG-TAIL", kw: "late night food delivery mumbai" },
      { type: "VOICE", kw: "top rated pizza places near me" }
    ],
    scores: {
      technical: 62,
      onpage: 65,
      content: 58,
      performance: 52,
      mobile: 82,
      ux: 78,
      local: 68,
      geo: 45,
      aeo: 42
    },
    strengths: [
      "Massive Hyperlocal Presence",
      "High Domain Authority (DA 85+)",
      "Strong Mobile App Engagement",
      "Extensive Restaurant Listings",
      "Active User Reviews Ecosystem",
      "Strong Brand Search Volume",
      "Fast API Response Times"
    ],
    weaknesses: [
      "Duplicate Listing URLs",
      "Missing Menu Schema Markup",
      "Thin Category Descriptions",
      "Core Web Vitals LCP Lag",
      "Lack of GEO Citable Data",
      "No Voice Assistant Intent Hooks",
      "Inconsistent Local Citations",
      "Weak Deep Linking for Web"
    ]
  },
  {
    profileTitle: "Netflix — OTT Streaming Platform Competitive Intelligence",
    clientName: "Netflix",
    category: "Competitive Intelligence",
    date: "June 2026",
    domain: "netflix.com/in",
    industry: "Media, Entertainment & OTT",
    author: "Dharmesh",
    role: "Senior SEO Specialist & Digital Marketing Strategist",
    overallScore: 71,
    issuesFound: 12,
    auditAreas: 9,
    roadmapTime: "6mo",
    trafficPotential: "+85%",
    serpFeaturesCount: "15+",
    shortSummary: "Deep-dive competitive analysis of Netflix vs. Disney+, Amazon Prime Video, and Max. Evaluates 13 website factors, content gaps, SWOT matrix, and a 30/60/90-day roadmap targeting emerging market search dominance.",
    tags: ["Competitive Intelligence", "OTT Streaming", "SEO Benchmark", "Content Gap Analysis", "AEO / GEO Strategy", "SWOT"],
    pdfFileName: "Netflix_Competitive_Intelligence_Case_Study.pdf",
    targetKeywords: [
      { type: "BRAND", kw: "netflix india plans" },
      { type: "CATEGORY", kw: "best movies on netflix" },
      { type: "PRODUCT", kw: "stranger things season 5" },
      { type: "INTENT", kw: "watch hindi series online" },
      { type: "LONG-TAIL", kw: "top rated action movies 2026" },
      { type: "VOICE", kw: "what is popular on netflix today" }
    ],
    scores: {
      technical: 78,
      onpage: 70,
      content: 72,
      performance: 80,
      mobile: 85,
      ux: 88,
      local: 40,
      geo: 55,
      aeo: 52
    },
    strengths: [
      "Best-in-Class Streaming UX",
      "Global Content Monopoly",
      "Ultra-Fast CDN Page Speed",
      "High Brand Search Share",
      "Multi-Language Audio Subtitles",
      "Seamless Mobile App Flow",
      "Pristine Video Preview Cards"
    ],
    weaknesses: [
      "No Public Content Blog",
      "Indexation Closed behind Paywall",
      "Missing Video Object Schema",
      "Thin Regional Title Snippets",
      "GEO Answer Gaps for Cast Info",
      "Weak Regional SEO Landing Pages",
      "Missing FAQ Schema on Plans",
      "No Direct Voice Search Snippets"
    ]
  },
  {
    profileTitle: "MuscleBlaze — Full-Funnel Content Strategy & SEO",
    clientName: "MuscleBlaze",
    category: "Content Strategy",
    date: "June 2026",
    domain: "muscleblaze.com",
    industry: "Sports Nutrition & D2C E-Commerce",
    author: "Dharmesh",
    role: "Senior SEO Specialist & Digital Marketing Strategist",
    overallScore: 61,
    issuesFound: 16,
    auditAreas: 9,
    roadmapTime: "6mo",
    trafficPotential: "+150%",
    serpFeaturesCount: "9+",
    shortSummary: "Full-funnel content strategy (TOFU/MOFU/BOFU) for India's leading sports nutrition brand. Features a 30-day multi-channel content calendar, pillar-cluster SEO model, and AI search (GEO) & voice search (AEO) optimization.",
    tags: ["Content Strategy", "Full-Funnel Marketing", "Topic Clusters", "GEO & AEO", "D2C E-Commerce", "30-Day Calendar"],
    pdfFileName: "MuscleBlaze_Content_Strategy_Case_Study.pdf",
    targetKeywords: [
      { type: "BRAND", kw: "muscleblaze whey protein" },
      { type: "CATEGORY", kw: "best whey isolate in india" },
      { type: "PRODUCT", kw: "mb biozyme whey protein" },
      { type: "INTENT", kw: "buy original whey protein online" },
      { type: "LONG-TAIL", kw: "how to check muscleblaze authenticity" },
      { type: "VOICE", kw: "which whey protein is best for muscle growth" }
    ],
    scores: {
      technical: 65,
      onpage: 68,
      content: 62,
      performance: 58,
      mobile: 74,
      ux: 72,
      local: 48,
      geo: 52,
      aeo: 50
    },
    strengths: [
      "Strong D2C E-Commerce Funnel",
      "High Product Trust & Reviews",
      "Recognized Brand Ambassadors",
      "Active Social Media UGC",
      "Broad Product Flavor Variants",
      "Integrated Product Authenticator",
      "Responsive Shopping Cart"
    ],
    weaknesses: [
      "Thin Blog Article Length",
      "Missing Medical Review Signals",
      "Incomplete Product Schema",
      "Slow Mobile Page Speed",
      "No Voice Assistant Answer Blocks",
      "Weak Internal Cluster Links",
      "Lack of Fitness Calculators",
      "No Local Store Stock Finder"
    ]
  },
  {
    profileTitle: "Rapido — Technical SEO Audit & Optimization Strategy",
    clientName: "Rapido",
    category: "Technical SEO",
    date: "June 2026",
    domain: "rapido.bike",
    industry: "Urban Mobility & Bike Taxi",
    author: "Dharmesh",
    role: "Senior SEO Specialist & Digital Marketing Strategist",
    overallScore: 69,
    issuesFound: 14,
    auditAreas: 9,
    roadmapTime: "6mo",
    trafficPotential: "+110%",
    serpFeaturesCount: "8+",
    shortSummary: "Agency-quality 14-factor Technical SEO audit & 90-day roadmap for India's leading bike taxi & hyperlocal mobility app. Resolves Core Web Vitals risks, missing Schema markup, JS rendering bottlenecks, and scales local SEO across 120+ cities.",
    tags: ["Technical SEO", "Core Web Vitals", "Structured Data", "Crawlability", "Mobile SEO", "90-Day Roadmap"],
    pdfFileName: "Rapido_Technical_SEO_Audit_Case_Study.pdf",
    targetKeywords: [
      { type: "BRAND", kw: "rapido bike taxi app" },
      { type: "CATEGORY", kw: "bike taxi booking bangalore" },
      { type: "PRODUCT", kw: "rapido auto fare estimator" },
      { type: "INTENT", kw: "book cheap ride online" },
      { type: "LONG-TAIL", kw: "how to become rapido captain" },
      { type: "VOICE", kw: "nearest bike taxi service" }
    ],
    scores: {
      technical: 69,
      onpage: 71,
      content: 55,
      performance: 62,
      mobile: 82,
      ux: 79,
      local: 64,
      geo: 48,
      aeo: 45
    },
    strengths: [
      "Fast Mobile App Hydration",
      "Strong Local Brand Identity",
      "Wide City Fleet Coverage",
      "Clean Flat Site Navigation",
      "Low App Download Friction",
      "Responsive Driver Portal",
      "High Mobile Indexability"
    ],
    weaknesses: [
      "Dynamic JS Rendering Delays",
      "Duplicate City Landing Pages",
      "Missing LocalBusiness Schema",
      "Core Web Vitals INP Latency",
      "No City-Specific Ride Guides",
      "Weak GEO Quotable Statements",
      "Missing FAQ Accordion Schema",
      "Inconsistent Sitemap Indexing"
    ]
  }
];

const OTHER_PROJECT_NAMES = [
  { name: "Dabur India", file: "Dabur_India_OnPage_SEO_Audit_Case_Study.pdf", category: "On-Page SEO", domain: "dabur.com" },
  { name: "Tech Mahindra", file: "Tech_Mahindra_Local_SEO_Case_Study.pdf", category: "Local SEO", domain: "techmahindra.com" },
  { name: "Sun Pharma", file: "Sun_Pharma_Google_Ads_Strategy.pdf", category: "Paid Search", domain: "sunpharma.com" },
  { name: "boAt Lifestyle", file: "boAt_Lifestyle_Meta_Ads_Strategy.pdf", category: "Paid Social", domain: "boat-lifestyle.com" },
  { name: "Unacademy", file: "Unacademy_Social_Media_Strategy.pdf", category: "Social Media", domain: "unacademy.com" },
  { name: "Meesho", file: "Meesho_Lead_Gen_Funnel_Strategy.pdf", category: "Growth Funnels", domain: "meesho.com" },
  { name: "Delhivery", file: "Delhivery_SEO_GEO_AEO_Audit_Report.pdf", category: "Technical & GEO", domain: "delhivery.com" },
  { name: "Dr. Lal PathLabs", file: "Dr_Lal_PathLabs_Strategic_Business_Analysis.pdf", category: "Business Analysis", domain: "lalpathlabs.com" },
  { name: "Amul", file: "Amul_Digital_Gap_Analysis_SEO_GEO_AEO.pdf", category: "Digital Gap Analysis", domain: "amul.com" },
  { name: "Burger King India", file: "Burger_King_India_Full_Website_Audit.pdf", category: "Website Audit", domain: "burgerking.in" }
];

OTHER_PROJECT_NAMES.forEach((item) => {
  DEFAULT_PROJECTS.push({
    profileTitle: `${item.name} — Full Digital Growth & Audit Case Study`,
    clientName: item.name,
    category: item.category,
    date: "June 2026",
    domain: item.domain,
    industry: "Enterprise, D2C & Retail",
    author: "Dharmesh",
    role: "Senior SEO Specialist & Digital Marketing Strategist",
    overallScore: Math.floor(Math.random() * 20) + 55,
    issuesFound: Math.floor(Math.random() * 8) + 12,
    auditAreas: 9,
    roadmapTime: "6mo",
    trafficPotential: "+115%",
    serpFeaturesCount: "10+",
    shortSummary: `In-depth 10-page digital marketing case study for ${item.name}. Comprehensive analysis spanning Technical SEO, On-Page Optimization, GEO/AEO AI Search Readiness, UX CRO conversion funnels, and a 6-month actionable execution roadmap.`,
    tags: [item.category, "Technical SEO", "On-Page SEO", "GEO & AEO", "UX CRO", "Roadmap"],
    pdfFileName: item.file,
    targetKeywords: [
      { type: "BRAND", kw: `${item.name.toLowerCase()} online` },
      { type: "CATEGORY", kw: `${item.category.toLowerCase()} india` },
      { type: "PRODUCT", kw: `${item.name.toLowerCase()} services` },
      { type: "INTENT", kw: `buy ${item.name.toLowerCase()} online` },
      { type: "LONG-TAIL", kw: `best ${item.name.toLowerCase()} solutions 2026` },
      { type: "VOICE", kw: `how to find ${item.name.toLowerCase()} near me` }
    ],
    scores: {
      technical: 64,
      onpage: 68,
      content: 60,
      performance: 58,
      mobile: 76,
      ux: 72,
      local: 52,
      geo: 48,
      aeo: 46
    },
    strengths: [
      "High Domain Authority & Trust",
      "SSL & Mobile-Responsive Design",
      "Broad Brand Search Visibility",
      "Established Retail Network",
      "Active Customer Base",
      "Clean UI Layout System",
      "Secure Platform Infrastructure"
    ],
    weaknesses: [
      "Core Web Vitals LCP & INP Gaps",
      "Missing JSON-LD Structured Data",
      "Thin Product & Category Descriptions",
      "Lack of Citable GEO AI Statements",
      "No Voice Assistant Q&A Content",
      "Inconsistent Local SEO Signals",
      "Weak Internal Link Siloing",
      "Mobile Checkout Friction Points"
    ]
  });
});

const CANVAS_W = 841.89;
const CANVAS_H = 595.28;

function initSlideCanvas(doc, project, pageNum, slideTitle) {
  if (pageNum > 1) {
    doc.addPage({ size: 'A4', layout: 'landscape', margin: 0 });
  }

  const orange = '#FF5500';
  const darkBg = '#05070E';
  const gridLine = '#0F172A';

  // 1. Fill entire slide background with pitch dark slate (NO WHITE SPACE AT ALL)
  doc.rect(0, 0, CANVAS_W, CANVAS_H).fill(darkBg);

  // 2. Draw subtle background grid pattern
  for (let x = 0; x < CANVAS_W; x += 40) {
    doc.moveTo(x, 0).lineTo(x, CANVAS_H).strokeColor(gridLine).lineWidth(0.4).stroke();
  }
  for (let y = 0; y < CANVAS_H; y += 40) {
    doc.moveTo(0, y).lineTo(CANVAS_W, y).strokeColor(gridLine).lineWidth(0.4).stroke();
  }

  // 3. Header Bar (Top Y: 0 to 45)
  doc.rect(0, 0, CANVAS_W, 45).fill('#080E1C');
  doc.rect(0, 44, CANVAS_W, 1.5).fill(orange);

  doc.fillColor(orange).fontSize(10).font('Helvetica-Bold').text(project.clientName.toUpperCase(), 30, 15);
  doc.fillColor('#E2E8F0').fontSize(11).font('Helvetica-Bold').text(`  |  ${slideTitle}`, 120, 15);

  doc.fillColor(orange).fontSize(10).font('Helvetica-Bold').text(`SLIDE ${pageNum.toString().padStart(2, '0')} / 10`, CANVAS_W - 130, 15, { align: 'right', width: 100 });

  // 4. Footer Bar (Bottom Y: 560 to 595.28)
  doc.rect(0, 560, CANVAS_W, 35).fill('#080E1C');
  doc.rect(0, 560, CANVAS_W, 1).fill('#1E293B');

  doc.fillColor('#64748B').fontSize(8.5).font('Helvetica').text(
    `Digital Growth Case Study  •  Prepared by ${project.author} (${project.role})  •  Confidential & Proprietary`,
    30, 572, { align: 'left', width: CANVAS_W - 60 }
  );
}

function generate10PagePdf(project) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(publicProjectsDir, project.pdfFileName);
    
    // Create Landscape A4 with 0 margins to prevent auto page wraps
    const doc = new PDFDocument({ 
      size: 'A4', 
      layout: 'landscape', 
      margin: 0,
      autoFirstPage: true 
    });

    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    const orange = '#FF5500';
    const cardBg = '#0F172A';
    const cardBorder = '#1E293B';
    const textWhite = '#FFFFFF';
    const textMuted = '#94A3B8';

    // ================= SLIDE 1: COVER & EXECUTIVE SCORECARD =================
    initSlideCanvas(doc, project, 1, 'Executive Summary & Audit Scorecard');

    // Title Card Box
    doc.rect(30, 60, 510, 160).fillAndStroke(cardBg, orange);
    doc.fillColor(orange).fontSize(10).font('Helvetica-Bold').text('CASE STUDY REPORT', 50, 75);
    doc.fillColor(textWhite).fontSize(20).font('Helvetica-Bold').text(project.profileTitle, 50, 92, { width: 470 });
    doc.fillColor(textMuted).fontSize(9.5).font('Helvetica').text(`Industry: ${project.industry}  |  Domain: ${project.domain}  |  Date: ${project.date}`, 50, 150);

    // Tags Row
    let tagX = 50;
    project.tags.slice(0, 5).forEach((t) => {
      const w = t.length * 5.5 + 14;
      doc.rect(tagX, 175, w, 18).fillAndStroke('#1E293B', orange);
      doc.fillColor(textWhite).fontSize(7.5).font('Helvetica-Bold').text(t, tagX + 7, 180);
      tagX += w + 8;
    });

    // Right Score Card Box
    doc.rect(560, 60, 250, 160).fillAndStroke(cardBg, orange);
    doc.fillColor(orange).fontSize(42).font('Helvetica-Bold').text(`${project.overallScore}`, 560, 85, { align: 'center', width: 250 });
    doc.fillColor(textWhite).fontSize(12).font('Helvetica-Bold').text('/ 100 OVERALL SCORE', 560, 135, { align: 'center', width: 250 });
    doc.fillColor(textMuted).fontSize(8.5).font('Helvetica').text('Multi-Factor Growth & SEO Score', 560, 155, { align: 'center', width: 250 });

    // 4 Key Metric Stat Blocks
    const statMetrics = [
      { label: 'CRITICAL ISSUES', val: `${project.issuesFound} Found`, color: '#EF4444' },
      { label: 'AUDIT DOMAINS', val: `${project.auditAreas} Pillars`, color: orange },
      { label: 'EXECUTION TIMELINE', val: project.roadmapTime, color: '#3B82F6' },
      { label: 'ORGANIC POTENTIAL', val: project.trafficPotential, color: '#10B981' }
    ];

    statMetrics.forEach((st, i) => {
      const mX = 30 + (i * 196);
      doc.rect(mX, 235, 186, 75).fillAndStroke(cardBg, cardBorder);
      doc.fillColor(st.color).fontSize(20).font('Helvetica-Bold').text(st.val, mX + 15, 250);
      doc.fillColor(textMuted).fontSize(8.5).font('Helvetica-Bold').text(st.label, mX + 15, 280);
    });

    // Strategic Overview Card
    doc.rect(30, 325, 780, 220).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(11).font('Helvetica-Bold').text('STRATEGIC OVERVIEW & EXECUTIVE BRIEF', 50, 340);
    doc.fillColor(textWhite).fontSize(10).font('Helvetica').text(project.shortSummary, 50, 360, { width: 740, align: 'justify' });

    // Metadata details grid
    doc.rect(50, 430, 350, 95).fillAndStroke('#0A0F1E', cardBorder);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('LEAD STRATEGIST', 60, 442);
    doc.fillColor(textWhite).fontSize(10).font('Helvetica').text(`${project.author} (${project.role})`, 60, 458);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('CONTACT EMAIL & PHONE', 60, 480);
    doc.fillColor(textMuted).fontSize(9).font('Helvetica').text('dk3891315@gmail.com  |  +91 8287107944', 60, 496);

    doc.rect(420, 430, 370, 95).fillAndStroke('#0A0F1E', cardBorder);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('METHODOLOGY & AUDIT SCOPE', 430, 442);
    doc.fillColor(textMuted).fontSize(9).font('Helvetica').text('• Technical Crawlability & Core Web Vitals (LCP, INP, CLS)\n• Generative Engine Optimization (GEO) & Voice Search AEO\n• On-Page Schema Markup & Keyword Search Intent Mapping', 430, 458);


    // ================= SLIDE 2: BUSINESS & MARKET CONTEXT =================
    initSlideCanvas(doc, project, 2, 'Business Context & Target Keywords');

    // Left Box: Market Context
    doc.rect(30, 60, 370, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('MARKET & BRAND PROFILE', 50, 80);
    
    doc.fillColor(textMuted).fontSize(9).font('Helvetica-Bold').text('CLIENT NAME', 50, 105);
    doc.fillColor(textWhite).fontSize(11).font('Helvetica').text(project.clientName, 50, 120);

    doc.fillColor(textMuted).fontSize(9).font('Helvetica-Bold').text('PRIMARY DOMAIN', 50, 145);
    doc.fillColor(textWhite).fontSize(11).font('Helvetica').text(project.domain, 50, 160);

    doc.fillColor(textMuted).fontSize(9).font('Helvetica-Bold').text('INDUSTRY VERTICAL', 50, 185);
    doc.fillColor(textWhite).fontSize(11).font('Helvetica').text(project.industry, 50, 200);

    doc.fillColor(textMuted).fontSize(9).font('Helvetica-Bold').text('EXECUTIVE BRIEF', 50, 230);
    doc.fillColor(textWhite).fontSize(9.5).font('Helvetica').text(project.shortSummary, 50, 248, { width: 330, align: 'justify' });

    // Right Box: Target Keyword Strategy
    doc.rect(420, 60, 390, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('TARGET KEYWORD INTENT MATRIX', 440, 80);

    let kwY = 110;
    project.targetKeywords.forEach((k) => {
      doc.rect(440, kwY, 350, 60).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(orange).fontSize(8.5).font('Helvetica-Bold').text(k.type, 455, kwY + 12);
      doc.fillColor(textWhite).fontSize(11).font('Helvetica-Bold').text(`"${k.kw}"`, 455, kwY + 28);
      kwY += 70;
    });


    // ================= SLIDE 3: WEBSITE AUDIT SCORECARD =================
    initSlideCanvas(doc, project, 3, 'Comprehensive Audit Scorecard');

    // Score Bars Container
    doc.rect(30, 60, 520, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('9-PILLAR PERFORMANCE SCORECARD', 50, 80);

    const scoreList = [
      { name: 'Technical SEO', score: project.scores.technical },
      { name: 'On-Page SEO', score: project.scores.onpage },
      { name: 'Content Quality', score: project.scores.content },
      { name: 'Performance / CWV', score: project.scores.performance },
      { name: 'Mobile Responsiveness', score: project.scores.mobile },
      { name: 'User Experience (UX)', score: project.scores.ux },
      { name: 'Local SEO Signals', score: project.scores.local },
      { name: 'GEO Readiness (AI Search)', score: project.scores.geo },
      { name: 'AEO Readiness (Voice Search)', score: project.scores.aeo }
    ];

    let scY = 110;
    scoreList.forEach((s) => {
      doc.fillColor(textWhite).fontSize(9.5).font('Helvetica-Bold').text(s.name, 50, scY + 2);
      
      doc.rect(230, scY, 200, 14).fill('#1E293B');
      const barW = Math.floor((s.score / 100) * 200);
      const color = s.score >= 70 ? '#10B981' : s.score >= 60 ? '#F59E0B' : '#EF4444';
      doc.rect(230, scY, barW, 14).fill(color);

      doc.fillColor(textWhite).fontSize(9.5).font('Helvetica-Bold').text(`${s.score}/100`, 445, scY + 2);
      scY += 46;
    });

    // Right Side: Strengths & Weaknesses
    doc.rect(570, 60, 240, 235).fillAndStroke(cardBg, cardBorder);
    doc.fillColor('#10B981').fontSize(11).font('Helvetica-Bold').text('CORE STRENGTHS', 585, 78);
    project.strengths.slice(0, 5).forEach((str, i) => {
      doc.fillColor(textWhite).fontSize(8.5).font('Helvetica').text(`• ${str}`, 585, 102 + (i * 28), { width: 210 });
    });

    doc.rect(570, 310, 240, 235).fillAndStroke(cardBg, cardBorder);
    doc.fillColor('#EF4444').fontSize(11).font('Helvetica-Bold').text('CRITICAL GAPS', 585, 328);
    project.weaknesses.slice(0, 5).forEach((wk, i) => {
      doc.fillColor(textWhite).fontSize(8.5).font('Helvetica').text(`• ${wk}`, 585, 352 + (i * 28), { width: 210 });
    });


    // ================= SLIDE 4: TECHNICAL SEO AUDIT =================
    initSlideCanvas(doc, project, 4, 'Technical SEO & Architecture Audit');

    doc.rect(30, 60, 780, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('TECHNICAL AUDIT FACTORS & DIAGNOSTICS', 50, 80);

    const techChecks = [
      { check: 'HTTPS / SSL Encryption', status: 'PASS', priority: 'LOW', issue: 'SSL Active & Valid', rec: 'Maintain auto-renewal' },
      { check: 'XML Sitemap & Indexation', status: 'WARN', priority: 'MEDIUM', issue: 'Missing category URLs', rec: 'Submit dynamic sitemap index' },
      { check: 'Robots.txt Crawl Control', status: 'WARN', priority: 'MEDIUM', issue: 'Inadvertently blocking JS assets', rec: 'Remove disallow rules for JS/CSS' },
      { check: 'Canonicalization & Duplication', status: 'WARN', priority: 'HIGH', issue: 'Faceted navigation duplicates', rec: 'Implement self-referencing canonicals' },
      { check: 'JSON-LD Structured Data', status: 'FAIL', priority: 'CRITICAL', issue: 'No Schema markup found', rec: 'Inject Product, FAQ & Local Schema' },
      { check: 'Core Web Vitals Performance', status: 'FAIL', priority: 'CRITICAL', issue: 'LCP > 3.8s, INP latency', rec: 'Optimize image payloads & defer JS' }
    ];

    let tcY = 110;
    // Table Header
    doc.rect(50, tcY, 740, 28).fill('#080E1C');
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('FACTOR', 65, tcY + 9);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('STATUS', 240, tcY + 9);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('PRIORITY', 320, tcY + 9);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('DIAGNOSTIC ISSUE', 410, tcY + 9);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('ACTION PLAN', 600, tcY + 9);

    tcY += 34;
    techChecks.forEach((tc) => {
      doc.rect(50, tcY, 740, 52).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(textWhite).fontSize(9.5).font('Helvetica-Bold').text(tc.check, 65, tcY + 18);
      
      const stColor = tc.status === 'PASS' ? '#10B981' : tc.status === 'WARN' ? '#F59E0B' : '#EF4444';
      doc.fillColor(stColor).fontSize(9.5).font('Helvetica-Bold').text(tc.status, 240, tcY + 18);
      doc.fillColor(textWhite).fontSize(8.5).font('Helvetica-Bold').text(tc.priority, 320, tcY + 18);
      
      doc.fillColor(textMuted).fontSize(8.5).font('Helvetica').text(tc.issue, 410, tcY + 12, { width: 170 });
      doc.fillColor(textWhite).fontSize(8.5).font('Helvetica').text(tc.rec, 600, tcY + 12, { width: 180 });
      tcY += 60;
    });


    // ================= SLIDE 5: ON-PAGE SEO & CONTENT AUDIT =================
    initSlideCanvas(doc, project, 5, 'On-Page SEO & Content Quality');

    doc.rect(30, 60, 780, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('PAGE-BY-PAGE ON-PAGE OPTIMIZATION MATRIX', 50, 80);

    const onpagePages = [
      { type: 'Homepage Landing', title: 'Generic & Over-Optimized', h1: 'JS Rendered H1', depth: 'Thin intro text', fix: 'Add static H1 & 300w keyword copy' },
      { type: 'Category Collection', title: 'Templated duplicate tags', h1: 'Present', depth: 'Zero category copy', fix: 'Add 250w category descriptions' },
      { type: 'Product Detail Pages', title: 'Missing primary benefit', h1: 'Present', depth: '1-2 short sentences', fix: 'Expand to 400w + Product Schema' },
      { type: 'Blog & Learning Hub', title: 'Completely Absent', h1: 'None', depth: 'Zero articles', fix: 'Launch Pillar & Cluster Content Hub' },
      { type: 'Local Contact Pages', title: 'Basic Title tag', h1: 'Present', depth: 'Adequate', fix: 'Inject LocalBusiness JSON-LD markup' }
    ];

    let opY = 110;
    onpagePages.forEach((op) => {
      doc.rect(50, opY, 740, 72).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(orange).fontSize(11).font('Helvetica-Bold').text(op.type, 65, opY + 14);
      doc.fillColor(textMuted).fontSize(8.5).font('Helvetica').text(`Title: ${op.title}  |  H1: ${op.h1}  |  Depth: ${op.depth}`, 65, opY + 38);
      doc.fillColor('#10B981').fontSize(9).font('Helvetica-Bold').text(`ACTION: ${op.fix}`, 450, opY + 28, { width: 320 });
      opY += 80;
    });


    // ================= SLIDE 6: GEO & AEO AI SEARCH READINESS =================
    initSlideCanvas(doc, project, 6, 'Generative (GEO) & Voice (AEO) Search');

    // Left Container: GEO
    doc.rect(30, 60, 375, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('GENERATIVE ENGINE OPTIMIZATION (GEO)', 50, 80);
    doc.fillColor(textMuted).fontSize(9).font('Helvetica').text('Optimizing for AI Search Engines (Google AI Overviews, ChatGPT Search, Perplexity)', 50, 98, { width: 335 });

    const geoGaps = [
      "1. Lack of Quotable Brand Data — AI LLMs cannot extract direct factual statistics from site copy.",
      "2. Missing E-E-A-T Credentials — No author bios, expert review badges, or medical disclosures.",
      "3. Weak Entity Association — Entity graph markup missing in JSON-LD schema.",
      "4. Solution Strategy — Deploy structured Q&A tables & verifiable research citations."
    ];

    let gY = 135;
    geoGaps.forEach((g) => {
      doc.rect(50, gY, 335, 80).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(textWhite).fontSize(9).font('Helvetica').text(g, 60, gY + 12, { width: 315 });
      gY += 92;
    });

    // Right Container: AEO
    doc.rect(425, 60, 385, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('ANSWER ENGINE OPTIMIZATION (AEO)', 445, 80);
    doc.fillColor(textMuted).fontSize(9).font('Helvetica').text('Optimizing for Voice Search & Answer Snippets (Google Assistant, Siri, Alexa)', 445, 98, { width: 345 });

    const aeoGaps = [
      "1. Zero FAQ Schema Markup — Voice engines cannot parse instant answers.",
      "2. Unstructured Content Layout — Missing conversational 25-word direct answer blocks.",
      "3. Unoptimized PAA Targets — Failing to rank for 'People Also Ask' queries.",
      "4. Solution Strategy — Add Speakable Schema & concise bulleted answer accordions."
    ];

    let aY = 135;
    aeoGaps.forEach((a) => {
      doc.rect(445, aY, 345, 80).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(textWhite).fontSize(9).font('Helvetica').text(a, 455, aY + 12, { width: 325 });
      aY += 92;
    });


    // ================= SLIDE 7: UX & CONVERSION RATE OPTIMIZATION =================
    initSlideCanvas(doc, project, 7, 'UX & Conversion Rate Optimization (CRO)');

    doc.rect(30, 60, 780, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('CONVERSION FRICTION & UX AUDIT', 50, 80);

    const uxPoints = [
      { num: '01', title: 'No Sticky Mobile Call-To-Action', desc: 'Mobile shoppers scroll past fold without sticky Add-to-Cart or lead capture CTA button, losing 22% potential mobile conversions.' },
      { num: '02', title: 'Buried Trust & Security Badges', desc: 'Payment guarantees, delivery timelines, and return policies hidden in footer instead of near checkout CTAs.' },
      { num: '03', title: 'High Mobile Checkout Friction', desc: '4-step multi-page checkout flow causes 48% drop-off on smartphones. Requires streamlined 1-step guest checkout.' },
      { num: '04', title: 'Lack of Interactive Decision Tools', desc: 'Absence of quiz widgets or recommendation engines leaves users overwhelmed by product catalog choices.' }
    ];

    let uxY = 110;
    uxPoints.forEach((u) => {
      doc.rect(50, uxY, 740, 85).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(orange).fontSize(18).font('Helvetica-Bold').text(u.num, 65, uxY + 28);
      doc.fillColor(textWhite).fontSize(11).font('Helvetica-Bold').text(u.title, 110, uxY + 18);
      doc.fillColor(textMuted).fontSize(9).font('Helvetica').text(u.desc, 110, uxY + 40, { width: 660 });
      uxY += 98;
    });


    // ================= SLIDE 8: 6-MONTH ACTIONABLE ROADMAP =================
    initSlideCanvas(doc, project, 8, '6-Month Execution Roadmap');

    doc.rect(30, 60, 780, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('PRIORITIZED ACTIONABLE ROADMAP', 50, 80);

    const roadmapPhases = [
      { phase: 'MONTH 1-2', title: 'Foundation & Critical Fixes', tasks: ['Fix Core Web Vitals (LCP/INP)', 'Deploy JSON-LD Product & Org Schema', 'Resolve Robots.txt & Sitemap errors'] },
      { phase: 'MONTH 3-4', title: 'On-Page & GEO Content Engine', tasks: ['Expand Product Copy to 400+ words', 'Launch Topic Cluster Content Hub', 'Embed Quotable GEO Answer Tables'] },
      { phase: 'MONTH 5-6', title: 'AEO, Local & CRO Scaling', tasks: ['Add Speakable & FAQ Schema', 'Optimize Local GMB Citations', 'Implement 1-Step Mobile Checkout'] }
    ];

    let rX = 50;
    roadmapPhases.forEach((rp) => {
      doc.rect(rX, 110, 236, 410).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text(rp.phase, rX + 15, 130);
      doc.fillColor(textWhite).fontSize(11).font('Helvetica-Bold').text(rp.title, rX + 15, 150, { width: 206 });

      doc.rect(rX + 15, 185, 206, 1).fill('#1E293B');

      let tY = 200;
      rp.tasks.forEach((tk) => {
        doc.fillColor('#10B981').fontSize(9).font('Helvetica-Bold').text('✓', rX + 15, tY);
        doc.fillColor(textWhite).fontSize(9).font('Helvetica').text(tk, rX + 30, tY, { width: 190 });
        tY += 65;
      });

      rX += 252;
    });


    // ================= SLIDE 9: EXPECTED RESULTS & ROI PROJECTIONS =================
    initSlideCanvas(doc, project, 9, 'Expected Growth & ROI Projections');

    doc.rect(30, 60, 780, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('12-MONTH TRAFFIC & REVENUE PROJECTIONS', 50, 80);

    // Big Impact Blocks
    doc.rect(50, 110, 350, 180).fillAndStroke('#0A0F1E', orange);
    doc.fillColor(orange).fontSize(38).font('Helvetica-Bold').text(project.trafficPotential, 70, 135);
    doc.fillColor(textWhite).fontSize(13).font('Helvetica-Bold').text('PROJECTED ORGANIC TRAFFIC INCREASE', 70, 185);
    doc.fillColor(textMuted).fontSize(9.5).font('Helvetica').text('Achievable within 12 months of executing roadmap', 70, 210, { width: 310 });

    doc.rect(440, 110, 350, 180).fillAndStroke('#0A0F1E', cardBorder);
    doc.fillColor(textWhite).fontSize(38).font('Helvetica-Bold').text(project.serpFeaturesCount, 460, 135);
    doc.fillColor(orange).fontSize(13).font('Helvetica-Bold').text('SERP FEATURES & AI OVERVIEWS', 460, 185);
    doc.fillColor(textMuted).fontSize(9.5).font('Helvetica').text('Featured Snippets, PAA & ChatGPT Citations', 460, 210, { width: 310 });

    // Projected KPIs Grid
    const kpiGrid = [
      { metric: 'Domain Authority (DA)', current: 'Current Baseline', target: 'DA +8 Points' },
      { metric: 'Mobile Conversion Rate', current: 'Baseline Benchmark', target: '+35% Growth' },
      { metric: 'Organic Keyword Rankings', current: 'Page 2-3 Average', target: 'Top 3 Positions' }
    ];

    let kY = 320;
    kpiGrid.forEach((kp) => {
      doc.rect(50, kY, 740, 55).fillAndStroke('#0A0F1E', cardBorder);
      doc.fillColor(textWhite).fontSize(11).font('Helvetica-Bold').text(kp.metric, 70, kY + 20);
      doc.fillColor(textMuted).fontSize(9.5).font('Helvetica').text(kp.current, 380, kY + 20);
      doc.fillColor('#10B981').fontSize(11).font('Helvetica-Bold').text(kp.target, 600, kY + 20);
      kY += 68;
    });


    // ================= SLIDE 10: PORTFOLIO SUMMARY & CONTACT =================
    initSlideCanvas(doc, project, 10, 'Portfolio Reflection & Contact');

    doc.rect(30, 60, 780, 485).fillAndStroke(cardBg, cardBorder);
    doc.fillColor(orange).fontSize(12).font('Helvetica-Bold').text('METHODOLOGY REFLECTION & CONTACT INFORMATION', 50, 80);

    // Left Box: 6-Step Methodology Summary
    doc.rect(50, 110, 380, 410).fillAndStroke('#0A0F1E', cardBorder);
    doc.fillColor(orange).fontSize(11).font('Helvetica-Bold').text('6-STEP STRATEGIC AUDIT PROCESS', 70, 130);

    const steps = [
      "1. Business Alignment — Goals & Brand Positioning",
      "2. Technical Audit — Core Web Vitals & Crawlability",
      "3. On-Page SEO — Keyword Intent & Schema Markup",
      "4. GEO & AEO AI Engine — Voice & LLM Readiness",
      "5. UX & CRO — Funnel Friction & Conversion Barriers",
      "6. Roadmap & Execution — Actionable Blueprint"
    ];

    steps.forEach((st, i) => {
      doc.fillColor(textWhite).fontSize(9.5).font('Helvetica').text(st, 70, 160 + (i * 55), { width: 340 });
    });

    // Right Box: Strategist Contact
    doc.rect(450, 110, 340, 410).fillAndStroke('#0A0F1E', orange);
    doc.fillColor(orange).fontSize(14).font('Helvetica-Bold').text(project.author, 470, 140);
    doc.fillColor(textWhite).fontSize(11).font('Helvetica-Bold').text(project.role, 470, 162, { width: 300 });

    doc.rect(470, 195, 300, 1).fill('#1E293B');

    doc.fillColor(textMuted).fontSize(9).font('Helvetica-Bold').text('CONTACT & PORTFOLIO ENQUIRIES', 470, 215);
    
    doc.fillColor(orange).fontSize(10).font('Helvetica-Bold').text('EMAIL ADDRESS', 470, 245);
    doc.fillColor(textWhite).fontSize(11).font('Helvetica').text('dk3891315@gmail.com', 470, 262);

    doc.fillColor(orange).fontSize(10).font('Helvetica-Bold').text('PHONE / WHATSAPP', 470, 295);
    doc.fillColor(textWhite).fontSize(11).font('Helvetica').text('+91 8287107944', 470, 312);

    doc.fillColor(orange).fontSize(10).font('Helvetica-Bold').text('LOCATION', 470, 345);
    doc.fillColor(textWhite).fontSize(11).font('Helvetica').text('Delhi NCR, India', 470, 362);

    doc.rect(470, 400, 300, 90).fillAndStroke('#05070E', cardBorder);
    doc.fillColor(orange).fontSize(9).font('Helvetica-Bold').text('AVAILABLE FOR ROLES & PROJECTS', 485, 415);
    doc.fillColor(textWhite).fontSize(8.5).font('Helvetica').text('Open for Senior Digital Marketing, SEO Strategy, and Performance Growth Consultant opportunities.', 485, 435, { width: 270 });

    doc.end();

    writeStream.on('finish', () => {
      console.log(`Successfully generated pristine 10-page landscape PDF: ${project.pdfFileName}`);
      resolve();
    });

    writeStream.on('error', (err) => {
      console.error(`Error generating ${project.pdfFileName}:`, err);
      reject(err);
    });
  });
}

async function run() {
  console.log('Generating 15 FULL 10-PAGE LANDSCAPE PDF project reports with zero white space...');
  for (const proj of DEFAULT_PROJECTS) {
    await generate10PagePdf(proj);
  }
  console.log('SUCCESS! All 15 projects now have complete 10-PAGE LANDSCAPE PDF files in /public/projects/!');
}

run();
