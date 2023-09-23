import { HiChevronDown } from "react-icons/hi";

const FormInput = ({ children }) => {
	return <div className=" flex flex-col lg:flex-1 gap-y-2">{children}</div>;
};

FormInput.Label = ({ children }) => {
	return (
		<label className="">
			<p className="text-sm font-medium capitalize">{children}</p>
		</label>
	);
};

FormInput.Text = ({ name, errors, register, full, ...inputProps }) => {
	const errorStyle = errors[name.toLowerCase()]
		? "outline-red-500"
		: "focus:border-pink";
	return (
		<>
			<input
				className={`bg-gray-100/5 ${
					full && "w-full"
				} backdrop-blur-xl backdrop-brightness-80 py-[.7rem] border placeholder:text-xs placeholder:text-center placeholder:text-gray-600 placeholder:font-semibold rounded-md  p-2 ${errorStyle} text-sm rounded-[.3rem] outline-none  transition-all`}
				{...(register && register(name.toLowerCase(), { required: true }))}
				{...inputProps}
			/>
		</>
	);
};

FormInput.Select = ({ options, name, errors, register, ...inputProps }) => {
	const errorStyle = errors[name.toLowerCase()]
		? "outline-red-500"
		: "focus:outline-pink";
	return (
		<select
			className={`${errorStyle} relative appearance-none bg-gray-100/5 backdrop-blur-xl backdrop-brightness-80 border rounded-md p-2 text-sm outline-none focus:outline-blue-600 outline-1 transition-all`}
			{...(register && register(name.toLowerCase(), { required: true }))}
			{...inputProps}
		>
			{options.map((o) => (
				<option className=" bg-red" value={o}>{o}</option>
			))}
			<HiChevronDown className=" absolute -top-4"/>
		</select>
	);
};

FormInput.CheckBox = ({ name, errors, register, ...inputProps }) => {
	const errorStyle = errors[name.toLowerCase()]
		? "outline-red-500"
		: "focus:border-pink";
	return (
		<input
			className={`${errorStyle} bg-gray-100/50 w-5 h-5`}
			type="checkbox"
			name={name}
			{...(register && register(name.toLowerCase(), { required: true }))}
			{...inputProps}
		/>
	);
};

FormInput.TextArea = ({ name, errors, register, full, ...inputProps }) => {
	const errorStyle = errors[name.toLowerCase()]
		? "outline-red-500"
		: "focus:border-pink";
	return (
		<textarea
			cols="30"
			className={`${
				full && "w-full"
			} ${errorStyle} bg-gray-100/5 backdrop-blur-xl backdrop-brightness-80 border rounded-md p-[.7rem] text-sm outline-none focus:outline-blue-600 outline-1 transition-all`}
			rows="10"
			{...(register && register(name.toLowerCase(), { required: true }))}
			{...inputProps}
		></textarea>
	);
};

export default FormInput;
