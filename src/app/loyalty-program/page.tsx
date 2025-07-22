import React from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import PointsProgram from "../components/PointsProgram/PointsProgram";
import VisitTracker from "../components/VisitTrack/VisitTrack";
import ReferralRewardsYellow from "../components/Reward/Reward";
import BirthdayAnniversaryPerks from "../components/BirthdayAnniversaryPerks/BirthdayAnniversaryPerks";
import SocialMediaChallenge from "../components/SocialMediaChallenge/SocialMediaChallenge";
import LoyaltyFeedback from "../components/LoyaltyFeedback/LoyaltyFeedback";
import ForeverClientClub from "../components/ForeverClientClub/ForeverClientClub";

const page = () => {
  return (
    <div className="py-20 px-4 md:px-20 text-white container bg-[#010913] mt-5 overflow-hidden">
      <PageBanner
        title="Loyalty Program"
        description="Exclusive Loyalty Program – Earn Rewards and Enjoy Special Discounts on Every Salon Visit!"
        bgImage="/assets/banner/loyaltyprogram.jpg"
      />
      <PointsProgram />
      <VisitTracker />
      <ReferralRewardsYellow />
      <BirthdayAnniversaryPerks />
      <SocialMediaChallenge />
      <LoyaltyFeedback />
      <ForeverClientClub />
    </div>
  );
};

export default page;
