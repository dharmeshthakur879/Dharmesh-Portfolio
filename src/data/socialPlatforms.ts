export interface SocialPlatform {
  id: string;
  name: string;
  url: string;
  handle: string;
  category: string;
  description: string;
  badge: string;
  color: string;
  accentBg: string;
  hoverGlow: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/mr-dharmesh-thakur",
    handle: "@mr-dharmesh-thakur",
    category: "Professional Network",
    description: "B2B growth strategies, organic acquisition insights, and executive marketing case studies.",
    badge: "Connect & Network",
    color: "#0A66C2",
    accentBg: "rgba(10, 102, 194, 0.12)",
    hoverGlow: "rgba(10, 102, 194, 0.4)"
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://facebook.com/brainsbehindbucks",
    handle: "@brainsbehindbucks",
    category: "Social Media",
    description: "Meta ads campaigns, community engagement, brand building, and conversion funnels.",
    badge: "Follow Page",
    color: "#1877F2",
    accentBg: "rgba(24, 119, 242, 0.12)",
    hoverGlow: "rgba(24, 119, 242, 0.4)"
  },
  {
    id: "wordpress",
    name: "WordPress",
    url: "http://rankify.rf.gd/",
    handle: "rankify.rf.gd",
    category: "Blogging & Articles",
    description: "In-depth SEO case studies, algorithmic updates, technical audit blueprints, and marketing essays.",
    badge: "Read Articles",
    color: "#21759B",
    accentBg: "rgba(33, 117, 155, 0.12)",
    hoverGlow: "rgba(33, 117, 155, 0.4)"
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/brainsbehindbucks",
    handle: "@brainsbehindbucks",
    category: "Visual Media",
    description: "Visual marketing breakdowns, behind-the-scenes agency reels, and quick actionable growth tips.",
    badge: "Follow @ Instagram",
    color: "#E1306C",
    accentBg: "rgba(225, 48, 108, 0.12)",
    hoverGlow: "rgba(225, 48, 108, 0.4)"
  },
  {
    id: "x-twitter",
    name: "X (Twitter)",
    url: "https://x.com/dharmeshtheo",
    handle: "@dharmeshtheo",
    category: "Microblogging",
    description: "Daily AI toolchain updates, algorithmic search threads, and real-time digital marketing trends.",
    badge: "Follow on X",
    color: "#FFFFFF",
    accentBg: "rgba(255, 255, 255, 0.1)",
    hoverGlow: "rgba(212, 168, 83, 0.4)"
  },
  {
    id: "pinterest",
    name: "Pinterest",
    url: "https://pinterest.com/mrdharmeshthaku",
    handle: "@mrdharmeshthaku",
    category: "Visual Discovery",
    description: "High-converting infographic boards, UI/UX landing page teardowns, and visual funnel templates.",
    badge: "View Pins",
    color: "#E60023",
    accentBg: "rgba(230, 0, 35, 0.12)",
    hoverGlow: "rgba(230, 0, 35, 0.4)"
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com/@HulkCinematicShorts",
    handle: "@HulkCinematicShorts",
    category: "Video Tutorials",
    description: "Step-by-step masterclasses on AI marketing automation, programmatic SEO, and client lead generation.",
    badge: "Subscribe Channel",
    color: "#FF0000",
    accentBg: "rgba(255, 0, 0, 0.12)",
    hoverGlow: "rgba(255, 0, 0, 0.4)"
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/dharmeshthakur9",
    handle: "@dharmeshthakur9",
    category: "Code & Repos",
    description: "Open-source marketing automation scripts, portfolio web applications, and custom Python scrapers.",
    badge: "View Repos",
    color: "#D4A853",
    accentBg: "rgba(212, 168, 83, 0.12)",
    hoverGlow: "rgba(212, 168, 83, 0.5)"
  },
  {
    id: "reddit",
    name: "Reddit",
    url: "https://reddit.com/user/dharmeshthakur9",
    handle: "u/dharmeshthakur9",
    category: "Community Discussions",
    description: "Active contributor in r/SEO, r/marketing, and r/webdev sharing hands-on growth experiments.",
    badge: "Join Discussion",
    color: "#FF4500",
    accentBg: "rgba(255, 69, 0, 0.12)",
    hoverGlow: "rgba(255, 69, 0, 0.4)"
  },
  {
    id: "quora",
    name: "Quora",
    url: "https://quora.com/profile/Dharmesh-Thakur-47",
    handle: "q/Dharmesh-Thakur-47",
    category: "Knowledge & Answers",
    description: "Authoritative answers on organic search rank recovery, Google penalty resolutions, and AI toolchains.",
    badge: "Read Answers",
    color: "#B92B27",
    accentBg: "rgba(185, 43, 39, 0.12)",
    hoverGlow: "rgba(185, 43, 39, 0.4)"
  }
];
