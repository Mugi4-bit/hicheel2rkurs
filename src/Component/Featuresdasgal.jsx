import React from "react";
import { features } from "../data/data";
const Featuresdasgal = () => {
  return (
    <div className="w-full mx-auto px-4 py8  flex flex-col justify-center">
      <h1 className="text-center text-3xl  mb-4 font-bold">Popular courses</h1>
      <p className="text-center text-gray-600 mb-8">
        Choose a course and start building your skills
      </p>
      <div className="flex sm:flex-col md:flex-row gap-10 rounded-xl justify-center items-center">
        <div>
          <div className="w-100 h-60 bg-gray-600"></div>
          <p className="text-purple-500 font-bold">Beginner</p>
          <h1 className="font-bold text-xl">Front end basics</h1>
          <p className="text-gray-500">
            learn HTML,CSS,JAVASCRIPT and React basics
          </p>
          <button className="bg-blue-400 w-25 h-10 rounded-xl text-white">
            join now
          </button>
        </div>
        <div>
          <div className="w-100 h-60 bg-gray-600"></div>
          <p className="text-purple-500 font-bold">Intermediate</p>
          <h1 className="font-bold text-xl">UI Design essentials</h1>
          <p className="text-gray-500">
            Understand layouts,color,spacing and user experience
          </p>
          <button className="bg-blue-400 w-25 h-10 rounded-xl text-white">
            join now
          </button>
        </div>
        <div>
          <div className="w-100 h-60 bg-gray-600"></div>
          <p className="text-purple-500 font-bold">AI level</p>
          <h1 className="font-bold text-xl">Team project practice</h1>
          <p className="text-gray-500">
            Build small projects with your classmates step by step
          </p>
          <button className="bg-blue-400 w-25 h-10 rounded-xl text-white">
            join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featuresdasgal;
