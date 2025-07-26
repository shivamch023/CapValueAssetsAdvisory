"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { products } from "../data/services"; 

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-28 container mx-auto px-4 sm:px-6 md:px-10 min-h-screen text-white bg-gray-950">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-bold text-yellow-500 mb-10 drop-shadow-md"
      >
        ✨ Our Exclusive Salon Products ✨
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {" "}
        {/* Adjusted grid for more columns, smaller gap */}
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }} // Faster delay for more cards
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden bg-gray-800 rounded-xl shadow-lg
                       border-b-4 border-transparent hover:border-yellow-500
                       transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-yellow-500/20
                       flex flex-col items-center text-center p-4" // Added padding here
          >
            {/* Image Section - Fixed size, slightly more prominent shadow */}
            <div
              className="w-full flex justify-center mb-4 cursor-pointer relative" // Increased bottom margin
              onClick={() => setSelectedImage(product.image)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
                className="object-cover rounded-full border-2 border-gray-600 transition-transform duration-500 group-hover:scale-110 shadow-xl" // Rounded, border, stronger shadow
              />
            </div>

            {/* Product Details - Name and Price in a compact block */}
            <div className="flex-grow text-center mb-5">
              {" "}
              {/* Increased bottom margin */}
              <h3 className="text-base font-semibold text-white group-hover:text-yellow-400 transition mb-1">
                {product.name}
              </h3>
              <div className="text-lg font-extrabold text-yellow-500">
                ₹{product.price}
              </div>
            </div>

            {/* Buy Now Button - Modernized look with yellow background on hover, rounded-full */}
            <button
              className="w-full bg-gray-700 text-white text-sm font-semibold py-2.5 rounded-full
                               hover:bg-yellow-500 hover:text-black hover:shadow-yellow-500/50
                               transition-all duration-300 transform active:scale-95 shadow-md"
            >
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Image Popup Modal (remains unchanged as it's a functional overlay) */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Zoomed Product Image"
              width={400}
              height={400}
              layout="intrinsic"
              className="rounded-xl shadow-lg border border-yellow-500 max-w-full h-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-[-15px] right-[-15px] bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold border-2 border-yellow-700 hover:bg-yellow-400 transition"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
