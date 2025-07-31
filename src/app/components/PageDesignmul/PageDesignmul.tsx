"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface PageDesignmul {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  sticker?: string; // single sticker image
  points?: string[];
  children?: React.ReactNode;
}

export default function PageDesign({
  index,
  title,
  description,
  imageUrl,
  sticker,
  points = [],
  children,
}: PageDesignmul) {
  const isReversed = index % 2 !== 0;

  return (
    <section className="bg-[#010913] text-white py-10 px-4 md:px-20">
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        } items-center justify-evenly gap-6 md:gap-10`}
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full relative"
        >
          <div className="p-2 border border-gray-700 rounded-xl h-50 sm:h-72 md:h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden relative">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={450}
              className="w-full h-full object-cover rounded-lg"
            />

            {sticker && (
              <div className="absolute -top-3 left-8 -translate-x-1/2">
                <Image
                  src={sticker}
                  alt="sticker"
                  width={80}
                  height={80}
                  className="rounded-full   bg-gray-900 border border-gray-700 p-1"
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-4 text-left h-auto md:h-[450px] flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400">{title}</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>

          {points.length > 0 && (
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {children}
        </motion.div>
      </div>
    </section>
  );
}
