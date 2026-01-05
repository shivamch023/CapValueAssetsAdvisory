import React from "react";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoBriefcaseOutline,
} from "react-icons/io5";

type TeamCardProps = {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
    expertise: string[];
    education: string;
    socials?: {
      linkedin?: string;
      twitter?: string;
    };
  };
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Social Icons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              className="bg-white p-2 rounded-full shadow hover:bg-[#B79643] hover:text-white transition"
            >
              <IoLogoLinkedin />
            </a>
          )}
          {member.socials?.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              className="bg-white p-2 rounded-full shadow hover:bg-[#B79643] hover:text-white transition"
            >
              <IoLogoTwitter />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg text-[#122557] tracking-tight">
          {member.name}
        </h3>
        <p className="text-sm text-[#B79643] mt-1">
          {member.role}
        </p>

        <p className="text-[12px] text-gray-500 mt-4 leading-relaxed">
          {member.bio}
        </p>

        {/* Expertise */}
        <div className="mt-4">
          <p className="text-sm text-[#122557] mb-2 flex items-center gap-1">
            <IoBriefcaseOutline />
            Expertise
          </p>
          <ul className="flex flex-wrap gap-2">
            {member.expertise.map((item, index) => (
              <li
                key={index}
                className="text-[10px] px-3 py-1 md:text-nowrap rounded-lg bg-gray-100 text-gray-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <p className="text-xs text-gray-500 mt-4">
          {member.education}
        </p>
      </div>
    </div>
  );
}
