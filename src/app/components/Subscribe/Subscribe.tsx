"use client";
import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";

type SubscribeProps = {
    title: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (email: string) => void;
};

export default function Subscribe({
    title,
    description,
    placeholder = "Enter your email",
    buttonText = "Subscribe",
    onSubmit,
}: SubscribeProps) {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) onSubmit(email);
        setEmail("");
    };

    return (
        <section className="bg-gray-200 py-16 px-6 sm:px-12">
            <div className="max-w-3xl mx-auto text-center text-white">
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                    {title}
                </h2>

                {/* Description */}
                {description && (
                    <p className="text-gray-500  text-sm sm:text-base mb-8">
                        {description}
                    </p>
                )}

{/* Input + Button */}
<form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row justify-center items-center gap-4"
>
  {/* Email Input */}
  <div className="relative flex-1 sm:flex-none w-full sm:w-[400px]">
    <input
      type="email"
      required
      placeholder={placeholder}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full pl-8 pr-5 py-3 rounded-xl bg-white text-[#152D5B] placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#B79643] focus:ring-offset-1  transition-all duration-300 hover:shadow-lg"
    />
  </div>

  {/* Subscribe Button */}
  <button
    type="submit"
    className="bg-[#152D5B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#B79643] focus:ring-offset-1"
  >
    {buttonText}
  </button>
</form>



            </div>
        </section>
    );
}
