"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { salonGalleryData } from "@/app/data/services";

export default function SalonGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const IMAGES_PER_PAGE = 6;

  const categories = [
    "All",
    ...Array.from(new Set(salonGalleryData.map((item) => item.category))),
  ];

  const filteredData =
    selectedCategory === "All"
      ? salonGalleryData
      : salonGalleryData.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredData.length / IMAGES_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  const openModal = (index: number) =>
    setSelectedIndex(index + (currentPage - 1) * IMAGES_PER_PAGE);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = () =>
    setSelectedIndex(
      (prev) => (prev! - 1 + filteredData.length) % filteredData.length
    );
  const nextImage = () =>
    setSelectedIndex((prev) => (prev! + 1) % filteredData.length);

  const changeCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setSelectedIndex(null);
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl text-yellow-400 font-bold text-center mb-6">
        Our Salon Gallery
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`px-4 py-2 rounded-md cursor-pointer text-sm font-medium shadow-md ${
              selectedCategory === cat
                ? "bg-yellow-400 text-gray-900"
                : "bg-gray-900 text-white shadow-md hover:bg-yellow-400 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-10">
        {paginatedData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="relative border border-gray-700 p-2 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative w-full h-64 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Hover Title Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-md bg-opacity-50 flex items-center justify-center text-yellow-300 text-lg font-semibold rounded-md"
            >
              {item.title}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md cursor-pointer ${
                currentPage === page
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-900 shadow-md text-white hover:bg-yellow-400 hover:text-gray-900"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Modal View */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-md bg-opacity-80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-[80vh]">
                <Image
                  src={filteredData[selectedIndex].image}
                  alt={filteredData[selectedIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Close */}
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={closeModal}
                  className="bg-gray-700 hover:bg-yellow-400 cursor-pointer
                   text-white p-2 rounded-full"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Prev */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2">
                <button
                  onClick={prevImage}
                  className="bg-gray-700 cursor-pointer hover:bg-yellow-400 text-white p-3 rounded-full"
                >
                  <FaChevronLeft />
                </button>
              </div>

              {/* Next (User icon) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-2">
                <button
                  onClick={nextImage}
                  className="bg-gray-700 cursor-pointer hover:bg-yellow-400 text-white p-3 rounded-full"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
