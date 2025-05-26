import React from "react";
import "./dublicateComponent.scss";

const DublicateComponent = ({ ref, styleName, itemImg, itemTitle, itemText }) => {
  return (
    <div className={styleName} ref={ref}>
      <img src={itemImg} alt="BackImage" />
      <div className="textBox">
        <h3 className="textTitle">{itemTitle}</h3>
        <p className="moreText">
          {itemText}
        </p>
      </div>
    </div>
  );
};

export default DublicateComponent;
