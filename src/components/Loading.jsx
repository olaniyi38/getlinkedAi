import React from "react";

const Loading = ({}) => {
	return (
		<div className="h-[100vh] w-full grid place-items-center ">
			<div
				className={`border-2 border-t-slate-900 animate-spin border-slate-300 w-32 h-32 rounded-full`}
			></div>
		</div>
	);
};

export default Loading;
