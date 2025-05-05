import React, { useEffect, useRef } from "react";
import cartSectionImg from "../../../../src/Images/reklamImg.png";
import DublicateComponent from "../../../Components/DublicateComponent/DublicateComponent";
import "./cardSection.scss";

const CardSection = () => {
  const cardref = useRef(null);
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

      showBoxWithText(cardref, 3500);

      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="cardSection container">
      <DublicateComponent
        ref={cardref}
        styleName={"cardItem"}
        itemImg={cartSectionImg}
      />
    </section>
  );
};

export default CardSection;
