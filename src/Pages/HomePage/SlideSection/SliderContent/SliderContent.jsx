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
  // const products = [productImg1, productImg2, productImg3];
  const products = [
    {
      id: 0,
      prodImg: productImg1,
      title: "Pilsner",
      context:
        "379-ը ներկայացնում է գերմանական ոճի Պիլզներ՝ թեթև և առույգացնող, որի պատրաստման ժամանակ կիրառվել են գերմանական լավագույն ածիկն ու գայլուկը։ Սրանք ձևավորել են Պիլզներ գարեջրին հատուկ ածիկային համը և դառնությունը պարուրված ծաղկային բույրով",
    },
    {
      id: 1,
      prodImg: productImg2,
      title: "Weizen",
      context:
        "Ցորենի գարեջուրը Բավարիայում սկսել են պատրաստել հարյուրամյակներ առաջ՝ դարերով ձևավորելով այդ տեսակին բնորոշ բույրը և համը:379-ը ներկայացնում է ցորենի գարեջուր՝ պահպանելով այս տեսակի պատրաստման լավագույն ավանդույթները։Վայցենին բնորոշ է թեթևության զգացումը, բանանի և մեխակի բույրերի համադրությունը, միաժամանակ ցորենից եկող փափկությունն ու յուրահատուկ համը",
    },
    {
      id: 2,
      prodImg: productImg3,
      title: "American wheat ale",
      context:
        "379 գարեջրին բնորոշ ձևով պատրաստված ամերիկյան ոճի ցորենի գարեջուր, որն իր տեսակով քրաֆթ հեղափոխության ներկայացուցիչներից է։Պատրաստման ժամանակ կիրառվում են ամերիկյան թոփ արոմատիկ գայլուկներ՝ գարեջրին հաղորդելով ցիտրուսային և մերձարևադարձային երանգներ։",
    },
  ];
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
