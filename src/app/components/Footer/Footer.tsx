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

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-sm sm:text-base">

          {/* -------- CapValue Info -------- */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide flex items-baseline ">
              <span className="text-white font-light">Cap</span>
              <span className="text-[#B79643] font-medium text-[1.15em]">Valuez</span>
            </h3>

            <p className="text-gray-300 text-[15px] mb-4 mt-3">
              Strategic advisory services delivering exceptional outcomes in business, real estate, and capital.
            </p>
          </div>

          {/* -------- Services -------- */}
          <div>
            <h3 className="flex items-center gap-2 text-lg mb-3 text-[#B79643]">
              <IoBriefcaseOutline /> Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-[15px]">
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/services/business-consulting">Business Consulting</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/services/real-estate-services">Real Estate Services</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/services/growth-capital">Capital Advisory</Link>
              </li>
            </ul>
          </div>

          {/* -------- Company -------- */}
          <div>
            <h3 className="flex items-center gap-2 text-lg mb-3 text-[#B79643]">
              <IoPeopleOutline /> Company
            </h3>
            <ul className="space-y-2 text-gray-300 text-[15px]">
              <li className="flex items-center gap-2 hover:text-[#C9A240] transition">
                <IoChevronForward />
                <Link href="/meet-our-team">Our Team</Link>
              </li>
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
            <ul className="space-y-3 text-gray-300 text-[15px]">
              <li className="flex items-start gap-2 hover:text-[#C9A240] transition">
                <IoLocationOutline className="mt-1" />
                <a
                  href="https://www.google.com/maps?q=123+Financial+District,+New+York,+NY+10004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delhi NCR, India
                </a>
              </li>
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
