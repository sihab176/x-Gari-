
import { CTA } from "@/components/CTA";
import { FeaturedCars } from "@/components/FeaturedCars";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Inspection from "@/components/Inspection";
import { Navbar } from "@/components/Navbar";
import { ServiceMap } from "@/components/ServiceMap";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Inspection />
      <ServiceMap />
      <CTA />
      <Footer />
    </section>
  );
}
