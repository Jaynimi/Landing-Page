import React from "react";
import shopify from "../assets/Shopify.com svg.svg";
import star from "../assets/Star icon.svg";
import img1 from "../assets/Image.svg";
import img2 from "../assets/Image (1).svg";
import img3 from "../assets/Image (2).svg";
import img4 from "../assets/Image (3).svg";
import img5 from "../assets/Image (4).svg";
import avatar from "../assets/Avatar (5).svg";
import left from "../assets/_Testiomonial carousel arrow.svg";
import right from "../assets/_Testiomonial carousel arrow (1).svg";

const Upgrade = () => {
  return (
    <div className="bg-[#F9FAFB] relative bottom-16 h-fit w-[75%] flex justify-between mx-auto p-[40px]">
      <div>
        <div className="flex flex-col gap-[20px]">
          <img src={shopify} alt="" className="w-[60px]"/>
          <div className="flex gap-1">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>

        <h1 className="text-[1rem] mt-4 text-[#101828] font-bold w-[400px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h1>

        <div className="mt-8 items-center flex justify-between">
          <div className="text-[10px] flex gap-4">
          <img src={avatar} alt="" />

            <div>
                    <h6 className="text-[#101828] font-bold">Sarah Thompson</h6>
                <p className="text-[#475467]">Project Manager, Shopify</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src={left} alt="" className="cursor-pointer" />
            <img src={right} alt="" className="cursor-pointer"/>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-col justify-center items-center">
        <div className="flex gap-3 items-end">
            <img src={img2} alt="" />
            <img src={img1} alt="" />
        </div>
        <div className="flex gap-3 items-start">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
