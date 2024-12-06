import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero";
import StatsSection from "@/components/ui/stats";
import ServicesSection from "@/components/ui/services";
import AwardsSection from "@/components/ui/awards";
import JoinUsSection from "@/components/ui/joinus";
import Footer from "@/components/ui/footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AwardsSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
