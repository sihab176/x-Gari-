"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Verified Cars", href: "#cars" },
  { label: "Service Network", href: "#network" },
  { label: "Inspection", href: "#inspection" },
  { label: "About", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between rounded-3xl  px-6 py-3 transition-all duration-500 ${
          scrolled ? "bg-gray-400/25 backdrop-blur-xl shadow-2xl border" : "glass"
        }`}
      >
        <motion.a
          href="#home"
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="h-12 w-32 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="XGari Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain scale-[2] origin-center"
            />
          </div>
        </motion.a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#cars"
          className="hidden md:inline-flex text-black items-center gap-2 rounded-full bg-linear-to-br from-[#ffbb00] to-[#c4b706] px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-gold hover:scale-[1.03] transition-transform"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          Explore Verified Cars
        </motion.a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-auto max-w-7xl mt-2 bg-gray-400/15 backdrop-blur-3xl rounded-2xl p-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cars"
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Explore Verified Cars
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
