import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import HeaderSlide from "../../../../Components/HeaderSlide/HeaderSlide";
import headSlideImg1 from "../../../../../src/Images/headSlideImg1.png";
import headSlideImg2 from "../../../../../src/Images/headSlideImg2.png";
import headSlideImg3 from "../../../../../src/Images/headSlideImg3.png";
import headSlideImg4 from "../../../../../src/Images/headSlideImg4.png";
import "swiper/css";
import "swiper/css/pagination";
import "./headerSlider.scss";

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideImages = [
    headSlideImg1,
    headSlideImg2,
    headSlideImg3,
    headSlideImg4,
  ];
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
      {slideImages.map((slideImg, index) => (
        <SwiperSlide key={index}>
          <HeaderSlide isActive={activeIndex === index} prodImg={slideImg} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlider;
