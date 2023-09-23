import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Rules from "../components/Rules";
import Attributes from "../components/Attributes";
import Faqs from "../components/Faqs";
import Timelines from "../components/Timelines";
import Rewards from "../components/Rewards";
import Sponsors from "../components/Sponsors";
import Policy from "../components/Policy";
import transition from "../utils/transition";
import { motion } from "framer-motion";

function Root() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="bg-darkPurple text-white overflow-x-hidden font-montserrat"
		>
			<Hero />
			<Overview />
			<Rules />
			<Attributes />
			<Faqs />
			<Timelines />
			<Rewards />
			<Sponsors />
			<Policy />
			<Footer />
		</motion.main>
	);
}

export default transition(Root);
