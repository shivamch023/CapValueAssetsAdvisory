"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ================= ANIMATIONS ================= */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: easeOut,
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/* ================= COMPONENT ================= */

export default function WhoWeAreSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1D3A]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A] via-[#0F2550] to-[#08112A]" />

      <motion.div
        className="
          relative z-10 max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-16
          py-20 lg:py-28
          flex flex-col lg:flex-row items-center gap-14
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* IMAGE */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeLeft}
        >
          <div
            className="
              relative w-full max-w-lg
              h-72 sm:h-96 lg:h-[440px]
              rounded-2xl overflow-hidden
              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              border border-white/10
            "
          >
            <Image
              src="/assets/about/who.png"
              alt="About CapValuez"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="w-full lg:w-1/2 text-white"
          variants={fadeRight}
        >
         

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            About <span className="text-[#C9A240]">CapValuez</span>
          </h2>

          <div className="mt-6 space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
            <p>
              In asset investing and business growth, challenges rarely arise from a lack of opportunity. They emerge from poor asset selection, mispricing, regulatory blind spots, and weak due diligence.
            </p>

            <p>
              CapValuez is a boutique advisory firm delivering specialised, value-focused solutions for businesses, real estate investors, and capital allocation decisions. Our founders have advised clients independently for years, building trust through disciplined analysis and execution.
            </p>

            <p>
              We combine deep market insight with practical execution to help clients evaluate opportunities clearly, allocate capital wisely, and make confident long-term decisions.
            </p>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link href="/contact">
              <button
                className="
                  inline-flex items-center justify-center
                  px-9 py-3 rounded-lg
                  font-semibold text-[#0B1D3A]
                  bg-gradient-to-r from-[#C9A240] to-[#FBBF24]
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                "
              >
                Schedule a Call
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
