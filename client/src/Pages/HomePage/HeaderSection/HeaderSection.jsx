import React from "react";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import "./headerSection.scss";

const HeaderSection = () => {
  return (
    <section className="headerSection" translate="no">
      <HeaderSlider />
    </section>
  );
};

export default HeaderSection;
