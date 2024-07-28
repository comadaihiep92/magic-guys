import React from "react";
import SectionHeader from "../SectionHeader";
import Count from "../Count";
import { DesignIcon, HourIcon, TeamIcon } from "@/assets/svg";
import Witch from "../Witch";

const AboutUs = () => {
  const workGroups = [
    {
      id: 1,
      title: "24 - Hour",
      desc: "24/7 access ensures operators' businesses runs smoothly all year long.",
      icon: HourIcon,
    },
    {
      id: 2,
      title: "Design",
      desc: "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.",
      icon: DesignIcon,
    },
    {
      id: 3,
      title: "Team",
      desc: "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. ",
      icon: TeamIcon,
    },
  ];
  return (
    <div id="about-us" className="md:px-[380px] w-full box-border">
      <div className="flex-col md:flex-row flex gap-10 flex-1">
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <SectionHeader
            title="About Us"
            desc="Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech."
          />
          <div className="pt-[40px] md:pt-20 flex gap-4 md:block">
            <Count count="600" title="Users" unit="M" className="flex-1" />
            <Count count="135" title="Games" className="flex-1" />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 py-10 md:px-[75px] md:py-[115px] flex flex-col gap-10 bg-[#EEEEEE]">
          {workGroups.map((item) => (
            <div key={item.id} className="flex gap-6">
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
