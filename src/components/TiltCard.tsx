import React, { useRef, useEffect, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "gold" | "blue";
  id?: string;
  key?: any;
}

export default function TiltCard({ children, className = "", glowColor = "gold", id }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const el = cardRef.current;
    if (!el) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      // Calculate mouse position relative to the card center, normalized from -1 to 1
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const normX = x / (rect.width / 2);
      const normY = y / (rect.height / 2);

      // Throttling with requestAnimationFrame
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const maxRotate = 5; // Max tilt degrees
        const rotX = -normY * maxRotate;
        const rotY = normX * maxRotate;

        el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.015)`;
        el.style.borderColor = "rgba(212, 168, 83, 0.45)";
        
        // Dynamic soft glow
        const shadowColor = glowColor === "blue" ? "rgba(226, 184, 101, 0.28)" : "rgba(212, 168, 83, 0.25)";
        el.style.boxShadow = `0 20px 40px -10px rgba(2, 4, 8, 0.95), 0 0 25px 0 ${shadowColor}`;
      });
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
        el.style.borderColor = "rgba(212, 168, 83, 0.16)";
        el.style.boxShadow = "0 10px 30px -10px rgba(2, 4, 8, 0.85)";
      });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile, glowColor]);

  // Render on mobile with simple CSS transitions, and desktop with 3D transform-style
  return (
    <div
      ref={cardRef}
      id={id}
      className={`glass-panel p-6 select-none transition-all duration-300 ease-out transform-style-3d ${
        isMobile ? "hover:-translate-y-[6px] hover:border-primary/40 active:translate-y-[-3px]" : ""
      } ${className}`}
      style={{
        transformStyle: isMobile ? "flat" : "preserve-3d",
        transition: isMobile ? "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease" : "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {children}
    </div>
  );
}
