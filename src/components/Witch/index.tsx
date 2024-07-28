"use client";
import { WitchSvg } from "@/assets/svg";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Witch = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p>{t("translation")}</p>
      <h1>{t("Welcome to React")}</h1>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <WitchSvg />
      </motion.div>
    </div>
  );
};

export default Witch;
