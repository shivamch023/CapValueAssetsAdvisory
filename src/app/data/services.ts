// data/services.ts

export interface Service {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  category: 'Men' | 'Women' | 'Both';
  SaloonServices?: {
    name: string;
    price: number;
    image: string;
  }[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Hair Styling",
    slug: "hair-styling-women",
    image: "/assets/service/beauty.webp",
    description: "Professional hair styling and grooming for women, with premium services and styling options.",
    category: "Women",
    SaloonServices: [
      { name: "Baby Cut", price: 450, image: "/assets/hair/babycut.jpg" },
      { name: "Blow Dry", price: 400, image: "/assets/hair/blowdry.jpg" },
      { name: "Chunk", price: 500, image: "/assets/hair/chunk.avif" },
      { name: "Cleaning", price: 1500, image: "/assets/hair/cleaning.avif" },
      { name: "Colour Application", price: 750, image: "/assets/hair/colour.jpeg" },
      { name: "Crown Highlights", price: 3000, image: "/assets/hair/crown.avif" },
      { name: "Global Colour", price: 5500, image: "/assets/hair/global.avif" },
      { name: "Hair Cut", price: 750, image: "/assets/hair/haircut.avif" },
      { name: "Half INOA", price: 900, image: "/assets/hair/halfinoa.avif" },
      { name: "Half Majirel", price: 700, image: "/assets/hair/halfmajirel.jpg" },
      { name: "Heena", price: 1000, image: "/assets/hair/heena.avif" },
      { name: "Henna Application", price: 600, image: "/assets/hair/heenaap.avif" },
      { name: "High Lights", price: 5000, image: "/assets/hair/highlights.jpg" },
      { name: "INOA Touch Up", price: 1250, image: "/assets/hair/inoa.jpg" },
      { name: "Ironing", price: 600, image: "/assets/hair/ironing.avif" },
      { name: "Ironing Curls", price: 700, image: "/assets/hair/curls.avif" },
      { name: "Loreal Conditioner", price: 125, image: "/assets/hair/loreal-conditioner.avif" },
      { name: "Loreal Shampoo", price: 150, image: "/assets/hair/loreal-shampoo.avif" },
      { name: "Loreal Shampoo + Conditioner", price: 220, image: "/assets/hair/loreal-combo.avif" },
      { name: "Majirel Touchup", price: 1100, image: "/assets/hair/majirel-touchup.jpg" },
      { name: "Moroccanoil Conditioner", price: 220, image: "/assets/hair/moroccanoil-conditioner.webp" },
      { name: "Moroccanoil Shampoo", price: 220, image: "/assets/hair/moroccanoil-shampoo.avif" },
      { name: "Out Curls Blowdry", price: 400, image: "/assets/hair/outcurls.jfif" },
      { name: "Pro Fiber Conditioner", price: 200, image: "/assets/hair/profiber-conditioner.avif" },
      { name: "Pro Fiber Shampoo", price: 200, image: "/assets/hair/profiber-shampoo.avif" },
      { name: "Semi Dry", price: 250, image: "/assets/hair/semi-dry.avif" },
      { name: "Serioxyl Conditioner", price: 200, image: "/assets/hair/serioxyl-shampoo.avif" },
      { name: "Serioxyl Shampoo", price: 200, image: "/assets/hair/serioxyl-conditioner.avif" },
      { name: "Steam Pot Ironing", price: 750, image: "/assets/hair/steampot.jpg" },
      { name: "Tongs", price: 700, image: "/assets/hair/tongs.avif" },
      { name: "Updo", price: 1000, image: "/assets/hair/updo.avif" }
    ]
  }
,
  {
    id: "2",
    title: "Hair Styling",
    slug: "hair-styling",
    image: "/assets/service/beautymen.jpg",
    description: "Professional hair styling and grooming for men and women.",
    category: "Men",
  },
  {
    id: "3",
    title: "Facial & Cleanup",
    slug: "facial-cleanup-women",
    image: "/assets/service/facial.jpeg",
    description: "Rejuvenate your skin with our premium facial treatments.",
    category: "Women",
  },
   {
    id: "4",
    title: "Facial & Cleanup",
    slug: "facial-cleanup",
    image: "/assets/service/Facial & Cleanup.jpg",
    description: "Rejuvenate your skin with our premium facial treatments.",
    category: "Men",
  },
  {
    id: "5",
    title: "Makeup",
    slug: "makeup-women",
    image: "/assets/service/makeup.jpg",
    description: "Get glam-ready for parties, weddings, and special events.",
    category: "Women",
  },
    {
    id: "6",
    title: "Makeup",
    slug: "makeup",
    image: "/assets/service/Makeupmen.jpg",
    description: "Get glam-ready for parties, weddings, and special events.",
    category: "Men",
  },
  {
    id: "7",
    title: "Hair Color",
    slug: "hair-color-women",
    image: "/assets/service/haircolor.jpg",
    description: "Trendy hair coloring with expert consultation.",
    category: "Women",
  },
  {
    id: "8",
    title: "Hair Color",
    slug: "hair-color-women",
    image: "/assets/service/Hair Colormen.jpg",
    description: "Trendy hair coloring with expert consultation.",
    category: "Women",
  },
  {
    id: "9",
    title: "Manicure & Pedicure",
    slug: "mani-pedi-women",
    image: "/assets/service/mani-pedi.jpg",
    description: "Nail care and spa treatments for a polished look.",
    category: "Women",
  },
  {
    id: "10",
    title: "Body Polishing",
    slug: "body-polishing-women",
    image: "/assets/service/body.jpg",
    description: "Full body exfoliation for smooth and glowing skin.",
    category: "Women",
  },
  {
    id: "11",
    title: "Massage",
    slug: "massage-women",
    image: "/assets/service/massage.jpg",
    description: "Relaxing massage therapy for stress relief and wellness.",
    category: "Women",
  },
  {
    id: "12",
    title: "Hair Services",
    slug: "hair-services-women",
    image: "/assets/service/Hair Services.jpg",
    description: "Haircut, trimming, and styling by professionals.",
    category: "Women",
  },
  {
    id: "13",
    title: "Bleach & De-Tan",
    slug: "bleach-de-tan-women",
    image: "/assets/service/Bleach.jpg",
    description: "Skin brightening and tan removal treatments.",
    category: "Women",
  },
  {
    id: "14",
    title: "Hair Services",
    slug: "hair-services-men",
    image: "/assets/service/HAIR.jpg",
    description: "Haircut, trimming, and styling by professionals.",
    category: "Men",
  },

];
