import React from "react";
import "./productCard.scss";

const ProductCard = ({ title, prodImg, prodDescription }) => {
  return (
    <div className="productCard">
      <img src={prodImg} alt="Products" />
      <div className="prodDescription">
        <h2>{title}</h2>
        <p>{prodDescription.slice(0, 50)}</p>
      </div>
      <button>Where to buy</button>
    </div>
  );
};

export default ProductCard;
