import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  threshold?: number; // 0.88 = top 88% of viewport
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  yOffset = 36,
  threshold = 0.88,
}: SectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Check accessibility: prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const isMobile = window.innerWidth < 768;
    const initialY = isMobile ? Math.min(20, yOffset) : yOffset;

    // Check if element is already within viewport on initial render
    const rect = el.getBoundingClientRect();
    const isAlreadyInViewport = rect.top < window.innerHeight * threshold;

    if (isAlreadyInViewport) {
      gsap.fromTo(
        el,
        { opacity: 0, y: initialY },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          force3D: true,
        }
      );
      return;
    }

    // Set initial hidden state with subtle downward offset
    gsap.set(el, {
      opacity: 0,
      y: initialY,
      force3D: true,
    });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: `top ${Math.round(threshold * 100)}%`,
          once: true,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [delay, duration, yOffset, threshold]);

  return (
    <div
      ref={sectionRef}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
