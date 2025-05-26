import HeaderSection from "./HeaderSection/HeaderSection";
import StorySection from "./OurStorySection/StorySection";
import SlideSection from "./SlideSection/SlideSection";
import TextSection from "./TextSection/TextSection";
import CardSection from "./CardSection/CardSection";
import "./homePage.scss";
import AboutPage from "../AboutPage/AboutPage";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeaderSection />
      <StorySection />
      <AboutPage />
      {/* <h1>About 379 բաժին</h1> */}
      <SlideSection />
      <TextSection />
      <CardSection />
      <h1>Events բաժին</h1>
    </div>
  );
};

export default HomePage;
