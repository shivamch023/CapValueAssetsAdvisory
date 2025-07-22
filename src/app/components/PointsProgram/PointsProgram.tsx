"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PointsProgram() {
  const headingText = "Premium Loyalty Rewards";

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-[1.6rem] md:text-4xl font-extrabold mb-6 "
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
              transition={{ delay: index * 0.05 }}
              className={`relative inline-block ${char === " " ? "w-2" : ""}`}
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
                  animate={{ scaleX: [0, 1, 0] }}
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

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex flex-col lg:flex-row items-center gap-16 p-2 md:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/assets/loyalty/loyalty.jpg"
            alt="Loyalty Points"
            width={500}
            height={800}
            className="rounded-lg w-full object-cover shadow-md border border-gray-700 p-2 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full space-y-5 text-left p-2"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            🎉{" "}
            <span className="text-yellow-200 font-bold">
              Exclusive rewards every visit!
            </span>{" "}
            Earn 1 point per ₹1 spent, and unlock ₹10 off for every 100 points.
            Pamper yourself while saving more.
          </p>

          <ul className="list-disc pl-6 text-md md:text-lg text-gray-300 space-y-3 font-medium">
            <li>✨ 1 Point = ₹1 Spent | 100 Points = ₹10 Reward</li>
            <li>✨ Redeem on haircuts, spa, facials, and beauty services</li>
            <li>✨ Transparent, No hidden terms, No expiry!</li>
          </ul>

          <p className="text-sm md:text-base text-yellow-300 italic mt-4">
            💡 Tip: Regular visits mean exclusive surprise gifts & early access
            to special events.
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative group overflow-hidden justify-center items-center cursor-pointer px-6 py-4 sm:px-7 sm:py-3 font-medium w-full sm:w-auto inset-shadow-sm text-gray-200 text-sm sm:text-base text-center border border-gray-700 transition-all duration-300 "
          >
            <span className="relative z-10 uppercase flex items-center justify-center gap-2 transition-all duration-400 group-hover:text-gray-800">
              🎁 Get Loyalty Coins
            </span>

            {/* Tarang-style Animated BG */}
            <span className="absolute top-full right-full w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 group-hover:top-0 group-hover:right-0 transition-all duration-700 ease-in-out z-0" />
          </motion.button>
        </motion.div>
      </motion.section>
    </>
  );
}
