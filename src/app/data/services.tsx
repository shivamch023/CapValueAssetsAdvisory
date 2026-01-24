import { title } from "process";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { CgToolbox } from "react-icons/cg";
import { FiTrendingUp } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdInsights } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";



export interface ChildCard {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;

}
export interface AdvantageCard {
  id: string;
  titled: string;
  descriptiond: string;
  advantages?: string[];
  features?: { ptext: string; pnumber: string; }[];
  metrics: {
    value: string;
    label: string;
  }[];
  lay2?: {            // mark lay2 as optional
    title: string;
    descrption: string;
  }[];
  icon: ReactNode;
  variant?: "layoutA" | "layoutB" | "layoutC";
}


/* =========================
   MAIN CARD TYPE
========================= */
export interface CardData {
  id: string;
  slug: string;

  title: string;
  titles: string;
  titles1: string;

  title2: string;
  titles2: string;
  title2dec: string;

  shortDescription: string;
  description: string;

  coreCapabilities: string[];
  icon: ReactNode;


  children: ChildCard[];
  children1?: AdvantageCard[];
  image: string;
}


export const cardsData: CardData[] = [
  {
    id: "1",
    slug: "real-estate-assets",
    title: "Real Estate Assets",
    titles: "Strategic Guidance for",
    titles1: "Complex Challenges",
    title2: "Core ",
    titles2: "Capabilities",
    image: "/assets/banner/consultbui.png",

    title2dec:
      "Comprehensive advisory services designed to address your most pressing strategic needs.",

    shortDescription:
      "Partner with seasoned advisors who bring deep industry expertise and proven methodologies to your most critical business decisions.",

    description:
      "We introduce select real estate asset opportunities and help investors clearly understand the property before investing. Our role is to explain location benefits, key strengths, possible risks, and long-term potential, so decisions are made with clarity—not urgency or sales pressure.",

    coreCapabilities: [
      "Residential plots",
      "Agricultural land",

      "Industrial park plots",
      "Warehouses",
      "Commercial spaces",
    ],

    icon: (
      <CgToolbox className="w-6 h-6 text-[#1B2D5B]" />
    ),

    /* 👇 CHILD CARDS */
    children: [
      {
        id: "c1",
        title: "Strategic Planning",
        description:
          "Develop comprehensive strategic roadmaps that align organizational capabilities with market opportunities.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              d="M9 17v-6h13M9 5v6h13M5 12h.01" />
          </svg>
        ),
      },
      {
        id: "c2",
        title: "M&A Advisory",
        description:
          "End-to-end transaction support from target identification through integration planning and execution.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2" />
          </svg>
        ),
      },
      {
        id: "c3",
        title: "Organizational Design",
        description:
          "Optimize organizational structures, governance frameworks, and leadership effectiveness.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        id: "c4",
        title: "Performance Improvement",
        description:
          "Identify and capture value through operational excellence and efficiency initiatives.",
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              d="M17 20h5V4H2v16h5m10 0v-6H7v6" />
          </svg>
        ),
      },


    ],
    children1: [
      {
        id: "d1",
        titled: "The CapValue Advantage",
        descriptiond:
          "When you engage CapValue, you gain more than advisors — you gain strategic partners invested in your success.",

        advantages: [
          "Access to senior advisors with decades of industry experience",
          "Proprietary frameworks refined across 250+ engagements",
          "Confidential, conflict-free counsel",
          "Seamless integration with your leadership team",
          "Measurable outcomes with clear accountability",
        ],

        metrics: [
          {
            value: "95%",
            label: "of clients return for additional engagements",
          },
          {
            value: "$8B+",
            label: "in transaction value advised",
          },
        ],

        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 3.5 1-6.3L3 9.9 9 9z"
            />
          </svg>
        ),
        variant: "layoutA",
      }
    ]
  }
  ,

  {
    id: "2",
    slug: "professional-advisory",
    title: "Professional Advisory",
    titles1: "Independent Real Estate",
    title2dec:
      "Objective, professional guidance to help clients make informed real estate decisions — independent of any transaction.",

    titles: "Institutional-Grade",
    title2: "Real Estate",
    titles2: "Advisory Services",

    image: "/assets/banner/realestate.png",

    shortDescription:
      "Clear and independent guidance covering due diligence, regulations, compliance, and exit planning for real estate investments.",

    description:
      "CapValuez provides independent, professional guidance to help clients make informed real estate decisions. These services are offered irrespective of whether a client invests in any specific property, ensuring advice remains objective, unbiased, and value focused.",

    coreCapabilities: [
      "Due diligence and document review",
      "Guidance on government policies, rules, and available incentives",
      "RERA registration advisory and compliance support",
      "Pricing, risk assessment, and feasibility evaluation",
      "Exit planning and holding strategy support",
    ],

    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#1B2D5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z"
        />
      </svg>
    ),

    /* ===================== MAIN SERVICE BLOCKS ===================== */

    children: [
      {
        id: "c1",
        title: "Due Diligence & Document Review",
        description:
          "High-level due diligence support to help clients identify risks, gaps, and red flags before committing to a property or investment.",
        icon: (
          <FaClipboardCheck className="w-7 h-7 text-current" />

        ),
      },

      {
        id: "c2",
        title: "Government Policies & Incentive Guidance",
        description:
          "End-to-end support in identifying, understanding, and securing applicable government policies, schemes, and incentives for projects and investments.",
        icon: (
          <FaLandmark className="w-7 h-7 text-current" />

        ),
      },

      {
        id: "c3",
        title: "RERA Registration & Compliance Advisory",
        description:
          "Practical guidance for developers on RERA registration, disclosures, and ongoing compliance across the project lifecycle.",
        icon: (
          <FaFileContract className="w-7 h-7 text-current" />

        ),
      },

      {
        id: "c4",
        title: "Pricing, Risk & Exit Support",
        description:
          "Support for investors seeking clarity on asset valuation, risks, and realistic exit or holding strategies.",
        icon: (
          <FaChartLine className="w-7 h-7 text-current" />

        ),
      },
    ],

    /* ===================== DEEP DIVE / HIGHLIGHT SECTION ===================== */

    children1: [
      {
        id: "d1",
        titled: "Why Professional Advisory Matters",
        descriptiond:
          "Independent advisory ensures decisions are based on facts, compliance, and long-term viability — not sales pressure or incomplete information.",

        advantages: [
          "Objective, transaction-independent advice",
          "Early identification of legal and regulatory risks",
          "Clear understanding of compliance obligations",
          "Realistic pricing and exit expectations",
          "Reduced uncertainty in decision-making",
        ],

        lay2: [
          {
            title: "Risk & Compliance Focus",
            descrption:
              "Our advisory approach prioritizes risk identification, regulatory clarity, and practical feasibility to protect client interests.",
          },
        ],

        metrics: [
          {
            value: "100+",
            label: "advisory engagements supported",
          },
          {
            value: "Multi-State",
            label: "regulatory exposure across India",
          },
        ],

        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 3.5 1-6.3L3 9.9 9 9z"
            />
          </svg>
        ),

        variant: "layoutB",
      },
    ],
  },


 {
  id: "3",
  slug: "funding-solutions",
  title: "Funding Solutions",
  title2dec: "Our Funding Solutions are designed to help founders and business owners make well-considered funding decisions grounded in business reality, not market hype.",
  titles: "Fuel Your Ambition with",
  titles1: "Strategic Capital",
  title2: "Comprehensive",
  titles2: "Funding Solutions",
  image: "/assets/banner/fundsol.png",

  shortDescription: "We work closely with promoters to bring clarity, structure, and preparedness to the funding journey and, where appropriate, facilitate introductions to investors aligned with their business stage, sector, and long-term objectives.",
  description:
    "Our Funding Solutions are designed to help founders and business owners make well-considered funding decisions grounded in business reality, not market hype",

  coreCapabilities: [
    "Funding Need Assessment",
    "Guidance on Funding Structure",
    "Preparation and Expectation Alignment",
    "Investor Connections (Where Appropriate)",
  ],
  icon: <FiTrendingUp className="w-6 h-6 text-[#1B2D5B]" />,

  children: [
    {
      id: "c1",
      title: "Funding Need Assessment",
      description: "Understand business position, growth plans, cash flow, and risk profile to assess funding requirements, type, and amount.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            d="M12 3v4m0 10v4m8-8h-4M4 12H0m16.24-6.24l-2.83 2.83M6.59 17.41l-2.83 2.83M17.41 17.41l2.83 2.83M6.59 6.59L3.76 3.76" />
        </svg>
      ),
    },
    {
      id: "c2",
      title: "Guidance on Funding Structure",
      description: "Structure capital correctly with equity, debt, or hybrid instruments considering founder control, dilution, compliance, and sustainability.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      id: "c3",
      title: "Preparation and Expectation Alignment",
      description: "Align expectations for founders and investors, review narrative & financials, identify gaps, and set realistic timelines for discussions.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      id: "c4",
      title: "Investor Connections (Where Appropriate)",
      description: "Facilitate selective introductions to investors aligned to stage, sector, and long-term business philosophy.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            d="M17 20h5V4H2v16h5m10 0v-6H7v6" />
        </svg>
      ),
    },
  ],

  children1: [
    {
      id: "d1",
      titled: "Capital Across All Stages",
      descriptiond: "Whether raising Series A or preparing for public offerings, we support all capital stages with clarity and structure.",
      features: [
        { ptext: "Series A/B", pnumber: "$5M - $50M" },
        { ptext: "Growth Equity", pnumber: "$50M - $250M" },
        { ptext: "Pre-IPO", pnumber: "$100M+" },
        { ptext: "Recapitalization", pnumber: "Custom" },
      ],
      lay2: [
        {
          title: "Investor Network",
          descrption: "Direct relationships with 200+ institutional investors, growth equity firms, and family offices globally.",
        }
      ],
      metrics: [
        { value: "$3.5B+", label: "capital raised for clients" },
        { value: "45+", label: "successful funding rounds closed" },
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            d="M12 3l3 6 6 .9-4.5 4.3 1 6.3L12 17l-5.5 3.5 1-6.3L3 9.9 9 9z" />
        </svg>
      ),
      variant: "layoutC",
    }
    ]
  }

  ];






// src/app/data/fundingData.ts
import {
  FaChartLine,
  FaBalanceScale,
  FaClipboardCheck,
  FaHandshake,
  FaCheckCircle,
  FaRocket,
  FaCoins,
  FaLightbulb,
  FaChartPie,
  FaLandmark,
  FaFileContract,
} from "react-icons/fa";

export interface ChipType {
  text: string;
  icon: any;
  color: string;
}

export interface SectionType {
  id: number;
  title: string;
  description: string;
  icon: any;
  imageSrc: string;
  chips: ChipType[];
  reverse?: boolean; // optional to reverse image/text on desktop
}

export const fundingSections: SectionType[] = [
  {
    id: 1,
    title: "Funding Need Assessment",
    description:
      "We deeply understand your business position, growth plans, cash flow and risk profile before recommending funding.",
    icon: FaChartLine,
    imageSrc: "/assets/banner/fundneed.jpg",
    chips: [
      { text: "Funding purpose & urgency", icon: FaCheckCircle, color: "emerald-600" },
      { text: "Capital efficiency", icon: FaCoins, color: "blue-600" },
      { text: "Runway planning", icon: FaChartPie, color: "purple-600" },
      { text: "Growth readiness", icon: FaRocket, color: "amber-600" },
    ],
  },
  {
    id: 2,
    title: "Funding Structure Guidance",
    description:
      "We help structure capital while balancing control, dilution and long-term sustainability.",
    icon: FaBalanceScale,
    imageSrc: "/assets/banner/PE_Fund_Structure.webp",
    chips: [
      { text: "Equity vs Debt vs Hybrid", icon: FaCoins, color: "indigo-600" },
      { text: "Founder dilution impact", icon: FaChartPie, color: "rose-600" },
      { text: "Stage-appropriate funding", icon: FaRocket, color: "emerald-600" },
      { text: "Exit alignment", icon: FaLightbulb, color: "yellow-600" },
    ],
    reverse: true,
  },
  {
    id: 3,
    title: "Preparation & Alignment",
    description:
      "We prepare founders for realistic and confident investor conversations.",
    icon: FaClipboardCheck,
    imageSrc: "/assets/banner/Preparation.jpg",
    chips: [
      { text: "Pitch & financial readiness", icon: FaCheckCircle, color: "emerald-600" },
      { text: "Investor expectations", icon: FaLightbulb, color: "blue-600" },
      { text: "Gap identification", icon: FaChartPie, color: "purple-600" },
      { text: "Timeline clarity", icon: FaRocket, color: "amber-600" },
    ],
  },
  {
    id: 4,
    title: "Investor Connections",
    description:
      "We connect you with aligned investors based on stage, sector and philosophy.",
    icon: FaHandshake,
    imageSrc: "/assets/banner/Investor.jpg",
    chips: [
      { text: "Relationship-driven", icon: FaHandshake, color: "emerald-600" },
      { text: "Stage & sector fit", icon: FaChartLine, color: "blue-600" },
      { text: "Long-term focus", icon: FaLightbulb, color: "purple-600" },
    ],
    reverse: true,
  },
];



//team data

export const teamData = [
  {
    name: "Jonathan W. Sterling",
    role: "Managing Partner",
    image: "/assets/team/man.jpg",
    bio: "Former Goldman Sachs Managing Director with 25+ years of experience in investment banking and private equity. Jonathan founded CapValue to deliver institutional-caliber advisory to the middle market.",
    expertise: ["M&A Advisory", "Private Equity", "Strategic Planning"],
    education: "MBA, Harvard Business School | BA, Yale University",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Emily R. Carter",
    role: "Senior Partner",
    image: "/assets/team/woman1.jpg",
    bio: "Emily brings over two decades of experience advising Fortune 500 companies on growth strategy and corporate restructuring.",
    expertise: ["Corporate Strategy", "Business Transformation", "Risk Advisory"],
    education: "MBA, Wharton School | BA, Stanford University",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Michael T. Reynolds",
    role: "Managing Director",
    image: "/assets/team/man2.jpg",
    bio: "Michael specializes in capital markets and large-scale real estate investments across global markets.",
    expertise: ["Capital Markets", "Real Estate Investment", "Portfolio Strategy"],
    education: "MS Finance, NYU | BA, Columbia University",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Sophia L. Bennett",
    role: "Principal Advisor",
    image: "/assets/team/woman2.jpg",
    bio: "Sophia advises high-growth firms on market entry, valuation, and long-term strategic planning.",
    expertise: ["Market Entry", "Valuation", "Strategic Planning"],
    education: "MBA, INSEAD | BA, University of London",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Daniel K. Moore",
    role: "Director",
    image: "/assets/team/man3.jpg",
    bio: "Daniel has deep expertise in mergers, acquisitions, and post-merger integration strategies.",
    expertise: ["Mergers & Acquisitions", "Integration", "Operational Strategy"],
    education: "MBA, Chicago Booth | BS, MIT",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Olivia H. Martinez",
    role: "Vice President",
    image: "/assets/team/woman3.jpg",
    bio: "Olivia focuses on private equity transactions and financial due diligence for middle-market clients.",
    expertise: ["Private Equity", "Due Diligence", "Financial Modeling"],
    education: "MBA, UCLA Anderson | BCom, USC",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Robert J. Collins",
    role: "Senior Advisor",
    image: "/assets/team/man4.jpg",
    bio: "Robert advises family offices and institutional investors on long-term capital allocation strategies.",
    expertise: ["Capital Allocation", "Family Office Advisory", "Investment Strategy"],
    education: "MBA, Oxford | BA, University of Toronto",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Ava N. Thompson",
    role: "Associate Director",
    image: "/assets/team/woman4.jpg",
    bio: "Ava supports strategic initiatives with deep analytical insight and market research expertise.",
    expertise: ["Market Research", "Competitive Analysis", "Strategy Support"],
    education: "MS Economics, LSE | BA, NYU",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "William P. Anderson",
    role: "Strategy Consultant",
    image: "/assets/team/man5.jpg",
    bio: "William works closely with leadership teams to design and execute growth-oriented business strategies.",
    expertise: ["Growth Strategy", "Business Planning", "Performance Improvement"],
    education: "MBA, IE Business School | BA, University of Michigan",
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
];



//resource data
export type ResourceItem = {
  id: number;
  category: "Business Advisory" | "Real Estate" | "Fund Raise";
  date: string; // e.g., "December 2025"
  title: string;
  description: string;
  pdfLink: string;
  cate: string;
  icon?: IconType;
}

export const resourcesData: ResourceItem[] = [
  {
    id: 1,
    category: "Business Advisory",
    date: "December 2025",
    title: "Navigating M&A in Uncertain Markets",
    cate: "Whitepaper",
    icon: IoNewspaperOutline,
    description:
      "Strategic considerations for corporate transactions in volatile economic environments.",
    pdfLink: "/pdfs/ma-strategy.pdf",
  },
  {
    id: 2,
    category: "Real Estate",
    date: "November 2025",
    title: "Real Estate Investment Trends 2025",
    description:
      "Insights and strategies for maximizing returns in evolving real estate markets.",
    pdfLink: "/pdfs/real-estate-trends.pdf",
    cate: "Market Insight",
    icon: MdInsights,


  },
  {
    id: 3,
    category: "Fund Raise",
    date: "October 2025",
    title: "Growth Capital for Emerging Companies", cate: "Research report", icon: TbReportSearch,


    description:
      "Best practices for securing growth capital to scale your business efficiently.",
    pdfLink: "/pdfs/growth-capital.pdf",
  },
  // add more items as needed
];
