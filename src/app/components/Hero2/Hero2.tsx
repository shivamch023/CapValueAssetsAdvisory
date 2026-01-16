"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FiBarChart2,
    FiMapPin,
    FiSearch,
    FiShield,
    FiTrendingUp,
} from "react-icons/fi";

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-28 py-6 overflow-hidden"
            style={{
                backgroundImage: "url('/assets/banner/herongt.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A1633]/85 via-[#0A1633]/70 to-[#08112A]/95" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[980px] text-center text-white">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif font-normal 
                     text-[24px] sm:text-[32px] md:text-[54px] 
                     leading-snug tracking-wide mb-4"
                >
                    What are you trying to
                    <br />
                    understand or decide?
                </motion.h1>

                {/* Subheading */}
                <p className="text-[13px] sm:text-[14px] text-white/75 mb-6">
                    Ask an advisor. Not an algorithm.
                </p>

                {/* Search Section */}
                <div className="w-full max-w-[760px] mx-auto text-left">
                    <p className="mb-2 text-[12px] sm:text-[13px] text-white/70 font-medium">
                        Ask an Advisor
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex w-full bg-white rounded-md overflow-hidden shadow-xl"
                    >
                        {/* Input */}
                        <div className="relative flex-1">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[16px]" />
                            <input
                                type="text"
                                placeholder="Type your question about a property, location, or investment risk"
                                className="w-full pl-10 pr-3 py-3 sm:py-4 
                           text-[13px] sm:text-sm 
                           text-gray-700 outline-none"
                            />
                        </div>

                        {/* Button */}
                        <button className="bg-[#C4161C] hover:bg-[#A81217] 
                               text-white px-4 sm:px-6 
                               text-[12px] sm:text-sm 
                               font-semibold transition whitespace-nowrap">
                            Submit <br />Questions
                        </button>
                    </motion.div>
                </div>

                {/* Helper Text */}
                <p className="mt-4 text-[12px] sm:text-[13px] text-white/50 px-2">
                    Share your question and contact details. A CapValuez advisor will review it.
                </p>

                {/* Popular Questions */}
                <div className="mt-10 w-full ">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white/70 mb-5">
                        Popular questions investors ask before committing capital
                    </p>

                    {/* Chips Grid */}
                    <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                label: "Location Risk",
                                href: "/advisory/location-risk",
                                icon: <FiMapPin />,
                                iconColor: "text-red-400", // 🔴 red
                            },
                            {
                                label: "Is the Price Fair?",
                                href: "/advisory/price-fairness",
                                icon: <FiBarChart2 />,
                                iconColor: "text-sky-400", // 🔵 sky
                            },
                            {
                                label: "Legal Due Diligence",
                                href: "/advisory/legal-due-diligence",
                                icon: <FiShield />,
                                iconColor: "text-yellow-400", // 🟡 yellow
                            },
                            {
                                label: "Project Feasibility",
                                href: "/advisory/project-feasibility",
                                icon: <FiTrendingUp />,
                                iconColor: "text-cyan-400", // 🔷 sky blue
                            },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group flex items-center justify-center gap-3
                 px-2 py-3
                 text-[13px] sm:text-[14px] md:text-[15px]
                 rounded-md bg-white/10 border border-white/20
                 backdrop-blur-md font-medium text-white
                 hover:bg-white/20 hover:border-white/30
                 transition"
                            >
                                <span
                                    className={`text-[16px] ${item.iconColor} group-hover:scale-110 transition-transform`}
                                >
                                    {item.icon}
                                </span>

                                <span className="text-center leading-tight">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>


                    <p className="mt-5 text-[11px] sm:text-[12px] text-white/50">
                        These are questions we frequently help investors think through.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
