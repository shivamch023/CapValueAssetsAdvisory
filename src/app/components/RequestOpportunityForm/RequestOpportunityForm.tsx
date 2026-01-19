"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function RequestOpportunityForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [assetCategories, setAssetCategories] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  const handleCheckbox = (
    value: string,
    array: string[],
    setArray: (arr: string[]) => void
  ) => {
    setArray(
      array.includes(value)
        ? array.filter((item) => item !== value)
        : [...array, value]
    );
  };

  const handleSendWhatsApp = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    const message = `Hello CapValuez Team,

Full Name: ${fullName || "N/A"}
Email: ${email}
Contact Number: ${contact || "N/A"}
Interested Asset Categories: ${assetCategories.join(", ") || "N/A"}
Preferred Location(s): ${location || "N/A"}

Thank you!`;

    const whatsappURL = `https://wa.me/919811310951?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative rounded-xl py-10 px-3 sm:px-4 bg-[#0B1D3A] flex justify-center">
      <div className="w-full max-w-md bg-[#F6F2ED] rounded-2xl shadow-2xl p-5 sm:p-8">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#1B2D5C] mb-6">
          Request Opportunity
        </h2>

        {/* Full Name */}
        <div className="mb-2">
          <label className="block text-sm text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded-md p-2.5 text-sm focus:ring-2 focus:ring-[#C9A240]"
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-sm text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md p-2.5 text-sm focus:ring-2 focus:ring-[#C9A240]"
          />
        </div>

        {/* Contact */}
        <div className="mb-3">
          <label className="block text-sm text-gray-700 mb-1">
            Contact Number (Optional)
          </label>
          <div className="flex">
            <span className="px-3 flex items-center bg-white border border-r-0 rounded-l-md text-sm">
              +91
            </span>
            <input
              type="tel"
              placeholder="Mobile number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border rounded-r-md p-2.5 text-sm focus:ring-2 focus:ring-[#C9A240]"
            />
          </div>
        </div>

        {/* Asset Category */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Interested Asset Category
          </p>
          <div className="space-y-3">
            {[
              "Residential Plots",
              "Agricultural Land",
              "Industrial Park Plots",
              "Warehouses",
              "Commercial Spaces",
            ].map((item) => (
              <label
                key={item}
                className={`flex gap-3 items-start p-3 rounded-lg border cursor-pointer
                ${assetCategories.includes(item)
                    ? "border-[#C9A240] bg-[#FFF8E6]"
                    : "border-gray-300 bg-white"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={assetCategories.includes(item)}
                  onChange={() =>
                    handleCheckbox(item, assetCategories, setAssetCategories)
                  }
                  className="mt-1 accent-[#C9A240]"
                />
                <span className="text-sm text-gray-700 leading-snug">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="block text-sm text-gray-700 mb-1">
            Preferred Location(s)
          </label>
          <input
            type="text"
            placeholder="City or region"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded-md p-2.5 text-sm focus:ring-2 focus:ring-[#C9A240]"
          />
        </div>

        {/* Consent */}
        <label className="flex gap-2 text-xs text-gray-500 mb-5">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className=""
          />

          I agree to the Privacy Policy and Terms & Conditions.        </label>

        {/* CTA */}
        <button
          type="button"
          onClick={handleSendWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-[#1C6B4A] hover:bg-[#14523A] text-white py-3 rounded-lg text-sm sm:text-base font-semibold transition"
        >
          <FaWhatsapp className="text-lg" />
          Send Request on WhatsApp
        </button>

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
          Your details will be shared securely via WhatsApp.
        </p>
      </div>
    </section>
  );
}
