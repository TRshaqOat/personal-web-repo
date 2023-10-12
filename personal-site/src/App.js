import React from "react";
import "./App.css";
import "./CustomCSS/styles.css";

import NavBar from "./components/NavBar";
import ImageCarousel from "./components/ImageCarousel";
import AboutSection from "./components/AboutSection";
import ActiveSlider from "./components/ActiveSlider";
import CircleProgress from "./components/CircleProgress";

function App() {
  return (
    <div className="flex flex-col h-screen scroll-slow">
      <NavBar />
      <ImageCarousel />
      <div className=" py-4 bg-neutral-main-blue"></div>
      <div className=" py-28 bg-gradient-to-b from-neutral-main-blue to-gray-400" />
      <AboutSection />
      <div className=" py-28 bg-gradient-to-t from-neutral-main-blue to-gray-400" />
      <div className=" py-4 bg-neutral-main-blue"></div>
      <ActiveSlider />
      <div className="flex flex-row h-screen justify-center items-center bg-neutral-main-blue py-12">
        <CircleProgress value={5} text={"Strengths"} />
        <CircleProgress value={15} text={"Weaknesses"} />
        <CircleProgress value={27} text={"Abilities"} />
        <CircleProgress value={50} text={"Weak"} />
        <CircleProgress value={78} text={"Ability"} />
      </div>
    </div>
  );
}

export default App;
