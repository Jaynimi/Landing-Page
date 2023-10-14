import React from "react";
import icon from "../assets/logo.svg";
import arrow from "../assets/chevron-down.svg";

const Header = () => {
  return (
    <div
      className="bg-[#F2F4F7] border border-[#d0d5dd] h-[50px]  rounded-full
     flex justify-between items-center px-[1rem] mt-[40px]"
    >
      <div className="flex gap-1">
        <img src={icon} alt="" className="w-[16px]" />
        <p className="font-[500] text-[12px]">
          ClearLink{" "}
          <span className="text-[#1570EF] relative right-[2px]">.</span>
        </p>
      </div>
      <div className="flex gap-[40px] text-[#667085]">
        <div className="flex gap-[6px] items-center text-[12px] cursor-pointer">
          <span>Products</span>{" "}
          <img src={arrow} alt="" width={10} className="mt-1" />{" "}
        </div>
        <div className="flex gap-[6px] items-center text-[12px] cursor-pointer">
          <span>Solutions</span>{" "}
          <img src={arrow} alt="" width={10} className="mt-1" />
        </div>
        <div className="flex gap-[6px] items-center text-[12px] cursor-pointer">
          <span>Resources</span>{" "}
          <img src={arrow} alt="" width={10} className="mt-1" />
        </div>
        <p className="text-[12px]">Pricing</p>
      </div>

      <div className="flex gap-[4px]">
        <button className="text-[12px] px-[10px] py-[6px] bg-white rounded-full font-bold border border-[#98A2B3]">
          Talk to sales
        </button>
        <button className="text-[12px] px-[10px] py-[6px] bg-[#175CD3] box-shadow-[ 0px 1px 2px 0px rgba(16, 24, 40, 0.05)] text-white rounded-full font-bold border border-[#98A2B3]">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Header;
