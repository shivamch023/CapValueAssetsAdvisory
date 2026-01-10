import React from "react";
import Banner from "@/app/components/Banner/Banner";
import TeamCard from "../components/TeamCard/TeamCard";
import { teamData } from "../data/services";
import CtaSection from "../components/CtaSection/CtaSection";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function MeetOurTeamPage() {
  return (
    <>
      {/* ===== Banner ===== */}
      <Banner
        titlePrimary="Meet Our"
        titleSecondary="LeaderShip"
        description="Our strength lies in the depth of experience, strategic insight, and unwavering commitment of our advisory professionals."
        imageSrc="/assets/banner/team.png"
        imageAlt="Meet Our Team Banner Image"
      />



      <section className="py-16 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection
        titleWhite="Ready to Work with "
        titleHighlight="Our Team?"
        description="Connect with our partners to discuss how we can support your strategic objectives."
        buttons={[

          {
            label: "Get in Touch",
            href: "/contact",
            variant: "outline",
            icon: IoIosArrowRoundForward, // 🔥
          },
        ]}
      />    </>
  );
}
