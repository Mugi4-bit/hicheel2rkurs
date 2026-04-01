import React from "react";

const Whychooseus = () => {
  return (
    <div className="w-full mx-auto px-4 py8  flex flex-col justify-center mt-20">
      <h1 className="text-center text-3xl  mb-4 font-bold">Why Choose us</h1>
      <p className="text-center text-gray-600 mb-8">
        We help student learn with confidence
      </p>
      <div className="flex sm:flex-col md:flex-row gap-10 rounded-xl justify-center items-center">
        <div>
          <div className=" flex w-100  text-7xl justify-center item-center">
            📚
          </div>
          <h1 className=" flex justify-center mt-5 font-bold text-xl">
            Easy lessons
          </h1>
          <p className="  flex justify-center text-gray-500">
            Simple and clear lessons for students who are just starting
          </p>
        </div>
        <div>
          <div className=" flex w-100  text-7xl justify-center item-center">
            👩‍🏫
          </div>
          <h1 className=" flex justify-center mt-5 font-bold text-xl">
            Friendly Teachers
          </h1>
          <p className=" flex justify-center text-gray-500">
            Supportive Teachers who explain step by step
          </p>
        </div>
        <div>
          <div className=" flex w-100  text-7xl justify-center item-center">
            💻
          </div>
          <h1 className=" flex justify-center mt-5 font-bold text-xl">
            Practice Projects
          </h1>
          <p className="flex justify-center text-gray-500">
            Students build real small projects after each lesson
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
