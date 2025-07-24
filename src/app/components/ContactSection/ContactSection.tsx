"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function ContactSection() {
  const headingText = "Get In Touch";

  return (
    <section className="text-gray-700 font-poppins py-5 px-2 sm:px-2 md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
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
        </motion.h2>{" "}
        <p className="text-gray-400 max-w-xl mx-auto">
          We’d love to hear from you! Fill out the form or reach out using the
          contact details.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Image + Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Image
            src="/assets/contact.jpg"
            alt="Contact"
            width={500}
            height={400}
            className="w-full h-auto object-contain rounded-lg shadow-md"
          />

          <div className="space-y-4 text-gray-400">
            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-4 bg-[#111827] border border-gray-700 hover:border-yellow-500 px-4 py-3 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group"
            >
              <FaPhoneAlt className="text-gray-200 text-3xl border border-gray-700 p-2 rounded-lg group-hover:text-yellow-300 transition-all duration-300" />
              <span className="font-medium group-hover:text-yellow-400 transition">
                +91 98765 43210
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@yourdomain.com"
              className="flex items-center gap-4 bg-[#111827] border border-gray-700 hover:border-yellow-500 px-4 py-3 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group"
            >
              <FaEnvelope className="text-gray-200 text-3xl border border-gray-700 p-2 rounded-lg group-hover:text-yellow-300 transition-all duration-300" />
              <span className="font-medium group-hover:text-yellow-400 transition">
                contact@yourdomain.com
              </span>
            </a>

            {/* Address */}
            <a
              href="https://www.google.com/maps/place/Samaypur+Badli,+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#111827] border border-gray-700 hover:border-yellow-500 px-4 py-3 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group"
            >
              <FaMapMarkerAlt className="text-gray-200 text-3xl border border-gray-700 p-2 rounded-lg group-hover:text-yellow-300 transition-all duration-300" />
              <span className="font-medium group-hover:text-yellow-400 transition">
                Samaypur Badli, Delhi, India
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 border rounded-xl p-8 text-gray-700 shadow-md"
        >
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.96 }}
            whileHover={{ backgroundColor: "rgba(75, 85, 99, 0.5)" }} // smooth gray-600/50
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border border-gray-700 cursor-pointer text-white py-3 px-6 rounded-md font-semibold shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
