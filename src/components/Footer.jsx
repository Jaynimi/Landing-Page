import React from "react";
import icon from "../assets/logo.svg";
import playstore from "../assets/Mobile app store badge.svg";
import app from "../assets/Mobile app store badge (1).svg";
import linkedIn from "../assets/Social icon.svg";
import twitter from "../assets/Social icon (1).svg";
import facebook from "../assets/Social icon (2).svg";
import instagram from "../assets/Social icon (6).svg";
import github from "../assets/Social icon (3).svg";
import youtube from "../assets/Social icon (5).svg";

const Footer = () => {
	return (
		<>
			<div className="mt-[60px] mx-auto w-[75%]">
				<div className="flex gap-[80px] ">
					<section className="flex flex-col gap-4 w-[300px]">
						<div className="flex gap-1">
							<img src={icon} alt="" className="w-[16px]" />
							<p className="font-[500] text-[12px]">
								ClearLink{" "}
								<span className="text-[#1570EF] relative right-[2px]">.</span>
							</p>
						</div>
						<p className="text-[#475467] text-[10px]">
							ClearLink is your gateway to effortless, high-quality video
							conferencing. Join us in shaping the future of communication!
						</p>
					</section>

					<section className="flex flex-col gap-2">
						<span className="text-[#475467] text-[10px] ">Product</span>
						<ul className="text-[#475467] font-bold text-[11px] flex flex-col gap-2">
							<li>Overview</li>
							<li>Features</li>
							<li>Solutions</li>
							<li>Tutorials</li>
							<li>Pricing</li>
						</ul>
					</section>

					<section className="flex flex-col gap-2">
						<span className="text-[#475467] text-[10px] ">Company</span>
						<ul className="text-[#475467] font-bold text-[11px] flex flex-col gap-2">
							<li>About us</li>
							<li>Careers</li>
							<li>Press</li>
							<li>News</li>
							<li>Contact</li>
						</ul>
					</section>

					<section className="flex flex-col gap-2">
						<span className="text-[#21529c] text-[10px] ">Resources</span>
						<ul className="text-[#475467] font-bold text-[11px] flex flex-col gap-2">
							<li>Blog</li>
							<li>Events</li>
							<li>Help center</li>
							<li>Tutorials</li>
							<li>Support</li>
						</ul>
					</section>

					<section className="flex flex-col gap-2">
						<span className="text-[#475467] text-[10px] ">Legal</span>
						<ul className="text-[#475467] font-bold text-[11px] flex flex-col gap-2">
							<li>Terms</li>
							<li>Privacy</li>
							<li>Cookies</li>
							<li>Licenses</li>
							<li>Contact</li>
						</ul>
					</section>

					<section className="flex flex-col gap-2">
						<span className="text-[10px] font-bold text-[#175CD3]">
							Get the app
						</span>
						<img src={playstore} alt="" />
						<img src={app} alt="" />
					</section>
				</div>
			</div>

			<section className="bg-[#F9FAFB] w-[100vw]">
				<div className="flex w-[80%] mx-auto items-center mt-[30px] justify-between p-[20px]">
					<span className="text-[10px] text-[#475467]">
						&copy; 2023 ClearLink. All rights reserved.
					</span>
					<div className="flex gap-3">
						<img src={linkedIn} alt="" />
						<img src={twitter} alt="" />
						<img src={facebook} alt="" />
						<img src={instagram} alt="" />
						<img src={github} alt="" />
						<img src={youtube} alt="" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
