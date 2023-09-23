import { useState } from "react";
import BarsButton from "./BarsButton";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Links = [
	{
		name: "overview",
		url: "/#overview",
	},
	{
		name: "Timeline",
		url: "/#timeline",
	},
	{
		name: "FAQs",
		url: "/#faqs",
	},
];

const Header = () => {
	const [mobileNavActive, setMobileNavActive] = useState(false);
	const location = useLocation();

	function openNav() {
		setMobileNavActive(true);
	}

	function closeNav() {
		setMobileNavActive(false);
	}

	console.log(location.pathname);

	return (
		<>
			<header className=" flex items-center justify-between px-8 lg:px-16 xl:px-24 py-6 ">
				<Link to="/">
					<Logo />
				</Link>

				<nav className="hidden md:block space-x-6 lg:space-x-10 font-semibold">
					{Links.map(({ name, url }) => (
						<a href={url} className="capitalize">
							{name}
						</a>
					))}
					<Link
						className={
							location.pathname === "/contact"
								? "bg-gradient-to-r from-lightPurple to-pink text-transparent bg-clip-text"
								: ""
						}
						to="/contact"
					>
						Contact
					</Link>
					<Link to="/register">
						<Button
							extraStyling={
								location.pathname === "/register"
									? "bg-none border border-pink"
									: ""
							}
						>
							Register
						</Button>
					</Link>
				</nav>
				<BarsButton active={mobileNavActive} openFunc={openNav} />
				<MobileNav active={mobileNavActive} closeFunc={closeNav} />
			</header>

			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Header;
