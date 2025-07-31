"use client";
import { services } from "@/app/data/services";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { FiSearch } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/app/context/CartContext";

export interface Service {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  category: "Men" | "Women" | "Both";
  SaloonServices?: {
    name: string;
    price: number;
    image: string;
  }[];
}

const categories = ["All", "Men", "Women"];
const SERVICES_PER_PAGE = 10;

export default function BookAppointment() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [titleModalOpen, setTitleModalOpen] = useState(false);

  const { cart, incrementQuantity, decrementQuantity, totalPrice } = useCart();

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const filteredServices = services.filter(
    (s) =>
      (selectedCategory === "All" ||
        s.category === selectedCategory ||
        s.category === "Both") &&
      (selectedTitle === "" || s.title === selectedTitle)
  );

  const allMatchedItems = filteredServices.flatMap((service) =>
    (service.SaloonServices || []).filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(allMatchedItems.length / SERVICES_PER_PAGE);
  const paginatedItems = allMatchedItems.slice(
    (currentPage - 1) * SERVICES_PER_PAGE,
    currentPage * SERVICES_PER_PAGE
  );

  const titles = [
    ...new Set(
      services
        .filter(
          (s) =>
            selectedCategory === "All" ||
            s.category === selectedCategory ||
            s.category === "Both"
        )
        .map((s) => s.title)
    ),
  ];

  useEffect(() => {
    if (titleModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup in case component unmounts while open
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [titleModalOpen]);

  return (
    <motion.div
      className="py-10 container mx-auto px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Search + Filters */}
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
              className="absolute border px-3 cursor-pointer py-3 rounded-r-md border-gray-500 right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-yellow-600"
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
                setSelectedTitle("");
                setCurrentPage(1);
              }}
              className={`px-3 py-2  rounded font-semibold cursor-pointer ${
                selectedCategory === cat
                  ? "bg-yellow-600 text-gray-900 uppercase text-sm"
                  : "border border-gray-700 text-white hover:bg-gray-900/40 transition-all duration-300 cursor-pointer hover:backdrop-blur-md uppercase text-sm"
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setTitleModalOpen(true)}
            className="px-3  text-sm shadow-md py-2 rounded border border-gray-700 bg-gray-900/40 text-white hover:bg-gray-700 cursor-pointer uppercase"
          >
            Categories
          </button>
        </div>
      </div>

      {/* Selected Title Display */}
      {selectedTitle && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center"
        >
          <h2 className="text-xl font-semibold text-yellow-500">
            Showing: {selectedTitle}
          </h2>
        </motion.div>
      )}

      <h3 className="text-md text-gray-200 mb-4 pl-2">All Services</h3>

      {/* Main Service Cards */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {paginatedItems.length > 0 ? (
            paginatedItems.map((item, i) => (
              <ServiceCard key={i} service={item} />
            ))
          ) : (
            <p className="text-gray-400 col-span-2 text-center">
              No services found.
            </p>
          )}
        </div>

        {/* Cart Summary (Desktop) */}
        <div className="w-full lg:w-1/3 hidden lg:block sticky top-20 h-fit bg-gray-900 border border-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Selected Services
          </h3>
          {cart.length === 0 ? (
            <p className="text-gray-400">No services selected.</p>
          ) : (
            <>
              <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center border-b border-gray-700 py-2"
                  >
                    <div>
                      <p className="text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">
                        ₹{item.price} × {item.quantity} = ₹
                        {item.price * item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrementQuantity(item.name)}
                        className="px-2 text-white cursor-pointer bg-gray-700 hover:bg-gray-600 rounded"
                      >
                        -
                      </button>
                      <span className="text-white">{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.name)}
                        className="px-2 text-white cursor-pointer bg-gray-700 hover:bg-gray-600 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-700 mt-4">
                <p className="text-white font-semibold text-right">
                  Total Price : ₹{totalPrice}
                </p>
                <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 px-6 py-2 mt-4 rounded text-white">
                  Book Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 my-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1 border cursor-pointer border-gray-600 text-white rounded hover:bg-gray-700"
          >
            Prev
          </button>
          <span className="text-gray-300 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            className="px-3 py-1 border cursor-pointer border-gray-600 text-white rounded hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      )}

      {/* Mobile Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="lg:hidden fixed bottom-5 w-[90%] right-5 font-bold uppercase bg-gray-100 text-gray-900 py-3 px-4 rounded-lg shadow-xl z-100 flex items-center justify-center gap-2"
        >
          <IoMdCheckmark size={20} />
          View Selected Services
        </button>
      )}

      {/* Drawer Cart (Mobile) */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-900 z-100 p-5 rounded-t-2xl shadow-2xl lg:hidden border-t border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg uppercase font-semibold text-white">
                Selected Services
              </h3>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-gray-400 hover:text-white p-1 border border-gray-700 shadow-md rounded-md"
              >
                <MdClose size={24} />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center border-b border-gray-700 pb-2"
                >
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => decrementQuantity(item.name)}
                      className="bg-gray-700 text-white px-2 rounded"
                    >
                      -
                    </button>
                    <span className="text-white">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.name)}
                      className="bg-gray-700 text-white px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

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

      {/* Title Modal (Animated) */}
      <AnimatePresence>
        {titleModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-md flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 text-white rounded-lg w-[90%] max-w-md p-6 max-h-[80vh] overflow-y-auto shadow-xl custom-scroll"
            >
              <div className="flex sticky justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-yellow-400">
                  Select Service Title
                </h2>
                <button
                  onClick={() => setTitleModalOpen(false)}
                  className="text-white hover:text-yellow-400 cursor-pointer rounded-md p-1 border border-gray-700 shadow-md"
                >
                  <MdClose size={24} />
                </button>
              </div>
              <div className="space-y-2">
                {titles.map((title) => (
                  <button
                    key={title}
                    onClick={() => {
                      setSelectedTitle(title);
                      setTitleModalOpen(false);
                      setCurrentPage(1);
                    }}
                    className="block w-full text-left px-4 py-2 bg-gray-800 rounded hover:bg-yellow-600 transition-colors duration-200"
                  >
                    {title}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
