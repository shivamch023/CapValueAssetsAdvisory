import React from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import AboutSection from "../components/AboutSection/AboutSection";
import AboutSectionSe from "../components/AboutSectionSe/AboutSectionSe";
import ContactInfo from "../components/ContactInfo/ContactInfo";

const page = () => {
  return (
    <div className="py-20 px-4 md:px-20 text-white container bg-[#010913] mt-5 overflow-hidden">
      <PageBanner
        title="About"
        description="Explore our premium salon services tailored just for you."
        bgImage="/assets/banner/about.jpg"
      />
      <AboutSection />
      <AboutSectionSe />
      <ContactInfo />
    </div>
  );
};

export default page;
