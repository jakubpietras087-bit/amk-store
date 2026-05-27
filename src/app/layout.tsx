import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { CookieConsentBanner } from "@/components/legal/CookieConsentBanner";
import { ExpressCheckoutDrawer } from "@/components/checkout/ExpressCheckoutDrawer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMK — Luksusowe Poduszki Ortopedyczne | Wyroby Medyczne Klasy I",
  description:
    "AMK — premium poduszki ortopedyczne z pianką memory i pokrowcem z jedwabiem. Wyroby medyczne klasy I. Zakup natychmiastowy i ekspresowa dostawa.",
  keywords: [
    "poduszka ortopedyczna",
    "wyroby medyczne",
    "poduszka memory",
    "AMK",
    "luksusowa poduszka",
  ],
  openGraph: {
    title: "AMK — Quiet Luxury w Ortopedii Snu",
    description:
      "Cztery specjalistyczne poduszki medyczne klasy I. Zakup natychmiastowy.",
    locale: "pl_PL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <AppProviders>
          {children}
          <ExpressCheckoutDrawer />
          <CookieConsentBanner />
        </AppProviders>
      </body>
    </html>
  );
}
