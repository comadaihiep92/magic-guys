"use client";
import React, { useEffect, useRef } from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useAnimation, useInView } from "framer-motion";

const OurGames = () => {
  const t = useTranslations("HomePage");
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

  const data = [
    {
      id: 1,
      title: t("our_games.game1"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/1_e_space.png",
      href: "/",
    },
    {
      id: 2,
      title: t("our_games.game2"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/2_kingland.png",
      href: "/",
    },
    {
      id: 3,
      title: t("our_games.game3"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/3_the_last_game.png",
      href: "/",
    },
    {
      id: 4,
      title: t("our_games.game4"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/4_g_dragon.png",
      href: "/",
    },
    {
      id: 5,
      title: t("our_games.game5"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/5_pirates.png",
      href: "/",
    },
    {
      id: 6,
      title: t("our_games.game6"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/6_witch_party.png",
      href: "/",
    },
    {
      id: 7,
      title: t("our_games.game7"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/7_rocky.png",
      href: "/",
    },
    {
      id: 8,
      title: t("our_games.game8"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/8_blue_fire.png",
      href: "/",
    },
    {
      id: 9,
      title: t("our_games.game9"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/9_magic_tree.png",
      href: "/",
    },
    {
      id: 10,
      title: t("our_games.game10"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/10_aborigines.png",
      href: "/",
    },
    {
      id: 11,
      title: t("our_games.game11"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/11_cinderella.png",
      href: "/",
    },
    {
      id: 12,
      title: t("our_games.game12"),
      desc: t("our_games.game1_desc"),
      bgUrl: "/assets/images/our_games/12_egypt_game.png",
      href: "/",
    },
  ];
  return (
    <div id="our-games" className="w-full px-4 md:px-20 pb-10">
      <SectionHeader
        title={t("our_games.title")}
        desc={t("our_games.desc")}
        className="text-center max-w-[860px] m-auto"
      />
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-20">
          {data.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative group rounded-lg overflow-hidden shadow-lg ${
                index % 4 === 1 || index % 4 === 3 ? "top-[50px]" : ""
              }`}
            >
              <Image
                src={item.bgUrl}
                alt={"bg"}
                width={410}
                height={560}
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end px-2 py-[11px] md:px-4 md:py-6 lg:px-8 lg:py-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-[linear-gradient(360deg,_rgba(0,9,225,0.5)_6.79%,_rgba(0,0,0,0)_61.34%)] mix-blend-mode-normal">
                <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">
                  {item.title}
                </h2>
                <p className="text-white text-xs md:text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OurGames;
