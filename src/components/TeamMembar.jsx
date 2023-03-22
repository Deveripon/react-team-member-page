import React from "react";
import "./TeamMember.css";
import Team from "./Team";
import { developer } from "../data";

const TeamMembar = () => {
	return (
		<>
			<section className="team-member mt-5">
				<div className="container">
					<div className="row">
						{developer.map((dev) => (
							<Team name={dev.name} title={dev.title} bio={dev.bio} photo={dev.photo} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default TeamMembar;
