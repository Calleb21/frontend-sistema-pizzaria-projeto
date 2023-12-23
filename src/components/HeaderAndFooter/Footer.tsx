import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="icons-container">
        <a
          href="https://github.com/Calleb21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/calleb-camargo-682321237"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://instagram.com/calleb_camargo_01?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
