import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { GraduationCap, Calendar, Landmark, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Education() {
  const educations = [
    {
      degree: "Master of Arts (M.A.) — English",
      institute: "Indira Gandhi National Open University (IGNOU)",
      year: "01/2018 – 03/2021",
      score: "First Division • 62 / 100",
      location: "Delhi, India",
    },
    {
      degree: "Bachelor of Science (B.Sc.) — Chemistry",
      institute: "Indira Gandhi National Open University (IGNOU)",
      year: "01/2014 – 02/2017",
      score: "First Division • 62 / 100",
      location: "Delhi, India",
    },
    {
      degree: "Senior Secondary (12th)",
      institute: "Central Board of Secondary Education (CBSE)",
      year: "05/2012 – 05/2013",
      score: "67.5% (English, Maths, Physics, Chem, Bio)",
      location: "Delhi, India",
    },
    {
      degree: "Secondary (10th)",
      institute: "Central Board of Secondary Education (CBSE)",
      year: "05/2010 – 04/2011",
      score: "CGPA 8.4 / 10.0",
      location: "Delhi, India",
    },
  ];

  return (
    <section id="education" className="relative py-24 bg-transparent overflow-hidden border-b border-border-gold/30">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              Scholastic History
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Education Credentials
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Education Grid (Stagger fade-up) */}
        <ScrollReveal
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {educations.map((edu, idx) => (
            <TiltCard key={idx} glowColor={idx % 2 === 0 ? "gold" : "blue"} className="p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#020408] border border-border-gold flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-white">
                        {edu.degree}
                      </h3>
                      <span className="flex items-center space-x-1 font-mono text-[10px] text-text-sec mt-1">
                        <Calendar className="w-3.5 h-3.5 text-text-sec/60" />
                        <span>{edu.year}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-white/90 bg-surface border border-border-gold/30 px-3 py-2 rounded-lg mb-3">
                  <Landmark className="w-4 h-4 text-primary shrink-0" />
                  <span className="line-clamp-1">{edu.institute}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-border-gold/15">
                <span className="text-text-sec text-[11px]">{edu.location}</span>
                <span className="text-primary font-bold text-[11px] bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
                  {edu.score}
                </span>
              </div>
            </TiltCard>
          ))}
        </ScrollReveal>

        {/* Link to view Verified Certifications */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/40 hover:bg-primary hover:text-black text-primary font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg"
            >
              <Award className="w-4 h-4" />
              <span>Explore Verified Government Diplomas & Certifications →</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
