"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useCheckout } from "@/contexts/CheckoutContext";
import { formatPrice, PRODUCTS } from "@/data/products";

export function FloatingPremiumBar() {
  const [visible, setVisible] = useState(false);
  const { openExpressCheckout } = useCheckout();
  const featured = PRODUCTS[0];

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-luxury/10 bg-obsidian/95 px-4 py-3 backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate font-sans text-[10px] uppercase tracking-luxury text-champagne">
                AMK Cervical Prestigio
              </p>
              <p className="font-serif text-sm text-luxury">
                {formatPrice(featured.price)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => openExpressCheckout(featured)}
              className="flex shrink-0 items-center gap-1.5 border border-champagne bg-champagne/10 px-4 py-2.5 font-sans text-[10px] uppercase tracking-luxury text-champagne"
            >
              <Zap className="h-3.5 w-3.5" strokeWidth={1.5} />
              Kup teraz
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
