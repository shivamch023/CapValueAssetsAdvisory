"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BookApointMentSection() {
  const headingText = "Book Appointment";

  return (
    <div className="px-3 sm:px-6 md:px-8 py-8 sm:py-12">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-11"
      >
        {headingText.split("").map((char, index) => {
          const color =
            index % 3 === 0
              ? "#FFD700"
              : index % 3 === 1
              ? "#CCCCCC"
              : "#FFFFFF";
          const showUnderline = color !== "#CCCCCC";
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className={`relative inline-block ${char === " " ? "w-1" : ""}`}
              style={{ color }}
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
                    delay: index * 0.04,
                  }}
                />
              )}
            </motion.span>
          );
        })}
      </motion.h2>

      <section className="relative w-full min-h-[40vh] sm:min-h-[55vh] rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center justify-center shadow-md text-white">
        <Image
          src="/assets/banner/banner.png"
          alt="Salon Interior"
          fill
          className="absolute inset-0 z-0 opacity-70 object-cover scale-110"
        />

        <div className="relative z-10 w-full max-w-4xl px-4 sm:px-8 py-8 space-y-4 sm:space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-4xl font-black leading-snug text-gray-100"
          >
            Discover the Ultimate Salon <br className="hidden sm:block" />
            Experience at{" "}
            <span className="text-yellow-400 font-extrabold italic">
              The SALON
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-200 font-medium max-w-2xl mx-auto"
          >
            From advanced treatments to personalized styling—feel elegant &
            refreshed every visit.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative group border border-gray-900 overflow-hidden cursor-pointer rounded-lg px-6 py-3 font-semibold  sm:w-auto shadow-lg text-white text-sm sm:text-base bg-gray-600/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-gray-900 transition-all duration-300">
              Book Now
            </span>
            <span className="absolute -top-full -left-full w-full h-full bg-blue-100 group-hover:top-0 group-hover:left-0 transition-all duration-700 ease-in-out z-0 rounded-lg" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
