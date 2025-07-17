// data/services.ts

export interface Service {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  category: "Men" | "Women" | "Both";
  SaloonServices?: {
    name: string;
    price: number;
    image: string;
  }[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Women Hair Styling",
    slug: "hair-styling-women",
    image: "/assets/service/beauty.webp",
    description:
      "Professional hair styling and grooming for women, with premium services and styling options.",
    category: "Women",
    SaloonServices: [
      { name: "Baby Cut", price: 450, image: "/assets/hair/babycut.jpg" },
      { name: "Blow Dry", price: 400, image: "/assets/hair/blowdry.jpg" },
      { name: "Chunk", price: 500, image: "/assets/hair/chunk.avif" },
      { name: "Cleaning", price: 1500, image: "/assets/hair/cleaning.avif" },
      {
        name: "Colour Application",
        price: 750,
        image: "/assets/hair/colour.jpeg",
      },
      {
        name: "Crown Highlights",
        price: 3000,
        image: "/assets/hair/crown.avif",
      },
      { name: "Global Colour", price: 5500, image: "/assets/hair/global.avif" },
      { name: "Hair Cut", price: 750, image: "/assets/hair/haircut.avif" },
      { name: "Half INOA", price: 900, image: "/assets/hair/halfinoa.avif" },
      {
        name: "Half Majirel",
        price: 700,
        image: "/assets/hair/halfmajirel.jpg",
      },
      { name: "Heena", price: 1000, image: "/assets/hair/heena.avif" },
      {
        name: "Henna Application",
        price: 600,
        image: "/assets/hair/heenaap.avif",
      },
      {
        name: "High Lights",
        price: 5000,
        image: "/assets/hair/highlights.jpg",
      },
      { name: "INOA Touch Up", price: 1250, image: "/assets/hair/inoa.jpg" },
      { name: "Ironing", price: 600, image: "/assets/hair/ironing.avif" },
      { name: "Ironing Curls", price: 700, image: "/assets/hair/curls.avif" },
      {
        name: "Loreal Conditioner",
        price: 125,
        image: "/assets/hair/loreal-conditioner.avif",
      },
      {
        name: "Loreal Shampoo",
        price: 150,
        image: "/assets/hair/loreal-shampoo.avif",
      },
      {
        name: "Loreal Shampoo + Conditioner",
        price: 220,
        image: "/assets/hair/loreal-combo.avif",
      },
      {
        name: "Majirel Touchup",
        price: 1100,
        image: "/assets/hair/majirel-touchup.jpg",
      },
      {
        name: "Moroccanoil Conditioner",
        price: 220,
        image: "/assets/hair/moroccanoil-conditioner.webp",
      },
      {
        name: "Moroccanoil Shampoo",
        price: 220,
        image: "/assets/hair/moroccanoil-shampoo.avif",
      },
      {
        name: "Out Curls Blowdry",
        price: 400,
        image: "/assets/hair/outcurls.jfif",
      },
      {
        name: "Pro Fiber Conditioner",
        price: 200,
        image: "/assets/hair/profiber-conditioner.avif",
      },
      {
        name: "Pro Fiber Shampoo",
        price: 200,
        image: "/assets/hair/profiber-shampoo.avif",
      },
      { name: "Semi Dry", price: 250, image: "/assets/hair/semi-dry.avif" },
      {
        name: "Serioxyl Conditioner",
        price: 200,
        image: "/assets/hair/serioxyl-shampoo.avif",
      },
      {
        name: "Serioxyl Shampoo",
        price: 200,
        image: "/assets/hair/serioxyl-conditioner.avif",
      },
      {
        name: "Steam Pot Ironing",
        price: 750,
        image: "/assets/hair/steampot.jpg",
      },
      { name: "Tongs", price: 700, image: "/assets/hair/tongs.avif" },
      { name: "Updo", price: 1000, image: "/assets/hair/updo.avif" },
    ],
  },
 {
  id: "2",
  title: "Men Hair Styling",
  slug: "hair-styling-men",
  image: "/assets/men-hair/men-hair.jpg",
  description: "Professional hair styling and grooming for men with trendy cuts and styles by experts.",
  category: "Men",
  SaloonServices: [
    {
      name: "Classic Hair Cut",
      price: 500,
      image: "/assets/men-hair/classic-hair-cut.jpg",
    },
    {
      name: "Beard Styling",
      price: 350,
      image: "/assets/men-hair/beard-styling.avif",
    },
    {
      name: "Hair Spa (Men)",
      price: 1200,
      image: "/assets/men-hair/hair-spa.jpg",
    },
    {
      name: "Hair Color (Global)",
      price: 2500,
      image: "/assets/men-hair/hair-color.jpg",
    },
    {
      name: "Hair Straightening",
      price: 3500,
      image: "/assets/men-hair/hair-straightening.webp",
    },
    {
      name: "Hair Wash & Conditioning",
      price: 400,
      image: "/assets/men-hair/hair-wash.jpg",
    },
    {
      name: "Hair Styling with Gel",
      price: 300,
      image: "/assets/men-hair/hair-styling-gel.jpg",
    },
  ],
}
,
  {
    id: "3",
    title: "Facial Services",
    slug: "facial-services-women",
    image: "/assets/facial/facial.avif",
    description:
      "Premium facial treatments for women to rejuvenate, cleanse and nourish skin with professional care.",
    category: "Women",
    SaloonServices: [
      {
        name: "Clear Balance Facial",
        price: 3000,
        image: "/assets/facial/Clear Balance Facial.jpg",
      },
      {
        name: "Corrective Facial",
        price: 6000,
        image: "/assets/facial/corrective.jpg",
      },
      { name: "D Tan", price: 600, image: "/assets/facial/dtan.webp" },
      {
        name: "Diamond O3+ Facial",
        price: 3500,
        image: "/assets/facial/diamond-o3.jpg",
      },
      {
        name: "Diamond Shahnaz Facial",
        price: 3500,
        image: "/assets/facial/diamond-shahnaz.avif",
      },
      {
        name: "Dermal Peel Facial",
        price: 4000,
        image: "/assets/facial/dermal-peel.jpg",
      },
      {
        name: "Eternal Facial",
        price: 4500,
        image: "/assets/facial/eternal.jpg",
      },
      {
        name: "Face Massage",
        price: 1000,
        image: "/assets/facial/face-massage.jpg",
      },
      {
        name: "Face Pack",
        price: 1000,
        image: "/assets/facial/face-pack.webp",
      },
      {
        name: "Globle Lift",
        price: 4500,
        image: "/assets/facial/globle-lift.jpg",
      },
      {
        name: "Immune Skin Facial",
        price: 3500,
        image: "/assets/facial/immune-skin.webp",
      },
      {
        name: "Insta Clear Facial",
        price: 3000,
        image: "/assets/facial/insta-clear.webp",
      },
      {
        name: "Jamaican Sorell Facial",
        price: 3000,
        image: "/assets/facial/jamaican-sorell.jpg",
      },
      {
        name: "Kanpeki Blanch Facial",
        price: 3500,
        image: "/assets/facial/kanpeki-blanch.jpg",
      },
      {
        name: "Kanpeki Upendice Facial",
        price: 3500,
        image: "/assets/facial/kanpeki-upendice.avif",
      },
      {
        name: "Lotus Facial (M)",
        price: 2500,
        image: "/assets/facial/lotus.webp",
      },
      {
        name: "O3+ Facial (M)",
        price: 300,
        image: "/assets/facial/o3plus.jpg",
      },
      {
        name: "Papaya & Marshmallow Facial",
        price: 3000,
        image: "/assets/facial/papaya-marshmallow.png",
      },
      {
        name: "Power C+ Facial",
        price: 4000,
        image: "/assets/facial/power-c.jpg",
      },
      {
        name: "Shahnaz Gold Facial",
        price: 3500,
        image: "/assets/facial/shahnaz-gold.avif",
      },
      {
        name: "Skeyndor Facial (M)",
        price: 3500,
        image: "/assets/facial/skeyndor.webp",
      },
      {
        name: "Whitening Facial",
        price: 3500,
        image: "/assets/facial/whitening.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Spa Treatments",
    slug: "spa-treatments-women",
    image: "/assets/spa/spa.jpg",
    description:
      "Premium hair spa treatments for women, focusing on nourishment, repair, hydration, and relaxation with luxurious products and techniques.",
    category: "Women",
    SaloonServices: [
      {
        name: "Absolute Repair",
        price: 1550,
        image: "/assets/spa/absolute-repair.avif",
      },
      { name: "Basic Spa", price: 1100, image: "/assets/spa/basic-spa.avif" },
      {
        name: "Clearifying Rituals",
        price: 2500,
        image: "/assets/spa/clearifying-rituals.avif",
      },
      {
        name: "Hair Pack Apply",
        price: 1000,
        image: "/assets/spa/hair-pack.webp",
      },
      {
        name: "Herbal Pack",
        price: 1500,
        image: "/assets/spa/herbal-pack.webp",
      },
      {
        name: "Hydration Rituals",
        price: 2500,
        image: "/assets/spa/hydration-rituals.jpg",
      },
      { name: "Mythic Oil", price: 1550, image: "/assets/spa/mythic-oil.jpg" },
      { name: "Olaplax", price: 2500, image: "/assets/spa/olaplex.jpg" },
      { name: "Ozone", price: 300, image: "/assets/spa/ozone.png" },
      { name: "Power Mix", price: 1000, image: "/assets/spa/power-mix.avif" },
      { name: "Pro Fiber", price: 2500, image: "/assets/spa/pro-fiber.webp" },
      {
        name: "Repair Rituals",
        price: 3000,
        image: "/assets/spa/repair-rituals.webp",
      },
      {
        name: "Smooth Rituals",
        price: 3500,
        image: "/assets/spa/smooth-rituals.webp",
      },
    ],
  },
  {
    id: "5",
    title: "Women Makeup",
    slug: "women-makeup",
    image: "/assets/makeup/makeup.jpg",
    description:
      "Professional makeup services for all occasions including bridal, party, and light makeup, with add-ons like lashes and draping.",
    category: "Women",
    SaloonServices: [
      {
        name: "AIR BRUSH BRIDEL MAKEUP",
        price: 15000,
        image: "/assets/makeup/air-brush-bridel.jpg",
      },

      {
        name: "AIR BRUSH PARTY MAKEUP",
        price: 7500,
        image: "/assets/makeup/air-brush-party.jpg",
      },
      { name: "BASE", price: 2000, image: "/assets/makeup/base.jpg" },
      {
        name: "BRIDAL MAKEUP",
        price: 10000,
        image: "/assets/makeup/bridal.avif",
      },
      {
        name: "EYE LASHES",
        price: 550,
        image: "/assets/makeup/eye-lashes.webp",
      },
      {
        name: "EYE LASHES APPLY",
        price: 250,
        image: "/assets/makeup/eye-lashes-apply.jpg",
      },

      {
        name: "EYE LASSES+",
        price: 700,
        image: "/assets/makeup/eye-lashes-plus.jpg",
      },
      {
        name: "EYE MAKEUP",
        price: 2500,
        image: "/assets/makeup/eye-makeup.avif",
      },
      { name: "LIGHT MAKEUP", price: 4000, image: "/assets/makeup/light.jpg" },
      { name: "LINER", price: 250, image: "/assets/makeup/liner.jpg" },
      {
        name: "MAKEUP APPLICATION",
        price: 2000,
        image: "/assets/makeup/makeup-application.avif",
      },
      { name: "PARTY MAKEUP", price: 5000, image: "/assets/makeup/party.jpg" },
      {
        name: "RECEPTION MAKEUP",
        price: 6000,
        image: "/assets/makeup/reception.avif",
      },
      {
        name: "SAREE DRAPE",
        price: 400,
        image: "/assets/makeup/saree-drape.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "M Face Clean Up",
    slug: "face-clean-up-men",
    image: "/assets/face-cleanup-men/face-cleanup-men.jpg",
    description:
      "Facial clean up services for men with premium products like Lotus, O3+, and Skeyndor for glowing and refreshed skin.",
    category: "Men",
    SaloonServices: [
      {
        name: "LOTUS CLEAN UP (M)",
        price: 1200,
        image: "/assets/face-cleanup-men/lotus-cleanup.webp",
      },
      {
        name: "O3+ CLEAN UP (M)",
        price: 2000,
        image: "/assets/face-cleanup-men/o3plus-cleanup.jpg",
      },
      {
        name: "SKEYNDOR CLEAN UP (M)",
        price: 2500,
        image: "/assets/face-cleanup-men/skeyndor-cleanup.jpg",
      },
    ],
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
    slug: "hair-color-men",
    image: "/assets/service/Hair Colormen.jpg",
    description: "Trendy hair coloring with expert consultation.",
    category: "Men",
  },
  {
  id: "9",
  title: "W Pedicure & Manicure",
  slug: "pedicure-manicure-women",
  image: "/assets/pedicure-manicure-women/pedicure-manicure-women.webp",
  description: "Pamper your hands and feet with our range of manicure and pedicure services, including spa treatments, massages, nail art, and more.",
  category: "Women",
  SaloonServices: [
    { name: "BASIC MANICURE", price: 450, image: "/assets/pedicure-manicure-women/basic-manicure.webp" },
    { name: "BASIC PEDICURE", price: 500, image: "/assets/pedicure-manicure-women/basic-pedicure.jpg" },
    { name: "CRUISE PEDICURE", price: 1350, image: "/assets/pedicure-manicure-women/cruise-pedicure.jpg" },
    { name: "CRYSTAL SPA MANICURE", price: 1100, image: "/assets/pedicure-manicure-women/crystal-spa-manicure.webp" },
    { name: "CRYSTAL SPA PEDICURE", price: 1100, image: "/assets/pedicure-manicure-women/crystal-spa-pedicure.jpg" },
    { name: "CUT", price: 50, image: "/assets/pedicure-manicure-women/cut.jpg" },
    { name: "EXTANTION REMOVE", price: 500, image: "/assets/pedicure-manicure-women/extension-remove.jpg" },
    { name: "FEET CLEAN", price: 350, image: "/assets/pedicure-manicure-women/feet-clean.jpg" },
    { name: "FEET MASSAGE", price: 350, image: "/assets/pedicure-manicure-women/feet-massage.jpg" },
    { name: "FILLING", price: 50, image: "/assets/pedicure-manicure-women/filling.jpg" },
    { name: "FRENCH NAIL PAINT", price: 150, image: "/assets/pedicure-manicure-women/french-nail-paint.webp" },
    { name: "HAND MASSAGE", price: 350, image: "/assets/pedicure-manicure-women/hand-massage.avif" },
    { name: "HAND N BACK MASSAGE", price: 350, image: "/assets/pedicure-manicure-women/hand-back-massage.jpg" },
    { name: "NAIL CUT N FILE", price: 100, image: "/assets/pedicure-manicure-women/nail-cut-file.jpg" },
    { name: "NAIL PAINT", price: 100, image: "/assets/pedicure-manicure-women/nail-paint.png" },
    { name: "O3 MANICURE", price: 700, image: "/assets/pedicure-manicure-women/o3-manicure.webp" },
    { name: "O3 PEDICURE", price: 700, image: "/assets/pedicure-manicure-women/o3-pedicure.jpg" },
    { name: "PARAFIN PEDICURE", price: 750, image: "/assets/pedicure-manicure-women/parafin-pedicure.webp" },
    { name: "RAAGA MENICURE", price: 650, image: "/assets/pedicure-manicure-women/raaga-manicure.webp" },
    { name: "RAAGA PEDICURE", price: 650, image: "/assets/pedicure-manicure-women/raaga-pedicure.avif" },
    { name: "SARA RELAXING MANI/PEDI", price: 650, image: "/assets/pedicure-manicure-women/sara-relaxing-manicure.jpg" },
  ]
}
,
  {
    id: "10",
    title: "Women Polishing",
    slug: "women-polishing",
    image: "/assets/polishing/polishing.webp",
    description:
      "Relaxing body polishing and massage treatments for smooth, radiant, and refreshed skin.",
    category: "Women",
    SaloonServices: [
      {
        name: "BODY MASSAGE",
        price: 1500,
        image: "/assets/polishing/massage.webp",
      },
      {
        name: "BODY POLISHING",
        price: 4500,
        image: "/assets/polishing/body-polishing.webp",
      },
      {
        name: "BODY SCRUB N PEELING",
        price: 2500,
        image: "/assets/polishing/scrub-peeling.jpg",
      },
      { name: "UPTEN", price: 4500, image: "/assets/polishing/upten.jpg" },
    ],
  },
  {
  id: "11",
  title: "Massage",
  slug: "massage-women",
  image: "/assets/massage-women/massage-women.avif",
  description: "Relaxing massage therapy for stress relief and wellness.",
  category: "Women",
  SaloonServices: [
    {
      name: "Head Massage",
      price: 600,
      image: "/assets/massage-women/head-massage.jpg",
    },
    {
      name: "Shoulder Massage",
      price: 800,
      image: "/assets/massage-women/shoulder-massage.jpg",
    },
    {
      name: "Full Body Massage",
      price: 2000,
      image: "/assets/massage-women/full-body-massage.jpg",
    },
    {
      name: "Back Massage",
      price: 1000,
      image: "/assets/massage-women/back-massage.jpg",
    },
    {
      name: "Foot Massage",
      price: 700,
      image: "/assets/massage-women/foot-massage.webp",
    },
    {
      name: "Aroma Therapy Massage",
      price: 2500,
      image: "/assets/massage-women/aroma-massage.webp",
    },
    {
      name: "Hot Stone Massage",
      price: 3000,
      image: "/assets/massage-women/hot-stone-massage.webp",
    },
    {
      name: "Deep Tissue Massage",
      price: 2800,
      image: "/assets/massage-women/deep-tissue-massage.jpg",
    }
  ],
}
,
  {
    id: "12",
    title: "Face Clean Up",
    slug: "face-clean-up-women",
    image: "/assets/face-cleanup-women/face-cleanup-women.jpg",
    description:
      "Refresh your skin with our exclusive clean-up services for women, including O3+, Shahnaz, and Skeyndor treatments.",
    category: "Women",
    SaloonServices: [
      {
        name: "03+ CLEAN UP WITH MASK",
        price: 2500,
        image: "/assets/face-cleanup-women/o3plus-cleanup-mask.webp",
      },
      {
        name: "EXTRA CLEANUP",
        price: 500,
        image: "/assets/face-cleanup-women/extra-cleanup.jpeg",
      },
      {
        name: "O3+ CLEAN UP",
        price: 2000,
        image: "/assets/face-cleanup-women/o3plus-cleanup.jpg",
      },
      {
        name: "O3+ DAIMOND CLEAN UP",
        price: 2500,
        image: "/assets/face-cleanup-women/o3plus-diamond-cleanup.webp",
      },
      {
        name: "SHAHNAZ CLEAN UP",
        price: 2000,
        image: "/assets/face-cleanup-women/shahnaz-cleanup.avif",
      },
      {
        name: "SHAHNAZ GOLD CLEAN UP",
        price: 2000,
        image: "/assets/face-cleanup-women/shahnaz-gold-cleanup.webp",
      },
      {
        name: "SKEYNDOR CLEAN UP",
        price: 2500,
        image: "/assets/face-cleanup-women/skeyndor-cleanup.avif",
      },
    ],
  },
  {
    id: "13",
    title: "Women Bleach",
    slug: "women-bleach",
    image: "/assets/bleach/bleach.jpg",
    description:
      "Full range of bleaching services for arms, legs, back, face and full body, using high-quality products for glowing skin.",
    category: "Women",
    SaloonServices: [
      { name: "ARMS (BLEACH)", price: 1000, image: "/assets/bleach/arms.jpg" },
      { name: "BACK (BLEACH)", price: 1000, image: "/assets/bleach/back.jpg" },
      { name: "BLEACH", price: 550, image: "/assets/bleach/basic.jpg" },
      {
        name: "FRONT (BLEACH)",
        price: 1000,
        image: "/assets/bleach/front.jpg",
      },
      { name: "FRUIT (FACE)", price: 500, image: "/assets/bleach/fruit.jpg" },
      {
        name: "FULL BODY (BLEACH)",
        price: 4000,
        image: "/assets/bleach/full-body.jpg",
      },
      { name: "LEGS (BLEACH)", price: 1000, image: "/assets/bleach/legs.webp" },
      { name: "OXY (FACE)", price: 550, image: "/assets/bleach/oxy.avif" },
      {
        name: "PROTIEN (FACE)",
        price: 550,
        image: "/assets/bleach/protein.avif",
      },
    ],
  },
  {
    id: "14",
    title: "Men Hair Services",
    slug: "hair-services-men",
    image: "/assets/men-hair/men-hair.jpg",
    description: "Haircut, trimming, and styling by professionals.",
    category: "Men",
    SaloonServices: [
      { name: "ALMOND (M)", price: 500, image: "/assets/men-hair/almond.webp" },
      { name: "BEARD", price: 150, image: "/assets/men-hair/beard.webp" },
      {
        name: "BEARD COLOUR",
        price: 600,
        image: "/assets/men-hair/beard-colour.jpg",
      },
      {
        name: "BRINGHARJ (M)",
        price: 600,
        image: "/assets/men-hair/bringharj.jpg",
      },
      {
        name: "COCONUT (M)",
        price: 400,
        image: "/assets/men-hair/coconut.jpg",
      },
      {
        name: "COLOUR APPLICATION (M)",
        price: 550,
        image: "/assets/men-hair/colour-application.jpg",
      },
      {
        name: "HAIR CUT (M)",
        price: 250,
        image: "/assets/men-hair/haircut.jpg",
      },
      {
        name: "HAIR CUT(M)",
        price: 300,
        image: "/assets/men-hair/haircut2.jpg",
      },
      { name: "INOA (M)", price: 1000, image: "/assets/men-hair/inoa.webp" },
      {
        name: "LOREAL CONDITIONER (M)",
        price: 110,
        image: "/assets/men-hair/loreal-conditioner.avif",
      },
      {
        name: "LOREAL SHAMPOO (M)",
        price: 110,
        image: "/assets/men-hair/loreal-shampoo.webp",
      },
      {
        name: "MAJIREL (M)",
        price: 800,
        image: "/assets/men-hair/majirel.webp",
      },
      {
        name: "MOROCCANOIL CONDITIONER (M)",
        price: 220,
        image: "/assets/men-hair/moroccanoil-conditioner.jpg",
      },
      {
        name: "MOROCCANOIL SHAMPOO (M)",
        price: 220,
        image: "/assets/men-hair/moroccanoil-shampoo.jpeg",
      },
      { name: "OILVE (M)", price: 450, image: "/assets/men-hair/olive.avif" },
      { name: "SHAVE", price: 150, image: "/assets/men-hair/shave.webp" },
    ],
  },
  {
    id: "15",
    title: "Men Polishing",
    slug: "men-polishing",
    image: "/assets/men-polishing/men-polishing.webp",
    description:
      "Exclusive body polishing, massage, and scrubbing services for men to relax and rejuvenate with premium care.",
    category: "Men",
    SaloonServices: [
      {
        name: "BODY MASSAGE",
        price: 1500,
        image: "/assets/men-polishing/men-massage.jpg",
      },
      {
        name: "BODY POLISHING",
        price: 4500,
        image: "/assets/men-polishing/men-polishing.png",
      },
      {
        name: "BODY SCRUB N PEELING",
        price: 2500,
        image: "/assets/men-polishing/men-scrub.webp",
      },
      {
        name: "UPTEN",
        price: 4500,
        image: "/assets/men-polishing/men-upten.png",
      },
    ],
  },
  {
    id: "16",
    title: "Women Head Massage",
    slug: "women-head-massage",
    image: "/assets/women-headmassage/women-headmassage.avif",
    description:
      "Relax your mind and nourish your hair with our premium head massage services for women, featuring various oils and treatments.",
    category: "Women",
    SaloonServices: [
      {
        name: "ALMOND OIL (W)",
        price: 500,
        image: "/assets/women-headmassage/almond-oil.webp",
      },
      {
        name: "BRINHRAJ OIL (W)",
        price: 600,
        image: "/assets/women-headmassage/brinhraj-oil.jpg",
      },
      {
        name: "COCONUT OIL (W)",
        price: 450,
        image: "/assets/women-headmassage/coconut-oil.webp",
      },
      {
        name: "EGGS",
        price: 650,
        image: "/assets/women-headmassage/eggs.avif",
      },
      {
        name: "MOROCCAN OIL",
        price: 1500,
        image: "/assets/women-headmassage/moroccan-oil.jfif",
      },
      {
        name: "MUSTARD OIL (W)",
        price: 400,
        image: "/assets/women-headmassage/mustard-oil.jpg",
      },
      {
        name: "NAVARAT OIL",
        price: 550,
        image: "/assets/women-headmassage/navarat-oil.jpg",
      },
      {
        name: "OLIVE OIL (W)",
        price: 500,
        image: "/assets/women-headmassage/olive-oil.webp",
      },
    ],
  },
  {
    id: "17",
    title: "Women Hair Treatment",
    slug: "hair-treatment-women",
    image: "/assets/hair-treatment-women/hair-treatment-women.jpg",
    description:
      "Rejuvenate and repair your hair with our premium treatment options, including anti-dandruff, deep conditioning, and hair fall solutions for women.",
    category: "Women",
    SaloonServices: [
      {
        name: "ANTI DANDRUFF TREATMENT",
        price: 1500,
        image: "/assets/hair-treatment-women/anti-dandruff.webp",
      },
      {
        name: "DEEP CONDITIONING",
        price: 1000,
        image: "/assets/hair-treatment-women/deep-conditioning.jpg",
      },
      {
        name: "HAIR FALL TREATMENT",
        price: 1500,
        image: "/assets/hair-treatment-women/hairfall-treatment.jpg",
      },
      {
        name: "INNER SPA",
        price: 1000,
        image: "/assets/hair-treatment-women/inner-spa.png",
      },
      {
        name: "POWER DOSE",
        price: 500,
        image: "/assets/hair-treatment-women/power-dose.avif",
      },
      {
        name: "RENEW C",
        price: 600,
        image: "/assets/hair-treatment-women/renew-c.webp",
      },
      {
        name: "SERIOXYL",
        price: 1500,
        image: "/assets/hair-treatment-women/serioxyl.webp",
      },
    ],
  },
  {
    id: "18",
    title: "Women Texture Services",
    slug: "texture-services-women",
    image: "/assets/texture-services-women/texture-services-women.jpg",
    description:
      "Smooth, style, and strengthen your hair with texture treatments and get flawless nails with premium nail services for women.",
    category: "Women",
    SaloonServices: [
      {
        name: "KERATIN",
        price: 6500,
        image: "/assets/texture-services-women/keratin.jpg",
      },
      {
        name: "NAIL SERVICE",
        price: 1000,
        image: "/assets/texture-services-women/nail-service.jfif",
      },
      {
        name: "PERMING",
        price: 4500,
        image: "/assets/texture-services-women/perming.jpg",
      },
      {
        name: "REBONDING",
        price: 7500,
        image: "/assets/texture-services-women/rebonding.avif",
      },
      {
        name: "SMOOTHING",
        price: 6500,
        image: "/assets/texture-services-women/smoothing.jpg",
      },
    ],
  },
];
