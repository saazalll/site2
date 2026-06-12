"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      // Reset state after closing animation
      setTimeout(() => setSubmitted(false), 500);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-[60]"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-elevated w-full max-w-[520px] p-8 md:p-12 relative pointer-events-auto border border-border"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-8 h-8 rounded-full border border-border flex items-center justify-center text-textMuted hover:text-textPrimary hover:border-textPrimary transition-colors duration-200"
              >
                <X size={14} />
              </button>

              {submitted ? (
                /* Thank You State */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6">
                    <Check size={20} className="text-accent" />
                  </div>
                  <h3 className="text-display text-h3 font-serif text-textPrimary mb-2">We'll be in touch.</h3>
                  <p className="text-textMuted text-small">Thank you for reaching out.</p>
                </motion.div>
              ) : (
                /* Form State */
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-10">
                    <span className="text-[10px] tracking-[0.22em] uppercase text-textMuted mb-4 block">
                      Tell us more
                    </span>
                    <h2 className="text-display font-serif text-textPrimary mb-3 leading-[1.08] text-[clamp(28px,3.5vw,40px)] font-light tracking-[-0.02em]">
                      What are you envisioning?
                    </h2>
                    <p className="text-[14px] text-textMuted leading-[1.7]">
                      Share any details — we'll reach out to discuss.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-8">
                      <label className="text-[10px] tracking-[0.22em] uppercase text-textMuted mb-4 block">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-border pb-3 text-textPrimary placeholder:text-textMuted text-sm tracking-wide focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="mb-8">
                      <label className="text-[10px] tracking-[0.22em] uppercase text-textMuted mb-4 block">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-border pb-3 text-textPrimary placeholder:text-textMuted text-sm tracking-wide focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="mb-10">
                      <label className="text-[10px] tracking-[0.22em] uppercase text-textMuted mb-4 block">
                        Project Vision
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Anything from a rough idea to a full brief — location, mood, timeline..."
                        className="w-full bg-transparent border-b border-border pb-3 text-textPrimary placeholder:text-textMuted text-sm tracking-wide focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-textPrimary text-primary py-4 text-[11px] tracking-[0.22em] uppercase font-medium hover:opacity-90 transition-opacity"
                    >
                      Submit
                    </button>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
