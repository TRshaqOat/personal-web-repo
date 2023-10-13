import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../CustomCSS/styles.css";

import me from "../assets/me.jpeg";

import TypingText from "./TypingText";

const AboutSection = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // When 50% of the component is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div className="relative" id="aboutsection">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 pr-80 pl-24 z-0">
        <div
          class="w-96 h-96 rounded-full bg-transparent animate-newpulse animation-delay-3000"
          style={{ position: "relative" }}
        ></div>
      </div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 pr-80 pl-48 z-0">
        <div
          class="w-96 h-96 rounded-full bg-transparent animate-newpulse animation-delay-1000"
          style={{ position: "relative" }}
        ></div>
      </div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 pr-80 pl-36 pt-8 z-0">
        <div
          class="w-96 h-96 rounded-full bg-transparent animate-newpulse"
          style={{ position: "relative" }}
        ></div>
      </div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 pr-80 pl-36 pb-8 z-0">
        <div
          class="w-96 h-96 rounded-full bg-transparent animate-newpulse animation-delay-2000"
          style={{ position: "relative" }}
        ></div>
      </div>
      <div className=" bg-gray-400 p-4 flex items-center z-10">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="w-2/4 pl-48">
          <div
            className="rounded-full w-150 h-150 overflow-hidden pb-22"
            style={{ position: "relative", aspectRatio: "1/1" }}
          >
            <img
              src={me}
              alt=""
              className="object-cover w-full h-full"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div ref={componentRef} className="ml-4 w-2/3 pl-20">
          {isVisible && (
            <h2 className="text-6xl font-bold pl-5 mb-2 font-slab">
              <TypingText text="Who Am I?" speed={100} />
            </h2>
          )}
          <p className="font-slab text-md pt-5 pl-8">Hi, I am Achyut Patel</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
