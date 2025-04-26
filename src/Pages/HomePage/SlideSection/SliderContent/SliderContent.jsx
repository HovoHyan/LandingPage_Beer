import React, { useState } from "react";
import SliderComponent from "../../../../Components/SliderComponent/SliderComponent";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./sliderContent.scss";

const SliderContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      speed={1500}
      modules={[Autoplay]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {[0, 1, 2].map((slide, index) => (
        <SwiperSlide key={index}>
          <SliderComponent isActive={activeIndex === index} /> {/* Передаем isActive */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderContent;
