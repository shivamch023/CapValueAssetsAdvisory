"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GiPartyPopper } from "react-icons/gi";
import { BsBalloonHeart } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function BirthdayAnniversaryPerks() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-12 px-3 md:px-14 bg-transparent">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4">
          🎁 Birthday & Anniversary Perks
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Luxury rewards for your special days — because you deserve the best!
        </p>

        {/* Share Button */}
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden text-sm cursor-pointer border shadow-md border-gray-700 text-white uppercase font-semibold py-3 px-6 rounded-md transition duration-300 group"
        >
          <span className="relative z-30 group-hover:text-gray-900 transition-colors duration-300">
            Share With Your Friends
          </span>
          <span className="absolute left-0 top-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out rounded-md z-10"></span>
        </motion.button>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
        {/* Birthday Card */}
        <motion.div
          className="rounded-xl border border-gray-700 shadow-md p-3 overflow-hidden group transition-transform duration-300"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden">
            <Image
              src="/assets/loyalty/birthday.jpg"
              alt="Birthday Treat"
              width={800}
              height={600}
              className="w-full h-[260px] object-cover group-hover:scale-110 hover:rounded-md transition-transform duration-700 rounded-md"
            />
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-yellow-500 text-3xl">
              <GiPartyPopper />
              <h3 className="text-xl font-bold text-gray-400">
                Birthday Month Special
              </h3>
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              Treat yourself to a{" "}
              <span className="font-semibold text-yellow-500">
                Free Mini Facial
              </span>{" "}
              during your birthday month — because glowing skin is always in!
            </p>
          </div>
        </motion.div>

        {/* Anniversary Card */}
        <motion.div
          className="rounded-xl border border-gray-700 shadow-md overflow-hidden group transition-transform duration-300 p-3"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative overflow-hidden">
            <Image
              src="/assets/loyalty/anniversery.jpg"
              alt="Anniversary Reward"
              width={800}
              height={600}
              className="w-full h-[260px] object-cover group-hover:scale-110 hover:rounded-md transition-transform duration-700 rounded-md"
            />
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3 text-yellow-500 text-3xl">
              <BsBalloonHeart />
              <h3 className="text-xl font-bold text-gray-400">
                Client Anniversary Gift
              </h3>
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              Mark your{" "}
              <span className="font-semibold text-yellow-500">
                1-Year Anniversary
              </span>{" "}
              with a complimentary{" "}
              <span className="font-semibold text-yellow-500">
                Deep Conditioning Treatment
              </span>{" "}
              — relax, refresh, and rejuvenate!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-sm w-full text-center space-y-5"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Share with Friends
              </h3>
              <div className="flex justify-center space-x-6 text-4xl text-yellow-500">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined" ? window.location.href : ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    "Check out this amazing offer: " +
                      (typeof window !== "undefined"
                        ? window.location.href
                        : "")
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition"
                >
                  <FaInstagram />
                </a>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-800 cursor-pointer text-white mt-6 px-6 py-3 rounded-md hover:bg-gray-900 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
