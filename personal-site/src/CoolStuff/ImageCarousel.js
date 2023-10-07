import React from "react";
import { Carousel } from "tw-elements";

function ImageCarousel() {
  return (
    <div
      id="carouselExampleCrossfade"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      {/* Carousel indicators */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 mx-15% mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="0"
          data-te-carousel-active
          className="mx-3 box-content h-3 w-30 flex-initial cursor-pointer border-0 border-y-10 border-solid border-transparent bg-white bg-clip-padding p-0 -indent-999px opacity-50 transition-opacity duration-600ms ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="1"
          className="mx-3 box-content h-3 w-30 flex-initial cursor-pointer border-0 border-y-10 border-solid border-transparent bg-white bg-clip-padding p-0 -indent-999px opacity-50 transition-opacity duration-600ms ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCrossfade"
          data-te-slide-to="2"
          className="mx-3 box-content h-3 w-30 flex-initial cursor-pointer border-0 border-y-10 border-solid border-transparent bg-white bg-clip-padding p-0 -indent-999px opacity-50 transition-opacity duration-600ms ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* First item */}
        <div
          className="relative float-left -mr-full w-full !transform-none opacity-0 transition-opacity duration-600ms ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
          data-te-carousel-active
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            className="block w-full"
            alt="Wild Landscape"
          />
        </div>
        {/* Second item */}
        <div
          className="relative float-left -mr-full hidden w-full !transform-none opacity-0 transition-opacity duration-600ms ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            className="block w-full"
            alt="Camera"
          />
        </div>
        {/* Third item */}
        <div
          className="relative float-left -mr-full hidden w-full !transform-none opacity-0 transition-opacity duration-600ms ease-in-out motion-reduce:transition-none"
          data-te-carousel-fade
          data-te-carousel-item
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            className="block w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCrossfade"
        data-te-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCrossfade"
        data-te-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
}
