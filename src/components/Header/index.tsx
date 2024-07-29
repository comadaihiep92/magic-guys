import {
  BurgerMenuIcon,
  CaretIcon,
  LogoIcon,
  LogoMobileIcon,
} from "@/assets/svg";
import Link from "next/link";
import React from "react";
import DropdownButton from "../DropdownButton";
import MobileMenu from "../MobileMenu";
import { useTranslations } from "next-intl";

export const navs = [
  {
    id: 1,
    name: "nav.about",
    href: "#about-us",
  },
  {
    id: 2,
    name: "nav.game",
    href: "#our-games",
  },
  {
    id: 3,
    name: "nav.partners",
    href: "#our-partners",
  },
  {
    id: 4,
    name: "nav.contact_us",
    href: "#contact-us",
  },
  {
    id: 5,
    name: "",
    href: "",
  },
];

const Header = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="bg-navBg fixed z-30 top-0 left-0 w-full flex items-center justify-between px-4 py-6 md:pb-[78px] md:px-4 lg:px-20 md:pt-5">
      <Link href={"#home"} className="hidden lg:block w-[163px] h-[96px]">
        <LogoIcon />
      </Link>
      <Link href={"#home"} className="block lg:hidden">
        <LogoMobileIcon />
      </Link>
      <ul className="hidden lg:flex items-center gap-[84px]">
        {navs.map((nav, index) => (
          <li key={nav.id}>
            {nav.id === 5 ? (
              <DropdownButton />
            ) : (
              <Link
                className="font-bold uppercase text-sm text-white"
                href={nav.href}
              >
                {`${t(nav.name)}`}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <MobileMenu />
    </div>
  );
};

export default Header;
