import React from "react";
// import { useEffect } from "react";
import "./homePage.scss";
import HeaderSection from "./HeaderSection/HeaderSection";
import StorySection from "./OurStorySection/StorySection";
import SlideSection from "./SlideSection/SlideSection";

const HomePage = () => {
  // const topRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (topRef) {
  //       topRef.current.style.backgroundPositionY = `${scrollY * 0.1}px`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  
  return (
    <div className="homePage">
      <HeaderSection />
      <StorySection />
      <SlideSection />
    </div>
  );
};

export default HomePage;
