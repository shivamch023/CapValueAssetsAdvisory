"use client";

import { cardsData } from "@/app/data/services";
import Link from "next/link";
import { motion, type Variants, easeOut } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function AdvisoryCards() {
  return (
    <section id="services" className="w-full  px-4 py-15 bg-white overflow-hidden">
      {/* ================= HEADING ================= */}
      {/* ================= HEADING ================= */}
<div  className="flex flex-col items-center mb-12 text-center">
  <motion.h1
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeUp}
  className="text-3xl sm:text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight"
  style={{ fontVariant: "small-caps" }}
>
  <span className="text-[#1B2D5C]">Comprehensive </span>
  <span className="text-[#B79643]">Solutions</span>
</motion.h1>



  <motion.p
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    className="mt-2 text-gray-500 text-[15px]"
  >
   Three areas of expertise. One clear commitment to your success.
  </motion.p>
</div>


      {/* ================= CARDS ================= */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            variants={fadeScale}
            className="
              group relative rounded-2xl bg-white p-8
              border border-gray-200
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#C9A240]
              hover:shadow-2xl
              overflow-hidden
            "
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C9A240] transition-all duration-300" />

            {/* Icon */}
            <motion.div
              variants={fadeUp}
              className="
                w-14 h-14 mb-6 flex items-center justify-center rounded-xl
                bg-gray-100 text-[#1B2D5C]
                group-hover:bg-[#C9A240]/20
                group-hover:text-[#C9A240]
                transition-all duration-300
              "
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              variants={fadeUp}
              className="text-xl font-bold text-[#1B2D5C] mb-3"
            >
              {card.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-sm mb-5 leading-relaxed"
            >
              {card.description}
            </motion.p>

            {/* Core Capabilities */}
            <motion.ul variants={container} className="space-y-2 mb-2">
              {card.coreCapabilities.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="text-sm text-gray-700 flex items-center gap-2"
                >
                  <span className="text-[#C9A240] text-[18px]">•</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* Button */}
            <motion.div variants={fadeUp}>
              <Link
                href={`/services/${card.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2D5C] group-hover:text-[#C9A240]"
              >
                Learn More
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
