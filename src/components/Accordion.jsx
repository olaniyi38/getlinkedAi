import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);
	function toggle() {
		setIsActive(!isActive);
	}

	return (
		<div
			
			onClick={toggle}
			className="cursor-pointer  overflow-hidden text-[.9rem] sm:text-base border-b border-b-lightPurple space-y-2"
		>
			<div className=" flex items-start justify-between">
				<span className=" pr-4">{title}</span>
				<button
					className={` transition-all ${isActive ? " rotate-45" : ""}`}
					onClick={toggle}
				>
					<HiOutlinePlus className="w-4 h-4 stroke-pink" />
				</button>
			</div>
			<div
				className={` transition-transform origin-top ${
					isActive ? "h-full" : "h-0"
				} text-pink`}
			>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Accordion;
