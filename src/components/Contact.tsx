import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { SOCIAL_PLATFORMS } from "../data/socialPlatforms";
import { SocialIcon } from "./SocialPlatformsSection";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Your name is required.";
    
    if (!email.trim()) {
      tempErrors.email = "Your email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!phone.trim()) {
      tempErrors.phone = "Your telephone number is required.";
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(phone.trim())) {
      tempErrors.phone = "Please enter a valid telephone number.";
    }

    if (!message.trim()) {
      tempErrors.message = "A brief campaign description is required.";
    } else if (message.trim().length < 15) {
      tempErrors.message = "Message must be at least 15 characters long.";
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
      // Simulate real-world secure server submission lag
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError("Failed to dispatch campaign request. Please retry or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-semibold">
              Get In Touch
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight">
              Start a Conversation
            </h2>
            <div className="w-12 h-[2px] bg-primary mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Contact details (revealing from left) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal className="h-full">
              <div className="glass-panel p-8 bg-[#020408]/45 border-primary/20 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white mb-2">
                    Direct Campaign Inquiries
                  </h3>
                  <p className="text-xs sm:text-sm text-text-sec leading-relaxed font-light mb-8">
                    Ready to scale organic acquisitions or automate manual tasks? Write directly or use the credentials below to initiate an audit request.
                  </p>

                  {/* Credentials List */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-[#020408] border border-border-gold flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-accent-blue uppercase tracking-widest leading-none">
                          Electronic Mail
                        </span>
                        <a
                          href="mailto:dk3891315@gmail.com"
                          className="text-white hover:text-primary font-mono text-sm mt-1 inline-block transition-colors"
                        >
                          dk3891315@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-[#020408] border border-border-gold flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-accent-blue uppercase tracking-widest leading-none">
                          Direct Line
                        </span>
                        <a
                          href="tel:8287107944"
                          className="text-white hover:text-primary font-mono text-sm mt-1 inline-block transition-colors"
                        >
                          +91 8287107944
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-[#020408] border border-border-gold flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] text-accent-blue uppercase tracking-widest leading-none">
                          Operational HQ
                        </span>
                        <span className="text-white text-sm font-medium mt-1 inline-block">
                          Delhi, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Channels inside contact box */}
                <div className="pt-8 mt-8 border-t border-primary/10">
                  <h4 className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-4 font-semibold">
                    Professional Networks & Channels (10 Platforms)
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

          {/* Right Side: The Form (revealing from right) */}
          <div className="lg:col-span-7">
            <ScrollReveal className="h-full">
              <div className="glass-panel p-8 bg-[#020408]/45 border-primary/20 h-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display font-extrabold text-xl text-white mb-6">
                    Request an Acquisition Audit
                  </h3>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#A8B3C4]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dharmesh"
                      value={name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg bg-[#020408] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
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

                  {/* Email & Phone fields in grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        className={`w-full px-4 py-3 rounded-lg bg-[#020408] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
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
                        Telephone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 8287107944"
                        value={phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-lg bg-[#020408] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
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
                      Audit Specifications & Challenges *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. Please analyze our technical SEO indexing issues and evaluate high CPC lead conversion failures in our Meta Ads funnel."
                      value={message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg bg-[#020408] border text-white text-sm focus:outline-none focus:ring-1 transition-all duration-300 resize-none ${
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

                  {/* Submission Success/Error banners */}
                  {submitSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                      <span>Message Sent Successfully! I will reply to you within 24 hours.</span>
                    </div>
                  )}

                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Magnetic submit button */}
                  <div className="pt-2 flex justify-end">
                    <MagneticButton>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-shine-sweep flex items-center space-x-2 px-7 py-3.5 bg-primary disabled:bg-primary/40 text-[#020408] font-mono text-xs uppercase tracking-widest font-extrabold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Inquiry</span>
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
