"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();



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
          {/* <Link href="/" className="text-white text-xl font-bold tracking-wide">
            CAPVALUEZ
          </Link> */}
          <Link href="/" className="flex items-center">
  <Image
    src="/assets/logo.png"
    alt="CAPVALUEZ Logo"
    width={160}
    height={40}
    priority
    className="object-contain"
  />
</Link>


          {/* Desktop Nav */}
         {/* Desktop Nav */}
{/* Desktop Nav */}
<div className="hidden md:flex items-center gap-10">
  <nav className="flex items-center gap-10 text-md text-white/90">
  {[
    { name: "Home", href: "/" },
    { name: "Advisory", href: "/advisory" },
    { name: "Asset Solutions", href: "/asset-solutions" },
    { name: "Insights", href: "/insights" },
  ].map((item) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.name}
        href={item.href}
        className="relative px-1 py-1 font-medium text-white/90 transition-colors group"
      >
        {item.name}

        {/* underline */}
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] bg-gray-400 transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </Link>
    );
  })}
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
      {/* Mobile Menu */}
<AnimatePresence>
  {menuOpen && (
    <>
      {/* 🔹 Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/50 z-[55]"
      />

      {/* 🔹 Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-[78%] sm:w-[65%] bg-[#0B1D3A] z-[60] shadow-2xl"
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
          transition={{ delay: 0.15 }}
          className="flex flex-col px-6 pt-8 gap-6 text-white text-base"
        >
          {["Home", "Advisory", "Asset Solutions", "Insights"].map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 pb-2"
            >
              {item}
            </Link>
          ))}

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
    </>
  )}
</AnimatePresence>

    </>
  );
};

export default Nav;
