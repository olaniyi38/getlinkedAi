import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import ContactForm from "../components/ContactForm";
import transition from "../utils/transition";
import { motion } from "framer-motion";
const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className=" lg:pt-28"
		>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.4 }}
				className="max-w-3xl  xl:max-w-5xl md:flex  sm:px-16 md:px-0   mx-auto"
			>
				<div className=" space-y-6 order-2 mb-6 flex-1">
					<h1 className=" text-pink">
						Questions or need assistance? Let us know about it
					</h1>
					<p className=" text-sm">
						Email us below to any question related to our event
					</p>
					<ContactForm />
					<div className="md:hidden space-y-2 w-[fit-content] text-center mx-auto">
						<h3 className=" text-pink">Share on</h3>
						<div className="flex items-center space-x-4">
							<BsInstagram className=" w-6 h-6" />
							<BsTwitter className=" w-6 h-6" />
							<BsFacebook className=" w-6 h-6" />
							<BsLinkedin className=" w-6 h-6" />
						</div>
					</div>
				</div>

				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.4 }}
					className="flex-1 order-1 hidden md:block md:pr-16 md:space-y-4"
				>
					<h1 className=" text-pink">Get in touch</h1>
					<h3>contact information</h3>
					<p>27,Alara Street Yaba 100012 Lagos State</p>
					<p>Call Us : 07067981819</p>
					<p>we are open from Monday-Friday 08:00am - 05:00pm</p>
					<div className=" space-y-2">
						<h3 className=" text-pink">Share on</h3>
						<div className="flex items-center space-x-4">
							<BsInstagram className=" w-6 h-6" />
							<BsTwitter className=" w-6 h-6" />
							<BsFacebook className=" w-6 h-6" />
							<BsLinkedin className=" w-6 h-6" />
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default transition(Contact);
