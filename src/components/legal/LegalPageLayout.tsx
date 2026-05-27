import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-luxury pt-28 pb-20">
      <article className="mx-auto max-w-3xl px-6 md:px-8">
        <Link
          href="/"
          className="font-sans text-[10px] uppercase tracking-luxury text-champagne transition-opacity hover:opacity-70"
        >
          ← Powrót do sklepu
        </Link>
        <h1 className="mt-8 font-serif text-3xl tracking-wide text-obsidian md:text-4xl">
          {title}
        </h1>
        <div className="prose-amk mt-10 space-y-6 font-sans text-sm leading-relaxed text-obsidian/75">
          {children}
        </div>
      </article>
    </main>
    </>
  );
}
