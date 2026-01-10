import React from "react";
import HeroSection from "./components/Hero/Hero";
import StatsSection from "./components/Stats/Stats";
import AdvisoryCards from "./components/Service/Service";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import CtaSection from "./components/CtaSection/CtaSection";
import AdvisoryFeatureCards from "./components/AdvisoryFeatureCards/AdvisoryFeatureCards";
import WhoWeAreSection from "./components/WhoWeAreSection/WhoWeAreSection";
import BrandSlider from "./components/BrandSlider/BrandSlider";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <StatsSection />
      <AdvisoryCards/>
      <AdvisoryFeatureCards/>
      <WhoWeAreSection/>
      <BrandSlider/>
      
          <CtaSection 
        titleWhite="Ready to Accelerate Your" 
        titleHighlight="Enterprise Value?"
        description="Align your business and investment strategies with institutional-grade insight. Partner with CapValue to navigate your next phase of growth."
        buttons={[
          {
            label: "Start a Conversation",
            href: "/contact",
            variant: "primary",
            icon: FaArrowRightLong ,
            
          },
          {
            label: "Meet Our Team",
            href: "/meet-our-team",
            variant: "outline",
            icon: RiTeamFill, // 🔥
          },
        ]}
      />

    </div>
  );
};

export default page;
