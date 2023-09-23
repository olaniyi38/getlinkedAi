import goldImg from "../assets/imgs/gold-medal.png";
import silverImg from "../assets/imgs/silver-medal.png";
import bronzeImg from "../assets/imgs/bronze-medal.png";
import { motion } from "framer-motion";

const Prizes = () => {
	return (
		<div className="flex items-center justify-end gap-x-2 md:gap-x-8 relative z-[5]">
			<div className="flex-1 md:h-52 lg:h-64  max-w-[12rem]  scale-[.9] rounded-md bg-pink/20 backdrop-blur-lg backdrop-brightness-50 text-center flex flex-col h-44 relative border-2 border-pink">
				<img
					src={silverImg}
					className="xs:w-24 xs:h-24 md:w-36 md:h-36 right-0 left-0 mx-auto -top-14 md:-top-20 absolute"
					alt=""
				/>
				<div className="pt-12 text-sm xs:text-base md:text-lg font-bold  my-auto space-y-1">
					<h4>
						<span>2nd</span>
						<span>Runner</span>
					</h4>
					<p className="text-pink ">N300,000</p>
				</div>
			</div>
			<div className="flex-1 md:h-52 lg:h-64 max-w-[12rem]  scale-[1.1] rounded-md text-center bg-lightPurple/20 backdrop-blur-lg backdrop-brightness-50  flex flex-col h-44 relative border-2 border-lightPurple">
				<img
					src={goldImg}
					className="xs:w-28 xs:h-28 md:w-40 md:h-40 right-0 left-0 mx-auto -top-16 md:-top-24 absolute"
					alt=""
				/>
				<div className="pt-12 text-sm xs:text-base md:text-lg font-bold  my-auto space-y-1">
					<h4>
						<span>1st</span>
						<span>Runner</span>
					</h4>
					<p className="text-lightPurple ">N300,000</p>
				</div>
			</div>
			<div className="flex-1 md:h-52 lg:h-64 max-w-[12rem] scale-[.9] rounded-md text-center flex flex-col bg-pink/20 backdrop-blur-lg backdrop-brightness-50 h-44 relative border-2 border-pink">
				<img
					src={bronzeImg}
					className="xs:w-24 xs:h-24  md:w-36 md:h-36 right-0 left-0 mx-auto -top-14 md:-top-20 absolute"
					alt=""
				/>
				<div className="pt-12 text-sm xs:text-base md:text-lg font-bold  my-auto space-y-1">
					<h4>
						<span>3rd</span>
						<span>Runner</span>
					</h4>
					<p className="text-pink ">N300,000</p>
				</div>
			</div>
		</div>
	);
};

export default Prizes;
