import React, { useEffect, useRef } from "react";
import storyImg1 from "../../../../src/Images/ourStory1.png";
import storyImg2 from "../../../../src/Images/ourStory2.png";
import storyImg3 from "../../../../src/Images/ourStory3.png";
import DublicateComponent from "../../../Components/DublicateComponent/DublicateComponent";
import "./storySection.scss";

const StorySection = () => {
  const boxItemRef = useRef(null);
  const boxItemRef2 = useRef(null);
  const boxItemRef3 = useRef(null);

  const storyArr = [
    { itemRef: boxItemRef, itemImg: storyImg1 },
    { itemRef: boxItemRef2, itemImg: storyImg2 },
    { itemRef: boxItemRef3, itemImg: storyImg3 }
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let shownBoxes = new Set();

    const showBoxWithText = (ref, threshold) => {
      if (!ref.current || window.scrollY < threshold || shownBoxes.has(ref))
        return;

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
        {storyArr.map((el, ind) => (
          <DublicateComponent ref={el.itemRef} styleName={"boxItems"} itemImg={el.itemImg} key={ind} />
        ))}
      </div>
    </section>
  );
};

export default StorySection;
