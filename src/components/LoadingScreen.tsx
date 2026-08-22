import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  isLoading: boolean;
  onFinished: () => void;
}

export default function LoadingScreen({ isLoading, onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(100, prev + diff);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Close loading screen after progress reaches 100%
    if (progress === 100) {
      if (!isLoading) {
        const timeout = setTimeout(() => {
          setShow(false);
          onFinished();
        }, 400); // smooth exit
        return () => clearTimeout(timeout);
      } else {
        // Fallback safety timeout: force dismiss if isLoading remains true (e.g. non-home page refresh or slow video)
        const fallbackTimeout = setTimeout(() => {
          setShow(false);
          onFinished();
        }, 800);
        return () => clearTimeout(fallbackTimeout);
      }
    }
  }, [progress, isLoading, onFinished]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-[#020408] z-[99999] flex flex-col items-center justify-center pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Minimalist circular progress */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Spinning background track */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="54"
                stroke="rgba(212, 168, 83, 0.05)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="54"
                stroke="#D4A853"
                strokeWidth="2"
                fill="none"
                strokeDasharray="339.29"
                strokeDashoffset={339.29 - (339.29 * progress) / 100}
                className="transition-all duration-300 ease-out"
                strokeLinecap="round"
              />
            </svg>

            {/* Glowing Logo Initial */}
            <div className="text-3xl font-display font-bold text-primary tracking-widest relative z-10 drop-shadow-[0_0_15px_rgba(212,168,83,0.4)]">
              D
            </div>
          </div>

          {/* Progress Percent Text */}
          <div className="mt-8 flex flex-col items-center">
            <span className="font-mono text-sm tracking-[0.2em] text-[#A8B3C4]">
              INITIALIZING EXPERIENCE
            </span>
            <span className="font-mono text-xs text-primary mt-2 font-bold tracking-[0.1em]">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
