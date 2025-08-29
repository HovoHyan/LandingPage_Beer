import React, { useEffect, useRef } from "react";
import storyImg1 from "../../../Images/picture1.png";
import storyImg2 from "../../../Images/picture2.png";
import storyImg3 from "../../../Images/picture3.jpg";
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
      itemTitle: "Ստեղծվել է լեգենդ դառնալու համար",
      itemText:
        "Մենք ծնվել ենք մի երկրում, որտեղ գարեջուրը պարզապես խմիչք չէ. այն պատմություն է, որը խմորվում է ջրից և կրակից: «3 7 9»-ը նրանց համար է, ովքեր գնահատում են ոչ միայն գարեջուրը, այլև ստեղծագործականությունը, պատասխանատվությունը և նվիրվածությունը:",
    },
    {
      itemRef: boxItemRef2,
      itemImg: storyImg2,
      itemTitle: "Համաշխարհային մակարդակի որակը սկսվում է հումքից",
      itemText:
        "«3 7 9»-ը համագործակցում է գերմանական Weyermann® Specialty Malting ընկերության հետ՝ գարեջրի արտադրության մեջ լավագույն հումքն ապահովելու համար: Յուրաքանչյուր մանրուք մտածված է, յուրաքանչյուր հատիկ ընտրվում է:",
    },
    {
      itemRef: boxItemRef3,
      itemImg: storyImg3,
      itemTitle: "Գարեջրի նախնին. Հայկական գարու գինի",
      itemText:
        "379-ը զբաղվում է գարեջրի նախնու՝ անգլիական Barley Wine բացառիկ գարեջրի արտադրությամբ։ Այն պատրաստվում է 6 տեսակի հայկական չոր մրգերից և վերամշակված կոնյակի սպիրտից։ Barley Wine-ը պարզապես գարեջուր չէ, այլ համի նոր շերտ՝ մշակույթի և արհեստագործության մեջ։",
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

        requestAnimationFrame(() => {
          const textBox = ref.current.querySelector(".textBox");
          if (textBox) {
            textBox.classList.add("active");
          }
        });
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
        <h2 className="sectionTitle">Մեր պատմությունը</h2>
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
