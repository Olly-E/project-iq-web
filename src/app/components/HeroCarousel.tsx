"use client";
import { Mousewheel, Keyboard } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero1 from "../../../public/assets/hero1.webp";
import hero2 from "../../../public/assets/hero2.webp";
import hero3 from "../../../public/assets/hero3.webp";
import hero4 from "../../../public/assets/hero4.webp";
import Image from "next/image";

const HeroCarousel = () => {
  const CAROUSEL_DATA = [
    {
      id: 1,
      title: "Button 1",
      img: hero1,
    },
    {
      id: 2,
      title: "Button 2",
      img: hero2,
    },
    {
      id: 3,
      title: "Button 3",
      img: hero3,
    },
    {
      id: 4,
      title: "Button 4",
      img: hero4,
    },
  ];

  return (
    <Swiper
      rewind={false}
      spaceBetween={0}
      cssMode={true}
      loop={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {CAROUSEL_DATA.map((data) => {
        return (
          <SwiperSlide className="" key={data.id}>
            <div className="relative h-full">
              <Image src={data.img} alt={data.title} fill className="object-cover" sizes="width:100%"/>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroCarousel;
