import React from "react";
import icon from "../assets/logo.svg";
import arrow from "../assets/chevron-down.svg";

const Header = () => {
	return (
		<div
			className="bg-[#F2F4F7] border border-[#d0d5dd] h-[50px]  rounded-full
     flex justify-between items-center px-[1rem] mt-[40px] w-[100%">
			<div className="flex gap-1">
				<img src={icon} alt="" className="lg:w-[16px] w-[13px]" />
				<p className="font-[500] lg:text-[12px] text-[10px] ">
					ClearLink{" "}
					<span className="text-[#1570EF] relative right-[2px]">.</span>
				</p>
			</div>
			<div className="flex justify-between lg:w-1/3 text-[#667085]">
				<div className="flex items-center gap-[6px] text-[0.65rem] lg:text-[0.75rem] cursor-pointer">
					<span>Products</span>{" "}
					<img src={arrow} alt="" width={10} className="mt-1" />{" "}
				</div>
				<div className="flex gap-[6px] items-center text-[0.65rem] lg:text-[0.75rem] cursor-pointer">
					<span>Solutions</span>{" "}
					<img src={arrow} alt="" width={10} className="mt-1" />
				</div>
				<div className="flex gap-[6px] items-center text-[10px] lg:text-[12px] cursor-pointer">
					<span>Resources</span>{" "}
					<img src={arrow} alt="" width={10} className="mt-1" />
				</div>
				<p className=" text-[10px] lg:text-[12px]">Pricing</p>
			</div>

			<div className="flex gap-[4px]">
				<button className="lg:text-[0.7rem] text-[0.6rem] lg:px-[10px] px-[0.3rem] py-[0.3rem] lg:py-[6px] bg-white rounded-full font-bold border border-[#98A2B3]">
					Talk to sales
				</button>
				<button className="lg:text-[0.7rem] text-[0.6rem] lg:px-[10px] px-[0.3rem] py-[0.3rem] lg:py-[6px] bg-[#175CD3] box-shadow-[ 0px 1px 2px 0px rgba(16, 24, 40, 0.05)] text-white rounded-full font-bold border border-[#98A2B3]">
					Sign up for free
				</button>
			</div>
		</div>
	);
};

export default Header;
