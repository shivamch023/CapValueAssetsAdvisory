"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BookApointMentSection() {
  const headingText = "Book Apointment";

  return (
    <div className="px-4 sm:px-6 md:px-5 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-3xl md:text-5xl font-extrabold mb-11"
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
      <section className="relative w-full min-h-[60vh] rounded-2xl overflow-hidden flex items-center justify-start shadow-md text-white">
        {/* Background Image */}
        <Image
          src="/assets/banner/banner.png" // ✅ update path as needed
          alt="Salon Interior"
          fill
          className="absolute inset-0 z-0 opacity-60 object-cover p-2 rounded-2xl border border-gray-700"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 md:px-12 py-8 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-xl md:text-4xl lg:text-5xl font-black tracking-tight leading-snug text-gray-100"
          >
            Discover the Ultimate Salon <br />
            Experience at{" "}
            <span className="text-yellow-400 font-extrabold italic">
              The SALON
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 font-medium leading-relaxed max-w-2xl"
          >
            Our range of premium beauty and hair services—from advanced
            treatments to personalized styling—ensures you leave feeling elegant
            and rejuvenated.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative group border overflow-hidden cursor-pointer rounded-lg px-6 py-3 text-center sm:px-7 sm:py-3 font-medium w-full sm:w-auto shadow-lg text-white text-sm sm:text-base transition-all duration-300 "
          >
            <span className="relative z-10 flex items-center font-bold justify-center gap-2 transition-all duration-300 group-hover:text-gray-900">
              Book Now
            </span>
            {/* Tarang-style Animated BG */}
            <span className="absolute -top-full -left-full w-full h-full bg-blue-100 group-hover:top-0 group-hover:left-0 transition-all duration-700 ease-in-out z-0 rounded-lg" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
