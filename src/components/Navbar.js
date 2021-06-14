import React from "react";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import Button from "./Button";

const Navbar = () => {
	return (
		<div className="p-11 bg-introPattern bg-cover bg-red-lightBg rounded-bl-footer lg:px-44">
			<div className="flex justify-between pb-14">
				<img src={logo} alt="blogr logo" />
				<img src={hamburgerIcon} className="text-gray-900" alt="hamburger menu" />
			</div>
			<div className="text-center text-white-text">
				<h1 className="px-2 pt-2 pb-5 text-3xl lg:text-5xl">A modern publishing platform</h1>
				<p className="pb-9 text-l lg:text-xl">Grow your audience and build your online brand</p>
			</div>
			<Button />
		</div>
	);
};

export default Navbar;
