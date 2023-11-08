import { PiStarFourFill } from "react-icons/pi";
import img1 from "../assets/imgs/rules.webp";
import Blur from "./Blur";
import { motion } from "framer-motion";

const Rules = () => {
	return (
		<section className="relative lg:flex lg:items-center space-y-4  border-t border-t-lightPurple ">
			<Blur extraStyling="top-4 -left-4 lg:top-16" />
			<Blur extraStyling="bottom-16 -right-4 lg:-right-[18rem] " />

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.4, duration:.4 }}
				viewport={{ once: true }}
				className="relative grid place-items-center flex-1 order-2 mx-auto   "
			>
				<PiStarFourFill className=" absolute top-0 bottom-0 left-4 my-auto w-3 h-3 md:hidden" />
				<img
					src={img1}
					className="col-start-1 row-start-1 max-w-[15rem] xs:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[35rem]"
					alt=""
				/>
			</motion.div>
			<div className="relative flex-1 order-1 space-y-4  py-4 text-center lg:text-left  z-[5]">
				<hgroup className="font-black text-xl  ">
					<div className=" overflow-hidden">
						<motion.h1
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							transition={{ delay: 0.4, duration:.4 }}
							viewport={{ once: true, margin: "300px 0px 0px 0px" }}
						>
							Rules and
						</motion.h1>
					</div>
					<div className=" overflow-hidden">
						<motion.h1
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							transition={{ delay: 0.4, duration:.4 }}
							viewport={{ once: true, margin: "300px 0px 0px 0px" }}
							className="text-pink"
						>
							Guidelines
						</motion.h1>
					</div>
				</hgroup>
				<motion.p
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration:.4 }}
					viewport={{ once: true, margin: "300px 0px 0px 0px" }}
					className="relative max-w-[40rem] lg:pr-16  mx-auto lg:mx-0 "
				>
					<PiStarFourFill className=" absolute right-0 md:-top-24 w-3 h-3 md:w-6 md:h-6  fill-slate-600" />
					<PiStarFourFill className=" absolute -bottom-4 md:-bottom-16 left-16 w-3 h-3 md:w-6 md:h-6 " />
					Our tech hackathon is a melting pot of visionaries, and its purpose is
					as clear as day: to shape the future. Whether you're a coding genius,
					a design maverick, or a concept wizard. you'll have the chance to
					transform your ideas into reality. Solving real-world problems,
					pushing the boundaries of technology, and creating solutions that can
					change the world, that's what we're all about!
				</motion.p>
			</div>
		</section>
	);
};

export default Rules;
