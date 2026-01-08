"use client";

import { motion } from "framer-motion";
import {
  FaShoppingBasket,
  FaUserTie,
  FaGem,
  FaGlobe,
  FaBuilding,
  FaHome,
  FaHandsHelping,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const brands = [
  { name: "Magic Basket Pvt Ltd", icon: FaShoppingBasket, color: "text-yellow-500" },
  { name: "Madhavi Portfolio & Management Pvt Ltd", icon: FaUserTie, color: "text-blue-500" },
  { name: "Shagun Jewellers Pvt Ltd", icon: FaGem, color: "text-pink-500" },
  { name: "GenNext Online", icon: FaGlobe, color: "text-green-500" },
  { name: "Shree Gaur Hari Infratech Pvt Ltd", icon: FaBuilding, color: "text-gray-700" },
  { name: "Shree Gaur Hari Ashiana Pvt Ltd", icon: FaHome, color: "text-indigo-500" },
  { name: "SocioRich Foundation", icon: FaHandsHelping, color: "text-red-500" },
  { name: "CXP Technology Services", icon: FaLaptopCode, color: "text-purple-500" },
  { name: "Anekant Ventures", icon: FaRocket, color: "text-orange-500" },
];

// duplicate for seamless infinite scroll
const marqueeBrands = [...brands, ...brands];

export default function BrandSlider() {
  return (
    <div className="bg-white container py-10 overflow-hidden">
      {/* Wrapper width control */}
      <div className="mx-auto w-full md:w-[90%]">
        <div className="  overflow-hidden py-10">
            <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
        >
          {marqueeBrands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div
                key={index}
                className="min-w-[180px] bg-gray-200/40 rounded-xl shadow-xs hover:shadow-md transition-all duration-300
                           flex flex-col items-center justify-center p-4"
              >
                <Icon size={42} className={brand.color} />
                <p
                  className={`mt-2 text-xs font-semibold text-center ${brand.color}`}
                >
                  {brand.name}
                </p>
              </div>
            );
          })}
        </motion.div>
        </div>
      </div>
    </div>
  );
}
