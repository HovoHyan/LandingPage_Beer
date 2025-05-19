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
  const products = [
    {
      id: 0,
      prodImg: productImg1,
      title: "Pilsner",
      context:
        "379-ը ներկայացնում է գերմանական ոճի Պիլզներ՝ թեթև և առույգացնող",
    },
    {
      id: 1,
      prodImg: productImg2,
      title: "Weizen",
      context:
        "Ցորենի գարեջուրը Բավարիայում սկսել են պատրաստել հարյուրամյակներ առաջ",
    },
    {
      id: 2,
      prodImg: productImg3,
      title: "American wheat ale",
      context:
        "379 գարեջրին բնորոշ ձևով պատրաստված ամերիկյան ոճի ցորենի գարեջուր",
    },
  ];
  return (
    <Swiper
      autoplay={{
        delay: 300000,
      }}
      loop={true}
      speed={1500}
      modules={[Autoplay]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
