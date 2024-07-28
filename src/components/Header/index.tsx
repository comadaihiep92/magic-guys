import { CaretIcon, LogoIcon } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import USFlag from "/assets/images/us_flag.png";
// import VNFlag from "/assets/images/us_flag.png";

const navs = [
  {
    id: 1,
    name: "ABOUT US",
    href: "#about_us",
  },
  {
    id: 2,
    name: "GAMES",
    href: "#games",
  },
  {
    id: 3,
    name: "PARTNERS",
    href: "#partners",
  },
  {
    id: 4,
    name: "CONTACT US",
    href: "#contact_us",
  },
  {
    id: 5,
    name: "",
    href: "",
  },
];

const Header = () => {
  return (
    <div className="bg-navBg fixed z-30 top-0 left-0 z-10 px-20 pt-5 w-full flex items-center justify-between pb-[78px]">
      <div>
        <LogoIcon />
      </div>
      <ul className="flex items-center gap-[84px]">
        {navs.map((nav, index) => (
          <li key={nav.id}>
            {nav.id === 5 ? (
              <button className="flex items-center justify-center gap-[10px]">
                <Image
                  width={40}
                  height={40}
                  src={"/assets/images/us_flag.png"}
                  alt="flag"
                />
                <CaretIcon />
              </button>
            ) : (
              <Link
                className="font-bold uppercase text-sm text-white"
                href={nav.href}
              >
                {nav.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
