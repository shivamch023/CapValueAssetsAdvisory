"use client";

import { motion } from "framer-motion";
import { FiShield, FiStar } from "react-icons/fi";
import Link from "next/link";
import PrivacyExtraSection from "../components/PrivacyExtraSection/PrivacyExtraSection";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import PrivacyPolicyInfo from "../components/PrivacyPolicyInfo/PrivacyPolicyInfo";

export default function PrivacyHeroWithIntro() {
  return (
    <>
      {/* ================= BANNER / HERO ================= */}
      <section className="relative h-[80vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/banner/privacy.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1D3A]/85" />

        {/* Banner Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
        >
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-[#FDC13E]/15 flex items-center justify-center">
              <FiShield className="text-[#FDC13E] text-3xl" />
            </div>
          </div>

          <h1 className="text-xl md:text-4xl font-bold text-white mb-4">
            Privacy Notice / Policy
          </h1>

          <p className="text-sm  md:text-[16px] text-white/85 leading-relaxed max-w-4xl mx-auto">
            This Privacy Notice/Policy governs the collection, purpose, use,
            disclosure, retention, and protection of personal data by{" "}
            <span className="font-semibold text-[#FDC13E]">
              CapValue Assets Advisory Private Limited (“CapValuez”, “we”, “us”, “our”)
            </span>
            .
          </p>
        </motion.div>
      </section>

      {/* ================= APPLICABILITY SECTION ================= */}
      <section className="bg-white py-5 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-start"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#0B1D3A]/10 flex items-center justify-center">
                  <FiStar className="text-[#0B1D3A] text-4xl" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#FDC13E] flex items-center justify-center">
                  <FiShield className="text-[#0B1D3A] text-sm" />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-start md:text-left"
            >
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                This Privacy Notice applies to any individual <b>(“you”, “your”)</b> who
                accesses or uses our website{" "}
                <Link href="https://www.capvaluez.com" className="font-bold underline text-[#0B1D3A]">
                  www.capvaluez.com
                </Link>{" "}
                (“Website”) or shares personal data with us through the Website.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We are committed to protecting your privacy and processing
                personal data in accordance with the{" "}
                <span className="font-bold text-[#0B1D3A]">
                  Digital Personal Data Protection Act, 2023 (DPDP Act)
                </span>{" "}
                and applicable Indian laws.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      <PrivacyPolicyInfo/>
      <PrivacyExtraSection/>
      <ContactInfo/>
    </>
  );
}
