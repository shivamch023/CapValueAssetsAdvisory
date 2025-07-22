"use client";

import { motion } from "framer-motion";
import { FaCrown, FaGift, FaStar } from "react-icons/fa";

export default function ForeverClientClub() {
  return (
    <section className="w-full py-12 px-4 md:px-14 bg-transparent">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 flex flex-wrap justify-center gap-2">
          <span className="text-yellow-400">“Forever Client”</span>
          <span className="text-white">Club</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Spend a wonderful year with us and unlock{" "}
          <span className="text-yellow-400 font-semibold">elite rewards</span>.
          Enjoy premium experiences as a token of our appreciation!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Free Upgrade Per Year */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl border border-gray-700 shadow-md p-6 group hover:scale-105 transition-all duration-500"
        >
          <div className="flex flex-col items-center space-y-4">
            <FaGift className="text-yellow-400 text-6xl group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold text-gray-200">
              Free Yearly Upgrade
            </h3>
            <p className="text-gray-400 text-center text-base leading-relaxed">
              Get{" "}
              <span className="font-semibold text-yellow-400">
                1 free upgrade
              </span>{" "}
              every year — choose from Deep Conditioning, Scalp Massage, or
              other premium add-ons!
            </p>
          </div>
        </motion.div>

        {/* Exclusive Access */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl border border-gray-700 shadow-md p-6 group hover:scale-105 transition-all duration-500"
        >
          <div className="flex flex-col items-center space-y-4">
            <FaStar className="text-yellow-400 text-6xl group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold text-gray-200">
              VIP Service Access
            </h3>
            <p className="text-gray-400 text-center text-base leading-relaxed">
              Be the{" "}
              <span className="font-semibold text-yellow-400">
                first to experience
              </span>{" "}
              new treatments, luxury services, and exclusive salon launches.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Club Badge */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex cursor-pointer items-center gap-4 px-6 py-4 rounded-full border border-yellow-400 shadow-lg bg-gray-800">
          <FaCrown className="text-yellow-400 text-3xl" />
          <span className="text-lg md:text-xl font-bold text-yellow-400">
            Forever Client Club Member
          </span>
        </div>
      </motion.div>
    </section>
  );
}
