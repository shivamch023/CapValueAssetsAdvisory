"use client";
import { services } from "@/app/data/services";
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import BookingModal from "../BookingModal/BookingModal";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

interface SubService {
  name: string;
  price: number;
  image: string;
}

const categories = ["All", "Men", "Women"];
const ITEMS_PER_PAGE = 9;

export default function BookAppointment() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState<SubService | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allFiltered = services
    .filter((s) => selectedCategory === "All" || s.category === selectedCategory)
    .flatMap((s) =>
      s.SaloonServices?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).map((item) => ({
        ...item,
        image: item.image || s.image,
      })) || []
    );

  const totalServices = allFiltered.length;
  const totalPages = Math.ceil(totalServices / ITEMS_PER_PAGE);

  const currentItems = allFiltered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <motion.div
      className="pt-28 container mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Search & Filters */}
      <motion.div
        className="flex flex-wrap items-center justify-between mb-6 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Search All Service..."
          className="border border-gray-300 px-4 py-2 rounded-md flex-1"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <div className="flex gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-3 py-2 rounded transition-all ${
                selectedCategory === cat
                  ? "border cursor-pointer border-gray-700 text-white"
                  : "bg-gray-800/40 text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Total Services Count */}
      <motion.div
        className="mb-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Showing {currentItems.length} of {totalServices} services
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, delayChildren: 0.2 },
          },
        }}
      >
        {currentItems.map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <ServiceCard service={item} onBook={setSelectedService} />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div
          className="flex justify-center items-center mt-8 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={handlePrev}
            disabled={currentPage === 1}
            whileTap={{ scale: 0.9 }}
            className={`rounded border ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed border-gray-700 px-4 py-2 bg-gray-900"
                : "text-gray-300 border-gray-700 px-4 py-2 hover:bg-gray-600  cursor-pointer"
            }`}
          >
            <GrPrevious />
          </motion.button>

          <span className="text-sm text-gray-200 border border-gray-700 px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>

          <motion.button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            whileTap={{ scale: 0.9 }}
            className={`rounded border ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed border-gray-700 px-4 py-2 bg-gray-900"
                : "text-gray-300 border-gray-700 px-4 py-2 hover:bg-gray-900/50  cursor-pointer"
            }`}
          >
            <GrFormNext />
          </motion.button>
        </motion.div>
      )}

      {/* Booking Modal */}
      {selectedService && (
        <BookingModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </motion.div>
  );
}
