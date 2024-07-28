"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Time from "../Time";
import { ArrowNextIcon, DropdownIcon } from "@/assets/svg";
import FormEmail from "../FormEmail";

const Home = () => {
  return (
    <div className="overflow-hidden w-full h-screen bg-homeMobileBg md:bg-homeBg bg-white bg-no-repeat bg-cover relative bg-center home">
      <Header />
      <div className="absolute left-14 md:left-0 bottom-0 w-full z-10 md:z-0">
        <Image
          width={500}
          height={500}
          className="w-full h-auto"
          src="/assets/images/fairy.png"
          alt="fairy"
        />
      </div>
      <div className="relative z-10 flex mt-[90px] md:mt-0 flex-col md:justify-center items-center w-full h-full">
        <h3 className="font-black text-[40px] text-center md:text-[80px] font-playfair text-white">
          We’re <br className="md:hidden block" /> Getting Ready
        </h3>
        <div className="px-4 flex justify-center">
          <div className="mt-[38px] md:mt-[21px] justify-center w-full mb-10 md:mb-[97px] bg-white rounded-[21px] px-[26px] py-6 md:px-[39px] md:py-[26px] max-w-[756px] flex gap-1 md:gap-[52px]">
            <Time timeName="Days" timeNum={30} hasColon />
            <Time timeName="Hours" timeNum={18} hasColon />
            <Time timeName="Minutes" timeNum={20} hasColon />
            <Time timeName="Second" timeNum={11} />
          </div>
        </div>
        <div className="px-4 md:px-0 max-w-[560px]">
          <p className="text-white text-xs md:text-lg text-center mb-4 md:mb-8">
            We will back to something amazing. Getting the latest updates about
            our games. Please sign up to our newsletter.
          </p>
          <FormEmail />
        </div>
        <button className="absolute pt-2 right-[18px] bottom-[100px] md:right-[80px] md:bottom-[38px] rounded-[100%] bg-white w-[66px] h-[66px] flex items-center justify-center shadow-button">
          <DropdownIcon />
        </button>
      </div>
    </div>
  );
};

export default Home;
