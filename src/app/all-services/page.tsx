"use client";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/app/data/services";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ServiceSection() {
  const headingText = "Our Services";

  const [selectedCategory, setSelectedCategory] = useState<
    "All" | "Men" | "Women"
  >("All");

  const filteredServices = services.filter((service) => {
    if (selectedCategory === "All") return true;
    return service.category === selectedCategory || service.category === "Both";
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section className="py-20 px-4 md:px-20 text-white container bg-[#010913] mt-5">
      <div className=" max-w-7xl mx-auto  px-4">
        {/* Animated Heading */}
         <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl md:text-5xl font-extrabold mb-6"
        >
          {headingText.split("").map((char, index) => {
            const color =
              index % 3 === 0
                ? "#FFD700" // Yellow
                : index % 3 === 1
                ? "#CCCCCC" // Light Gray
                : "#FFFFFF"; // White

            const showUnderline = color !== "#CCCCCC";

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative inline-block ${char === " " ? "w-2" : ""}`}
                style={{
                  color,
                }}
              >
                {char}
                {showUnderline && (
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] w-full"
                    style={{
                      backgroundColor: color,
                      transformOrigin: "left",
                    }}
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.05,
                    }}
                  />
                )}
              </motion.span>
            );
          })}
        </motion.h2>
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10 mt-4">
          {["All", "Men", "Women"].map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(cat as "All" | "Men" | "Women")
              }
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-3 ">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
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
                  <div className="overflow-hidden ">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full md:h-44 h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300" />

                  {/* Title */}
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
      </div>
    </section>
  );
}
