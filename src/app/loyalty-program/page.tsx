import React from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import PointsProgram from "../components/PointsProgram/PointsProgram";
import VisitTracker from "../components/VisitTrack/VisitTrack";
import ReferralRewardsYellow from "../components/Reward/Reward";

const page = () => {
  return (
    <div className="py-20 px-4 md:px-20 text-white container bg-[#010913] mt-5 overflow-hidden">
      <PageBanner
        title="Loyalty Program"
        description="Exclusive Loyalty Program – Earn Rewards and Enjoy Special Discounts on Every Salon Visit!"
        bgImage="/assets/banner/loyaltyprogram.jpg"
      />
      <PointsProgram/>
      <VisitTracker/>
      <ReferralRewardsYellow/>
    </div>
  );
};

export default page;
