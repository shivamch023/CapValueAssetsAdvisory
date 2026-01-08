import React from "react";
import Image from "next/image";

type BannerProps = {
  titlePrimary: string;     // white text
  titleSecondary: string;   // gold text
  description?: string;
  height?: string;
  imageSrc?: string;       // 👈 NEW (right side image)
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
    <section className={`relative w-full h-[60vh] overflow-hidden mt-15`}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#122557]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#222428]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full h-full flex items-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-8">
          
          {/* LEFT CONTENT */}
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-3xl font-bold md:text-4xl leading-[1.1] tracking-tight">
              <span className="text-white">{titlePrimary} </span>
              <span className="text-[#B79643]">{titleSecondary}</span>
            </h1>

            {description && (
              <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl">
                {description}
              </p>
            )}
          </div>

          {/* RIGHT IMAGE (via props) */}
          {imageSrc && (
            <div className="hidden lg:flex justify-end bootom-0">
              <div className="relative w-[350px] mt-14 h-[350px] xl:w-[420px] xl:h-[430px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-contain "
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
