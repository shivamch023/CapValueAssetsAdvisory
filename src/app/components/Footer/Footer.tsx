"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#010913] to-[#1a1a2e] text-white pt-14 pb-8 px-4 md:px-16 font-sans">
      {/* Top Border Line */}
      <div className="max-w-7xl h-[2px] rounded-full bg-gradient-to-r from-gray-500 via-yellow-100 to-white mb-10 mx-auto" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Brand Info */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center md:text-left"
        >
          <Image
            src="/assets/your-logo.png"
            alt="Salon Logo"
            width={120}
            height={120}
            className="mx-auto md:mx-0 rounded-full border-4 border-yellow-400"
          />
          <h2 className="text-3xl font-extrabold tracking-wide text-yellow-400">
            Your Salon
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Should be Experience premium salon services with modern trends and
            professional care where style meets elegance.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-5 text-2xl text-gray-300">
            {[FaFacebook, FaInstagram, FaGlobe, FaYoutube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="hover:text-yellow-400 transition-all"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Follow us for latest updates & offers!
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">
            Contact Us
          </h3>

          <motion.a
            href="https://www.google.com/maps/place/Main+Market,+Narela,+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all"
          >
            <FaMapMarkerAlt /> <span>Main Market, Narela, Delhi - 110040</span>
          </motion.a>

          <motion.a
            href="tel:+919876543210"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all"
          >
            <FaPhone /> <span>+91-9876543210</span>
          </motion.a>

          <motion.a
            href="mailto:info@salonwebsite.com"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all"
          >
            <FaEnvelope /> <span>info@salonwebsite.com</span>
          </motion.a>
        </motion.div>

        {/* Working Hours (Clickable Redirect) */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-3">
            Working Hours
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              { day: "Mon - Fri", time: "9 AM - 8 PM" },
              { day: "Saturday", time: "9 AM - 9 PM" },
              { day: "Sunday", time: "10 AM - 6 PM" },
            ].map((slot, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/book-apointment"
                  className="flex items-center uppercase  gap-4 pl-2 md:pl-4  hover:text-yellow-400 transition-all cursor-pointer"
                >
                  <span className="w-18 flex text-nowrap font-medium text-white">
                    {slot.day}
                  </span>
                  <IoIosArrowRoundForward />
                  <span className="text-gray-300 text-nowrap">{slot.time}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center space-y-2 text-sm text-gray-400">
        <p>
          Made with <FaHeart className="inline text-pink-500 animate-pulse" />{" "}
          by <span className="font-semibold text-white">The Beauty Baar</span>
        </p>
        <p>© {new Date().getFullYear()} Your Salon. All rights reserved.</p>
      </div>
    </footer>
  );
}
