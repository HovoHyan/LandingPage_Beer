import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./headerSlider.scss";
import HeaderSlide from "../../../../Components/HeaderSlide/HeaderSlide";
import { useState } from "react";

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      speed={1000}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {[0,1,2,3].map((slide, index) => (
        <SwiperSlide key={index}>
          <HeaderSlide isActive={activeIndex === index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlider;
