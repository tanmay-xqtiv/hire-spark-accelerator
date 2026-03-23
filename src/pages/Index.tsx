import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsXyrus } from "@/components/WhatIsXyrus";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { USPSection } from "@/components/USPSection";
import { LeaderSpeaks } from "@/components/LeaderSpeaks";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhatIsXyrus />
      <ProblemSection />
      <HowItWorks />
      <USPSection />
      <LeaderSpeaks />
      <CTASection />
    </div>
  );
};

export default Index;
