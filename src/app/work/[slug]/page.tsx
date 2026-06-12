import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import RevealLine from "@/components/ui/RevealLine";
import Reveal from "@/components/ui/Reveal";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const projectIndex = projects.findIndex(p => p.slug === params.slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="min-h-screen bg-primary pb-0">
      {/* Full Viewport Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 overlay-gradient" />
        
        <div className="absolute inset-x-0 bottom-0 pb-[var(--space-xl)] container mx-auto px-6 md:px-10 max-w-screen-xl flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-accent text-eyebrow mb-4 block">{project.category}</span>
            <h1 className="text-display font-serif text-[#F5F2EC]">
              <RevealLine>{project.title}</RevealLine>
            </h1>
          </div>
          <Reveal delay={0.4}>
            <p className="text-[#F5F2EC]/80 max-w-sm text-body leading-relaxed hidden md:block">
              {project.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Metadata & Description */}
      <section className="py-[var(--space-2xl)] bg-primary border-b border-border">
        <div className="container mx-auto px-6 md:px-10 max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex flex-col space-y-6 text-small">
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                  <span className="text-textMuted text-eyebrow">Location</span>
                  <span className="text-textPrimary text-right">{project.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                  <span className="text-textMuted text-eyebrow">Year</span>
                  <span className="text-textPrimary text-right">{project.year}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                  <span className="text-textMuted text-eyebrow">Format</span>
                  <span className="text-textPrimary text-right">{project.format}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                  <span className="text-textMuted text-eyebrow">Camera</span>
                  <span className="text-textPrimary text-right">{project.camera}</span>
                </div>
                {project.client && (
                  <div className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                    <span className="text-textMuted text-eyebrow">Client</span>
                    <span className="text-textPrimary text-right">{project.client}</span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-8 lg:pl-16">
            <Reveal delay={0.2}>
              <h2 className="text-h2 font-serif text-textPrimary mb-8">
                {project.description}
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-textSecondary text-body max-w-2xl">
                {project.narrative}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Immersive Gallery */}
      <section className="py-[var(--space-2xl)] space-y-16 md:space-y-32">
        {project.images[0] && (
          <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
            <Reveal>
              <div className="relative aspect-[16/9] w-full bg-secondary">
                <Image src={project.images[0]} alt={`${project.title} Gallery 1`} fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        )}
        
        {project.images[1] && project.images[2] && (
          <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div className="relative aspect-[4/5] w-full bg-secondary">
                  <Image src={project.images[1]} alt={`${project.title} Gallery 2`} fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] w-full md:mt-24 bg-secondary">
                  <Image src={project.images[2]} alt={`${project.title} Gallery 3`} fill className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        )}
        
        {project.images[3] && (
          <div className="w-full">
            <Reveal>
              <div className="relative aspect-[21/9] w-full max-h-[80vh] bg-secondary">
                <Image src={project.images[3]} alt={`${project.title} Gallery 4`} fill className="object-cover" />
              </div>
            </Reveal>
          </div>
        )}
      </section>

      {/* Next Series CTA */}
      <section className="aspect-[16/9] relative group overflow-hidden cursor-pointer">
        <Link href={`/work/${nextProject.slug}`} className="block w-full h-full">
          <div className="absolute inset-0 transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
            <Image
              src={nextProject.heroImage}
              alt={nextProject.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-700" />
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
            <span className="text-eyebrow text-accent mb-6 block">Next Series</span>
            <h2 className="text-display font-serif text-[#F5F2EC] mb-8">{nextProject.title}</h2>
            <span className="px-8 py-4 border border-white/30 text-[11px] uppercase tracking-[0.2em] font-medium text-white group-hover:bg-white group-hover:text-black transition-colors duration-500 rounded-sm">
              View Project
            </span>
          </div>
        </Link>
      </section>
    </article>
  );
}
