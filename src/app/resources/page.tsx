"use client";
import React from "react";
import Banner from "@/app/components/Banner/Banner";
import ResourcesSection from "../components/ResourcesSection/ResourcesSection";
import CtaSection from "../components/CtaSection/CtaSection";
import { FaArrowRightLong } from "react-icons/fa6";
import Subscribe from "../components/Subscribe/Subscribe";

export default function ResourcesPage() {
    return (
        <>
            {/* Banner */}
            <Banner
                titlePrimary="Insights &"
                titleSecondary="Resources"
                description="Stay informed with our latest research, market insights, and thought leadership from CapValue's advisory team."
                height="h-[60vh]"
            />

            <ResourcesSection />

            <Subscribe
                title="Stay Ahead of the Curve"
                description="Subscribe to receive our latest insights, market updates, and exclusive research delivered directly to your inbox."
                onSubmit={(email) => alert(`Subscribed with: ${email}`)}
            />

            <CtaSection
                titleWhite="Need Tailored "
                titleHighlight="Insights?"
                description="Our team can provide customized research and analysis for your specific strategic needs.
"
                buttons={[
                    {
                        label: "Request Custom Research",
                        href: "/contact",
                        variant: "primary",
                        icon: FaArrowRightLong,
                    },
                ]}
            />
        </>
    );
}
