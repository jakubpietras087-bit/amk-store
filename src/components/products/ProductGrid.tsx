"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { staggerContainer } from "@/lib/motion";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section
      id="kolekcja"
      className="bg-luxury py-24 md:py-32 lg:py-40"
      aria-labelledby="kolekcja-heading"
    >
      <div className="mx-auto max-w-9xl px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl md:mb-20"
        >
          <p className="font-sans text-[10px] uppercase tracking-wider text-champagne">
            Kolekcja medyczna
          </p>
          <h2
            id="kolekcja-heading"
            className="mt-3 font-serif text-3xl tracking-wide text-obsidian md:text-4xl lg:text-5xl"
          >
            Cztery strefy regeneracji
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-obsidian/60 md:text-base">
            Każdy produkt AMK posiada status wyrobu medycznego klasy I,
            certyfikację CE oraz piankę memory z pamięcią kształtu w pokrowcu
            z jedwabiem naturalnym.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 lg:gap-12"
        >
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
