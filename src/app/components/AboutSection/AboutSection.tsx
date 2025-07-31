"use client"
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Scissors, Smile } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-2 py-6 md:py-15">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full rounded-xl overflow-hidden shadow-md border border-gray-700"
        >
          <Image
            src="/assets/about/about.avif"
            alt="Style Lounge Interior"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-300">
            About <span className="text-yellow-600">Style Lounge</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold">Style Lounge</span>, we believe beauty is more than appearance—it&apos;s self-expression, confidence, and care. We are one of the city&apos;s top-rated salons, providing personalized hair, beauty, and wellness services in a welcoming environment.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-8 h-8 text-yellow-600" />
              <p className="text-gray-400">Trendy hair transformations and premium color treatments.</p>
            </div>
            <div className="flex items-start gap-3">
              <Scissors className="w-8 h-8 text-yellow-600" />
              <p className="text-gray-400">Expert grooming, facials, and beauty services tailored for you.</p>
            </div>
            <div className="flex items-start gap-3">
              <Smile className="w-8 h-8 text-yellow-600" />
              <p className="text-gray-400">Friendly, skilled professionals ensuring you feel confident and refreshed.</p>
            </div>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Whether it&apos;s a special occasion or self-care day, we are here to deliver the best in style, relaxation, and transformation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
