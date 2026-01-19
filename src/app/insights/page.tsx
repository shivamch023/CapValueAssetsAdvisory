"use client";

import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1D3A] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl w-full text-center bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-10 sm:p-14"
      >
        {/* Logo / Brand */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1D3A] tracking-tight">
            CAPVALUEZ
          </h1>
          <div className="w-16 h-[3px] bg-[#C9A240] mx-auto mt-3 rounded-full" />
        </div>

        {/* Main Text */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Coming Soon
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          We’re working behind the scenes to bring you a refined advisory
          experience focused on clarity, strategy, and long-term value.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-8" />

        {/* Footer Note */}
        <p className="text-xs sm:text-sm text-gray-500 italic">
          Thank you for your patience. This section will be live shortly.
        </p>
      </motion.div>
    </div>
  );
}
