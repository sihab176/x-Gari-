import { FeaturedCars } from "@/components/FeaturedCars";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <FeaturedCars />
    </section>
  );
}
