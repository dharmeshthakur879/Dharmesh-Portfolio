import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { Search, Globe, Mail, Users, Compass, Bot, Code, Cpu, Database, Award, BarChart, PenTool, Video, ShoppingBag, TrendingUp, FileText, Settings } from "lucide-react";

interface SkillData {
  name: string;
  level: "Lead Specialist" | "Expert Practitioner" | "Advanced Developer" | "Architect" | "Certified Expert" | "Intermediate";
  icon: React.ReactNode;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"marketing" | "tech" | "tools">("marketing");

  const marketingSkills: SkillData[] = [
    { name: "Search Engine Optimization (SEO)", level: "Lead Specialist", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Local SEO & GMB Opt", level: "Expert Practitioner", icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "Technical SEO & Schema", level: "Expert Practitioner", icon: <Code className="w-5 h-5 text-primary" /> },
    { name: "Meta Ads (Facebook/Instagram)", level: "Lead Specialist", icon: <Users className="w-5 h-5 text-primary" /> },
    { name: "Google Search & Display Ads", level: "Lead Specialist", icon: <BarChart className="w-5 h-5 text-primary" /> },
    { name: "Website Development (Wordpress)", level: "Expert Practitioner", icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "Social Media Marketing", level: "Lead Specialist", icon: <Users className="w-5 h-5 text-primary" /> },
    { name: "Youtube Marketing", level: "Lead Specialist", icon: <Video className="w-5 h-5 text-primary" /> },
    { name: "E-Commerce", level: "Expert Practitioner", icon: <ShoppingBag className="w-5 h-5 text-primary" /> },
    { name: "Affiliate Marketing", level: "Expert Practitioner", icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { name: "Lead Generation Architectures", level: "Architect", icon: <Bot className="w-5 h-5 text-primary" /> },
    { name: "Content Marketing & Strategy", level: "Expert Practitioner", icon: <PenTool className="w-5 h-5 text-primary" /> },
    { name: "Email Marketing Automations", level: "Certified Expert", icon: <Mail className="w-5 h-5 text-primary" /> },
  ];

  const techSkills: SkillData[] = [
    { name: "WordPress Core & Custom Development", level: "Advanced Developer", icon: <Code className="w-5 h-5 text-accent-blue" /> },
    { name: "React Web Applications", level: "Advanced Developer", icon: <Code className="w-5 h-5 text-accent-blue" /> },
  ];

  const toolSkills: SkillData[] = [
    { name: "Google Search Console", level: "Certified Expert", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Google Forms", level: "Expert Practitioner", icon: <FileText className="w-5 h-5 text-primary" /> },
    { name: "SEMrush SEO Suite", level: "Lead Specialist", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Small SEO Tools", level: "Expert Practitioner", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "QuillBot AI Paraphraser", level: "Expert Practitioner", icon: <FileText className="w-5 h-5 text-primary" /> },
    { name: "Wordable Content Export", level: "Expert Practitioner", icon: <FileText className="w-5 h-5 text-primary" /> },
    { name: "GoDaddy DNS & Hosting", level: "Expert Practitioner", icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "SEO Shope Platforms", level: "Expert Practitioner", icon: <ShoppingBag className="w-5 h-5 text-primary" /> },
    { name: "WordPress Core CMS", level: "Expert Practitioner", icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "Free Logo Service", level: "Expert Practitioner", icon: <PenTool className="w-5 h-5 text-primary" /> },
    { name: "Canva.com Pro Suite", level: "Expert Practitioner", icon: <PenTool className="w-5 h-5 text-primary" /> },
    { name: "Google Trends Explorer", level: "Expert Practitioner", icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { name: "PeoplePerHour Freelancing", level: "Expert Practitioner", icon: <Users className="w-5 h-5 text-primary" /> },
    { name: "Grammarly Editor", level: "Expert Practitioner", icon: <FileText className="w-5 h-5 text-primary" /> },
    { name: "Mailchimp Marketing", level: "Certified Expert", icon: <Mail className="w-5 h-5 text-primary" /> },
    { name: "SEO Adda Toolset", level: "Expert Practitioner", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Google AdWords (Google Ads)", level: "Lead Specialist", icon: <BarChart className="w-5 h-5 text-primary" /> },
    { name: "XML Sitemap Generators", level: "Expert Practitioner", icon: <Settings className="w-5 h-5 text-primary" /> },
    { name: "Google Analytics (GA4)", level: "Certified Expert", icon: <BarChart className="w-5 h-5 text-primary" /> },
    { name: "ActiveCampaign CRM", level: "Certified Expert", icon: <Mail className="w-5 h-5 text-primary" /> },
    { name: "Search Engine Land Portal", level: "Expert Practitioner", icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "Omnisend Email Systems", level: "Certified Expert", icon: <Mail className="w-5 h-5 text-primary" /> },
    { name: "Ubersuggest Keyword Tool", level: "Expert Practitioner", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Google My Business (GMB)", level: "Lead Specialist", icon: <Globe className="w-5 h-5 text-primary" /> },
    { name: "All in One SEO Plugin", level: "Expert Practitioner", icon: <Settings className="w-5 h-5 text-primary" /> },
    { name: "Boomerang for Gmail", level: "Expert Practitioner", icon: <Mail className="w-5 h-5 text-primary" /> },
    { name: "Free Article Spinner", level: "Expert Practitioner", icon: <FileText className="w-5 h-5 text-primary" /> },
    { name: "AI Background Remover", level: "Expert Practitioner", icon: <PenTool className="w-5 h-5 text-primary" /> },
    { name: "Google Keyword Planner", level: "Certified Expert", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Facebook Audience Insights", level: "Lead Specialist", icon: <Users className="w-5 h-5 text-primary" /> },
    { name: "Figma UI/UX Prototyping", level: "Advanced Developer", icon: <PenTool className="w-5 h-5 text-primary" /> },
    { name: "ChatGPT & Prompt Design", level: "Architect", icon: <Bot className="w-5 h-5 text-primary" /> },
    { name: "Gemini API Integrations", level: "Architect", icon: <Cpu className="w-5 h-5 text-primary" /> },
  ];

  const getSkillsList = () => {
    switch (activeCategory) {
      case "marketing":
        return marketingSkills;
      case "tech":
        return techSkills;
      case "tools":
        return toolSkills;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-transparent border-y border-border-gold overflow-hidden">
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              Core Capabilities
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Professional Skillset
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Tab Controls */}
        <ScrollReveal className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-[#020408] p-1.5 border border-border-gold max-w-full overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveCategory("marketing")}
              className={`px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === "marketing"
                  ? "bg-primary text-[#020408] shadow-md"
                  : "text-[#A8B3C4] hover:text-white"
              }`}
            >
              Digital Marketing
            </button>
            <button
              onClick={() => setActiveCategory("tech")}
              className={`px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === "tech"
                  ? "bg-primary text-[#020408] shadow-md"
                  : "text-[#A8B3C4] hover:text-white"
              }`}
            >
              Tech & AI Tools
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={`px-6 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === "tools"
                  ? "bg-primary text-[#020408] shadow-md"
                  : "text-[#A8B3C4] hover:text-white"
              }`}
            >
              Marketing Tools
            </button>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <ScrollReveal
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getSkillsList().map((skill, index) => (
            <TiltCard
              key={`${activeCategory}-${index}`}
              glowColor={activeCategory === "tech" ? "blue" : "gold"}
              className="group hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-start justify-between space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#020408] border border-border-gold flex items-center justify-center group-hover:scale-105 group-hover:border-primary transition-all duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-white group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="font-mono text-[10px] text-accent-blue tracking-wider uppercase mt-1 inline-block">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* High-end decorative visual indicator for strengths (replaces fake numbers) */}
              <div className="mt-5 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-text-sec uppercase tracking-widest">
                  <span>Proficiency Rating</span>
                  <span className="text-primary font-bold">Validated</span>
                </div>
                <div className="h-1 bg-[#020408] rounded-full overflow-hidden flex space-x-0.5">
                  <div className="h-full w-1/4 bg-primary" />
                  <div className="h-full w-1/4 bg-primary" />
                  <div className="h-full w-1/4 bg-primary" />
                  <div
                    className={`h-full w-1/4 ${
                      skill.level === "Intermediate" ? "bg-[#020408]" : "bg-primary"
                    }`}
                  />
                </div>
              </div>
            </TiltCard>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
