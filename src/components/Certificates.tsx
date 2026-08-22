import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Award, ExternalLink, Download, CheckCircle2, ShieldCheck, Eye, X, ZoomIn, Building2, Calendar, FileCheck2 } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  category: string;
  issuedBy: string;
  parentOrg: string;
  regDetails: string;
  isoStandard: string;
  recipientName: string;
  guardianName: string;
  regNo: string;
  certificateNo: string;
  grade: string;
  duration: string;
  period: string;
  pdfPath: string;
  imagePath: string;
  webpPath: string;
  description: string;
  tags: string[];
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      id: "cert-digital-marketing",
      title: "Digital Marketing Diploma",
      category: "Professional Certification",
      issuedBy: "Vision Computer Academy",
      parentOrg: "Prime Vision Educom Pvt. Ltd.",
      regDetails: "Reg. By Delhi Govt. - 0038/NE",
      isoStandard: "ISO 9001:2008 Certified",
      recipientName: "Dharmesh",
      guardianName: "Jai Bhagwan",
      regNo: "VCA/YV/25910",
      certificateNo: "4496",
      grade: "A+ (Distinction >90%)",
      duration: "6 Months Professional Training",
      period: "24/12/2025 - 24/06/2026",
      pdfPath: "/Digital Marketing Diploma.pdf",
      imagePath: "/images/certificates/digital-marketing-diploma.png",
      webpPath: "/images/certificates/digital-marketing-diploma.webp",
      description: "Advanced certification covering Search Engine Optimization (SEO), Technical Audit, Digital Marketing Strategies, PPC Campaign Execution, Social Media Strategy, and Analytics Architecture.",
      tags: ["Digital Marketing", "SEO Strategy", "Analytics & Growth", "Delhi Govt. Reg."],
    },
    {
      id: "cert-basic-computer",
      title: "Basic Of Computer Certificate",
      category: "Technical Foundation",
      issuedBy: "Vision Computer Academy",
      parentOrg: "Prime Vision Educom Pvt. Ltd.",
      regDetails: "Reg. By Delhi Govt. - 0038/NE",
      isoStandard: "ISO 9001:2008 Certified",
      recipientName: "Dharmesh",
      guardianName: "Jai Bhagwan",
      regNo: "VCA/YV/25910",
      certificateNo: "4456",
      grade: "A+ (Distinction >90%)",
      duration: "3 Months Technical Foundation",
      period: "24/12/2025 - 24/03/2026",
      pdfPath: "/Basic Computer Certificate.pdf",
      imagePath: "/images/certificates/basic-computer-certificate.png",
      webpPath: "/images/certificates/basic-computer-certificate.webp",
      description: "Comprehensive foundational certification in core computer architectures, operating systems, digital workflows, office suites, and computing fundamentals.",
      tags: ["Computer Fundamentals", "Operating Systems", "Workflow Systems", "Grade A+"],
    },
  ];

  return (
    <section id="certificates" className="relative py-24 bg-transparent overflow-hidden border-b border-border-gold/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Verified Credentials
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Certificates & Diplomas
            </h2>
            <p className="font-sans text-sm sm:text-base text-text-sec mt-3 max-w-2xl mx-auto">
              Government-registered & ISO-certified professional credentials validating industry expertise, technical skills, and marketing excellence.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Certificates Grid */}
        <ScrollReveal stagger={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-[#070b14]/90 border border-border-gold/30 hover:border-primary/60 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
            >
              {/* Header Badges */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                      <Award className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] text-text-sec tracking-wider uppercase block">
                        {cert.category}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold whitespace-nowrap shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Grade A+
                  </span>
                </div>

                {/* Certificate Document Visual Preview Box */}
                <div
                  onClick={() => setSelectedCertificate(cert)}
                  className="relative cursor-pointer rounded-xl overflow-hidden border border-border-gold/40 bg-white/5 aspect-[16/10] mb-5 group/img shadow-md hover:border-primary transition-all duration-300"
                >
                  <picture>
                    <source srcSet={cert.webpPath} type="image/webp" />
                    <img
                      src={cert.imagePath}
                      alt={cert.title}
                      className="w-full h-full object-contain object-center bg-white transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                  </picture>
                  
                  {/* Subtle Gradient & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover/img:opacity-90 transition-opacity flex items-end justify-between p-4 pointer-events-none">
                    <span className="font-mono text-[11px] text-white/90 bg-black/70 px-2.5 py-1 rounded-md border border-white/20 backdrop-blur-sm">
                      {cert.isoStandard}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-black font-mono text-xs font-bold tracking-wide shadow-lg group-hover/img:scale-105 transition-transform pointer-events-auto">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Preview Document
                    </span>
                  </div>
                </div>

                {/* Organization & Registration Details */}
                <div className="bg-[#0c1220]/70 border border-border-gold/20 rounded-xl p-4 mb-5 text-left space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-text-sec">
                    <Building2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-white font-medium">{cert.issuedBy}</span>
                    <span className="text-[10px] text-text-sec/80">({cert.parentOrg})</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border-gold/15 text-[11px] font-mono">
                    <div>
                      <span className="text-text-sec block text-[10px]">REGISTRATION NO:</span>
                      <span className="text-primary font-bold">{cert.regNo}</span>
                    </div>
                    <div>
                      <span className="text-text-sec block text-[10px]">CERTIFICATE ID:</span>
                      <span className="text-white font-bold">{cert.certificateNo}</span>
                    </div>
                    <div>
                      <span className="text-text-sec block text-[10px]">GOVT. APPROVAL:</span>
                      <span className="text-text-sec font-medium">{cert.regDetails}</span>
                    </div>
                    <div>
                      <span className="text-text-sec block text-[10px]">DURATION / PERIOD:</span>
                      <span className="text-text-sec font-medium">{cert.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Tags */}
                <p className="text-xs text-text-sec leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-primary/5 border border-primary/20 text-primary font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border-gold/20">
                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-mono text-xs font-bold transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View PDF
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={cert.pdfPath}
                  download
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#11192e] hover:bg-[#18233f] text-white border border-border-gold/30 hover:border-primary/40 font-mono text-xs font-bold transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-primary" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* Agency Trust Banner */}
        <ScrollReveal>
          <div className="mt-14 p-5 rounded-xl bg-gradient-to-r from-[#060a14] via-[#0b1324] to-[#060a14] border border-border-gold/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Original Government-Recognized Credentials
                </h4>
                <p className="text-xs text-text-sec font-sans">
                  Both certifications are verified by Vision Computer Academy under Delhi Govt. Registration #0038/NE.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                100% Authentic & Verifiable
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Interactive Modal Popup for High-Res Inspection */}
      {selectedCertificate && (
        <div
          id="certificate-preview-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-[#060a14] border border-border-gold/50 rounded-2xl shadow-2xl shadow-black max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#03060c] border-b border-border-gold/30">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {selectedCertificate.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-1 text-text-sec hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#020408] flex items-center justify-center">
              <picture>
                <source srcSet={selectedCertificate.webpPath} type="image/webp" />
                <img
                  src={selectedCertificate.imagePath}
                  alt={selectedCertificate.title}
                  className="w-full max-h-[68vh] object-contain rounded-lg border border-border-gold/20 shadow-2xl bg-white"
                />
              </picture>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-5 py-3.5 bg-[#03060c] border-t border-border-gold/30 flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono text-xs text-text-sec">
                <span className="text-primary font-bold">Grade: </span>
                {selectedCertificate.grade} | <span className="text-white">ID: {selectedCertificate.certificateNo}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={selectedCertificate.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-primary text-black font-mono text-xs font-bold hover:bg-primary-hover flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Original PDF
                </a>
                <a
                  href={selectedCertificate.pdfPath}
                  download
                  className="px-3.5 py-1.5 rounded-lg bg-[#0c1220] border border-border-gold/30 hover:border-primary/40 text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-primary" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
