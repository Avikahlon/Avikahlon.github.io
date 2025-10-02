import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Resume_SWE_AbhijeetSingh.pdf`;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Abhijeet Singh
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/SkillsSection">Skills</a>
          </li>
          <li>
            <a href="/ProjectsSection">Project</a>
          </li>
          <li>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
          <li>
            <a href="/ContactSection">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;