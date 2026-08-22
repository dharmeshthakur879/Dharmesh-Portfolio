import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputDir = path.join(process.cwd(), 'public');
const outputPath = path.join(outputDir, 'Dharmesh_Thakur_Resume.pdf');
const duplicatePath1 = path.join(outputDir, 'Dharmesh Thakur Resume.pdf');
const duplicatePath2 = path.join(outputDir, 'resume.pdf');
const avatarPath = path.join(outputDir, 'images', 'dharmesh.png');

const doc = new PDFDocument({
  autoFirstPage: false,
  bufferPages: true,
  size: 'A4', // 595.28 x 841.89
  margin: 0,
  info: {
    Title: 'Dharmesh Thakur - Resume',
    Author: 'Dharmesh Thakur',
    Subject: 'Digital Marketing Intern & Web Developer',
  },
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const tealGreen = '#206548';
const lightGreenBg = '#EBF4F0';
const darkCharcoal = '#1B242C';
const bodyText = '#334155';
const mutedGray = '#64748B';
const linkBlue = '#0D6EFD';
const dividerColor = '#CBD5E1';

function drawLeftColumnBg() {
  doc.rect(0, 0, 195, 841.89).fill(lightGreenBg);
}

function drawSectionHeader(title, iconLabel, x, y, width) {
  // Rounded square for icon
  doc.roundedRect(x, y, 16, 16, 3).fill(tealGreen);
  doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(8).text(iconLabel || '★', x + 3.5, y + 3.5);
  
  // Section Title
  doc.fillColor(tealGreen).font('Helvetica-Bold').fontSize(11).text(title.toUpperCase(), x + 24, y + 2.5);
  
  // Underline
  const lineY = y + 18;
  doc.moveTo(x + 24, lineY).lineTo(x + width, lineY).strokeColor(tealGreen).lineWidth(1.2).stroke();
  
  return y + 26;
}

// ==========================================
// PAGE 1
// ==========================================
doc.addPage({ margin: 0, size: 'A4' });
drawLeftColumnBg();

// Left Header Photo
if (fs.existsSync(avatarPath)) {
  doc.save();
  doc.roundedRect(26, 24, 142, 160, 16).clip();
  doc.image(avatarPath, 26, 24, { width: 142, height: 160 });
  doc.restore();
  doc.roundedRect(26, 24, 142, 160, 16).strokeColor(tealGreen).lineWidth(2).stroke();
}

let leftY = 200;

// Contacts
leftY = drawSectionHeader('CONTACTS', '✉', 20, leftY, 155);

const contacts = [
  { icon: '📞', text: '8287107944, 9811842704' },
  { icon: '@', text: 'dk3891315@gmail.com' },
  { icon: '🌐', text: 'dharmeshthakur.vercel.app' },
  { icon: 'in', text: 'linkedin.com/in/mr-dharmesh-thakur' },
  { icon: '📍', text: 'Delhi' },
  { icon: '📅', text: '05/12/1995' },
];

contacts.forEach((c) => {
  doc.fillColor(tealGreen).font('Helvetica-Bold').fontSize(8).text(c.icon, 22, leftY);
  doc.fillColor(darkCharcoal).font('Helvetica').fontSize(7.5).text(c.text, 36, leftY, { width: 142 });
  leftY += doc.heightOfString(c.text, { width: 142, fontSize: 7.5 }) + 6;
});

leftY += 8;

// Education
leftY = drawSectionHeader('EDUCATION', '🎓', 20, leftY, 155);

const educations = [
  {
    inst: 'Indira Gandhi National Open University (IGNOU)',
    deg: 'Master of Arts (M.A.) - English',
    loc: 'Delhi, India',
    date: '01/2018 - 03/2021',
    grade: '• First Division\n% | 62 / 100',
  },
  {
    inst: 'Indira Gandhi National Open University (IGNOU)',
    deg: 'Bachelor of Science (B.Sc.) - Chemistry',
    loc: 'Delhi, India',
    date: '01/2014 - 02/2017',
    grade: '• First Division\n% | 62 / 100',
  },
  {
    inst: 'Central Board of Secondary Education (CBSE)',
    deg: 'Senior Secondary (12th)',
    loc: 'Delhi, India',
    date: '05/2012 - 05/2013',
    grade: '• English, Mathematics, Physics, Chemistry, Biology\n% | 67.5 / 100.0',
  },
  {
    inst: 'Central Board of Secondary Education (CBSE)',
    deg: 'Secondary (10th)',
    loc: 'Delhi, India',
    date: '05/2010 - 04/2011',
    grade: '• English, Math, Science, Hindi, Social Science, Sanskrit\nCGPA | 8.4 / 10.0',
  },
];

educations.forEach((edu) => {
  doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(8).text(edu.inst, 20, leftY, { width: 158 });
  leftY += doc.heightOfString(edu.inst, { width: 158, fontSize: 8 }) + 1;
  
  doc.fillColor(tealGreen).font('Helvetica-Bold').fontSize(7.5).text(edu.deg, 20, leftY, { width: 158 });
  leftY += doc.heightOfString(edu.deg, { width: 158, fontSize: 7.5 }) + 1;
  
  doc.fillColor(mutedGray).font('Helvetica').fontSize(6.8).text(`${edu.loc}    ${edu.date}`, 20, leftY, { width: 158 });
  leftY += 9;
  
  doc.fillColor(bodyText).font('Helvetica').fontSize(6.8).text(edu.grade, 20, leftY, { width: 158 });
  leftY += doc.heightOfString(edu.grade, { width: 158, fontSize: 6.8 }) + 7;
});

// Right Column: Header
let rightX = 215;
let rightW = 355;
let rightY = 32;

// Name & Badge
doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(26).text('DHARMESH THAKUR', rightX, rightY, { characterSpacing: 0.5 });
rightY += 34;

// Badge
doc.roundedRect(rightX, rightY, 175, 20, 10).fill(tealGreen);
doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(8.5).text('DIGITAL MARKETING INTERN', rightX + 16, rightY + 5.5, { characterSpacing: 0.8 });
rightY += 34;

// Summary Section
rightY = drawSectionHeader('SUMMARY', '👤', rightX, rightY, rightW);
doc.fillColor(bodyText).font('Helvetica').fontSize(7.6).lineGap(2.2).text(
  'Digital Marketing professional with a background in Customer Service and Sales, offering strong skills in communication, customer understanding, lead handling, problem-solving, and business development. Recently completed a Digital Marketing course with knowledge of SEO, Social Media Marketing, Google Ads, Meta Ads, Keyword Research, Content Marketing, Google Analytics, Local SEO, Email Marketing, and AI tools for Digital Marketing. Experienced as a Customer Service Executive at Tech Mahindra (Flipkart process) and Sales Executive at Mystic MoneyMart, with hands-on exposure to customer communication, query resolution, client handling, follow-ups, lead management, and achieving business objectives. Supported by an academic background in B.Sc. in Chemistry and M.A. in English from IGNOU, bringing strong analytical, communication, and problem-solving abilities. Currently seeking an entry-level Digital Marketing opportunity where I can apply my digital marketing knowledge, leverage my customer-facing and sales experience, gain practical industry exposure, and contribute to measurable business growth',
  rightX,
  rightY,
  { width: rightW, align: 'justify' }
);
rightY += 132;

// Experience Section
rightY = drawSectionHeader('EXPERIENCE', '💼', rightX, rightY, rightW);

const exps = [
  {
    company: 'Mystic Moneymart Financial Services Pvt Ltd',
    role: 'Business Development Executive',
    loc: 'Barakhamba, Delhi',
    date: '04/2025 - 10/2025',
    bullets: [
      'Handled leads and communicated with prospective clients to understand their funding requirements',
      'Conducted follow-ups with potential clients and maintained regular communication throughout the sales process',
      'Explained business funding solutions to prospects according to their requirements',
      'Developed skills in lead handling, client communication, sales follow-ups, and relationship building',
      'Worked toward business development and sales objectives in a target-oriented environment',
      'Strengthened persuasive communication, negotiation, and customer-conversion skills through direct client interaction',
    ],
  },
  {
    company: 'Tech Mahindra',
    role: 'Customer Service Executive',
    loc: 'Noida, India',
    date: '09/2022 - 07/2023',
    bullets: [
      'Handled customer queries and service-related concerns through effective communication and problem-solving',
      'Assisted customers with their concerns while maintaining a professional and customer-focused approach',
      'Identified customer requirements and provided appropriate solutions based on process guidelines',
      'Managed customer interactions efficiently while maintaining a positive customer experience',
      'Developed strong skills in communication, active listening, issue resolution, and customer relationship management',
      'Worked effectively in a target-driven and team-oriented professional environment',
    ],
  },
];

exps.forEach((exp) => {
  doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(9).text(exp.company, rightX, rightY, { width: 230 });
  doc.fillColor(mutedGray).font('Helvetica').fontSize(7.5).text(exp.loc, rightX + 235, rightY, { width: 120, align: 'right' });
  rightY += 11;
  
  doc.fillColor(tealGreen).font('Helvetica-Bold').fontSize(8).text(exp.role, rightX, rightY);
  doc.fillColor(mutedGray).font('Helvetica').fontSize(7.5).text(exp.date, rightX + 235, rightY, { width: 120, align: 'right' });
  rightY += 12;

  exp.bullets.forEach((b) => {
    doc.fillColor(darkCharcoal).font('Helvetica').fontSize(7.2).text('• ', rightX + 4, rightY, { continued: true });
    doc.fillColor(bodyText).text(b, { width: rightW - 10, lineGap: 1 });
    rightY += doc.heightOfString(b, { width: rightW - 10, fontSize: 7.2 }) + 2.5;
  });
  rightY += 6;
});

// Bottom centered badge
doc.circle(297.64, 825, 8).strokeColor(tealGreen).lineWidth(1).stroke();
doc.fillColor(tealGreen).font('Helvetica-Bold').fontSize(8).text('✦', 295, 822);


// ==========================================
// PAGE 2
// ==========================================
doc.addPage({ margin: 0, size: 'A4' });
drawLeftColumnBg();

leftY = 24;
leftY = drawSectionHeader('SKILLS', '🎯', 20, leftY, 155);

// Digital Marketing
doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(8.5).text('Digital Marketing', 20, leftY);
leftY += 11;

const dmSkills = [
  '• Search Engine Optimization', '• Social Media Marketing', '• Google Ads', '• Meta Ads', '• Paid Social Media',
  '• WordPress', '• Keyword Research', '• Content Marketing', '• Local SEO', '• Technical SEO', '• Email Marketing',
  '• Digital Marketing Analytics', '• Social Media Strategy', '• Lead Generation', '• E-Commerce', '• Affiliate Marketing',
  '• YouTube Marketing', '• AI Tools', '• ChatGPT', '• Google Gemini', '• Perplexity', '• Claude', '• Canva', '• Ahrefs', '• SEMrush',
  '• Google PageSpeed Insights', '• Ubersuggest', '• Meta AI', '• AnswerThePublic', '• Google Analytics 4',
  '• Google Search Console', '• Google Keyword Planner', '• Meta Ads Manager', '• Meta Business Suite', '• CapCut',
  '• QuillBot', '• HeyGen', '• OpusClip', '• Leonardo AI', '• Pinterest'
];

doc.fillColor(bodyText).font('Helvetica').fontSize(6.8).lineGap(1.6).text(dmSkills.join(' • '), 20, leftY, { width: 158 });
leftY += 140;

// Professional Skills
leftY = drawSectionHeader('Professional Skills', '👤', 20, leftY, 155);
const profSkills = [
  '• Customer Communication', '• Client Relationship Management', '• Lead Handling & Follow-ups',
  '• Sales & Business Development', '• Problem Solving', '• Analytical Thinking', '• Active Listening',
  '• Team Collaboration', '• Time Management'
];
doc.fillColor(bodyText).font('Helvetica').fontSize(6.8).lineGap(1.6).text(profSkills.join('\n'), 20, leftY, { width: 158 });
leftY += 75;

// AI Tools
leftY = drawSectionHeader('AI Tools', '⚙', 20, leftY, 155);
const aiToolsList = [
  '• ChatGPT', '• Claude', '• Google Gemini', '• Perplexity', '• Microsoft Copilot',
  '• Canva AI', '• AI • SEO', '• Keyword Research Tools', '• AI Image Generation Tools', '• AI Video Generation Tools'
];
doc.fillColor(bodyText).font('Helvetica').fontSize(6.8).lineGap(1.6).text(aiToolsList.join('\n'), 20, leftY, { width: 158 });
leftY += 80;

// Languages
leftY = drawSectionHeader('LANGUAGES', '🌐', 20, leftY, 155);
doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(7.5).text('HINDI', 20, leftY);
doc.fillColor(mutedGray).font('Helvetica').fontSize(7.5).text('Native', 140, leftY, { align: 'right', width: 38 });
leftY += 13;
doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(7.5).text('ENGLISH', 20, leftY);
doc.fillColor(mutedGray).font('Helvetica').fontSize(7.5).text('Proficient', 140, leftY, { align: 'right', width: 38 });

// Page 2 Right Column: Projects
rightY = 24;
rightY = drawSectionHeader('PROJECTS', '📑', rightX, rightY, rightW);

const p2Projects = [
  {
    title: 'Nike India – SEO Audit & Digital Growth Strategy',
    date: '06/2026',
    desc: 'Led a comprehensive SEO/UX audit for Nike India, identifying key gaps. Created a 6-month plan for Core Web Vitals, schema, AI search, and growth',
    skills: 'Technical SEO, On-Page, GEO, AEO, Content Strategy, UX/CRO, Schema, Core Web Vitals, Planning',
    link: 'https://pdflink.to/nikeindia/',
  },
  {
    title: 'Zomato – Keyword Research & SEO Strategy',
    date: '06/2026',
    desc: 'Crafted SEO architecture for Zomato, targeted keywords for growth. Developed content clusters, local SEO, keyword-page mapping, linking, and schema',
    skills: 'Keyword Research, Search Intent, Local SEO, Content Clusters, AEO/GEO, On-Page SEO, Schema, B2B SEO, Google Trends',
    link: 'https://pdflink.to/zomato/',
  },
  {
    title: 'Netflix – SEO & Competitive Analysis',
    date: '06/2026',
    desc: 'Analyzed Netflix vs. Disney+, Amazon, Max in SEO, UX, strategy, gaps. Created AEO/GEO initiatives, content plans, SEO actions, growth roadmap',
    skills: 'Competitive Analysis, SEO Audit, AEO/GEO, UX, Content Strategy, SWOT, Google Analytics 4, Strategic Planning, Roadmapping, Google Search Console',
    link: 'https://pdflink.to/netflix/',
  },
  {
    title: 'Amul – SEO, GEO & AEO Digital Presence Audit',
    date: '06/2026',
    desc: 'Conducted audits (SEO, GEO, AEO, Technical, Local, UX, Core Web Vitals) for Amul, identifying 35 gaps and creating a 6-month roadmap for improvements',
    skills: 'SEO Audit, Technical SEO, GEO, AEO, Local SEO, Web Vitals, Schema, EEAT, Content Strategy, AI Search Optimization',
    link: 'https://pdflink.to/amul/',
  },
  {
    title: 'Burger King India – Full Website SEO & Digital Audit',
    date: '06/2026',
    desc: 'Conducted SEO audits for Burger King India, identifying 20 key issues and creating a 90-day action plan to boost visibility and conversions',
    skills: 'Technical SEO, On-Page SEO, Local SEO, UX/CRO, Core Web Vitals, GBP, EEAT, Schema, SEO Audit, Roadmapping',
    link: 'https://pdflink.to/burgerking/',
  },
  {
    title: 'OPPO – Landing Page CRO & Conversion Optimization',
    date: '06/2026',
    desc: 'Designed a CRO strategy for OPPO landing pages, including UX, CTA, and trust signals, with a 12-test A/B roadmap and KPI framework to boost conversions',
    skills: 'CRO, UX, A/B Testing, CTA, GA4, GTM, KPI Tracking',
    link: 'https://pdflink.to/oppo/',
  },
  {
    title: 'Flipkart – Comprehensive Website UX Audit',
    date: '06/2026',
    desc: 'Led heuristic UX audit for Flipkart, assessing navigation, user flows, and accessibility. Delivered 18 key recommendations and 90-day UX roadmap to boost sales and retention',
    skills: 'UX Audit, Heuristic Evaluation, Information Architecture, Mobile UX, CRO, Figma, GA4, Hotjar',
    link: 'https://pdflink.to/flipkart/',
  },
];

p2Projects.forEach((proj) => {
  doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(8.5).text(proj.title, rightX, rightY, { width: 280 });
  doc.fillColor(mutedGray).font('Helvetica').fontSize(7.5).text(proj.date, rightX + 285, rightY, { width: 70, align: 'right' });
  rightY += 11;

  doc.fillColor(bodyText).font('Helvetica').fontSize(7.2).lineGap(1).text(proj.desc, rightX, rightY, { width: rightW });
  rightY += doc.heightOfString(proj.desc, { width: rightW, fontSize: 7.2 }) + 2;

  doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(7).text('• Skills: ', rightX + 4, rightY, { continued: true });
  doc.fillColor(bodyText).font('Helvetica').text(proj.skills, { width: rightW - 10 });
  rightY += doc.heightOfString(proj.skills, { width: rightW - 10, fontSize: 7 }) + 2;

  doc.fillColor(linkBlue).font('Helvetica').fontSize(7).text(`🔗 ${proj.link}`, rightX + 4, rightY);
  rightY += 13;
});


// ==========================================
// PAGE 3
// ==========================================
doc.addPage({ margin: 0, size: 'A4' });
drawLeftColumnBg();

leftY = 24;
leftY = drawSectionHeader('KEY ACHIEVEMENTS', '🚩', 20, leftY, 155);

const achievements = [
  'Successfully completed B.Sc. in Chemistry and M.A. in English from IGNOU with First Division and 62% in both programs',
  'Gained approximately 1 year of professional experience in Customer Service at Tech Mahindra, developing strong customer communication and problem-solving skills',
  'Gained approximately 6 months of experience in Business Development at Mystic Moneymart, developing skills in lead handling, client communication, follow-ups, and sales',
  'Successfully completed a Digital Marketing course and developed foundational knowledge across SEO, Social Media Marketing, Paid Advertising, Content Marketing, Analytics, Email Marketing, Local SEO, and AI tools',
  'Successfully transitioning professional experience in Customer Service and Sales into a career in Digital Marketing, combining communication, customer understanding, and business development skills with digital marketing knowledge',
  'Built practical experience in SEO analysis, keyword research, competitor analysis, content strategy, and digital marketing planning',
];

achievements.forEach((ach) => {
  doc.fillColor(tealGreen).font('Helvetica-Bold').fontSize(7.5).text('• ', 20, leftY, { continued: true });
  doc.fillColor(bodyText).font('Helvetica').fontSize(7.2).lineGap(1.5).text(ach, { width: 156 });
  leftY += doc.heightOfString(ach, { width: 156, fontSize: 7.2 }) + 8;
});

// Page 3 Right Column: Web Dev Projects
rightY = 24;
rightY = drawSectionHeader('PROJECTS', '📑', rightX, rightY, rightW);

const webDevProjects = [
  {
    name: 'Adfinity Digital - Digital Marketing Agency Website',
    desc: 'Designed and developed a modern digital marketing agency website showcasing SEO, Meta Ads, Google Ads, Social Media Marketing, Website Development, Branding, and Performance Marketing services, with a focus on lead generation and conversion',
  },
  {
    name: 'Spice Garden - Restaurant Website',
    desc: 'Designed and developed a responsive restaurant website highlighting six cuisine traditions, chef expertise, menu offerings, and brand story, with a focus on engaging user experience',
  },
  {
    name: 'Royal Stay - Hotel Website',
    desc: 'Designed and developed a modern, responsive hotel website focused on property presentation, room discovery, amenities, booking-focused user journeys, and customer experience',
  },
  {
    name: 'Sanctuary - Luxury Wellness Spa Website',
    desc: 'Designed and developed a premium, responsive spa website highlighting holistic therapies, organic treatments, tranquil ambiance, and Eastern-European wellness techniques, with a focus on immersive brand storytelling and customer experience',
  },
  {
    name: 'IronPulse Muscle - Fitness & Gym Website',
    desc: 'Designed and developed a modern, responsive gym website showcasing fitness programs, personal training, strength training, group classes, nutrition services, and membership-focused CTAs, with a focus on lead generation and user engagement',
  },
  {
    name: 'CarePlus Multispeciality Hospital - Healthcare Website',
    desc: 'Designed and developed a modern, responsive hospital website highlighting emergency care, specialist doctors, advanced facilities, and comprehensive medical services, with a focus on trust, accessibility, and patient experience',
  },
  {
    name: 'SuccessPoint Academy - Education & Coaching Website',
    desc: 'Designed and developed a modern, responsive academy website focused on course offerings, student engagement, educational programs, and lead-generation CTAs, with a clean and conversion-oriented user experience',
  },
  {
    name: 'PawCare Animal Hospital - Veterinary Healthcare Website',
    desc: 'Designed and developed a modern, responsive veterinary website focused on pet healthcare services, veterinary care, treatments, and appointment-focused user journeys, with an emphasis on trust and pet-owner experience. Live Website',
  },
  {
    name: 'Thakur Legal Associates - Law Firm Website',
    desc: 'Designed and developed a modern, responsive legal website focused on legal services, practice areas, attorney expertise, client trust, and consultation-focused user journeys, with a professional and credibility-driven interface. Live Website',
  },
];

webDevProjects.forEach((wp) => {
  doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(8).text(wp.name, rightX, rightY, { width: rightW });
  rightY += 10;

  doc.fillColor(bodyText).font('Helvetica').fontSize(6.8).lineGap(1).text(wp.desc, rightX, rightY, { width: rightW });
  rightY += doc.heightOfString(wp.desc, { width: rightW, fontSize: 6.8 }) + 2;

  doc.fillColor(linkBlue).font('Helvetica-Bold').fontSize(6.8).text('• Live Website', rightX + 4, rightY);
  rightY += 11;
});


// ==========================================
// PAGE 4
// ==========================================
doc.addPage({ margin: 0, size: 'A4' });
drawLeftColumnBg();

leftY = 24;
leftY = drawSectionHeader('FIND ME ONLINE', '👤', 20, leftY, 155);

const onlineProfiles = [
  { p: 'LinkedIn', handle: 'linkedin.com/in/mr-dharmesh-thakur' },
  { p: 'Facebook', handle: 'facebook.com/brainsbehindbucks' },
  { p: 'Facebook', handle: 'facebook.com/adfinityy' },
  { p: 'Website', handle: 'rankify.rf.gd' },
  { p: 'Website', handle: 'brainbucks.rf.gd' },
  { p: 'Instagram', handle: 'instagram.com/brainsbehindbucks' },
  { p: 'X (Twitter)', handle: 'x.com/dharmesthheo' },
  { p: 'Pinterest', handle: 'pinterest.com/mrdharmeshthakur' },
  { p: 'YouTube', handle: 'youtube.com/@HulkCinematicShorts' },
  { p: 'GitHub', handle: 'github.com/dharmeshthakur9' },
  { p: 'GitHub', handle: 'github.com/dharmeshthakur91' },
  { p: 'Reddit', handle: 'reddit.com/user/dharmeshthakur9' },
  { p: 'Quora', handle: 'quora.com/profile/Dharmesh-Thakur-47' },
  { p: 'Portfolio', handle: 'https://dharmeshthakur.vercel.app/' },
];

onlineProfiles.forEach((prof) => {
  doc.fillColor(tealGreen).font('Helvetica-Bold').fontSize(7.5).text(`• ${prof.p}`, 20, leftY);
  leftY += 9;
  doc.fillColor(bodyText).font('Helvetica').fontSize(6.5).text(prof.handle, 26, leftY, { width: 152 });
  leftY += doc.heightOfString(prof.handle, { width: 152, fontSize: 6.5 }) + 5;
});

// Page 4 Right Column
rightY = 24;
rightY = drawSectionHeader('TRAINING / COURSES', '📑', rightX, rightY, rightW);

// Two Column Courses
doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(8).text('Basic Computer Course – Vision Academy', rightX, rightY, { width: 165 });
doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(8).text('Digital Marketing Course – Vision Academy', rightX + 175, rightY, { width: 180 });
rightY += 11;

doc.fillColor(bodyText).font('Helvetica').fontSize(6.8).lineGap(1).text(
  'Computer Fundamentals, MS Office, MS Word, MS Excel, Powerpoint, Internet & Basic Computer Operations',
  rightX,
  rightY,
  { width: 165 }
);

doc.fillColor(bodyText).font('Helvetica').fontSize(6.8).lineGap(1).text(
  'SEO • Social Media Marketing • Google Ads • Meta Ads • Content Marketing • Email Marketing • Google Analytics • Local SEO • AI Tools',
  rightX + 175,
  rightY,
  { width: 180 }
);
rightY += 34;

// Interests
rightY = drawSectionHeader('INTERESTS', '♥', rightX, rightY, rightW);

const interests = [
  { title: 'Digital Marketing', desc: 'Interested in learning new marketing strategies and industry trends.' },
  { title: 'SEO', desc: 'Interested in search optimization, keyword research, and improving online visibility.' },
  { title: 'Social Media', desc: 'Interested in social media trends, content, and audience engagement.' },
  { title: 'AI & Technology', desc: 'Interested in exploring AI tools and new digital technologies.' },
  { title: 'Website Development', desc: 'Interested in Website creation and mostly from AI like Google AI Studio.' },
];

interests.forEach((item) => {
  doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(7.5).text(`• ${item.title}: `, rightX, rightY, { continued: true });
  doc.fillColor(bodyText).font('Helvetica').text(item.desc, { width: rightW });
  rightY += doc.heightOfString(item.desc, { width: rightW, fontSize: 7.5 }) + 3.5;
});
rightY += 8;

// Strengths
rightY = drawSectionHeader('STRENGTHS', '💪', rightX, rightY, rightW);

const strengthsCol1 = ['• Quick Learner', '• Good Communication', '• Hardworking', '• Positive Attitude'];
const strengthsCol2 = ['• Problem Solving', '• Teamwork', '• Adaptability', '• Self-Motivated'];

for (let i = 0; i < 4; i++) {
  doc.fillColor(bodyText).font('Helvetica').fontSize(7.2).text(strengthsCol1[i], rightX, rightY + i * 11);
  doc.fillColor(bodyText).font('Helvetica').fontSize(7.2).text(strengthsCol2[i], rightX + 175, rightY + i * 11);
}
rightY += 48;

// Industry Expertise (Ratings)
rightY = drawSectionHeader('INDUSTRY EXPERTISE', '🏢', rightX, rightY, rightW);

const expRatings = [
  { name: 'CUSTOMER SERVICE', blocks: 5 },
  { name: 'Customer Support', blocks: 5 },
  { name: 'Lead Generation & Lead Handling', blocks: 5 },
  { name: 'Sales & Business Development', blocks: 5 },
  { name: 'Digital Marketing', blocks: 5 },
  { name: 'B2C Services', blocks: 5 },
];

for (let i = 0; i < expRatings.length; i += 2) {
  const item1 = expRatings[i];
  const item2 = expRatings[i + 1];

  // Item 1
  doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(7).text(item1.name, rightX, rightY);
  // draw 5 green blocks
  for (let b = 0; b < 5; b++) {
    doc.rect(rightX + b * 18, rightY + 9, 14, 4).fill(tealGreen);
  }

  // Item 2
  if (item2) {
    doc.fillColor(darkCharcoal).font('Helvetica-Bold').fontSize(7).text(item2.name, rightX + 175, rightY);
    for (let b = 0; b < 5; b++) {
      doc.rect(rightX + 175 + b * 18, rightY + 9, 14, 4).fill(tealGreen);
    }
  }

  rightY += 24;
}

doc.end();

writeStream.on('finish', () => {
  console.log('SUCCESS: Generated authentic 4-page Dharmesh_Thakur_Resume.pdf');
  fs.copyFileSync(outputPath, duplicatePath1);
  fs.copyFileSync(outputPath, duplicatePath2);
});
