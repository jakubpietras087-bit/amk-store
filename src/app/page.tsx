import { BrandSection } from "@/components/brand/BrandSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingPremiumBar } from "@/components/layout/FloatingPremiumBar";
import { Header } from "@/components/layout/Header";
import { NewsletterSection } from "@/components/newsletter/NewsletterSection";
import { ProductGrid } from "@/components/products/ProductGrid";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <BrandSection />
        <NewsletterSection />
      </main>
      <Footer />
      <FloatingPremiumBar />
      <div className="pointer-events-none h-16 md:hidden" aria-hidden />
    </>
  );
}
