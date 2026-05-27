import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formularz Zwrotu i Reklamacji | AMK",
  description: "Formularz zwrotu i reklamacji produktów AMK.",
};

export default function ZwrotyReklamacjePage() {
  return (
    <LegalPageLayout title="Formularz Zwrotu i Reklamacji">
      <p>
        Wypełnij poniższe dane i wyślij formularz na adres reklamacje@amk.pl.
        Odpowiemy w terminie 14 dni roboczych.
      </p>

      <form className="mt-8 space-y-4" action="mailto:reklamacje@amk.pl" method="post">
        <label className="block">
          <span className="mb-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/60">
            Numer zamówienia
          </span>
          <input
            type="text"
            name="order"
            required
            className="w-full border border-obsidian/15 bg-white px-4 py-3 font-sans text-sm focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
          />
        </label>
        <label className="block">
          <span className="mb-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/60">
            Imię i nazwisko
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-obsidian/15 bg-white px-4 py-3 font-sans text-sm focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
          />
        </label>
        <label className="block">
          <span className="mb-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/60">
            Adres e-mail
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-obsidian/15 bg-white px-4 py-3 font-sans text-sm focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
          />
        </label>
        <label className="block">
          <span className="mb-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/60">
            Typ zgłoszenia
          </span>
          <select
            name="type"
            className="w-full border border-obsidian/15 bg-white px-4 py-3 font-sans text-sm focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
          >
            <option value="zwrot">Zwrot</option>
            <option value="reklamacja">Reklamacja</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block font-sans text-[10px] uppercase tracking-luxury text-obsidian/60">
            Opis
          </span>
          <textarea
            name="description"
            rows={5}
            required
            className="w-full resize-y border border-obsidian/15 bg-white px-4 py-3 font-sans text-sm focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne/30"
          />
        </label>
        <button
          type="submit"
          className="border border-obsidian bg-obsidian px-8 py-3 font-sans text-[11px] uppercase tracking-luxury text-luxury transition-colors hover:bg-charcoal"
        >
          Wyślij zgłoszenie
        </button>
      </form>

      <p className="mt-8 text-xs text-obsidian/50">
        Zwrot towaru należy wysłać na adres magazynu podany w potwierdzeniu
        zamówienia, w oryginalnym opakowaniu, w stanie nienaruszonym — o ile
        przepisy na to pozwalają.
      </p>
    </LegalPageLayout>
  );
}
