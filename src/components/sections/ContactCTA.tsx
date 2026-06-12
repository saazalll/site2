"use client";

import Image from "next/image";
import Link from "next/link";
import RevealLine from "@/components/ui/RevealLine";
import Reveal from "@/components/ui/Reveal";

export default function ContactCTA() {
  return (
    <section className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80"
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center px-6 container mx-auto">
        <Reveal>
          <span className="text-accent text-eyebrow mb-6 block">Commissions & Inquiries</span>
        </Reveal>
        
        <h2 className="text-h1 font-serif text-[#F5F2EC] max-w-4xl mx-auto mb-12">
          <RevealLine>Ready to build</RevealLine>
          <RevealLine delay={0.1}>something timeless?</RevealLine>
        </h2>
        
        <Reveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-black font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors duration-500 rounded-sm"
          >
            Start a Conversation
          </Link>
          <Link
            href="/about"
            className="px-10 py-4 border border-white/30 text-[#F5F2EC] font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-500 rounded-sm"
          >
            Studio Philosophy
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
