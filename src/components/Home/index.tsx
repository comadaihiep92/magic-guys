"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Time from "../Time";
import { ArrowNextIcon, DropdownIcon } from "@/assets/svg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-homeBg bg-white bg-no-repeat bg-cover relative bg-center home">
      <Header />
      <div className="absolute left-0 bottom-0 z-0">
        <Image
          width={500}
          height={500}
          src="/assets/images/fairy.png"
          alt="fairy"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <h3 className="font-black text-[80px] font-playfair text-white">
          We’re Getting Ready
        </h3>
        <div className="mt-[21px] mb-[97px] bg-white rounded-[21px] px-[39px] py-[26px] max-w-[756px] flex gap-[52px]">
          <Time timeName="Days" timeNum={30} hasColon />
          <Time timeName="Hours" timeNum={18} hasColon />
          <Time timeName="Minutes" timeNum={20} hasColon />
          <Time timeName="Second" timeNum={11} />
        </div>
        <div className="max-w-[560px]">
          <p className="text-white text-lg text-center mb-8">
            We will back to something amazing. Getting the latest updates about
            our games. Please sign up to our newsletter.
          </p>
          <form
            className="relative"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="px-[14px] w-full py-[18px] rounded-lg text-sm pr-12"
              type="email"
              placeholder="Enter your email"
            />
            <button className="absolute top-0 right-0 w-10 h-full flex items-center cursor-pointer">
              <ArrowNextIcon />
            </button>
          </form>
        </div>
        <button className="absolute pt-2 right-[80px] bottom-[38px] rounded-[100%] bg-white w-[66px] h-[66px] flex items-center justify-center shadow-button">
          <DropdownIcon />
        </button>
      </div>
    </div>
  );
};

export default Home;
