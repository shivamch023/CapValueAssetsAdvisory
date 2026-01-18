"use client";

import RequestOpportunityForm from "../components/RequestOpportunityForm/RequestOpportunityForm";
import Image from "next/image";

export default function AssetSolutionsSection() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================== HERO / BANNER ================== */}
      <section
        className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner/city.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0D1D38]/65" />

        <div className="relative z-10 px-4 sm:px-6 max-w-3xl">
          <h1 className="text-[24px] leading-snug sm:text-3xl md:text-5xl font-bold text-white mb-3">
            Real Estate Asset Investment
          </h1>

          <p className="text-[14px] sm:text-base md:text-xl text-gray-200">
            CapValuez connects you with carefully selected real estate opportunities for long-term value creation.
          </p>
        </div>
      </section>

      {/* ================== MAIN CONTENT ================== */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">

            {/* LABEL */}
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#C9A240] uppercase">
              Asset Solutions
            </span>

            {/* HEADING */}
            <h2 className="text-[22px] sm:text-3xl md:text-4xl font-extrabold text-[#0B1D3A] leading-snug">
              Real Estate Asset Investment
            </h2>

            {/* TEXT */}
            <div className="space-y-4 text-[14px] sm:text-base text-gray-700">
              <p>
                CapValuez works with carefully selected real estate asset opportunities across multiple segments.
                We focus on opportunities aligned with long-term value creation.
              </p>
              <p>
                We help investors understand each asset clearly — including benefits, risks, and future potential —
                enabling confident, pressure-free decisions.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/assets/banner/house.jpg"
                alt="Asset Example"
                width={700}
                height={400}
                className="w-full h-[200px] sm:h-[260px] md:h-auto object-cover"
              />
            </div>

            {/* ASSET SEGMENTS */}
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1D3A]">
              Asset Segments Available
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🏡", title: "Residential plots" },
                { icon: "🌾", title: "Agricultural land" },
                { icon: "🏭", title: "Industrial park plots" },
                { icon: "📦", title: "Warehouses" },
                { icon: "🏢", title: "Commercial spaces" },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 p-4 rounded-xl
                  border border-gray-200 bg-white shadow-sm"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FFF8E6] text-lg">
                    {item.icon}
                  </div>

                  <span className="text-sm sm:text-base text-gray-800 font-medium">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>

            {/* CO-OWNERSHIP BOX */}
            <div className="bg-[#FDF6E3] border-l-4 border-[#C9A240] p-5 sm:p-6 rounded-lg space-y-3">
              <h3 className="text-lg sm:text-2xl font-semibold text-[#0B1D3A]">
                Private Co-Ownership Investments
              </h3>

              <p className="text-sm sm:text-base text-gray-700">
                We help identify the right opportunity, structure investments via SPVs,
                and design clear ownership & exit frameworks.
              </p>

              <p className="text-sm sm:text-base text-gray-700">
                Reach out to explore suitable opportunities based on your investment goals.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <RequestOpportunityForm />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
