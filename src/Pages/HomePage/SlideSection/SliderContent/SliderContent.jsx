import React, { useState } from "react";
import SliderComponent from "../../../../Components/SliderComponent/SliderComponent";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import productImg1 from "../../../../../src/Images/productImg4.png";
import productImg2 from "../../../../../src/Images/productImg3.png";
import productImg3 from "../../../../../src/Images/productImg5.png";
import "swiper/css";
import "./sliderContent.scss";

const SliderContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const products = [productImg1, productImg2, productImg3];
  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      loop={true}
      speed={1500}
      modules={[Autoplay]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {products.map((sliderImg, index) => (
        <SwiperSlide key={index}>
          <SliderComponent isActive={activeIndex === index} prodImg={sliderImg} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderContent;
