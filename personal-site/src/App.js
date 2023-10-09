import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import ImageCarousel from "./components/ImageCarousel";
import ActiveSlider from "./components/ActiveSlider";
import CircleProgress from "./components/CircleProgress";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ImageCarousel />
      <ActiveSlider />
      <div className="flex flex-row h-screen justify-center items-center bg-[#101a24]">
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
