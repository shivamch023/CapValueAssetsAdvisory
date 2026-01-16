"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import {
    FiBarChart2,
    FiMapPin,
    FiSearch,
    FiShield,
    FiTrendingUp,
} from "react-icons/fi";

const Hero = () => {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    
    

  const [loading, setLoading] = useState(false);

    return (
        <section
            className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-28 py-5 overflow-hidden"
            style={{
                backgroundImage: "url('/assets/banner/herogtf.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1633]/75 via-[#0A1633]/60 to-[#08112A]/85" />

            {/* Content */}
            <div className="relative z-10  w-full max-w-5xl text-center text-white">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif font-normal 
                     text-[28px] sm:text-[38px] md:text-[54px] 
                     leading-snug tracking-wide md:mb-14 mb-10"
                >
                    What are you trying to
                    <br />
                    understand or decide?
                </motion.h1>



                {/* Search Section */}
                <div className="w-full max-w-[760px] mx-auto text-left md:mb-10 px-6 md:px-0">
                    <p className="mb-2 text-[12px] sm:text-[13px] text-white/70 font-medium">
                        Ask an Advisor
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex w-full bg-white rounded-md overflow-hidden shadow-xl "
                    >
                        {/* Input */}
                        <div className="relative flex-1">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-[16px]" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Type your question about a property, location, or investment risk"
                                className="w-full pl-10 pr-3 py-3 sm:py-4 text-[13px] sm:text-sm text-gray-700 outline-none"
                            />

                        </div>

                        {/* Button */}
                        <button
                            onClick={() => query.trim() && setOpen(true)}
                            className="bg-[#C4161C] cursor-pointer hover:bg-[#A81217] text-white px-4 sm:px-6 text-[12px] sm:text-sm font-semibold transition whitespace-nowrap"
                        >
                            Submit <br />Question
                        </button>

                    </motion.div>
                </div>

                {/* Helper Text */}
                <p className="mt-2 text-[10px] md:text-[12px] text-white/50 px-10 md:px-0">
                    Share your question and contact details. A CapValuez advisor will review it.
                </p>

                {/* Popular Questions */}
                <div className="mt-10 w-full px-4 md:px-0">
                    <p className="text-[12px] sm:text-[16px] md:text-[18px] text-white/70 mb-5">
                        Questions investors typically ask before committing funds                    </p>

                    {/* Chips Grid */}
                    <div className="grid text-nowrap  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                label: "Location Risk",
                                href: "/advisory/location-risk",
                                icon: <FiMapPin />,
                                iconColor: "text-red-400", // 🔴 red
                            },
                            {
                                label: "Is the Price Fair?",
                                href: "/advisory/price-fairness",
                                icon: <FiBarChart2 />,
                                iconColor: "text-sky-400", // 🔵 sky
                            },
                            {
                                label: "Legal Due Diligence",
                                href: "/advisory/legal-due-diligence",
                                icon: <FiShield />,
                                iconColor: "text-yellow-400", // 🟡 yellow
                            },
                            {
                                label: "Project Feasibility",
                                href: "/advisory/project-feasibility",
                                icon: <FiTrendingUp />,
                                iconColor: "text-cyan-400", // 🔷 sky blue
                            },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group flex items-center justify-center gap-6
                 px-2 py-3
                 text-[12px] sm:text-[12px] md:text-[15px]
                 rounded-md bg-white/10 border border-white/20
                 backdrop-blur-md font-medium text-white
                 hover:bg-white/20 hover:border-white/30
                 transition"
                            >
                                <span
                                    className={`text-[16px] ${item.iconColor} group-hover:scale-110 transition-transform`}
                                >
                                    {item.icon}
                                </span>

                                <span className="text-center leading-tight">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>



                </div>
            </div>
         <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-lg bg-[#0B1D3A] border border-white/10 rounded-xl p-6 text-white"
      >
        {/* Close */}
        <button
          onClick={() => {
            setOpen(false);
            setSuccess(false);
            setLoading(false);
          }}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <FiX size={20} />
        </button>

        {!success ? (
          <>
            <h3 className="text-lg font-semibold mb-2 cursor-pointer">Submit your enquiry</h3>

            <p className="text-sm text-white/60 mb-4">
              Your Question:
              <span className="block mt-1 text-white font-medium">“{query}”</span>
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);

                // simulate sending delay
                setTimeout(() => {
                  setLoading(false);
                  setSuccess(true);

                  // auto-close after 2 seconds
                  setTimeout(() => {
                    setOpen(false);
                    setSuccess(false);
                    setQuery("");
                  }, 2000);
                }, 1500); // 1.5 second spinner
              }}
              className="space-y-4"
            >
              <input
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 outline-none"
              />

              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 outline-none"
              />

              <textarea
                rows={3}
                placeholder="Additional message (optional)"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-[#C4161C] hover:bg-[#A81217] py-3 rounded-md font-semibold transition flex items-center justify-center gap-2"
              >
                {loading && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/25">
                    <svg
                      className="animate-spin h-3 w-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  </span>
                )}
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10"
          >
            <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-green-500/15 flex items-center justify-center">
              <span className="text-green-400 text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              Enquiry Sent Successfully
            </h3>
            <p className="text-white/70 text-sm">
              Our advisor will contact you shortly.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



        </section>
    );
};

export default Hero;
