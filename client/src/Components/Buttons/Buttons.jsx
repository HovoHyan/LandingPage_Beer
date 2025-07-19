import React from "react";
import "./buttons.scss";

const Buttons = ({ styleName, context, buttonIcon }) => {
  return (
    <button className={styleName}>
      {context} {buttonIcon ? <img src={buttonIcon} alt="MyIcon" /> : ""}
    </button>
  );
};

export default Buttons;
