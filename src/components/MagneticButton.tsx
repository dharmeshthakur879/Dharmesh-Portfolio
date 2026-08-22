import React, { useRef, useEffect } from "react";

interface MagneticButtonProps {
  children: React.ReactElement;
  range?: number; // Distance from button to trigger magnetic effect
}

export default function MagneticButton({ children, range = 40 }: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Only apply on desktop / non-touch
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      const child = el.firstElementChild as HTMLElement;
      if (!child) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Calculate distance
      const distance = Math.sqrt(x * x + y * y);

      if (distance < range) {
        // Pull button towards cursor (max 8px)
        const strength = 0.35;
        const targetX = x * strength;
        const targetY = y * strength;

        child.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(1.02)`;
        child.style.transition = "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)";
      } else {
        // Reset
        child.style.transform = "translate3d(0px, 0px, 0px)";
        child.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
      }
    };

    const onMouseLeave = () => {
      const child = el.firstElementChild as HTMLElement;
      if (!child) return;
      child.style.transform = "translate3d(0px, 0px, 0px)";
      child.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [range]);

  return (
    <div ref={containerRef} className="inline-block">
      {children}
    </div>
  );
}
