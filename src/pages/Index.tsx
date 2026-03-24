import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatIsXyrus } from "@/components/WhatIsXyrus";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProductSection } from "@/components/ProductSection";
import { USPSection } from "@/components/USPSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhatIsXyrus />
      <SolutionsSection />
      <ProductSection />
      <USPSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
