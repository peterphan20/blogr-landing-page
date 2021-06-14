import React from "react";

const Footer = () => {
	return (
		<div className="pb-14 flex flex-col justify-center items-center font-body-Overpass-300 bg-blue-footerBg rounded-tr-footer lg:flex-row justify-evenly items-center pt-10">
			<h1 className="py-14 font-overpass font-semibold text-white-text text-5xl lg:self-start">
				Blogr
			</h1>
			<div className="flex flex-col justify-center items-center font-ubuntu font-xl text-blue-footerText lg:items-start">
				<p className="text-white-text">Product</p>
				<p className="text-blue-footerText pb-2">Overview</p>
				<p className="text-blue-footerText pb-2">Pricing</p>
				<p className="text-blue-footerText pb-2">Marketplace</p>
				<p className="text-blue-footerText pb-2">Features</p>
				<p className="text-blue-footerText pb-12">Integrations</p>
			</div>
			<div className="flex flex-col justify-center items-center font-ubuntu font-xl text-blue-footerText lg:items-start">
				<p className="text-white-text pb-4">Company</p>
				<p className="text-blue-footerText pb-2">About</p>
				<p className="text-blue-footerText pb-2">Team</p>
				<p className="text-blue-footerText pb-2">Blog</p>
				<p className="text-blue-footerText pb-12">Careers</p>
			</div>
			<div className="flex flex-col justify-center items-center font-ubuntu font-xl text-blue-footerText lg:items-start">
				<p className="text-white-text pb-4">Connect</p>
				<p className="text-blue-footerText pb-2">Contact</p>
				<p className="text-blue-footerText pb-2">Newletter</p>
				<p className="text-blue-footerText pb-12">LinkedIn</p>
			</div>
		</div>
	);
};

export default Footer;
