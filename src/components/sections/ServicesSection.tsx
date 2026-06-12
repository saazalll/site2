"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { Plus, Minus } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Portrait Sessions",
    description: "Intimate, character-driven portraiture for individuals, artists, and executives. Available in-studio or on location.",
  },
  {
    id: "02",
    title: "Commercial Photography",
    description: "High-end visual narratives for brands, including product photography, campaign shoots, and architectural documentation.",
  },
  {
    id: "03",
    title: "Documentary Projects",
    description: "Long-form visual storytelling and photo essays documenting subjects with authenticity and depth.",
  },
  {
    id: "04",
    title: "Event Coverage",
    description: "Unobtrusive, cinematic documentation of significant events, celebrations, and private gatherings.",
  }
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-[var(--space-2xl)] md:py-[var(--space-3xl)] bg-primary">
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
        <Reveal>
          <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
            <h2 className="text-h2 font-serif text-textPrimary">Selected Services</h2>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div 
                className="group border-b border-border py-8 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="text-sm font-mono text-textMuted">{service.id}</span>
                    <h3 className="text-h3 md:text-h2 font-serif text-textPrimary group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-textMuted group-hover:text-accent transition-colors duration-500">
                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[4.5rem] md:pl-[6.5rem] pt-6 pb-2 max-w-2xl text-textSecondary text-body leading-relaxed">
                        <p>{service.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
