const BarsButton = ({ active, openFunc }) => {
	return (
		<button onClick={openFunc} className={`md:hidden flex flex-col gap-1 w-8 `}>
			<span
				className={`w-full bg-white h-[.2rem] rounded-full origin-left transition-transform duration-100 ${
					active ? "scale-x-[1]" : "scale-x-[.5] delay-[1s]"
				}`}
			></span>
			<span className="bg-white h-[.2rem] rounded-full w-full"></span>
			<span
				className={`bg-white h-[.2rem] rounded-full w-full origin-right transition-transform duration-75 ${
					active ? "scale-x-[1]" : "scale-x-[.5] delay-[1s]"
				} `}
			></span>
		</button>
	);
};

export default BarsButton;
