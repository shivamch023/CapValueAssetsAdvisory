"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function RequestOpportunityForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");
    const [assetCategories, setAssetCategories] = useState<string[]>([]);
    const [investmentPurposes, setInvestmentPurposes] = useState<string[]>([]);
    const [consent, setConsent] = useState(false);

    const handleCheckbox = (
        value: string,
        array: string[],
        setArray: (arr: string[]) => void
    ) => {
        if (array.includes(value)) {
            setArray(array.filter((item) => item !== value));
        } else {
            setArray([...array, value]);
        }
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
Investment Purpose: ${investmentPurposes.join(", ") || "N/A"}
Preferred Location(s): ${location || "N/A"}

Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "+919811310951"; // Fixed number
        const whatsappURL = `https://wa.me/${whatsappNumber.replace(
            /[^\d]/g,
            ""
        )}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="relative rounded-xl py-12 px-4 bg-[#0B1D3A] flex justify-center">
            <div className="relative w-full max-w-md bg-[#F6F2ED] rounded-2xl shadow-2xl p-8">
                <h2 className="text-center text-2xl font-semibold text-[#1B2D5C] mb-6">
                    Request Opportunity
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        placeholder="So we know who we're connecting with"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C9A240]"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C9A240]"
                    />
                </div>

                {/* Contact */}
                <div className="mb-6">
                    <label className="block text-gray-700 mb-1">
                        Contact Number (Optional)
                    </label>
                    <div className="flex">
                        <span className="flex items-center px-3 bg-white border border-r-0 border-gray-300 rounded-l-md text-sm">
                            +91
                        </span>
                        <input
                            type="tel"
                            placeholder="Optional, for quicker coordination"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full border border-gray-300 rounded-r-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C9A240]"
                        />
                    </div>
                </div>

                {/* Checkboxes */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6">
                    <div>
                        <p className="text-gray-700 font-semibold mb-3">
                            Interested Asset Category
                        </p>

                        <div className="grid grid-cols-1 gap-3">
                            {[
                                "Residential Plots",
                                "Agricultural Land",
                                "Industrial Park Plots",
                                "Warehouses",
                                "Commercial Spaces",
                            ].map((item) => (
                                <label
                                    key={item}
                                    className={`flex items-center gap-3 p-3 rounded-lg border
        cursor-pointer transition
        ${assetCategories.includes(item)
                                            ? "border-[#C9A240] bg-[#FFF8E6]"
                                            : "border-gray-300 bg-white"
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-[#C9A240]"
                                        checked={assetCategories.includes(item)}
                                        onChange={() =>
                                            handleCheckbox(item, assetCategories, setAssetCategories)
                                        }
                                    />
                                    <span className="text-gray-700 text-sm leading-snug">
                                        {item}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>


                    <div>
                        <p className="text-gray-700 font-semibold mb-3">
                            Investment Purpose
                        </p>

                        <div className="grid grid-cols-1 gap-3">
                            {[
                                "Personal use",
                                "Long-term investment",
                                "Business / operational use",
                                "Yet to decide",
                            ].map((item) => (
                                <label
                                    key={item}
                                    className={`flex items-center gap-3 p-3 rounded-lg border 
        cursor-pointer transition
        ${investmentPurposes.includes(item)
                                            ? "border-[#C9A240] bg-[#FFF8E6]"
                                            : "border-gray-300 bg-white"
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-[#C9A240]"
                                        checked={investmentPurposes.includes(item)}
                                        onChange={() =>
                                            handleCheckbox(item, investmentPurposes, setInvestmentPurposes)
                                        }
                                    />
                                    <span className="text-gray-700 text-sm leading-snug">
                                        {item}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Preferred Location(s)</label>
                    <input
                        type="text"
                        placeholder="City, region, or open to suggestions"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C9A240]"
                    />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-2 text-xs text-gray-500 mb-6 ">
                    <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1"
                    />
                    I understand that submitting this request does not constitute an offer
                    or solicitation and that opportunities, if any, will be shared based
                    on suitability and availability.
                </label>

                {/* CTA */}
                <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-[#1C6B4A] hover:bg-[#14523A] text-white py-3 rounded-lg font-semibold transition"
                >
                    <FaWhatsapp className="text-lg" />
                    Send Request on WhatsApp
                </button>

                {/* REPORT / INFO TEXT */}
                <p className="text-gray-500 text-sm mt-3 text-center">
                    Your information will be sent to our team via WhatsApp.
                </p>
            </div>
        </section>
    );
}
