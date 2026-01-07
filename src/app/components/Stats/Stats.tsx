"use client";

import CountUp from "react-countup";
import { motion, useAnimation, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const stats = [
  { label: "Assets Under Advisory", value: 12, suffix: "B+" },
  { label: "Successful Transactions", value: 250, suffix: "+" },
  { label: "Years of Excellence", value: 15, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export default function StatsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const statVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  return (
    <section className="w-full px-4 py-16 bg-[#F3F4F6]">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="shadow-md p-6 rounded-lg bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              variants={statVariant}
              initial="hidden"
              animate={controls}
            >
              <p className="md:text-5xl text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1B2D5C] via-[#142964] to-[#C9A240] drop-shadow-lg">
                <CountUp end={stat.value} duration={10} suffix={stat.suffix} redraw={true} />
              </p>
              <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
