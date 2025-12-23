import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import WorldMapSection from "@/components/WorldMapSection";
import DealsSection from "@/components/DealsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const PHONE_NUMBER = "tel:+18886334176";

const Index = () => {
  const handleGlobalClick = (e: React.MouseEvent) => {
    // Only redirect if not clicking on the cookie close button
    const target = e.target as HTMLElement;
    if (target.closest('button')?.getAttribute('aria-label') === 'close-cookie') {
      return;
    }
    // Allow closing cookie banner
    if (target.closest('.cookie-close')) {
      return;
    }
    window.location.href = PHONE_NUMBER;
  };

  return (
    <div onClick={handleGlobalClick} className="min-h-screen cursor-pointer">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <WorldMapSection />
        <DealsSection />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
