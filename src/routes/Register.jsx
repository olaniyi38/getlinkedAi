import img1 from "../assets/imgs/man-sitting.webp";
import img2 from "../assets/imgs/check-circle.webp";
import img3 from "../assets/imgs/winner.webp";
import RegisterForm from "../components/RegisterForm";
import Button from "../components/Button";
import { useState } from "react";

import { ReactComponent as ManSvg } from "../assets/svgs/man.svg";
import { ReactComponent as WomanSvg } from "../assets/svgs/woman.svg";
import transition from "../utils/transition";
import { motion } from "framer-motion";
import Blur from "../components/Blur";
import { PiStarFourFill } from "react-icons/pi";

const Register = () => {
	const [isModalActive, setModalActive] = useState(false);

	return (
		<>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="sm:py-4 lg:py-8 xl:py-16 lg:flex relative"
			>
				<Blur extraStyling="top-16 left-16"/>
				<Blur extraStyling="hidden md:block bottom-0 -right-[10rem]" />
				<PiStarFourFill  className=" absolute right-8 z-10 lg:w-6 lg:h-6 top-8 fill-lightPurple"/>
				<motion.img
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.4 }}
					src={img1}
					className="z-[6] hidden flex-1 max-w-[12rem] sm:max-w-[20rem]  lg:max-w-[25rem] xl:max-w-[35rem] lg:block top-0 bottom-0 my-auto left-0 xl:left-12 "
					alt="man-sitting illustration"
				/>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.4 }}
					className="flex-1 px-2 lg:p-8 xl:p-16 xl:px-24 lg:rounded-xl max-w-xl xl:max-w-3xl mx-auto lg:mr-0 lg:bg-gray-100/5 backdrop-blur-xl"
				>
					<h1 className="text-lightPurple mb-5 text-base lg:text-2xl xl:text-3xl xl:mb-10">
						Register
					</h1>
					<div>
						<motion.img
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.4 }}
							src={img1}
							className="lg:hidden max-w-[12rem] sm:max-w-[20rem] "
							alt="man-sitting illustration"
						/>
						<p className="space-x-4 flex text-sm">
							Be part of this movement
							<span className=" relative">
								<span className="flex absolute w-full -top-5 ml-2">
									<ManSvg className="w-8 h-8 mirror" />
									<WomanSvg className="w-8 h-8 mirror" />
								</span>
								<span className=" text-pink ml-2">
									..........................
								</span>
							</span>
						</p>
					</div>

					<div className="relative shadow-xl  z-[2] space-y-6 pt-4">
						<h3 className="font-semibold uppercase text-lg">
							create your account
						</h3>
						<RegisterForm toggleModal={() => setModalActive(true)} />
					</div>
				</motion.div>
			</motion.section>
			<div
				className={`${
					isModalActive ? "" : "hidden"
				} absolute grid place-items-center text-center px-8 inset-0 bg-darkPurple/90`}
			>
				<div className="max-w-lg mx-auto border-2 border-pink rounded-lg px-8 py-12 lg:px-12">
					<div className="grid mb-8">
						<img
							src={img2}
							alt=""
							className=" relative right-10 z-[0] max-w-[12rem] sm:max-w-[20rem]    col-start-1 col-end-1 row-start-1 row-end-1"
						/>
						<img
							src={img3}
							alt=""
							className="relative left-10 max-w-[12rem] sm:max-w-[20rem]    col-start-1 col-end-1 row-start-1 row-end-1"
						/>
					</div>
					<div className=" space-y-6">
						<h3 className="text-lg md:text-xl lg:text-2xl font-bold">
							Congratulations you have successfully Registered!
						</h3>
						<p className="">
							Yes, it was easy and you did it! check your mail box for next step
						</p>
						<Button onClick={() => setModalActive(false)} full>
							Back
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default transition(Register);
