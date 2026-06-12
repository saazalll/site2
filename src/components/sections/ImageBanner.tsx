"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealLine from "@/components/ui/RevealLine";

interface ImageBannerProps {
  imageSrc: string;
  headline: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ImageBanner({ 
  imageSrc, 
  headline, 
  ctaText = "View Archive", 
  ctaHref = "/work" 
}: ImageBannerProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative aspect-[16/9] w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={imageSrc}
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 overlay-cinematic" />
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center px-6">
        <h2 className="text-h1 font-serif text-[#F5F2EC] max-w-4xl mx-auto mb-8">
          <RevealLine>{headline}</RevealLine>
        </h2>
        
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="px-8 py-4 border border-white/30 text-[11px] uppercase tracking-[0.2em] font-medium text-white hover:bg-white hover:text-black transition-colors duration-500 rounded-sm"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
