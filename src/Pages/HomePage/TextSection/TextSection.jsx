import React, { useEffect, useRef } from "react";
import "./textSection.scss";

const TextSection = () => {
  const textRef = useRef(null);
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

      showBoxWithText(textRef, 3000);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="textSection container" ref={textRef}>
      <span>CAMPAIGNS & SPONSORSHIPS</span>
      <h3>The Magic of Heineken®</h3>
      <p>
        Tapping from our rich history and proud heritage, our campaigns tell the
        developing tale of our brand. The Heineken® voice is witty, intelligent
        and speaks in a refreshing tone. Our vision is positive and yes, a bit
        cheeky at times. One thing is for sure, each campaign is a 100%
        Heineken®. Enjoy!
      </p>
    </section>
  );
};

export default TextSection;
