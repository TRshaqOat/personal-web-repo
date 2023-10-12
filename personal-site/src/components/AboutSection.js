import React, { useState, useEffect, useMemo } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Helmet } from "react-helmet";
import "../CustomCSS/styles.css";

import me from "../assets/me.jpeg";

const AboutSection = () => {
  return (
    <div className="relative">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 pr-80 pl-24 z-0">
        <div class="w-96 h-96 rounded-full bg-transparent animate-newpulse"></div>
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
        <div className="w-2/4 pl-44">
          <div
            className="rounded-full w-150 h-150 overflow-hidden pb-22"
            style={{ aspectRatio: "1/1" }}
          >
            <img
              src={me}
              alt="Your Picture"
              className="object-cover w-full h-full"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="ml-4 w-2/3 pl-20">
          <h2 className="text-6xl font-bold mb-2 font-slab">Who Am I?</h2>
          <p className="font-slab text-md pt-5 pl-3">Hi, I am Achyut Patel</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
