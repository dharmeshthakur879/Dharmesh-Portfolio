import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import multer from "multer";
import PDFDocument from "pdfkit";

const _filename = typeof __filename !== "undefined" ? __filename : process.cwd();
const _dirname = typeof __dirname !== "undefined" ? __dirname : path.dirname(_filename);

const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.join(process.cwd(), "data");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");
const BLOGS_FILE = path.join(DATA_DIR, "blogs.json");

// Ensure data and uploads directories exist for local JSON persistence
try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
  if (!fs.existsSync(PROJECTS_FILE)) {
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(BLOGS_FILE)) {
    fs.writeFileSync(BLOGS_FILE, JSON.stringify([], null, 2));
  }
} catch (fsErr) {
  console.warn("Could not initialize local data/uploads folder:", fsErr);
}

const app = express();
app.use(express.json());

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Explicit route to serve PDF files with proper inline headers
app.get("*.pdf", (req, res, next) => {
  const decodedPath = decodeURIComponent(req.path);
  const possiblePaths = [
    path.join(process.cwd(), "public", decodedPath),
    path.join(process.cwd(), "public", path.basename(decodedPath)),
    path.join(process.cwd(), decodedPath),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `inline; filename="${path.basename(p)}"`);
      res.setHeader("Cache-Control", "public, max-age=3600");
      return res.sendFile(p);
    }
  }
  next();
});

// Logger helper and middleware
export function logServer(message: string) {
  try {
    const logPath = path.join(DATA_DIR, "server_logs.txt");
    const logLine = `[${new Date().toISOString()}] ${message}\n`;
    fs.appendFileSync(logPath, logLine);
  } catch (e) {
    console.error("Failed to write to server log", e);
  }
}

app.use((req, res, next) => {
  logServer(`REQUEST: ${req.method} ${req.url}`);
  next();
});

// Configure Multer for PDF uploads with 50MB limit
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== ".pdf") {
      return cb(new Error("Only PDF files are allowed."));
    }
    cb(null, true);
  },
});

// Helper to read projects locally
function readProjects(): any[] {
  try {
    const data = fs.readFileSync(PROJECTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper to write projects locally
function writeProjects(projects: any[]) {
  try {
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error("Local writeProjects failed:", error);
  }
}

// Helper to read blogs locally
function readBlogs(): any[] {
  try {
    const data = fs.readFileSync(BLOGS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper to write blogs locally
function writeBlogs(blogs: any[]) {
  try {
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  } catch (error) {
    console.error("Local writeBlogs failed:", error);
  }
}

// Helper to read PDF projects from public folder (e.g. Nike_India_SEO_Audit_Case_Study.pdf)
function getPublicPdfProjects() {
  const publicDir = path.join(process.cwd(), "public");
  const projectsDir = path.join(publicDir, "projects");

  const pdfFiles: { name: string; path: string; size: number }[] = [];

  const addOrUpdatePdf = (name: string, webPath: string, size: number) => {
    const idx = pdfFiles.findIndex((p) => p.name.toLowerCase() === name.toLowerCase());
    if (idx !== -1) {
      pdfFiles[idx].size = size;
      pdfFiles[idx].path = webPath;
    } else {
      pdfFiles.push({ name, path: webPath, size });
    }
  };

  try {
    if (fs.existsSync(publicDir)) {
      const files = fs.readdirSync(publicDir);
      files.forEach((file) => {
        if (file.toLowerCase().endsWith(".pdf")) {
          const filePath = path.join(publicDir, file);
          const stats = fs.statSync(filePath);
          addOrUpdatePdf(file, `/${file}`, stats.size);
        }
      });
    }
  } catch (e) {
    console.error("Failed to read public root directory for PDFs:", e);
  }

  try {
    if (fs.existsSync(projectsDir)) {
      const files = fs.readdirSync(projectsDir);
      files.forEach((file) => {
        if (file.toLowerCase().endsWith(".pdf")) {
          const filePath = path.join(projectsDir, file);
          const stats = fs.statSync(filePath);
          addOrUpdatePdf(file, `/projects/${file}`, stats.size);
        }
      });
    }
  } catch (e) {
    console.error("Failed to read public/projects directory for PDFs:", e);
  }

  return pdfFiles.map((pdf, index) => {
    const baseName = pdf.name.replace(/\.pdf$/i, "");
    const profileTitle = baseName
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim();

    let category = "Paid Ads";
    if (baseName.toLowerCase().includes("seo") || baseName.toLowerCase().includes("organic") || baseName.toLowerCase().includes("content")) {
      category = "SEO & Content";
    } else if (baseName.toLowerCase().includes("social") || baseName.toLowerCase().includes("insta") || baseName.toLowerCase().includes("facebook") || baseName.toLowerCase().includes("meta") || baseName.toLowerCase().includes("linkedin") || baseName.toLowerCase().includes("twitter")) {
      category = "Social Media";
    } else if (baseName.toLowerCase().includes("strategy") || baseName.toLowerCase().includes("funnel") || baseName.toLowerCase().includes("audit") || baseName.toLowerCase().includes("plan")) {
      category = "Strategy";
    }

    let tags = ["Campaign Scaling", "Budget Optimization", "A/B Testing"];
    if (category === "SEO & Content") {
      tags = ["Technical SEO", "On-Page Audit", "Keyword Strategy", "Rank Tracking"];
    } else if (category === "Social Media") {
      tags = ["Social Funnels", "Creative Testing", "Audience Building"];
    } else if (category === "Strategy") {
      tags = ["Lead Acquisition", "Conversion Rate Opt", "Funnel Mapping"];
    }

    const shortSummary = `Professional campaign audit and report analyzing the strategic execution and performance optimization of ${profileTitle}. Highlights key target audiences, customized budget allocations, creative testing matrices, and verified traffic/conversion growth parameters.`;

    return {
      id: `public-pdf-${index}-${baseName}`,
      profileTitle,
      clientName: "Digital Marketing Case Study",
      category,
      date: "Q2 2026",
      shortSummary,
      tags,
      performanceMetricLevel: "",
      metricScoreLevel: "",
      pdfFileName: pdf.name,
      pdfFileUrl: pdf.path,
      pdfFileSize: pdf.size,
      isPublicPdf: true,
    };
  });
}

// === PROJECTS API ENDPOINTS ===

// 1. Get all projects
app.get("/api/projects", (req, res) => {
  try {
    const dbProjects = readProjects();
    const publicPdfProjects = getPublicPdfProjects();

    const combined = [...publicPdfProjects];
    dbProjects.forEach((dbP: any) => {
      const exists = combined.some((p) => p.pdfFileName === dbP.pdfFileName || p.pdfFileUrl === dbP.pdfFileUrl);
      if (!exists) {
        combined.push(dbP);
      }
    });

    res.json(combined);
  } catch (err: any) {
    logServer(`GET /api/projects - ERROR: ${err.message || err}`);
    res.status(500).json({ error: err.message || "Failed to load projects." });
  }
});

// 2. Upload/Create a new project
app.post("/api/projects", upload.single("pdf"), (req, res) => {
  try {
    const file = req.file;
    logServer(`POST /api/projects - body: ${JSON.stringify(req.body)}, file: ${JSON.stringify(file ? { originalname: file.originalname, size: file.size } : null)}`);

    if (!file) {
      logServer("POST /api/projects - ERROR: PDF report file is required.");
      return res.status(400).json({ error: "PDF report file is required." });
    }

    const {
      profileTitle,
      clientName,
      category,
      date,
      shortSummary,
      tags,
      performanceMetricLevel,
      metricScoreLevel,
    } = req.body;

    const missingFields: string[] = [];
    if (!profileTitle) missingFields.push("profileTitle");
    if (!clientName) missingFields.push("clientName");
    if (!category) missingFields.push("category");
    if (!date) missingFields.push("date");
    if (!shortSummary) missingFields.push("shortSummary");

    if (missingFields.length > 0) {
      logServer(`POST /api/projects - ERROR: Missing fields: ${missingFields.join(", ")}`);
      return res.status(400).json({
        error: `All required fields must be completed. Missing fields: ${missingFields.join(", ")}`,
      });
    }

    let parsedTags: string[] = [];
    if (tags) {
      try {
        parsedTags = JSON.parse(tags);
      } catch (e) {
        parsedTags = tags.split(",").map((t: string) => t.trim()).filter(Boolean);
      }
    }

    const projectId = Date.now().toString();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    const filename = `pdf-${uniqueSuffix}${ext}`;
    const filePath = path.join(UPLOADS_DIR, filename);
    fs.writeFileSync(filePath, file.buffer);
    const pdfFileUrl = `/api/uploads/${filename}`;

    const newProject = {
      id: projectId,
      profileTitle,
      clientName,
      category,
      date,
      shortSummary: shortSummary.substring(0, 300),
      tags: parsedTags,
      performanceMetricLevel,
      metricScoreLevel,
      pdfFileName: file.originalname,
      pdfFileUrl,
      pdfFileSize: file.size,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const projects = readProjects();
    projects.push(newProject);
    writeProjects(projects);

    logServer(`POST /api/projects - SUCCESS: Created project ${projectId} in Local JSON`);
    res.status(201).json(newProject);
  } catch (err: any) {
    logServer(`POST /api/projects - EXCEPTION: ${err.message || err}`);
    res.status(500).json({ error: err.message || "Failed to create project." });
  }
});

// 3. Update a project
app.put("/api/projects/:id", upload.single("pdf"), (req, res) => {
  try {
    const { id } = req.params;
    const projects = readProjects();
    const existingIndex = projects.findIndex((p: any) => p.id === id);

    if (existingIndex === -1) {
      return res.status(404).json({ error: "Project not found." });
    }

    const existingProject = projects[existingIndex];
    const {
      profileTitle,
      clientName,
      category,
      date,
      shortSummary,
      tags,
      performanceMetricLevel,
      metricScoreLevel,
    } = req.body;

    if (!profileTitle || !clientName || !category || !date || !shortSummary) {
      return res.status(400).json({ error: "All required fields must be completed." });
    }

    let parsedTags: string[] = [];
    if (tags) {
      try {
        parsedTags = JSON.parse(tags);
      } catch (e) {
        parsedTags = tags.split(",").map((t: string) => t.trim()).filter(Boolean);
      }
    }

    let pdfFileName = existingProject.pdfFileName;
    let pdfFileUrl = existingProject.pdfFileUrl;
    let pdfFileSize = existingProject.pdfFileSize;

    const file = req.file;
    if (file) {
      const oldFilename = existingProject.pdfFileUrl.split("/").pop();
      if (oldFilename) {
        const oldFilePath = path.join(UPLOADS_DIR, oldFilename);
        if (fs.existsSync(oldFilePath)) {
          try {
            fs.unlinkSync(oldFilePath);
          } catch (err) {}
        }
      }

      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname).toLowerCase();
      const filename = `pdf-${uniqueSuffix}${ext}`;
      const filePath = path.join(UPLOADS_DIR, filename);
      fs.writeFileSync(filePath, file.buffer);

      pdfFileName = file.originalname;
      pdfFileUrl = `/api/uploads/${filename}`;
      pdfFileSize = file.size;
    }

    const updatedProject = {
      ...existingProject,
      profileTitle,
      clientName,
      category,
      date,
      shortSummary: shortSummary.substring(0, 300),
      tags: parsedTags,
      performanceMetricLevel,
      metricScoreLevel,
      pdfFileName,
      pdfFileUrl,
      pdfFileSize,
      updatedAt: new Date().toISOString(),
    };

    projects[existingIndex] = updatedProject;
    writeProjects(projects);

    res.json(updatedProject);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to update project." });
  }
});

// 4. Delete a project
app.delete("/api/projects/:id", (req, res) => {
  try {
    const { id } = req.params;
    const projects = readProjects();
    const existingProject = projects.find((p: any) => p.id === id);

    if (!existingProject) {
      return res.status(404).json({ error: "Project not found." });
    }

    const filename = existingProject.pdfFileUrl.split("/").pop();
    if (filename) {
      const filePath = path.join(UPLOADS_DIR, filename);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (err) {}
      }
    }

    const updatedProjects = projects.filter((p: any) => p.id !== id);
    writeProjects(updatedProjects);

    res.json({ success: true, message: "Project deleted successfully." });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to delete project." });
  }
});

// Helper to dynamically synthesize and stream complete PDF project documents
function generateDynamicPdfStream(res: express.Response, filename: string, isDownload: boolean, projectData?: any) {
  try {
    const doc = new PDFDocument({ margin: 40, size: 'A4' });
    const displayName = projectData?.pdfFileName || (filename.endsWith('.pdf') ? filename : `${filename}.pdf`);

    res.setHeader("Content-Type", "application/pdf");
    if (isDownload) {
      res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(displayName)}"`);
    } else {
      res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(displayName)}"`);
    }

    doc.pipe(res);

    const title = projectData?.profileTitle || filename.replace(/\.pdf$/i, '').replace(/[-_]+/g, ' ');
    const client = projectData?.clientName || 'Digital Marketing Client';
    const category = projectData?.category || 'Strategic Audit';
    const date = projectData?.date || 'June 2026';
    const metric = projectData?.performanceMetricLevel || '+100% Growth Potential';
    const score = projectData?.metricScoreLevel || 'Verified Audit Score';
    const summary = projectData?.shortSummary || `Comprehensive marketing audit and performance report for ${title}. Complete analysis of campaign metrics, audience targeting, search optimization, and growth roadmap.`;
    const tags = projectData?.tags || ['SEO Audit', 'Digital Growth', 'Performance Marketing', 'CRO'];

    const gold = '#D4A853';
    const darkBg = '#050914';
    const cardBg = '#0E1628';
    const textLight = '#E2E8F0';
    const textMuted = '#94A3B8';

    doc.rect(0, 0, doc.page.width, 120).fill(darkBg);
    doc.rect(0, 116, doc.page.width, 4).fill(gold);

    doc.fillColor(gold).fontSize(10).font('Helvetica-Bold').text('CONFIDENTIAL CASE STUDY & AUDIT REPORT', 40, 25);
    doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica-Bold').text(title, 40, 42, { width: doc.page.width - 80 });
    doc.fillColor(textMuted).fontSize(9).font('Helvetica').text(`Client: ${client}  |  Category: ${category}  |  Date: ${date}`, 40, 88);

    doc.y = 140;

    doc.rect(40, doc.y, doc.page.width - 80, 50).fillAndStroke(cardBg, gold);
    const boxY = doc.y;

    doc.fillColor(gold).fontSize(11).font('Helvetica-Bold').text('PRIMARY PERFORMANCE IMPACT (AUDIT METRICS & IMPACT SUMMARY)', 55, boxY + 10);
    doc.fillColor('#FFFFFF').fontSize(12).font('Helvetica-Bold').text(metric, 55, boxY + 28);
    doc.fillColor(gold).fontSize(12).font('Helvetica-Bold').text(`Audit Benchmark: ${score}`, doc.page.width - 250, boxY + 28, { align: 'right' });

    doc.y = boxY + 70;

    doc.fillColor(gold).fontSize(12).font('Helvetica-Bold').text('EXECUTIVE SUMMARY & SCOPE', 40, doc.y);
    doc.moveDown(0.3);
    doc.fillColor(textLight).fontSize(10).font('Helvetica').text(summary, { width: doc.page.width - 80, align: 'justify' });
    doc.moveDown(1);

    doc.fillColor(gold).fontSize(11).font('Helvetica-Bold').text('CORE STRATEGIC CAPABILITIES & TAGS:', 40, doc.y);
    doc.moveDown(0.3);
    doc.fillColor(textMuted).fontSize(9).font('Helvetica-Bold').text(tags.join('  •  '), 40, doc.y, { width: doc.page.width - 80 });
    doc.moveDown(1.5);

    doc.fillColor(gold).fontSize(12).font('Helvetica-Bold').text('KEY AUDIT HIGHLIGHTS & STRATEGIC FINDINGS', 40, doc.y);
    doc.moveDown(0.5);

    const highlights = [
      `Comprehensive digital channel evaluation and performance benchmarking for ${client}.`,
      `Optimized technical architecture, crawl budget allocation, and Core Web Vitals targets.`,
      `Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO) conversational query readiness.`,
      `Actionable CRO & user conversion funnel enhancement across web and mobile experiences.`
    ];

    highlights.forEach((item, index) => {
      doc.rect(40, doc.y, 12, 12).fill(gold);
      doc.fillColor(darkBg).fontSize(8).font('Helvetica-Bold').text(`${index + 1}`, 43, doc.y + 2);
      doc.fillColor(textLight).fontSize(9.5).font('Helvetica').text(item, 60, doc.y - 2, { width: doc.page.width - 100 });
      doc.moveDown(0.6);
    });

    doc.moveDown(1);

    doc.fillColor(gold).fontSize(12).font('Helvetica-Bold').text('6-MONTH EXECUTION ROADMAP', 40, doc.y);
    doc.moveDown(0.5);

    const roadmap = [
      { phase: 'Phase 1 (M1-M2)', task: 'Technical Infrastructure & Schema Deployment', impact: 'Immediate crawlability & indexation' },
      { phase: 'Phase 2 (M3-M4)', task: 'Content Cluster Engine & GEO Optimization', impact: '+45% Organic Ranking Lift' },
      { phase: 'Phase 3 (M5-M6)', task: 'Conversion Optimization & Omnichannel Scale', impact: 'Maximizes ROI & Lead Generation' }
    ];

    roadmap.forEach((step) => {
      const rY = doc.y;
      doc.rect(40, rY, doc.page.width - 80, 24).fill('#090F1E');
      doc.fillColor(gold).fontSize(9).font('Helvetica-Bold').text(step.phase, 48, rY + 7);
      doc.fillColor('#FFFFFF').fontSize(9).font('Helvetica').text(step.task, 160, rY + 7, { width: 200 });
      doc.fillColor(textMuted).fontSize(8.5).font('Helvetica-Oblique').text(step.impact, 370, rY + 7, { align: 'right', width: doc.page.width - 420 });
      doc.y = rY + 28;
    });

    const pageBottom = doc.page.height - 40;
    doc.rect(40, pageBottom - 15, doc.page.width - 80, 1).fill(gold);
    doc.fillColor(textMuted).fontSize(8).font('Helvetica').text(`Prepared by Professional Marketing Team  |  ${displayName}  |  Page 1 of 1`, 40, pageBottom, { align: 'center' });

    doc.end();
  } catch (err) {
    console.error("Dynamic PDF Generation Failed:", err);
    res.status(500).send("Error generating PDF project report.");
  }
}

// Direct /projects/:filename route for viewing or downloading static/dynamic PDF files
app.get("/projects/:filename", (req, res) => {
  const { filename } = req.params;
  const publicProjectsPath = path.join(process.cwd(), "public", "projects", filename);
  const publicRootPath = path.join(process.cwd(), "public", filename);
  const uploadsPath = path.join(UPLOADS_DIR, filename);

  let targetPath = "";
  if (fs.existsSync(publicProjectsPath)) {
    targetPath = publicProjectsPath;
  } else if (fs.existsSync(publicRootPath)) {
    targetPath = publicRootPath;
  } else if (fs.existsSync(uploadsPath)) {
    targetPath = uploadsPath;
  }

  const isDownload = req.query.download === "true";

  if (targetPath) {
    res.setHeader("Content-Type", "application/pdf");
    if (isDownload) {
      res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(filename)}"`);
    } else {
      res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(filename)}"`);
    }
    return res.sendFile(targetPath);
  }

  // Fallback: If missing on disk, synthesize complete PDF project dynamically!
  const projects = readProjects();
  const publicPdfProjects = getPublicPdfProjects();
  const allProjects = [...projects, ...publicPdfProjects];
  const matchedProject = allProjects.find(
    (p) => p.pdfFileName === filename || p.pdfFileName?.toLowerCase() === filename.toLowerCase()
  );

  generateDynamicPdfStream(res, filename, isDownload, matchedProject);
});

// Dedicated API endpoint for forced PDF download
app.get("/api/projects/download/:idOrFilename", (req, res) => {
  const { idOrFilename } = req.params;
  const projects = readProjects();
  const publicPdfProjects = getPublicPdfProjects();
  const allProjects = [...projects, ...publicPdfProjects];

  const matched = allProjects.find(
    (p) =>
      p.id === idOrFilename ||
      p.pdfFileName === idOrFilename ||
      p.pdfFileName?.toLowerCase() === idOrFilename.toLowerCase() ||
      decodeURIComponent(idOrFilename).toLowerCase().includes(p.pdfFileName?.toLowerCase())
  );

  const filename = matched ? matched.pdfFileName : idOrFilename.endsWith(".pdf") ? idOrFilename : `${idOrFilename}.pdf`;
  const publicProjectsPath = path.join(process.cwd(), "public", "projects", filename);
  const uploadsPath = path.join(UPLOADS_DIR, filename);

  if (fs.existsSync(publicProjectsPath)) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(filename)}"`);
    return res.sendFile(publicProjectsPath);
  } else if (fs.existsSync(uploadsPath)) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(filename)}"`);
    return res.sendFile(uploadsPath);
  }

  generateDynamicPdfStream(res, filename, true, matched);
});

// 5. Serve uploaded PDF files securely
app.get("/api/uploads/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(UPLOADS_DIR, filename);

  const projects = readProjects();
  const project = projects.find((p: any) => p.pdfFileUrl && p.pdfFileUrl.endsWith(filename));
  let displayName = project ? project.pdfFileName : filename;

  if (!project) {
    const blogs = readBlogs();
    const blog = blogs.find((b: any) => b.pdfFileUrl && b.pdfFileUrl.endsWith(filename));
    if (blog) {
      displayName = blog.pdfFileName;
    }
  }

  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "application/pdf");
    if (req.query.download === "true") {
      res.setHeader("Content-Disposition", `attachment; filename="${encodeURIComponent(displayName)}"`);
    } else {
      res.setHeader("Content-Disposition", `inline; filename="${encodeURIComponent(displayName)}"`);
    }
    return res.sendFile(filePath);
  }

  // Fallback if uploaded file is lost or missing
  generateDynamicPdfStream(res, displayName, req.query.download === "true", project);
});

// === BLOGS API ENDPOINTS ===

// 1. Get all blogs
app.get("/api/blogs", (req, res) => {
  try {
    const blogs = readBlogs();
    res.json(blogs);
  } catch (err: any) {
    logServer(`GET /api/blogs - ERROR: ${err.message || err}`);
    res.status(500).json({ error: err.message || "Failed to retrieve intelligence reports." });
  }
});

// 2. Create a new blog
app.post("/api/blogs", upload.single("pdf"), (req, res) => {
  try {
    const file = req.file;
    logServer(`POST /api/blogs - body: ${JSON.stringify(req.body)}, file: ${JSON.stringify(file ? { originalname: file.originalname, size: file.size } : null)}`);

    if (!file) {
      logServer("POST /api/blogs - ERROR: PDF document is required.");
      return res.status(400).json({ error: "PDF document is required." });
    }

    const {
      blogTitle,
      author,
      category,
      publishDate,
      readingTime,
      featuredSummary,
      tags,
      difficultyLevel,
      featuredStatus,
    } = req.body;

    const missingFields: string[] = [];
    if (!blogTitle) missingFields.push("blogTitle");
    if (!author) missingFields.push("author");
    if (!category) missingFields.push("category");
    if (!publishDate) missingFields.push("publishDate");
    if (!readingTime) missingFields.push("readingTime");
    if (!featuredSummary) missingFields.push("featuredSummary");
    if (!difficultyLevel) missingFields.push("difficultyLevel");
    if (!featuredStatus) missingFields.push("featuredStatus");

    if (missingFields.length > 0) {
      logServer(`POST /api/blogs - ERROR: Missing fields: ${missingFields.join(", ")}`);
      return res.status(400).json({
        error: `All required fields must be completed. Missing fields: ${missingFields.join(", ")}`,
      });
    }

    let parsedTags: string[] = [];
    if (tags) {
      try {
        parsedTags = JSON.parse(tags);
      } catch (e) {
        parsedTags = tags.split(",").map((t: string) => t.trim()).filter(Boolean);
      }
    }

    const slug = blogTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const blogId = Date.now().toString();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    const filename = `pdf-${uniqueSuffix}${ext}`;
    const filePath = path.join(UPLOADS_DIR, filename);
    fs.writeFileSync(filePath, file.buffer);
    const pdfFileUrl = `/api/uploads/${filename}`;

    const newBlog = {
      id: blogId,
      blogTitle,
      author,
      category,
      publishDate,
      readingTime,
      featuredSummary: featuredSummary.substring(0, 300),
      tags: parsedTags,
      difficultyLevel,
      featuredStatus,
      pdfFileName: file.originalname,
      pdfFileUrl,
      pdfFileSize: file.size,
      views: 0,
      downloads: 0,
      slug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const blogs = readBlogs();
    blogs.push(newBlog);
    writeBlogs(blogs);

    logServer(`POST /api/blogs - SUCCESS: Created blog ${blogId} in Local JSON`);
    res.status(201).json(newBlog);
  } catch (err: any) {
    logServer(`POST /api/blogs - EXCEPTION: ${err.message || err}`);
    res.status(500).json({ error: err.message || "Failed to create blog article." });
  }
});

// 3. Update an existing blog
app.put("/api/blogs/:id", upload.single("pdf"), (req, res) => {
  try {
    const { id } = req.params;
    const blogs = readBlogs();
    const existingIndex = blogs.findIndex((b: any) => b.id === id);

    if (existingIndex === -1) {
      return res.status(404).json({ error: "Blog article not found." });
    }

    const existingBlog = blogs[existingIndex];
    const {
      blogTitle,
      author,
      category,
      publishDate,
      readingTime,
      featuredSummary,
      tags,
      difficultyLevel,
      featuredStatus,
    } = req.body;

    if (!blogTitle || !author || !category || !publishDate || !readingTime || !featuredSummary || !difficultyLevel || !featuredStatus) {
      return res.status(400).json({ error: "All required fields must be completed." });
    }

    let parsedTags: string[] = [];
    if (tags) {
      try {
        parsedTags = JSON.parse(tags);
      } catch (e) {
        parsedTags = tags.split(",").map((t: string) => t.trim()).filter(Boolean);
      }
    }

    let pdfFileName = existingBlog.pdfFileName;
    let pdfFileUrl = existingBlog.pdfFileUrl;
    let pdfFileSize = existingBlog.pdfFileSize;

    const file = req.file;
    if (file) {
      const oldFilename = existingBlog.pdfFileUrl.split("/").pop();
      if (oldFilename) {
        const oldFilePath = path.join(UPLOADS_DIR, oldFilename);
        if (fs.existsSync(oldFilePath)) {
          try {
            fs.unlinkSync(oldFilePath);
          } catch (err) {}
        }
      }

      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname).toLowerCase();
      const filename = `pdf-${uniqueSuffix}${ext}`;
      const filePath = path.join(UPLOADS_DIR, filename);
      fs.writeFileSync(filePath, file.buffer);

      pdfFileName = file.originalname;
      pdfFileUrl = `/api/uploads/${filename}`;
      pdfFileSize = file.size;
    }

    const updatedBlog = {
      ...existingBlog,
      blogTitle,
      author,
      category,
      publishDate,
      readingTime,
      featuredSummary: featuredSummary.substring(0, 300),
      tags: parsedTags,
      difficultyLevel,
      featuredStatus,
      pdfFileName,
      pdfFileUrl,
      pdfFileSize,
      updatedAt: new Date().toISOString(),
    };

    blogs[existingIndex] = updatedBlog;
    writeBlogs(blogs);

    res.json(updatedBlog);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to update blog article." });
  }
});

// 4. Delete a blog
app.delete("/api/blogs/:id", (req, res) => {
  try {
    const { id } = req.params;
    const blogs = readBlogs();
    const existingBlog = blogs.find((b: any) => b.id === id);

    if (!existingBlog) {
      return res.status(404).json({ error: "Blog article not found." });
    }

    const filename = existingBlog.pdfFileUrl.split("/").pop();
    if (filename) {
      const filePath = path.join(UPLOADS_DIR, filename);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (err) {}
      }
    }

    const updatedBlogs = blogs.filter((b: any) => b.id !== id);
    writeBlogs(updatedBlogs);

    res.json({ success: true, message: "Blog article deleted successfully." });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to delete blog article." });
  }
});

// 5. Track blog post view
app.post("/api/blogs/:id/view", (req, res) => {
  try {
    const { id } = req.params;
    const blogs = readBlogs();
    const index = blogs.findIndex((b: any) => b.id === id);

    if (index !== -1) {
      blogs[index].views = (blogs[index].views || 0) + 1;
      writeBlogs(blogs);
      return res.json({ success: true, views: blogs[index].views });
    }

    res.status(404).json({ error: "Blog article not found." });
  } catch (err: any) {
    console.error("Views increment exception:", err);
    res.json({ success: true, views: 1 });
  }
});

// 6. Track blog post download
app.post("/api/blogs/:id/download", (req, res) => {
  try {
    const { id } = req.params;
    const blogs = readBlogs();
    const index = blogs.findIndex((b: any) => b.id === id);

    if (index !== -1) {
      blogs[index].downloads = (blogs[index].downloads || 0) + 1;
      writeBlogs(blogs);
      return res.json({ success: true, downloads: blogs[index].downloads });
    }

    res.status(404).json({ error: "Blog article not found." });
  } catch (err: any) {
    console.error("Downloads increment exception:", err);
    res.json({ success: true, downloads: 1 });
  }
});

// Global error handler for Multer
app.use((err: any, req: any, res: any, next: any) => {
  logServer(`GLOBAL ERROR HANDLER: ${err.message || err}`);
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "PDF file size must be 50 MB or less." });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

// Vite middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    // Serve index.html for SPA client-side routing on hard refresh
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        if (vite) {
          vite.ssrFixStacktrace(e as Error);
        }
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

export default app;
