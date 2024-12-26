import Image from "next/image";
import React from "react";

import logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import { NAV_LINKS } from "../utils/contants";

const Navbar = () => {
  return (
    <div className="w-full px-6 sm:px-20 h-[49px] flex items-center justify-between absolute z-10 left-0 mt-10">
      <Image
        src={logo}
        alt="project-iq-logo"
        style={{ width: "118.64px", height: "auto" }}
      />
      <div className="hidden lg:flex items-center gap-2">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              key={link.id}
              href={`#${link.link}`}
              className="text-black px-4 py-2 border border-black xs: "
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
