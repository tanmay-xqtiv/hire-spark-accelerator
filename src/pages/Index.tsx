import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsXyrus } from "@/components/WhatIsXyrus";
import { ForCandidatesSection } from "@/components/ForCandidatesSection";
import { ForClientPartnersSection } from "@/components/ForClientPartnersSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProductSection } from "@/components/ProductSection";
import { CorePromiseSection } from "@/components/CorePromiseSection";
import { PricingSection } from "@/components/PricingSection";
import { USPSection } from "@/components/USPSection";
import { LeaderSpeaks } from "@/components/LeaderSpeaks";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhatIsXyrus />
      <ForCandidatesSection />
      <SolutionsSection />
      <ProductSection />
      <ForClientPartnersSection />
      <CorePromiseSection />
      <PricingSection />
      <USPSection />
      <LeaderSpeaks />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
