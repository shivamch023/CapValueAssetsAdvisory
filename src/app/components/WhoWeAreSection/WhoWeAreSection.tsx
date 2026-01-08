"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-[#1B2D59] py-20 px-4 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Left Side Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          variants={fadeInLeft}
        >
          <div className="relative w-full h-72 sm:h-96 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/about/who.png" // replace with your image path
              alt="Who We Are"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="w-full lg:w-1/2 text-white flex flex-col justify-center"
          variants={fadeInRight}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Who We Are ?
          </h2>
          <p className="text-gray-200 mb-4 leading-relaxed">
            CapValue is a boutique advisory firm delivering specialised, high-value solutions for businesses, real estate investors, and clients seeking funding support. We focus on building deep partnerships, understanding each client’s unique challenges, and providing actionable guidance that drives measurable growth.
          </p>
          <p className="text-gray-200 mb-6 leading-relaxed">
            With expertise in business strategy, real estate investments, and capital solutions, we combine advisory insight with practical execution to help clients capture value, unlock growth, and make smarter decisions. Our personalised, outcome-driven approach ensures tangible results.
          </p>

          {/* Button */}
          <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative inline-block"
    >
      <Link href="/contact" legacyBehavior>
        <motion.button
          className="relative cursor-pointer px-8 py-3 font-semibold text-gray-900 rounded-lg overflow-hidden
                     bg-gradient-to-r from-[#C9A240] to-[#FBBF24] shadow-md
                     before:absolute before:top-0 before:left-0 before:w-0 before:h-full
                     before:bg-white before:opacity-10 before:transition-all before:duration-500
                     hover:before:w-full"
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
