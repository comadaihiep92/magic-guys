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

const Footer = () => {
  const socials = [
    { id: 1, icon: XIcon, href: "/" },
    { id: 2, icon: FacebookIcon, href: "/" },
    { id: 3, icon: LinkedinIcon, href: "/" },
  ];

  return (
    <div className="w-full">
      <div className="w-full px-[230px] pt-[100px] pb-[104px] bg-footer flex">
        <div className="flex flex-col gap-10 w-1/3">
          <LogoIcon />
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
        <div className="w-2/3 flex gap-10">
          <div className="flex flex-col gap-10">
            <h4 className="text-white text-2xl font-bold">Address</h4>
            <div className="flex gap-2">
              <div className="w-[29px]">
                <AddressIcon />
              </div>
              <div className="max-w-[362px]">
                <p className="text-sm text-white">
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </p>
                <p className="mt-3 text-sm text-white">
                  20 Phan Dang Luu street, Hai Chau District, Danang city,
                  Vietnam
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[29px]">
                <PhoneIcon />
              </div>
              <div className="max-w-[362px] flex gap-2">
                <p className="text-sm text-white">(+1) 555-0108-000</p>
                <p className="text-sm text-white">or</p>
                <p className="text-sm text-white">(+236) 555-0108</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h4 className="text-white text-2xl font-bold">Subscribe</h4>
            <div className="flex gap-2">
              <div className="max-w-[362px]">
                <p className="text-sm text-white mb-3">
                  Subscribe to our newsletter and be the first to know about our
                  updates
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
