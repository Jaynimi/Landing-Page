import React from "react";
import video from "../assets/video-recorder.svg";
import calender from "../assets/calendar.svg";
import lock from "../assets/lock-unlocked-04.svg";
import record from "../assets/recording-01.svg";
import img from "../assets/Rectangle 1.svg";
import arrow from "../assets/Hand-drawn arrow.svg";

const Why = () => {
  return (
    <div className="flex justify-between mx-auto w-[75%]">
      <div className="">
        <div className="mb-[50px] mt-[100px]">
          <p className="text-[#175CD3] text-[12px] font-bold">
            The ClearLink Advantage
          </p>
          <h1 className="text-[#1D2939] text-[2rem] font-bold">
            Why choose ClearLink?
          </h1>
          <p className="text-[12px] text-[#667085]">
            In a world where connection is everything, ClearLink takes the lead.{" "}
            <br /> Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[40px]">
          <div className="flex flex-col items-start gap-[6px]">
            <img
              src={video}
              alt=""
              className="bg-[#F9FAFB] rounded-[50%] p-1 border border-[#EAECF0]"
            />
            <h5 className="text-[#1D2939] text-[1rem] font-bold">Crystal-clear HD video</h5>
            <p className="text-[12px] text-[#667085] w-[250px]">
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[6px]">
            <img
              src={record}
              alt=""
              className="bg-[#F9FAFB] rounded-[50%] p-1 border border-[#EAECF0]"
            />
            <h5 className="text-[#1D2939] text-[1rem] font-bold">Noise-canceling audio</h5>
            <p className="text-[12px] text-[#667085] w-[250px]">
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[6px]">
            <img
              src={calender}
              alt=""
              className="bg-[#F9FAFB] rounded-[50%] p-1 border border-[#EAECF0]"
            />
            <h5 className="text-[#1D2939] text-[1rem] font-bold">Scheduling made easy</h5>
            <p className="text-[12px] text-[#667085] w-[250px]">
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[6px]">
            <img
              src={lock}
              alt=""
              className="bg-[#F9FAFB] rounded-[50%] p-1 border border-[#EAECF0]"
            />
            <h5 className="text-[#1D2939] text-[1rem] font-bold">Bank-grade security</h5>
            <p className="text-[12px] text-[#667085] w-[250px]">
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[70px]">
        <img src={arrow} alt="" className="relative top-[48px] right-8 z-50"/>
        <img src={img} alt="" className="relative bottom-[70px]"/>
      </div>
    </div>
  );
};

export default Why;
