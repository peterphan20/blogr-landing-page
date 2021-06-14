import React from "react";
import { product, company, connect } from "../helpers/footerLinks";

const RenderedList = () => {
	const renderedProduct = product.map((item, index) => {
		return (
			<div key={index}>
				<p className={item === product[0] ? "text-white-text pb-4" : "text-blue-footerText pb-1"}>
					{item}
				</p>
			</div>
		);
	});

	const renderedCompany = company.map((item, index) => {
		return (
			<div key={index}>
				<p
					className={
						item === company[0] ? "text-white-text pb-4 pt-10" : "text-blue-footerText pb-1"
					}
				>
					{item}
				</p>
			</div>
		);
	});

	const renderedConnect = connect.map((item, index) => {
		return (
			<div key={index}>
				<p
					className={
						item === connect[0] ? "text-white-text pb-4 pt-10" : "text-blue-footerText pb-1"
					}
				>
					{item}
				</p>
			</div>
		);
	});

	return (
		<div>
			{renderedProduct}
			{renderedCompany}
			{renderedConnect}
		</div>
	);
};

export default RenderedList;
