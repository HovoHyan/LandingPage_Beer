import React, { useState } from "react";
import SliderComponent from "../../../../Components/SliderComponent/SliderComponent";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../../../Data/productsData";
import "swiper/css";
import "./sliderContent.scss";
import "swiper/css/navigation";

const SliderContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      loop={true}
      speed={1500}
      navigation={true}
      modules={[ Navigation]}
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
            stats={slider.stats}
            color={slider.color}
            boxText={slider.context.split("?")}
            prodImg={slider.prodImg}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderContent;

