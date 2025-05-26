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
    {
      itemRef: boxItemRef,
      itemImg: storyImg1,
      itemTitle: "Built to become a legend",
      itemText:
        "We were born in a country where beer is not just a drink: it is a story, fermented from water and fire. '3 7 9' is for those who appreciate not only beer, but also creativity, responsibility and dedication.",
    },
    {
      itemRef: boxItemRef2,
      itemImg: storyImg2,
      itemTitle: "World-class quality starts with raw materials",
      itemText:
        "'3 7 9' collaborates with the German company Weyermann® Specialty Malting to ensure the best raw materials in beer production. Every detail is thought out, every grain is selected.",
    },
    {
      itemRef: boxItemRef3,
      itemImg: storyImg3,
      itemTitle: "The ancestor of beer: Armenian Barley Wine",
      itemText:
        "379 is engaged in the production of the exclusive English Barley Wine beer, the ancestor of beers. It is made with 6 types of Armenian dried fruits and processed brandy alcohol. Barley Wine is not just a beer, but a new layer of taste, in culture and craftsmanship.",
    },
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
    }, 200);

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="storySection">
      <div className="storyHandler">
        <h2 className="sectionTitle">Our Story</h2>
        <div className="contentBox">
          {storyArr.map((el, ind) => (
            <DublicateComponent
              ref={el.itemRef}
              styleName={"boxItems"}
              itemImg={el.itemImg}
              itemTitle={el.itemTitle}
              itemText={el.itemText}
              key={ind}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
