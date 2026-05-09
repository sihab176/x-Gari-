"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Gauge, Battery, Wrench, Car } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const Inspection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].inspection;

  const checks = [
    { icon: Cpu, label: t.checks.engine, score: 98 },
    { icon: Gauge, label: t.checks.transmission, score: 95 },
    { icon: Battery, label: t.checks.battery, score: 97 },
    { icon: Wrench, label: t.checks.suspension, score: 94 },
    { icon: Car, label: t.checks.body, score: 96 },
    { icon: ShieldCheck, label: t.checks.safety, score: 99 },
  ];

  return (
    <section id="inspection" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
      <div className="absolute -top-32 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-[#ffbb00]" />
            {t.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t.title1} <span className="text-gradient-gold">{t.title2}</span>
          </h2>
          <p className="text-lg text-gray-500">
            {t.subtitle}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { k: "150", v: t.points },
              { k: "12 min", v: t.report },
              { k: "AI", v: t.ai },
              { k: "100%", v: t.transparent },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-gradient-gold">{s.k}</div>
                <div className="text-xs text-gray-400 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7"
        >
          <div className="relative glass-strong rounded-3xl p-8 sm:p-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs text-muted-foreground">{t.liveScore}</div>
                <div className="mt-1 text-5xl font-bold text-gradient-gold">96.5</div>
              </div>
              <div className="relative h-28 w-28">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" />
                  <motion.circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="url(#ringGrad)" strokeWidth="6" strokeLinecap="round"
                    strokeDasharray="263.9"
                    initial={{ strokeDashoffset: 263.9 }}
                    whileInView={{ strokeDashoffset: 263.9 * (1 - 0.965) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.9 0.18 95)" />
                      <stop offset="100%" stopColor="oklch(0.78 0.17 75)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">A+</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {checks.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <c.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{c.label}</span>
                    </div>
                    <span className="text-xs font-semibold text-primary">{c.score}</span>
                  </div>
                  <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.3 + i * 0.08 }}
                      className="h-full bg-gradient-to-r from-[#F59E0B] to-[#F59E0B]/60"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Inspection;