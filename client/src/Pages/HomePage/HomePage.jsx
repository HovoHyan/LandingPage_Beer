import { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import StorySection from "./OurStorySection/StorySection";
import AboutPage from "../AboutPage/AboutPage";
import SlideSection from "./SlideSection/SlideSection";
import TextSection from "./TextSection/TextSection";
import "./homePage.scss";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => setData([...data]));
  }, []);
  console.log(data);

  return (
    <div className="homePage">
      <HeaderSection />
      <StorySection />
      <AboutPage />
      <SlideSection />
      <TextSection />
    </div>
  );
};

export default HomePage;
