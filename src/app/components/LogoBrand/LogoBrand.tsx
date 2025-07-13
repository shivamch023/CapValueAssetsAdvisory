// components/BrandSlider.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "GK", src: "/assets/brands/gk.avif" },
  { name: "O3+", src: "/assets/brands/o3.png" },
  { name: "Lycon", src: "/assets/brands/lycon.png" },
  { name: "Rica", src: "/assets/brands/rica.png" },
  { name: "Skeyndor", src: "/assets/brands/skeyndor.png" },
  { name: "Jeannot", src: "/assets/brands/jeannot.jfif" },
];

export default function LogoBrand() {
  const headingText = "Brand We Use";

  return (
    <section className="w-full py-8  overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-3xl md:text-5xl font-extrabold mb-15"
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
      <div className="relative w-full overflow-hidden p-1">
        {/* Left Blur */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#010913] to-transparent z-20 pointer-events-none" />
        {/* Right Blur */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#010913] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-12 w-max animate-scroll"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.name}
              width={120}
              height={120}
              className="object-contain max-w-20 max-h-20 bg-gray-200 border rounded-full p-1 hover:scale-105 transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
