"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  useCookieConsent,
  type CookiePreferences,
} from "@/contexts/CookieContext";

export function CookieSettingsPanel() {
  const {
    isSettingsOpen,
    closeSettings,
    preferences,
    savePreferences,
    acceptAll,
  } = useCookieConsent();

  const [draft, setDraft] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    if (isSettingsOpen) setDraft(preferences);
  }, [isSettingsOpen, preferences]);

  const toggle = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isSettingsOpen && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSettings}
            className="fixed inset-0 z-[90] bg-obsidian/80 backdrop-blur-sm"
            aria-label="Zamknij ustawienia cookie"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 z-[95] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 border border-luxury/10 bg-charcoal p-6 shadow-2xl md:p-8"
          >
            <div className="flex items-start justify-between">
              <h3
                id="cookie-settings-title"
                className="font-serif text-xl tracking-wide text-luxury"
              >
                Ustawienia zaawansowane
              </h3>
              <button
                type="button"
                onClick={closeSettings}
                className="p-1 text-luxury/50 hover:text-luxury"
                aria-label="Zamknij"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-6 space-y-4">
              <CookieToggle
                label="Niezbędne"
                description="Wymagane do działania sklepu i realizacji zamówień."
                checked
                disabled
              />
              <CookieToggle
                label="Analityczne"
                description="Pomagają nam ulepszać doświadczenie zakupowe."
                checked={draft.analytics}
                onChange={() => toggle("analytics")}
              />
              <CookieToggle
                label="Marketingowe"
                description="Personalizacja ofert i komunikacji marki AMK."
                checked={draft.marketing}
                onChange={() => toggle("marketing")}
              />
            </ul>

            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => savePreferences(draft)}
                className="flex-1 border border-luxury/30 py-2.5 font-sans text-[10px] uppercase tracking-luxury text-luxury transition-colors hover:border-luxury"
              >
                Zapisz wybór
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 border border-champagne bg-champagne/10 py-2.5 font-sans text-[10px] uppercase tracking-luxury text-champagne transition-all hover:bg-champagne/20"
              >
                Akceptuję wszystkie
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface CookieToggleProps {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

function CookieToggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: CookieToggleProps) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-luxury/10 pb-4">
      <div>
        <p className="font-sans text-sm text-luxury">{label}</p>
        <p className="mt-0.5 font-sans text-xs text-luxury/45">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-champagne/40" : "bg-luxury/10"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-luxury transition-transform ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </li>
  );
}
