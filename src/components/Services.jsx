import React from "react";
import delivery from "../assets/delivery.png";
import cashon from "../assets/cashdelivery.jpg";
import support from "../assets/support.jpeg";

const Services = () => {
  return (
    <div className="bg-gray-800 text-black p-8 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src={delivery}
            className="w-full h-40 object-cover mb-4 rounded-lg"
            alt="Fast Delivery"
          />
          <h2 className="text-xl font-semibold mb-4">Fast Delivery</h2>
          <p className="text-gray-600 mb-4">
            Enjoy quick and reliable delivery to your doorstep.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src={cashon}
            className="w-full h-40 object-cover mb-4 rounded-lg"
            alt="Cash on Delivery"
          />
          <h2 className="text-xl font-semibold mb-4">Cash on Delivery</h2>
          <p className="text-gray-600 mb-4">
            Conveniently pay upon receiving and checking your product.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className="bg-gray-200 rounded-lg shadow p-6 flex flex-col items-center">
          <img
            src={support}
            className="w-full h-40 object-cover mb-4 rounded-lg"
            alt="24/7 Support"
          />
          <h2 className="text-xl font-semibold mb-4">24/7 Support</h2>
          <p className="text-gray-600 mb-4">
            Reach out to our team members anytime for assistance.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
