import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
// import slideImg from "../../Images/ourStory3.png";
import "./sliderComponent.scss";

const SliderComponent = ({ isActive, prodImg }) => {
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
          <h2>Slide Text Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
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
