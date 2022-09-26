import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { BreedButton } from "./Button";
import Card from "react-bootstrap/Card";

export const Sitters = ({ sitterlist }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidePerView={3}
      // freeMode={true}
      loop={true}
      modules={[FreeMode]}
    >
      {sitterlist.map((each) => (
        <SwiperSlide key={each.id}>
            <Card style={{backgroundColor: "#FFC300", height: "450px", width:"300px", border: "2px solid #FFC300", borderRadius: "20px", color: "#FFF", boxShadow: "0 8px 8px -4px lightblue", padding: "20px", margin: "30px"}}>
          <Card.Img className="card-img" variant="top" src={each.img}/>
            <h1>
              {each.name}
            </h1>
            <h3>Based In:{each.location}</h3>
            <p>Hourly Rate:{each.rate}</p>
            <p>{each.ratings}</p>
            {/* <BreedButton>View</BreedButton> */}
          
            </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
