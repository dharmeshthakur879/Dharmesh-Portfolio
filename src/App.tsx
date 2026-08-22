import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { HashRouter, Routes, Route } from "react-router-dom";

// Import custom layout & static components
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";

// Lazy load pages for lightning-fast initial load & code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const AppsSaas = lazy(() => import("./pages/AppsSaas"));
const WebDev = lazy(() => import("./pages/WebDev"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectPreviews = lazy(() => import("./pages/ProjectPreviews"));
const Tools = lazy(() => import("./pages/Tools"));
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));
const Contact = lazy(() => import("./pages/Contact"));

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

// Route fallback loader
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-amber-400/20 border-t-amber-400 rounded-full animate-spin" />
        <span className="text-xs text-slate-400 font-mono tracking-wider uppercase">Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  const [videoLoading, setVideoLoading] = useState(true);

  // Safety fallback: ensure videoLoading resolves within 1.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis smooth scroll with optimal performance tuning
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const gsapTickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(gsapTickerCallback);
    gsap.ticker.lagSmoothing(500, 33); // Optimize frame catch-up to prevent stutter across multi-tabs

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTickerCallback);
    };
  }, []);

  const handleHeroLoaded = useCallback(() => {
    setVideoLoading(false);
  }, []);

  const handleLoaderFinished = () => {
    // Smooth transition callback
  };

  return (
    <div className="relative min-h-screen bg-[#020408] text-[#F8FAFC] antialiased font-sans">
      {/* Background fine noise texture */}
      <div className="noise-overlay" />

      {/* Subtle grey-dots background pattern */}
      <div className="dots-overlay" />

      {/* Luxury black marble & liquid gold fluid vein pattern */}
      <div className="marble-gold-overlay" />

      {/* Luxury floating gold star-dust/glitter sparkles overlay */}
      <div className="gold-dust-overlay" />

      {/* Loader screen */}
      <LoadingScreen isLoading={videoLoading} onFinished={handleLoaderFinished} />

      <HashRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home onVideoLoaded={handleHeroLoaded} />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/apps-saas" element={<AppsSaas />} />
              <Route path="/web-dev" element={<WebDev />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/pp" element={<ProjectPreviews />} />
              <Route path="/project-previews" element={<ProjectPreviews />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/lets-talk" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}
