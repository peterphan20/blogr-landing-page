import React from "react";
import illustrationPhone from "../images/illustration-phones.svg";
import circlePattern from "../images/bg-pattern-circles.svg";
import introPattern from "../images/bg-pattern-intro.svg";

const Field = () => {
	return (
		<div>
			{/* <img className="bg-red-lightBg" src={introPattern} /> */}
			<img src={illustrationPhone} className="mt-10" />
			<img src={circlePattern} />
			<div className="text-center">
				<h1 className="text-gray-800 text-4xl">Free, open, simple</h1>
				<p className="text-l font-overpass">
					Blogr is a free and open source application backed by a large community of helpful
					developers. It supports features such as code syntax highlighting, RSS feeds, social media
					integration, third-party commenting tools, and works seamlessly with Google Analytics. The
					architecture is clean and is relatively easy to learn.
				</p>
				<h1>Powerful tooling</h1>
				<p>
					Batteries included. We built a simple and straightforward CLI tool that makes
					customization and deployment a breeze, but capable of producing even the most complicated
					sites.
				</p>
			</div>
		</div>
	);
};

export default Field;
