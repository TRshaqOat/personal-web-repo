import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../CustomCSS/pagination.css";
import "../CustomCSS/styles.css";
import { Helmet } from "react-helmet";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#101a24]">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="relative">
        <div className="relative flex items-center justify-center">
          <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -top-12 w-32 ml-10 h-32  bg-[#036c6e] rounded-full mix-blend-multiply filter opacity-30 blur-xl animate-blob"></div>
            <div className="absolute -top-7 left-20 ml-10 w-32 h-32 bg-[#3ba7a9] rounded-full mix-blend-multiply filter opacity-30 blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -top-7 -ml-10 -left-2 -mb-0 w-32 h-32 bg-[#64b8b9] rounded-full mix-blend-multiply filter opacity-30 blur-xl animate-blob animation-delay-3000"></div>
            <div className="absolute -top-12 -ml-40 -left-2 -mb-0 w-32 h-32 bg-[#167d7f] rounded-full mix-blend-multiply filter opacity-30 blur-xl animate-blob animation-delay-4000"></div>
            <div className="absolute -top-7 -ml-60 -left-10 -mb-0 w-32 h-32 bg-[#036c6e] rounded-full mix-blend-multiply filter opacity-30 blur-xl animate-blob animation-delay-5000"></div>
          </div>
        </div>
        <header className="text-white pb-20">
          <div className="container mx-auto">
            <h1 className="font-slab text-4xl font-extrabold tracking-tighta">
              Welcome to My Photography
            </h1>
          </div>
        </header>
      </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-cyan-700 group-hover:rotate-45 duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
