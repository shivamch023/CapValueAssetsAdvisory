import { AdvantageCard } from "@/app/data/services";
import { FaLocationDot } from "react-icons/fa6";
import { RiShieldCheckLine } from "react-icons/ri";

type Props = { card: AdvantageCard };

export default function LayoutB({ card }: Props) {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1D3A] leading-tight">
            {card.titled}
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
            {card.descriptiond}
          </p>

          {/* Advantages */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {card.advantages?.map((adv, i) => (
              <li
                key={i}
                className="group flex items-start gap-3 bg-white p-4 rounded-xl
                border border-gray-200 shadow-sm
                hover:shadow-md hover:border-[#C9A240]
                transition-all duration-300"
              >
                <span className="mt-1 text-[#C9A240] text-lg">
                  <FaLocationDot />
                </span>
                <span className="text-gray-700 text-sm leading-snug">
                  {adv}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col gap-8">

          {/* ===== Highlight / lay2 ===== */}
          {card.lay2 && card.lay2.length > 0 && (
            <div
              className="relative bg-white rounded-2xl p-6 sm:p-7
              shadow-md hover:shadow-lg transition-all duration-300
              border border-gray-200"
            >
              {/* Accent bar */}
              <span className="absolute top-0 left-0 h-full w-1.5 bg-[#C9A240] rounded-l-2xl" />

              {card.lay2.map((item, i) => (
                <div key={i} className="pl-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C9A240]/90 text-white text-lg">
                      <RiShieldCheckLine />
                    </span>
                    <h3 className="text-lg font-bold text-[#0B1D3A]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.descrption}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* ===== Metrics ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {card.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 text-center
                shadow-md hover:shadow-lg
                transition-all duration-300 border border-gray-200"
              >
                <p className="text-xl md:text-4xl font-extrabold text-[#0B1D3A]">
                  {metric.value}
                </p>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
