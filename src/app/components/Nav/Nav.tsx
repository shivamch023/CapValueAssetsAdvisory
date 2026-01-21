"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [advisoryOpen, setAdvisoryOpen] = useState(false);
  const [mobileAdvisoryOpen, setMobileAdvisoryOpen] = useState(false);

  // Scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setMobileAdvisoryOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0B1D3A]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
  <Image
    src="/assets/logo.png"
    alt="CapValuez Logo"
    width={160}
    height={40}
    priority
    className="object-contain w-[100px] h-auto sm:w-[120px] md:w-[140px]"
  />
  <span className=" md:text-sm text-[10px] text-gray-500">Real Estate Solutions</span>
</Link>



          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-10 text-md text-white/90">
              <Link href="/" className="relative group">
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] bg-gray-400 w-0 group-hover:w-full transition-all" />
              </Link>

             

              <Link href="/asset-solutions" className="relative group">
                Asset Solutions
                <span className="absolute left-0 -bottom-1 h-[2px] bg-gray-400 w-0 group-hover:w-full transition-all" />
              </Link>
               {/* Advisory Dropdown (NO LINK) */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setAdvisoryOpen(true)}
                onMouseLeave={() => setAdvisoryOpen(false)}
              >
                <div className="flex items-center gap-1 select-none">
                  Services <FiChevronDown size={14} />
                </div>

                <AnimatePresence>
                  {advisoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-60 bg-[#0B1D3A] border border-white/10 rounded-md shadow-xl overflow-hidden"
                    >
                      <Link
                        href="/services/professional-advisory"
                        className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      >
                        Professional Advisory
                      </Link>
                      <Link
                        href="/services/funding-solutions"
                        className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      >
                        Funding Solutions
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/insights" className="relative group">
                Insights
                <span className="absolute left-0 -bottom-1 h-[2px] bg-gray-400 w-0 group-hover:w-full transition-all" />
              </Link>
            </nav>

            <span className="h-6 w-px bg-white/30" />

            <Link
              href="/contact"
              className="bg-red-800 hover:bg-red-700 text-white px-5 py-2 rounded-md transition"
            >
              Contact Us
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[55]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-[78%] sm:w-[65%] bg-[#0B1D3A] z-[60]"
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                <span className="text-white font-semibold">CAPVALUEZ</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl"
                >
                  <FiX />
                </button>
              </div>

              <div className="flex flex-col px-6 pt-8 gap-6 text-white">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>

                {/* Mobile Advisory Dropdown */}
               

                <Link href="/asset-solutions" onClick={() => setMenuOpen(false)}>
                  Asset Solutions
                </Link>
                 <div>
                  <button
                    onClick={() => setMobileAdvisoryOpen(!mobileAdvisoryOpen)}
                    className="flex justify-between w-full"
                  >
                    Advisory
                    <span>{mobileAdvisoryOpen ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {mobileAdvisoryOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-3 flex flex-col gap-3 text-sm text-white/80"
                      >
                        <Link
                          href="/services/professional-advisory"
                          onClick={() => setMenuOpen(false)}
                        >
                          Professional Advisory
                        </Link>
                        <Link
                          href="/services/funding-solutions"
                          onClick={() => setMenuOpen(false)}
                        >
                          Funding Solutions
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/insights" onClick={() => setMenuOpen(false)}>
                  Insights
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-red-600 text-center py-3 rounded-md font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
