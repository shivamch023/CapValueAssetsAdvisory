"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="container">
      <a
        href="https://wa.me/919716535000?text=Hello!%20I%20am%20interested%20in%20your%20beauty%20services.%20Please%20share%20details%20about%20makeup,%20salon,%20or%20unisex%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5  right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-2 rounded-xl shadow-md transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
