import React, { useLayoutEffect, useRef } from "react";
import Button from "./Button";
import Blur from "./Blur";

import { PiStarFourFill } from "react-icons/pi";
import bulbImg from "../assets/imgs/bulb.webp";
import { ReactComponent as BendyLineSvg } from "../assets/svgs/bendy-line.svg";
import chainImg from "../assets/imgs/chain.webp";
import blastImg from "../assets/imgs/blast.webp";

import img1 from "../assets/imgs/boy-on-glasses.webp";
import img2 from "../assets/imgs/glow.webp";

import gsap from "gsap";

const Hero = () => {
	const scopeRef = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					opacity: 0,
					duration: 0.6,
					ease: "back.out(1.7)",
				},
			});

			tl.from(".anim-1", {
				y: 20,
				delay: 0.5,
			})
				.from(".anim-2", { y: 20 }, "-=.3 ")
				.from(".anim-3", { ease: "back.out(1.7)" }, "-=.5")
				.from(".anim-4", { y: 20 }, "-=.3")
				.from(".anim-5", { x: 50 }, "-=.3")
				.from(".anim-6", { duration: 1 },"-=.4");
		}, scopeRef);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={scopeRef}
			className="relative xl:h-[85vh] lg:pt-4 text-center lg:text-left overflow-hidden"
		>
			<Blur extraStyling="top-20 lg:top-0 left-10 " />
			<PiStarFourFill className="absolute top-[50%] right-8 w-2 h-2 md:w-4 md:h-4 md:right-auto md:left-[20rem] md:top-[70%] " />

			<h3 className="anim-5 relative font-medium lg:font-bold w-[fit-content] mx-auto lg:mx-16 lg:ml-auto mt-2 lg:mb-8 xl:text-2xl ">
				Igniting a Revolution in HR Innovation
				<BendyLineSvg className="absolute hidden xs:block right-0 lg:right-12 " />
			</h3>
			<div className="relative space-y-5 mt-16 xl:pt-24 z-[5] ">
				<hgroup className="anim-1 w-[fit-content] mx-auto lg:mx-0">
					<h1 className=" relative text-3xl xs:text-4xl lg:text-5xl xl:text-7xl ">
						<img
							src={bulbImg}
							alt=""
							className="absolute w-8 h-8 lg:w-12 lg:h-12  -top-6 lg:-top-10 right-12 lg:right-20"
						/>
						getlinked Tech
						<PiStarFourFill className="absolute -top-8  md:-top-12 w-3 h-3 md:w-6 md:h-6 lg:-top-16 " />
						<PiStarFourFill className="absolute -right-8 md:-right-16 w-3 h-3 md:w-6 md:h-6  fill-gray-700" />
					</h1>
					<h1 className="flex items-center text-3xl  xs:text-4xl lg:text-5xl xl:text-7xl ">
						<span>hackathon</span> <span className="text-pink">1.0</span>
						<img src={chainImg} alt="" className=" w-8 h-8 lg:w-12 lg:h-12" />
						<img src={blastImg} alt="" className=" w-8 h-8  lg:w-12 lg:h-12" />
					</h1>
				</hgroup>
				<p className="anim-2 w-[85%] md:max-w-md mx-auto lg:mx-0 font-medium">
					Participate in getlinked tech Hackathon 2023 stand a chance to win a
					Big prize
				</p>
				<div className="anim-3">
					<Button>Register</Button>
				</div>
			</div>

			<div className="anim-4 flex font-mono justify-center lg:justify-normal gap-x-4 mt-8  lg:mt-20">
				<p className="text-4xl lg:text-5xl">
					00<span className="text-base">h</span>
				</p>
				<p className="text-4xl lg:text-5xl">
					00<span className="text-base">m</span>
				</p>
				<p className="text-4xl lg:text-5xl">
					00<span className="text-base">s</span>
				</p>
			</div>

			<div className="anim-6 overflow-hidden relative lg:absolute grid max-w-[20rem] xl:max-w-[40rem] mt-4 mx-auto pt-4 md:pt-8  top-8 lg:top-16 xl:top-24  lg:max-w-[30rem]  lg:right-0  xl:right-16 ">
				<img
					src={img1}
					className=" col-start-1 col-end-1 row-start-1 row-end-1"
					alt="boy-on-glasses"
				/>
				<img
					src={img2}
					className="col-start-1 col-end-1 row-start-1 row-end-1 relative right-4 bottom-4"
					alt="glow"
				/>
			</div>
		</section>
	);
};

export default Hero;
