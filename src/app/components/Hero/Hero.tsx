"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";

export default function HeroSection() {
  const images = [
    "/assets/banner/prop.png",
    "/assets/banner/prop3.png", // second image
    "/assets/banner/prop2.png", // second image
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full text-white overflow-hidden md:mt-[3rem] mt-[3rem] ">
      {/* 🔆 Background abstract light shape */}
      <div className="absolute top-1/2 left-1/2 w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2  rounded-full blur-[100px] z-0" />

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left: Content */}
        <div className="lg:w-1/2 w-full">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-base lg:text-lg text-gray-400 max-w-xl mb-6"
          >

            How PropTech Is Powering the New Office Paradigm

          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-4xl font-extrabold mb-6 leading-tight 
           text-white tracking-tight font-sans text-start"
          >
            Be{" "}
            <motion.span
              animate={{
                y: [0, -8, 0],
                opacity: [1, 0.9, 1],
                textShadow: [
                  "0px 0px 5px rgba(255,255,0,0.3)",
                  "0px 0px 12px rgba(255,255,0,0.5)",
                  "0px 0px 5px rgba(255,255,0,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-yellow-400 font-light italic tracking-wide inline-block"
            >
              FROM
            </motion.span>{" "}
            SQUARE{" "}
            <motion.span
              animate={{
                y: [0, 8, 0],
                opacity: [1, 0.9, 1],
                textShadow: [
                  "0px 0px 5px rgba(200,200,200,0.3)",
                  "0px 0px 12px rgba(200,200,200,0.4)",
                  "0px 0px 5px rgba(200,200,200,0.3)",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-gray-300 inline-block font-serif"
            >
              FOOTAGE
            </motion.span>{" "}
            <br />
            <span className="text-white tracking-[0.1em]"> TO SMART FOOTAGE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="text-base lg:text-lg text-gray-400 max-w-xl mb-6"
          >
            India’s commercial real estate is entering a decisive phase of <br/> digital transformation.


          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-6"
          >
           <Link href="/about" className="w-full md:max-w-max">
  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.96 }}
    className="
      relative group overflow-hidden cursor-pointer
      rounded-xl px-6 py-4 sm:px-7 sm:py-3
      font-medium w-full text-sm sm:text-base
      shadow-lg transition-all duration-300
      bg-gradient-to-r from-gray-900 to-gray-800
      group-hover:border-yellow-400  "
  >
    {/* Text */}
    <span className="relative z-10 flex items-center justify-center gap-2
      text-white transition-all duration-300
      group-hover:text-yellow-400 group-hover:border-yellow-400">
      Learn More <GrFormNext size={20} />
    </span>

   
  </motion.button>
</Link>


            {/* Book Appointment Button
            <Link href="/book-apointment" className="w-full md:max-w-max">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative group overflow-hidden justify-center items-center cursor-pointer rounded-2xl px-6 py-4 sm:px-7 sm:py-3 font-medium w-full  shadow-md border border-gray-700 text-gray-200  text-sm sm:text-base text-center  transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-400 group-hover:text-gray-800">
                  Book Appointment <FaCalendarCheck />
                </span>
                {/* Tarang-style Animated BG */}
                {/* <span className="absolute top-full right-full w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 group-hover:top-0 group-hover:right-0 transition-all duration-700 ease-in-out z-0 rounded-2xl" />
              </motion.button>
            </Link> */} 
          </motion.div>
        </div>

        {/* Right: Image with glow and effects */}
        <motion.div className="relative lg:w-1/2 w-full flex items-center justify-center">
          {/* 🔆 Background blur glow */}
          <div className="absolute " />

          {/* 🎖️ Tag sticker */}
          <motion.div
            className="absolute lg:top-14 tracking-[0.15em] top-8 lg:right-24 right-7 border border-gray-700 text-white text-sm font-semibold  px-3 py-1 rounded-full shadow-md z-20 "
            animate={{
              textShadow: [
                "0 0 0px #fff",
                "0 0 8px #20fa15ff",
                "0 0 12px #facc15",
                "0 0 8px #facc15",
                "0 0 12px #15fa19ff",
                "0 0 8px #facc15",
                "0 0 0px #fff",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            #PropertyAdvisor
          </motion.div>

          {/* ✨ Sparkles */}
          {/* ✨ Sparkles with 3s smooth ping via Framer Motion */}
          <motion.div
            className="absolute top-20 left-13 md:left-20 w-8 h-8 bg-white/30 rounded-full z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.6], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 4,
              delay: 0,
              repeat: Infinity,
              repeatType: "mirror",
              ease: ["easeOut", "easeIn"],
            }}
          />

          <motion.div
            className="absolute bottom-6 right-7 w-3 h-3 bg-yellow-300/40 rounded-full z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.6], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 4,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: ["easeOut", "easeIn"],
            }}
          />

          <motion.div
            className="absolute top-5 left-10 w-2 h-2 bg-white/30 rounded-full z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.6], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 4,
              delay: 1.6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: ["easeOut", "easeIn"],
            }}
          />

          <motion.div
            className="absolute top-60 left-15 w-12 h-12 bg-yellow-500/10 rounded-full z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.6], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 4,
              delay: 1.6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: ["easeOut", "easeIn"],
            }}
          />

          <motion.div
            className="absolute bottom-20 right-7 w-5 h-5 bg-yellow-300/40 rounded-full z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.6], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 4,
              delay: 2.4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: ["easeOut", "easeIn"],
            }}
          />

          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full mt-0 lg:mt-10 lg:p-5 p-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={images[index]}
                  alt="Beauty Service"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-[500px] object-contain drop-shadow-[0_10px_30px_rgba(156,163,175,0.4)]"
                  quality={100}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
