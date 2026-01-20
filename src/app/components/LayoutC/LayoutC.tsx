"use client";

import Image from "next/image";
import { motion, Variants, Easing } from "framer-motion";
import { fundingSections, SectionType } from "@/app/data/services";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } },
};

const fadeImage: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as unknown as Easing[] } },
};

function Chip({ text, icon: Icon, color }: { text: string; icon: any; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${color}/10 text-${color} text-sm md:text-base font-medium shadow-sm cursor-pointer`}
    >
      <Icon className={`text-${color}`} />
      {text}
    </motion.div>
  );
}

export default function FundingSolutionsPage() {
  return (
    <section className="w-full bg-white overflow-hidden -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {fundingSections.map((section: SectionType, index: number) => {
          const isEven = index % 2 === 0; // Even index = image left, text right

          return (
            <motion.div
              key={section.id}
              className="grid gap-10 items-start lg:grid-cols-2"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Text */}
              <motion.div
                variants={fadeUp}
                className={`lg:col-span-1 ${!isEven ? "lg:order-2" : ""}`}
              >
                <div className="flex items-center gap-4 mb-5 py-2">
                  <div className="w-14 h-14 rounded-xl bg-[#C9A240]/15 flex items-center justify-center text-[#C9A240]">
                    <section.icon size={26} />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#0B1D3A]">{section.title}</h2>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">{section.description}</p>
                <motion.div className="flex flex-wrap gap-3 mt-6">
                  {section.chips.map((chip, idx) => (
                    <Chip key={idx} {...chip} />
                  ))}
                </motion.div>
              </motion.div>

              {/* Image */}
              <motion.div
  variants={fadeImage}
  className={`lg:col-span-1 relative group ${!isEven ? "lg:order-1" : ""}`}
>
  {/* Image */}
  <Image
    src={section.imageSrc}
    alt={section.title}
    width={600}
    height={340} // slightly smaller height
    className="rounded-xl shadow-md w-full h-[340px] object-cover transition-transform duration-300 group-hover:scale-105"
  />

  {/* Overlay button */}
  <Link
    href="/contact"
    className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
  >
    <button className="px-6 py-3 bg-[#C9A240] text-white font-semibold rounded-md hover:bg-[#b59030]">
      Enquiry Now
    </button>
  </Link>
</motion.div>


            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
