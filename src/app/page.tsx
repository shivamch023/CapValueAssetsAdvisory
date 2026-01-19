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
import Hero from "./components/Hero2/Hero2";

const page = () => {
  return (
    <div className="">
      <Hero />
      <StatsSection />
      <AdvisoryCards/>
      <AdvisoryFeatureCards/>
      <WhoWeAreSection/>
      <BrandSlider/>
      
          <CtaSection 
        titleWhite="Exploring your next growth " 
        titleHighlight="opportunity?"
        description="Reach out to CapValuez to bring clarity and achieve growth."
        buttons={[
          {
            label: "Start a Conversation",
            href: "/contact",
            variant: "primary",
            icon: FaArrowRightLong ,
            
          },
         
        ]}
      />

    </div>
  );
};

export default page;
