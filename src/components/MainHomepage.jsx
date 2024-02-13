import React from "react";
import sky from "../assets/images/purple-sky.jpeg";
import { useNavigate } from "react-router-dom";

export default function MainHomepage() {
  const navigate = useNavigate();
  function move() {
    navigate("/thankful");
  }
  return (
    <div>
      <div className="h-[55rem] sm:h-[100vh] w-[90rem] sm:w-[100vw] relative">
        <img className="h-full w-full object-cover" src={sky} alt="" />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <h1 className="font-sono text-center text-white text-[2.5rem] font-[800] mb-[2rem]">
            Happy valentine's day to you Ihunanya
          </h1>
          <button
            onClick={move}
            className="bg-[#7B287D] sm:text-center px-[5rem] sm:w-[10rem] sm:px-[1rem] text-white text-[1.3rem] font-[600] py-[1rem] sm:py-[1rem] rounded-[10px] flex m-auto sm:grid"
          >
            Open This
          </button>
        </div>
      </div>
    </div>
  );
}
