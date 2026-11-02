import { Header } from "@/components/Header";
import { Hero } from "@/components/Index/Hero";
import { WhyMaps } from "@/components/Index/WhyMaps";
import { WhyNotEnough } from "@/components/Index/WhyNotEnough";
import { Results } from "@/components/Index/Results";
import { HowItWorks } from "@/components/Index/HowItWorks";
import { FreeOffer } from "@/components/Index/FreeOffer";
import { PricingTable } from "@/components/PricingTable";
import { Benefits } from "@/components/Index/Benefits";
import { Cases } from "@/components/Index/Cases";
import { Strategies2025 } from "@/components/Index/Strategies2025";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { LandingFAQ } from "@/components/Index/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyMaps />
      <WhyNotEnough />
      <Results />
      <HowItWorks />
      <FreeOffer />
      <PricingTable />
      <Benefits />
      <Cases />
      <LandingFAQ />
      <ContactForm />
      <Strategies2025 />
      <Footer />
    </div>
  );
};

export default Index;
