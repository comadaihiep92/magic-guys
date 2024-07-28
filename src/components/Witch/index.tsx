"use client";
import { Map, Pin, WitchSvg } from "@/assets/svg";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Witch = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative mt-10 md:mt-[68px]">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="flex justify-center relative z-10 w-[300px] h-[243px] mb-[100px] md:mb-0 md:w-[533px] md:h-[437px]"
      >
        <WitchSvg />
      </motion.div>
      <div className="-mt-[130px] flex w-full items-center justify-center relative overflow-hidden">
        <Map />
        <div className="absolute top-0 md:top-0 w-[244px] md:w-[558px] md:-h[291px]">
          <Pin />
        </div>
        <div className="bg-aboutGradient h-[66px] md:h-[198px] w-full absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
};

export default Witch;
