import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="about" className="scroll-mt-16">
        <AboutSection />
      </div>
      <div id="services" className="scroll-mt-16">
        <ServicesSection />
      </div>
      <div id="portfolio" className="scroll-mt-16">
        <PortfolioSection />
      </div>
      <div id="process" className="scroll-mt-16">
        <ProcessSection />
      </div>
      <div id="pricing" className="scroll-mt-16">
        <PricingSection />
      </div>
      <div id="contact" className="scroll-mt-16">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
