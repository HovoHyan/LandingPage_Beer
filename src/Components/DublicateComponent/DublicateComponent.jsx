import React from "react";
import storyImg from "../../Images/headerBackground.png";
import "./dublicateComponent.scss";

const DublicateComponent = ({ ref, styleName }) => {
  return (
    <div className={styleName} ref={ref}>
      <img src={storyImg} alt="BackImage" />
      <div className="textBox">
        <span className="textSpan">Our Title</span>
        <h3 className="textTitle">Lorem ipsum dolor sit.</h3>
        <p className="moreText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          accusantium ipsa quos, error ut sed.
        </p>
      </div>
    </div>
  );
};

export default DublicateComponent;
