"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCookieConsent } from "@/contexts/CookieContext";
import { CookieSettingsPanel } from "./CookieSettingsPanel";

export function CookieConsentBanner() {
  const { isBannerVisible, acceptAll, openSettings } = useCookieConsent();

  return (
    <>
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            role="dialog"
            aria-label="Zgoda na pliki cookie"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[80] border-t border-luxury/10 bg-charcoal/98 p-5 backdrop-blur-md md:p-6"
          >
            <div className="mx-auto flex max-w-9xl flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
              <div className="max-w-2xl">
                <p className="font-serif text-lg tracking-wide text-luxury">
                  Pliki cookie AMK
                </p>
                <p className="mt-2 font-sans text-xs leading-relaxed text-luxury/55 md:text-sm">
                  Używamy plików cookie niezbędnych do działania sklepu oraz —
                  za Twoją zgodą — analitycznych i marketingowych. Możesz
                  zarządzać preferencjami w dowolnym momencie. Szczegóły w{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="underline decoration-champagne/50 underline-offset-2 transition-colors hover:text-champagne"
                  >
                    Polityce Prywatności
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={openSettings}
                  className="border border-luxury/20 px-5 py-2.5 font-sans text-[10px] uppercase tracking-luxury text-luxury/70 transition-colors hover:border-luxury/40 hover:text-luxury"
                >
                  Ustawienia zaawansowane
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="border border-champagne bg-champagne/10 px-5 py-2.5 font-sans text-[10px] uppercase tracking-luxury text-champagne transition-all hover:bg-champagne/20"
                >
                  Akceptuję wszystkie
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <CookieSettingsPanel />
    </>
  );
}
