import React from "react";

const Footerdasgal = () => {
  return (
    <div className="flex w-full h-full bg-indigo-500 md:flex-row sm:flex-col md:gap-200 items-center">
      <div className="text-white ml-30">
        <h1 className="font-bold text-xl">EduSmart</h1>
        <p>Learn simply.Build confidently</p>
      </div>
      <div className="flex flex-row gap-5 text-white">
        <a href="">About us</a>
        <a href="">Courses</a>
        <a href="">Blog</a>
        <a href="">Help center</a>
        <a href="">Privacy policy</a>
      </div>
    </div>
  );
};

export default Footerdasgal;
