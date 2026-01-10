"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
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

// 🔁 duplicate data
const marqueeBrands = [...brands, ...brands];

export default function BrandSlider() {
  const x = useMotionValue(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const halfWidth = listRef.current.scrollWidth / 2;

    const controls = animate(x, -halfWidth, {
      duration: 14,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [x]);

  return (
    <div className="bg-white container py-10 overflow-hidden m-5">
      <div className="mx-auto w-full md:w-[90%] relative overflow-hidden">

        {/* Left white fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-20
                        bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right white fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-20
                        bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          ref={listRef}
          style={{ x }}
          className="flex gap-6"
        >
          {marqueeBrands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div
                key={index}
                className="min-w-[180px] bg-gray-200/40 rounded-xl
                           flex flex-col items-center justify-center p-4"
              >
                <Icon size={42} className={brand.color} />
                <p className={`mt-2 text-xs font-semibold text-center ${brand.color}`}>
                  {brand.name}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
