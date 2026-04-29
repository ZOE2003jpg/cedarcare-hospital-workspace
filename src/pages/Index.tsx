import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WaterDropAnimation from "@/components/WaterDropAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WaterDropAnimation />
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
