import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  icon?: IconType;
};

type CtaSectionProps = {
  titleWhite: string;
  titleHighlight: string;
  description: string;
  buttons: ButtonProps[];
};

export default function CtaSection({
  titleWhite,
  titleHighlight,
  description,
  buttons,
}: CtaSectionProps) {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[url('/assets/banner/cont.jpg')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B1D3A]/70" />

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col items-center text-center gap-6
          px-6 py-16
          sm:px-10 sm:py-20
          lg:px-20 lg:py-28
        "
      >
        {/* Heading */}
        <h2 className="leading-tight font-poppins tracking-tight">
          <span className="block text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
            {titleWhite}
          </span>
          <span className="block text-[#B79643] text-3xl sm:text-4xl lg:text-5xl font-semibold -mt-1">
            {titleHighlight}
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {buttons.map((btn, index) => {
            const Icon = btn.icon;
            const isOutline = btn.variant === "outline";

            return (
              <Link
                key={index}
                href={btn.href}
                className={`
                  inline-flex items-center justify-center gap-2
                  px-7 py-3 rounded-md font-medium
                  transition-all duration-300
                  ${
                    isOutline
                      ? "border border-[#B79643] text-white hover:bg-[#C9A240] hover:text-[#0B1D3A]"
                      : "bg-[#B79643] text-[#0B1D3A] hover:bg-[#C9A240]"
                  }
                `}
              >
                {btn.label}
                {Icon && <Icon className="text-lg" />}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
