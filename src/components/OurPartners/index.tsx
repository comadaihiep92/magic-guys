"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import "./OurPartners.css";
import Footer from "../Footer";
import { useTranslations } from "next-intl";
const OurPartners = () => {
  const t = useTranslations("HomePage");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      imgUrl: "/assets/images/logos/eagames.png",
      href: "/",
    },
    {
      id: 2,
      imgUrl: "/assets/images/logos/game.png",
      href: "/",
    },
    {
      id: 3,
      imgUrl: "/assets/images/logos/first_power_up.png",
      href: "/",
    },
    {
      id: 4,
      imgUrl: "/assets/images/logos/walt_disney.png",
      href: "/",
    },
    {
      id: 5,
      imgUrl: "/assets/images/logos/bookpro.png",
      href: "/",
    },
    {
      id: 6,
      imgUrl: "/assets/images/logos/sega.png",
      href: "/",
    },
    {
      id: 7,
      imgUrl: "/assets/images/logos/2k.png",
      href: "/",
    },
  ];

  return (
    <div id="our-partners" className="w-full">
      <div className="w-full box-border px-4 py-10 2xl:px-[190px] md:px-[80px] md:py-[120px] bg-[#F6F6F6]">
        <SectionHeader
          title={t("our_partners.title")}
          className="m-auto text-center"
        />
        <ul className="mt-10 md:mt-20 p-10 w-full">
          <Slider {...settings}>
            {data.map((image, index) => (
              <div key={index} className="relative overflow-hidden">
                <a href={image.href} className="relative group">
                  <Image
                    width={260}
                    height={100}
                    src={image.imgUrl}
                    alt="abc"
                    className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default OurPartners;
