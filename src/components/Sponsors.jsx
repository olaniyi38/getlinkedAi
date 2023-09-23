import { motion } from "framer-motion";
import { ReactComponent as Sponsor1 } from "../assets/svgs/sponsor1.svg";
import { ReactComponent as Sponsor2 } from "../assets/svgs/sponsor2.svg";
import { ReactComponent as Sponsor3 } from "../assets/svgs/sponsor3.svg";
import { ReactComponent as Sponsor5 } from "../assets/svgs/sponsor5.svg";
import { ReactComponent as Sponsor6 } from "../assets/svgs/sponsor6.svg";

import Blur from "./Blur";
import { PiStarFourFill } from "react-icons/pi";

const sponsorSvgs = [Sponsor1, Sponsor2, Sponsor3, Sponsor5, Sponsor6];

const Sponsors = () => {
	return (
		<section className="relative">
			<Blur extraStyling="-right-16 -bottom-4" />
			<Blur extraStyling="-left-16 top-0" />
			<div className="max-w-sm lg:max-w-md space-y-2  text-center mx-auto">
				<div className="overflow-hidden">
					<motion.h1
						initial={{ y: 30 }}
						whileInView={{ y: 0 }}
						transition={{ delay: 0.4, duration: 0.4 }}
						viewport={{ once: true, margin: "300px 0px 0px 0px" }}
					>
						Partners and Sponsors
					</motion.h1>
				</div>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					viewport={{ once: true, margin: "300px 0px 0px 0px" }}
					className="text-[.9rem] font-medium"
				>
					Getlinked Hackathon 1.0 is honored to have the following major
					companies as its partners and sponsors
				</motion.p>
			</div>

			<div className="relative z-[5] grid grid-cols-3  gap-4 lg:max-w-5xl rounded border-2 border-pink mt-8 lg:mt-16 p-8 lg:p-16  lg:mx-auto lg:py-20 ">
				<PiStarFourFill className=" absolute  w-3 h-3 md:w-5 md:h-5  -top-10  my-auto fill-lightPurple" />
				<PiStarFourFill className=" absolute  w-3 h-3  top-5 bottom-8 my-auto left-[34%]" />
				<PiStarFourFill className=" absolute  w-3 h-3 md:w-6 md:h-6  -bottom-8 right-8 my-auto fill-gray-600" />

				<div className="grid place-items-center border-b px-2 border-r border-pink">
					<Sponsor1 className="w-full max-w-[10rem] " />
				</div>
				<div className="grid px-2 md:p-7 place-items-center border-b border-pink">
					<Sponsor2 className="w-full max-w-[10rem] " />
				</div>
				<div className="grid px-2 md:p-7 place-items-center border-b border-l border-pink">
					<Sponsor1 className="w-full max-w-[10rem] " />
				</div>
				<div className="grid px-2 md:p-7 place-items-center border-r border-pink">
					<Sponsor2 className="w-full max-w-[10rem]" />
				</div>
				<div className="grid px-2 md:p-7 place-items-center border-pink">
					<Sponsor1 className="w-full max-w-[10rem]" />
				</div>
				<div className="grid px-2 md:p-7 place-items-center border-l border-pink">
					<Sponsor2 className="w-full max-w-[10rem]" />
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
