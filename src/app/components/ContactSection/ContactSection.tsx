"use client";

import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
} from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="py-20 bg-[#f8fafc] bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[65%_30%] gap-10">

                {/* LEFT FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl border border-gray-200 p-8"
                >
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                        Send Us a Message
                    </h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field label="First Name *" />
                            <Field label="Last Name *" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field label="Email Address *" type="email" />
                            <Field label="Phone Number" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Field label="Company" />

                            <div>
                                <label className="field-label">Service of Interest</label>
                                <div className="relative">
                                    <select className="field-input appearance-none pr-10 cursor-pointer text-[14px]">
                                        <option>Select a service</option>
                                        <option>Business Advisory</option>
                                        <option>Real Estate Advisory</option>
                                        <option>Growth Capital</option>
                                        <option>Valuation Services</option>
                                    </select>

                                    {/* Custom Arrow */}
                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                                        ▼
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div>
                            <label className="field-label">Message *</label>
                            <textarea
                                rows={4}
                                placeholder="Please describe how we can assist you..."
                                className="field-input resize-none"
                            />
                        </div>
                        {/* CHECKBOX */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 accent-[#152D5B] cursor-pointer"
                            />
                            <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
                                I agree to the{" "}
                                <a
                                    href="/privacy-policy"
                                    className="text-[#152D5B] underline hover:text-[#0f1f4a]"
                                    target="_blank"
                                >
                                    Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/terms-conditions"
                                    className="text-[#152D5B] underline hover:text-[#0f1f4a]"
                                    target="_blank"
                                >
                                    Terms & Conditions
                                </a>.
                            </p>
                        </div>


                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-[#0f1f4a] text-white py-3 rounded-lg font-medium hover:bg-[#162d6b] transition"
                        >
                            Send Message
                        </button>
                        <p className="text-gray-400 text-[12px] text-center">By submitting this form, you agree to our privacy policy. All inquiries are treated with strict confidentiality.</p>
                    </form>
                </motion.div>

                {/* RIGHT INFO */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-5"
                >
                    <InfoCard
                        icon={<FaMapMarkerAlt />}
                        title="Visit Us"
                        content={`CapValue Assets Advisory Private Limited
109, KH No. 487, First Floor,
Peera Garhi, Sunder Vihar,
Delhi – 110087, India`}
                    />


                    <InfoCard
                        icon={<FaPhoneAlt />}
                        title="Call Us"
                        content={`+919811310951`}
                    />

                    <InfoCard
                        icon={<FaEnvelope />}
                        title="Email Us"
                        content={`info@capvaluez.com`}
                    />

                    <InfoCard
                        icon={<FaClock />}
                        title="Office Hours"
                        content={`Monday - Saturday\n9:00 AM - 6:00 PM IST`}
                    />

                    {/* MAP CARD */}
                    <motion.div
                        whileHover={{ y: -3 }}
                        className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                    >
                        <div className="px-4 py-3 border-b text-sm font-semibold text-[#152D5B]">
                            Our Location
                        </div>

                        <iframe
                            className="w-full h-40 border-0 rounded-md"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=109,%20KH%20No.%20487,%20First%20Floor,%20Peera%20Garhi,%20Sunder%20Vihar,%20Delhi%20110087,%20India&output=embed"
                        />


                    </motion.div>
                </motion.div>

            </div>

        </section>
    );
}

/* INPUT FIELD */
function Field({
    label,
    type = "text",
}: {
    label: string;
    type?: string;
}) {
    return (
        <div>
            <label className="field-label">{label}</label>
            <input
                type={type}
                placeholder=""
                className="field-input"
            />
        </div>
    );
}

/* INFO CARD */
function InfoCard({
    icon,
    title,
    content,
}: {
    icon: React.ReactNode;
    title: string;
    content: string;
}) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 items-start">
            <div className="bg-[#eef2ff] text-[#1e3a8a] p-3 rounded-lg text-lg">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-[#1e3a8a] mb-1">{title}</h4>
                <p className="text-xs text-gray-500 whitespace-pre-line">
                    {content}
                </p>
            </div>
        </div>
    );
}
