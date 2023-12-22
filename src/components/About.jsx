import React from "react";
import heroImage from "../assets/heroImage.jpg";
import aboutImage from "../assets/about1.webp";


const About = () => {
  return (
    <div className="bg-gray-500 min-h-screen text-white">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-7/12">
            <img
              className="w-full h-full rounded-md object-cover"
              src={aboutImage}
              alt="About Us"
            />
          </div>

          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-10">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. In the
              first place, we have granted to God, and by this present charter
              confirmed for us and our heirs forever that the English Church
              shall be free, and shall have her rights entire, and her liberties
              inviolate; and we will that it be thus observed; which is apparent
              from
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-7/12 lg:order-2">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4">
              <div className="p-4 pb-6 flex flex-col items-center">
                <img
                  className="w-full h-full rounded-md object-cover"
                  src={heroImage}
                  alt="Asjedh"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Founder
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:order-1 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-10">
              About Us
            </h1>
            <p className="font-normal text-base leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. In the
              first place, we have granted to God, and by this present charter
              confirmed for us and our heirs forever that the English Church
              shall be free, and shall have her rights entire, and her liberties
              inviolate; and we will that it be thus observed; which is apparent
              from
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
