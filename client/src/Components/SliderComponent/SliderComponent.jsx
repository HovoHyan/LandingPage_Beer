import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./sliderComponent.scss";

const SliderComponent = ({ isActive, boxTitle, color, boxText, prodImg }) => {
  const [animateClass, setAnimateClass] = useState("");
  console.log(boxText);

  useEffect(() => {
    if (isActive) {
      setAnimateClass("animate");
    }
  }, [isActive]);

  return (
    <div className={`slideComponent ${animateClass}`}>
      <div className="slider">
        <img src={prodImg} alt="Product" className="productImg" />
        <div className="textPart">
          <div className="prodTitle" style={{ width: "250px" }}>
            {boxTitle.length < 8 ? (
              <h2>{boxTitle}</h2>
            ) : (
              <h2 style={{ fontSize: "26px", width: "500px" }}>{boxTitle}</h2>
            )}
            {boxTitle.length < 8 ? (
              <>
                <div
                  className="titleColor"
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className="titleColor"
                  style={{ backgroundColor: color }}
                ></div>
              </>
            ) : (
              <>
                <div className="titleColor"></div>
                <div className="titleColor"></div>
              </>
            )}
          </div>
          {boxText.map((elem, index) => {
            return <p key={index}>{elem}</p>;
          })}
          <NavLink to={"/find"} className={"buyLink"}>
            Որտեղ գնել
          </NavLink>
          <NavLink to={"/products"} className={"prodLink"}>
            Տեսեք մեր բոլոր ապրանքները
            <MdKeyboardArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
