import React, { useEffect, useRef } from "react";
import throttle from "lodash.throttle";
import "./textSection.scss";

const TextSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const shown = new Set();

    const showBoxWithText = (ref) => {
      if (!ref.current || shown.has(ref)) return;

      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        shown.add(ref);
        ref.current.style.transform = "translateY(0)";
        ref.current.style.opacity = "1";
      }
    };

    const onScroll = throttle(() => {
      showBoxWithText(textRef);
    }, 200);

    window.addEventListener("scroll", onScroll);
    onScroll();
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
