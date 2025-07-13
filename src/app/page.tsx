import React from "react";
import HeroSection from "./components/Hero/Hero";
import SalonExperienceSection from "./components/SalonExperienceSection/SalonExperienceSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ClientReviews from "./components/ClientReviews/ClientReviews";
import InstaReels from "./components/InstaReels/InstaReels";
import BookApointMentSection from "./components/BookApointMentSection/BookApointMentSection";
import LogoBrand from "./components/LogoBrand/LogoBrand";
import ContactInfo from "./components/ContactInfo/ContactInfo";

const page = () => {
  return (
    <div className="container">
      <HeroSection />
      <SalonExperienceSection />
      <ServiceSection />
      <ClientReviews />
      <InstaReels />
      <BookApointMentSection />
      <LogoBrand />
      <ContactInfo />
    </div>
  );
};

export default page;
