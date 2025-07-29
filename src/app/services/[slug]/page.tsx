"use client";
import { services } from "@/app/data/services";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";

interface Props {
  params: Promise<{ slug: string }>;
}

const ServiceDetail: React.FC<Props> = ({ params }) => {
  const [slug, setSlug] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();
  const router = useRouter();

  useEffect(() => {
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

  const hasCartItems = cart.some((item) => item.quantity > 0);

  return (
    <section className="min-h-screen py-12 px-2 md:px-14 mt-[4rem] relative">
      <div className="container mx-auto max-w-7xl flex flex-col items-center text-center">
        {/* Banner */}
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
                    className={`relative inline-block ${char === " " ? "w-2" : ""}`}
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

        {/* Search & Cards */}
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
              {filteredServices?.slice(0, visibleCount).map((item, index) => {
                const cartItem = cart.find((c) => c.name === item.name);
                return (
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
                    <div className="flex items-center flex-col justify-center mb-4">
                      <h3 className="text-lg text-nowrap font-bold text-gray-400">
                        {item.name}
                      </h3>
                      <p className="text-yellow-500 font-semibold text-md mt-1">
                        ₹{item.price}
                      </p>
                    </div>

                    {cartItem && cartItem.quantity > 0 ? (
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => decrementQuantity(item.name)}
                          className="px-3 py-1 border-gray-700 cursor-pointer border hover:bg-gray-900/50 text-white rounded"
                        >
                          -
                        </motion.button>

                        <span className="text-white font-semibold">{cartItem.quantity}</span>

                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => incrementQuantity(item.name)}
                          className="px-3 py-1 border-gray-700 cursor-pointer border hover:bg-gray-900/50 text-white rounded"
                        >
                          +
                        </motion.button>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => addToCart({ name: item.name, price: item.price })}
                        className="w-full cursor-pointer px-4 py-2 border border-gray-700 hover:bg-gray-900/40 text-white rounded text-center"
                      >
                        Book Appointment
                      </motion.button>
                    )}
                  </motion.div>
                );
              })}
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

      {/* ✅ Bottom Sticky Button */}
      {hasCartItems && (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={() => router.push("/book-apointment")}
    className="w-[70%] max-w-md md:max-w-sm bg-yellow-400 text-black font-semibold px-6 py-2 text-nowrap md:py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:bg-yellow-500 flex items-center justify-center gap-2"
  >
    <IoMdCheckmark size={22} />
    View Selected Services
  </motion.button>
</div>

      )}
    </section>
  );
};

export default ServiceDetail;
