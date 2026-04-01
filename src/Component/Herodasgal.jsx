import React from "react";
import { useState } from "react";

import HeroImage from "../assets/DJI_0796.jpg";
import { HiStar, HiArrowSmRight } from "react-icons/hi";
const Herodasgal = () => {
  return (
    <div className="w-full md:flex-row flex sm:flex-col py-8 px-4">
      <div className="sm:w-full md:w-1/2 ">
        <div className="flex items-center gap-2 w-fit p-4 bg-gray-150 text-xl">
          <span className="text-purple-500 font-bold">
            Start learning today
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Improve your skills with online courses
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-8 w-2/3">
          learn programming, design and teamwork with simple projects and clear
          lessons for begginers
        </p>
        <div className="mt:8 p-4 flex gap-4 w-2/3">
          <button className="bg-blue-600  text-white px-8 py-4 rounded-xl">
            Get started
          </button>
          <button className="bg-white-600  text-black px-8 py-4 shadow-lg rounded-xl">
            View courses
          </button>
        </div>
      </div>

      <div className="sm:full md:w-1/2 flex justify-center  items-center ">
        <img src={HeroImage} alt="" className="w-5/6 rounded-xl w-200 h-125" />
      </div>
    </div>
  );
};

export default Herodasgal;
