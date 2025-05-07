import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./sliderComponent.scss";

const SliderComponent = ({ isActive, boxTitle, boxText, prodImg }) => {
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    if (isActive) {
      setAnimateClass("animate");
    }
  }, [isActive]);

  return (
    <div className={`slideComponent ${animateClass} container`}>
      <div className="slider">
        <div className="textPart">
          <h2>{boxTitle}</h2>
          <p>{boxText}</p>
          <button>Discover More</button>
        </div>
        <img src={prodImg} alt="Product" className="productImg" />
        <NavLink to={"/"}>
          See all our products
          <MdKeyboardArrowRight />
        </NavLink>
      </div>
    </div>
  );
};

export default SliderComponent;
