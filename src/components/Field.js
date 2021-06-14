import React from "react";
import mobileLaptop from "../images/illustration-laptop-mobile.svg";
import desktopLaptop from "../images/illustration-laptop-desktop.svg";

const Field = () => {
	return (
		<div>
			<picture>
				<source media="(min-width:1050px)" srcSet={desktopLaptop} />
				<img src={mobileLaptop} className="mt-10" />
			</picture>
			<div className="pt-5 pb-14 px-10 text-center">
				<h1 className="py-7 text-blue-heading text-3xl font-semibold">Free, open, simple</h1>
				<p className="text-l font-overpass font-md text-blue-bodyCopy">
					Blogr is a free and open source application backed by a large community of helpful
					developers. It supports features such as code syntax highlighting, RSS feeds, social media
					integration, third-party commenting tools, and works seamlessly with Google Analytics. The
					architecture is clean and is relatively easy to learn.
				</p>
				<h1 className="py-7 text-blue-heading text-3xl font-semibold">Powerful tooling</h1>
				<p className="text-l font-overpass font-md text-blue-bodyCopy">
					Batteries included. We built a simple and straightforward CLI tool that makes
					customization and deployment a breeze, but capable of producing even the most complicated
					sites.
				</p>
			</div>
		</div>
	);
};

export default Field;
