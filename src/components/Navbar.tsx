import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { SOCIAL_PLATFORMS } from "../data/socialPlatforms";
import { SocialIcon } from "./SocialPlatformsSection";

const NAV_ITEMS = [
  { label: "Home", path: "/", num: "01" },
  { label: "About", path: "/about", num: "02" },
  { label: "Skills", path: "/skills", num: "03" },
  { label: "Apps & SaaS", path: "/apps-saas", num: "04" },
  { label: "Web Dev", path: "/web-dev", num: "05" },
  { label: "Case Studies", path: "/case-studies", num: "06" },
  { label: "Projects", path: "/projects", num: "07" },
  { label: "PP", path: "/pp", num: "08" },
  { label: "Tools", path: "/tools", num: "09" },
  { label: "Contact", path: "/contact", num: "10" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & listen to Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#020408]/85 backdrop-blur-md border-b border-[#D4A853]/15 shadow-lg"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-6 sm:px-8 xl:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group interactive-hover text-left focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg shrink-0 mr-4 2xl:mr-8"
            aria-label="Dharmesh Portfolio Home"
          >
            <motion.div 
              className="flex items-center space-x-3 sm:space-x-3.5"
              initial="initial"
              whileHover="hover"
            >
              {/* Premium Interactive Geometric Emblem */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                {/* Ambient glowing outer pulse ring */}
                <motion.div
                  className="absolute inset-0 border border-[#D4A853]/20 rounded-lg"
                  variants={{
                    initial: { scale: 1, opacity: 0.4, rotate: 0 },
                    hover: { scale: 1.15, opacity: 0.8, rotate: 90, borderColor: "rgba(212, 168, 83, 0.4)" }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Outer morphing diamond */}
                <motion.div
                  className="absolute w-7 h-7 sm:w-8 sm:h-8 border-2 border-primary flex items-center justify-center bg-transparent"
                  variants={{
                    initial: { rotate: 45, borderRadius: "2px", scale: 1, borderColor: "rgba(212, 168, 83, 1)" },
                    hover: { 
                      rotate: 225, 
                      borderRadius: "50%", 
                      scale: 1.05, 
                      borderColor: "rgba(248, 250, 252, 1)",
                      boxShadow: "0 0 15px rgba(212, 168, 83, 0.5)"
                    }
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 14 }}
                >
                  {/* Inner opposite-rotating fluid diamond */}
                  <motion.div
                    className="absolute inset-0.5 border border-[#D4A853]/40 bg-[#D4A853]/5"
                    variants={{
                      initial: { rotate: 0, borderRadius: "2px", scale: 1 },
                      hover: { 
                        rotate: -180, 
                        borderRadius: "50%", 
                        scale: 0.9,
                        backgroundColor: "rgba(212, 168, 83, 0.95)",
                        borderColor: "rgba(212, 168, 83, 1)"
                      }
                    }}
                    transition={{ type: "spring", stiffness: 180, damping: 14 }}
                  />

                  {/* Central Letter */}
                  <motion.span
                    className="relative text-primary font-display font-black text-sm sm:text-base z-10 block"
                    variants={{
                      initial: { rotate: -45, scale: 1, color: "rgba(212, 168, 83, 1)" },
                      hover: { 
                        rotate: -225, 
                        scale: 0.95, 
                        color: "#020408" 
                      }
                    }}
                    transition={{ type: "spring", stiffness: 180, damping: 14 }}
                  >
                    D
                  </motion.span>
                </motion.div>
              </div>

              {/* Staggered brand text with subtitle */}
              <div className="flex flex-col justify-center">
                <motion.div 
                  className="flex overflow-hidden"
                  variants={{
                    initial: {},
                    hover: { transition: { staggerChildren: 0.03 } }
                  }}
                >
                  {"DHARMESH".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      className="font-display font-black tracking-[0.03em] text-base sm:text-lg text-white uppercase inline-block"
                      variants={{
                        initial: { y: 0, color: "rgba(255, 255, 255, 1)" },
                        hover: { y: -3, color: "rgba(212, 168, 83, 1)" }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 11 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.span
                  className="font-mono text-[8px] sm:text-[9px] tracking-[0.22em] text-[#F8FAFC]/50 uppercase block -mt-0.5 sm:-mt-1 font-semibold whitespace-nowrap"
                  variants={{
                    initial: { opacity: 0.6, letterSpacing: "0.22em", color: "rgba(248, 252, 250, 0.5)" },
                    hover: { 
                      opacity: 1, 
                      letterSpacing: "0.3em", 
                      color: "rgba(212, 168, 83, 1)" 
                    }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  MARKETING & AI
                </motion.span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links (Visible on xl+ screens where 10 items fit comfortably with generous space) */}
          <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-7" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1.5 py-1.5 text-xs 2xl:text-sm font-mono tracking-wider uppercase transition-colors duration-300 interactive-hover focus:outline-none focus:text-primary whitespace-nowrap ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text-sec hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Gold underline grows left to right */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 hover:w-full"
                      }`}
                      style={{
                        transformOrigin: "left",
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden xl:block shrink-0 ml-4 2xl:ml-8">
            <MagneticButton>
              <Link
                to="/contact"
                className="btn-shine-sweep px-4 2xl:px-5 py-2 2xl:py-2.5 bg-primary text-[#020408] font-mono text-xs uppercase tracking-widest font-bold rounded-lg transition-transform duration-300 inline-block text-center hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] whitespace-nowrap"
              >
                Contact Me
              </Link>
            </MagneticButton>
          </div>

          {/* Hamburger Menu Button (Visible on screens below xl to guarantee 0 overlap) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative p-2.5 rounded-xl border border-primary/25 bg-[#020408]/80 text-primary hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 shrink-0"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer & Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 xl:hidden" id="mobile-nav-drawer">
            {/* Dark Backdrop Overlay with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Slide-out Drawer Panel */}
            <motion.aside
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute top-0 right-0 h-full w-[85%] sm:w-[380px] max-w-sm bg-[#050811]/98 backdrop-blur-2xl border-l border-primary/20 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Drawer Top Header */}
              <div className="p-6 border-b border-primary/15 flex items-center justify-between bg-[#020408]/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                    Available for Work
                  </span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg border border-primary/25 bg-[#0A0E17] text-text-sec hover:text-primary hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Stagger Animation */}
              <div className="px-6 py-6 flex-1">
                <div className="font-mono text-[10px] text-primary/70 uppercase tracking-[0.2em] font-semibold mb-4 px-2">
                  Menu Navigation
                </div>

                <nav className="flex flex-col space-y-2" aria-label="Mobile Site Links">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.25 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `group flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 ${
                            isActive
                              ? "bg-primary/10 border-primary/40 text-primary font-semibold shadow-[0_0_15px_rgba(212,168,83,0.15)]"
                              : "border-transparent text-slate-300 hover:text-white hover:bg-white/[0.04] hover:border-white/10"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-3">
                              <span
                                className={`font-mono text-[11px] transition-colors ${
                                  isActive ? "text-primary font-bold" : "text-slate-500 group-hover:text-primary"
                                }`}
                              >
                                {item.num}
                              </span>
                              <span className="font-display text-base tracking-wide uppercase">
                                {item.label}
                              </span>
                            </div>

                            <ArrowUpRight
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isActive
                                  ? "text-primary opacity-100 translate-x-0"
                                  : "text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              }`}
                            />
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer & Socials */}
              <div className="p-6 border-t border-primary/15 bg-[#020408]/80 space-y-5">
                {/* CTA Action */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-shine-sweep w-full py-3 bg-primary text-[#020408] font-mono text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(212,168,83,0.25)] hover:shadow-[0_0_20px_rgba(212,168,83,0.45)] transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Project / Let's Talk</span>
                </Link>

                {/* Direct Contact Info */}
                <div className="space-y-2 pt-1 font-mono text-xs">
                  <a
                    href="mailto:dk3891315@gmail.com"
                    className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>dk3891315@gmail.com</span>
                  </a>
                  <a
                    href="tel:8287107944"
                    className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent-blue" />
                    <span>+91 8287107944</span>
                  </a>
                </div>

                {/* Social Icon Grid */}
                <div>
                  <div className="font-mono text-[9px] text-[#D4A853] uppercase tracking-widest font-semibold mb-2.5">
                    Connect Across Networks
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {SOCIAL_PLATFORMS.map((platform) => (
                      <a
                        key={platform.id}
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg border border-primary/20 bg-[#0A0E17] flex items-center justify-center text-text-sec hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200"
                        title={`${platform.name} (${platform.handle})`}
                      >
                        <SocialIcon id={platform.id} className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
