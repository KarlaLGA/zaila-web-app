import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehanceSquare
} from "@fortawesome/free-brands-svg-icons";

const TeamMember = props => {
  let teamMember = props.teamMember;
  let roles = teamMember.role;

  let socialIcon = teamMember.socials[1];
  let socialIconStream;

  if (socialIcon === "GitHub") {
    socialIconStream = true;
  } else {
    socialIconStream = false;
  }

  return (
    <div className="team-member-card">
      <div className="container">
        <img src={teamMember.images} alt="profile" />
      </div>
      <div className="content">
        <p className="name">{teamMember.name}</p>
        {roles.map(role => <p>{role}</p>)}

        <div className="social-icons">
          <a href={teamMember.link[0]} target="blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          {!socialIconStream ? (
            <a href={teamMember.link[1]} target="blank">
              <FontAwesomeIcon icon={faBehanceSquare} size="2x" />
            </a>
          ) : (
            <a href={teamMember.link[1]} target="blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
