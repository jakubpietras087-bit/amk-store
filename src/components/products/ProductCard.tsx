"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useCheckout } from "@/contexts/CheckoutContext";
import type { Product } from "@/data/products";
import { fadeInUp } from "@/lib/motion";
import { MedicalBadge } from "@/components/ui/MedicalBadge";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { ProductSpecsAccordion } from "./ProductSpecsAccordion";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { openExpressCheckout } = useCheckout();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={fadeInUp}
      className={`group flex flex-col overflow-hidden border border-obsidian/8 bg-alabaster transition-shadow duration-500 hover:shadow-[0_24px_48px_-12px_rgba(11,11,11,0.12)] lg:flex-row ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-charcoal lg:aspect-auto lg:w-[45%]">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(197,160,89,0.15),transparent_60%)]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="relative h-32 w-48 rounded-sm border border-champagne/20 bg-obsidian/40 md:h-40 md:w-56"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 flex items-center justify-center font-serif text-3xl tracking-luxury text-champagne/30 md:text-4xl">
            AMK
          </motion.div>
        </motion.div>
        <span className="absolute bottom-4 left-4 font-sans text-[10px] uppercase tracking-luxury text-luxury/30">
          {String(index + 1).padStart(2, "0")} / 04
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-8 md:p-10 lg:p-12">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <MedicalBadge />
          </div>
          <p className="font-sans text-[10px] uppercase tracking-luxury text-obsidian/50">
            {product.subtitle}
          </p>
          <h3 className="mt-2 font-serif text-2xl tracking-wide text-obsidian md:text-3xl">
            {product.name}
          </h3>
          <p className="mt-4 font-sans text-sm leading-relaxed text-obsidian/70 md:text-base">
            {product.description}
          </p>
          <div className="mt-6">
            <PriceDisplay
              price={product.price}
              lowestPrice30Days={product.lowestPrice30Days}
              variant="dark"
            />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <ProductSpecsAccordion specs={product.specs} variant="dark" />
          <button
            type="button"
            onClick={() => openExpressCheckout(product)}
            className="group/btn flex w-full items-center justify-center gap-2 border border-obsidian bg-obsidian px-6 py-4 font-sans text-[11px] uppercase tracking-luxury text-luxury transition-all hover:border-champagne hover:bg-charcoal"
          >
            <Zap
              className="h-3.5 w-3.5 text-champagne transition-transform group-hover/btn:scale-110"
              strokeWidth={1.5}
            />
            Zakup natychmiastowy
          </button>
        </div>
      </div>
    </motion.article>
  );
}
