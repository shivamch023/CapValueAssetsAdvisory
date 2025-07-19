"use client";

import React from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import PageDesign from "../components/PageDesignmul/PageDesignmul";
import ContactInfo from "../components/ContactInfo/ContactInfo";

const MembershipPage = () => {
  return (
    <div className="py-20 px-4 md:px-20 text-white bg-[#010913] mt-5 container overflow-hidden">
      <PageBanner
        title="Exclusive Salon Membership"
        description="Explore our premium salon services tailored just for you."
        bgImage="/assets/banner/memberships.jpg"
      />

      <PageDesign
        index={0}
        title="Platinum Membership"
        description="Pay INR 5,000 and Avail services worth INR 10,000 (All Inclusive of tax)"
        imageUrl="/assets/salon.avif"
        points={[
          "Limited period validity.",
          "Enquire more details at your nearest Trendz Salon.",
          "Not redeemable for cash.",
          "Benefits cannot be clubbed with other offers",        ]}
          sticker="/assets/platinum.png"
      >
        <button className="mt-3 cursor-pointer max-w-40 px-4 py-2 border border-gray-700 text-sm rounded-md font-semibold relative overflow-hidden group">
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
            Join Platinum
          </span>
          <span className="absolute inset-0 bg-gray-400 rounded-md scale-0 origin-bottom-right group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
        </button>
      </PageDesign>

      <PageDesign
        index={1}
        title="Gold Membership"
        description="Pay INR 10,000 and Avail services worth INR 14,000 (All Inclusive of tax)"
        imageUrl="/assets/salongold.avif"
        points={[
          "Limited period validity.",
          "Enquire more details at your nearest Trendz Salon.",
          "Not redeemable for cash.",
          "Benefits cannot be clubbed with other offers",        ]}
          sticker="/assets/goldpng.png"
      >
        <button className="mt-3 cursor-pointer max-w-40 px-4 py-2 border border-gray-700 text-sm rounded-md font-semibold relative overflow-hidden group">
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
            Join Gold
          </span>
          <span className="absolute inset-0 bg-gray-400 rounded-md scale-0 origin-bottom-right group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
        </button>
      </PageDesign>

      <PageDesign
        index={2}
        title="Silver Membership"
        description="Pay INR 10,000 and Avail services worth INR 5,000 (All Inclusive of tax)"
        imageUrl="/assets/silver.avif"
        points={[
          "Limited period validity.",
          "Enquire more details at your nearest Trendz Salon.",
          "Not redeemable for cash.",
          "Benefits cannot be clubbed with other offers",        ]}
          sticker="/assets/silver.png"
      >
        <button className="mt-3 cursor-pointer max-w-40 px-4 py-2 border border-gray-700 text-sm rounded-md font-semibold relative overflow-hidden group">
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
            Join Silver
          </span>
          <span className="absolute inset-0 bg-gray-400 rounded-md scale-0 origin-bottom-right group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
        </button>
      </PageDesign>
      <PageDesign
        index={3}
        title="Diamond Membership"
        description="Pay INR 20,000 and Avail services worth INR 30,000 (All Inclusive of tax)"
        imageUrl="/assets/banner/diamondmemb.jpg"
        points={[
          "Limited period validity.",
          "Enquire more details at your nearest Trendz Salon.",
          "Not redeemable for cash.",
          "Benefits cannot be clubbed with other offers",        ]}
          sticker="/assets/Diamond.png"
      >
        <button className="mt-3 cursor-pointer max-w-40 px-4 py-2 border border-gray-700 text-sm rounded-md font-semibold relative overflow-hidden group">
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
            Join Diamond
          </span>
          <span className="absolute inset-0 bg-gray-400 rounded-md scale-0 origin-bottom-right group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
        </button>
      </PageDesign>
      <ContactInfo />
    </div>
  );
};

export default MembershipPage;
