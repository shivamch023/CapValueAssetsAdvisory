import React from "react";

type BannerProps = {
  titlePrimary: string;     // 👈 white text
  titleSecondary: string;   // 👈 gold text
  description?: string;
  height?: string;
};

export default function Banner({
  titlePrimary,
  titleSecondary,
  description,
  height = "h-[60vh]",
}: BannerProps) {
  return (
    <section
      className={`relative w-full ${height} flex items-center overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#122557]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#222428]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-15">
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
      </div>
    </section>
  );
}
