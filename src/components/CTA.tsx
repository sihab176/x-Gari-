"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] glass-strong p-12 sm:p-16 text-center"
        >
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "var(--gradient-radial-glow)" }}
          />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-primary/15 blur-[140px] rounded-full" />

          <div className="inline-flex items-center gap-2 rounded-full  bg-[#FCD202]/20  px-4 py-1.5 text-xs  mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#FCD202]" /> Get started
            today
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            Drive the future of{" "}
            <span className="text-gradient-gold">car ownership.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto">
            Verified cars. Nationwide service. Lifetime support — built for
            Bangladesh, engineered for trust.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#cars"
              className="group inline-flex items-center gap-2 rounded-full text-black bg-linear-to-r from-[#FCD202] to-[#FCD202]/80 px-8 py-4 text-sm font-semibold text-primary-foreground glow-gold hover:scale-[1.04] transition-transform"
            >
              Explore Verified Cars
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#network"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition"
            >
              Find a Service Center
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
