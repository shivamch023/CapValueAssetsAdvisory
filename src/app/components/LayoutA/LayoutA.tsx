import { AdvantageCard } from "@/app/data/services";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


type Props = { card: AdvantageCard };

export default function LayoutA({ card }: Props) {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {card.titled}
          </h2>
          <p className="text-gray-600 text-lg mb-6">{card.descriptiond}</p>

          <ul className="space-y-4">
  {(card.advantages || []).map((adv, i) => (
    <li key={i} className="flex gap-2 items-center">
      <span className="text-[#C9A240] text-[15px]">
        <IoCheckmarkCircleOutline />
      </span>
      <span className="text-gray-700">{adv}</span>
    </li>
  ))}
</ul>

        </div>

     {/* RIGHT SIDE - Metrics Section */}
<div className="w-full bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
  <div className="flex flex-col divide-y divide-gray-200">
    {card.metrics.map((metric, i) => (
      <div key={i} className="flex flex-col items-center justify-center py-6">
        {/* Upper value with conditional color */}
        <p
          className={`text-4xl md:text-5xl font-bold ${
            i === 0 ? "text-[#142964]" : "text-[#B79644]"
          }`}
        >
          {metric.value}
        </p>

        {/* Lower label */}
        <p
          className={`mt-2 text-center ${
            i === 0 ? "text-gray-600" : "text-gray-500"
          }`}
        >
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
