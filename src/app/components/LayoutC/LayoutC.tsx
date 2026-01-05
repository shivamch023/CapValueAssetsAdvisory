import { AdvantageCard } from "@/app/data/services";
import { RiSkullLine } from "react-icons/ri";

type Props = { card: AdvantageCard };

export default function LayoutC({ card }: Props) {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
     <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
  {/* LEFT SIDE */}
<div>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    {card.titled}
  </h2>
  <p className="text-gray-600 text-lg mb-6">{card.descriptiond}</p>

  {/* Features in 2 columns */}
  <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4 ">
    {card.features && card.features.map((feature, i) => (
      <li key={i} className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm">
        <span className="text-gray-700 font-medium">{feature.ptext}</span>
        <span className="text-[#C9A240] font-bold">{feature.pnumber}</span>
      </li>  
    ))}
  </ul>
</div>



  {/* RIGHT SIDE (LAY2 + METRICS stacked) */}
  <div className="flex flex-col gap-6">
    {/* LAY2 SECTION */}
    {card.lay2 && card.lay2.length > 0 && (
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        {card.lay2.map((item, i) => (
          <div key={i} className="mb-6 last:mb-0">
            {/* Title + Icon */}
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D8BF81] text-white text-xl">
                <RiSkullLine />
              </span>
              <h3 className="text-lg font-bold text-[#212940]">{item.title}</h3>
            </div>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {item.descrption}
            </p>
          </div>
        ))}
      </div>
    )}

    {/* METRICS SECTION */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {card.metrics.map((metric, i) => (
        <div key={i} className="bg-white rounded-xl p-8 text-center shadow-md">
          <p className="text-5xl font-bold text-gray-900">{metric.value}</p>
          <p className="mt-2 text-gray-600">{metric.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}
