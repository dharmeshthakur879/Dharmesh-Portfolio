import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputDir = path.join(process.cwd(), 'public');
const outputPath = path.join(outputDir, 'Dharmesh_Thakur_Resume.pdf');
const duplicatePath1 = path.join(outputDir, 'Dharmesh Thakur Resume.pdf');
const duplicatePath2 = path.join(outputDir, 'resume.pdf');

const doc = new PDFDocument({
  margin: 0,
  size: 'A4', // 595.28 x 841.89
  info: {
    Title: 'Dharmesh Thakur - Resume',
    Author: 'Dharmesh Thakur',
    Subject: 'Full Stack Web Developer & Digital Marketing Specialist',
  },
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const primaryGold = '#D4AF37';
const darkNavy = '#0A0F1D';
const charcoal = '#1E293B';
const textSlate = '#475569';
const lightBg = '#F8FAFC';
const borderGray = '#E2E8F0';

// ================= PAGE 1 =================
// Header Banner
doc.rect(0, 0, 595.28, 100).fill('#080D1A');
doc.rect(0, 100, 595.28, 3).fill(primaryGold);

// Candidate Name & Title
doc.fillColor('#FFFFFF')
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('DHARMESH THAKUR', 36, 18, { characterSpacing: 1 });

doc.fillColor(primaryGold)
   .font('Helvetica-Bold')
   .fontSize(10)
   .text('FULL STACK WEB DEVELOPER  |  DIGITAL MARKETING SPECIALIST  |  AI ARCHITECT', 36, 45, { characterSpacing: 0.5 });

// Contact Info Bar
doc.fillColor('#CBD5E1')
   .font('Helvetica')
   .fontSize(8.5)
   .text('📍 New Delhi, India   •   📧 dj074694@gmail.com / dk3891315@gmail.com   •   🌐 dharmesh-portfolio.web.app', 36, 64);

doc.fillColor('#94A3B8')
   .font('Helvetica')
   .fontSize(8)
   .text('GitHub: github.com/dharmeshthakur9   •   LinkedIn: linkedin.com/in/dharmesh-thakur-15220630b', 36, 78);

let y = 118;

function drawSectionHeading(title, yPos) {
  doc.rect(36, yPos, 4, 13).fill(primaryGold);
  doc.fillColor(darkNavy)
     .font('Helvetica-Bold')
     .fontSize(10.5)
     .text(title.toUpperCase(), 46, yPos + 1, { characterSpacing: 0.8 });
  doc.moveTo(36, yPos + 16).lineTo(559, yPos + 16).strokeColor(borderGray).lineWidth(0.8).stroke();
  return yPos + 22;
}

// 1. Executive Summary
y = drawSectionHeading('Executive Summary', y);
doc.fillColor(charcoal)
   .font('Helvetica')
   .fontSize(8.5)
   .lineGap(2.5)
   .text(
     'Results-driven Full Stack Web Developer and Digital Marketing Strategist with proven capability in engineering scalable modern web applications and executing high-ROAS multi-channel organic and paid growth funnels. Proficient in React 18, TypeScript, Next.js, Node.js, Express, and AI/LLM integrations alongside advanced Technical SEO, GEO/AEO optimization, Google Ads (PPC), and Meta Ads. Creator of 15+ comprehensive enterprise audit case studies delivering measurable ROI and organic traffic growth.',
     36,
     y,
     { width: 523, align: 'justify' }
   );
y += 54;

// 2. Core Competencies
y = drawSectionHeading('Core Technical & Marketing Competencies', y);

const colWidth = 255;
const col1X = 36;
const col2X = 304;

// Column 1: Engineering & AI
doc.rect(col1X, y, colWidth, 88).fillAndStroke(lightBg, borderGray);
doc.fillColor(darkNavy).font('Helvetica-Bold').fontSize(8.5).text('💻 WEB ENGINEERING & AI SYSTEMS', col1X + 8, y + 6);
doc.fillColor(charcoal).font('Helvetica').fontSize(7.8).lineGap(2.5).text(
  '• Frontend: React 18+, TypeScript, Next.js, Tailwind CSS, Vite, Redux\n' +
  '• Backend: Node.js, Express, REST APIs, PostgreSQL, Cloud SQL\n' +
  '• AI Integration: Gemini 2.5/Flash SDK, LLM Agents, Automation Pipelines\n' +
  '• Architecture: High-Conversion UI/UX, Performance Optimization, CI/CD',
  col1X + 8,
  y + 22,
  { width: colWidth - 16 }
);

// Column 2: Digital Marketing & Growth
doc.rect(col2X, y, colWidth, 88).fillAndStroke(lightBg, borderGray);
doc.fillColor(darkNavy).font('Helvetica-Bold').fontSize(8.5).text('📈 DIGITAL MARKETING & ACQUISITION', col2X + 8, y + 6);
doc.fillColor(charcoal).font('Helvetica').fontSize(7.8).lineGap(2.5).text(
  '• Organic Growth: Technical SEO, On-Page SEO, GEO & AEO Strategy\n' +
  '• Paid Media: Google Ads (Search, Display, PMax), Meta Ads (FB & IG)\n' +
  '• Analytics & Audits: GA4, GTM, Google Search Console, Semrush, Ahrefs\n' +
  '• Conversion: CRO Funnel Design, Lead Gen, Keyword Clustering',
  col2X + 8,
  y + 22,
  { width: colWidth - 16 }
);

y += 98;

// 3. Featured Strategic Case Studies
y = drawSectionHeading('Selected Enterprise Audit & Strategy Case Studies', y);

const caseStudies = [
  {
    client: 'Nike India',
    focus: 'Technical SEO, Core Web Vitals & GEO/AEO Architecture',
    impact: '+120% projected organic growth, 15 critical audit fixes, structured entity schemas.',
  },
  {
    client: 'Zomato FoodTech',
    focus: 'Hyperlocal Intent Mapping & 50+ Multi-City Keyword Clusters',
    impact: '+140% local visibility lift, voice search & conversational query optimization.',
  },
  {
    client: 'boAt Lifestyle',
    focus: 'Omnichannel Meta Ads (Facebook/Instagram) & ROAS Scaling Funnel',
    impact: '3.8x Target ROAS model, 4-tier audience segmentation & dynamic retargeting.',
  },
  {
    client: 'Amul India',
    focus: 'Digital Gap Analysis, Semantic Entity SEO & AI Search Readiness',
    impact: 'Mapped 10+ sub-brand domains into unified Knowledge Graph entities.',
  },
];

caseStudies.forEach((cs) => {
  doc.fillColor(darkNavy).font('Helvetica-Bold').fontSize(8.5).text(`• ${cs.client} — `, 36, y, { continued: true });
  doc.fillColor(primaryGold).font('Helvetica-Bold').text(cs.focus);
  y += 12;
  doc.fillColor(textSlate).font('Helvetica').fontSize(7.8).text(`  Impact: ${cs.impact}`, 44, y, { width: 515 });
  y += 14;
});

y += 6;

// 4. Professional Certifications & Diplomas
y = drawSectionHeading('Government-Registered & ISO Certified Credentials', y);

const certs = [
  {
    title: 'Diploma in Digital Marketing — Grade A+ (Distinction >90%)',
    org: 'Vision Computer Academy (Prime Vision Educom Pvt. Ltd.)',
    reg: 'Reg. By Delhi Govt. - 0038/NE  |  ISO 9001:2008 Certified  |  Cert ID: 4496',
    date: 'Dec 2025 - Jun 2026 (6 Months Professional Specialization)',
  },
  {
    title: 'Certificate in Basic Of Computer — Grade A+ (Distinction >90%)',
    org: 'Vision Computer Academy (Prime Vision Educom Pvt. Ltd.)',
    reg: 'Reg. By Delhi Govt. - 0038/NE  |  ISO 9001:2008 Certified  |  Cert ID: 4456',
    date: 'Dec 2025 - Mar 2026 (3 Months Foundation)',
  },
];

certs.forEach((c) => {
  doc.fillColor(darkNavy).font('Helvetica-Bold').fontSize(8.5).text(`🎖️ ${c.title}`, 36, y);
  y += 12;
  doc.fillColor(charcoal).font('Helvetica').fontSize(7.8).text(`${c.org}  •  ${c.reg}`, 46, y);
  y += 11;
  doc.fillColor(textSlate).font('Helvetica-Oblique').fontSize(7.2).text(`Duration: ${c.date}`, 46, y);
  y += 15;
});

// Footer Page 1
doc.rect(36, 810, 523, 0.5).fill(borderGray);
doc.fillColor(textSlate).font('Helvetica').fontSize(7.5).text('Dharmesh Thakur • Professional Resume & Portfolio • Page 1 of 2', 36, 818, { align: 'center' });

// ================= PAGE 2 =================
doc.addPage({ margin: 0, size: 'A4' });

// Top mini banner
doc.rect(0, 0, 595.28, 36).fill('#080D1A');
doc.rect(0, 36, 595.28, 2).fill(primaryGold);

doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(11).text('DHARMESH THAKUR', 36, 12);
doc.fillColor(primaryGold).font('Helvetica').fontSize(8.5).text('Professional Project Portfolio & Implementation Record', 340, 13, { align: 'right', width: 220 });

let y2 = 54;

// 1. Featured Web & SaaS Development Projects
y2 = drawSectionHeading('Full-Stack Web & SaaS Production Builds', y2);

const webProjects = [
  {
    name: 'AI Marketing Intelligence & Content Engine',
    stack: 'React 18, TypeScript, Tailwind CSS, Gemini 2.5 API, Express, Node.js',
    desc: 'Engineered an end-to-end AI marketing SaaS that generates SEO-optimized topic clusters, meta descriptions, and Google Ads ad copies with automated quality scoring and live export workflows.',
  },
  {
    name: 'Automated SEO Audit & Core Web Vitals Diagnostic Tool',
    stack: 'TypeScript, Node.js, Express, REST APIs, Tailwind CSS, Recharts',
    desc: 'Built an interactive crawler and audit dashboard evaluating 40+ on-page SEO parameters, structured schema tags, mobile responsiveness, and performance bottlenecks with PDF report generation.',
  },
  {
    name: 'Digital Marketing Performance Dashboard & Budget Optimizer',
    stack: 'React, Vite, Tailwind CSS, Chart.js / Recharts, Local Persistence',
    desc: 'Created an executive multi-channel analytics hub tracking ROAS, CAC, CPC, and conversion rates across Meta Ads and Google Ads with interactive scenario modelling.',
  },
  {
    name: 'High-Conversion E-Commerce & Agency Portfolio Platforms',
    stack: 'React, TypeScript, Motion Animations, Modular UI Componentry',
    desc: 'Developed modern responsive web applications with sub-second load times, accessible semantic HTML5 markup, glassmorphism dark-luxury aesthetics, and verified interactive deck presentations.',
  },
];

webProjects.forEach((proj) => {
  doc.fillColor(darkNavy).font('Helvetica-Bold').fontSize(9).text(`🚀 ${proj.name}`, 36, y2);
  y2 += 12;
  doc.fillColor(primaryGold).font('Helvetica-Bold').fontSize(7.8).text(`Tech Stack: ${proj.stack}`, 46, y2);
  y2 += 11;
  doc.fillColor(charcoal).font('Helvetica').fontSize(7.8).lineGap(2).text(proj.desc, 46, y2, { width: 505 });
  y2 += 24;
});

// 2. Full Case Study Research Repository (15 Brands)
y2 = drawSectionHeading('Comprehensive Brand Audit Library (15 In-Depth Case Studies)', y2);

const brands = [
  '• Nike India (SEO & GEO Audit)',
  '• Zomato (Keyword & Local SEO)',
  '• Rapido (Technical SEO & CWV)',
  '• MuscleBlaze (Content Strategy)',
  '• boAt Lifestyle (Meta Ads & ROAS)',
  '• Netflix India (Competitive Intelligence)',
  '• Amul India (Digital Gap Analysis)',
  '• Dabur India (On-Page SEO Audit)',
  '• Burger King (Full Website Audit)',
  '• Delhivery (SEO/GEO/AEO Audit)',
  '• Dr. Lal PathLabs (Strategic Analysis)',
  '• Meesho (Lead Gen & Funnels)',
  '• Tech Mahindra (Local SEO & Citations)',
  '• Sun Pharma (Google Ads Strategy)',
  '• Unacademy (Social Media Strategy)',
];

const brandColW = 174;
for (let i = 0; i < brands.length; i++) {
  const colIndex = i % 3;
  const rowIndex = Math.floor(i / 3);
  const bx = 36 + colIndex * brandColW;
  const by = y2 + rowIndex * 14;
  doc.fillColor(charcoal).font('Helvetica').fontSize(7.5).text(brands[i], bx, by);
}
y2 += 5 * 14 + 16;

// 3. Education & Academic Background
y2 = drawSectionHeading('Academic Foundation & Continuous Learning', y2);

doc.fillColor(darkNavy).font('Helvetica-Bold').fontSize(8.5).text('🎓 Formal Education & Continuous Professional Development', 36, y2);
y2 += 12;
doc.fillColor(charcoal).font('Helvetica').fontSize(7.8).text(
  '• Digital Marketing & Computer Science Certification Programs (Delhi Govt. Recognized, ISO 9001:2008)\n' +
  '• Continuous specialized training in AI LLM orchestration, Generative Engine Optimization (GEO), and Modern React Full-Stack Architecture.',
  46,
  y2,
  { width: 505 }
);
y2 += 32;

// 4. Contact & Availability Callout
doc.rect(36, y2, 523, 40).fillAndStroke('#0A0F1D', primaryGold);
doc.fillColor(primaryGold).font('Helvetica-Bold').fontSize(9).text('⚡ AVAILABLE FOR FULL-TIME ROLES, CONSULTING & FREELANCE PROJECTS', 46, y2 + 8, { align: 'center', width: 503 });
doc.fillColor('#FFFFFF').font('Helvetica').fontSize(7.8).text('Reach out directly via Email: dj074694@gmail.com / dk3891315@gmail.com  •  Phone: +91 93108 55437', 46, y2 + 22, { align: 'center', width: 503 });

// Footer Page 2
doc.rect(36, 810, 523, 0.5).fill(borderGray);
doc.fillColor(textSlate).font('Helvetica').fontSize(7.5).text('Dharmesh Thakur • Professional Resume & Portfolio • Page 2 of 2', 36, 818, { align: 'center' });

doc.end();

writeStream.on('finish', () => {
  console.log('SUCCESS: Generated exact 2-page pristine Dharmesh_Thakur_Resume.pdf');
  fs.copyFileSync(outputPath, duplicatePath1);
  fs.copyFileSync(outputPath, duplicatePath2);
});
