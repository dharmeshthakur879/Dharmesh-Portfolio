import ScrollReveal from "./ScrollReveal";
import {
  Sparkles,
  TrendingUp,
  Search,
  Key,
  Users,
  PenTool,
  HelpCircle,
  Briefcase,
  Volume2,
  Video,
  Image,
  ShieldCheck,
  Smile,
  Target,
  Cpu,
  Globe,
} from "lucide-react";

export default function Tools() {
  const toolsList = [
    { name: "Google Gemini", url: "https://gemini.google.com", desc: "Conversational Reasoning Engine", icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { name: "Ideogram", url: "https://ideogram.ai", desc: "Generative Typographic Art", icon: <Image className="w-5 h-5 text-primary" /> },
    { name: "Semrush", url: "https://www.semrush.com", desc: "SEO Competitive Intelligence", icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { name: "Ubersuggest", url: "https://neilpatel.com/ubersuggest/", desc: "Keyword Opportunity Analysis", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Google Keyword Planner", url: "https://ads.google.com/home/tools/keyword-planner/", desc: "Search Volume Forecasting", icon: <Key className="w-5 h-5 text-primary" /> },
    { name: "Audience Finder", url: "https://analytics.google.com", desc: "Interest-Based Target Insights", icon: <Users className="w-5 h-5 text-primary" /> },
    { name: "Quillbot", url: "https://quillbot.com", desc: "AI Content Paraphrasing", icon: <PenTool className="w-5 h-5 text-primary" /> },
    { name: "Answer the Public", url: "https://answerthepublic.com", desc: "Consumer Search Intent", icon: <HelpCircle className="w-5 h-5 text-primary" /> },
    { name: "Kwfinder", url: "https://mangools.com/kwfinder/", desc: "Keyword Difficulty Mapping", icon: <Search className="w-5 h-5 text-primary" /> },
    { name: "Odoo", url: "https://www.odoo.com", desc: "Business Operations Workflow", icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { name: "AI Text to Speech", url: "https://elevenlabs.io", desc: "Natural Voice Synthesis", icon: <Volume2 className="w-5 h-5 text-primary" /> },
    { name: "Video to Text Converter AI", url: "https://descript.com", desc: "Automatic Audio Transcription", icon: <Video className="w-5 h-5 text-primary" /> },
    { name: "AI Image Generator", url: "https://midjourney.com", desc: "Generative Graphic Design", icon: <Image className="w-5 h-5 text-primary" /> },
    { name: "AI Detector", url: "https://gptzero.me", desc: "Synthesized Text Verifier", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
    { name: "AI Humanizer", url: "https://undetectable.ai", desc: "Natural Tone Enhancer", icon: <Smile className="w-5 h-5 text-primary" /> },
    { name: "Hidden Audience Finder", url: "https://facebook.com/business", desc: "Niche Group Discovery", icon: <Target className="w-5 h-5 text-primary" /> },
  ];

  const handleOpenTool = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="tools" className="relative py-24 bg-transparent border-y border-border-gold overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              The Stack
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Tools & Technologies
            </h2>
            <p className="mt-2 text-xs font-mono text-primary/80">
              💡 Tip: Double-click any tool to open its official website directly in browser
            </p>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Tools Icon Grid */}
        <ScrollReveal
          stagger={0.06}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {toolsList.map((tool, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenTool(tool.url)}
              onDoubleClick={() => handleOpenTool(tool.url)}
              title={`Double-click to open ${tool.name} official website`}
              className="glass-panel p-4 bg-[#020408]/40 hover:border-primary/40 hover:scale-[1.06] hover:rotate-[1deg] hover:shadow-[0_10px_20px_rgba(212,168,83,0.06)] active:scale-95 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer select-none"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-full bg-[#020408] border border-border-gold flex items-center justify-center mb-3 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <div className="group-hover:text-[#020408] transition-colors duration-300">
                  {tool.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xs text-white group-hover:text-primary transition-colors duration-200">
                {tool.name}
              </h3>
              
              {/* Utility subtitle */}
              <p className="font-mono text-[9px] text-text-sec mt-1 uppercase tracking-widest leading-none">
                {tool.desc.split(" ")[0]}
              </p>
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
