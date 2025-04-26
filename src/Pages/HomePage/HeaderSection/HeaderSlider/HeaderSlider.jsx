import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import slideImg from "../../../../Images/homeBack2.png";
import "swiper/css";
import "swiper/css/pagination";
import "./headerSlider.scss";

const HeaderSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
      }}
      speed={1000}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg} alt="Slide" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderSlider;
