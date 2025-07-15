"use client";

import React from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import PageDesign from "../components/PageDesignmul/PageDesignmul";

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
        description="Enjoy unlimited premium salon services with priority bookings and complimentary spa treatments every month."
        imageUrl="/assets/salon.avif"
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
        description="Get access to exclusive hair and beauty services with special discounts and bonus sessions every quarter."
        imageUrl="/assets/salongold.avif"
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
        description="Affordable salon membership plan with consistent discounts and express services benefits."
        imageUrl="/assets/silver.avif"
      >
        <button className="mt-3 cursor-pointer max-w-40 px-4 py-2 border border-gray-700 text-sm rounded-md font-semibold relative overflow-hidden group">
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
            Join Silver
          </span>
          <span className="absolute inset-0 bg-gray-400 rounded-md scale-0 origin-bottom-right group-hover:scale-100 transition-transform duration-500 ease-in-out"></span>
        </button>
      </PageDesign>
    </div>
  );
};

export default MembershipPage;
