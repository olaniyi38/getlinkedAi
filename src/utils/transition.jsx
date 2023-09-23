import { motion } from "framer-motion";

const transition = (OgComponent) => {
	return () => (
		<>
			<OgComponent />
			{/* <motion.div
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				className=" absolute inset-0 bg-darkPurple m-auto origin-top z-30"
			>
				
			</motion.div>
			<motion.div
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
				className=" absolute inset-0 bg-darkPurple m-auto origin-bottom z-30"
			></motion.div> */}
		</>
	);
};

export default transition;
