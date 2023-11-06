import React, { useState, useEffect, useMemo } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Helmet } from "react-helmet";

import chicago from "../assets/chicago.jpeg";
import loyola from "../assets/loyola.jpeg";
import mammoth from "../assets/mammoth.jpeg";
import wallgolfcourse from "../assets/wallgolfcourse.jpeg";

import TypingText from "./TypingText";

const ImageCarousel = () => {
  const slides = useMemo(() => {
    return [chicago, loyola, mammoth, wallgolfcourse];
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Function to rotate slides every 3 seconds
    const rotateSlides = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const interval = setInterval(rotateSlides, 6000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slides]);

  return (
    <div
      className="h-[720px] w-full m-auto pb-10 relative group bg-[#101a24]"
      id="carouselsection"
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header className="font-slab absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 text-white text-6xl font-bold text-center">
        <TypingText text="Where Nature Meets the Perfect Frame." speed={50} />
      </header>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover duration-700"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-4xl rounded-full p-2 text-white cursor-pointer">
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={45}
          className="hover:scale-125 duration-300"
        />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-4xl rounded-full p-2 text-white cursor-pointer">
        <BsChevronCompactRight
          onClick={nextSlide}
          size={45}
          className="hover:scale-125 duration-300"
        />
      </div>
      <div className="flex top-4 justify-center py-2 bg-[#101a24]">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
            style={{ color: "white" }}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
