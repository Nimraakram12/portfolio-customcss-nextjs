

import React from 'react';
import "../style/Skills.css";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiAdobephotoshop } from 'react-icons/si';

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },

];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
