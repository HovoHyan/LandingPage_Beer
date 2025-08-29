import React from "react";
import "./videoSlide.scss";

const VideoSlide = ({
  title,
  src,
  videoRefs,
  index,
  activeIndex,
  showPlayButton,
  handlePlayClick,
}) => {
  return (
    <div
      className={`video-slide ${
        index === activeIndex ? "active-slide" : "blur-slide"
      }`}
    >
      <video
        ref={(el) => (videoRefs.current[index] = el)}
        src={src}
        muted={false}
        preload="metadata"
        className="eventVideo"
      />
      <h3>{title}</h3>

      {index === activeIndex && showPlayButton && (
        <button className="play-btn" onClick={handlePlayClick}>
          ▶
        </button>
      )}
    </div>
  );
};

export default VideoSlide;
