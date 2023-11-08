import { PiStarFourFill } from "react-icons/pi";
import img1 from "../assets/imgs/criteria.webp";
import Blur from "./Blur";
import Button from "./Button";
import { motion } from "framer-motion";

const attributes = [
	{
		title: "innovation and Creativity:",
		content: `Evaluate the uniqueness and creativity of the
        solution. Consider whether it addresses a real-world problem in a novel 
        way or introduces innovative features`,
	},
	{
		title: "Functionality",
		content: `Assess how well the solution works. Does it perform its 
        intended functions effectively and without major issues? Judges would
        consider the completeness and robustness of the solution`,
	},
	{
		title: "Impact and Relevance",
		content: `Determine the potential impact of the solution 
        in the real world. Does it address a significant problem, and is it relevant 
        to the target audience? Judges would assess the potential social, 
        economic, or environmental benefits.`,
	},
	{
		title: "Technical Complexity",
		content: `Evaluate the technical sophistication of the solution. 
        Judges would consider the complexity of the code, the use of advanced 
        technologies or algorithms, and the scalability of the solution.`,
	},
	{
		title: "Adherence to Hackathon Rules",
		content: `Judges will Ensure that the team adhered 
        to the rules and guidelines of the hackathon, including deadlines, use of 
        specific technologies or APIs, and any other competition-specific requirements.`,
	},
];

const Attributes = () => {
	return (
		<section className="relative lg:flex lg:items-center space-y-4   border-t border-t-lightPurple ">
			<Blur extraStyling="bottom-16 lg:-bottom-16 -right-4" />

			<Blur extraStyling="bottom-16 left-20 hidden lg:block" />

			<div className="grid place-items-center relative mx-auto flex-1 ">
				<PiStarFourFill className=" absolute -top-6 left-0 right-16 md:right-36 mx-auto w-4 h-4 md:w-6 md:h-6  md:-top-16 fill-pink" />
				<PiStarFourFill className=" absolute top-0 bottom-0 my-auto w-3 h-3 md:w-6 md:h-6  fill-gray-700" />
				<img
					src={img1}
					className="col-start-1 row-start-1 max-w-[15rem] xs:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[35rem] z-[5]"
					alt=""
				/>
			</div>
			<div className="flex-1 space-y-4 max-w-[43rem] py-4 lg:pl-16 mx-auto text-center lg:text-left">
				<hgroup className="font-black text-xl ">
					<h1>Judging Criteria</h1>
					<h1 className="text-pink">Key attributes</h1>
				</hgroup>
				<div className=" pt-8  space-y-4 relative z-[5]">
					<PiStarFourFill className=" absolute bottom-0 right-0 md:w-6 md:h-6 md:right-auto  md:-left-16" />
					{attributes.map((a) => (
						<motion.div
							key={a.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.3 }}
							viewport={{ once: true, margin: "300px 0px 0px 0px" }}
						>
							<span className=" text-lightPink mr-1 font-medium">
								{a.title}
							</span>
							{a.content}
						</motion.div>
					))}
					<Button>read more</Button>
				</div>
			</div>
		</section>
	);
};

export default Attributes;
