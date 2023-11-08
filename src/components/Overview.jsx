import { PiStarFourFill } from "react-icons/pi";
import img1 from "../assets/imgs/idea.webp";
import { motion } from "framer-motion";

const Overview = () => {
	return (
		<section
			id="overview"
			className=" lg:flex lg:items-center lg:gap-x-16 space-y-4  "
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.4 }}
				viewport={{ once: true, margin: "300px 0px 0px 0px" }}
				id="#overview"
				className="relative grid place-items-center max-w-[15rem] xs:max-w-[20rem] lg:max-w-[25rem]  mx-auto"
			>
				<PiStarFourFill className=" absolute left-0 top-0 bottom-8 md:w-6 md:h-6  fill-pink my-auto " />
				<img src={img1} className="col-start-1 row-start-1" alt="" />
				<div className="text-center drop-shadow-lg col-start-1 row-start-1 font-black  xs:text-xl leading-5 mr-2">
					<p>The big</p>
					<p>Idea!</p>
				</div>
			</motion.div>
			<div className="space-y-4 py-4 lg:pl-16 text-center  lg:text-left">
				<hgroup className="font-black relative">
					<div className="overflow-hidden">
						<motion.h1
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							transition={{ delay: 0.4, duration: 0.4 }}
							viewport={{ once: true, margin: "300px 0px 0px 0px" }}
						>
							Introduction to
						</motion.h1>
					</div>
					<div className="overflow-hidden">
						<motion.h1
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							transition={{ delay: 0.4, duration: 0.4 }}
							viewport={{ once: true, margin: "300px 0px 0px 0px" }}
							className="text-pink"
						>
							tech Hackathon 1.0
						</motion.h1>
					</div>
					<PiStarFourFill className=" absolute -right-2 w-2 h-2 md:w-6 md:h-6  top-5 bottom-8 my-auto fill-pink" />
				</hgroup>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.4 }}
					className="max-w-[42rem] mx-auto"
				>
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

export default Overview;
