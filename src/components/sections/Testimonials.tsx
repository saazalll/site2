"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const TESTIMONIALS = [
  {
    id: 1,
    client: "Isabella Rossi",
    role: "Art Director",
    quote: "Working with the studio was a revelation. They don't just capture images; they distill the very essence of a moment. The final portraits possessed a quiet gravity that completely elevated our editorial spread."
  },
  {
    id: 2,
    client: "David Chen",
    role: "Lead Architect, Formative Design",
    quote: "It's rare to find a photographer who understands spatial relationships as intuitively as an architect. The way they documented our brutalist project revealed textures and light play we hadn't even consciously designed."
  },
  {
    id: 3,
    client: "Sarah Jenkins",
    role: "Private Client",
    quote: "We wanted our celebration documented without feeling like a performance. The resulting images feel like genuine memories—cinematic, unfiltered, and profoundly beautiful. A masterclass in documentary photography."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-[var(--space-2xl)] md:py-[var(--space-3xl)] bg-secondary border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Client Selector */}
          <div className="md:col-span-4 flex flex-col justify-center space-y-6">
            <Reveal>
              <h3 className="text-eyebrow text-textMuted mb-8">Selected Testimonials</h3>
            </Reveal>
            
            <div className="flex flex-col space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(i)}
                  className="group text-left pl-4 relative"
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-500 ${activeIndex === i ? "bg-accent" : "bg-border"}`} />
                  <span className={`block font-serif text-h3 transition-colors duration-500 ${activeIndex === i ? "text-textPrimary" : "text-textMuted group-hover:text-textSecondary"}`}>
                    {t.client}
                  </span>
                  <span className={`block text-[11px] uppercase tracking-widest mt-1 transition-colors duration-500 ${activeIndex === i ? "text-accent" : "text-textMuted group-hover:text-textSecondary"}`}>
                    {t.role}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quote Display */}
          <div className="md:col-span-8 flex items-center min-h-[300px]">
            <div className="relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-display text-accent font-serif leading-[1.08] absolute -top-8 -left-8 opacity-50">"</span>
                  <p className="text-h2 font-serif text-textSecondary relative z-10">
                    {TESTIMONIALS[activeIndex].quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
