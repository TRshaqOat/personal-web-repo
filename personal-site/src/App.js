import React from "react";
import "./App.css";
import "./CustomCSS/styles.css";

import NavBar from "./components/NavBar";
import ImageCarousel from "./components/ImageCarousel";
import AboutSection from "./components/AboutSection";
import ProgressTitle from "./components/ProgressTitle";
import ActiveSlider from "./components/ActiveSlider";
import CircleProgress from "./components/CircleProgress";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex flex-col h-screen scroll-slow">
      <NavBar />
      <ImageCarousel />
      <div className=" py-4 bg-neutral-main-blue" />
      <div className=" py-28 bg-gradient-to-b from-neutral-main-blue to-gray-400" />
      <AboutSection />
      <div className=" py-28 bg-gradient-to-t from-neutral-main-blue to-gray-400" />
      <div className=" py-4 bg-neutral-main-blue" />
      <ActiveSlider />
      <ProgressTitle />
      <div className="flex flex-row h-screen justify-center items-center bg-neutral-main-blue">
        <CircleProgress value={92} text={"Creativity"} />
        <CircleProgress value={86} text={"Adaptability"} />
        <CircleProgress value={95} text={"Problem-Solving"} />
        <CircleProgress value={78} text={"Organization"} />
        <CircleProgress value={81} text={"Patience"} />
      </div>
      <div className=" pb-28 bg-neutral-main-blue" />
      <div className=" py-28 bg-gradient-to-b from-neutral-main-blue to-neutral-contact-blue" />
      <Contact />
    </div>
  );
}

export default App;
