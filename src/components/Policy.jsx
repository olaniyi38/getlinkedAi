import { HiCheckCircle } from "react-icons/hi";
import Button from "./Button";
import { ReactComponent as LockSvg } from "../assets/svgs/lock.svg";
import { ReactComponent as UnlockSvg } from "../assets/svgs/unlock.svg";
import Blur from "./Blur";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";

const terms = [
	`The Standard License grants you a 
    non-exclusive right to navigate and 
    register for our event`,
	`You are licensed to use the item 
    available at any free source sites, for 
    your project developement`,
];

const Policy = () => {
	return (
		<section className="relative lg:flex items-center ">
			<Blur extraStyling="top-[30rem] left-0" />
			<div className=" lg:flex-1 relative z-[5]">
				<div className="relative text-center lg:text-left space-y-2">
				<PiStarFourFill className=" absolute  w-3 h-3 lg:w-6 lg:h-6  top-0 right-16 lg:right-64 fill-lightPurple  " />
				<PiStarFourFill className=" absolute  w-3 h-3 lg:w-4 lg:h-4  -bottom-4  right-0 lg:right-60 fill-gray-600" />

					<hgroup>
						<div className="overflow-hidden">
							<motion.h1
								initial={{ y: 30 }}
								whileInView={{ y: 0 }}
								transition={{ delay: 0.4, duration: 0.4 }}
								viewport={{ once: true, margin: "300px 0px 0px 0px" }}
							>
								Privacy Policy and
							</motion.h1>
						</div>
						<div className="overflow-hidden">
							<motion.h1
								initial={{ y: 30 }}
								whileInView={{ y: 0 }}
								transition={{ delay: 0.4, duration: 0.4 }}
								viewport={{ once: true, margin: "300px 0px 0px 0px" }}
								className=" text-pink"
							>
								Terms
							</motion.h1>
						</div>
					</hgroup>
					<p className="text-xs">Last updated on September 12, 2023</p>
				</div>

				<div className=" mt-8 text-sm">
					<p className="text-center lg:text-left lg:max-w-sm">
						Below are our privacy & policy, which outline a lot of goodies. it’s
						our aim to always take of our participant
					</p>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.4 }}
						viewport={{ once: true, margin: "300px 0px 0px 0px" }}
						className=" bg-lightPurple/5 p-6 py-12 lg:px-12 xl:mr-16 mt-10 rounded-md  border  border-lightPurple"
					>
						<p className=" mb-6 text-center md:text-left">
							At getlinked tech Hackathon 1.0, we value your privacy and are
							committed to protecting your personal information. This Privacy
							Policy outlines how we collect, use, disclose, and safeguard your
							data when you participate in our tech hackathon event. By
							participating in our event, you consent to the practices described
							in this policy.
						</p>
						<div className="mt-8">
							<h4 className="text-sm font-bold text-pink">Licensing Policy</h4>
							<p className="font-semibold text-sm">
								Here are terms of our Standard License:
							</p>

							<div className="space-y-6 my-6">
								{terms.map((t) => (
									<div key={t} className="flex items-start gap-x-3 md:pr-16">
										<HiCheckCircle className="flex-none fill-green-500 w-6 h-6" />
										<p className="flex-1">{t}</p>
									</div>
								))}
							</div>
							<div className=" flex justify-center lg:justify-normal mt-8 lg:mt-12">
								<Button>Read More</Button>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="relative grid place-items-center lg:flex-1 w-[fit-content] mx-auto ">
				<PiStarFourFill className=" absolute  w-3 h-3 lg:w-6 lg:h-6  top-16 lg:top-48 left-0 fill-lightPurple  " />
				<PiStarFourFill className=" absolute  w-3 h- lg:w-4 lg:h-4  top-24 -right-8  " />
				<PiStarFourFill className=" absolute  w-3 h-3 lg:w-4 lg:h-4  bottom-5 lg:bottom-32 left-0 lg:left-32 " />
				<PiStarFourFill className=" absolute  w-3 h-3  lg:w-6 lg:h-6 bottom-5 right-2 fill-gray-600" />
				<LockSvg className="col-start-1 col-end-1 w-[15rem] h-[15rem]  lg:w-[28rem] lg:h-[28rem]  xl:w-[38rem] xl:h-[38rem] row-start-1 row-end-1" />
				<UnlockSvg className="col-start-1 col-end-1 w-[15rem] h-[15rem]  lg:w-[28rem] lg:h-[28rem] xl:w-[38rem] xl:h-[38rem]  row-start-1 row-end-1 mt-32" />
			</div>
		</section>
	);
};

export default Policy;
