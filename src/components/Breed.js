import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { BreedButton } from "./Button.js";
import Card from "react-bootstrap/Card";
import { GeneralDesktopBreedCard, MobileBreedCard } from "./Card.js";
import "swiper/css/pagination";

export const DesktopBreed = ({ petlist }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      pagination={true}
      modules={[FreeMode, Pagination]}
    >
      {petlist.map((each) => (
        <SwiperSlide key={each.id}>
          <GeneralDesktopBreedCard each={each}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export const MobileBreed = ({ petlist }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      pagination={true}
      modules={[FreeMode, Pagination]}
    >
      {petlist.map((each) => (
        <SwiperSlide key={each.id}>
          <MobileBreedCard each={each}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
