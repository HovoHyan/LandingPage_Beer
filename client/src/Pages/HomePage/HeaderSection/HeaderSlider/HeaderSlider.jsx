import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import HeaderSlide from "../../../../Components/HeaderSlide/HeaderSlide";
import headSlideImg2 from "../../../../Images/headerSlide2.png";
import headSlideImg3 from "../../../../Images/headerSlide3.png";
import headSlideImg1 from "../../../../Images/headerSlide4.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./headerSlider.scss";

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headSliderData = [
    {
      id: 0,
      slideImg: headSlideImg2,
      slideText: `FEEL THE DRAGON'S POWER`,
    },
    {
      id: 1,
      slideImg: headSlideImg1,
      slideText: `AWAKEN THE LEGEND WITHIN`,
    },
    {
      id: 2,
      slideImg: headSlideImg3,
      slideText: `LET YOUR FIRE RISE`,
    },
  ];

  return (
    <Swiper
      loop={true}
      speed={1000}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      onSlideChange={(swiper) => {
        if (swiper.realIndex !== activeIndex) {
          setActiveIndex(swiper.realIndex);
        }
      }}
    >
      {headSliderData.map((slideData, index) => (
        <SwiperSlide key={slideData.id}>
          <HeaderSlide
            isActive={activeIndex === index}
            prodImg={slideData.slideImg}
            slideText={slideData.slideText}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderSlider;
