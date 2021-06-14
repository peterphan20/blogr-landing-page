import React from "react";
import RenderedList from "./RenderedList";

const Footer = () => {
	return (
		<div className="pb-14 flex flex-col justify-center items-center font-body-Overpass-300 bg-blue-footerBg rounded-tr-footer">
			<h1 className="py-12 font-overpass font-semibold text-white-text text-5xl">Blogr</h1>
			<div className="flex flex-col justify-center items-center font-ubuntu font-xl text-blue-footerText">
				<RenderedList />
			</div>
		</div>
	);
};

export default Footer;
