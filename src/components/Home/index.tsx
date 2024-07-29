"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Time from "../Time";
import FormEmail from "../FormEmail";
import ScrollButton from "../ScrollButton";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <div
      id="home"
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
          {t('banner.title')} <br className="md:hidden block" /> {t('banner.title2')}
        </h3>
        <div className="px-4 flex justify-center">
          <div className="mt-[38px] md:mt-[21px] justify-center w-full mb-10 md:mb-[97px] bg-white rounded-[21px] px-[26px] py-6 md:px-[39px] md:py-[26px] max-w-[756px] flex gap-1 md:gap-[52px]">
            <Time timeName={t('banner.days')} timeNum={30} hasColon />
            <Time timeName={t('banner.hours')} timeNum={18} hasColon />
            <Time timeName={t('banner.minutes')} timeNum={20} hasColon />
            <Time timeName={t('banner.second')} timeNum={11} />
          </div>
        </div>
        <div className="px-4 md:px-0 max-w-[560px]">
          <p className="text-white text-xs md:text-lg text-center mb-4 md:mb-8">
            {t('banner.desc')}
          </p>

          <FormEmail />
        </div>

        <ScrollButton />
      </div>
    </div>
  );
};

export default Home;
