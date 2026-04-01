import React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
// Logo
// Sign Up Login
// Home Products Solutions Pricing Contact
const Nav = () => {
  const [activeLink, setActiveLink] = useState("true");
  return (
    <div>
      <div className="bg-amber-100 shadow-sm p-2 flex justify-between items-center">
        <div className="flex items-center">
          {activeLink ? (
            <HiX
              onClick={() => setActiveLink(false)}
              className="w-8 h-8 md:hidden"
            />
          ) : (
            <HiMenu
              onClick={() => setActiveLink(true)}
              className="w-8 h-8 md:hidden"
            />
          )}

          <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
        </div>
        <div className="flex sm:hidden md:block">
          <div className="flex gap-3">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="">Solution</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-white w-25 h-10 rounded-xl">Sign Up</button>
          <button className="bg-[#8b3dff] w-25 h-10 rounded-xl text-white">
            Login
          </button>
        </div>
      </div>
      {activeLink && (
        <div className="flex flex-col md:hidden md:block bg-amber-100 shadow-sm w-25 p-4">
          <a href="#">Home</a>
          <a href="#">product</a>
          <a href="#">solution</a>
          <a href="#">pricing</a>
          <a href="#">contact</a>
        </div>
      )}
    </div>
  );
};

export default Nav;
