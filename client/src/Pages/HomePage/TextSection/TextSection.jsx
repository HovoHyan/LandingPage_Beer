import React, { useEffect, useRef, useState, useCallback } from "react";
import throttle from "lodash.throttle";
import magicDragon from "../../../Videos/ForStory/magicOfDragon.mp4";
import posterDragon from "../../../Icons/beige.png";
import "./textSection.scss";

const TextSection = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const shown = new Set();
    const showBoxWithText = (ref) => {
      if (!ref.current || shown.has(ref)) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        shown.add(ref);
        setIsVisible(true);
      }
    };
    const onScroll = throttle(() => {
      showBoxWithText(textRef);
    }, 200);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    v.addEventListener("play", handlePlay);
    v.addEventListener("pause", handlePause);
    return () => {
      v.removeEventListener("play", handlePlay);
      v.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      const v = videoRef.current;
      if (!v) return;
      if (isPlaying) {
        v.pause();
      } else {
        v.play();
      }
    },
    [isPlaying]
  );

  return (
    <section
      className={`textSection ${isVisible ? "animate" : ""}`}
      ref={textRef}
    >
      <h3>THE MAGIC OF DRAGON</h3>
      <p>
        Եվ այսպես մեր պատմությունը շարունակվում է. 379-ի վիշապը պահպանում և
        զարգացնում է գարեջրագործության ժառանգությունը, որը գալիս է մեր հողից,
        մեր ջրից, մեր էությունից։
      </p>

      <div className="video-container" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={magicDragon}
          poster={posterDragon}
          preload="metadata"
          playsInline
          className="video-element"
          controls={false}
          aria-label="Video about magic dragon"
        />
        {!isPlaying && (
          <div className="big-play-button" aria-label="Play video">
            <div className="triangle" />
          </div>
        )}
      </div>
    </section>
  );
};

export default TextSection;
