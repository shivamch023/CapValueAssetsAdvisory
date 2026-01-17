"use client";

import CountUp from "react-countup";
import { motion, useAnimation,easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const stats = [
  { label: "Years of Professional Expertise ", value: 30 , suffix: "+" },
  { label: "Successful Consultations", value: 50, suffix: "+" },
  { label: "Trusted Investors & Partners ", value: 75, suffix: "+" },
  { label: "Client & Partner Trust", value: 100, suffix: "%" },
];

export default function StatsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

 const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: easeOut, // ✅ FIXED
    },
  }),
};


  return (
    <section className="w-full px-12 py-16 bg-[#F3F4F6]">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              className="group p-6 rounded-lg bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* NUMBER */}
              <motion.p
  className="md:text-5xl text-3xl font-extrabold font-mono tracking-tight
             text-transparent bg-clip-text
             bg-gradient-to-r from-[#1B2D5C] via-[#142964] to-[#C9A240]"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
>
  {inView && (
    <CountUp
      end={stat.value}
      duration={2.5}
      suffix={stat.suffix}
    />
  )}
</motion.p>


              {/* LABEL */}
              <p className="text-gray-500 mt-2 text-sm transition-colors duration-300 group-hover:text-gray-700">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
