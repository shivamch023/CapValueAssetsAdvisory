"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  description: string;
  bgImage: string;
}

export default function PageBanner({
  title,
  description,
  bgImage,
}: PageBannerProps) {
  return (
    <div className="p-2 border border-gray-700 rounded-lg shadow-md mb-10 mt-2">
        <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8 }}
      className={`w-full lg:min-h-[60vh] md:min-h-[45vh] h-[25vh] flex brightness-75 items-center  border border-gray-700 p-3 justify-center bg-cover bg-center bg-no-repeat text-white relative rounded-lg`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative max-w-7xl w-full px-2 md:px-10 flex flex-col items-start text-left py-3 md:py-10 lg:py-14">
        <h1 className="text-xl  md:text-4xl font-extrabold text-yellow-400 mb-4 drop-shadow-md tracking-wide  uppercase ">
          {title}
        </h1>
        <p className="text-sm md:text-xl max-w-2xl text-gray-200 drop-shadow-sm leading-relaxed font-[Inter] italic">
          {description}
        </p>
      </div>
    </motion.section>
    </div>
  );
}
