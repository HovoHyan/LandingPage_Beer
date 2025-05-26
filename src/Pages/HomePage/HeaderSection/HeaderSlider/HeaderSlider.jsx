import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import HeaderSlide from "../../../../Components/HeaderSlide/HeaderSlide";
import headSlideImg1 from "../../../../../src/Images/headSlideImg1.png";
import headSlideImg2 from "../../../../../src/Images/headSlideImg2.png";
import headSlideImg3 from "../../../../../src/Images/headSlideImg3.png";
import "swiper/css";
import "swiper/css/pagination";
import "./headerSlider.scss";

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headSliderData = [
    {
      id: 0,
      slideImg: headSlideImg2,
      slideText: "FEEL THE DRAGON'S POWER"
    },
    {
      id: 1,
      slideImg: headSlideImg1,
      slideText: "AWAKEN THE LEGEND WITHIN"
    },
    {
      id: 2,
      slideImg: headSlideImg3,
      slideText: "LET YOUR FIRE RISE"
    }
  ]
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
      onSlideChange={(swiper) => {
        if (swiper.realIndex !== activeIndex) {
          setActiveIndex(swiper.realIndex);
        }
      }}
    >
      {headSliderData.map((slideData, index) => (
        <SwiperSlide key={slideData.id}>
          <HeaderSlide isActive={activeIndex === index} prodImg={slideData.slideImg} slideText={slideData.slideText} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlider;
