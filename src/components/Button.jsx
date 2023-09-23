const Button = ({
	children,
	extraStyling,
	onClick = () => {},
	full = false,
}) => {
	return (
		<button
			onClick={onClick}
			className={`${
				full && "w-full"
			} bg-gradient-to-r  from-pink to-lightPurple py-2 px-8 rounded font-medium capitalize transition-all ${extraStyling}`}
		>
			{children}
		</button>
	);
};

export default Button;
