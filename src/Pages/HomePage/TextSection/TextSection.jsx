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
    <section className="textSection" ref={textRef}>
      <h3>The Magic of Dragon </h3>
      <p>
        And so our story continues: the dragon of 379 preserves and develops the
        heritage of brewing, which comes from our land, our water, our essence.
      </p>
    </section>
  );
};

export default TextSection;
