import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import VideoSlide from "./VideoSlide/VideoSlide";

import rock from "../../Videos/ForStory/rock.mp4";
import ufo from "../../Videos/ForStory/ufo.mp4";
import wday from "../../Videos/ForStory/wday.mp4";
import opening from "../../Videos/ForStory/opening.mp4";
import beerdays from "../../Videos/ForStory/beerdays.mp4";
import winds from "../../Videos/ForStory/winds.mp4";

import "swiper/css";
import "swiper/css/navigation";
import "./events.scss";

export default function EventsSlider() {
  const videos = [
    { title: "Rock Festival with Riff Riot", src: rock },
    { title: "Valentine Day with UFO", src: ufo },
    { title: "Woman's Day", src: wday },
    { title: "IntellectEVN's Opening Event", src: opening },
    { title: "Beers Day 2024", src: beerdays },
    { title: "Winds of Armenia", src: winds },
  ];

  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    let timeout;

    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
      setShowPlayButton(false);

      timeout = setTimeout(() => {
        currentVideo.pause();
        setShowPlayButton(true);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const handlePlayClick = () => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.play();
      setShowPlayButton(false);
    }
  };

  return (
    <div className="events-slider-container">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2.2} // центр + кусочки соседей
        spaceBetween={40} // отступы
        navigation
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation]}
        className="mySwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <VideoSlide
              title={video.title}
              src={video.src}
              videoRefs={videoRefs}
              index={index}
              activeIndex={activeIndex}
              showPlayButton={showPlayButton}
              handlePlayClick={handlePlayClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
