import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MoveUpRight } from "lucide-react";

import logoGrey from "../../../public/assets/logoGrey.svg";
import facebook from "../../../public/assets/facebook.svg";
import linkdin from "../../../public/assets/linkdin.svg";

export const Footer = () => {
  const FOOTER_LINKS = [
    {
      id: 2,
      title: "Work",
      link: "work",
    },
    {
      id: 1,
      title: "Expertise",
      link: "expertise",
    },

    {
      id: 4,
      title: "Contact",
      link: "contact",
    },
  ];

  const CONTACTS = [
    {
      id: "call",
      title: "CALL US",
      link: "tel:+2348035820726",
      text: "08035820726",
    },
    {
      id: "email",
      title: "EMAIL US",
      link: "mailto:projectiqservices@gmail.com",
      text: "projectiqservices@gmail.com",
    },
    {
      id: "address",
      title: "VISIT US",
      link: "https://www.google.com/maps/place/77+Itire+St,+Surulere,+Lagos+101241,+Lagos/@6.5122,3.3506172,17z/data=!4m15!1m8!3m7!1s0x103b8c3a3b81b6c9:0x684a6df5d17c9730!2s77+Itire+St,+Surulere,+Lagos+101241,+Lagos!3b1!8m2!3d6.5122!4d3.3531921!16s%2Fg%2F11dzqjkwh1!3m5!1s0x103b8c3a3b81b6c9:0x684a6df5d17c9730!8m2!3d6.5122!4d3.3531921!16s%2Fg%2F11dzqjkwh1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      text: "77 Itire St, Surulere, Lagos 101241, Lagos",
    },
  ];

  const SOCIAL_LINKS = [
    {
      id: "facebook",
      title: "Facebook",
      link: "https://www.facebook.com/story.php?story_fbid=2068373370111022&substory_index=0&id=1430664657215233&_rdr",
      icon: facebook,
    },
    {
      id: "linkedin",
      title: "Linkedin",
      link: "https://ng.linkedin.com/in/rotimi-ojeleye-73888b20",
      icon: linkdin,
    },
  ];

  return (
    <footer className=" bg-black-3 ">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between px-6 lg:px-20 py-14">
        <div>
          <Image
            src={logoGrey}
            alt="project-iq-logo"
            style={{ width: "118.64px", height: "auto" }}
          />
          <p className="text-[42px] md:w-[379px] leading-[52.08px] text-white-2 mt-6">
            We would love to hear from you.
          </p>
          <p className="text-white-2 mt-8">
            Become a client, drop us a line via email.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <p className="text-white-2">projectiqservices@gmail.com</p>
            <div className="w-[23px] min-w-[23px] aspect-square centered bg-primary">
              <MoveUpRight size={14} color="#050505" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-6 justify-between w-full lg:w-auto lg:justify-end sm:gap-20 text-sm md:text-base">
          <div className="">
            <h2 className="text-white-2 text-[24px] mb-6">Links</h2>
            {FOOTER_LINKS.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={`#${link.link}`}
                  className="text-white-2 mt-6 block"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className="sm:w-[229px]">
            <h2 className="text-white-2 text-[24px] mb-6">Contact</h2>
            {CONTACTS.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  className="text-white-2 mt-6 block"
                >
                  <p className="text-white/50 text-[13px]">{link.title}</p>
                  <p className="">{link.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-20 py-4 flex items-center justify-between border-t border-t-[#2A2727]">
        <p className="text-white-2/50 text-[13px]">
          Project I-Q Services Limited ™ © 2024. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.link}
                target="_blank"
                className="text-white-2 border border-primary w-9 min-w-9 aspect-square centered"
              >
                <Image
                  style={{ width: "16px", height: "auto" }}
                  src={link.icon}
                  alt={link.title}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
