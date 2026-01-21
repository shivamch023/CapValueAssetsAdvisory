"use client";

import {
  FiInfo,
  FiTarget,
  FiCheckCircle,
  FiUser,
  FiShield,
  FiMail,
} from "react-icons/fi";

const Chip = ({ label }: { label: string }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 border border-yellow-300">
    {label}
  </span>
);

const Card = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-11 h-11 rounded-xl bg-yellow-600/50 flex items-center justify-center text-[#0B1D3A] text-xl">
        {icon}
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-[#0B1D3A]">
        {title}
      </h2>
    </div>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicyCards() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6">

        {/* Information We Collect */}
        <Card title="Information We Collect" icon={<FiInfo />}>
          <p>
            We collect Information when you access our Website, communicate with
            us, or engage with us in a professional or contractual capacity. We
            only collect the following personal data that you voluntarily
            provide:
          </p>

          <div className="flex flex-wrap gap-2">
            <Chip label="Name" />
            <Chip label="Phone Number" />
            <Chip label="Email Address" />
          </div>

          <ul className="list-disc pl-5 space-y-1">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
          </ul>
        </Card>

        {/* Purpose */}
        <Card title="Purpose" icon={<FiTarget />}>
          <p>
            We collect and process your personal data solely for the following
            purposes:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Responding to your enquiries or requests</li>
            <li>Contacting you regarding our advisory or consulting services</li>
            <li>Business communication and relationship management</li>
            <li>
              Sharing information related to our services, updates, or insights
              (where relevant)
            </li>
            <li>Internal record-keeping and administrative purposes</li>
            <li>Compliance with applicable legal or regulatory obligations</li>
          </ul>

          <p>
            If we are required to process your personal information for a
            purpose not mentioned above, we shall seek your consent.
          </p>
        </Card>

        {/* Consent */}
        <Card title="Consent" icon={<FiCheckCircle />}>
          <p>
            By submitting your details on the Website, you provide your free,
            specific, informed, and unambiguous consent for the collection and
            use of your personal data in accordance with this Privacy Notice.
          </p>

          <p>
            You may withdraw your consent at any time by writing to us at the
            contact details provided below. Withdrawal of consent may affect
            our ability to respond to your request or continue communication.
          </p>
        </Card>

        {/* Your Rights */}
        <Card title="Your Rights" icon={<FiUser />}>
          <p>
            <strong>Right of Access, Modification, and Deletion:</strong> You may
            at any point write to us to access your information, remove your
            information from our systems and update/correct your information.
            You may write to the following email to access your rights. For any
            queries or information regarding your personal information, contact
            us at:
          </p>

          <p className="flex items-center gap-2 font-medium text-[#0B1D3A]">
            <FiMail /> info@capvaluez.com
          </p>

          <p>
            You have the right to nominate another individual to exercise your
            rights in the event of your death or incapacity to exercise them.
          </p>

          <p>
            Please note, however, that this may affect our ability to process
            or enable communication with you and may lead to the
            discontinuation of our relationship for which this information was
            being used at our sole discretion. Any deletion request shall be
            entertained only subject to applicable data retention laws.
          </p>
        </Card>

        {/* Security And Confidentiality */}
        <Card title="Security And Confidentiality" icon={<FiShield />}>
          <p>
            We have adopted reasonable security practices and standards as per
            applicable law to protect your Information, and such standards are
            in line with the best industry practices for confidentiality and
            security and are commensurate with the nature of Information
            processed by us.
          </p>

          <p>
            All Information that we collect is disclosed or transferred only
            under the following circumstances to the entities/individuals
            identified below:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Disclosures to our personnel and within CapValuez:</strong>{" "}
              Access to your Information within CapValuez will be limited to the
              personnel who need to know the information for the purposes
              described in this Privacy Policy. Due to the pan-India presence of
              CapValuez, we may disclose Information throughout CapValuez to
              fulfil the purposes described in this Privacy Policy. We may use
              third-party vendor solutions for storing your Information.
              However, we will ensure that the Information is protected in the
              same manner as CapValuez protects your information and that the
              same data protection standards are implemented.
            </li>

            <li>
              <strong>Disclosures or Transfers to Third Parties:</strong> We may
              disclose Information to third parties for other purposes with your
              explicit consent or when such disclosure is essential for the
              performance of a contractual agreement between CapValuez and you.
              To this end, you explicitly consent to the transfer of your
              Information for any of the purposes set out in this Privacy
              Policy. Our practice is to only provide third parties with
              Information that is strictly necessary to achieve the intended
              processing purposes and enable them to deliver the expected
              services. We are committed to refraining from sharing personal
              data unless required by law or when it aligns with the intended
              purposes of the data processing. To the best of our abilities, we
              endeavour to modify our contracts to ensure the security of shared
              data. In all our arrangements, we include provisions to safeguard
              personal data and prevent any unauthorised or inappropriate use.
              We take utmost care in protecting your information and
              maintaining the highest level of data privacy standards.
            </li>

            <li>
              <strong>Mandatory Disclosures or Transfers:</strong> We may
              disclose Information if required to do so by law or if it is
              necessary to comply with a court order, judicial or other
              government warrant, or to otherwise cooperate with law
              enforcement or other governmental agencies.
            </li>
          </ul>
        </Card>

      </div>
    </section>
  );
}
