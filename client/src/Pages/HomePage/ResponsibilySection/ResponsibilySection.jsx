import React, { useEffect, useRef } from "react";
import responsImg from "../../../Images/responsSectionImg.png";
import "./responsibilySection.scss";

const ResponsibilySection = () => {
  const resBlockRef = useRef(null);
  const resTextRef = useRef(null);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let shownBoxes = new Set();

    const showBoxWithText = (ref, threshold) => {
      if (!ref.current || window.scrollY < threshold || shownBoxes.has(ref))
        return;

      shownBoxes.add(ref);

      ref.current.style.cssText = `transform: translateY(0); opacity: 1;`;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      showBoxWithText(resBlockRef, 1800);
      showBoxWithText(resTextRef, 1800);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="responsSection container">
      <div className="handleImg" ref={resBlockRef}>
        <img src={responsImg} alt="Respon" />
      </div>
      <div className="handleText" ref={resTextRef}>
        <span>ENJOY RESPONSIBLY</span>
        <h3>Encouraging Responsibility</h3>
        <p>
          Responsible Consumption is key for us. We have two different ways we
          champion it. One is on the road - the other off it. First, we know
          that accidents don't just happen on the road. That's why we encourage
          responsible consumption, whether you are driving or not. Next is we
          believe that the better driver is always the one who doesn't drink.
        </p>
        <button>Discover how</button>
      </div>
    </section>
  );
};

export default ResponsibilySection;
