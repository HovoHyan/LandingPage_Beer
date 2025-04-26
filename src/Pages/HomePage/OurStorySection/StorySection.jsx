import React, { useEffect, useRef } from "react";
import storyImg from "../../../Images/headerBackground.png";
import "./storySection.scss";

const StorySection = () => {
  const boxItemRef = useRef(null);
  const boxItemRef2 = useRef(null);
  const boxItemRef3 = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let shownBoxes = new Set();
  
    const showBoxWithText = (ref, threshold) => {
      if (!ref.current || window.scrollY < threshold || shownBoxes.has(ref)) return;
  
      shownBoxes.add(ref);
  
      ref.current.style.cssText = `transform: translateY(-20px); opacity: 1;`;
  
      setTimeout(() => {
        const textBox = ref.current.querySelector(".textBox");
        if (textBox) {
          textBox.classList.add("active");
        }
      }, 1000);
    };
  
    const onScroll = () => {
      const currentScrollY = window.scrollY;
  
      showBoxWithText(boxItemRef, 120);
      showBoxWithText(boxItemRef2, 120);
      showBoxWithText(boxItemRef3, 450);
  
      lastScrollY = currentScrollY;
    };
  
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="storySection container">
      <h2 className="sectionTitle">Our Story</h2>
      <div className="contentBox">
        <div className="boxItems" ref={boxItemRef}>
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
        <div className="boxItems" ref={boxItemRef2}>
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
        <div className="boxItems" ref={boxItemRef3}>
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
      </div>
    </section>
  );
};

export default StorySection;
