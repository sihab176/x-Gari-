"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Fuel, Gauge, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const cars = [
  {
    img: "/car-1.jpg",
    name: "Range Rover Velar",
    year: 2022,
    km: "18,400",
    fuel: "Petrol",
    price: "৳ 95,00,000",
    score: 96,
  },
  {
    img: "/car-2.jpg",
    name: "Lexus LC 500",
    year: 2021,
    km: "12,800",
    fuel: "Petrol",
    price: "৳ 1,40,00,000",
    score: 97,
  },
  {
    img: "/car-3.jpg",
    name: "Genesis G70 Sport",
    year: 2023,
    km: "9,200",
    fuel: "Hybrid",
    price: "৳ 68,00,000",
    score: 94,
  },
  {
    img: "/car-4.jpg",
    name: "BMW X5 xDrive",
    year: 2022,
    km: "21,500",
    fuel: "Diesel",
    price: "৳ 88,00,000",
    score: 95,
  },
];

export function FeaturedCars() {
  const { lang } = useLanguage();
  const t = translations[lang].cars;

  return (
    <section id="cars" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {lang === "en" ? "Verified Inventory" : "ভেরিফাইড ইনভেন্টরি"}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {t.title}
            </h2>
          </div>
          <a
            href="#cars"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
          >
            {t.viewAll} <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  loading="lazy"
                  className="h-full w-full object-cover  transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-background/70 backdrop-blur px-2.5 py-1 text-[11px] font-medium">
                  <ShieldCheck className="h-3 w-3 text-[#FCD34D]" /> Verified ·{" "}
                  {car.score}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold leading-tight">
                  {car.name}
                </h3>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {car.year}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Gauge className="h-3 w-3" /> {car.km} km
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Fuel className="h-3 w-3" /> {car.fuel}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="text-base font-bold text-gradient-gold">
                    {car.price}
                  </div>
                  <button className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors">
                    {t.viewDetails} <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
