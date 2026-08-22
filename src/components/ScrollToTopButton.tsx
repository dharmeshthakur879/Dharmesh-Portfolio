import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Show after scrolling past hero section (approx 380px)
      if (currentScroll > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate SVG circle stroke properties for the progress ring
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 pointer-events-auto"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="group relative w-12 h-12 rounded-full bg-[#020408]/90 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(212,168,83,0.45)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {/* Circular SVG Scroll Progress Indicator */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
              viewBox="0 0 44 44"
            >
              {/* Background Track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-primary/15"
                strokeWidth="2"
                fill="transparent"
              />
              {/* Active Progress Track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-primary transition-all duration-150"
                strokeWidth="2.2"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Subtle radial ambient glow on hover */}
            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 blur-sm pointer-events-none" />

            {/* Up Arrow Icon with hover bounce */}
            <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />

            {/* Subtle Tooltip */}
            <span className="absolute bottom-full mb-2.5 hidden group-hover:block px-2.5 py-1 rounded-md bg-[#0A0E17]/95 border border-primary/30 text-[10px] font-mono text-primary uppercase tracking-widest whitespace-nowrap shadow-lg pointer-events-none transition-all duration-200">
              Top • {Math.round(scrollProgress)}%
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
