import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { SOCIAL_PLATFORMS, SocialPlatform } from "../data/socialPlatforms";
import { ExternalLink, Check, Copy, Sparkles, Share2 } from "lucide-react";
import MagneticButton from "./MagneticButton";

// Custom SVG Icons for exact brand representation
export const SocialIcon = ({ id, className = "w-5 h-5" }: { id: string; className?: string }) => {
  switch (id) {
    case "linkedin":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63c.9 0 1.63-.73 1.63-1.63s-.73-1.63-1.63-1.63Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
    case "wordpress":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.18-1.85l4.38-12a1.05 1.05 0 0 1 1-.71.94.94 0 0 1 .93.71l2.5 7.74a17.2 17.2 0 0 1-3.63 6.12zm6.27-5.06l-2-5.78 1.39-4.14A8.17 8.17 0 0 1 20.2 12a8.1 8.1 0 0 1-1.93 5.14zM3.8 12a8.1 8.1 0 0 1 2.22-5.53l3.6 10.42A8.16 8.16 0 0 1 3.8 12zm7.1-8.15a8.23 8.23 0 0 1 2.2 0l-2 5.9-2-5.9z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "x-twitter":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "reddit":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.703zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      );
    case "quora":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.016 0C5.396 0 .028 5.368.028 11.988c0 2.428.72 4.69 1.96 6.587L0 23.972l5.727-1.874c1.83 1.157 3.99 1.84 6.289 1.84 6.62 0 11.984-5.367 11.984-11.988C24 5.368 18.636 0 12.016 0zm4.27 15.688c-.687 1.058-1.748 1.62-3.155 1.62-.977 0-1.802-.276-2.474-.827-.671-.55-1.007-1.328-1.007-2.332 0-.964.336-1.737 1.007-2.318.672-.58 1.497-.871 2.474-.871 1.407 0 2.468.563 3.155 1.69v-4.14c-.958-.337-2.019-.506-3.183-.506-2.148 0-3.896.697-5.244 2.091-1.348 1.393-2.022 3.224-2.022 5.492 0 2.247.674 4.078 2.022 5.492 1.348 1.414 3.096 2.121 5.244 2.121 1.164 0 2.225-.169 3.183-.506v-7.006z" />
        </svg>
      );
    default:
      return <Share2 className={className} />;
  }
};

export default function SocialPlatformsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyHandle = (platform: SocialPlatform, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(platform.url);
    setCopiedId(platform.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="socials"
      className="relative py-24 bg-transparent border-t border-border-gold overflow-hidden"
    >
      {/* Ambient background glow & radial highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent-blue/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 text-[#D4A853] font-mono text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
              <span>Connect Everywhere</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Social Media & Network Channels
            </h2>
            <p className="text-sm md:text-base text-text-sec max-w-2xl mx-auto mt-3 font-light">
              Follow my daily updates, growth frameworks, open-source repositories, and AI toolchain breakdowns across all 10 official platforms.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* 10 Social Platforms Grid */}
        <ScrollReveal
          stagger={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5"
        >
          {SOCIAL_PLATFORMS.map((platform) => {
            const isCopied = copiedId === platform.id;

            return (
              <div
                key={platform.id}
                className="group relative rounded-2xl bg-[#0A0E17]/85 border border-[#D4A853]/20 hover:border-[#D4A853]/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(212,168,83,0.15)] backdrop-blur-md overflow-hidden"
              >
                {/* Subtle internal glowing corner aura */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ backgroundColor: platform.color }}
                />

                <div>
                  {/* Top row: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm border border-white/10"
                      style={{
                        backgroundColor: platform.accentBg,
                        color: platform.color === "#FFFFFF" ? "#D4A853" : platform.color,
                      }}
                    >
                      <SocialIcon id={platform.id} className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-sec/80 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded-full">
                      {platform.category}
                    </span>
                  </div>

                  {/* Platform Name & Handle */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors flex items-center gap-1.5">
                    {platform.name}
                  </h3>
                  <p className="font-mono text-xs text-[#8A99AD] mt-0.5 truncate">
                    {platform.handle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-text-sec/80 leading-relaxed font-light mt-3 mb-5 line-clamp-3">
                    {platform.description}
                  </p>
                </div>

                {/* Bottom Actions: Visit Button + Copy Link */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-[#020408] border border-primary/30 hover:border-primary font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-200"
                    title={`Open ${platform.name}`}
                  >
                    <span>{platform.badge}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={(e) => handleCopyHandle(platform, e)}
                    className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-[#D4A853]/20 border border-white/10 hover:border-primary/40 flex items-center justify-center text-text-sec hover:text-primary transition-colors shrink-0"
                    title={isCopied ? "URL Copied!" : "Copy profile link"}
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </ScrollReveal>

        {/* Global Fast Connect Banner */}
        <ScrollReveal className="mt-14">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0A0E17] via-[#0D1322] to-[#0A0E17] border border-[#D4A853]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                Want to Discuss a Project or Collaboration?
              </h3>
              <p className="text-xs sm:text-sm text-text-sec mt-1 max-w-xl font-light">
                Reach out on LinkedIn, DM via X/Instagram, or submit an audit inquiry directly through the contact terminal.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <MagneticButton>
                <a
                  href="https://linkedin.com/in/mr-dharmesh-thakur"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-[#020408] font-mono text-xs uppercase tracking-widest font-extrabold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <SocialIcon id="linkedin" className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="https://github.com/dharmeshthakur9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-primary/40 text-primary font-mono text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-primary/5 hover:border-primary transition-all duration-300"
                >
                  <SocialIcon id="github" className="w-4 h-4" />
                  <span>View GitHub</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
