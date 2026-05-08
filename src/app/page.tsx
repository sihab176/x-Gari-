import { FeaturedCars } from "@/components/FeaturedCars";
import { Hero } from "@/components/Hero";
import Inspection from "@/components/Inspection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Inspection />
    </section>
  );
}
