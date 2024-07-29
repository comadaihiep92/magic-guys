"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Time from "../Time";
import FormEmail from "../FormEmail";
import ScrollButton from "../ScrollButton";
import { useTranslations } from "next-intl";
import CountdownTimer from "../CountdownTimer";

const Home = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const t = useTranslations("HomePage");
  return (
    <div
      id="home"
      // bg-[#471FBD]
      className="overflow-hidden w-full h-screen bg-homeMobileBg md:bg-homeBg bg-white bg-no-repeat bg-cover relative bg-center home_mobile home"
    >
      <Header />
      <div className="absolute left-14 md:left-0 bottom-0 z-10 md:z-0">
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
          {t("banner.title")} <br className="md:hidden block" />{" "}
          {t("banner.title2")}
        </h3>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="px-4 md:px-0 max-w-[560px]">
          <p className="text-white text-xs md:text-lg text-center mb-4 md:mb-8">
            {t("banner.desc")}
          </p>

          <FormEmail />
        </div>

        <ScrollButton />
      </div>
    </div>
  );
};

export default Home;
