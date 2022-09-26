import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { BreedButton } from "./Button.js";
import Card from "react-bootstrap/Card";

export const Breed = ({ petlist }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      // freeMode={true}
      loop={true}
      modules={[FreeMode]}
      breakpoints={{
        380: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      {petlist.map((each) => (
        <SwiperSlide key={each.id}>
          <Card
            style={{
              backgroundColor: "#FFC300",
              height: "400px",
              width: "300px",
              border: "2px solid #FFC300",
              borderRadius: "20px",
              color: "#FFF",
              boxShadow: "0 8px 8px -4px lightblue",
              padding: "20px",
              margin: "30px",
            }}
          >
            <Card.Img className="card-img" variant="top" src={each.img} />
            <Card.Body className="d-flex flex-column"
            >

            <h3>
              {each.name}, {each.age}
            </h3>
            <h6>{each.species}</h6>
            <p>Owned by:{each.owner}</p>
            <BreedButton className="align-self-end mt-auto" text="View"/>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
