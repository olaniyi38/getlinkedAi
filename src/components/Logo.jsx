const Logo = ({ size = " text-lg" }) => {
	return (
		<h1 className={`font-bold text-lg sm:text-2xl lg:text-3xl`}>
			<span>get</span>
			<span className="text-pink">linked</span>
		</h1>
	);
};

export default Logo;
