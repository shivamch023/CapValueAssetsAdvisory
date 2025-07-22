"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";

export default function VisitTracker() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col-reverse lg:flex-row items-center gap-16 p-2 md:p-16 bg-transparent mt-12"
    >
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full space-y-6 text-left"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-yellow-300 flex items-center gap-3 drop-shadow-md">
          <FaCrown className="text-yellow-400 text-4xl" /> Visit Rewards Program
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-semibold">
          🎁{" "}
          <span className="text-yellow-200 font-bold">
            Get rewarded for your loyalty!
          </span>{" "}
          Book your favorite services and after every 9 visits, your 10th visit
          is absolutely <span className="text-yellow-300">FREE</span>.
        </p>

        <div className="space-y-3 text-gray-300 text-md md:text-lg font-medium">
          <p>✔️ Every visit is automatically tracked on your profile</p>
          <p>✔️ Book 9 Haircuts — the 10th is 100% Free</p>
          <p>✔️ Works on Haircuts, Spa, Facials & More!</p>
        </div>

        <p className="text-yellow-300 text-base italic">
          💡 Bonus Tip: Frequent visits = More Free Services + VIP Treatment
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative group overflow-hidden justify-center items-center cursor-pointer px-6 py-4 sm:px-7 sm:py-3 font-medium w-full sm:w-auto inset-shadow-sm text-gray-200 text-sm sm:text-base text-center border border-gray-700 transition-all duration-300 "
        >
          <span className="relative z-10 uppercase flex items-center justify-center gap-2 transition-all duration-400 group-hover:text-gray-800">
            🎁 Start Earning Free Visit
          </span>

          {/* Tarang-style Animated BG */}
          <span className="absolute top-full right-full w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 group-hover:top-0 group-hover:right-0 transition-all duration-700 ease-in-out z-0" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full flex justify-center"
      >
        <Image
          src="/assets/loyalty/visit.jpg"
          alt="Track Your Visits"
          width={500}
          height={500}
          className="rounded-lg md:h-[55vh] h-[30vh]  w-full object-cover shadow-md border p-2 border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </motion.div>
    </motion.section>
  );
}
