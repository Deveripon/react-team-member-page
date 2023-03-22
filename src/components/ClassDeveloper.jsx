import React, { Component } from "react";

export default class ClassDeveloper extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { name, bio, title, photo } = this.props;
		return (
			<div className=" developer d-flex bg-light p-3 rounded shadow">
				<div className="developer-photo">
					<img src={photo} alt="developer" className="card-img" />
				</div>
				<div className="developer-info">
					<h2 className="developer-name">{name}</h2>
					<h4 className="developer-title">{title}</h4>
					<p className="developer-bio">{bio}</p>
					<div className="developer-social-info">
						<ul className="d-flex gap-2">
							<li>
								<i className="bx bxl-facebook-circle"></i>
							</li>
							<li>
								<i className="bx bxl-twitter"></i>
							</li>
							<li>
								<i className="bx bxl-linkedin"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
