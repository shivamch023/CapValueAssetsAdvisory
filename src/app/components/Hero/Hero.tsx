"use client";

import React from "react";
import { CgToolbox } from "react-icons/cg";
import { FiTrendingUp } from "react-icons/fi";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: easeOut,
      },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: easeOut,
      },
    }),
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: easeOut,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative w-full px-4 py-20 lg:py-32 overflow-hidden
      bg-gradient-to-br from-[#142964] via-[#1F2F55] to-[#2D2E30]"
    >
      {/* ================= LEFT BACKGROUND IMAGE ================= */}
      {/* <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block pointer-events-none">
        <img
          src="/assets/banner/real-estate.png" 
          alt="background"
          className="h-full w-full  opacity-10 blur-xs"
        />
      </div> */}

      <div className="relative container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex-1 flex flex-col gap-4 relative z-10">

          {/* Badge */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="flex items-center gap-2 bg-yellow-600/10 border border-yellow-700/10
            backdrop-blur-lg px-6 py-2 rounded-full w-max"
          >
            {/* Sparkle Dot */}
            <motion.span
              className="w-2 h-2 bg-[#C9A240] rounded-full"
              animate={
                inView
                  ? {
                      scale: [1, 1.6, 1],
                      opacity: [1, 0.7, 1],
                      boxShadow: [
                        "0 0 0px rgba(201,162,64,0.6)",
                        "0 0 10px rgba(201,162,64,0.9)",
                        "0 0 0px rgba(201,162,64,0.6)",
                      ],
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 1.6,
                ease: "easeInOut",
                repeat: inView ? Infinity : 0,
              }}
            />

            <p className="text-[13px] text-[#C9A240] font-bold">
              Trusted by Businesses and Investors
            </p>
          </motion.div>

          {/* Headings */}
         <motion.h2
  variants={fadeLeft}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  custom={1}
  className="text-4xl lg:text-5xl font-bold italic text-white leading-none"
>
  Capture Value and
</motion.h2>

<motion.h2
  variants={fadeLeft}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  custom={2}
  className="text-4xl lg:text-5xl font-bold italic text-[#C9A240] leading-none -mt-1"
>
  Growth with Advisory Solutions.
</motion.h2>


          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="text-gray-300 text-[16px] max-w-xl"
          >
            CapValue empowers clients with smarter decisions in Business,
            Real Estate, and Funding through focused advisory and value-added solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button className="flex text-[12px] items-center gap-2
              bg-[#C9A240] text-gray-900 px-8 py-3 rounded-md font-semibold
              hover:opacity-90 transition">
              Schedule Consultation <span>→</span>
            </button>

            <button className="bg-transparent text-[12px] border border-gray-500
              text-white px-8 py-3 rounded-md font-semibold tracking-wide
              transition-all duration-300 hover:bg-white hover:text-[#142964]">
              Explore Service
            </button>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 grid grid-cols-1 gap-4 relative z-10">

          {[ 
            {
              title: "Business Advisory",
              desc: "Strategic guidance for complex business challenges.",
              icon: <CgToolbox className="w-6 h-6 text-[#C9A240]" />,
            },
            {
              title: "Real Estate Investment",
              desc: "Institutional-grade real estate opportunities.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#C9A240]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-4v-5H8v5H4a1 1 0 01-1-1V10z" />
                </svg>
              ),
            },
            {
              title: "Fund Raise",
              desc: "Fueling business expansion with right capital solutions.",
              icon: <FiTrendingUp className="w-6 h-6 text-[#C9A240]" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 1}
              className="bg-gray-400/10 border border-gray-300/20 backdrop-blur-md
              rounded-lg p-6 flex items-center gap-4 hover:shadow-xl
              hover:bg-gray-300/10 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-yellow-900/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[13px]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
