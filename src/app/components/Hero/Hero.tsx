"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#142964] px-4 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Trusted By */}
          <div className="flex items-center gap-2 bg-yellow-600/10 border border-yellow-700/10 backdrop-blur-lg px-6 py-2 rounded-full w-max">
            <span className="w-2 h-2 bg-[#C9A240] rounded-full" />
            <p className="text-[13px] text-[#C9A240]  font-bold">
              Trusted by Fortune 500 Leaders
            </p>
          </div>

          {/* Headings */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Strategic Excellence In
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#C9A240] leading-tight">
            Advisory Services
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-[15px]  max-w-xl">
            CapValue delivers exceptional advisory services across business strategy, real estate investments, and growth capital — empowering leaders to achieve extraordinary outcomes.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex text-[12px] items-center gap-2 bg-[#C9A240] text-gray-900 px-8 py-3 rounded-md font-semibold cursor-pointer hover:opacity-90 transition w-full sm:w-auto">
              Schedule Consultation
              <span>→</span> {/* Right arrow */}
            </button>

            <button className="bg-transparent text-[12px] border border-gray-500 text-white px-8 py-3 rounded-md font-semibold  tracking-wide
  w-full sm:w-auto cursor-pointer
  transition-all duration-300 hover:bg-white hover:text-[#142964]">
              Explore Service
            </button>

          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 grid grid-cols-1 md:grid-row-3 gap-4">
          {/* Box 1: Business Advisory */}
          <div className="bg-gray-400/10 border border-gray-300/20 backdrop-blur-md  rounded-lg p-6 flex flex-row items-center gap-4
    hover:scale-102 hover:shadow-xl hover:bg-gray-300/10 transition-all duration-300">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-yellow-900/20 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#C9A240]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.5 0 2.5 1.5 3 3m0 0c.5 1.5 1.5 3 3 3m-6-6a3 3 0 00-3 3c0 1.5 1.5 2.5 3 3m0-6v6m0 0c1.5 0 2.5-1.5 3-3m0 0c.5-1.5 1.5-3 3-3" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-white font-bold text-md lg:text-lg mb-1 tracking-wide">
                Business Advisory
              </h3>
              <p className="text-gray-300 text-sm text-[13px]">
                Strategic guidance for complex business challenges.
              </p>
            </div>
          </div>


          {/* Box 2: Real Estate Investment */}
          <div className="bg-gray-400/10 backdrop-blur-md border border-gray-300/20   rounded-lg p-6 flex flex-row items-center gap-4
  hover:scale-102 hover:shadow-xl hover:bg-gray-300/10 transition-all duration-300">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-yellow-900/20 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#C9A240]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-4v-5H8v5H4a1 1 0 01-1-1V10z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-white font-bold text-md lg:text-lg mb-1 tracking-wide ">Real Estate Investment</h3>
              <p className="text-gray-300 text-sm text-[13px">Institutional-grade real estate opportunities.</p>
            </div>
          </div>

          {/* Box 3: Growth Capital */}
          <div className="bg-gray-400/10 backdrop-blur-md  border border-gray-300/20  rounded-lg p-6 flex flex-row items-center gap-4
 hover:scale-102 hover:shadow-xl hover:bg-gray-300/10transition-all duration-300">

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-yellow-900/20 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#C9A240]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l3-3m-3 3l-3-3M4 12a8 8 0 1116 0 8 8 0 01-16 0z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-white font-bold text-md lg:text-lg mb-1 tracking-wide">Growth Capital</h3>
              <p className="text-gray-300 text-sm text-[13px]">Fuel expansion with tailored capital solutions.</p>
            </div>
          </div>

        </div>




      </div>
    </section>
  );
}
