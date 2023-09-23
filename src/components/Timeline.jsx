import { motion } from "framer-motion";

const Timeline = ({ data, index }) => {
	const { title, about, date } = data;
	return (
		<div className="timeline group ">
			<div className="md:order-2 row-span-2 self-stretch flex flex-col items-center md:flex-none gap-y-2">
				<div className=" bg-pink h-full w-[.2rem] rounded-full"></div>
				<span className=" bg-gradient-to-r from-pink to-lightPurple p-2 md:px-4 py-1 md:py-2 text-sm md:text-xl rounded-full">
					{index}
				</span>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.3 }}
				viewport={{ once: true, margin: "200px 0px 0px 0px" }}
				className="md:order-1   flex-1 self-center space-y-2"
			>
				<h4 className=" capitalize text-pink font-semibold">{title}</h4>
				<p>{about}</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.3 }}
				viewport={{ once: true, margin: "200px 0px 0px 0px" }}
				className="md:order-3 md:group-even:flex md:group-even:justify-end flex-1 self-center  mt-auto md:mt-0 mb-1 capitalize text-pink font-semibold"
			>
				<span> {date}</span>
			</motion.div>
		</div>
	);
};

export default Timeline;
