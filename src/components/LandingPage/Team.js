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
      images: "/images/Team/Karla.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Github",
          link: "https://github.com/"
        }
      ]
    },
    {
      name: "Luis Eduardo Consolo",
      role: ["Lead Designer /", "UI & UX Designer"],
      socials: ["LinkedIn", "Behance"],
      link: [
        "https://www.linkedin.com/in/educonsolo/",
        "https://www.behance.net/educonsolo"
      ],
      images: "/images/Team/Luis.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Behance",
          link: "https://www.behance.net/"
        }
      ]
    },
    {
      name: "Diana Gunawan",
      role: ["UI & UX Designer"],
      socials: ["LinkedIn", "Behance"],
      link: [
        "https://www.linkedin.com/in/dianagunawan/",
        "https://www.behance.net/dianagunawan"
      ],
      images: "/images/Team/Diana.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Behance",
          link: "https://www.behance.net/"
        }
      ]
    },
    {
      name: "Anurag Sharma",
      role: ["UI & UX Designer"],
      socials: ["LinkedIn", "Behance"],
      link: [
        "https://www.linkedin.com/in/kikidesign29/",
        "https://www.behance.net/kikidesign29"
      ],
      images: "/images/Team/Anurag.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Behance",
          link: "https://www.behance.net/"
        }
      ]
    },
    {
      name: "Rafael Montenegro",
      role: ["Full Stack Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/rafaelmonte",
        "http://github.com/rafaelgsm"
      ],
      images: "/images/Team/Rafael.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Github",
          link: "https://github.com/"
        }
      ]
    },
    {
      name: "Sunny Xue",
      role: ["Full Stack Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/sunnyxue/",
        "https://github.com/Sunnysit"
      ],
      images: "/images/Team/Sunny.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Github",
          link: "https://github.com/"
        }
      ]
    },
    {
      name: "Juan Tirado",
      role: ["Back End Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/juanfernandotirado/",
        "https://github.com/juanfernandotirado"
      ],
      images: "/images/Team/Juan.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Github",
          link: "https://github.com/"
        }
      ]
    },
    {
      name: "Carolina Souza",
      role: ["Back End Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/carolinasmbastos/",
        "https://github.com/carolinasmbastos"
      ],
      images: "/images/Team/Carolina.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Github",
          link: "https://github.com/"
        }
      ]
    },
    {
      name: "Pratt Vaidya",
      role: ["Full Stack Developer"],
      socials: ["LinkedIn", "GitHub"],
      link: [
        "https://www.linkedin.com/in/prathameshvaidya/",
        "https://github.com/prattrv"
      ],
      images: "/images/Team/Pratt.JPG",
      socialArray: [
        {
          social: "LinkedIn",
          link: "https://www.linkedin.com/"
        },
        {
          social: "Github",
          link: "https://github.com/"
        }
      ]
    }
  ];

  return (
    <div className="team-members home-view" id="team">
      <h2>Our Team</h2>
      <div className="members">
      {teamMembers.map(member => (
        <TeamMember key={member.name} teamMember={member} />
      ))}
      </div>
    </div>
  );
};

export default Team;
