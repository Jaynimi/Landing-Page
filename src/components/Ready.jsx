import React from "react";
import check from "../assets/Check icon.svg";
import mockup from "../assets/3_2 screen mockup.svg";

const Ready = () => {
  return (
    <div className="mt-[60px] w-[75%] mx-auto flex justify-between">
      <div className="flex flex-col gap-6">
          <h1 className="text-[#101828] text-[2rem] font-bold">Ready to clear the path to  <br /> perfect communication?</h1>
          <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img src={check} alt="" />
                <p className="text-[#475467] text-[12px]">30 days free trial</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={check} alt="" />
                <p className="text-[#475467] text-[12px]">Cancel at any time</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={check} alt="" />
                <p className="text-[#475467] text-[12px]">Access to all features</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={check} alt="" />
                <p className="text-[#475467] text-[12px]">Access to all features</p>
              </div>
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

      <div>
        <img src={mockup} alt="" />
      </div>
    </div>
  );
};

export default Ready;
