"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";

const reels = [
  {
    video: "/assets/vid/makeup1.mp4",
    caption: "Brown girls wearing suit >>>>",
    instaLink: "https://www.instagram.com/reel/xyz1",
  },
  {
    video: "/assets/vid/makeup2.mp4",
    caption: "Your Hair deserves the best. Give it a gift of New Colour",
    instaLink: "https://www.instagram.com/reel/xyz2",
  },
  {
    video: "/assets/vid/makeup3.mp4",
    caption: "Trends Salon (Men & Women)",
    instaLink: "https://www.instagram.com/reel/xyz3",
  },
  {
    video: "/assets/vid/makeup4.mp4",
    caption: "Say goodbye to dull locks. Hello to vibrant color!",
    instaLink: "https://www.instagram.com/reel/xyz4",
  },
  {
    video: "/assets/vid/makeup2.mp4",
    caption: "Your Hair deserves the best. Give it a gift of New Colour",
    instaLink: "https://www.instagram.com/reel/xyz2",
  },
  {
    video: "/assets/vid/makeup3.mp4",
    caption: "Trends Salon (Men & Women)",
    instaLink: "https://www.instagram.com/reel/xyz3",
  },
];

export default function InstaReels() {
  const swiperRef = useRef<SwiperType | null>(null);
    const headingText = "Our Instgaram Feed";


  return (
    <section className="py-6 px-4 md:px-12 bg-[#010913] text-white">
       <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl md:text-5xl font-extrabold mb-15"
        >
          {headingText.split("").map((char, index) => {
            const color =
              index % 3 === 0
                ? "#FFD700" // Yellow
                : index % 3 === 1
                ? "#CCCCCC" // Light Gray
                : "#FFFFFF"; // White

            const showUnderline = color !== "#CCCCCC";

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative inline-block ${char === " " ? "w-2" : ""}`}
                style={{
                  color,
                }}
              >
                {char}
                {showUnderline && (
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] w-full"
                    style={{
                      backgroundColor: color,
                      transformOrigin: "left",
                    }}
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
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

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/50 cursor-pointer hover:bg-white/40 p-1 text-gray-900 rounded-full transition"
        >
          <GrFormPrevious size={36} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/50 cursor-pointer hover:bg-white/40 p-1 text-gray-900 rounded-full transition"
        >
          <GrFormNext size={36} />
        </button>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          speed={700}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="px-4"
        >
          {reels.map((reel, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={reel.instaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden block"
              >
                {/* Video */}
                <motion.video
                  src={reel.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full md:h-[400px] h-[500px] object-cover rounded-xl p-2 border border-gray-700 transition-transform duration-500"
                />

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3 backdrop-blur-md bg-white border-gray-700 border text-pink-600 p-2 rounded-full shadow-md z-10 group-hover:scale-110 transition">
                  <FaInstagram size={20} />
                </div>

                {/* Caption Slide from Bottom on Hover */}
                <div className="absolute bottom-0 left-0 px-2 right-0 translate-y-full group-hover:translate-y-0 bg-gray-900/50 backdrop-blur-md transition-all duration-500 p-4">
                  <p className="text-gray-200 text-sm md:text-base font-semibold text-center">
                    {reel.caption}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
