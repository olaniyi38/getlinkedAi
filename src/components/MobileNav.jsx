import { HiOutlineX } from "react-icons/hi";
import Button from "./Button";
import { Link } from "react-router-dom";

const Links = [
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
		url: "#",
	},
	{
		name: "Register",
		url: "/register",
	},
];

const MobileNav = ({ active, closeFunc }) => {
	return (
		<nav
			className={`${
				active ? "clip-open" : "clip-close"
			} md:hidden fixed bg-darkPurple w-full inset-0 m-auto pt-8 pl-10 pr-4  z-10 origin-top-left `}
		>
			<div className="flex justify-end">
				<button
					onClick={closeFunc}
					className=" border border-pink rounded-full p-1"
				>
					<HiOutlineX className=" w-6 h-6" />
				</button>
			</div>
			<div className=" flex flex-col gap-y-4 text-xl  mt-20 mb-8">
				{Links.map(({ url, name }, i) => (
					<Link
					key={name}
						to={url}
						onClick={closeFunc}
						className={`${
							active ? "fade-in" : "fade-out"
						} w-[fit-content] first-letter:capitalize hover-underline`}
					>
						{name}
					</Link>
				))}
			</div>
			<div className={`${active ? "fade-in" : "fade-out"}`}>
				<Button>Register</Button>
			</div>
		</nav>
	);
};

export default MobileNav;
