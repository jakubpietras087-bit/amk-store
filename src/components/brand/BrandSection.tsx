"use client";

import { motion } from "framer-motion";
import { Award, HeartPulse, Leaf } from "lucide-react";

const PILLARS = [
  {
    icon: HeartPulse,
    title: "Ortopedia kliniczna",
    text: "Każdy model projektowany we współpracy z fizjoterapeutami i lekarzami medycyny regeneracyjnej.",
  },
  {
    icon: Award,
    title: "Certyfikacja medyczna",
    text: "Wyrób medyczny klasy I, norma EN ISO 13485, oznakowanie CE zgodne z rozporządzeniem MDR.",
  },
  {
    icon: Leaf,
    title: "Materiały szlachetne",
    text: "Pianka memory z pamięcią kształtu i pokrowiec z jedwabiem naturalnym — bez kompromisów.",
  },
];

export function BrandSection() {
  return (
    <section
      id="o-marce"
      className="bg-charcoal py-24 md:py-32 lg:py-40"
      aria-labelledby="brand-heading"
    >
      <div className="mx-auto max-w-9xl px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24"
        >
          <div>
            <p className="font-sans text-[10px] uppercase tracking-wider text-champagne">
              Filozofia marki
            </p>
            <h2
              id="brand-heading"
              className="mt-3 font-serif text-3xl tracking-wide text-luxury md:text-4xl lg:text-5xl"
            >
              Quiet luxury
              <br />
              w służbie zdrowia
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-luxury/55 md:text-base">
              AMK to polska marka premium, która przekłada ortopedyczną
              precyzję na estetykę godną najbardziej wymagających wnętrz.
              Nie sprzedajemy poduszek — oferujemy regenerację w standardzie
              medycznym.
            </p>
          </div>

          <ul className="space-y-8">
            {PILLARS.map((pillar, i) => (
              <motion.li
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex gap-5 border-l border-champagne/30 pl-6"
              >
                <pillar.icon
                  className="mt-1 h-5 w-5 shrink-0 text-champagne"
                  strokeWidth={1.25}
                />
                <div>
                  <h3 className="font-serif text-lg tracking-wide text-luxury">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-luxury/50">
                    {pillar.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
