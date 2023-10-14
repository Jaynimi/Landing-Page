import React from "react";
import minus from "../assets/minus-circle.svg";
import plus from "../assets/plus-circle.svg";

const Support = () => {
  return (
    <div className="w-[75%] mx-auto flex justify-between">
      <section className=" flex flex-col gap-1">
        <p className="text-[#175CD3] text-[12px] font-bold">Support</p>
        <h1 className="text-[#1D2939] font-bold text-[1.5rem]">FAQS</h1>
        <p className="text-[#667085] text-[12px]">
          Everything you need to know about the product <br /> and billing.
          Can’t find the answer you’re looking <br /> for?{" "}
          <a href="/" className="border-b-[2px] border-b-gray-300">
            Please chat to our friendly team
          </a>
          .
        </p>
      </section>

      <section className="">
        <div className="flex w-[500px] items-start justify-between border border-[#EAECF0] rounded-md p-[32px]  bg-[#F9FAFB]">
          <div >
            <p className="font-bold text-[13px] mb-2 w-[400px] text-[#1D2939]">
              How many participants can join a ClearLink video conference?
            </p>
            <p className="text-[#667085] w-[420px] text-[10px]">
              How many participants can join a ClearLink video conference?
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>
          <img src={minus} alt="" className="cursor-pointer" />
        </div>

        <div className="border-b p-[20px] flex justify-between items-center">
          <p className="font-bold text-[14px] text-[#1D2939]">
            Can I use ClearLink on multiple devices?
          </p>
          <img src={plus} alt="" className="cursor-pointer" />
        </div>
        <div className="border-b p-[20px] flex justify-between items-center">
          <p className="font-bold text-[14px] text-[#1D2939]">
            Is ClearLink compatible with other video conferencing platforms?
          </p>
          <img src={plus} alt="" className="cursor-pointer" />
        </div>
        <div className="border-b p-[20px] flex justify-between items-center">
          <p className="font-bold text-[14px] text-[#1D2939]">
            How does ClearLink ensure the security of my video conferences?
          </p>
          <img src={plus} alt="" className="cursor-pointer" />
        </div>

        <div className="border-b p-[20px] flex justify-between items-center">
          <p className="font-bold text-[14px] text-[#1D2939]">
            Do I need to download any software to use ClearLink?
          </p>
          <img src={plus} alt="" className="cursor-pointer" />
        </div>
        <div className="border-b p-[20px] flex justify-between items-center">
          <p className="font-bold text-[14px] text-[#1D2939]">
            What kind of customer support does ClearLink provide?
          </p>
          <img src={plus} alt="" className="cursor-pointer" />
        </div>
      </section>
    </div>
  );
};

export default Support;
