import { AdvantageCard } from "@/app/data/services";
import LayoutA from "../LayoutA/LayoutA";
import LayoutB from "../LayoutB/LayoutB";
import LayoutC from "../LayoutC/LayoutC";

type Props = {
  items: AdvantageCard[];
};

const layoutMap = {
  layoutA: LayoutA,
  layoutB: LayoutB,
  layoutC: LayoutC,
};

export default function AdvantageSection({ items }: Props) {
  return (
    <>
      {items.map((item) => {
        const Component = layoutMap[item.variant || "layoutA"]; // default layoutA
        return <Component key={item.id} card={item} />;
      })}
    </>
  );
}
