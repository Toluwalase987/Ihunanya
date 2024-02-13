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
import calls from "../assets/images/calls.jpeg";
import calls1 from "../assets/images/calls1.jpeg";
import nanyavid from "../assets/images/nanyavid.mp4";
import iMessage from "../assets/images/iMessage.jpeg";
import Marquee from "react-fast-marquee";
import { call, catwoman, chava } from "../assets/data";
import { pretty } from "../assets/data";

export default function Homepage() {
  return (
    <div className="text-center font-ubuntu uppercase text-[1.5rem] px-[10rem] sm:px-0 bg-gradient-to-r from-[#610F7F] via-[#662C91] to-[#2d0045]">
      <h1 className="bg-[#FFB30F] py-[2rem] sm:px-[3rem] text-white">
        Happy valentine's day mi amor! ❤️
      </h1>
      <div className="h-[40rem] w-[30rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full object-cover" src={nanya5} alt="" />
      </div>
      <h1 className="bg-[#FE5F55] py-[2rem] text-white">
        Thank you for YOU 🥰
      </h1>
      <div className="h-[40rem] w-[30rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full object-cover" src={nanya1} alt="" />
      </div>
      <h1 className="bg-[#7D7C84] py-[2rem] text-white px-[0.7rem]">
        Thank you for the couple few months, brief as they have been, I've
        enjoyed every bit 😂
      </h1>
      <div className="h-[40rem] w-[30rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full object-cover" src={nanya7} alt="" />
      </div>
      <h1 className="bg-[#F46197] py-[2rem] text-white">
        Thank you for Chava, you birthed a princess 👨🏾‍🍼
      </h1>
      <Marquee speed={50} className="flex gap-[10rem] overflow-hidden">
        {chava.map((chava, index) => {
          return (
            <div key={index} className="h-[40rem] w-[30rem] mx-[1rem]">
              <img
                className="h-full w-full object-cover"
                src={chava.image}
                alt=""
              />
            </div>
          );
        })}
      </Marquee>
      <h1 className="bg-[#273C2C] py-[2rem] text-white">
        Thank you for the conversations 🫂
      </h1>
      <Marquee speed={50} className="flex gap-[10rem] overflow-hidden">
          {call.map((call, index) => {
            return (
              <div key={index} className="h-[30rem] w-[20rem] mx-[1rem]">
                <img className="h-full w-full" src={call.image} alt="" />
              </div>
            );
          })}
        </Marquee>
      <h1 className="bg-[#262A10] py-[2rem] px-[1rem] text-white">
        Thank you for letting me win at iMessage games 😘
      </h1>
      <div className="h-[40rem] w-[20rem] sm:w-[22rem] flex m-auto">
        <img className="w-full h-full " src={iMessage} alt="" />
      </div>
      <h1 className="bg-[#519872] py-[2rem] text-white">
        Thank you for being really pretty, e no easy 😻
      </h1>
      <Marquee speed={50} className="flex gap-[10rem] overflow-hidden">
        {pretty.map((pretty, index) => {
          return (
            <div key={index} className="h-[40rem] w-[30rem] mx-[1rem]">
              <img
                className="h-full w-full object-cover"
                src={pretty.image}
                alt=""
              />
            </div>
          );
        })}
      </Marquee>
      <h1 className="bg-[#3C1742] py-[2rem] px-[1rem] text-white">
        Thank you for everything our cat woman 😹
      </h1>
      <Marquee speed={50} className="flex gap-[10rem] overflow-hidden">
        {catwoman.map((cat, index) => {
          return (
            <div key={index} className="h-[40rem] w-[30rem] mx-[1rem]">
              <img
                className="h-full w-full object-cover"
                src={cat.image}
                alt=""
              />
            </div>
          );
        })}
      </Marquee>
      <h2 className="bg-[#03120E] py-[2rem] sm:px-[1.5rem] text-white">
        Here's to hoping we celebrate the next together 😘 ❤️ 👩‍❤️‍💋‍👨 ❤️‍🔥
      </h2>
    </div>
  );
}
