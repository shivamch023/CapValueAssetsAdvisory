"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { Bungee } from "next/font/google";
import Link from "next/link";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export default function SalonHero() {
  return (
    <section className="relative w-full text-white py-1  px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* Left Side - Images */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex items-center justify-center"
        >
          <div className="relative w-full max-w-[500px] h-[500px]">
            <motion.div
              className="absolute p-3 md:p-3 z-30 flex items-center flex-col right-[1%] md:right-[30%] top-[13%] rounded-md justify-center backdrop-blur-md bg-gray-700/40 shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-yellow-500 text-2xl font-bold">5+</p>
              <h3 className="text-sm text-gray-300 text-center">
                Years of Experience
              </h3>
            </motion.div>

            {/* Overlapping Image 3 */}
            <Image
              src="/assets/banner/estate1.jpg"
              alt="Image 3"
              width={280}
              height={160}
              className="absolute top-[30%] left-[17%] md:left-[20%]  p-1  rounded-md shadow-md border-1 border-gray-600"
              style={{ zIndex: 25 }}
            />
            {/* Overlapping Image 2 */}
            <Image
              src="/assets/banner/estate.jpg"
              alt="Image 2"
              width={140}
              height={120}
              className="absolute top-[10%] left-[0%] md:left-[5%]  rounded-md p-1 shadow-lg border-1 border-gray-700 "
              style={{ zIndex: 20 }}
            />

            {/* Overlapping Image 4 */}
            <Image
              src="/assets/banner/estates.avif"
              alt="Image 4"
              width={160}
              height={100}
              className="absolute bottom-[-1%] h-50 md:bottom-[15%] left-[5%] md:left-[60%]  rounded-md p-1 shadow-lg border-1 border-gray-600"
              style={{ zIndex: 30 }}
            />

            {/* Overlapping Image 5 */}
            <Image
              src="/assets/banner/estatee.avif"
              alt="Image 5"
              width={120}
              height={90}
              className="absolute  bottom-8 md:bottom-[0] h-45 right-[3%] md:right-[0] p-1 rounded-md shadow-md border-1 border-gray-700"
              style={{ zIndex: 35 }}
            />
          </div>
        </motion.div>

        {/* Right Side - Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h2
            className={`${bungee.className} text-3xl md:text-4xl font-normal leading-tight tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-md`}
          >
            Discover the True Value Behind  {" "}
            <span className="text-gray-300">Every Property</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            Before you buy or invest, know if its safe, smart, and worth the price. Our expert inspections reveal hidden issues, ensuring you make informed decisions with confidence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 md:gap-4 gap-2 text-center">
            {/* Assets Under Advisory */}
            <div className="border border-gray-800 shadow-md p-1 rounded-md py-2
    transition-all duration-300
    hover:border-yellow-500
    hover:bg-yellow-500/5">
              <p className="md:text-3xl text-xl font-bold text-yellow-500">
                ₹<CountUp end={20} duration={8} />Cr+
              </p>
              <p className="text-sm text-gray-400">Assets Under Advisory</p>
            </div>

            {/* Properties Closed */}
            <div className="border border-gray-800 shadow-md p-1 rounded-md py-2
    transition-all duration-300
    hover:border-yellow-500
    hover:bg-yellow-500/5">
              <p className="md:text-3xl text-xl font-bold text-yellow-500">
                <CountUp end={1200} duration={9} />+
              </p>
              <p className="text-sm text-gray-400">Properties Closed</p>
            </div>

            {/* Client ROI */}
            <div className="border border-gray-800 shadow-md p-1 rounded-md py-2
    transition-all duration-300
    hover:border-yellow-500
    hover:bg-yellow-500/5">
              <p className="md:text-3xl text-xl font-bold text-yellow-500">
                <CountUp end={18} duration={10} />%+
              </p>
              <p className="text-sm text-gray-400">Avg Client ROI</p>
            </div>
          </div>


          {/* CTA & Contact */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {/* Explore Button */}
            <Link
              href="/all-services"
              className="border border-gray-600 text-gray-200 cursor-pointer
    hover:border-yellow-500 hover:bg-yellow-500/10
    hover:shadow-[0_0_20px_rgba(234,179,8,0.35)]
    text-sm font-medium px-6 py-3 rounded-sm
    transition-all duration-300 shadow-md"
            >
              Explore More
            </Link>

            {/* Contact CTA */}
            <div className="flex items-center gap-3 group">
              {/* Phone Icon with Pulse */}
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-yellow-500 opacity-30 animate-ping"></span>
                <div className="relative bg-yellow-500 p-3 rounded-full shadow-md">
                  <FaPhoneAlt className="text-white text-base" />
                </div>
              </div>

              {/* Contact Text */}
              <div className="text-sm leading-tight cursor-pointer">
                <p className="text-gray-400">Free Consultation</p>
                <motion.a
                  href="tel:+919711816265"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-semibold text-white inline-block
        group-hover:text-yellow-400 transition-all duration-200"
                >
                  +91 9700000000
                </motion.a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
