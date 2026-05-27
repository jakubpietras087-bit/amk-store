# AMK — Luxury Orthopedic Store

Premium medical orthopedic pillow e-commerce built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- **Quiet luxury design** — Obsidian black, alabaster surfaces, champagne gold accents
- **4 medical products** — Full Polish copy, Class I badges, technical specs accordion
- **Express checkout drawer** — One-click purchase bypassing cart; Apple Pay, Google Pay, BLIK, card UI
- **Legal compliance** — Omnibus 30-day lowest price, RODO newsletter consent, cookie banner, legal footer pages
- **Mobile floating CTA** — Sticky bar after scrolling past hero

## Getting started

```bash
cd amk-store
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/              # Routes (home + legal pages)
├── components/       # UI modules (hero, products, checkout, legal, layout)
├── contexts/         # Checkout + cookie consent state
├── data/             # Product catalog
└── lib/              # Framer Motion variants
```

## Legal pages

- `/regulamin` — Store terms
- `/polityka-prywatnosci` — Privacy & GDPR
- `/zwroty-reklamacje` — Returns & complaints form

Replace placeholder company data (NIP, KRS, address) before production launch.
