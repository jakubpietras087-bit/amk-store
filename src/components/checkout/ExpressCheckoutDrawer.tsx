"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Lock, X } from "lucide-react";
import { useCheckout } from "@/contexts/CheckoutContext";
import { formatPrice } from "@/data/products";
import { drawerVariants, overlayVariants } from "@/lib/motion";
import { MedicalBadge } from "@/components/ui/MedicalBadge";
import { OmnibusPrice } from "@/components/ui/OmnibusPrice";
import { PaymentMethods } from "./PaymentMethods";

export function ExpressCheckoutDrawer() {
  const { isOpen, selectedProduct, closeExpressCheckout } = useCheckout();

  return (
    <AnimatePresence>
      {isOpen && selectedProduct && (
        <>
          <motion.button
            type="button"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeExpressCheckout}
            className="fixed inset-0 z-[60] bg-obsidian/70 backdrop-blur-sm"
            aria-label="Zamknij ekspresową kasę"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="express-checkout-title"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-luxury/10 bg-charcoal shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-luxury/10 px-6 py-5">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-luxury text-champagne">
                  Ekspresowa kasa
                </p>
                <h2
                  id="express-checkout-title"
                  className="mt-1 font-serif text-xl tracking-wide text-luxury"
                >
                  Zakup natychmiastowy
                </h2>
              </div>
              <button
                type="button"
                onClick={closeExpressCheckout}
                className="rounded-sm p-2 text-luxury/50 transition-colors hover:bg-luxury/5 hover:text-luxury"
                aria-label="Zamknij"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="border border-luxury/10 bg-obsidian/40 p-5">
                <MedicalBadge />
                <p className="mt-3 font-sans text-[10px] uppercase tracking-luxury text-luxury/50">
                  {selectedProduct.subtitle}
                </p>
                <h3 className="mt-1 font-serif text-lg tracking-wide text-luxury">
                  {selectedProduct.name}
                </h3>
                <p className="mt-4 font-serif text-2xl text-luxury">
                  {formatPrice(selectedProduct.price)}
                </p>
                <OmnibusPrice
                  lowestPrice30Days={selectedProduct.lowestPrice30Days}
                  className="mt-1"
                />
              </div>

              <div className="mt-8 space-y-4">
                <p className="font-sans text-[10px] uppercase tracking-luxury text-luxury/50">
                  Dane dostawy
                </p>
                <input
                  type="email"
                  placeholder="Adres e-mail"
                  autoComplete="email"
                  className="w-full border border-luxury/15 bg-obsidian/50 px-4 py-3 font-sans text-sm text-luxury placeholder:text-luxury/25 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
                />
                <input
                  type="text"
                  placeholder="Imię i nazwisko"
                  autoComplete="name"
                  className="w-full border border-luxury/15 bg-obsidian/50 px-4 py-3 font-sans text-sm text-luxury placeholder:text-luxury/25 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
                />
                <input
                  type="text"
                  placeholder="Ulica, numer, kod pocztowy, miasto"
                  autoComplete="street-address"
                  className="w-full border border-luxury/15 bg-obsidian/50 px-4 py-3 font-sans text-sm text-luxury placeholder:text-luxury/25 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
                />
              </div>

              <div className="mt-8">
                <PaymentMethods />
              </div>
            </div>

            <footer className="border-t border-luxury/10 px-6 py-4">
              <p className="flex items-center justify-center gap-1.5 font-sans text-[10px] text-luxury/40">
                <Lock className="h-3 w-3" strokeWidth={1.5} />
                Transakcja zabezpieczona szyfrowaniem SSL 256-bit
              </p>
              <p className="mt-2 text-center font-sans text-[10px] leading-relaxed text-luxury/30">
                Klikając przycisk płatności, akceptujesz{" "}
                <a href="/regulamin" className="underline hover:text-champagne">
                  Regulamin Sklepu
                </a>{" "}
                oraz potwierdzasz zapoznanie się z{" "}
                <a href="/polityka-prywatnosci" className="underline hover:text-champagne">
                  Polityką Prywatności
                </a>
                .
              </p>
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
