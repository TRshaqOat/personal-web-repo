import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "../CustomCSS/pagination.css";
import "../CustomCSS/styles.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div
      className="max-w-full p-4 md:p-16 px-20 bg-neutral-contact-blue"
      id="contactsection"
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="text-center mx-auto">
        <header className="text-white">
          <div className="container mx-auto">
            <h1 className="font-slab text-5xl font-extrabold tracking-tighta">
              Get In Touch
            </h1>
          </div>
        </header>
        <div className="h-1.5 bg-neutral-main-blue w-20 mx-auto mt-4" />
        <p className="text-white font-slab text-md text-base leading-6 mt-9">
          I find my passion in capturing the wonders of nature through the lens,
        </p>
        <p className="text-white font-slab text-md text-base leading-6">
          where creativity meets the beauty of the great outdoors.
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <div className="p-2 pt-20">
              <input
                type="text"
                name="name"
                id="name"
                className="form-input border border-gray-300 text-white placeholder-white text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3"
                placeholder="Enter Your Name"
                style={{
                  //16 26 36
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  width: "267px",
                }}
              />
            </div>
            <div className="p-2 pt-20">
              <input
                type="text"
                name="email"
                id="email"
                className="form-input border border-gray-300 text-white placeholder-white text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3"
                placeholder="Enter Your Email"
                style={{
                  //16 26 36
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  width: "267px",
                }}
              />
            </div>
          </div>
          <div className="p-2">
            <input
              type="text"
              name="subject"
              id="subject"
              className="form-input border border-gray-300 text-white placeholder-white text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3"
              placeholder="Enter Your Subject"
              style={{
                //16 26 36
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                width: "550px",
              }}
            />
          </div>
          <div className="p-2">
            <textarea
              type="text"
              name="message"
              id="message"
              className="form-input border border-gray-300 text-white placeholder-white text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-4"
              placeholder="Enter Your Message"
              style={{
                //16 26 36
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                width: "550px",
                height: "100px",
              }}
            />
          </div>
          <div className="p-3">
            <button
              onClick="https:example.com"
              type="button"
              className="font-slab text-white bg-neutral-main-blue hover:bg-[#1b3d5e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center -mr-7 duration-300 ml-96"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
