import React, { useEffect } from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import StorySection from "./OurStorySection/StorySection";
import SlideSection from "./SlideSection/SlideSection";
import TextSection from "./TextSection/TextSection";
import CardSection from "./CardSection/CardSection";
import "./homePage.scss";

const HomePage = () => {
  // useEffect(() => {
  //   const handleAnchorClick = (event) => {
  //     const id = event.target.getAttribute("href").slice(1);
  //     const element = document.getElementById(id);
  //     if (element) {
  //       window.scrollTo({
  //         top: element.offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  //   const links = document.querySelectorAll(".story a");
  //   links.forEach((link) => {
  //     link.addEventListener("click", handleAnchorClick);
  //   });

  //   return () => {
  //     links.forEach((link) => {
  //       link.removeEventListener("click", handleAnchorClick);
  //     });
  //   };
  // }, []);
  return (
    <div className="homePage">
      <HeaderSection id="headPart" />
      <StorySection id="storyPart" />
      <SlideSection id="sliderPart" />
      <TextSection id="textPart" />
      <CardSection id="cardPart" />
    </div>
  );
};

export default HomePage;
