"use client";
import { ResourceItem, resourcesData } from "@/app/data/services";
import React, { useState } from "react";
import { IoCalendarOutline, IoDownloadOutline } from "react-icons/io5";

const categories = ["All", "Business Advisory", "Real Estate", "Growth Capital"];

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredData =
    activeCategory === "All"
      ? resourcesData
      : resourcesData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 rounded-lg  font-medium transition ${
                activeCategory === cat
                  ? "bg-[#152D5B] text-[12px] text-white"
                  : "bg-gray-200 text-[12px] text-gray-500 border border-gray-300 hover:bg-[#B79643] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item: ResourceItem) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              {/* Top */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-gray-400 bg-gray-300/30 flex items-center gap-2 px-3 py-1  font-medium text-[12px] rounded-full">
                  {item.icon ? <item.icon className="w-3 h-3" /> : null} {item.cate}
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <IoCalendarOutline /> {item.date}
                </span>
              </div>

              {/* Middle */}
              <div className="mb-6">
                <h3 className="text-md font-semibold text-[#B79643] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>

              {/* Bottom */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-gray-500 text-xs">{item.category}</span>
                <a
                  href={item.pdfLink}
                  target="_blank"
                  className="flex items-center gap-1 text-[#B79643] text-sm hover:underline"
                >
                  <IoDownloadOutline />Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
