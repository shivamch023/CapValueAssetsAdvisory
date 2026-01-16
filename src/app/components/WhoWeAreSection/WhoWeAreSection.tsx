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
      staggerChildren: 0.18,
      ease: easeOut,
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

/* ================= COMPONENT ================= */

export default function WhoWeAreSection() {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden bg-[#0B1D3A]">
      
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A] via-[#0F2550] to-[#08112A] opacity-90" />

      <motion.div
        className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* LEFT IMAGE */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInLeft}
        >
          <div className="relative w-full h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/about/who.png"
              alt="Who We Are"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="w-full lg:w-1/2 text-white"
          variants={fadeInRight}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            CapValue is a boutique advisory firm delivering specialised,
            high-value solutions for businesses, real estate investors,
            and clients seeking funding support.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            We combine strategic insight with practical execution to help
            clients unlock growth, optimise capital, and make confident
            decisions.
          </p>

          {/* CTA BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link href="/contact">
              <motion.button
                className="relative px-8 py-3 font-semibold rounded-lg text-[#0B1D3A]
                           bg-gradient-to-r from-[#C9A240] to-[#FBBF24]
                           shadow-lg overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                Schedule a Call
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
