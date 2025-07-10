'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { GiScissors } from "react-icons/gi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/all-services" },
  { name: "Memberships", href: "/memberships" },
  { name: "Loyalty Program", href: "/loyalty-program" },
  { name: "Appointments", href: "/appointments" },
  { name: "Contact Us", href: "/contact-us" },
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
        <div className="container mx-auto px-5 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-[-3] group text-yellow-400 transition-all"
          >
            <GiScissors
              size={36}
              className="text-yellow-400 group-hover:text-white transition-colors duration-300"
            />
            <div className="flex flex-col leading-tight text-center">
              <span className="text-xl md:text-2xl font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                TBB
              </span>
            </div>
          </Link>

          {/* Desktop Nav (lg and up) */}
          <nav className="hidden lg:flex gap-8">
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
                  className="text-xs uppercase tracking-wide hover:text-yellow-400 transition"
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
              className="flex flex-col gap-6"
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
