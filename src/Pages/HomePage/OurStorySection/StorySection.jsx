import React, { useEffect, useRef } from "react";
import storyImg1 from "../../../../src/Images/ourStory1.png";
import storyImg2 from "../../../../src/Images/ourStory2.png";
import storyImg3 from "../../../../src/Images/ourStory3.png";
import DublicateComponent from "../../../Components/DublicateComponent/DublicateComponent";
import throttle from "lodash.throttle";
import "./storySection.scss";

const StorySection = () => {
  const boxItemRef = useRef(null);
  const boxItemRef2 = useRef(null);
  const boxItemRef3 = useRef(null);

  const storyArr = [
    { itemRef: boxItemRef, itemImg: storyImg1 },
    { itemRef: boxItemRef2, itemImg: storyImg2 },
    { itemRef: boxItemRef3, itemImg: storyImg3 },
  ];

  useEffect(() => {
    const shownBoxes = new Set();

    const showBoxWithText = (ref) => {
      if (!ref.current || shownBoxes.has(ref)) return;

      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        shownBoxes.add(ref);

        ref.current.style.cssText = `transform: translateY(-20px); opacity: 1;`;

        setTimeout(() => {
          const textBox = ref.current.querySelector(".textBox");
          if (textBox) textBox.classList.add("active");
        }, 500);
      }
    };

    const onScroll = throttle(() => {
      showBoxWithText(boxItemRef);
      showBoxWithText(boxItemRef2);
      showBoxWithText(boxItemRef3);
    }, 200); // throttle scroll every 200ms

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="storySection container">
      <h2 className="sectionTitle">Our Story</h2>
      <div className="contentBox">
        {storyArr.map((el, ind) => (
          <DublicateComponent
            ref={el.itemRef}
            styleName={"boxItems"}
            itemImg={el.itemImg}
            key={ind}
          />
        ))}
      </div>
    </section>
  );
};

export default StorySection;
