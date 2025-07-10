// data/services.ts

export interface Service {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  category: 'Men' | 'Women' | 'Both';
}

export const services: Service[] = [
  {
    id: "1",
    title: "Hair Styling",
    slug: "hair-styling-women",
    image: "/assets/service/beauty.webp",
    description: "Professional hair styling and grooming for men and women.",
    category: "Women",
  },
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
