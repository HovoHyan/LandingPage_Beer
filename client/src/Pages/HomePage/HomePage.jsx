import HeaderSection from "./HeaderSection/HeaderSection";
import StorySection from "./OurStorySection/StorySection";
import AboutPage from "../AboutPage/AboutPage";
import SlideSection from "./SlideSection/SlideSection";
import TextSection from "./TextSection/TextSection";
import CardSection from "./CardSection/CardSection";
import "./homePage.scss";
import { useEffect, useState } from "react";

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
      <CardSection />
      <h1>Events բաժին</h1>
    </div>
  );
};

export default HomePage;
