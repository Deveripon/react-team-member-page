import React, { Component } from "react";
import "./ClassTeamMemberSection.css";
import ClassDeveloper from "../components/ClassDeveloper";
import { database } from "../data";

export default class ClassTeamMembarSection extends Component {
	render() {
		return (
			<>
				<section className="developer-section mt-5">
					<div className="container">
						<div className="row d-flex">
							{database.map((data) => (
								<ClassDeveloper name={data.name} bio={data.bio} title={data.title} photo={data.photo} />
							))}
						</div>
					</div>
				</section>
			</>
		);
	}
}
