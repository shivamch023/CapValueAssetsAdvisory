"use client";
import { services } from "@/app/data/services";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

const ServiceDetail: React.FC<Props> = ({ params }) => {
  const [slug, setSlug] = React.useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  if (!slug) {
    return (
      <p className="text-center text-yellow-500 mt-12 font-bold text-xl">
        Loading service details...
      </p>
    );
  }

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <p className="text-center text-red-500 mt-12 font-bold text-xl">
        Service not found!
      </p>
    );
  }

  const headingText = service.title;

  const filteredServices = service.SaloonServices?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen py-12 px-2 md:px-14 mt-[4rem]">
      <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
        <div className="relative w-full lg:min-h-[60vh] md:min-h-[45vh] h-[25vh] rounded-lg overflow-hidden mb-12 flex items-center justify-start px-6 md:px-12 border border-gray-700">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="absolute inset-0 w-full h-full object-cover brightness-75 p-2 border border-gray-700 rounded-lg"
          />
          <div className="relative z-10 max-w-4xl text-left">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-extrabold mb-6"
            >
              {headingText.split("").map((char, index) => {
                const color =
                  index % 3 === 0
                    ? "#FFD700"
                    : index % 3 === 1
                    ? "#CCCCCC"
                    : "#FFFFFF";
                const showUnderline = color !== "#CCCCCC";
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative inline-block ${
                      char === " " ? "w-2" : ""
                    }`}
                    style={{ color }}
                  >
                    {char}
                    {showUnderline && (
                      <motion.span
                        className="absolute left-0 bottom-0 h-[2px] w-full"
                        style={{
                          backgroundColor: color,
                          transformOrigin: "left",
                        }}
                        animate={{ scaleX: [0, 1, 0] }}
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

            <p className="lg:text-lg md:text-md text-sm text-white leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {service.SaloonServices && (
          <>
            <input
              type="text"
              placeholder="Search service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-8 px-4 py-2 border border-gray-700 rounded-lg w-full max-w-md text-gray-200"
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices?.slice(0, visibleCount).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-700 rounded-xl shadow-md hover:shadow-xl p-3 flex flex-col items-center duration-300 transition-all"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={800}
                    className="w-full h-50 object-cover rounded-lg mb-4 shadow-md"
                  />
                  <div className="flex items-center flex-col  justify-center mb-4">
                    <h3 className="text-lg text-nowrap font-bold text-gray-400 ">
                      {item.name}
                    </h3>
                    <p className="text-yellow-500 font-semibold text-md mt-1">
                      ₹{item.price}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative group overflow-hidden justify-center items-center cursor-pointer rounded-lg px-4 py-4 sm:px-7 sm:py-3 font-medium w-full  shadow-md border border-gray-700 text-gray-200  text-sm sm:text-base text-center  transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-400 group-hover:text-gray-800">
                      Book Appointment <FaCalendarCheck />
                    </span>
                    {/* Tarang-style Animated BG */}
                    <span className="absolute top-full right-full w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 group-hover:top-0 group-hover:right-0 transition-all duration-700 ease-in-out z-0 rounded-lg" />
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {filteredServices && visibleCount < filteredServices.length && (
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className=" mt-8 mx-auto flex cursor-pointer items-center justify-center px-6 py-2 rounded-lg border border-gray-700 text-gray-200 hover:text-yellow-500 font-bold shadow-md transition-all"
              >
                View More
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;
