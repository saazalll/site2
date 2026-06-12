"use client";

import { useState } from "react";
import Image from "next/image";
import RevealLine from "@/components/ui/RevealLine";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import LeadCaptureModal from "@/components/ui/LeadCaptureModal";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [projectType, setProjectType] = useState<string>("");
  const [showLeadModal, setShowLeadModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  const handlePillClick = (type: string) => {
    if (type === "Other") {
      setShowLeadModal(true);
    } else {
      setProjectType(type);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-primary pt-[var(--space-3xl)] pb-0">
        
        <div className="container mx-auto px-6 md:px-10 max-w-screen-xl mb-[var(--space-3xl)] grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h1 className="text-display font-serif mb-12 text-textPrimary">
                <RevealLine>Let's work</RevealLine>
                <RevealLine delay={0.1}>together.</RevealLine>
              </h1>
              <Reveal delay={0.3}>
                <p className="text-textSecondary text-body max-w-sm mb-16">
                  Currently accepting select commissions.<br/>
                  Share your vision, timeline, and location — we'll take it from there.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div className="flex flex-col space-y-8 pb-8 md:pb-0 border-b border-border md:border-none">
                <div>
                  <span className="text-eyebrow text-textMuted block mb-2">Direct Inquiries</span>
                  <a href="mailto:studio@example.com" className="text-h3 font-serif hover:text-accent transition-colors text-textPrimary">
                    studio@example.com
                  </a>
                </div>
                <div>
                  <span className="text-eyebrow text-textMuted block mb-2">Telephone</span>
                  <a href="tel:+442071234567" className="text-h3 font-serif hover:text-accent transition-colors text-textPrimary">
                    +44 20 7123 4567
                  </a>
                </div>
                <div>
                  <span className="text-eyebrow text-textMuted block mb-2">Studio Location</span>
                  <span className="text-h3 font-serif text-textSecondary">
                    London, United Kingdom
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 lg:pl-16">
            <Reveal delay={0.4}>
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col justify-center items-center text-center py-[var(--space-xl)] bg-secondary border border-border"
                  >
                    <span className="text-h2 font-serif text-accent mb-6 block">Thank You.</span>
                    <p className="text-textSecondary text-body max-w-md">
                      Your inquiry has been received. I review all messages personally and will respond within 48 hours to discuss your project in detail.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-eyebrow text-textMuted mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="bg-transparent border-b border-border py-4 text-textPrimary focus:outline-none focus:border-accent transition-colors text-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-eyebrow text-textMuted mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          className="bg-transparent border-b border-border py-4 text-textPrimary focus:outline-none focus:border-accent transition-colors text-body"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-eyebrow text-textMuted mb-4">Project Type</label>
                      <div className="flex flex-wrap gap-3">
                        {["Portrait", "Commercial", "Documentary", "Event", "Other"].map((type) => {
                          const isOther = type === "Other";
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => handlePillClick(type)}
                              className={`px-6 py-3 rounded-full text-[11px] uppercase tracking-widest border transition-all duration-300 font-medium ${
                                projectType === type 
                                  ? "bg-accent border-accent text-white" 
                                  : isOther
                                    ? "border-border text-textMuted hover:ring-1 hover:ring-accent cursor-pointer"
                                    : "border-border text-textMuted hover:border-textMuted"
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-eyebrow text-textMuted mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        required
                        placeholder="Please include timeline, location, and project details..."
                        className="bg-transparent border-b border-border py-4 text-textPrimary focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-textMuted text-body"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="self-start px-12 py-5 bg-textPrimary text-primary font-medium text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity duration-500 rounded-sm disabled:opacity-50"
                    >
                      {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>
        </div>

        {/* Horizontal Image Strip */}
        <div className="w-full aspect-[21/9] flex bg-primary">
          {projects.slice(0, 4).map((project, i) => (
            <div key={i} className="relative h-full flex-1 border-r border-primary last:border-none group bg-secondary">
              <Image
                src={project.heroImage}
                alt="Highlight"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=80";
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <LeadCaptureModal isOpen={showLeadModal} onClose={() => setShowLeadModal(false)} />
    </>
  );
}
