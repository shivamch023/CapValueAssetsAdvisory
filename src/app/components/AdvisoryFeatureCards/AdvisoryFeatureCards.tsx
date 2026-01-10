"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import { FaStar, FaMoneyBillWave, FaUserFriends, FaHandshake } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cards = [
  {
    id: 1,
    title: "Excellence",
    description:
      "We consistently deliver top-tier advisory services, exceeding expectations and positioning your business for maximum impact.",
    icon: <FaStar size={28} />,
    color: "#FBBF24", // yellow
  },
  {
    id: 2,
    title: "Minimal Upfront Payment",
    description:
      "Our upfront fees are minimal and cover essential services, ensuring your business attracts the right opportunities.",
    icon: <FaMoneyBillWave size={28} />,
    color: "#22C55E", // green
  },
  {
    id: 3,
    title: "Personal Attention",
    description:
      "You’ll never be on your own. Our experienced team provides dedicated support throughout every step of your advisory journey.",
    icon: <FaUserFriends size={28} />,
    color: "#3B82F6", // blue
  },
  {
    id: 4,
    title: "Strong Client Relationships",
    description:
      "We build lasting, trusted relationships with our clients, grounded in transparency, integrity, and exceptional service.",
    icon: <FaHandshake size={28} />,
    color: "#EF4444", // red
  },
];

export default function AdvisoryFeatureCards() {
  return (
    <section className="w-full px-4 py-10 bg-white overflow-hidden mb-10">
      {/* =================== Heading =================== */}
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold  text-center mb-12 text-[#1B2D5A]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Why <span className="text-[#C9A240]">CapValue ? </span>
      </motion.h2>

      {/* =================== Cards =================== */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={fadeUp}
            className="group relative bg-white p-8 rounded-2xl border border-transparent shadow-md transition-all duration-300 flex flex-col items-center text-center"
            whileHover={{
              y: -6,
              boxShadow: `0 10px 20px ${card.color}33`,
              borderColor: card.color,
            }}
            style={{
              minHeight: "360px",
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 mb-6 flex shadow-lg items-center justify-center rounded-md transition-all duration-300"
              style={{
                backgroundColor: card.color,
                color: "#fff",
              }}
            >
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-extrabold mb-3 text-gray-600">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
