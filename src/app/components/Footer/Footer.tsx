// app/components/Footer/Footer.tsx
import React from "react";
import Link from "next/link";

import {
  IoChevronForward,
  IoBriefcaseOutline,
  IoPeopleOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* ================= SOCIAL CONNECT ================= */}
<div className="mb-12 w-full flex flex-col items-center">
  <h3 className="text-white text-lg font-semibold mb-5 tracking-wide">
    Connect with us
  </h3>

  <div className="flex items-center gap-5 justify-center">
    
    {/* Facebook */}
    <a
      href="#"
      target="_blank"
      className="group w-11 h-11 flex items-center justify-center rounded-xl
      bg-[#1877F2] transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(24,119,242,0.45)]"
    >
      <FaFacebookF className="text-white text-lg group-hover:scale-110 transition" />
    </a>

    {/* Instagram */}
    <a
      href="#"
      target="_blank"
      className="group w-11 h-11 flex items-center justify-center rounded-xl
      bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,42,123,0.45)]"
    >
      <FaInstagram className="text-white text-lg group-hover:scale-110 transition" />
    </a>

    {/* X */}
    <a
      href="#"
      target="_blank"
      className="group w-11 h-11 flex items-center justify-center rounded-xl
      bg-[#111111] transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
    >
      <FaXTwitter className="text-white text-lg group-hover:scale-110 transition" />
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      target="_blank"
      className="group w-11 h-11 flex items-center justify-center rounded-xl
      bg-[#0A66C2] transition-all duration-300
      hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(10,102,194,0.45)]"
    >
      <FaLinkedinIn className="text-white text-lg group-hover:scale-110 transition" />
    </a>

  </div>
</div>


        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-sm sm:text-base">
          

          {/* -------- CapValue Info -------- */}
          <div>
          <Link href="/" className="flex items-center">
  <Image
    src="/assets/logo.png"
    alt="CapValuez Logo"
    width={160}
    height={40}
    priority
    className="object-contain w-[120px] h-auto sm:w-[140px] md:w-[160px]"
  />
</Link>


            <p className="text-gray-300 text-[15px] mb-4 mt-3">
              Helping you make smart business and asset investment decisions.            </p>
          </div>

          {/* -------- Services -------- */}
          <div>
            <h3 className="flex items-center gap-2 text-lg mb-3 text-[#B79643]">
              <IoBriefcaseOutline /> Services
            </h3>
            <ul className="space-y-2 ml-2 text-gray-300 text-[15px]">
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/services/professional-advisory">Professional Advisory</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/services/funding-solutions">Funding Solutions</Link>
              </li><li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/asset-solutions">Assets Solutions</Link>
              </li>

            </ul>
          </div>

          {/* -------- Company -------- */}
          <div>
            <h3 className="flex items-center gap-2 text-lg mb-3 text-[#B79643]">
              <IoPeopleOutline /> Company
            </h3>
            <ul className="space-y-2 ml-2 text-gray-300 text-[15px]">
              
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/resources">Resources</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* -------- Contact -------- */}
          <div>
            <h3 className="flex items-center gap-2 text-lg mb-3 text-[#B79643]">
              <IoCallOutline /> Contact
            </h3>
            <ul className="space-y-3 ml-2 text-gray-300 text-[13px]">
             

              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoCallOutline />
                <a href="tel:+919811310951">+91-9811310951</a>
              </li>
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoMailOutline />
                <a href="mailto:info@capvaluez.com">info@capvaluez.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
          <p>© CapValue Assets Advisory Private Limited. All rights reserved.</p>
          <div className="flex gap-4 mt-2 lg:mt-0">
            <Link href="/privacy-policy" className="hover:text-[#C9A240] transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#C9A240] transition">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
