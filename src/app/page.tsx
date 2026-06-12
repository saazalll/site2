import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Philosophy from "@/components/sections/Philosophy";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ImageBanner from "@/components/sections/ImageBanner";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Portraiture", "Architecture", "Documentary", "Editorial", "Commercial", "Fine Art"]} />
      <Philosophy />
      <FeaturedWork />
      <ImageBanner 
        imageSrc="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80"
        headline="A singular vision across multiple disciplines."
      />
      <ServicesSection />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
