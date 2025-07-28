"use client";
import { services } from "@/app/data/services";
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { GrFormNext, GrPrevious } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface SubService {
  name: string;
  price: number;
}

const categories = ["All", "Men", "Women"];
const ITEMS_PER_PAGE = 9;

export default function BookAppointment() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cart, setCart] = useState<SubService[]>([]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleAdd = (service: SubService) => {
    setCart((prev) => {
      if (prev.find((item) => item.name === service.name)) return prev;
      return [...prev, service];
    });
  };

  const removeItem = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const allFiltered = services
    .filter(
      (s) => selectedCategory === "All" || s.category === selectedCategory
    )
    .flatMap(
      (s) =>
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

  return (
    <motion.div
      className="py-10 container mx-auto px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Filters & Search */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="relative w-full sm:w-[90%] md:w-[60%] lg:w-[50%]">
          <input
            type="text"
            placeholder="Search All Services..."
            className="border border-gray-500 px-4 py-2 rounded-md w-full pr-10"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {loading ? (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <button
              onClick={() => handleSearch(searchTerm)}
              className="absolute  border px-3 cursor-pointer py-3 rounded-r-md border-gray-500 right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-600"
            >
              <FiSearch />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-3 py-2 rounded cursor-pointer ${
                selectedCategory === cat
                  ? "border border-gray-700 text-white"
                  : "bg-yellow-600 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Services */}
        <div className="lg:col-span-2">
          <p className="text-sm text-gray-400 mb-4">
            Showing {currentItems.length} of {totalServices} services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentItems.map((item, i) => (
              <ServiceCard
                key={i}
                service={item}
                onAdd={handleAdd}
                cart={cart}
                onRemove={removeItem}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`rounded border cursor-pointer px-4 py-2 ${
                  currentPage === 1
                    ? "text-gray-600 cursor-not-allowed bg-gray-900"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <GrPrevious />
              </button>
              <span className="text-sm text-gray-200 border border-gray-700 px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`rounded border cursor-pointer px-4 py-2 ${
                  currentPage === totalPages
                    ? "text-gray-600 cursor-not-allowed bg-gray-900"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <GrFormNext />
              </button>
            </div>
          )}
        </div>

        {/* Right: Cart (desktop) */}
        <div className="hidden lg:block sticky top-20 h-fit bg-gray-900 border border-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Selected Services
          </h3>

          {cart.length === 0 ? (
            <p className="text-gray-400">No services selected.</p>
          ) : (
            <>
              {/* Scrollable List with Custom Scrollbar */}
              <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center border-b border-gray-700 py-2"
                  >
                    <div>
                      <p className="text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">₹{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-red-500 cursor-pointer hover:text-red-600 text-sm border border-gray-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Total & Book Now */}
              <div className="pt-4 border-t border-gray-700 mt-4">
                <p className="text-white font-semibold text-right">
                  Total: ₹{totalPrice}
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 px-6 py-2 mt-4 rounded text-white">
                  Book Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ✅ Floating Button for Mobile */}
      {cart.length > 0 && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="lg:hidden fixed bottom-5 w-[90%] right-5 font-bold uppercase   bg-gray-100 text-gray-900 py-3 px-4 rounded-lg shadow-xl z-100 flex items-center justify-center gap-2"
        >
          <IoMdCheckmark size={20} />
          View Selected Services
        </button>
      )}

      {/* ✅ Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-900 z-100 p-5 rounded-t-2xl shadow-2xl lg:hidden border-t border-gray-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg uppercase font-semibold text-white">
                Selected Services
              </h3>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <MdClose size={24} />
              </button>
            </div>

            {/* Scrollable Cart Items */}
            <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center border-b border-gray-700 pb-2"
                >
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.name)}
                    className="text-red-500 text-sm border shadow-md rounded-md uppercase border-gray-700 px-3 py-1"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Book Button */}
            <div className="pt-4 border-t border-gray-700 mt-4">
              <p className="font-semibold text-white text-right">
                Total Price : ₹{totalPrice}
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 px-6 py-2 mt-4 rounded text-white">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
