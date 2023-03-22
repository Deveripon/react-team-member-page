import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ heading }) => {
	return (
		<div className="sec-heading">
			<h1>{heading}</h1>
		</div>
	);
};

export default SectionHeading;
