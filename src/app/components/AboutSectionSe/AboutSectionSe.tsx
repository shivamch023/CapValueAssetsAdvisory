"use client";
import { teamData, whyChooseUsData } from "@/app/data/services";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const AboutSectionSe = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-20 space-y-20">
      {/* Why Choose Us Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2 md:order-1"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-300">
            Why <span className="text-yellow-600">Choose Us?</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We stand out for delivering an unforgettable experience, combining
            premium products, skilled professionals, and a modern ambience.
          </p>

          <div className="space-y-4">
            {whyChooseUsData.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon === "Heart" && (
                  <Heart className="w-8 h-8 text-yellow-600" />
                )}
                {item.icon === "Star" && (
                  <Star className="w-8 h-8 text-yellow-600" />
                )}
                {item.icon === "Sparkles" && (
                  <Sparkles className="w-8 h-8 text-yellow-600" />
                )}
                <div>
                  <h4 className="font-semibold text-gray-300">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Join the hundreds who trust Style Lounge for their beauty journey
            and experience elegance and confidence like never before.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-700 order-1 md:order-2"
        >
          <Image
            src="/assets/about/chooseus.avif"
            alt="Why Choose Style Lounge"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Our Team Section */}
      <div className="space-y-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-5xl font-bold text-center text-gray-300"
        >
          Meet <span className="text-yellow-600">Our Team</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-md border border-gray-700 text-center p-5 space-y-3"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-300">
                {member.name}
              </h3>
              <p className="text-yellow-600 font-medium">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>

              <Link href="/book-apointment">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative group overflow-hidden justify-center items-center cursor-pointer px-6 py-2 sm:px-6 sm:py-2 font-medium w-full sm:w-auto shadow-md border border-gray-700 text-gray-200 text-xs sm:text-base text-center transition-all duration-300"
                >
                  <span className="relative z-10 uppercase flex items-center justify-center gap-2 transition-all duration-400 group-hover:text-gray-800">
                    Book Appointment
                  </span>
                  <span className="absolute top-full right-full w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 group-hover:top-0 group-hover:right-0 transition-all duration-700 ease-in-out z-0" />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSectionSe;
