import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CoverageSection from "@/components/sections/CoverageSection";
import StatesCoverageSection from "@/components/sections/StatesCoverageSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <CoverageSection />
        <StatesCoverageSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
