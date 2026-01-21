"use client";

import React from "react";
import { motion } from "framer-motion";
import { VscTerminalUbuntu } from "react-icons/vsc";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

// usage


const TermsAndConditions = () => {
  return (
    <>
      {/* ================= Banner Section ================= */}
      <section className="relative w-full h-[80vh]   md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/banner/term.jpg')",
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
              <VscTerminalUbuntu className="text-[#FDC13E] text-3xl" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Terms of Use
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-4xl mx-auto">
            By accessing and using our website{" "}
            <Link
              className="text-yellow-500 hover:underline"
              href="https://www.capvaluez.com"
            >
              www.capvaluez.com
            </Link>{" "}
            (“Website”), users (“you”, “your”) agree to comply with and be bound
            by these Terms of Use <b className="text-yellow-500">(“Terms”)</b>,
            along with our <b className="text-yellow-500">Privacy Policy</b> and{" "}
            <b className="text-yellow-500">Disclaimer</b>.
          </p>
        </motion.div>
      </section>

      {/* ================= T&C Content Section ================= */}
      <section className="w-full overflow-hidden bg-gray-50 py-12 px-4 sm:px-6 md:px-0 flex justify-center">
        <div className="max-w-6xl w-full overflow-hidden ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <FiCheckCircle className="text-[#FDC13E] text-3xl flex-shrink-0 mt-1" />
            <div className="space-y-3 text-gray-800 text-sm sm:text-base md:text-md leading-relaxed">
              <p>
                Your use of the Website constitutes confirmation that you have
                read, understood, and agreed to these Terms, the Privacy Policy,
                and the Disclaimer. You further agree not to infringe or violate
                any rights of CapValue Assets Advisory Private Limited
                (“CapValuez”, “we”, “us”, “our”), including intellectual
                property rights such as copyrights and trademarks.
              </p>
              <p>
                These Terms, read together with the Privacy Policy, constitute a
                legally binding agreement enforceable under the laws of India. By
                accepting these Terms, you represent that you are at least 18
                years of age and have the legal capacity to enter into this
                agreement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
