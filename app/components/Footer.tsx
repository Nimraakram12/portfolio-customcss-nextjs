

import React from 'react';
import "../style/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Nimra Akram. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/Nimraakram12" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nimra-akram-6ab0522b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4MZ3vTBgQrquZslxH8IvcQ%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.behance.net/nimraakram11" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
