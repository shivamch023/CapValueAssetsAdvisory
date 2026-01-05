"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Business Advisory", href: "/services/business-advisory" },
  { name: "Real Estate", href: "/services/real-estate" },
  { name: "Growth Capital", href: "/services/growth-capital" },
  { name: "Team", href: "/meet-our-team" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Close drawer if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-white z-100 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <h1 className="text-[26px] font-extrabold tracking-wider">
              <span className="text-[#142964]">Cap</span>
              <span className="text-[#C9A240]">Value</span>
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-[12px] uppercase transition
                  ${isActive ? "text-[#C9A240]" : "text-gray-500 hover:text-[#C9A240]"}
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#C9A240]
                  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT BUTTON */}
          <div className="hidden lg:block">
            <Link
              href="/contactus"
              className="bg-[#142964] text-white px-4 py-3 rounded-md text-[13px] uppercase tracking-wide hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger / Cross toggle) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-gray-700 z-[70]"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Drawer */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="fixed top-15 left-0 w-full  h-[70vh]
              bg-white/95 backdrop-blur-sm z-[90] flex flex-col items-start justify-start  px-6 pt-10 gap-4"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-[13px] uppercase tracking-wide transition
                    ${isActive ? "text-[#C9A240]" : "text-gray-600 hover:text-[#C9A240]"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contactus"
                onClick={() => setOpen(false)}
                className="mt-6 w-full text-center bg-[#142964] text-white px-8 py-3 rounded-md text-sm uppercase tracking-wide"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Optional backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
