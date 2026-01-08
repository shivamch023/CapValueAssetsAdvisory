import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  icon?: IconType; // 👈 ANY icon allowed
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
    <div className="flex flex-col items-center text-center gap-5 p-12 bg-[#152D5B]">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl leading-[1.05] font-poppins tracking-tight">
        <span className="text-white block">{titleWhite}</span>
        <span className="text-[#B79643] block -mt-1">
          {titleHighlight}
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-2xl text-sm sm:text-base">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {buttons.map((btn, index) => {
          const Icon = btn.icon;
          return (
            <Link
              key={index}
              href={btn.href}
              className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300
                ${
                  btn.variant === "outline"
                    ? "border border-[#C9A240] text-white hover:bg-[#C9A240] hover:text-[#152D5B]"
                    : "bg-[#C9A240]  hover:bg-[#d6b55a] "
                }
              `}
            >
              {btn.label}              {Icon && <Icon className="text-lg " />}

            </Link>
          );
        })}
      </div>
    </div>
  );
}
