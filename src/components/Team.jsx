import React from "react";

const Team = ({ name, title, bio, photo }) => {
	return (
		<div className="col-md-3 team">
			<div className="card shadow">
				<div className="card-body">
					<div className="member-img">
						<img width="100%" src={photo} alt="Team Member" />
					</div>
					<h4 className="member-name">{name} </h4>
					<div className="member-bio">
						<p> {bio} </p>
					</div>
					<h6 className="member-title">{title}</h6>
					<div className="member-social-info">
						<ul className="d-flex justify-content-center gap-2">
							<li>
								<i class="bx bxl-facebook-circle"> </i>
							</li>
							<li>
								<i class="bx bxl-instagram"> </i>
							</li>
							<li>
								<i class="bx bxl-github"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
