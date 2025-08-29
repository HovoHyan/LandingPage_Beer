import React from "react";
import { NavLink } from "react-router-dom";
import "./productCard.scss";

const ProductCard = ({ title, color, stats, prodImg, prodDescription }) => {
  return (
    <div className="productCard">
      <img src={prodImg} alt="Products" />
      <div className="prodDescription">
        <div className="prodTitle">
          {title.length < 8 ? (
            <h2>{title}</h2>
          ) : (
            <h2 style={{ fontSize: "26px", lineHeight: "0.87", top: "16px" }}>
              {title}
            </h2>
          )}
          {title.length < 8 ? (
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
        <div className="prodContent">
          {prodDescription.map((elem, index) => {
            if (index === 1) {
              return <p>{elem}</p>;
            } else if (index === 2) {
              return (
                <>
                  <p>{elem}</p> <hr />
                </>
              );
            } else {
              return (
                <>
                  <p>{elem}</p> <hr />
                </>
              );
            }
          })}
        </div>
      </div>
      <NavLink to={"/find"}>Որտեղ գնել</NavLink>
    </div>
  );
};

export default ProductCard;
