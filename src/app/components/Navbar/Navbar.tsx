"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/all-services" },
  { name: "Appointments", href: "/book-apointment" },
  { name: "Gallery", href: "/gallery" },
  { name: "Memberships", href: "/memberships" },
  { name: "Loyalty Program", href: "/loyalty-program" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Auto-close drawer on screen resize to lg (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full bg-[#010913] text-white z-50 shadow-xs shadow-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex  flex-col items-center  text-white ">
            <Image
              src="/assets/logo.png"
              alt="logo"
              height={100}
              width={100}
              className="h-10 w-10 border"
            />
            <span className="uppercase text-xs font-semibold ">
              Style Lounge Salon
            </span>
          </Link>

          {/* Desktop Nav (lg and up) */}
          <nav className="hidden lg:flex gap-5 justify-center items-center ">
            {navItems.map(({ name, href }) => (
              <motion.div
                key={name}
                className="relative group"
                initial="hidden"
                whileHover="visible"
                animate="hidden"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                
              >
                <Link
                  href={href}
                  className="text-xs uppercase tracking-wide hover:text-yellow-400 transition "
                >
                  {name}
                </Link>

                {/* Underline Dots on Hover */}
                <div className="absolute left-1/2 -bottom-2 flex gap-[6px] -translate-x-1/2">
                  <motion.span
                    className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                    variants={{
                      hidden: { x: -10, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.span
                    className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                    variants={{
                      hidden: { y: 6, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.span
                    className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                    variants={{
                      hidden: { x: 10, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
            <Link
              className="border border-gray-700 uppercase text-gray-200 text-xs py-2 px-4 rounded-md  hover:bg-gray-900/60 hover:text-gray-200 duration-300 transition-all "
              href="/contactus"
            >
              Contact Us
            </Link>
          </nav>

          {/* Hamburger Menu (mobile + tablet) */}
          <button
            className="lg:hidden border-gray-700 border-2 p-1 shadow-md text-gray-100 rounded-md"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <LuMenu size={25} />
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-[#010913] text-white z-[60] px-6 py-6 shadow-xs shadow-gray-700"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-lg font-semibold text-yellow-400">Menu</h2>
              <button
                className="text-gray-100 border-2 shadow-md border-gray-700 rounded-md p-1"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <IoClose size={26} />
              </button>
            </div>

            {/* Drawer Links */}
            <motion.nav
              className="flex flex-col gap-6 mb-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {navItems.map(({ name, href }) => (
                <motion.div
                  key={name}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium uppercase tracking-wide hover:text-gray-700 transition-colors border-b text-gray-300 border-gray-700 pb-1 block"
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <Link
              onClick={() => setIsOpen(false)}
              className="border   border-gray-700 uppercase text-gray-200 text-xs py-2 px-4 rounded-md  hover:bg-gray-500 hover:text-gray-900 duration-300 transition-all "
              href="/contactus"
            >
              Contact Us
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
