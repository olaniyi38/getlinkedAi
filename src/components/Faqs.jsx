import React from "react";
import Accordion from "./Accordion";
import img1 from "../assets/imgs/thought.webp";
import { ReactComponent as QuestionSvg } from "../assets/svgs/question.svg";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";

const faqs = [
	{
		title: "Can I work on a project I started before the hackathon?",
		content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus beatae debitis vitae dolorem molestiae!`,
	},
	{
		title: "What happens if I need help during the hackathon?",
		content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus beatae debitis vitae dolorem molestiae!`,
	},
	{
		title: "What happens if I don't have an idea for a project?",
		content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus beatae debitis vitae dolorem molestiae!`,
	},
	{
		title: "Can I join a team or do I have to come with one?",
		content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus beatae debitis vitae dolorem molestiae!`,
	},
	{
		title: "What happens after the hackathon ends",
		content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus beatae debitis vitae dolorem molestiae!`,
	},
	{
		title: "Can I work on a project I started before the hackathon?",
		content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus beatae debitis vitae dolorem molestiae!`,
	},
];

const Faqs = () => {
	return (
		<section id="faqs" className="lg:flex border-t border-lightPurple/50 ">
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.4 }}
				viewport={{ once: true, margin: "300px 0px 0px 0px" }}
				className="relative flex-1 sm:px-6 "
			>
				<div className="text-center lg:text-left lg:mt-16">
					<PiStarFourFill className=" absolute left-8 fill-lightPurple" />
					<hgroup className=" text-2xl ">
						<h1>Frequently asked </h1>
						<h1 className=" text-pink">question</h1>
					</hgroup>
					<div className=" text-[.9rem] space-y-3 mt-4">
						<p>We got answers to the questions that you might</p>
						<p>
							want to ask about{" "}
							<span className=" font-semibold">getlinked Hackathon 1.0</span>
						</p>
					</div>
				</div>
				<div className="max-w-[30rem] font-medium space-y-4  mt-6 md:mt-10 lg:mt-16  mx-auto lg:mx-0">
					{faqs.map(({ title, content }) => (
						<Accordion key={title} title={title} content={content} />
					))}
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.4 }}
				viewport={{ once: true, margin: "300px 0px 0px 0px" }}
				className="flex-1 relative z-0"
			>
				<div className=" absolute flex justify-center  gap-x-16 -top-6 lg:-top-6 right-0 lg:right-auto left-8">
					<QuestionSvg className="relative scale-75 lg:w-24 lg:h-24  top-4" />
					<QuestionSvg className=" lg:w-24 lg:h-24" />
					<QuestionSvg className="relative scale-75 lg:w-24 lg:h-24  top-4" />
				</div>
				<img
					src={img1}
					className="relative mx-auto z-[1]  mt-12 max-w-[15rem] xs:max-w-[20rem] lg:max-w-[25rem] xl:max-w-[35rem]"
					alt="thought"
				/>
			</motion.div>
		</section>
	);
};

export default Faqs;
