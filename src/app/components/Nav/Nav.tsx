"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ CLOSE MOBILE MENU WHEN SCREEN GOES DESKTOP
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1D3A]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-bold tracking-wide">
            CAPVALUEZ
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-10 text-md text-white/90">
              <Link href="#">Home</Link>
              <Link href="#">Advisory</Link>
              <Link href="#">Asset Solutions</Link>
              <Link href="#">Insights</Link>
            </nav>

            {/* Divider */}
            <span className="h-6 w-px bg-white/30" />

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-red-800 hover:bg-red-700 text-white px-5 py-2 rounded-md text-md transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-[#0B1D3A]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-white text-md font-semibold">
                CAPVALUEZ
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl"
              >
                <FiX />
              </button>
            </div>

            {/* Menu Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col px-6 pt-8 gap-6 text-white text-base"
            >
              <Link onClick={() => setMenuOpen(false)} href="#">
                Home
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="#">
                Advisory
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="#">
                Asset Solutions
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="#">
                Insights
              </Link>

              <span className="h-px w-full bg-white/20 my-2" />

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-md font-semibold transition"
              >
                Contact Us
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
