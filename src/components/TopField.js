import React from "react";
import mobileEditor from "../images/illustration-editor-desktop.svg";
import desktopEditor from "../images/illustration-editor-desktop.svg";

const TopField = () => {
	return (
		<div className="px-5 text-center">
			<h1 className="py-14 text-blue-heading text-3xl font-semibold">Designed for the future</h1>
			<div className="lg: flex flex-row-reverse justify-center items-center">
				<picture>
					<source media="(min-width:1050px)" srcSet={desktopEditor} />
					<img src={mobileEditor} />
				</picture>
				<div className="lg: text-left">
					<h1 className="py-7 text-blue-heading text-3xl font-semibold">
						Introducing an extensible editor
					</h1>
					<p className="text-l font-overpass font-md text-blue-bodyCopy">
						Blogr features an exceedingly intuitive interface which lets you focus on one thing:
						creating content. The editor supports management of multiple blogs and allows easy
						manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
						and themes provide easy ways to add functionality or change the looks of a blog.
					</p>
					<h1 className="py-7 text-blue-heading text-3xl font-semibold">
						Robust content management
					</h1>
					<p className="text-l font-overpass font-md text-blue-bodyCopy">
						Flexible content management enables users to easily move through posts. Increase the
						usability of your blog by adding customized categories, sections, format, or flow. With
						this functionality, you’re in full control.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TopField;
