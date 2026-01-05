"use client";

import { cardsData } from "@/app/data/services";
import Link from "next/link";

export default function AdvisoryCards() {
    return (
        <section className="w-full px-4 py-20 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ovefflow-hidden">

                {cardsData.map((card) => (
                    <div
                        key={card.id}
                        className="
              group relative rounded-2xl bg-white p-8
              border border-gray-200
              transition-all duration-300
              hover:-translate-y-2
              hover:border-[#C9A240]
              hover:shadow-2xl overflow-hidden
            "
                    >
                        {/* Top Accent Border */}
                        <div
                            className="
                absolute top-0 left-0 w-full h-1
                bg-transparent
                group-hover:bg-[#C9A240]
                transition-all duration-300
                rounded-t-2xl
              "
                        />

                        {/* Icon */}
                        <div
                            className="
                w-14 h-14 mb-6 flex items-center justify-center rounded-xl
                bg-gray-100
                text-[#1B2D5C]
                group-hover:bg-[#C9A240]/20
                group-hover:text-[#C9A240]
                transition-all duration-300
              "
                        >
                            {card.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#1B2D5C] mb-3">
                            {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                            {card.description}
                        </p>

                        {/* Core Capabilities */}
                        <ul className="space-y-2 mb-2">
                            {card.coreCapabilities.map((item) => (
                                <li
                                    key={item}
                                    className="text-sm text-gray-700 flex items-start gap-2"
                                >
                                    <span className="text-[#C9A240] mt-1">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <Link
                            href={`/services/${card.slug}`}
                            className="
    inline-flex items-center gap-2 text-sm font-semibold
    text-[#1B2D5C] group-hover:text-[#C9A240]
  "
                        >
                            Learn More
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>

                    </div>
                ))}

            </div>
        </section>
    );
}
