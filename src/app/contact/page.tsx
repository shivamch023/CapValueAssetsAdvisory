"use client";

import React from "react";
import Banner from "../components/Banner/Banner";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Page() {
  return (
    <div>
      <Banner
        titlePrimary="Let's Start a"
        titleSecondary="Conversation"
        description="Whether you're exploring strategic options or ready to engage, our team is here to provide confidential, thoughtful guidance."
        height="h-[60vh]"
      />
      <ContactSection />
    </div>
  );
}
