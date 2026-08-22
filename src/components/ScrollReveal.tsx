import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  stagger?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  key?: any;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  threshold?: number; // e.g. 0.85 for 85% viewport trigger
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 30,
  x = 0,
  scale = 1,
  stagger = 0,
  className = "",
  as: Tag = "div",
  direction = "up",
  once = true,
  threshold = 0.85,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const TagComp = Tag as any;

  useEffect(() => {
    // Accessibility check: prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      const el = containerRef.current;
      if (el) gsap.set(el, { opacity: 1 });
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const childrenArray = Array.from(el.children);
    
    // Calculate values based on direction and device
    const isMobile = window.innerWidth < 1024;
    let initialY = y;
    let initialX = x;
    
    if (direction === "up") {
      initialY = isMobile ? Math.min(16, y) : y;
      initialX = 0;
    } else if (direction === "down") {
      initialY = isMobile ? -Math.min(16, y) : -y;
      initialX = 0;
    } else if (direction === "left") {
      initialY = 0;
      initialX = isMobile ? Math.min(16, y) : y; // slide from right to left
    } else if (direction === "right") {
      initialY = 0;
      initialX = isMobile ? -Math.min(16, y) : -y; // slide from left to right
    } else if (direction === "none") {
      initialY = 0;
      initialX = 0;
    }

    const finalStagger = isMobile ? stagger * 0.6 : stagger;
    const triggerStart = `top ${Math.round(threshold * 100)}%`;

    if (childrenArray.length === 0) {
      // Fallback if no direct children: animate the container itself
      gsap.set(el, { opacity: 0, y: initialY, x: initialX, scale: scale });
      
      const ctx = gsap.context(() => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: triggerStart,
            once: once,
            toggleActions: "play none none none",
          },
        });
      }, el);

      return () => ctx.revert();
    }

    // Set target elements initial hidden state & make container visible to allow smooth stagger
    gsap.set(childrenArray, { 
      opacity: 0, 
      y: initialY, 
      x: initialX, 
      scale: scale,
      force3D: true // Force GPU rasterization for crisp text during animation
    });
    gsap.set(el, { opacity: 1 });

    const ctx = gsap.context(() => {
      gsap.to(childrenArray, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        stagger: finalStagger > 0 ? finalStagger : undefined,
        scrollTrigger: {
          trigger: el,
          start: triggerStart,
          once: once,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [delay, duration, y, x, scale, stagger, direction, once, threshold]);

  return (
    <TagComp 
      ref={containerRef as any} 
      className={`will-change-transform ${className}`}
    >
      {children}
    </TagComp>
  );
}
