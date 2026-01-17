"use client";
import { notFound } from "next/navigation";
import { cardsData } from "@/app/data/services";
import { AdvantageCard } from "@/app/data/services";
import AdvantageSection from "@/app/components/AdvantageSection/AdvantageSection";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export default function ServiceDetailPage({ params }: Props) {
    const service = cardsData.find(
        (item) => item.slug === params.slug
    );

    if (!service) {
        return notFound();
    }
    const card = cardsData.find(
        (item) => item.slug === params.slug
    );

    // ✅ safety check
    if (!card) {
        return <div>Service not found</div>;
    }

    return (
        <div className="relative bg-gray-100/40  w-full  overflow-hidden ">
            <section className="relative  w-full px-4 md:px-8 pt-25  md:pt-20   overflow-hidden bg-gradient-to-br from-[#142964] to-[#2D2E30]">
                <div className="grid grid-cols-1 container md:grid-cols-2 gap-0 md:gap-12 items-center">

                    {/* LEFT CONTENT — unchanged */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 bg-yellow-600/10 border border-yellow-700/10 backdrop-blur-lg px-6 py-2 rounded-full w-max">
                            <span className="w-2 h-2 bg-[#C9A240] rounded-full" />
                            <p className="text-[13px] text-[#C9A240] font-bold">
                                {service.title}
                            </p>
                        </div>

                        <div className="flex flex-col items-start">
                            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                                {service.titles}
                            </h2>
                            <h2 className="text-2xl lg:text-4xl font-bold text-[#C9A240] leading-tight">
                                {service.titles1}
                            </h2>
                        </div>

                        <p className="text-gray-200 text-[14px] max-w-xl">
                            {service.shortDescription}
                        </p>

                        <div className="flex flex-col xs:w-[70%]  text-center md:w-none sm:flex-row gap-4 mt-4">
                            <Link href="/contact">
                                <button className="flex cursor-pointer text-center text-[14px] items-center gap-2 bg-[#C9A240] text-gray-900 px-8 py-3 rounded-md font-semibold hover:opacity-90 transition w-full sm:w-auto">
                                    Request Consultation
                                    <FaArrowRight />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE — bottom se animation */}
                    <motion.div
                        initial={{ y: 120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <Image
                            src={service.image}
                            alt="Service Image"
                            width={400}
                            height={400}
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>

                </div>
            </section>
            <div className="w-full  flex items-center justify-center overflow-hidden px-4 py-16">
                <div className="max-w-6xl w-full space-y-14">

                    {/* ===== Title + Description ===== */}
                    <div className="text-center space-y-6">
                        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#212940] leading-tight">
                                {service.title2}
                            </h2>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#C9A240] leading-tight">
                                {service.titles2}
                            </h2>
                        </div>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            {service.title2dec}
                        </p>
                    </div>

                    {/* ===== 2 Row / 2 Column Cards ===== */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                        {service.children.map((item) => (
                            <div
                                key={item.id}
                                className="group relative bg-white rounded-md p-8 border border-gray-200
          transition-all duration-300 hover:border-[#C9A240] hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Top Accent Border */}
                                <span className="absolute top-0 left-0 h-1 w-0 bg-[#C9A240] transition-all duration-300 group-hover:w-full rounded-t-full" />

                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#212940]/5
            text-[#212940] group-hover:text-[#C9A240] transition-colors duration-300">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-lg font-bold text-[#212940] group-hover:text-[#C9A240] transition-colors">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {card.children1 && (
                <AdvantageSection items={card.children1} />
            )}






        </div>

    );
}
