import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "I specialize in comprehensive search engine optimization (Technical, Local, and On-Page SEO), conversion rate audits, and Meta / Google Ads acquisition funnel management. Additionally, I build custom AI tool pipelines and no-code data integrations (such as ChatGPT/Gemini API endpoints) to optimize workspace efficiencies.",
    },
    {
      question: "What is your work process?",
      answer: "My blueprint begins with extensive Discovery and competitive Keyword Research. I then formulate a comprehensive Execution roadmap including cluster content maps and ad parameters. Once deployed, I continuously Audit and optimize landing layouts and tracking configurations, delivering clear and data-honest ROI reporting.",
    },
    {
      question: "Are you available for freelance work?",
      answer: "Yes, I am available for selected freelance consulting, technical audit contracts, and ongoing agency campaigns. I welcome discussions with brand managers and recruiters seeking dedicated growth engineering.",
    },
    {
      question: "How can I contact you?",
      answer: "You can reach out directly via the professional contact form below or email me directly at dk3891315@gmail.com. For urgent inquiries, you can call my base line at +91 8287107944. I look forward to exploring collaboration paths.",
    },
    {
      question: "What timeline should I expect?",
      answer: "A standard landing optimization or pixel tracking sprint typically spans 1 to 2 weeks. Comprehensive organic SEO audits or complex automated pipeline deployments are custom scoped, usually taking between 3 to 6 weeks to ensure deep integration and high fidelity.",
    },
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              Inquiries
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Accordion Group (Stagger fade-up reveal) */}
        <ScrollReveal stagger={0.1} className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-panel overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary bg-[#020408]/70 shadow-lg shadow-primary/5"
                    : "hover:border-primary/30"
                }`}
              >
                {/* Accordion Header (Clickable) */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-primary" : "text-text-sec"}`} />
                    <span className="font-display font-semibold text-sm sm:text-base text-white hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  
                  {/* Arrow rotation */}
                  <ChevronDown
                    className={`w-5 h-5 text-[#A8B3C4] transition-transform duration-300 shrink-0 ${
                      isOpen ? "transform rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {/* Accordion Body with smooth Height transitions */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-primary/5">
                        <p className="text-xs sm:text-sm text-text-sec leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </ScrollReveal>

      </div>
    </section>
  );
}
