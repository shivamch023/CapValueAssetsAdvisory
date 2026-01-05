import React from "react";
import HeroSection from "./components/Hero/Hero";
import StatsSection from "./components/Stats/Stats";
import AdvisoryCards from "./components/Service/Service";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <StatsSection />
      <AdvisoryCards/>

    </div>
  );
};

export default page;
