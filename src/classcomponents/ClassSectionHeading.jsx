import React, { Component } from "react";

class ClassSectionHeading extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { heading, color } = this.props;
		return (
			<>
				<div className="sec-heading">
					<h1 style={{ color: color }}>{heading}</h1>
				</div>
			</>
		);
	}
}
export default ClassSectionHeading;
