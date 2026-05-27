"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { ProductSpecs } from "@/data/products";

interface ProductSpecsAccordionProps {
  specs: ProductSpecs;
  variant?: "dark" | "light";
}

const SPEC_LABELS: Record<keyof ProductSpecs, string> = {
  wymiary: "Wymiary",
  wypelnienie: "Wypełnienie",
  pokrowiec: "Pokrowiec",
};

export function ProductSpecsAccordion({
  specs,
  variant = "dark",
}: ProductSpecsAccordionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const textMuted = variant === "dark" ? "text-obsidian/60" : "text-luxury/60";
  const textMain = variant === "dark" ? "text-obsidian" : "text-luxury";
  const borderColor =
    variant === "dark" ? "border-obsidian/15" : "border-luxury/15";

  return (
    <div className={`border-t ${borderColor} pt-4`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex w-full items-center justify-between font-sans text-[11px] uppercase tracking-luxury ${textMain} transition-colors hover:text-champagne`}
      >
        Specyfikacja techniczna
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <dl
              className={`mt-4 space-y-3 font-sans text-sm leading-relaxed ${textMuted}`}
            >
              {(Object.keys(SPEC_LABELS) as (keyof ProductSpecs)[]).map(
                (key) => (
                  <div key={key}>
                    <dt
                      className={`mb-0.5 text-[10px] uppercase tracking-luxury ${
                        variant === "dark" ? "text-obsidian/80" : "text-luxury/80"
                      }`}
                    >
                      {SPEC_LABELS[key]}
                    </dt>
                    <dd>{specs[key]}</dd>
                  </div>
                ),
              )}
            </dl>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
