import React, { useState, useEffect, useMemo } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import lake from "../assets/lake.jpg";
import meadow from "../assets/meadow.jpg";
import waterfall from "../assets/waterfall.jpg";
import fall from "../assets/fall.jpg";
import field from "../assets/field.jpg";
import weird from "../assets/weird.jpg";

const ImageCarousel = () => {
  const slides = useMemo(() => {
    return [lake, meadow, waterfall, fall, field, weird];
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

    const interval = setInterval(rotateSlides, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [slides]);

  return (
    <div className="h-[720px] w-full m-auto pb-10 relative group bg-[#101a24]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
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
