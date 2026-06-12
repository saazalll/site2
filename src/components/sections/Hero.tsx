"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealLine from "@/components/ui/RevealLine";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1000px]">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2000&q=80"
          alt="Cinematic Hero Image"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)" }} 
        />
      </motion.div>

      {/* Hero Content anchored bottom using flex */}
      <div 
        className="absolute inset-0 flex flex-col justify-end z-10"
        style={{ 
          paddingLeft: "clamp(32px, 5vw, 80px)", 
          paddingRight: "clamp(32px, 5vw, 80px)",
          paddingBottom: "clamp(48px, 6vw, 80px)",
          paddingTop: "var(--navbar-height)"
        }}
      >
        <h1 
          className="font-serif text-[#F5F2EC] font-light"
          style={{
            fontSize: "clamp(40px, 6vw, 88px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            overflow: "visible",
            paddingBottom: "0.15em",
            maxWidth: "700px"
          }}
        >
          <RevealLine delay={0.2}>Capturing the</RevealLine>
          <RevealLine delay={0.4}>Silent Spaces</RevealLine>
          <RevealLine delay={0.6}>Between.</RevealLine>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-[#C8C0B0] hidden md:block"
          style={{
            fontSize: "clamp(14px, 1.2vw, 17px)",
            lineHeight: 1.75,
            maxWidth: "480px",
            marginTop: "clamp(16px, 2vw, 28px)"
          }}
        >
          A visual exploration of architecture, human expression, and the environments we inhabit.
        </motion.p>
      </div>

      {/* Fixed Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute z-10 flex items-center gap-4 origin-bottom-right -rotate-90"
        style={{
          bottom: "32px",
          right: "40px"
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B6558]" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Scroll</span>
        <div className="h-12 w-[1px] bg-[#6B6558]/30 relative overflow-hidden hidden">
          {/* Hidden as writing mode vertical takes care of layout better for scroll indicator */}
        </div>
      </motion.div>
    </section>
  );
}
