import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { SitterButton } from "./Button.js";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import "swiper/css/pagination";

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
          <Card
            style={{
              backgroundColor: "#FFC300",
              height: "470px",
              width: "300px",
              border: "2px solid #FFC300",
              borderRadius: "20px",
              color: "#FFF",
              boxShadow: "0 8px 8px -4px lightblue",
              padding: "20px",
              margin: "30px",
              marginBottom: "50px"
            }}
          >
            <Card.Img className="card-img" variant="top" src={each.img} />
            <Card.Body className="d-flex flex-column">
              <h3>{each.name}</h3>
              <h5>{each.location} miles away</h5>
              <p>Rate: {each.rate} USD per hour</p>
              <ReactStars
                value={each.ratings}
                size={50}
                edit={false}
                isHalf={true}
                activeColor="#FF4400"
              />
              <SitterButton className="mt-auto" text="Hire Now" />
            </Card.Body>
          </Card>
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
          <Card
            style={{
              backgroundColor: "#FFC300",
              height: "430px",
              width: "250px",
              border: "2px solid #FFC300",
              borderRadius: "20px",
              color: "#FFF",
              boxShadow: "0 8px 8px -4px lightblue",
              padding: "20px",
              margin: "30px",
              marginBottom: "50px"
            }}
          >
            <Card.Img className="card-img" variant="top" src={each.img} />
            <Card.Body className="d-flex flex-column">
              <h3>{each.name}</h3>
              <h5>{each.location} miles away</h5>
              <p>Rate: {each.rate} USD per hour</p>
              <ReactStars
                value={each.ratings}
                size={40}
                edit={false}
                isHalf={true}
                activeColor="#FF4400"
              />
              <SitterButton className="mt-auto" text="Hire Now" />
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};