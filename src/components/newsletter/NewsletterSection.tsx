"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

const CONSENT_TEXT =
  "Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną od AMK Sp. z o.o. zgodnie z RODO i ustawą o świadczeniu usług drogą elektroniczną. Wiem, że mogę wycofać zgodę w każdym momencie.";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Podaj adres e-mail.");
      return;
    }
    if (!consent) {
      setError("Wymagana jest zgoda na otrzymywanie informacji handlowych.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="privilege-club"
      className="border-t border-obsidian/10 bg-obsidian py-24 md:py-32"
      aria-labelledby="privilege-heading"
    >
      <div className="mx-auto max-w-9xl px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="font-sans text-[10px] uppercase tracking-wider text-champagne">
            Ekskluzywny dostęp
          </p>
          <h2
            id="privilege-heading"
            className="mt-3 font-serif text-3xl tracking-wide text-luxury md:text-4xl"
          >
            Dołącz do AMK Privilege Club
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-luxury/50">
            Wcześniejszy dostęp do limitowanych edycji, porady ortopedyczne od
            ekspertów AMK oraz zaproszenia na prywatne prezentacje kolekcji.
          </p>

          {submitted ? (
            <p className="mt-10 font-sans text-sm text-champagne" role="status">
              Dziękujemy. Twoje zgłoszenie zostało przyjęte — wkrótce otrzymasz
              wiadomość powitalną.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 text-left" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Adres e-mail
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój adres e-mail"
                  autoComplete="email"
                  className="flex-1 border border-luxury/20 bg-transparent px-4 py-3.5 font-sans text-sm text-luxury placeholder:text-luxury/30 transition-colors focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 border border-champagne bg-champagne/10 px-6 py-3.5 font-sans text-[11px] uppercase tracking-luxury text-champagne transition-all hover:bg-champagne/20"
                >
                  Dołącz
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>

              <label className="mt-6 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 appearance-none border border-luxury/30 bg-transparent checked:border-champagne checked:bg-champagne/20 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
                />
                <span className="font-sans text-xs leading-relaxed text-luxury/50">
                  {CONSENT_TEXT}
                </span>
              </label>

              {error && (
                <p className="mt-3 font-sans text-xs text-red-400/90" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
