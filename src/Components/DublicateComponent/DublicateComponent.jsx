import React from "react";
import "./dublicateComponent.scss";

const DublicateComponent = ({ ref, styleName, itemImg }) => {
  return (
    <div className={styleName} ref={ref}>
      <img src={itemImg} alt="BackImage" />
      <div className="textBox">
        <span className="textSpan">Our Title</span>
        <h3 className="textTitle">Lorem ipsum dolor sit.</h3>
        <p className="moreText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default DublicateComponent;
