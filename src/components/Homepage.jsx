import React from "react";
import nanya1 from "../assets/images/nanya1.jpeg";
import nanya4 from "../assets/images/nanya4.jpeg";
import nanya5 from "../assets/images/nanya5.jpeg";
import nanya6 from "../assets/images/nanya6.jpeg";
import nanya7 from "../assets/images/nanya7.jpeg";
import nanya8 from "../assets/images/nanya8.jpeg";
import nanya9 from "../assets/images/nanya9.jpeg";
import nanya10 from "../assets/images/nanya10.jpeg";
import nanya11 from "../assets/images/nanya11.jpeg";
import nanya12 from "../assets/images/nanya12.jpeg";
import chava1 from "../assets/images/Chava.jpeg";
import chava2 from "../assets/images/Chava1.jpeg";
import chava from "../assets/images/Chava2.jpeg";
import chava3 from "../assets/images/Chava4.jpeg";
import calls from "../assets/images/calls.jpeg";
import calls1 from "../assets/images/calls1.jpeg";
import nanyavid from "../assets/images/nanyavid.mp4";
import iMessage from "../assets/images/iMessage.jpeg";

export default function Homepage() {
  return (
    <div className="text-center font-ubuntu uppercase text-[1.5rem] px-[10rem] sm:px-0 bg-gradient-to-r from-[#610F7F] via-[#662C91] to-[#2d0045]">
      <h1 className="bg-[#FFB30F] py-[2rem] sm:px-[3rem] text-white">
        Happy valentine's day mi amor! ❤️
      </h1>
      <div className="h-[30rem] w-[25rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full object-cover" src={nanya5} alt="" />
      </div>
      <h1 className="bg-[#FE5F55] py-[2rem] text-white">Thank you for YOU 🥰</h1>
      <div className="h-[30rem] w-[25rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full object-cover" src={nanya1} alt="" />
      </div>
      <h1 className="bg-[#7D7C84] py-[2rem] text-white px-[0.7rem]">
        Thank you for the couple few months, brief as they have been, I've
        enjoyed every bit 😂
      </h1>
      <div className="h-[30rem] w-[25rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full object-cover" src={nanya7} alt="" />
      </div>
      <h1 className="bg-[#F46197] py-[2rem] text-white">
        Thank you for Chava, you birthed a princess 👨🏾‍🍼
      </h1>
      <marquee behavior="up" direction="">
        <div className="flex gap-[2rem]">
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya8} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={chava} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={chava1} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={chava2} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={chava3} alt="" />
        </div>
      </marquee>
      <h1 className="bg-[#273C2C] py-[2rem] text-white">
        Thank you for the conversations 🫂
      </h1>
      <marquee behavior="" direction="">
        <div className="flex gap-[2rem]">
        <img className="h-[30rem] w-[20rem]" src={calls} alt="" />
        <img className="h-[30rem] w-[20rem]" src={calls1} alt="" />
        </div>
      </marquee>
      <h1 className="bg-[#041B15] py-[2rem] px-[1rem] text-white">
        Thank you for letting me win at iMessage games 😘
      </h1>
      <div className="h-[30rem] w-[25rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full object-cover" src={iMessage} alt="" />
      </div>
      <h1 className="bg-[#046E8F] py-[2rem] text-white">
        Thank you for being really pretty, e no easy 😻
      </h1>
      <marquee behavior="" direction="">
        <div className="flex gap-[2rem]">
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya8} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya6} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya9} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya4} alt="" />
        </div>
      </marquee>
      <h1 className="bg-[#6F732F] py-[2rem] text-white">
        Listening to you talk is so bliss 🥹
      </h1>
      <div className="h-[30rem] w-[20rem] flex m-auto">
        <video src={nanyavid} className="w-full h-full object-cover"></video>
      </div>
      <h1 className="bg-[#3C1742] py-[2rem] px-[1rem] text-white">
        Thank you for everything our cat woman 😹
      </h1>
      <marquee behavior="" direction="">
        <div className="flex gap-[2rem]">
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya12} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya10} alt="" />
        <img className="h-[30rem] w-[30rem] object-cover" src={nanya11} alt="" />
        </div>
      </marquee>
      <h2 className="bg-[#03120E] py-[2rem] sm:px-[1.5rem] text-white">Here's to hoping we celebrate the next together 😘 ❤️ 👩‍❤️‍💋‍👨 ❤️‍🔥</h2>
    </div>
  );
}
