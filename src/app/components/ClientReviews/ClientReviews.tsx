"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import { PiArrowBendDoubleUpLeftThin } from "react-icons/pi";
import { PiArrowBendDoubleUpRightThin } from "react-icons/pi";

import { FaStar } from "react-icons/fa";
import { Swiper as SwiperType } from "swiper";

const reviews = [
  {
    name: "PUNIT GUPTA",
    date: "2024-06-02",
    image: "/assets/service/beauty.png",
    rating: 5,
    comment: "Nice hair cutting by akash. Good experience",
  },
  {
    name: "prajwal prasad",
    date: "2024-05-24",
    image: "/assets/service/beauty.webp",
    rating: 5,
    comment:
      "Best saloon and good staff with polite nature and good skills price is best akash done a very good work i like it",
  },
  {
    name: "PUNIT GUPTA",
    date: "2024-06-02",
    image: "/assets/service/beauty.png",
    rating: 5,
    comment: "Nice hair cutting by akash. Good experience",
  },
  {
    name: "WHY PEE",
    date: "2024-05-22",
    image: "/assets/service/bleach.jpg",
    rating: 5,
    comment:
      "After a long time got a perfect saloon for men..and a special thanks to Aakash Sirsiyia my hair stylist....cheers",
  },
  {
    name: "PUNIT GUPTA",
    date: "2024-06-02",
    image: "/assets/service/beauty.png",
    rating: 5,
    comment: "Nice hair cutting by akash. Good experience",
  },
];

export default function ClientReviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#010913] text-white pt-14 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-gray-300 to-white bg-clip-text text-transparent animate-pulse"
        >
          What Our Clients{" "}
          <span className="text-yellow-400 inline-flex items-center">
            Say
            <span className="ml-1 text-6xl animate-jhanjhanaht">?</span>
          </span>
        </motion.h2>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-6">
          At The salon, our clients are our top priority. We take pride in
          delivering exceptional beauty and hair services that leave a lasting
          impression.
        </p>

        {/* Swiper */}
        <div className="relative">
          {/* Prev/Next */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 md:left-[35%] top-1/2 z-10 cursor-pointer -translate-y-1/2 text-yellow-400 hover:scale-110 transition"
          >
            <PiArrowBendDoubleUpLeftThin className="font-bold" size={35} />{" "}
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 md:right-[35%] top-1/2 z-10 cursor-pointer -translate-y-1/2 text-yellow-400 hover:scale-110 transition"
          >
            <PiArrowBendDoubleUpRightThin className="font-bold" size={35} />
          </button>

          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="px-6 sm:px-10"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className=" text-white rounded-2xl p-2  flex flex-col items-center justify-between text-center min-h-[360px] sm:min-h-[400px] md:min-h-[420px]"
                >
                  {/* Name & Date */}
                  <div className="flex items-center justify-center flex-col mb-5">
                    <Image
                      src="/assets/gold.png"
                      alt=""
                      height={70}
                      width={70}
                    />

                    <p className="md:text-3xl text-2xl text-gray-400 font-semibold uppercase tracking-wide">
                      {review.name}
                    </p>
                  </div>
                  {/* Circular Image */}
                  <div className="w-40 h-40 rounded-full overflow-hidden  shadow-lg mb-8 mt-6">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Quote */}
                  <p className="italic text-center  w-full md:w-[50%] text-sm text-gray-300 px-2 leading-relaxed relative before:content-['“'] after:content-['”'] before:text-yellow-400 after:text-yellow-400 before:text-2xl after:text-2xl">
                    {review.comment}
                  </p>

                  {/* Optional Rating */}
                  <div className="flex justify-center mt-2 text-yellow-400 text-base gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
