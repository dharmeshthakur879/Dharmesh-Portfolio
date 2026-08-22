import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { SOCIAL_PLATFORMS } from "../data/socialPlatforms";
import { SocialIcon } from "./SocialPlatformsSection";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onVideoLoaded: () => void;
}

export default function Hero({ onVideoLoaded }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle Video Autoplay and Loading Lifecycle
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {
          // Autoplay policy fallback: muted video will play on next interaction
        });
      }
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
      onVideoLoaded();
      playVideo();
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleLoadedData);
    video.addEventListener("playing", () => {
      setVideoLoaded(true);
      onVideoLoaded();
    });

    if (video.readyState >= 2) {
      handleLoadedData();
    } else {
      playVideo();
    }

    // Safety fallback
    const timer = setTimeout(() => {
      setVideoLoaded(true);
      onVideoLoaded();
      playVideo();
    }, 1000);

    // Global listener for first user interaction if browser strictly blocks autoplay
    const handleFirstInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
    };
    window.addEventListener("touchstart", handleFirstInteraction, { passive: true });
    window.addEventListener("click", handleFirstInteraction, { passive: true });

    return () => {
      clearTimeout(timer);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleLoadedData);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
    };
  }, [onVideoLoaded]);

  // GSAP Entrance Animations
  useEffect(() => {
    if (!videoLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Set initial states
      gsap.set(
        ["#hero-eyebrow", "#hero-heading", "#hero-desc", "#hero-skills", "#hero-ctas", "#hero-socials"],
        { opacity: 0, y: 30 }
      );

      // Smooth, high-end staggered entrance animation
      tl.to("#hero-eyebrow", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2)
        .to("#hero-heading", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to("#hero-desc", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to("#hero-skills", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to("#hero-ctas", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to("#hero-socials", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, [videoLoaded]);

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center bg-[#020408] pt-40 pb-20 sm:pt-44 lg:pt-48 lg:pb-32"
    >
      {/* Continuous Autoplay Looping Background Video */}
      <video
        ref={videoRef}
        src="/videos/Hero.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
      />

      {/* Cinematic dark overlay to maintain text contrast */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Ambient Hardware-Accelerated Radial Gradients (0% GPU Filter Overhead) */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_70%_70%_at_70%_30%,rgba(212,168,83,0.14),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_60%_60%_at_30%_70%,rgba(226,184,101,0.09),transparent_65%)]" />

      {/* Hero content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        
        {/* Eyebrow */}
        <span
          id="hero-eyebrow"
          className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold opacity-0"
        >
          Hi, I'm Dharmesh
        </span>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6 opacity-0"
        >
          Digital Marketing & <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent-blue">
            AI Tools
          </span>{" "}
          Professional
        </h1>

        {/* Description */}
        <p
          id="hero-desc"
          className="text-base sm:text-lg md:text-xl text-text-sec max-w-2xl leading-relaxed mb-6 opacity-0 font-light"
        >
          Digital Marketing Professional with a foundation in customer service and sales, passionate about helping brands increase visibility, generate leads, and achieve sustainable growth.
        </p>

        {/* Skills */}
        <div
          id="hero-skills"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs md:text-sm text-primary font-mono tracking-widest font-semibold uppercase mb-8 max-w-xl opacity-0"
        >
          <span>SEO</span>
          <span className="text-[#A8B3C4]/30">•</span>
          <span>Meta Ads</span>
          <span className="text-[#A8B3C4]/30">•</span>
          <span>Google Ads</span>
          <span className="text-[#A8B3C4]/30">•</span>
          <span>Social Media</span>
          <span className="text-[#A8B3C4]/30">•</span>
          <span>AI Tools</span>
        </div>

        {/* Call to Actions */}
        <div
          id="hero-ctas"
          className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 z-30"
        >
          <MagneticButton>
            <a
              href="mailto:dk3891315@gmail.com?subject=Job%20Opportunity%20%2F%20Hiring%20Inquiry%20-%20Dharmesh%20Thakur&body=Hi%20Dharmesh%2C%0A%0AI%20reviewed%20your%20Digital%20Marketing%20portfolio%20and%20case%20studies%2C%20and%20we%20would%20like%20to%20discuss%20a%20hiring%20opportunity%20%2F%20project%20with%20you.%0A%0ARole%20%2F%20Project%3A%20%0ACompany%3A%20%0ABest%20Time%20to%20Connect%3A%20%0A%0AThanks%2C%0A"
              className="btn-shine-sweep animate-gold-glow px-8 py-3.5 bg-primary text-[#020408] font-mono text-xs uppercase tracking-widest font-extrabold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 pointer-events-auto flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/Dharmesh_Thakur_Resume.pdf"
              download="Dharmesh_Thakur_Resume.pdf"
              className="px-8 py-3.5 bg-transparent border border-primary/40 text-primary font-mono text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-primary/5 hover:border-primary transition-all duration-300 pointer-events-auto flex items-center justify-center gap-2"
            >
              Download Resume
            </a>
          </MagneticButton>
        </div>

        {/* Social Icons - All 10 Networks */}
        <div
          id="hero-socials"
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 opacity-0 z-30 max-w-2xl mx-auto px-4"
        >
          {SOCIAL_PLATFORMS.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/20 bg-[#0A0E17]/60 backdrop-blur-sm flex items-center justify-center text-text-sec hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(212,168,83,0.25)] hover:scale-110 transition-all duration-300 interactive-hover group"
              title={`${platform.name} (${platform.handle})`}
            >
              <SocialIcon id={platform.id} className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </div>

      </div>

      {/* Floating background objects (Desktop only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Fine wireframe ring */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-primary/10 animate-pulse" style={{ animationDuration: "6s" }} />
        {/* Elegant glass badge */}
        <div className="absolute bottom-[25%] right-[15%] w-24 h-24 rounded-2xl border border-primary/5 bg-white/[0.01] backdrop-blur-sm animate-bounce" style={{ animationDuration: "12s" }} />
        {/* Blue AI pulse dot */}
        <div className="absolute top-[35%] right-[25%] w-3 h-3 bg-accent-blue rounded-full shadow-[0_0_15px_#60A5FA] animate-ping" style={{ animationDuration: "4s" }} />
      </div>

      {/* Pinned Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-text-sec font-mono text-[10px] uppercase tracking-[0.2em] z-20 pointer-events-none">
        <span className="mb-2">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
      </div>
    </div>
  );
}
