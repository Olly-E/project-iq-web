import Image from "next/image";
import React from "react";

import logo from "../../../public/assets/logo.svg";
import Link from "next/link";

const Navbar = () => {
  const NAV_LINKS = [
    {
      id: 1,
      title: "Expertise",
      link: "expertise",
    },
    {
      id: 2,
      title: "Work",
      link: "work",
    },
    {
      id: 3,
      title: "About",
      link: "about",
    },
    {
      id: 4,
      title: "Contact",
      link: "contact",
    },
  ];
  return (
    <div className="w-full px-20 h-[49px] flex items-center justify-between absolute z-10 left-0 mt-10">
      <Image
        src={logo}
        alt="project-iq-logo"
        style={{ width: "118.64px", height: "auto" }}
      />
      <div className="flex items-center gap-2">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              key={link.id}
              href={`#${link.link}`}
              className="text-black px-4 py-2 border border-black"
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
