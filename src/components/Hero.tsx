"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const slides = [
  {
    img: "/hero-car.jpg",
    name: "Mercedes-Benz S-Class",
    score: 98,
    price: "৳ 1.2 Cr",
    status: "Service Active",
  },
  {
    img: "/car-1.jpg",
    name: "Range Rover Velar",
    score: 96,
    price: "৳ 95 Lakh",
    status: "Service Active",
  },
  {
    img: "/car-2.jpg",
    name: "Lexus LC 500",
    score: 97,
    price: "৳ 1.4 Cr",
    status: "Service Active",
  },
  {
    img: "/car-3.jpg",
    name: "Genesis G70 Sport",
    score: 94,
    price: "৳ 68 Lakh",
    status: "Service Active",
  },
  {
    img: "/car-4.jpg",
    name: "BMW X5 xDrive",
    score: 95,
    price: "৳ 88 Lakh",
    status: "Service Active",
  },
];

export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % slides.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 pb-20"
    >
      {/* Background atmosphere */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            {t.title1}
            <br />
            <span className="text-gradient-gold">{t.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl text-lg text-muted-foreground"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#cars"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-primary/80 px-7 py-4 text-sm font-semibold text-primary-foreground glow-gold transition-transform hover:scale-[1.04]"
            >
              {t.exploreBtn}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#inspection"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              <Calendar className="h-4 w-4" />
              {t.bookBtn}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 max-w-lg"
          >
            {[
              { k: "12K+", v: t.stats.cars },
              { k: "48", v: t.stats.centers },
              { k: "150", v: t.stats.points },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-gradient-gold">
                  {s.k}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden glass-strong shadow-(--shadow-elevated)">
            {slides.map((s, i) => (
              <motion.img
                key={i}
                src={s.img}
                alt={s.name}
                width={1280}
                height={800}
                loading={i === 0 ? "eager" : "lazy"}
                animate={{
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 1.08,
                }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/30 to-transparent" />

            {/* Glass info card */}
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-5 left-5 right-5 bg-gray-400/45 backdrop-blur-sm rounded-2xl p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs ">
                    <span className="inline-flex p-2 items-center gap-1 rounded-full bg-yellow-300/30 text-yellow-400 px-2 py-0.5  ">
                      <ShieldCheck className="h-3 w-3" /> {t.verified}
                    </span>
                    <span className="text-muted-foreground">
                      {t.serviceActive}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{slide.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t.score} ·{" "}
                    <span className="text-primary font-semibold">
                      {slide.score}/100
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gradient-gold">
                    {slide.price}
                  </div>
                  <button className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground/90 hover:text-primary">
                    {t.view} <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all ${i === active ? "w-10 bg-[#f5bc02]" : "w-4 bg-white/20"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating accent card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute -left-6 top-10 bg-gray-400/15 backdrop-blur-sm rounded-2xl p-4 w-48"
          >
            <div className="text-xs text-muted-foreground">{t.liveInspection}</div>
            <div className="mt-1 text-lg font-bold">
              98<span className="text-sm text-muted-foreground">/100</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-linear-to-r from-[#ffbb00] to-[#ffbb00]/60"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
