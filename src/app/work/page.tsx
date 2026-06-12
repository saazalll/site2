"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import RevealLine from "@/components/ui/RevealLine";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const CATEGORIES = ["All", "Portrait", "Commercial", "Editorial", "Landscape", "Event", "Documentary"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-primary pt-[var(--space-3xl)]">
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
        {/* Header */}
        <header className="mb-[var(--space-xl)]">
          <h1 className="text-display font-serif mb-12 text-textPrimary">
            <RevealLine>The Archive</RevealLine>
          </h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 md:gap-8 pb-8 border-b border-border">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  "text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-500",
                  activeCategory === category ? "text-accent" : "text-textMuted hover:text-textSecondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        {/* List Layout */}
        <div className="flex flex-col border-b border-border">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 !== 0; // 0-indexed, so 1 is even row visually

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative border-t border-border first:border-t-0 py-12 md:py-16 hover:bg-secondary/50 transition-colors duration-700"
                >
                  <Link href={`/work/${project.slug}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
                    
                    {/* Index Number */}
                    <div className="hidden lg:block lg:col-span-1 text-sm font-mono text-textMuted self-start mt-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Image Container */}
                    <div className={clsx(
                      "w-full aspect-[4/3] relative overflow-hidden bg-secondary",
                      isEven ? "lg:col-span-5 lg:order-last" : "lg:col-span-5"
                    )}>
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=80';
                          e.currentTarget.style.filter = 'grayscale(100%)';
                          e.currentTarget.onerror = null;
                        }}
                      />
                    </div>

                    {/* Text Content */}
                    <div className={clsx(
                      "flex flex-col justify-center",
                      isEven ? "lg:col-span-6" : "lg:col-span-6"
                    )}>
                      <div className="mb-4 flex items-center gap-4 text-eyebrow text-textMuted">
                        <span>{project.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{project.year}</span>
                      </div>
                      
                      <h2 className="text-h2 font-serif mb-6 text-textPrimary group-hover:text-accent transition-colors duration-500">
                        {project.title}
                      </h2>
                      
                      <p className="text-textSecondary text-body mb-8 max-w-md line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-auto flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] font-medium text-textMuted group-hover:text-textPrimary transition-colors duration-300">
                        <span>View Series</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 10 }}
                          className="text-accent"
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
