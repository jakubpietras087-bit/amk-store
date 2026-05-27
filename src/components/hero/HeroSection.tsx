"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-obsidian"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(197,160,89,0.08),transparent_70%)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#0B0B0B_95%)]" />

      <div className="relative z-10 mx-auto max-w-9xl px-6 pt-28 text-center md:px-12 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-sans text-[10px] uppercase tracking-wider text-champagne md:text-[11px]"
        >
          Ortopedia snu klasy premium
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl font-light leading-[1.15] tracking-wide text-luxury sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Cisza,
          <br />
          <span className="text-champagne/90">która leczy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-xl font-sans text-sm leading-relaxed text-luxury/60 md:text-base"
        >
          Wyroby medyczne klasy I — precyzyjnie zaprojektowane poduszki AMK
          łączą ortopedyczną skuteczność z estetyką quiet luxury.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#kolekcja"
            className="min-w-[200px] border border-luxury bg-luxury px-8 py-3.5 font-sans text-[11px] uppercase tracking-luxury text-obsidian transition-all hover:bg-luxury/90"
          >
            Odkryj kolekcję
          </a>
          <a
            href="#o-marce"
            className="min-w-[200px] border border-luxury/30 px-8 py-3.5 font-sans text-[11px] uppercase tracking-luxury text-luxury transition-all hover:border-champagne/50 hover:text-champagne"
          >
            Poznaj AMK
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#kolekcja"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-luxury/40 transition-colors hover:text-champagne"
        aria-label="Przewiń do kolekcji"
      >
        <ChevronDown className="h-6 w-6 animate-pulse" strokeWidth={1} />
      </motion.a>
    </section>
  );
}
