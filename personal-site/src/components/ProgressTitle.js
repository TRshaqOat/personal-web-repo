import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../CustomCSS/pagination.css";
import "../CustomCSS/styles.css";
import { Helmet } from "react-helmet";

const ProgressTitle = () => {
  return (
    <div
      className="flex items-center justify-center flex-col h-[400px] bg-[#101a24] pt-24 pb-10"
      id="progresssection"
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
        <header className="text-white pb-0">
          <div className="container mx-auto">
            <h1 className="font-slab text-4xl font-extrabold tracking-tighta">
              Some Skills That I Have
            </h1>
          </div>
        </header>
      </div>
    </div>
  );
};

export default ProgressTitle;
