"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="container">
      <a
href="https://wa.me/919811310951?text=Hello!%20I%20am%20interested%20in%20CapValue%20Assets%20Advisory%20services.%20Please%20share%20details%20about%20investment%20advisory,%20portfolio%20management,%20and%20financial%20planning."
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
