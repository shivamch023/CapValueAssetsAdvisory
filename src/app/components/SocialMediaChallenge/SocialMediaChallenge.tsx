"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function SocialMediaChallenge() {
  const headingText = "Social Media Challenges";

  return (
    <section className="w-full py-12 px-3 md:px-14 bg-transparent">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-center text-3xl md:text-5xl font-extrabold mb-10"
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: index * 0.03 }}
                className={`relative inline-block ${char === " " ? "w-2" : ""}`}
                style={{
                  color,
                }}
              >
                {char}
                {showUnderline && (
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] w-full"
                    style={{ backgroundColor: color, transformOrigin: "left" }}
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

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Post your{" "}
          <span className="text-yellow-400 font-semibold">
            Hair/Skin Transformation
          </span>{" "}
          on social media, tag our salon and get a chance to{" "}
          <span className="text-yellow-400 font-semibold">
            win exciting gifts!
          </span>
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 p-6 rounded-xl border border-gray-700 shadow-md hover:scale-105 transition-all duration-500 group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <FaInstagram className="text-pink-600 text-6xl group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold text-gray-200">Instagram Challenge</h3>
            <p className="text-gray-400 text-center text-base">
              Post your stunning makeover, tag us on Instagram & stand a chance to get featured + win salon perks!
            </p>
          </div>
        </motion.a>

        {/* Facebook */}
        <motion.a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 p-6 rounded-xl border border-gray-700 shadow-md hover:scale-105 transition-all duration-500 group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <FaFacebook className="text-blue-500 text-6xl group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold text-gray-200">Facebook Challenge</h3>
            <p className="text-gray-400 text-center text-base">
              Share your transformation story on Facebook, tag our salon and you could win monthly lucky draw prizes!
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
