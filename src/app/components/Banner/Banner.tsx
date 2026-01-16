import React from "react";
import Image from "next/image";

type BannerProps = {
  titlePrimary: string;
  titleSecondary: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Banner({
  titlePrimary,
  titleSecondary,
  description,
  imageSrc,
  imageAlt = "Banner Image",
}: BannerProps) {
  return (
    <section className="relative w-full min-h-[55vh] lg:min-h-[65vh] overflow-hidden pt-24">
      {/* 🔹 Background */}
      <div className="absolute inset-0 bg-[#0B1D3A]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/70 via-[#0B1D3A]/60 to-[#08112A]/95" />

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full">

          {/* 🔹 LEFT CONTENT */}
          <div className="text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-white">{titlePrimary} </span>
              <span className="text-[#B79643]">{titleSecondary}</span>
            </h1>

            {description && (
              <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* 🔹 RIGHT IMAGE (Mobile + Desktop) */}
          {imageSrc && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
