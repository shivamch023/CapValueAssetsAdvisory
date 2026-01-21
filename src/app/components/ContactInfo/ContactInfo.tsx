"use client";

import { FiMail, FiGlobe, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-[#0B1D3A] mb-8 text-center"
        >
          Contact Information
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Email */}
          <motion.a
            href="mailto:contact@capvaluez.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#FDC13E]/10"
          >
            <FiMail className="text-[#FDC13E] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[#0B1D3A] mb-1">Email</h3>
              <p className="text-gray-700 text-sm md:text-md">contact@capvaluez.com</p>
            </div>
          </motion.a>

          {/* Website */}
          <motion.a
            href="https://www.capvaluez.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#FDC13E]/10"
          >
            <FiGlobe className="text-[#FDC13E] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[#0B1D3A] mb-1">Website</h3>
              <p className="text-gray-700 text-sm md:text-md">www.capvaluez.com</p>
            </div>
          </motion.a>

          {/* Optional Phone */}
          <motion.a
            href="tel:+91-9811310951"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4 p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#FDC13E]/10"
          >
            <FiPhone className="text-[#FDC13E] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[#0B1D3A] mb-1">Call</h3>
              <p className="text-gray-700 text-sm md:text-md">+91-9811310951</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
