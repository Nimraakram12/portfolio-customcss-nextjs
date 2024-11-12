
import React from 'react';
import "../style/About.css";
import Image from 'next/image';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiCairographics } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <Image 
            src="/images/my3.png" 
            alt="Nimra Akram" 
            width={200} 
            height={200} 
            className="profile-pic"
          />
        </div>
        <div className="about-text">
          <p>Hello! I am Nimra Akram, a passionate web developer and graphic designer. I love creating engaging and visually appealing digital experiences. With a strong foundation in both technical and creative skills, I specialize in building responsive websites and developing brand identities that stand out.</p>
          <p>Here are a few of my key skills:</p>
          <ul className="skills-list">
            <li>Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
            <li>Graphic Design (Adobe Photoshop, Illustrator, Figma)</li>
            <li>Responsive Design & User Experience</li>
            <li>Branding & Visual Identity</li>
          </ul>
        </div>
        <div className='about-icons'>
        <FaHtml5 />
        <FaCss3 />
        <IoLogoJavascript />
        <SiTypescript />
        <RiNextjsFill />
        <SiCairographics />
        <FaFigma />

        </div>
      </div>
    </section>
  );
};

export default About;

   