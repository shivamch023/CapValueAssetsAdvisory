"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  service: { name: string; price: number };
  onClose: () => void;
}

const barbers = ["Amit", "Ravi", "Sameer", "Priya"];
const locations = ["Chandni Chowk", "Delhi"];

export default function BookingModal({ service, onClose }: BookingModalProps) {
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [barber, setBarber] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = () => {
    if (!userName || !mobile || !location || !barber || !dateTime) return;

    const message = `*Booking Details:*\n\nService: ${service.name} - ₹${service.price}\nName: ${userName}\nMobile: ${mobile}\nCenter: ${location}\nBarber: ${barber}\nDate & Time: ${new Date(dateTime).toLocaleString()}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919219723545?text=${encodedMessage}`; 
    window.open(whatsappURL, "_blank");

    onClose();
  };

  const todayDateTime = new Date().toISOString().slice(0, 16);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-md bg-opacity-70 flex items-center justify-center z-50 px-4"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gray-900 text-white rounded-2xl shadow-2xl p-6 w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-yellow-400 text-center">
            Book Appointment
          </h2>

          <p className="font-medium">Service: {service.name}</p>
          <p className="font-medium">Price: ₹{service.price}</p>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-500 p-2 rounded bg-transparent text-white"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-gray-500 p-2 rounded bg-transparent text-white"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <select
            className="w-full border border-gray-500 p-2 rounded bg-transparent text-white"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" className="text-black">Select Location</option>
            {locations.map((name) => (
              <option key={name} value={name} className="text-black">
                {name}
              </option>
            ))}
          </select>

          <select
            className="w-full border border-gray-500 p-2 rounded bg-transparent text-white"
            value={barber}
            onChange={(e) => setBarber(e.target.value)}
          >
            <option value="" className="text-black">Select Barber</option>
            {barbers.map((name) => (
              <option key={name} value={name} className="text-black">
                {name}
              </option>
            ))}
          </select>

          <input
            type="datetime-local"
            className="w-full border border-gray-500 p-2 rounded bg-transparent text-white"
            min={todayDateTime}
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded w-full"
          >
            Submit & WhatsApp
          </button>

          <button
            onClick={onClose}
            className="text-red-400 font-medium mt-2 w-full hover:underline"
          >
            Cancel
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
