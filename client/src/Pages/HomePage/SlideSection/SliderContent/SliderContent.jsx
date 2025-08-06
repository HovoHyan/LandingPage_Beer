import React, { useState } from "react";
import SliderComponent from "../../../../Components/SliderComponent/SliderComponent";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../../../Data/productsData";
import "swiper/css";
import "./sliderContent.scss";

const SliderContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      autoplay={{
        delay: 3000,
      }}
      loop={true}
      speed={1500}
      modules={[Autoplay]}
      className="mySwiper"
      onSlideChange={(swiper) => {
        if (swiper.realIndex !== activeIndex) {
          setActiveIndex(swiper.realIndex);
        }
      }}
    >
      {products.map((slider, index) => (
        <SwiperSlide key={index}>
          <SliderComponent
            isActive={activeIndex === index}
            boxTitle={slider.title}
            boxText={slider.context}
            prodImg={slider.prodImg}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderContent;
