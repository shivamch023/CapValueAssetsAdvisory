import React from "react";
import HeroSection from "./components/Hero/Hero";
import StatsSection from "./components/Stats/Stats";
import AdvisoryCards from "./components/Service/Service";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import CtaSection from "./components/CtaSection/CtaSection";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <StatsSection />
      <AdvisoryCards/>
      
          <CtaSection 
        titleWhite="Ready to Elevate Your"
        titleHighlight="Strategic Position?"
        description="Join the distinguished leaders who trust CapValue for their most critical advisory needs."
        buttons={[
          {
            label: "Start a Conversation",
            href: "/contact",
            variant: "primary",
            icon: FaArrowRightLong ,
            
          },
          {
            label: "Meet Our Team",
            href: "/team",
            variant: "outline",
            icon: RiTeamFill, // 🔥
          },
        ]}
      />

    </div>
  );
};

export default page;
