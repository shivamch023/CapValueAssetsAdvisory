"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ReferralRewardsYellow() {
  const headingText = "Refer & Earn Benefits!";
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/sharer/sharer.php?u=https://your-saloon-website.com",
      hover: "hover:text-blue-700"
    },
    {
      icon: <FaSquareXTwitter />,
      link: "https://twitter.com/intent/tweet?text=Amazing%20saloon%20discount!",
      hover: "hover:text-blue-500"
    },
    {
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/",
      hover: "hover:text-pink-500"
    },
    {
      icon: <IoLogoWhatsapp />,
      link: "https://wa.me/?text=Check%20out%20this%20amazing%20saloon%20discount!",
      hover: "hover:text-green-500"
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("https://your-saloon-website.com/referral");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-12 text-gray-900 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-2xl md:text-4xl font-extrabold mb-11"
        >
            🎉 
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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-lg text-gray-400"
        >
          Share happiness with your friends and enjoy exclusive discounts together.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[
            { icon: "🎁", title: "You Get", desc: "20% OFF on your next visit after referral." },
            { icon: "👭", title: "Friend Gets", desc: "15% OFF on their first appointment." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative border-l-4 border border-gray-700 rounded-xl p-6 space-y-4 shadow-md hover:shadow-2xl hover:scale-[1.02] hover:rotate-[-1deg] transition-all duration-500 overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-500/10"
            >
              <div className="text-5xl text-yellow-500">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-300">{item.title}</h3>
              <p className="text-gray-500 text-lg font-medium">
                <span className="text-yellow-500 font-bold">{item.desc.split(" ")[0]}</span> {item.desc.split(" ").slice(1).join(" ")}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="mt-5 px-8 py-3 rounded-xl text-sm uppercase cursor-pointer font-semibold text-white border border-yellow-300 transition shadow-md"
        >
          Refer Now
        </motion.button>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/60"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-gray-300 rounded-2xl p-6 space-y-4 max-w-sm w-full text-center shadow-2xl relative"
              >
                <h3 className="text-2xl font-bold text-gray-900">Share Your Referral</h3>
                <div className="flex justify-center gap-4 text-3xl">
                  {shareLinks.map(({ icon, link, hover }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={hover}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
                <div className="bg-gray-100 p-3 rounded-xl text-gray-800 text-sm flex items-center justify-between">
                  <span>https://your-saloon-website.com/referral</span>
                  <button onClick={handleCopy}>📋</button>
                </div>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-green-600 font-semibold text-sm"
                  >
                    Link Copied!
                  </motion.div>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 rounded-xl shadow-md uppercase cursor-pointer border border-gray-800 text-gray-800 font-bold "
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}