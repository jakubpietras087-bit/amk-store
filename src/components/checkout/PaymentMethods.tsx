"use client";

import { CreditCard, Smartphone } from "lucide-react";

interface PaymentMethodsProps {
  onSelect?: (method: string) => void;
}

export function PaymentMethods({ onSelect }: PaymentMethodsProps) {
  return (
    <div className="space-y-4">
      <p className="font-sans text-[10px] uppercase tracking-luxury text-luxury/50">
        Ekspresowa płatność
      </p>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onSelect?.("apple_pay")}
          className="flex h-12 items-center justify-center rounded-sm border border-luxury/15 bg-luxury/5 transition-all hover:border-champagne/40 hover:bg-luxury/10"
          aria-label="Zapłać przez Apple Pay"
        >
          <span className="flex items-center gap-1 font-sans text-[15px] font-medium text-luxury">
            <span aria-hidden="true"></span>
            <span>Pay</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => onSelect?.("google_pay")}
          className="flex h-12 items-center justify-center rounded-sm border border-luxury/15 bg-luxury/5 transition-all hover:border-champagne/40 hover:bg-luxury/10"
          aria-label="Zapłać przez Google Pay"
        >
          <span className="font-sans text-sm font-medium text-luxury">
            <span className="text-blue-400">G</span>
            <span className="text-red-400">o</span>
            <span className="text-yellow-400">o</span>
            <span className="text-green-400">g</span>
            <span className="text-luxury">le Pay</span>
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => onSelect?.("blik")}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-luxury/15 bg-luxury/5 font-sans text-sm font-bold tracking-wide text-luxury transition-all hover:border-champagne/40 hover:bg-luxury/10"
        aria-label="Zapłać przez BLIK"
      >
        <Smartphone className="h-4 w-4 text-champagne" strokeWidth={1.5} />
        BLIK
      </button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-luxury/10" />
        </div>
        <p className="relative flex justify-center">
          <span className="bg-charcoal px-3 font-sans text-[10px] uppercase tracking-luxury text-luxury/40">
            lub karta płatnicza
          </span>
        </p>
      </div>

      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSelect?.("card");
        }}
      >
        <label className="block">
          <span className="sr-only">Numer karty</span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="0000 0000 0000 0000"
            className="w-full border border-luxury/15 bg-obsidian/50 px-4 py-3 font-sans text-sm text-luxury placeholder:text-luxury/25 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
          />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="sr-only">Data ważności</span>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="cc-exp"
              placeholder="MM / RR"
              className="w-full border border-luxury/15 bg-obsidian/50 px-4 py-3 font-sans text-sm text-luxury placeholder:text-luxury/25 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
            />
          </label>
          <label className="block">
            <span className="sr-only">CVV</span>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder="CVV"
              className="w-full border border-luxury/15 bg-obsidian/50 px-4 py-3 font-sans text-sm text-luxury placeholder:text-luxury/25 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
            />
          </label>
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 border border-champagne bg-champagne/10 py-3.5 font-sans text-[11px] uppercase tracking-luxury text-champagne transition-all hover:bg-champagne/20"
        >
          <CreditCard className="h-4 w-4" strokeWidth={1.5} />
          Zapłać kartą
        </button>
      </form>
    </div>
  );
}
