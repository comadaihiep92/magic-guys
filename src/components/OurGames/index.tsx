import React from "react";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import Link from "next/link";

const OurGames = () => {
  const data = [
    {
      id: 1,
      title: "E-Space",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/1_e_space.png",
      href: "/",
    },
    {
      id: 2,
      title: "Kingland",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/2_kingland.png",
      href: "/",
    },
    {
      id: 3,
      title: "The Last Game",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/3_the_last_game.png",
      href: "/",
    },
    {
      id: 4,
      title: "G-Dragon",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/4_g_dragon.png",
      href: "/",
    },
    {
      id: 5,
      title: "Pirates",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/5_pirates.png",
      href: "/",
    },
    {
      id: 6,
      title: "Witch Party",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/6_witch_party.png",
      href: "/",
    },
    {
      id: 7,
      title: "Rocky",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/7_rocky.png",
      href: "/",
    },
    {
      id: 8,
      title: "Blue Fire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/8_blue_fire.png",
      href: "/",
    },
    {
      id: 9,
      title: "Magic tree",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/9_magic_tree.png",
      href: "/",
    },
    {
      id: 10,
      title: "Aborigines",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/10_aborigines.png",
      href: "/",
    },
    {
      id: 11,
      title: "Cinderella",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/11_cinderella.png",
      href: "/",
    },
    {
      id: 12,
      title: "Egypt Game",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgUrl: "/assets/images/our_games/12_egypt_game.png",
      href: "/",
    },
  ];
  return (
    <div className="w-full px-20 pb-10">
      <SectionHeader
        title="Our Games"
        desc="As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress."
        className="text-center max-w-[860px] m-auto"
      />
      <div className="grid grid-cols-4 gap-4 mt-20">
        {data.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`relative group rounded-lg overflow-hidden ${
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
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-[linear-gradient(360deg,_rgba(0,9,225,0.5)_6.79%,_rgba(0,0,0,0)_61.34%)] mix-blend-mode-normal">
              <h2 className="text-white text-5xl font-bold">{item.title}</h2>
              <p className="text-white text-sm">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurGames;
