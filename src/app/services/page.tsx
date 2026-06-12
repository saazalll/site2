"use client";

import Image from "next/image";
import RevealLine from "@/components/ui/RevealLine";
import Reveal from "@/components/ui/Reveal";
import ImageBanner from "@/components/sections/ImageBanner";

const SERVICES_DATA = [
  {
    id: "01",
    title: "Portrait Sessions",
    tagline: "Character-driven editorial portraiture.",
    description: "Whether in our London studio or on location, our portrait sessions are unhurried and collaborative. We aim to capture the psychological terrain of the subject, stripping away the extraneous to reveal quiet, powerful moments of authenticity.",
    deliverables: [
      "Pre-shoot consultation & moodboard",
      "Half-day or full-day studio/location time",
      "Professional lighting & styling direction",
      "High-resolution retouched deliverables",
      "Fine art archival prints (optional)"
    ],
    price: "From £1,500",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "02",
    title: "Commercial & Editorial",
    tagline: "Visual narratives for brands and publications.",
    description: "We partner with architectural firms, design houses, and lifestyle brands to create campaigns that transcend traditional marketing. Our commercial work is characterized by the same rigor, geometric harmony, and cinematic lighting found in our fine art practice.",
    deliverables: [
      "Creative direction & concept development",
      "Full production team assembly",
      "Multi-day location or studio shoots",
      "Extensive commercial licensing rights",
      "Campaign-ready retouched assets"
    ],
    price: "Custom Quote",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "03",
    title: "Documentary Projects",
    tagline: "Long-form visual storytelling.",
    description: "For subjects that require deep immersion, we undertake long-form documentary commissions. These projects are research-intensive and yield comprehensive visual essays suitable for publication, exhibition, or private archival.",
    deliverables: [
      "In-depth research & pre-production",
      "Extended period location photography",
      "Curated visual narrative sequencing",
      "Written editorial accompaniment",
      "Custom bound monograph (optional)"
    ],
    price: "From £8,000",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "04",
    title: "Event Coverage",
    tagline: "Cinematic documentation of significant moments.",
    description: "We approach events—from private celebrations to corporate summits—with a purely documentary mindset. Operating unobtrusively, we capture the peripheral, unfiltered moments that define the atmosphere of the occasion.",
    deliverables: [
      "Complete documentary coverage",
      "Second shooter availability",
      "Fast-turnaround preview gallery",
      "Comprehensive digital archive",
      "Hand-crafted heirloom albums"
    ],
    price: "From £4,500",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary">
      
      {/* Header */}
      <div className="pt-[var(--space-3xl)] pb-[var(--space-xl)] container mx-auto px-6 md:px-10 max-w-screen-xl border-b border-border">
        <h1 className="text-display font-serif mb-8 text-textPrimary">
          <RevealLine>Commissions &</RevealLine>
          <RevealLine delay={0.1}>Capabilities.</RevealLine>
        </h1>
        <Reveal delay={0.3}>
          <p className="text-textSecondary text-body max-w-2xl">
            We accept a limited number of commissions annually to ensure each project receives the rigorous, unhurried attention it requires.
          </p>
        </Reveal>
      </div>

      {/* Services List */}
      <div className="flex flex-col">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 !== 0;

          return (
            <section key={service.id} className="py-[var(--space-2xl)] md:py-[var(--space-3xl)] border-b border-border">
              <div className="container mx-auto px-6 md:px-10 max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                <div className={`lg:col-span-5 relative aspect-[4/5] w-full bg-secondary ${isEven ? 'lg:order-last' : ''}`}>
                  <Reveal>
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </Reveal>
                </div>

                <div className={`lg:col-span-7 flex flex-col justify-center ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <Reveal>
                    <span className="text-accent font-mono text-small mb-6 block">{service.id}</span>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="text-h2 font-serif text-textPrimary mb-4">{service.title}</h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <h3 className="text-h3 text-textSecondary font-serif mb-8">{service.tagline}</h3>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <p className="text-textSecondary text-body mb-12 max-w-2xl">
                      {service.description}
                    </p>
                  </Reveal>
                  
                  <Reveal delay={0.4}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="flex flex-col">
                        <span className="text-eyebrow text-textMuted mb-4 pb-2 border-b border-border">Deliverables</span>
                        <ul className="space-y-3 text-small text-textSecondary">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-accent mr-3">-</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.5}>
                    <div className="flex items-center gap-6 pt-8 border-t border-border">
                      <span className="text-eyebrow text-textMuted">Investment</span>
                      <span className="text-h3 font-serif text-textPrimary">{service.price}</span>
                    </div>
                  </Reveal>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      <ImageBanner 
        imageSrc="https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&w=2000&q=80"
        headline="Ready to discuss your project?"
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </div>
  );
}
