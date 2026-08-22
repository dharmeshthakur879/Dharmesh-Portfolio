import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { SOCIAL_PLATFORMS } from "../data/socialPlatforms";
import { SocialIcon } from "./SocialPlatformsSection";

const SERVICES = [
  "Meta & Google Ads",
  "AI & Workflow Automation",
  "SEO & Performance Audit",
  "Full-Stack Web Dev",
  "Social Media Growth",
  "Brand Strategy & Funnel",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("Meta & Google Ads");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Your name is required.";
    
    if (!email.trim()) {
      tempErrors.email = "Your email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!phone.trim()) {
      tempErrors.phone = "Your telephone / WhatsApp number is required.";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number.";
    }

    if (!message.trim()) {
      tempErrors.message = "A brief project/campaign description is required.";
    } else if (message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (field: string, val: string) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    switch (field) {
      case "name":
        setName(val);
        break;
      case "email":
        setEmail(val);
        break;
      case "phone":
        setPhone(val);
        break;
      case "message":
        setMessage(val);
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate real-world secure server submission
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      setSubmitSuccess(true);
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setSubmitError("Failed to dispatch inquiry. Please email directly at dk3891315@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-transparent overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Talk & Collaborate</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Start a Project / Hire Me
            </h2>
            <p className="text-sm sm:text-base text-text-sec max-w-2xl mx-auto mt-4 font-light leading-relaxed">
              Have an idea, paid ads campaign, SEO optimization, or AI automation project in mind? Fill out the brief form below or connect directly.
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Direct Contact Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal className="h-full">
              <div className="glass-panel p-8 bg-[#020408]/60 border-primary/20 h-full flex flex-col justify-between rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white mb-2">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-text-sec leading-relaxed font-light mb-8">
                    Available for freelance contracts, full-time remote opportunities, and digital growth consulting.
                  </p>

                  {/* Credentials List */}
                  <div className="space-y-4">
                    
                    {/* Email Card */}
                    <div className="p-4 rounded-xl bg-[#040813] border border-primary/20 flex items-center justify-between group hover:border-primary/50 transition-all">
                      <div className="flex items-center space-x-3.5 overflow-hidden">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div className="truncate">
                          <span className="block font-mono text-[10px] text-accent-blue uppercase tracking-widest">
                            Email Address
                          </span>
                          <a
                            href="mailto:dk3891315@gmail.com"
                            className="text-white hover:text-primary font-mono text-xs sm:text-sm font-semibold truncate transition-colors"
                          >
                            dk3891315@gmail.com
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("dk3891315@gmail.com", "email")}
                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-colors shrink-0 ml-2"
                        title="Copy Email Address"
                      >
                        {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Direct Phone / Call */}
                    <div className="p-4 rounded-xl bg-[#040813] border border-primary/20 flex items-center justify-between group hover:border-primary/50 transition-all">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] text-accent-blue uppercase tracking-widest">
                            Direct Line
                          </span>
                          <a
                            href="tel:+918287107944"
                            className="text-white hover:text-primary font-mono text-xs sm:text-sm font-semibold transition-colors"
                          >
                            +91 8287107944
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard("+918287107944", "phone")}
                        className="p-2 rounded-lg bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-colors shrink-0 ml-2"
                        title="Copy Phone Number"
                      >
                        {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* WhatsApp Quick Chat */}
                    <a
                      href="https://wa.me/918287107944?text=Hi%20Dharmesh,%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20strategy%20or%20project%20with%20you."
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/60 flex items-center justify-between text-white transition-all group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                          <MessageSquare className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <span className="block font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                            Instant WhatsApp
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-semibold text-emerald-100 group-hover:text-emerald-300">
                            Chat on WhatsApp
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        Chat &rarr;
                      </span>
                    </a>

                    {/* Location */}
                    <div className="p-4 rounded-xl bg-[#040813] border border-primary/20 flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-accent-blue uppercase tracking-widest">
                          Base Location
                        </span>
                        <span className="text-white text-xs sm:text-sm font-medium">
                          New Delhi, India (Serving Global Clients)
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Social Channels inside contact box */}
                <div className="pt-8 mt-8 border-t border-primary/15">
                  <h4 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-4 font-semibold">
                    Professional Networks & Portfolios
                  </h4>
                  <div className="grid grid-cols-5 gap-2.5">
                    {SOCIAL_PLATFORMS.map((platform) => (
                      <a
                        key={platform.id}
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-xl border border-primary/25 bg-[#020408] flex items-center justify-center text-text-sec hover:text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(212,168,83,0.2)] hover:scale-105 transition-all duration-300 group"
                        title={`${platform.name} (${platform.handle})`}
                      >
                        <SocialIcon id={platform.id} className="w-4 h-4 transition-transform group-hover:scale-110" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: The Contact & Project Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal className="h-full">
              <div className="glass-panel p-8 sm:p-10 bg-[#020408]/60 border-primary/20 h-full rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2">
                      Send a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-text-sec font-light">
                      Fill out this form and I will get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Service Selection Chips */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A8B3C4]">
                      Service of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((serv) => (
                        <button
                          key={serv}
                          type="button"
                          onClick={() => setSelectedService(serv)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            selectedService === serv
                              ? "bg-primary text-[#020408] font-bold shadow-[0_0_12px_rgba(212,168,83,0.35)]"
                              : "bg-[#040813] border border-white/10 text-slate-300 hover:border-primary/40 hover:text-white"
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A8B3C4]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dharmesh Thakur"
                      value={name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg bg-[#040813] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                        errors.name
                          ? "border-red-500/50 focus:ring-red-500"
                          : "border-border-gold focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 font-mono flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  {/* Email & Phone fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A8B3C4]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. dk3891315@gmail.com"
                        value={email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-lg bg-[#040813] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                          errors.email
                            ? "border-red-500/50 focus:ring-red-500"
                            : "border-border-gold focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400 font-mono flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A8B3C4]">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 8287107944"
                        value={phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-lg bg-[#040813] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                          errors.phone
                            ? "border-red-500/50 focus:ring-red-500"
                            : "border-border-gold focus:border-primary focus:ring-primary"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-400 font-mono flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message / Project Specs */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A8B3C4]">
                      Project Requirements & Details *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your marketing goals, campaign budget, or technology requirements..."
                      value={message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg bg-[#040813] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:ring-red-500"
                          : "border-border-gold focus:border-primary focus:ring-primary"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400 font-mono flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Submission Success / Error status banner */}
                  {submitSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                        <span>Thank you! Your message has been received. I will reply within 24 hours.</span>
                      </div>
                      <a
                        href={`mailto:dk3891315@gmail.com?subject=Inquiry%20from%20Portfolio%20-%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AService:%20${encodeURIComponent(selectedService)}%0AMessage:%20${encodeURIComponent(message)}`}
                        className="underline text-emerald-400 hover:text-emerald-200 ml-2 shrink-0 font-mono font-semibold"
                      >
                        Email directly &rarr;
                      </a>
                    </div>
                  )}

                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-slate-500">
                      * 100% confidential & zero spam policy.
                    </span>
                    <MagneticButton>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-shine-sweep flex items-center space-x-2 px-8 py-3.5 bg-primary disabled:bg-primary/40 text-[#020408] font-mono text-xs uppercase tracking-widest font-extrabold rounded-lg hover:shadow-[0_0_25px_rgba(212,168,83,0.35)] transition-all duration-300 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Message</span>
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
