import Image from "next/image";
import Link from "next/link";
import RevealLine from "@/components/ui/RevealLine";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary pt-[var(--space-3xl)]">
      
      {/* Header */}
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl mb-[var(--space-2xl)]">
        <h1 className="text-display font-serif text-textPrimary max-w-5xl">
          <RevealLine>I photograph the</RevealLine>
          <RevealLine delay={0.1}>moments between</RevealLine>
          <RevealLine delay={0.2}>moments.</RevealLine>
        </h1>
      </div>

      {/* Full Bleed Image */}
      <Reveal delay={0.4}>
        <div className="relative w-full aspect-[16/9] bg-secondary">
          <Image
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80"
            alt="Studio Environment"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </Reveal>

      {/* Biography */}
      <section className="py-[var(--space-2xl)] md:py-[var(--space-3xl)] container mx-auto px-6 md:px-10 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-eyebrow text-accent mb-4">The Studio</h2>
              <h3 className="text-h2 font-serif text-textPrimary">Philosophy & Approach</h3>
            </Reveal>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-textSecondary text-body max-w-3xl">
            <Reveal delay={0.1}>
              <p>
                My photographic journey began with architecture—a discipline defined by structure, permanence, and the deliberate manipulation of light. Those early principles have profoundly shaped how I see the world today, regardless of whether I am photographing a concrete monolith or a fleeting human expression.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                To me, photography is an act of reduction. In a world characterized by visual noise and sensory overload, I strive to distill complex environments into imagery that feels inevitable and quiet. By removing the extraneous, we allow the essential to speak louder.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                Operating globally, the studio has collaborated with leading architectural firms, high-end fashion houses, and private clients who seek a rigorous, cinematic approach to visual storytelling. We don't just record events; we interpret atmospheres.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p>
                Every commission is approached with the same intention: to create imagery that outlives temporary trends and possesses a timeless, editorial quality. True luxury is not loud; it is perfectly observed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-[var(--space-2xl)] bg-secondary border-y border-border">
        <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {[
              { num: "01", title: "Intention", desc: "Every frame is considered. We shoot with the discipline of large format film, regardless of the medium." },
              { num: "02", title: "Restraint", desc: "We favor minimal, deeply shaped lighting over complex setups, allowing the natural atmosphere to lead." },
              { num: "03", title: "Narrative", desc: "A single image is a statement; a series is a story. We focus on the connective tissue between frames." },
              { num: "04", title: "Permanence", desc: "We design imagery for print, exhibitions, and archives, avoiding fleeting social media aesthetics." }
            ].map((value, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-primary p-12 md:p-16 h-full flex flex-col justify-between">
                  <span className="text-accent font-mono text-small mb-12 block">{value.num}</span>
                  <div>
                    <h4 className="text-h3 font-serif text-textPrimary mb-6">{value.title}</h4>
                    <p className="text-textSecondary text-body">{value.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-[var(--space-2xl)] container mx-auto px-6 md:px-10 max-w-screen-xl">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border pb-8">
            <h2 className="text-h2 font-serif text-textPrimary">Selected Apparatus</h2>
            <p className="text-textMuted text-small mt-4 md:mt-0">Tools dictate the process, not the vision.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <Reveal delay={0.1}>
            <div className="flex flex-col">
              <h3 className="text-eyebrow text-accent mb-6 pb-2 border-b border-border">Cameras</h3>
              <ul className="space-y-4 text-textSecondary text-body">
                <li>Phase One IQ4 150MP</li>
                <li>Leica M11 Monochrom</li>
                <li>Hasselblad 500C/M (Film)</li>
                <li>Mamiya 7II (Film)</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col">
              <h3 className="text-eyebrow text-accent mb-6 pb-2 border-b border-border">Lenses</h3>
              <ul className="space-y-4 text-textSecondary text-body">
                <li>Schneider Kreuznach 80mm LS f/2.8</li>
                <li>Leica Summilux-M 35mm f/1.4</li>
                <li>Zeiss Planar T* 80mm f/2.8</li>
                <li>Rodenstock 32mm HR Digaron-W</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col">
              <h3 className="text-eyebrow text-accent mb-6 pb-2 border-b border-border">Processing</h3>
              <ul className="space-y-4 text-textSecondary text-body">
                <li>Capture One Pro</li>
                <li>Silverfast 9 Ai Studio</li>
                <li>Epson SureColor P900</li>
                <li>Hahnemühle FineArt Papers</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-[var(--space-3xl)] bg-secondary text-center flex flex-col items-center border-t border-border">
        <Reveal>
          <h2 className="text-h1 font-serif text-textPrimary mb-8">Discuss a Commission</h2>
          <Link
            href="/contact"
            className="px-10 py-5 bg-textPrimary text-primary font-medium text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity duration-500 rounded-sm inline-block"
          >
            Contact Studio
          </Link>
        </Reveal>
      </section>

    </div>
  );
}
