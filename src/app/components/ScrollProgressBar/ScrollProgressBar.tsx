"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r 
                 from-[#C9A240] to-[#142964] z-[9999]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
}
