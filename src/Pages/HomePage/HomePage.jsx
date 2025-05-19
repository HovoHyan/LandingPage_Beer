import HeaderSection from "./HeaderSection/HeaderSection";
import StorySection from "./OurStorySection/StorySection";
import SlideSection from "./SlideSection/SlideSection";
import TextSection from "./TextSection/TextSection";
import CardSection from "./CardSection/CardSection";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <HeaderSection />
      <StorySection />
      <SlideSection />
      <TextSection />
      <CardSection />
    </div>
  );
};

export default HomePage;
