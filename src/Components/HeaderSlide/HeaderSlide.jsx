import React, { useState, useEffect } from "react";
import "./headerSlide.scss";

const HeaderSlide = ({ isActive, prodImg }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      setAnimate(false);
      const timeout = setTimeout(() => setAnimate(true), 500);
      return () => clearTimeout(timeout);
    } else {
      setAnimate(false);
    }
  }, [isActive]);

  return (
    <div className={`headSlide ${animate ? "headAnimate" : ""}`}>
      <img src={prodImg} alt="Head" />
      <div className="headSlideText">
        <span>Campaigns</span>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h2>
        <button>Discover More</button>
      </div>
    </div>
  );
};

export default HeaderSlide;
