

"use client";

import React from "react";
import { motion } from "framer-motion";
import { VscTerminalUbuntu } from "react-icons/vsc";
import Link from "next/link";
import {
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
  FiExternalLink,
  FiEdit3,
  FiRefreshCcw,
  FiActivity,
  FiDatabase,
  FiCopy,
  FiLock,
  FiDownload,
  FiShield,
  FiAlertCircle,
  FiShieldOff,
  FiHardDrive,
  FiUsers,
  FiMail,
  FiGlobe,
  FiCpu,
  FiUserX,
  FiSlash,
  FiXCircle,
  FiRefreshCw,
  FiBookmark,
  FiSearch,
  FiMapPin,
} from "react-icons/fi";

const generalInfoCards = [
  {
    icon: <FiRefreshCcw />,
    text:
      "CapValuez reserves the right to modify, update, or remove any information, material, or content on the Website at any time without prior notice.",
  },
  {
    icon: <FiInfo />,
    text:
      "The information provided on the Website is for general informational purposes only. CapValuez makes no representations or warranties regarding the accuracy, completeness, or reliability of such information.",
  },
  {
    icon: <FiAlertTriangle />,
    text:
      "CapValuez shall not be liable for any loss or damage arising from reliance on the information available on the Website, whether due to errors, omissions, or otherwise.",
  },
  {
    icon: <FiExternalLink />,
    text:
      "Any third-party links or references provided on the Website are for informational purposes only and do not constitute endorsements, affiliations, or recommendations. CapValuez does not control and is not responsible for the content of third-party websites.",
  },
  {
    icon: <FiEdit3 />,
    text:
      "Modification, reproduction, or use of Website content in a misleading or out-of-context manner is strictly prohibited.",
  },
  {
    icon: <FiCheckCircle />,
    text:
      "CapValuez reserves the right to amend these Terms at its sole discretion without prior notice.",
  },
];

const TermsAndConditions = () => {
  return (
    <>

      {/* ================= Banner Section ================= */}
      <section className="relative w-full h-[80vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/banner/term.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0B1D3A]/85" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-[#FDC13E]/15 flex items-center justify-center">
              <VscTerminalUbuntu className="text-[#FDC13E] text-3xl" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Terms of Use
          </h1>

          <p className="text-white/85 max-w-4xl mx-auto leading-relaxed">
            By accessing and using our website{" "}
            <Link
              href="https://www.capvaluez.com"
              className="text-yellow-400 hover:underline"
            >
              www.capvaluez.com
            </Link>{" "}
            you agree to these{" "}
            <span className="text-yellow-400 font-medium">Terms</span>, along with
            our Privacy Policy and Disclaimer.
          </p>
        </motion.div>
      </section>

      <section className="bg-gray-50 py-5 px-4 flex justify-center">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <FiCheckCircle className="text-[#FDC13E] text-3xl flex-shrink-0 mt-1" />

            <div className="space-y-3 text-gray-800 text-sm sm:text-base leading-relaxed">
              <p>
                Your use of the Website constitutes confirmation that you have
                read, understood, and agreed to these Terms, the Privacy Policy,
                and the Disclaimer. You further agree not to infringe or violate
                any rights of CapValue Assets Advisory Private Limited
                (“CapValuez”, “we”, “us”, “our”), including intellectual
                property rights such as copyrights and trademarks.
              </p>

              <p>
                These Terms, read together with the Privacy Policy, constitute a
                legally binding agreement enforceable under the laws of India.
                By accepting these Terms, you represent that you are at least 18
                years of age and have the legal capacity to enter into this
                agreement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= General Information Cards ================= */}
      <section className="bg-gray-50 py-5 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold  flex  gap-2 text-gray-900 mb-5 text-start"
          ><span className=" border-l-4 border-l-yellow-500 ml-2"> </span>
            General Information
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
            {generalInfoCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-full bg-[#111F37]/10 flex items-center justify-center mb-4">
                  <span className="text-[#111F37] text-xl">{item.icon}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-5 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-start"
          >
            <h2 className="text-2xl flex gap-2 md:text-3xl font-semibold text-gray-900">
              <span className=" border-l-4 border-l-yellow-500 ml-2"> </span>
              Intellectual Property
            </h2>
          </motion.div>

          {/* Top Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 mb-10"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <FiShield className="text-blue-600 text-xl" />
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                All content available on the Website, including text, graphics,
                logos, and layout, is protected by applicable copyright and
                intellectual property laws.
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <FiDownload className="text-green-600 text-xl" />
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Users may view, download, or print content <b>solely for personal,
                  non-commercial use</b>, provided that all copyright and proprietary
                notices are retained.
              </p>
            </div>
          </motion.div>

          {/* Restrictions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FiCopy />,
                color: "red",
                text:
                  "Copy, reproduce, distribute, publish, transmit, modify, or create derivative works from any Website content for commercial purposes.",
              },
              {
                icon: <FiDatabase />,
                color: "purple",
                text:
                  "Scrape, crawl, or extract data from the Website by automated or manual means.",
              },
              {
                icon: <FiActivity />,
                color: "orange",
                text:
                  "Use the Website for monitoring, benchmarking, throttling, or activities that impair Website performance or security.",
              },
              {
                icon: <FiLock />,
                color: "blue",
                text:
                  "Attempt to access the Website through any means other than the interfaces provided by CapValuez.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}
                >
                  <span className={`text-${item.color}-600 text-xl`}>
                    {item.icon}
                  </span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50  py-5 px-4">
        <div className="max-w-6xl mx-auto ">

          {/* ================= Use Policy ================= */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-start"
            >
              <h2 className="text-2xl flex gap-2 md:text-3xl font-semibold text-gray-900">
                <span className=" border-l-4 border-l-yellow-500 ml-2"> </span>
                Use Policy – Terms & Conditions
              </h2>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FiUsers />,
                  color: "blue",
                  text:
                    "Use of the Website does not create any client–advisor, fiduciary, or professional relationship between you and CapValuez.",
                },
                {
                  icon: <FiMail />,
                  color: "green",
                  text:
                    "Any communication through the Website, including submission of enquiry forms or emails, does not constitute an offer, acceptance, or provision of advisory services.",
                },
                {
                  icon: <FiGlobe />,
                  color: "purple",
                  text:
                    "Users accessing the Website from outside India do so at their own initiative and are responsible for compliance with applicable local laws.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}
                  >
                    <span className={`text-${item.color}-600 text-xl`}>
                      {item.icon}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= Exclusion of Warranty ================= */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-start"
            >
              <h2 className="text-2xl mt-8 flex gap-2 md:text-3xl font-semibold text-gray-900">
                <span className=" border-l-4 border-l-yellow-500 ml-2"> </span>
                Exclusion of Warranty          </h2>
            </motion.div>

            {/* Main Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 mb-10"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <FiAlertCircle className="text-red-600 text-xl" />
                </div>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  The Website and its content are provided on an “as is” and “as
                  available” basis. CapValuez makes no warranties, express or
                  implied, of any kind.
                </p>
              </div>
            </motion.div>

            {/* Warranty Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FiCheckCircle />,
                  color: "orange",
                  text:
                    "Uninterrupted or error-free operation of the Website.",
                },
                {
                  icon: <FiShieldOff />,
                  color: "purple",
                  text:
                    "Accuracy or suitability of the content for any specific purpose.",
                },
                {
                  icon: <FiHardDrive />,
                  color: "blue",
                  text:
                    "Absence of viruses or other harmful components.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}
                  >
                    <span className={`text-${item.color}-600 text-xl`}>
                      {item.icon}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                Users are solely responsible for implementing appropriate
                safeguards for data protection, system security, and device
                integrity while accessing the Website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-5 px-4">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* ================= Limitation of Liability ================= */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-start"
            >
              <h2 className="text-2xl flex gap-2 md:text-3xl font-semibold text-gray-900">
                <span className=" border-l-4 border-l-yellow-500 ml-2"> </span>
                Limitation of Liability          </h2>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FiUsers />,
                  color: "blue",
                  text:
                    "Use of the Website does not create any client–advisor, fiduciary, or professional relationship between you and CapValuez.",
                },
                {
                  icon: <FiMail />,
                  color: "green",
                  text:
                    "Any communication through the Website, including submission of enquiry forms or emails, does not constitute an offer, acceptance, or provision of advisory services.",
                },
                {
                  icon: <FiGlobe />,
                  color: "purple",
                  text:
                    "Users accessing the Website from outside India do so at their own initiative and are responsible for compliance with applicable local laws.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}
                  >
                    <span className={`text-${item.color}-600 text-xl`}>
                      {item.icon}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* ================= Termination of Access ================= */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-start"
            >
              <h2 className="text-2xl flex gap-2 md:text-3xl font-semibold text-gray-900">
                <span className=" border-l-4 border-l-yellow-500 ml-2"> </span>
                Termination of Access          </h2>
            </motion.div>

            {/* Intro Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 md:p-8 mb-10"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FiUserX className="text-blue-600 text-xl" />
                </div>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  CapValuez reserves the right to restrict, suspend, or terminate
                  access to the Website, including blocking IP addresses, at its
                  sole discretion and without prior notice.
                </p>
              </div>
            </motion.div>

            {/* Termination Reasons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <FiShield />,
                  color: "red",
                  text: "Violation of these Terms and Conditions.",
                },
                {
                  icon: <FiCpu />,
                  color: "orange",
                  text:
                    "Technical, operational, or security-related issues.",
                },
                {
                  icon: <FiAlertTriangle />,
                  color: "purple",
                  text:
                    "Requirements imposed by law or governmental authorities.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-${item.color}-100 flex items-center justify-center mb-4`}
                  >
                    <span className={`text-${item.color}-600 text-xl`}>
                      {item.icon}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 bg-red-50 border border-red-200 rounded-xl p-6"
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                CapValuez shall not be liable for any consequences, losses, or
                damages arising from such restriction, suspension, or termination
                of access to the Website.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-5 px-4">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* ================= Jurisdiction ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <FiMapPin className="text-blue-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Jurisdiction & Governing Law
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                These Terms shall be governed by and construed in accordance
                with the laws of India. Courts located in India shall have
                exclusive jurisdiction over any disputes arising under or in
                connection with these Terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= Indemnity ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 md:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <FiShield className="text-red-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Indemnity
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                You agree to indemnify, defend, and hold CapValuez harmless from
                and against any claims, liabilities, damages, losses, costs, or
                expenses (including reasonable legal fees) arising from:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              "Your access to or use of the Website.",
              "Violation of these Terms or applicable laws.",
              "Infringement of any intellectual property or legal rights of any third party.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-red-50 border border-red-200 rounded-xl p-5"
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= Investigation ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <FiSearch className="text-purple-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Investigation & Enforcement
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                CapValuez reserves the right to investigate any suspected
                violation of these Terms and take appropriate action, including
                reporting unlawful activity to regulatory or law enforcement
                authorities and disclosing relevant user information where
                legally required.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= Reservation of Rights ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <FiBookmark className="text-green-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reservation of Rights
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                CapValuez expressly reserves all rights, remedies, and legal
                actions available under applicable law and equity for any
                breach of these Terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= Revisions ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-2xl p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <FiRefreshCw className="text-orange-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Revisions to the Terms
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                These Terms may be revised at any time. Updated Terms will
                become effective immediately upon posting on the Website.
                Continued use of the Website after such revisions constitutes
                acceptance of the updated Terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    </>
  );
};

export default TermsAndConditions;
