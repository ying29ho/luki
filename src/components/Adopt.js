import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { BreedButton } from "./Button.js";
import { GeneralDesktopAdoptCard, MobileAdoptCard } from "./Card.js";
import Card from "react-bootstrap/Card";
import "swiper/css/pagination";

export const DesktopAdopt = ({ petlist }) => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={3}
      loop={true}
      pagination={true}
      modules={[FreeMode, Pagination]}
    >
      {petlist.map((each) => (
        <SwiperSlide key={each.id}>
          <GeneralDesktopAdoptCard each={each}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const MobileAdopt = ({ petlist }) => {
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
          <MobileAdoptCard each={each}/>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
