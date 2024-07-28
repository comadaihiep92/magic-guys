import {
  BurgerMenuIcon,
  CaretIcon,
  LogoIcon,
  LogoMobileIcon,
} from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import USFlag from "/assets/images/us_flag.png";
// import VNFlag from "/assets/images/us_flag.png";

const navs = [
  {
    id: 1,
    name: "ABOUT US",
    href: "#about-us",
  },
  {
    id: 2,
    name: "GAMES",
    href: "#our-games",
  },
  {
    id: 3,
    name: "PARTNERS",
    href: "#our-partners",
  },
  {
    id: 4,
    name: "CONTACT US",
    href: "#contact-us",
  },
  {
    id: 5,
    name: "",
    href: "",
  },
];

const Header = () => {
  return (
    <div className="bg-navBg fixed z-30 top-0 left-0 w-full flex items-center justify-between px-4 py-6 md:pb-[78px] md:px-20 md:pt-5">
      <div className="hidden md:block">
        <LogoIcon />
      </div>
      <div className="block md:hidden">
        <LogoMobileIcon />
      </div>
      <ul className="hidden md:flex items-center gap-[84px]">
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
      <button className="block md:hidden">
        <BurgerMenuIcon />
      </button>
    </div>
  );
};

export default Header;
