import React, { useState, useEffect } from "react";
import product from "../../Images/homeBack2.png";
import "./headerSlide.scss";

const HeaderSlide = ({ isActive }) => {
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    if (isActive) {
      setAnimateClass("headAnimate");
    }
  }, [isActive]);
  return (
    <div className={`headSlide ${animateClass}`}>
      <img src={product} alt="Head" />
      <div className="headSlideText">
        <span>Campaigns</span>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h2>
        <button>Discover More</button>
      </div>
    </div>
  );
};

export default HeaderSlide;
