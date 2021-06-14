import React from "react";

const Button = () => {
	return (
		<div className="pb-12 flex items-center justify-center gap-5">
			<button className="py-2 px-3 font-overpass bg-white-text text-red-lightBg rounded-3xl">
				Start for Free
			</button>
			<button className="py-2 px-3 font-overpass border-2 border-solid border-white text-white-text rounded-3xl">
				Learn More
			</button>
		</div>
	);
};

export default Button;
