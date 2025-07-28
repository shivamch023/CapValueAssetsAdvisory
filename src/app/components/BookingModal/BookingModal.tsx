"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; 

interface BookingModalProps {
  service: { name: string; price: number };
  onClose: () => void;
}

const barbers = ["Amit", "Ravi", "Sameer", "Priya", "Anjali"];
const locations = ["Chandni Chowk", "Delhi"];

function CustomDropdown({
  label,
  options,
  selected,
  setSelected,
}: {
  label: string;
  options: string[];
  selected: string;
  setSelected: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-gray-500 p-2 rounded bg-transparent text-white cursor-pointer flex justify-between items-center"
      >
        <span>{selected || label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-black hover:bg-yellow-100 cursor-pointer"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BookingModal({ service, onClose }: BookingModalProps) {
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [barber, setBarber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!userName || !mobile || !location || !barber || !date || !time) return;

    const dateTime = new Date(`${date}T${time}`);
    const message = `*Booking Details:*\n\nService: ${service.name} - ₹${service.price}\nName: ${userName}\nMobile: ${mobile}\nCenter: ${location}\nBarber: ${barber}\nDate & Time: ${dateTime.toLocaleString()}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919219723545?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    onClose();
  };

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-4"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-gray-900 text-white rounded-2xl shadow-2xl p-6 w-full max-w-md space-y-4"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute shadow-md cursor-pointer border p-1 rounded-sm border-gray-700 top-4 right-4 text-white hover:text-yellow-400"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-yellow-400 text-center">
            Book Appointment
          </h2>

          {/* Service Info Box */}
          <div className="bg-yellow-500/10 border border-yellow-400 text-yellow-300 rounded-lg p-3 space-y-1">
            <p className="text-base font-semibold">Service: {service.name}</p>
            <p className="text-base">Price: ₹{service.price}</p>
          </div>

          {/* Form Inputs */}
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

          <CustomDropdown
            label="Select Location"
            options={locations}
            selected={location}
            setSelected={setLocation}
          />

          <CustomDropdown
            label="Select Barber"
            options={barbers}
            selected={barber}
            setSelected={setBarber}
          />

          {/* Separate Date & Time Inputs */}
          <div className="flex gap-2">
            <input
              type="date"
              className="w-1/2 border border-gray-500 p-2 rounded bg-transparent text-white"
              min={todayDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              className="w-1/2 border border-gray-500 p-2 rounded bg-transparent text-white"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* Animated Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="border-gray-500 border  text-gray-200 font-semibold px-4 py-2 rounded w-full"
          >
            Submit & WhatsApp
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
