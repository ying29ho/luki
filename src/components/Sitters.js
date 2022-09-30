import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { GeneralDesktopSitterCard, MobileSitterCard } from "./Card";

export const DesktopSitters = ({ sitterlist }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      pagination={true}
      loop={true}
      modules={[FreeMode, Pagination]}
    >
      {sitterlist.map((each) => (
        <SwiperSlide key={each.id}>
          <GeneralDesktopSitterCard each={each} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const MobileSitters = ({ sitterlist }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={true}
      loop={true}
      modules={[FreeMode, Pagination]}
    >
      {sitterlist.map((each) => (
        <SwiperSlide key={each.id}>
          <MobileSitterCard each={each} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
