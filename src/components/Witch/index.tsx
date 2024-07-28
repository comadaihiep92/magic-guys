"use client";
import { Map, Pin, WitchSvg } from "@/assets/svg";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Witch = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative mt-[68px]">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="flex justify-center relative z-10"
      >
        <WitchSvg />
      </motion.div>
      <div className="-mt-[130px] flex w-full items-center justify-center relative">
        <Map />
        <div className="absolute top-3">
          <Pin />
        </div>
        <div className="bg-aboutGradient h-[198px] w-full absolute bottom-0 left-0"></div>
      </div>
    </div>
  );
};

export default Witch;
