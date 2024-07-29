import {
  AddressIcon,
  FacebookIcon,
  LinkedinIcon,
  LogoIcon,
  PhoneIcon,
  XIcon,
} from "@/assets/svg";
import React from "react";
import FormEmail from "../FormEmail";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("HomePage");
  const socials = [
    { id: 1, icon: XIcon, href: "/" },
    { id: 2, icon: FacebookIcon, href: "/" },
    { id: 3, icon: LinkedinIcon, href: "/" },
  ];

  return (
    <div id="contact" className="w-full">
      <div className="w-full px-4 py-10 flex-col md:flex-col md:gap-10 md:items-center lg:flex-row items-center lg:items-start 2xl:px-[230px] md:px-[80px] md:pt-[100px] pb-[62px] md:pb-[104px] bg-footerMobile lg:bg-footer flex">
        <div className="flex flex-col gap-10 w-full items-center md:items-start md:w-1/3">
          <div className="w-[163px] h-[96px]">
            <LogoIcon />
          </div>
          <ul className="flex gap-6 items-center">
            {socials.map((item) => (
              <li key={item.id}>
                <a href={item.href}>
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[68px] gap-[68px] w-full md:w-full flex-col md:flex-row md:mt-0 lg:w-2/3 flex md:gap-10">
          <div className="flex flex-col gap-5 md:gap-10">
            <h4 className="text-white text-2xl font-bold">
              {t("footer.section_title")}
            </h4>
            <div className="flex gap-2">
              <div className="w-[29px]">
                <AddressIcon />
              </div>
              <div className="w-full md:max-w-[362px]">
                <p className="text-sm text-white">{t("footer.address")}</p>
                <p className="mt-3 text-sm text-white">
                  {t("footer.address2")}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[29px]">
                <PhoneIcon />
              </div>
              <div className="w-full md:max-w-[362px] flex gap-2">
                <p className="text-sm text-white">(+1) 555-0108-000</p>
                <p className="text-sm text-white">{t("footer.or")}</p>
                <p className="text-sm text-white">(+236) 555-0108</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-10">
            <h4 className="text-white text-2xl font-bold">
              {t("footer.section_title2")}
            </h4>
            <div className="flex gap-2">
              <div className="w-full md:max-w-[362px]">
                <p className="text-sm text-white mb-3">
                  {t("footer.subscribe")}
                </p>
                <FormEmail className="bg-transparent border border-solid border-white text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <p className="text-center py-[30px] text-white text-lg">
          2017 Copyright. Policy.
        </p>
      </div>
    </div>
  );
};

export default Footer;
