"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-luxury/10 bg-obsidian/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-9xl items-center justify-between px-6 py-5 md:px-12 lg:px-16"
        aria-label="Główna nawigacja"
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-luxury text-luxury transition-colors hover:text-champagne md:text-2xl"
        >
          AMK
        </Link>
        <ul className="hidden items-center gap-10 font-sans text-[11px] uppercase tracking-luxury text-luxury/70 md:flex">
          <li>
            <a
              href="#kolekcja"
              className="transition-colors hover:text-champagne"
            >
              Kolekcja
            </a>
          </li>
          <li>
            <a
              href="#o-marce"
              className="transition-colors hover:text-champagne"
            >
              O marce
            </a>
          </li>
          <li>
            <a
              href="#privilege-club"
              className="transition-colors hover:text-champagne"
            >
              Privilege Club
            </a>
          </li>
        </ul>
        <a
          href="#kolekcja"
          className="border border-champagne/50 px-4 py-2 font-sans text-[10px] uppercase tracking-luxury text-champagne transition-all hover:bg-champagne/10 md:px-5"
        >
          Kup teraz
        </a>
      </nav>
    </motion.header>
  );
}
