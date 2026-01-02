"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "" },
  { name: "Services", href: "" },
  { name: "People", href: "" },
  { name: "Insights", href: "" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-[#010913] text-white z-50 shadow-xs shadow-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">

          {/* LEFT: LOGO */}
          <Link
            href="/"
            className="flex flex-col  items-center"
          >
            {/* Logo */}
            <Image
              src="/assets/logo1.png"
              alt="Capvalue Assets Advisory Logo"
              width={100}
              height={100}
              priority
              className="h-12  object-contain"
            />

            {/* Text */}
            <div className="text-center sm:text-left leading-tight">
              <p className="uppercase tracking-widest text-[8px] font-semibold text-yellow-500">
                Capvalue Assets Advisory        </p>

            </div>
          </Link>

          {/* CENTER: NAV LINKS WITH LINES */}
          <nav className="hidden lg:flex items-center">
            {navItems.map(({ name, href }, index) => (
              <div key={name} className="flex items-center">
                <Link
                  href={href}
                  className="px-4 text-xs uppercase tracking-wide hover:text-yellow-400 transition"
                >
                  {name}
                </Link>

                {/* Vertical Line */}
                {index !== navItems.length - 1 && (
                  <span className="h-4 w-px bg-gray-600" />
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: BUTTON + SEARCH */}
          {/* RIGHT: SEARCH + CONTACT (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="
    border border-gray-700
    p-2 cursor-pointer rounded-md
    shadow-md
    transition-all duration-300 ease-in-out
    hover:bg-yellow-500/10
    hover:border-yellow-400
    group
  "
            >
              <FiSearch className="text-gray-300 transition-colors duration-300 group-hover:text-yellow-400" />
            </button>


            <Link
              href="/contactus"
              className="
    border border-gray-700
    cursor-pointer
    px-4 py-2
    text-xs uppercase tracking-wide
    rounded-md
    shadow-md
    transition-all duration-300 ease-in-out
    hover:border-yellow-500
    hover:bg-yellow-500/10
    hover:shadow-lg
    text-gray-200
    hover:text-yellow-400
  "
            >
              Contact
            </Link>

          </div>
          {/* MOBILE SEARCH ICON */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="lg:hidden border border-gray-700 p-2 rounded-md shadow-md hover:bg-gray-900 transition"
          >
            <FiSearch />
          </button>



          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden border-gray-700 border-2 p-1 rounded-md"
            onClick={() => setIsOpen(true)}
          >
            <LuMenu size={24} />
          </button>
        </div>
      </header>

      {/* ================= SEARCH BAR ================= */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="fixed top-[80px] left-0 w-full bg-[#010913] z-40 shadow-md"
          >
            <div className="container mx-auto px-4 py-10 flex justify-center">

              {/* Search Wrapper */}
              <div className="relative w-full md:w-[70%]">

                {/* Close (Cross) */}
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute cursor-pointer   bottom-12 right-0 text-gray-400 hover:text-white text-lg transition"
                  aria-label="Close search"
                >
                  ✕
                </button>

                {/* Input + Button (Joined) */}
                <div className="flex w-full overflow-hidden rounded-md border shadow-md border-gray-200 focus-within:border-gray-500 transition">

                  {/* Input */}
                  <input
                    type="text"
                    placeholder="Search properties, services..."
                    className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-600 outline-none placeholder-gray-500"
                    autoFocus
                  />

                  {/* Search Button */}
                  <button
                    className="bg-gray-800 cursor-pointer text-yellow-500 px-6 text-sm font-medium uppercase hover:bg-gray-700 transition"
                  >
                    Search
                  </button>

                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#010913] text-white z-[60] px-6 py-6"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-lg font-semibold text-yellow-400">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="border border-gray-700 p-1 rounded-md"
                >
                  <IoClose size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-5">
                {navItems.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm uppercase tracking-wide border-b border-gray-700 pb-2"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
              {/* Mobile Contact Button */}
              <Link
                href="/contactus"
                onClick={() => setIsOpen(false)}
                className="mt-10 block text-center border border-gray-600 text-sm uppercase tracking-wide py-3 rounded-md hover:bg-gray-900 transition"
              >
                Contact
              </Link>

            </motion.aside>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
