"use client";

import RequestOpportunityForm from "../components/RequestOpportunityForm/RequestOpportunityForm";
import Image from "next/image";

export default function AssetSolutionsSection() {
  return (
    <div className="w-full">

      {/* ================== HERO/BANNER ================== */}
      <section
        className="relative h-[65vh] md:h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/assets/banner/city.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0D1D38]/60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Real Estate Asset Investment
          </h1>
          <p className="text-white max-w-2xl mx-auto text-md md:text-xl">
            CapValuez connects you with carefully selected real estate opportunities for long-term value creation.
          </p>
        </div>
      </section>

      {/* ================== MAIN CONTENT ================== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          
          {/* LEFT CONTENT */}
         <div className="lg:col-span-7 space-y-10">

  {/* SECTION LABEL */}
  <span className="inline-block mb-3 text-sm font-semibold tracking-widest text-[#C9A240] uppercase">
    Asset Solutions
  </span>

  {/* HEADING */}
  <h2 className="text-2xl md:text-4xl font-extrabold text-[#0B1D3A] leading-snug">
    Real Estate Asset Investment
  </h2>

  {/* INTRO PARAGRAPHS */}
  <div className="space-y-4 text-gray-700">
    <p>
      CapValuez works with carefully selected real estate asset opportunities across multiple segments. We focus on introducing opportunities that meet our internal screening standards and align with long-term value creation.
    </p>
    <p>
      Our role is to help investors clearly understand the asset before any commitment—including location benefits, key strengths, possible risks, and long-term potential—so decisions are made with clarity, not urgency or sales pressure.
    </p>
  </div>

  {/* IMAGE WITH HOVER EFFECT */}
  <div className="relative my-6 overflow-hidden rounded-xl shadow-lg group">
    <Image
      src="/assets/banner/house.jpg"
      alt="Asset Example"
      width={700}
      height={400}
      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>

  {/* ASSET SEGMENTS WITH ICONS */}
  <h3 className="text-2xl font-semibold text-[#0B1D3A] mb-4">
    Asset Segments Available
  </h3>
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
  {[
    { icon: "🏡", title: "Residential plots" },
    { icon: "🌾", title: "Agricultural land" },
    { icon: "🏭", title: "Industrial park plots" },
    { icon: "📦", title: "Warehouses" },
    { icon: "🏢", title: "Commercial spaces" },
  ].map((item) => (
    <li
      key={item.title}
      className="group flex items-center gap-4 p-4 rounded-xl
      bg-white border border-gray-200 shadow-sm
      hover:border-[#C9A240] hover:shadow-lg
      transition-all duration-300"
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-11 h-11 rounded-lg
        bg-[#FFF8E6] text-xl
        group-hover:scale-110 transition-transform duration-300"
      >
        {item.icon}
      </div>

      {/* Text */}
      <span
        className="text-gray-800 font-medium
        group-hover:text-[#C9A240] transition-colors"
      >
        {item.title}
      </span>
    </li>
  ))}
</ul>


  {/* CO-OWNERSHIP HIGHLIGHT BOX */}
  <div className="bg-[#FDF6E3] border-l-4 border-[#C9A240] p-6 rounded-lg shadow-sm space-y-3">
    <h3 className="text-2xl font-semibold text-[#0B1D3A]">
      Private Co-Ownership Investments
    </h3>
    <p className="text-gray-700">
      Looking to invest through private co-ownership? We help identify the right opportunity, structure the investment through an SPV, and design clear ownership and exit frameworks to maximise benefits and reduce complexity.
    </p>
    <p className="text-gray-700">
      Reach out to explore suitable opportunities. Share a few details alongside to help us understand your interests.
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
