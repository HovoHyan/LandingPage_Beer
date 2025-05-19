import React, { useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import cartSectionImg from "../../../../src/Images/reklamImg.png";
import DublicateComponent from "../../../Components/DublicateComponent/DublicateComponent";
import "./cardSection.scss";

const CardSection = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const shown = new Set();

    const showBoxWithText = (ref) => {
      if (!ref.current || shown.has(ref)) return;

      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        shown.add(ref);

        ref.current.style.transform = "translateY(-20px)";
        ref.current.style.opacity = "1";

        setTimeout(() => {
          const textBox = ref.current.querySelector(".textBox");
          if (textBox) {
            textBox.classList.add("active");
          }
        }, 500);
      }
    };

    const onScroll = throttle(() => {
      showBoxWithText(cardRef);
    }, 200);

    window.addEventListener("scroll", onScroll);
    onScroll(); // для начальной проверки
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="cardSection container">
      <DublicateComponent
        ref={cardRef}
        styleName={"cardItem"}
        itemImg={cartSectionImg}
      />
    </section>
  );
};

export default CardSection;
