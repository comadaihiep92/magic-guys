"use client";
import React, { useEffect, useRef } from "react";
import SectionHeader from "../SectionHeader";
import Count from "../Count";
import { DesignIcon, HourIcon, TeamIcon } from "@/assets/svg";
import Witch from "../Witch";
import { useTranslations } from "next-intl";
import { motion, useAnimation, useInView } from "framer-motion";

const AboutUs = () => {
  const control = useAnimation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef);
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

  const t = useTranslations("HomePage");
  const workGroups = [
    {
      id: 1,
      title: t("about.hour"),
      desc: t("about.hours_desc"),
      icon: HourIcon,
    },
    {
      id: 2,
      title: t("about.design"),
      desc: t("about.design_desc"),
      icon: DesignIcon,
    },
    {
      id: 3,
      title: t("about.team"),
      desc: t("about.team_desc"),
      icon: TeamIcon,
    },
  ];
  return (
    <div
      id="about-us"
      className="2xl:px-[380px] xl:px-20 md:px-20 w-full box-border"
    >
      <div className="flex-col md:flex-col xl:flex-row flex gap-10 flex-1">
        <div className="w-full md:w-full lg:w-full 2xl:w-1/2 px-4 md:px-0">
          <SectionHeader
            title={t("about.title")}
            desc={t("about.desc")}
            className="lg:text-start md:text-center"
          />
          <div className="pt-[40px] lg:pt-20 flex gap-4 2xl:block lg:flex md:flex md:pt-5">
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
              <Count
                count="600"
                title={t("about.users")}
                unit={t("about.unit")}
                className="flex-1"
              />
            </motion.div>
            <motion.div
              ref={wrapperRef}
              variants={textVariants}
              initial="hidden"
              animate={control}
              transition={{
                type: "tween",
                duration: 0.7,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Count count="135" title={t("about.games")} className="flex-1" />
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-full lg:w-full 2xl:w-1/2 px-4 py-10 md:px-[55px] md:py-[75px] xl:px-[75px] xl:py-[115px] flex flex-col gap-10 bg-[#EEEEEE]">
          {workGroups.map((item, index) => (
            <motion.div
              key={item.id}
              ref={wrapperRef}
              variants={textVariants}
              initial="hidden"
              animate={control}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.05 * index,
              }}
            >
              <div className="flex gap-6">
                <div className="min-w-[50px] h-[50px] flex items-center justify-center rounded-[50%] bg-[#E3FCFF]">
                  <item.icon />
                </div>
                <div>
                  <p className="text-2xl font-bold mb-2 text-black">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#757575]">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <Witch />
      </div>
    </div>
  );
};

export default AboutUs;
