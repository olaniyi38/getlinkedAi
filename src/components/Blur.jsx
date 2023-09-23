const Blur = ({ extraStyling }) => {
	return (
		<div
			className={`w-36 h-36 lg:w-[20rem] lg:h-[20rem] absolute ${extraStyling} bg-lightPurple rounded-full blur-2xl lg:blur-3xl opacity-30 z-[1]`}
		></div>
	);
};

export default Blur;
