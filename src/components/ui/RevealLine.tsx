"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealLineProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealLine({ children, delay = 0, className = "" }: RevealLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`overflow-visible ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
