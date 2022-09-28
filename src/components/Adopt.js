import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { BreedButton } from "./Button.js";
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
          <Card
            style={{
              backgroundColor: "#FFC300",
              height: "330px",
              width: "300px",
              border: "2px solid #FFC300",
              borderRadius: "20px",
              color: "#FFF",
              boxShadow: "0 8px 8px -4px lightblue",
              padding: "20px",
              margin: "30px",
              marginBottom: "50px",
            }}
          >
            <Card.Img className="card-img" variant="top" src={each.img} />
            <Card.Body className="d-flex flex-column"
            >

            <h3>
              {each.name}, {each.age}
            </h3>
            <BreedButton className="align-self-end mt-auto" text="Adopt"/>
            </Card.Body>
          </Card>
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
          <Card
            style={{
              backgroundColor: "#FFC300",
              height: "290px",
              width: "250px",
              border: "2px solid #FFC300",
              borderRadius: "20px",
              color: "#FFF",
              boxShadow: "0 8px 8px -4px lightblue",
              padding: "20px",
              margin: "30px",
              marginBottom: "50px",
            }}
          >
            <Card.Img className="card-img" variant="top" src={each.img} />
            <Card.Body className="d-flex flex-column"
            >

            <h3>
              {each.name}, {each.age}
            </h3>
            <BreedButton className="align-self-end mt-auto" text="Adopt"/>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
