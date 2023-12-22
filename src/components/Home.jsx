import React, { useState } from "react";
import { Link } from "react-router-dom";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";
import arrival1 from "../assets/arrival1.jpg";
import arrival2 from "../assets/arrival2.jpg";
import arrival3 from "../assets/arrival3.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Home = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handlePrevClick = () => {
    setActiveItem((prevItem) => (prevItem - 1 + 5) % 5);
  };

  const handleNextClick = () => {
    setActiveItem((prevItem) => (prevItem + 1) % 5);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500 text-white">
      <div className="relative w-full h-96 md:h-2/3 overflow-hidden">
        {[carousel1, carousel2, carousel3, carousel4, carousel5].map(
          (carousel, index) => (
            <div
              key={index}
              className={`${
                index === activeItem ? "" : "hidden"
              } duration-200 ease-linear`}
              data-carousel-item={index === activeItem ? "active" : ""}
            >
              <img
                src={carousel}
                className="absolute inset-0 w-full h-full object-cover shadow-lg"
                alt={`Carousel ${index + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
          )
        )}

        <button
          type="button"
          className="absolute top-1/2 start-0 z-30 transform -translate-y-1/2 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaAngleLeft className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-1/2 end-0 z-30 transform -translate-y-1/2 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <FaAngleRight className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" />
            <span className="sr-only">Next</span>
          </span>
        </button>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="mt-4 text-2xl font-bold text-center">
            Shop with us for best pairs
          </p>
          <Link
            to="/your-path"
            className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="mt-10 container mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-semibold text-white mb-6">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[arrival1, arrival2, arrival3].map((product, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <img
                className="h-48 w-full object-cover rounded-t-lg shadow-sm"
                src={product}
                alt={`Product ${index + 1}`}
              />
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Latest Arrival
                </h3>

                <div className="mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
