import {
	HiOutlineLocationMarker,
	HiOutlinePhoneOutgoing,
} from "react-icons/hi";
import Logo from "./Logo";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";

const usefulLinks = [
	{
		name: "overview",
		url: "#",
	},
	{
		name: "timeline",
		url: "#",
	},
	{
		name: "FAQs",
		url: "#faqs",
	},
	{
		name: "Register",
		url: "#",
	},
];

const Footer = () => {
	return (
		<footer className="relative overflow-hidden">
			<PiStarFourFill className=" absolute  w-3 h-3 lg:w-4 lg:h-4  top-24 left-2   " />
			<PiStarFourFill className=" absolute  w-2 h-2 lg:w-3 lg:h-3  bottom-0 left-32  fill-lightPurple  " />
			<PiStarFourFill className=" absolute  w-3 h-3 lg:w-4 lg:h-4  top-0 bottom-0 my-auto left-64  fill-gray-600 " />
			<PiStarFourFill className=" absolute  w-2 h-2 lg:w-3 lg:h-3  bottom-64 right-16  " />

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.4 }}
				viewport={{ once: true, margin: "300px 0px 0px 0px" }}
				className="font-medium flex flex-col lg:flex-row lg:items-start lg:flex-wrap gap-y-8 p-8 md:px-16 lg:py-16 xl:px-24"
			>
				<div className="space-y-4 flex-1">
					<Logo />
					<p className=" text-sm md:w-[80%]">
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</p>
					<div className=" text-[.9rem] pt-8">
						Terms of Use <span className="text-pink font-semibold mx-4">|</span>{" "}
						Privacy Policy
					</div>
				</div>
				<div className=" flex-1">
					<h3 className=" text-pink mb-2">Useful links</h3>
					<div className="flex flex-col gap-y-2 text-[.9rem] capitalize">
						{usefulLinks.map(({ url, name }) => (
							<a key={name} href={url}>{name}</a>
						))}
					</div>
					<div className="flex flex-1 items-center gap-x-3 mt-2">
						<span className=" text-[.9rem] text-pink">Follow us </span>
						<div className="flex items-center space-x-4">
							<BsInstagram className=" w-6 h-6" />
							<BsTwitter className=" w-6 h-6" />
							<BsFacebook className=" w-6 h-6" />
							<BsLinkedin className=" w-6 h-6" />
						</div>
					</div>
				</div>

				<div className=" space-y-2">
					<h3 className=" text-pink">Contact Us</h3>
					<p className=" flex items-start gap-x-2 text-[.9rem]">
						<HiOutlinePhoneOutgoing className=" w-4 h-4 mt-1" />
						<span>+234 679 81819</span>
					</p>
					<p className=" flex items-start gap-x-2 text-[.9rem]">
						<HiOutlineLocationMarker className=" w-4 h-4 mt-1" />
						<span>27,Alara Street Yaba 100012 Lagos State</span>
					</p>
				</div>

				<p className=" lg:basis-[100%] lg:text-center text-sm mt-8">
					All rights reserved. © getlinked Ltd.
				</p>
			</motion.div>
		</footer>
	);
};

export default Footer;
