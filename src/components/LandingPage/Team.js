import React from "react";

import TeamMember from "./TeamMember";

const Team = () => {
  const teamMembers = [
    //Social Array property not used for now
    {
      name: "Karla Lopez",
      role: ["Project Manager /", "Front End Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/karlalopez3d/",
        "https://github.com/KarlaLGA"
      ],
      images: "/assets/images/Team/Karla.JPG"
    },
    {
      name: "Luis Eduardo Consolo",
      role: ["Lead Designer /", "UI & UX Designer"],
      socials: ["LinkedIn", "Behance"],
      link: [
        "https://www.linkedin.com/in/educonsolo/",
        "https://www.behance.net/educonsolo"
      ],
      images: "/assets/images/Team/Luis.JPG"
    },
    {
      name: "Diana Gunawan",
      role: ["UI & UX Designer"],
      socials: ["LinkedIn", "Behance"],
      link: [
        "https://www.linkedin.com/in/dianagunawan/",
        "https://www.behance.net/dianagunawan"
      ],
      images: "/assets/images/Team/Diana.JPG"
    },
    {
      name: "Anurag Sharma",
      role: ["UI & UX Designer"],
      socials: ["LinkedIn", "Behance"],
      link: [
        "https://www.linkedin.com/in/kikidesign29/",
        "https://www.behance.net/kikidesign29"
      ],
      images: "/assets/images/Team/Anurag.JPG"
    },
    {
      name: "Rafael Montenegro",
      role: ["Full Stack Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/rafaelmonte",
        "http://github.com/rafaelgsm"
      ],
      images: "/assets/images/Team/Rafael.JPG"
    },
    {
      name: "Sunny Xue",
      role: ["Full Stack Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/sunnyxue/",
        "https://github.com/Sunnysit"
      ],
      images: "/assets/images/Team/Sunny.JPG"
    },
    {
      name: "Juan Tirado",
      role: ["Back End Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/juanfernandotirado/",
        "https://github.com/juanfernandotirado"
      ],
      images: "/assets/images/Team/Juan.JPG"
    },
    {
      name: "Carolina Souza",
      role: ["Back End Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/carolinasmbastos/",
        "https://github.com/carolinasmbastos"
      ],
      images: "/assets/images/Team/Carolina.JPG"
    },
    {
      name: "Pratt Vaidya",
      role: ["Full Stack Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/prathameshvaidya/",
        "https://github.com/prattrv"
      ],
      images: "/assets/images/Team/Pratt.JPG"
    }
  ];

  return (
    <div className="team-members home-view" id="team">
      <img
        src="/assets/images/triangles.svg"
        alt="border"
        className="top-border"
      />
      <h2 className="red-text">Our Team</h2>
      <p>
        Zaila is brought to you by 9 passionate and talented people. With three
        designers who bring different perspectives to the style and 6 developers
        with experience from different platforms, this team is dedicated to
        bring a new experience as a reality.
      </p>
      <div className="members">
        {teamMembers.map(member => (
          <TeamMember key={member.name} teamMember={member} />
        ))}
      </div>
      <img
        src="/assets/images/triangles.svg"
        alt="border"
        className="bottom-border"
      />
    </div>
  );
};

export default Team;
