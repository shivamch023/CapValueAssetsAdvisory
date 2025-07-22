"use client";

import { motion } from "framer-motion";
import { FaGoogle, FaInstagram } from "react-icons/fa";

export default function LoyaltyFeedback() {
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
          <span className="text-yellow-400">Loyalty</span>
          <span className="text-gray-300">for</span>
          <span className="text-white">Feedback</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Submit your{" "}
          <span className="text-yellow-400 font-semibold">Google</span> or{" "}
          <span className="text-pink-500 font-semibold">Instagram Reviews</span>{" "}
          with a picture & earn{" "}
          <span className="text-yellow-400 font-bold">100 Loyalty Points</span>{" "}
          every time!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Google Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl border border-gray-700 shadow-md p-6 group hover:scale-105 transition-all duration-500"
        >
          <div className="flex flex-col items-center space-y-4">
            <FaGoogle className="text-yellow-400 text-6xl group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold text-gray-200">Google Reviews</h3>
            <p className="text-gray-400 text-center text-base leading-relaxed">
              Share your experience with a{" "}
              <span className="font-semibold text-yellow-400">Google Review</span>{" "}
              + photo & instantly earn{" "}
              <span className="font-semibold text-yellow-400">
                100 Loyalty Points!
              </span>
            </p>
          </div>
        </motion.div>

        {/* Instagram Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl border border-gray-700 shadow-md p-6 group hover:scale-105 transition-all duration-500"
        >
          <div className="flex flex-col items-center space-y-4">
            <FaInstagram className="text-pink-500 text-6xl group-hover:scale-110 transition" />
            <h3 className="text-xl font-bold text-gray-200">
              Instagram Reviews
            </h3>
            <p className="text-gray-400 text-center text-base leading-relaxed">
              Tag us in your{" "}
              <span className="font-semibold text-pink-500">
                Instagram Post/Story
              </span>{" "}
              + photo & get{" "}
              <span className="font-semibold text-yellow-400">
                100 Loyalty Points
              </span>{" "}
              per post!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
