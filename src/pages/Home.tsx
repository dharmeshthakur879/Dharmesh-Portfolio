import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import WhyHireMe from "../components/WhyHireMe";
import AppsSaasSection from "../components/AppsSaasSection";
import WebDevTeaser from "../components/WebDevTeaser";
import CaseStudyTeaser from "../components/CaseStudyTeaser";
import ProjectPreviewsSection from "../components/ProjectPreviewsSection";
import WorkProcess from "../components/WorkProcess";
import Certificates from "../components/Certificates";
import SocialPlatformsSection from "../components/SocialPlatformsSection";
import Resume from "../components/Resume";
import FAQ from "../components/FAQ";
import SectionReveal from "../components/SectionReveal";

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  onVideoLoaded: () => void;
}

export default function Home({ onVideoLoaded }: HomeProps) {
  useEffect(() => {
    // Refresh ScrollTrigger positions after initial layout settles
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-y-6 sm:gap-y-10">
      {/* Scroll-driven Video Hero */}
      <Hero onVideoLoaded={onVideoLoaded} />

      {/* Professional Value Cards */}
      <SectionReveal>
        <WhyHireMe />
      </SectionReveal>

      {/* Dedicated Apps & SaaS Showcase Section */}
      <SectionReveal>
        <AppsSaasSection />
      </SectionReveal>

      {/* Featured Live Web Projects */}
      <SectionReveal>
        <WebDevTeaser />
      </SectionReveal>

      {/* Featured Digital Marketing Case Studies */}
      <SectionReveal>
        <CaseStudyTeaser />
      </SectionReveal>

      {/* Dedicated Project Previews (PP) Showcase */}
      <SectionReveal>
        <ProjectPreviewsSection />
      </SectionReveal>

      {/* Scroll-scrub Blueprint Flow */}
      <SectionReveal>
        <WorkProcess />
      </SectionReveal>

      {/* Verified Government-Registered & ISO Certificates */}
      <SectionReveal>
        <Certificates />
      </SectionReveal>

      {/* Official Social Media & Network Channels */}
      <SectionReveal>
        <SocialPlatformsSection />
      </SectionReveal>

      {/* Resume Call-to-Actions */}
      <SectionReveal>
        <Resume />
      </SectionReveal>

      {/* Accordion FAQ Panel */}
      <SectionReveal>
        <FAQ />
      </SectionReveal>
    </div>
  );
}
