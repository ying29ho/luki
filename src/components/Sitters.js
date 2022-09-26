import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { SitterButton } from "./Button.js";
import Card from "react-bootstrap/Card";

export const Sitters = ({ sitterlist }) => {
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
      {sitterlist.map((each) => (
        <SwiperSlide key={each.id}>
            <Card style={{backgroundColor: "#FFC300", height: "450px", width:"300px", border: "2px solid #FFC300", borderRadius: "20px", color: "#FFF", boxShadow: "0 8px 8px -4px lightblue", padding: "20px", margin: "30px"}}>
          <Card.Img className="card-img" variant="top" src={each.img}/>
          <Card.Body className="d-flex flex-column"
            >
            <h3>
              {each.name}
            </h3>
            <h5>Based In:{each.location}</h5>
            <p>Hourly Rate:{each.rate}</p>
            <p>{each.ratings}</p>
            <SitterButton className="mt-auto" text="Hire Now"/>
          </Card.Body>
            </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
