"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedWork() {
  const featured = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-[var(--space-2xl)] md:py-[var(--space-3xl)] bg-primary">
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
        <Reveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-h2 font-serif text-textPrimary">Selected Works</h2>
            <Link href="/work" className="text-eyebrow text-accent hover:text-textPrimary transition-colors">
              View All Archive
            </Link>
          </div>
        </Reveal>

        {/* Editorial Grid */}
        <div className="flex flex-col gap-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 group relative overflow-hidden aspect-[16/9] lg:aspect-auto h-full bg-secondary">
              <Link href={`/work/${featured[0].slug}`} className="block w-full h-full">
                <motion.div className="w-full h-full" whileHover={{ scale: 1.04 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                  <Image 
                    src={featured[0].heroImage} 
                    alt={featured[0].title} 
                    fill 
                    className="object-cover" 
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=80';
                      e.currentTarget.style.filter = 'grayscale(100%)';
                      e.currentTarget.onerror = null;
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" />
                
                {/* Hover CTA */}
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-between items-end">
                  <div>
                    <span className="text-eyebrow mb-2 block text-[#F5F2EC]">{featured[0].category}</span>
                    <h3 className="text-h3 font-serif text-[#F5F2EC]">{featured[0].title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent text-[#F5F2EC] flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              {[featured[1], featured[2]].map((project) => (
                <div key={project.id} className="group relative overflow-hidden aspect-[4/5] w-full bg-secondary">
                  <Link href={`/work/${project.slug}`} className="block w-full h-full">
                    <motion.div className="w-full h-full" whileHover={{ scale: 1.04 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                      <Image 
                        src={project.heroImage} 
                        alt={project.title} 
                        fill 
                        className="object-cover" 
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=80';
                          e.currentTarget.style.filter = 'grayscale(100%)';
                          e.currentTarget.onerror = null;
                        }}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-between items-end">
                      <div>
                        <span className="text-eyebrow mb-1 block text-[#F5F2EC]">{project.category}</span>
                        <h3 className="text-h3 font-serif text-[#F5F2EC]">{project.title}</h3>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-accent text-[#F5F2EC] flex items-center justify-center">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Row 2 - Single Wide */}
          {featured[3] && (
            <div className="group relative overflow-hidden aspect-[21/9] w-full mt-8 lg:mt-0 bg-secondary">
              <Link href={`/work/${featured[3].slug}`} className="block w-full h-full">
                <motion.div className="w-full h-full" whileHover={{ scale: 1.04 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                  <Image 
                    src={featured[3].heroImage} 
                    alt={featured[3].title} 
                    fill 
                    className="object-cover" 
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=80';
                      e.currentTarget.style.filter = 'grayscale(100%)';
                      e.currentTarget.onerror = null;
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex justify-between items-end">
                  <div>
                    <span className="text-eyebrow mb-2 block text-[#F5F2EC]">{featured[3].category}</span>
                    <h3 className="text-h3 font-serif text-[#F5F2EC]">{featured[3].title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent text-[#F5F2EC] flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
