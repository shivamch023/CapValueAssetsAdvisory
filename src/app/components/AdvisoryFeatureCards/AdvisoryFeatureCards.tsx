"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import {
  FaStar,
  FaMoneyBillWave,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";

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
      "We focus on delivering high-quality, well-considered guidance that helps clients make stronger decisions and achieve meaningful outcomes.",
    icon: <FaStar size={28} />,
    color: "#FBBF24",
  },
  {
    id: 2,
    title: "Minimal Upfront Commitment",
    description:
      "Our initial fees are kept minimal and focused on essential work, ensuring clarity and alignment before deeper engagement.",
    icon: <FaMoneyBillWave size={28} />,
    color: "#22C55E",
  },
  {
    id: 3,
    title: "Personal Attention",
    description:
      "Clients work closely with experienced professionals and receive direct, hands-on support throughout the engagement.",
    icon: <FaUserFriends size={28} />,
    color: "#3B82F6",
  },
  {
    id: 4,
    title: "Strong Client Relationships",
    description:
      "We build long-term relationships based on trust, transparency, and consistent delivery rather than one-time transactions.",
    icon: <FaHandshake size={28} />,
    color: "#EF4444",
  },
];

export default function AdvisoryFeatureCards() {
  return (
    <section className="w-full px-4 py-2 bg-white overflow-hidden mb-10">
      {/* =================== Heading =================== */}
      <motion.h2
        className="text-2xl md:text-4xl font-extrabold text-center mb-12 text-[#1B2D5A]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Our <span className="text-[#C9A240]">Approach</span>
      </motion.h2>

      {/* =================== Cards =================== */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={fadeUp}
            className="group relative bg-white p-6 rounded-2xl border border-transparent shadow-md transition-all duration-300 flex flex-col items-center text-center h-full"
            whileHover={{
              y: -6,
              boxShadow: `0 10px 20px ${card.color}33`,
              borderColor: card.color,
            }}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 mb-5 flex shadow-lg items-center justify-center rounded-md transition-all duration-300"
              style={{
                backgroundColor: card.color,
                color: "#fff",
              }}
            >
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm font-normal leading-relaxed mt-auto">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
