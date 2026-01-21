"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiSettings, FiActivity, FiUserCheck, FiRefreshCcw } from "react-icons/fi";

const privacyDetails = [
  
  {
    title: "What are Cookies?",
    icon: <FiActivity className="text-[#FDC13E] text-3xl" />,
    content: `Cookies are small text files stored on your device when you visit a website. They help the website recognise your device and remember certain information about your visit.`,
  },
  {
    title: "Types of Cookies We Use",
    icon: <FiUserCheck className="text-[#FDC13E] text-3xl" />,
    content: `We use only limited and necessary cookies, which may include:
• Essential cookies – Required for the basic operation and security of the Website.
• Analytics cookies (if enabled) – Used to understand how visitors interact with the Website, such as page visits and traffic patterns. Analytics data is collected in an aggregated and anonymised manner and does not identify you personally.`,
  },
  {
    title: "We do not use cookies to:",
    icon: <FiSettings className="text-[#FDC13E] text-3xl" />,
    content: `• collect sensitive personal data
• track you across third-party websites
• engage in behavioural advertising`,
  },
  {
    title: "Managing Cookies",
    icon: <FiActivity className="text-[#FDC13E] text-3xl" />,
    content: `You may control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality or performance of the Website.`,
  },
  {
    title: "Data Retention",
    icon: <FiUserCheck className="text-[#FDC13E] text-3xl" />,
    content: `We retain your personal data only for as long as necessary to fulfil the purposes stated in this Privacy Notice or to comply with legal or regulatory requirements. Thereafter, the data is securely deleted or anonymised.`,
  },
  {
    title: "Children Data",
    icon: <FiSettings className="text-[#FDC13E] text-3xl" />,
    content: `Our website is intended for adults aged 18 and over. We do not collect or solicit information from individuals under 18 years of age (Children/Minors).`,
  },
  
];

export default function PrivacyCookiesSection() {
  return (
    <section className="bg-white py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D3A] mb-4 text-center">
         Cookies and Website Analytics
        </h2>

        
        <p className="text-[14px] md:text-md">Our Website may use cookies and similar technologies to ensure basic functionality, enhance user experience, and analyse website performance.</p>

        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privacyDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-4 p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-default hover:bg-[#FDC13E]/10"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1D3A]">{item.title}</h3>
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm md:text-md leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
       <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start gap-4  p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-default hover:bg-[#FDC13E]/10"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <FiRefreshCcw className="text-[#FDC13E] text-3xl" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1D3A] mb-2">
              Updates To The Privacy Notice
            </h3>
            <p className="text-gray-700 text-sm md:text-md leading-relaxed">
              We may update this Privacy Notice from time to time. Any changes will be published on{" "}
              <Link href="https://www.capvaluez.com" className="font-medium text-[#0B1D3A] underline hover:text-red-400">www.capvaluez.com</Link>. Continued use of the Website constitutes acceptance of the updated Privacy Notice.
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
