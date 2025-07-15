"use client";

import { motion } from "framer-motion";
import {
  FaUserTie,
  FaCrown,
  FaHandsHelping,
  FaListAlt,
  FaSmile,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const headingText = "Why Choose Us";

  const points = [
    {
      icon: <FaUserTie className="text-xl md:text-2xl" />,
      title: "Expert Professionals",
      desc: "Highly skilled and experienced team delivering exceptional service.",
      color: "bg-gray-800",
    },
    {
      icon: <FaCrown className="text-xl md:text-2xl" />,
      title: "Luxurious Environment",
      desc: "Sophisticated, relaxing setting for all your beauty treatments.",
      color: "bg-yellow-500",
    },
    {
      icon: <FaHandsHelping className="text-xl md:text-2xl" />,
      title: "Personalized Services",
      desc: "Customized treatments to meet your individual needs and preferences.",
      color: "bg-gray-800",
    },
    {
      icon: <FaListAlt className="text-xl md:text-2xl" />,
      title: "Comprehensive Services",
      desc: "Wide range of advanced hair and beauty treatments.",
      color: "bg-green-500",
    },
    {
      icon: <FaSmile className="text-xl md:text-2xl" />,
      title: "Outstanding Satisfaction",
      desc: "98% customer satisfaction rate with a growing number of happy clients.",
      color: "bg-gray-800",
    },
  ];

  return (
    <section className="bg-[#010913] text-white pt-15 pb-10 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl md:text-5xl font-extrabold mb-6"
        >
          {headingText.split("").map((char, index) => {
            const color =
              index % 3 === 0
                ? "#FFD700"
                : index % 3 === 1
                ? "#CCCCCC"
                : "#FFFFFF";

            const showUnderline = color !== "#CCCCCC";

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative inline-block ${char === " " ? "w-2" : ""}`}
                style={{ color }}
              >
                {char}
                {showUnderline && (
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] w-full"
                    style={{
                      backgroundColor: color,
                      transformOrigin: "left",
                    }}
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.05,
                    }}
                  />
                )}
              </motion.span>
            );
          })}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto text-gray-300 mb-12 text-sm md:text-base"
        >
          DISCOVER WHY THE SALON IS DELHI&apos;S TOP CHOICE FOR BEAUTY AND HAIR
          CARE. OUR COMMITMENT TO EXCELLENCE, LUXURIOUS ENVIRONMENT, AND
          PERSONALIZED SERVICES MAKE US STAND OUT.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 ">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: index % 3 === 0 ? 10 : index % 3 === 1 ? -10 : 0,
                transition: { duration: 0.5, type: "spring" },
              }}
              className="p-4 rounded-lg border border-gray-700 bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`md:w-12 md:h-12 w-10 h-10 flex items-center justify-center rounded-full ${point.color} shrink-0`}
                >
                  {point.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-md md:text-lg font-bold mb-1">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
