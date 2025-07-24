import React from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import PageBanner from "../components/PageBanner/PageBanner";

export default function ContactPage() {
  return (
    <div className="py-20 px-4 md:px-20 text-white container bg-[#010913] mt-5 overflow-hidden">
      <PageBanner
        title="Get In Touch"
        description="Get in touch with us for expert unisex salon services, appointments, or style consultations."
        bgImage="/assets/banner/getintouchcont.jpg"
      />
      <ContactSection />
    </div>
  );
}
