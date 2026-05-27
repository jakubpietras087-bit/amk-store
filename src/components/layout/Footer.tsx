import Link from "next/link";
import { Lock, Shield, Award } from "lucide-react";
import { PRODUCTS } from "@/data/products";

const LEGAL_LINKS = [
  { href: "/regulamin", label: "Regulamin Sklepu" },
  { href: "/polityka-prywatnosci", label: "Polityka Prywatności i RODO" },
  { href: "/zwroty-reklamacje", label: "Formularz Zwrotu i Reklamacji" },
];

const SECURITY_ITEMS = [
  { icon: Shield, label: "Certyfikaty medyczne CE" },
  { icon: Award, label: "ISO 13485" },
  { icon: Lock, label: "Szyfrowanie SSL" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-luxury/10 bg-obsidian pt-16 pb-8 md:pt-20">
      <div className="mx-auto max-w-9xl px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-luxury text-luxury"
            >
              AMK
            </Link>
            <p className="mt-4 font-sans text-xs leading-relaxed text-luxury/45">
              AMK Sp. z o.o.
              <br />
              ul. Przykładowa 12, 00-001 Warszawa
              <br />
              NIP: 0000000000 | KRS: 0000000000
            </p>
          </div>

          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-luxury text-champagne">
              Kolekcje
            </h3>
            <ul className="mt-4 space-y-2">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href={`#kolekcja`}
                    className="font-sans text-sm text-luxury/55 transition-colors hover:text-champagne"
                  >
                    {product.collectionLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-luxury text-champagne">
              Strefa Prawna
            </h3>
            <ul className="mt-4 space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-luxury/55 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-luxury text-champagne">
              Bezpieczeństwo
            </h3>
            <ul className="mt-4 space-y-3">
              {SECURITY_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 font-sans text-sm text-luxury/55"
                >
                  <item.icon
                    className="h-4 w-4 shrink-0 text-champagne/70"
                    strokeWidth={1.25}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-luxury/10 pt-8 md:flex-row">
          <p className="font-sans text-[10px] text-luxury/35">
            © {year} AMK Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-center font-sans text-[10px] text-luxury/35 md:text-right">
            Ceny zawierają VAT. Informacja o najniższej cenie z 30 dni zgodna
            z dyrektywą Omnibus (UE) 2019/2161.
          </p>
        </div>
      </div>
    </footer>
  );
}
