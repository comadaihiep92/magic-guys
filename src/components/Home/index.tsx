"use client";
import React, { useEffect, useRef } from "react";
import Header from "../Header";
import Image from "next/image";
import Time from "../Time";
import FormEmail from "../FormEmail";
import ScrollButton from "../ScrollButton";
import { useTranslations } from "next-intl";
import CountdownTimer from "../CountdownTimer";
import { motion, useAnimation, useInView } from "framer-motion";

const Home = () => {
  const control = useAnimation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef);
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const textVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

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
        <motion.div
          ref={wrapperRef}
          variants={textVariants}
          initial="hidden"
          animate={control}
          transition={{
            type: "tween",
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.05,
          }}
        >
          <h3 className="font-black text-[40px] text-center md:text-[80px] font-playfair text-white">
            {t("banner.title")} <br className="md:hidden block" />{" "}
            {t("banner.title2")}
          </h3>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </motion.div>

        <div className="px-4 md:px-0 max-w-[560px]">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
          >
            <p className="text-white text-xs md:text-lg text-center mb-4 md:mb-8">
              {t("banner.desc")}
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "tween",
              stiffness: 260,
              damping: 20,
              delay: 0.08
            }}
          >
            <FormEmail />
          </motion.div>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
};

export default Home;
