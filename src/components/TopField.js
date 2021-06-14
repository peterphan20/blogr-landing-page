import React from "react";
import mobileEditor from "../images/illustration-editor-mobile.svg";
import desktopEditor from "../images/illustration-editor-desktop.svg";

const TopField = () => {
	return (
		<div className="py-12 px-10">
			<h1 className="text-blue-heading text-2xl font-ubuntu text-center font-medium pb-12 lg:text-4xl py-20">
				Designed for the future
			</h1>
			<div className="flex flex-col items-center justify-center lg:flex-row-reverse justify-start items-start">
				<picture className="pb-10">
					<source media="(min-width:1028px)" srcSet={desktopEditor} alt="desktop editor design" />
					<img src={mobileEditor} alt="mobile editor design" />
				</picture>
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-blue-heading font-ubuntu text-2xl text-center font-medium pb-5 lg:self-start px-72">
						Introducing an extensible editor
					</h1>
					<p className="text-blue-bodyCopy font-overpass text-md text-center pb-8 lg:text-left px-72">
						Blogr features an exceedingly intuitive interface which lets you focus on one thing:
						creating content. The editor supports management of multiple blogs and allows easy
						manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins
						and themes provide easy ways to add functionality or change the looks of a blog.
					</p>
					<h1 className="text-blue-heading font-ubuntu text-2xl text-center font-medium pb-5 lg:self-start px-72">
						Robust content management
					</h1>
					<p className="text-blue-bodyCopy font-overpass text-md text-center lg:text-left px-72">
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
