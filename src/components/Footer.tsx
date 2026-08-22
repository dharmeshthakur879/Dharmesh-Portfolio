import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { SOCIAL_PLATFORMS } from "../data/socialPlatforms";
import { SocialIcon } from "./SocialPlatformsSection";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    { label: "Search Engine Optimization", path: "/skills" },
    { label: "Meta & Google Paid Ads", path: "/skills" },
    { label: "AI Workflow Automation", path: "/skills" },
    { label: "Social Media Marketing", path: "/skills" },
    { label: "Content & Copywriting", path: "/skills" },
    { label: "Data Analytics & SEO Audit", path: "/skills" },
  ];

  const quickLinks = [
    { label: "About The Agency", path: "/about" },
    { label: "Projects & Reports", path: "/projects" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Project Previews (PP)", path: "/pp" },
    { label: "Skills & Stack", path: "/skills" },
    { label: "Download Resume (PDF)", path: "/Dharmesh_Thakur_Resume.pdf", isExternal: true },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-[#020408] border-t border-border-gold overflow-hidden">
      {/* Decorative premium background elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16">
            
            {/* Column 1: Brand & Bio */}
            <div className="flex flex-col lg:border-r lg:border-white/10 lg:pr-12">
              {/* Brand Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10 border-2 border-primary rotate-45 flex items-center justify-center bg-[#0A0E17] shadow-[0_0_15px_rgba(212,168,83,0.15)]">
                  <span className="text-primary font-display font-black text-sm -rotate-45">
                    D
                  </span>
                </div>
                <span className="text-xl font-display font-black tracking-tight text-white uppercase">
                  Dharmesh<span className="text-primary font-bold">.</span>
                </span>
              </div>

              {/* Bio Paragraph */}
              <p className="text-xs sm:text-sm text-text-sec leading-relaxed mb-8 font-light max-w-sm">
                Hi, I'm Dharmesh, New Delhi's premium digital marketing expert and AI tools specialist. I engineer scalable growth strategies and high-converting marketing systems that empower local businesses, startups, and D2C brands to scale exponentially.
              </p>

              {/* Social Icons - All 10 Official Channels */}
              <div className="mt-auto pt-4">
                <span className="block font-mono text-[10px] text-[#D4A853] uppercase tracking-widest font-semibold mb-3">
                  Connect on Socials (10 Networks)
                </span>
                <div className="grid grid-cols-5 gap-2 max-w-xs">
                  {SOCIAL_PLATFORMS.map((platform) => (
                    <a
                      key={platform.id}
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-text-sec hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(212,168,83,0.2)] hover:scale-105 transition-all duration-300 group"
                      title={`${platform.name} (${platform.handle})`}
                    >
                      <SocialIcon id={platform.id} className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Skills */}
            <div>
              <h4 className="font-mono text-xs text-[#8A99AD] uppercase tracking-[0.25em] mb-7 font-bold">
                Skills
              </h4>
              <ul className="space-y-4">
                {skills.map((skill, index) => (
                  <li key={index}>
                    <Link
                      to={skill.path}
                      className="block font-display font-black text-[13px] tracking-wider text-slate-100 hover:text-primary transition-colors uppercase leading-tight cursor-pointer"
                    >
                      {skill.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="font-mono text-xs text-[#8A99AD] uppercase tracking-[0.25em] mb-7 font-bold">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.isExternal ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-display font-black text-[13px] tracking-wider text-[#D4A853] hover:text-white transition-colors uppercase leading-tight cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="block font-display font-black text-[13px] tracking-wider text-slate-100 hover:text-primary transition-colors uppercase leading-tight cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-xs text-[#8A99AD] uppercase tracking-[0.25em] mb-7 font-bold">
                  Contact Us
                </h4>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="text-primary w-5 h-5 mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="block font-display font-bold text-[14px] text-slate-100 leading-tight">
                        Connaught Place, New Delhi, 110001
                      </span>
                      <span className="block text-xs text-text-sec mt-1">
                        Serving Delhi NCR, Gurgaon, Noida
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3.5">
                    <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                    <a
                      href="tel:+918287107944"
                      className="font-display font-bold text-[14px] text-slate-100 hover:text-primary transition-colors cursor-pointer"
                    >
                      +91 8287107944
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3.5">
                    <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                    <a
                      href="mailto:dk3891315@gmail.com"
                      className="font-display font-bold text-[14px] text-slate-100 hover:text-primary transition-colors cursor-pointer break-all"
                    >
                      dk3891315@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Let's Talk Pill Button navigating directly to Contact form */}
              <div className="mt-8">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-block px-10 py-3.5 bg-white text-[#020408] font-display font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-[#020408] hover:shadow-[0_0_25px_rgba(212,168,83,0.35)] transition-all duration-300 text-center cursor-pointer min-w-[170px]"
                  >
                    Let's Talk
                  </Link>
                </MagneticButton>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom row: copyright + Scroll to Top */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-text-sec/60 font-light text-center sm:text-left">
            &copy; {new Date().getFullYear()} DHARMESH. All Rights Reserved. Designed for Scale.
          </p>

          <button
            onClick={scrollToTop}
            className="group text-xs font-mono text-text-sec hover:text-primary transition-colors uppercase tracking-[0.15em] cursor-pointer flex items-center gap-2"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}

