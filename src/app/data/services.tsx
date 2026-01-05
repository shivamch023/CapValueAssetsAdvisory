import { title } from "process";
import { ReactNode } from "react";

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
}


export const cardsData: CardData[] = [
  {
    id: "1",
    slug: "business-advisory",
    title: "Business Advisory",
    titles: "Strategic Guidance for ",
    titles1: "Complex Challenges",
    title2: "Core ",
    titles2: "Capabilities",

    title2dec:
      "Comprehensive advisory services designed to address your most pressing strategic needs.",

    shortDescription:
      "Partner with seasoned advisors who bring deep industry expertise and proven methodologies to your most critical business decisions.",

    description:
      "From strategic planning to operational excellence, we partner with leadership teams to navigate complex business challenges and unlock sustainable growth.",

    coreCapabilities: [
      "Strategic Planning",
      "M&A Advisory",
      "Operational Optimization",
      "Board Advisory",
    ],

    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c1.5 0 2.5 1.5 3 3m0 0c.5 1.5 1.5 3 3 3"
        />
      </svg>
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
    slug: "real-estate",
    title: "Real Estate Investment", titles1: "Complex Challenges",
    title2dec: "From deal sourcing through exit, we provide comprehensive support across the entire investment lifecycle.",

    titles: "Strategic Guidance for ",
    title2: "Full-Spectrum ",
    titles2: "Advisory Services",

    shortDescription: "Institutional-grade opportunities",
    description:
      "Access institutional-grade real estate opportunities with advisory services across acquisition, development, and portfolio strategy.",
    coreCapabilities: [
      "Acquisition Strategy",
      "Due Diligence",
      "Asset Management",
      "Exit Planning",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
          d="M3 10l9-7 9 7v10" />
      </svg>
    ),
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
        titled: "Sector Expertise",
        descriptiond:
          "Our deep sector knowledge enables us to identify opportunities and risks that others miss, delivering superior risk-adjusted returns.",

        advantages: [
          "Office & Commercial",
          "Multifamily Residential",
          "Industrial & Logistics",
          "Hospitality",
          "Mixed-Use Developments",
          "Special Situations",
        ],

        lay2: [
          {
            title: "Risk Management",
            descrption: "Rigorous due diligence processes and market analysis to protect and grow your capital.",
          }
        ]
        ,
        metrics: [
          {
            value: "$4.2B+",
            label: "in real estate assets advised",
          },
          {
            value: "18%",
            label: "average IRR delivered to clients",
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
      }
    ]
  },

  {
    id: "3",
    slug: "growth-capital",
    title2dec: "From early-stage growth to pre-IPO positioning, we guide companies through every stage of their capital journey.",

    title: "Growth Capital", titles1: "Complex Challenges",

    titles: "Strategic Guidance for ",
    title2: "Comprehensive  ",
    titles2: "Capital Solutions",


    shortDescription: "Fuel expansion with capital",
    description:
      "We help ambitious companies raise and structure capital that fuels sustainable expansion.",
    coreCapabilities: [
      "Capital Raising",
      "Investor Relations",
      "Deal Structuring",
      "Valuation",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
          d="M12 8v8m0 0l3-3m-3 3l-3-3" />
      </svg>
    ),
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
        titled: "Capital Across All Stages",
        descriptiond:
          "Whether you're raising your Series A or preparing for a public offering, we have the expertise and relationships to support your capital needs.",

        features: [
          { ptext: "Series A/B", pnumber: "$5M - $50M" },
          { ptext: " Growth Equity",pnumber:"$50M - $250M" },
          { ptext: "Pre-IPO",pnumber:"$100M+" },
          { ptext: "Recapitalization",pnumber:"Custom " },
        ],
        lay2: [
          {
            title: "Investor Network",
            descrption: "Direct relationships with 200+ institutional investors, growth equity firms, and family offices globally.",
          }
        ],

        metrics: [
          {
            value: "$3.5B+",
            label: "capital raised for clients",
          },
          {
            value: "45+",
            label: "successful funding rounds closed",
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
        variant: "layoutC",
      }
    ]
  },
];
