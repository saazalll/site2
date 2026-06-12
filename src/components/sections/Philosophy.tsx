"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

export default function Philosophy() {
  return (
    <section className="py-[var(--space-2xl)] md:py-[var(--space-3xl)] bg-primary">
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <div className="order-2 md:order-1">
            <Reveal delay={0.1}>
              <h2 className="text-h2 font-serif mb-8 text-textPrimary">
                I photograph the moments between moments.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-textSecondary text-body mb-6">
                For over a decade, I have approached photography not as the act of taking, but of receiving. Whether in the studio or the field, my practice is defined by a deep reverence for natural light and geometric harmony.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-textSecondary text-body mb-12">
                Every project is an opportunity to distill complex environments into quiet, powerful imagery. I believe that true luxury lies in simplicity, and that the most compelling stories are often told through what we choose to leave out.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
              <Reveal delay={0.4}>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-accent mb-2">
                    <CountUp end={12} suffix="+" />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-textMuted">Years Practice</span>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-accent mb-2">
                    <CountUp end={150} suffix="+" />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-textMuted">Projects Shot</span>
                </div>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-accent mb-2">
                    <CountUp end={85} />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-textMuted">Clients</span>
                </div>
              </Reveal>
              <Reveal delay={0.7}>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-accent mb-2">
                    <CountUp end={14} />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-textMuted">Countries</span>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.3} className="order-1 md:order-2 w-full">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80"
                alt="Portrait of the Photographer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero-1.jpg';
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
