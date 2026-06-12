"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 40 }: MarqueeProps) {
  return (
    <div 
      className="flex overflow-hidden bg-secondary border-y border-border items-center"
      style={{ height: "clamp(36px, 3vw, 48px)" }}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        className="flex whitespace-nowrap items-center h-full"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center h-full">
            <span 
              className="text-textMuted mx-8 uppercase tracking-[0.2em]"
              style={{ fontSize: "clamp(9px, 0.6vw, 11px)" }}
            >
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
