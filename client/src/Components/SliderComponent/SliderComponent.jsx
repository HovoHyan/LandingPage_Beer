import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./sliderComponent.scss";

const SliderComponent = ({
  isActive,
  boxTitle,
  stats,
  color,
  boxText,
  prodImg,
}) => {
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
              <h2 className="allTit">{boxTitle}</h2>
            ) : (
              <h2 className="bWine">{boxTitle}</h2>
            )}
            {boxTitle.split("").reverse().splice(0, 5).join("") !== " ENIW" ? (
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
          <div className="prodStats">
            <div className="abv" style={{ borderColor: color }}>
              ABV - {stats.abv}
            </div>
            <div className="ibu" style={{ borderColor: color }}>
              IBU - {stats.ibu}
            </div>
          </div>
          {boxText.map((elem, index) => {
            if (index === 2) {
              return (
                <>
                  <p key={index}>{elem}</p>
                </>
              );
            } else {
              return (
                <>
                  <p key={index}>{elem}</p>
                  <div className="hr"></div>
                </>
              );
            }
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
