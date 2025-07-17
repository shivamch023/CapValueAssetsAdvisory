"use client";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/app/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PageBanner from "../components/PageBanner/PageBanner";
import WhyChooseUs from "../components/ChooseUsSection/ChooseUsSection";

export default function ServiceSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Men" | "Women"
  >("All");
  const [showAll, setShowAll] = useState(false);

  const filteredServices = services.filter((service) => {
    if (selectedCategory === "All") return true;
    return service.category === selectedCategory || service.category === "Both";
  });

  const visibleServices = showAll
    ? filteredServices
    : filteredServices.slice(0, 8);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section className="pt-20 pb-5 px-4 md:px-20 text-white container bg-[#010913] mt-5">
      <PageBanner
        title="Our Services"
        description="Explore our premium salon services tailored just for you."
        bgImage="/assets/banner/banner1.avif"
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Category Buttons */}
        <div className="flex items-center gap-4 mb-10 mt-4">
          {["All", "Men", "Women"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat as "All" | "Men" | "Women");
                setShowAll(false); // reset view more on category change
              }}
              className={`px-4 py-2 shadow-md rounded-md text-sm cursor-pointer font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-gray-700"
                  : "border border-gray-700 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-3 mb-2">
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={index}
                className="p-2 border border-gray-700 rounded-md shadow-md"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block rounded-lg overflow-hidden border border-gray-700 bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full md:h-44 h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center z-10">
                    <h3 className="text-lg font-bold text-white tracking-wide drop-shadow-md">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        {filteredServices.length > 8 && (
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileTap={{ scale: 1.1 }}
            className=" mt-8 mx-auto flex cursor-pointer items-center justify-center px-6 py-2 rounded-lg border border-gray-700 text-gray-200 hover:text-yellow-500 font-bold shadow-md transition-all"
          >
            {showAll ? "View Less" : "View More"}
          </motion.button>
        )}
      </div>
      <WhyChooseUs />
    </section>
  );
}
