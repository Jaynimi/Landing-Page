import React from "react";
import Header from "./Header";
import ai from "../assets/Frame 10.svg";
import img1 from "../assets/Avatar.svg";
import img2 from "../assets/Avatar (1).svg";
import img3 from "../assets/Avatar (2).svg";
import img4 from "../assets/Avatar (3).svg";
import star from "../assets/Star icon.svg";
import img5 from "../assets/image 21.svg";
import img6 from "../assets/image 100.svg";
import img7 from "../assets/image 8.svg";
import img8 from "../assets/image 72.svg";
import img9 from "../assets/image 108.svg";
import img10 from "../assets/image 103.svg";
import message from "../assets/message-text-circle-02.svg";
import microphone from "../assets/microphone-01.svg";
import video from "../assets/video-recorder.svg";
import settings from "../assets/settings-01.svg";
import face from "../assets/face-smile.svg";
import monitor from "../assets/monitor-01.svg";
import shopify from "../assets/Shopify.com svg.svg";
import coinbase from "../assets/Coinbase svg.svg";
import marvel from "../assets/Marvel svg.svg";
import automatic from "../assets/Automattic svg.svg";
import dropbox from "../assets/Dropbox svg.svg";
import intercom from "../assets/Intercom svg.svg";
const Hero = () => {
  return (
    <div className="flex w-[75%] mx-auto flex-col gap-[50px] hero">
      <Header />

      <section className="flex justify-between mt-[20px]">
        <div className="flex flex-col gap-[40px]">
          <h1 className="text-[#1D2939] font-bold text-[2.5rem]">
            Uniting the world, <br />{" "}
            <span className="relative bottom-2">one video call at a time</span>
          </h1>
          <p className="text-[#667085]">
            Experience the future of communication with ClearLink – <br />
            <span>
              where crystal-clear video conferencing meets <br /> unparalleled
              simplicity.
            </span>
          </p>
          <div className="flex gap-[20px]">
            <button className="text-[12px] px-[10px] py-[6px] bg-[#175CD3] shadow-md text-white rounded-full font-bold border border-[#98A2B3]">
              Start your free trial
            </button>
            <div className="flex gap-[6px] w-[150px] items-center text-[12px]">
              <img src={ai} alt="" />
              <span className="text-[#175CD3]">Discover AI assistant</span>
            </div>
          </div>
          <div className="flex gap-[4px]">
            <div className="flex">
              <img src={img1} alt="" />
              <img src={img2} alt="" className="relative right-3" />
              <img src={img3} alt="" className="relative right-6" />
              <img src={img4} alt="" className="relative right-9" />
              <img src={img1} alt="" className="relative right-12" />
            </div>

            <div className="flex flex-col ">
              <div className="flex relative right-12 gap-1 items-center">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />

                <span className="text-[10px] font-bold text-[#475467]">
                  5.0
                </span>
              </div>
              <span className="relative right-12 text-[12px] text-[#475467]">
                From 3,000+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] bg-[#EFF8FF] border border-[#B2DDFF] shadow-md h-fit rounded-lg p-4">
          <div className="grid gap-4 grid-cols-3 ">
            <div className="bg-orange-500 rounded-md"><img src={img5} alt="" className="relative top-[8.5px]"/></div>
            <div className="bg-purple-300 rounded-md"><img src={img6} alt="" className="relative top-[4.5px]" /></div>
            <div className="bg-green-400 rounded-md"><img src={img7} alt="" /></div>
            <div className="bg-purple-200 rounded-md"><img src={img8} alt="" className="relative top-[4px]"/></div>
            <div className="bg-yellow-300 rounded-md"><img src={img9} alt="" /></div>
            <div className="bg-pink-300 rounded-md"><img src={img10} alt="" /></div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-white rounded-[50%] p-1 border border-[#D1E9FF]">
              <img src={microphone} alt="" />
            </div>
            <div  className="bg-white rounded-[50%] p-1 border border-[#D1E9FF]">
              <img src={video} alt="" />
            </div>
            <div  className="bg-white rounded-[50%] p-1 border border-[#D1E9FF]">
              <img src={monitor} alt="" />
            </div>
            <div  className="bg-white rounded-[50%] p-1 border border-[#D1E9FF]">
              <img src={face} alt="" />
            </div>
            <div  className="bg-white rounded-[50%] p-1 border border-[#D1E9FF]">
              <img src={message} alt="" />
            </div>
            <div  className="bg-white rounded-[50%] p-1 border border-[#D1E9FF]">
              <img src={settings} alt="" />
            </div>
          </div>
        </div>
      </section>

      <p className="text-center text-[#475467] text-[16px] ">Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className="flex gap-[69px] ">
        <img src={shopify} alt="" /> 
        <img src={coinbase} alt="" /> 
        <img src={dropbox} alt="" /> 
        <img src={intercom} alt="" /> 
        <img src={marvel} alt="" /> 
        <img src={automatic} alt="" /> 
      </div>
    </div>
  );
};

export default Hero;
