import { motion } from "framer-motion";
import awardImg from "../assets/imgs/award.webp";
import Blur from "./Blur";
import Prizes from "./Prizes";
import { PiStarFourFill } from "react-icons/pi";

const Rewards = () => {
	return (
		<section className="lg:space-y-8 relative">
			<Blur extraStyling="top-36 lg:top-[20rem] lg:left-32" />
			<Blur extraStyling="bottom-0 right-0 lg:-right-48" />
			<div className="text-center lg:w-[fit-content] lg:text-left  lg:ml-auto py-4 px-6 space-y-4">
				<hgroup className=" text-2xl relative">
					<PiStarFourFill className=" absolute -top-8 left-8 lg:-left-32 w-4 h-4 lg:w-6 lg:h-6 fill-lightPurple" />
					<PiStarFourFill className=" absolute right-0 top-[50%] w-3  h-3 lg:w-4 lg:h-4 fill-lightPurple" />
					<div className="overflow-hidden">
						<motion.h1
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							transition={{ delay: 0.4, duration: 0.4 }}
							viewport={{ once: true, margin: "300px 0px 0px 0px" }}
						>
							Prizes and
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
							Rewards
						</motion.h1>
					</div>
				</hgroup>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.4 }}
					viewport={{ once: true, margin: "200px 0px 0px 0px" }}
				>
					Highlight of the prizes or rewards for winners and for participants.
				</motion.p>
			</div>
			<div className="lg:flex lg:items-center">
				<div className="relative">
					<PiStarFourFill className=" absolute bottom-0 left-16 lg:w-4 lg:h-4 w-3 h-3" />
					<img
						src={awardImg}
						alt="award"
						className="max-w-[20rem] xs:max-w-[25rem] xl:max-w-[40rem] relative z-[5]"
					/>
				</div>
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.4 }}
					viewport={{ once: true, margin: "200px 0px 0px 0px" }}
					className="relative mt-24 md:mt-36 lg:flex-1 lg:justify-self-end"
				>
					<PiStarFourFill className=" absolute -top-16 right-4 w-3 h-3" />
					<Prizes />
					<PiStarFourFill className=" absolute -bottom-8 right-[70%] lg:w-6 lg:h-6  w-3 h-3 fill-gray-600" />
				</motion.div>
			</div>
		</section>
	);
};

export default Rewards;
