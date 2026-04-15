import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
// Logo
// Sign Up Login
// Home Products Solutions Pricing Contact
const Topbar = () => {
  const [activeLink, setActiveLink] = useState("true");
  return (
    <div>
      <div className="bg-black shadow-sm p-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-extrabold text-green-500 text-xl md:ml-20">
            FitZone
          </div>
        </div>
        <div className="flex sm:hidden md:block text-white">
          <div className="flex gap-3">
            <a href="#">Home</a>
            <a href="#">Programs</a>
            <a href="">Trainers</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-4 mr-60 md:block sm:hidden">
          <button className="bg-green-500 w-25 h-10 rounded-xl">
            Join now
          </button>
        </div>
        {activeLink ? (
          <HiX
            onClick={() => setActiveLink(false)}
            className="w-8 h-8 md:hidden text-white"
          />
        ) : (
          <HiMenu
            onClick={() => setActiveLink(true)}
            className="w-8 h-8 md:hidden text-white"
          />
        )}
      </div>
      {activeLink && (
        <div className="flex flex-col md:hidden md:block bg-black shadow-sm  p-4 text-white">
          <a href="#">Home</a>
          <a href="#">Programs</a>
          <a href="#">Trainers</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Topbar;
