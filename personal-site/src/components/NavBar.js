import React from "react";
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet";

const NavBar = () => {
  const navigateToLink = () => {
    window.location.href = "https://www.instagram.com/nature_photodump/"; // Replace with the actual URL
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 pt-7">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="max-w-screen-xl mx-auto">
        <nav
          className="rounded-xl"
          style={{
            //16 26 36
            background: "rgba(255, 255, 255, 0.2)", // Adjust opacity as needed
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-4">
            <a href="https://example.com/" className="flex items-center">
              <img
                src={logo}
                className="h-10 w-10 mr-3"
                alt="Wild Frame Logo"
              />
              <div className="pl-4 flex-col">
                <span className="font-slab text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Wild Frame
                </span>
              </div>
            </a>
            <div className="flex md:order-2">
              <button
                onClick={navigateToLink}
                type="button"
                className="font-slab text-white bg-[#167d7f] hover:bg-[#6fb2b3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#167d7f] dark:hover:bg-[#6fb2b3] dark:focus:ring-blue-800 duration-300"
              >
                View All Work
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <a
                    href="https://example.com"
                    className="font-slab block py-2 pl-3 pr-4 text-white bg-[#167d7f] rounded md:bg-transparent md:text-cyan-700 md:p-0 md:dark:text-cyan-600"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    className="font-slab block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-cyan-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    className="font-slab block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-cyan-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                  >
                    Best Work
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    className="font-slab block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-cyan-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com"
                    className="font-slab block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-cyan-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
