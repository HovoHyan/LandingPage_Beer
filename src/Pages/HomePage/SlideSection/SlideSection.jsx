import React from "react";
import "./slideSection.scss";
import SliderContent from "./SliderContent/SliderContent";

const SlideSection = () => {
  return (
    <section className="productSlider container" id="sliderPart">
      <SliderContent />
    </section>
  );
};

export default SlideSection;
