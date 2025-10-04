import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  const resumeUrl = `${import.meta.env.BASE_URL}Resume_SWE_AbhijeetSingh.pdf`;

  return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Abhijeet Singh
                </a>
            </div>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                )}
            </button>

            <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <a href="#skills" onClick={toggleMenu}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li>
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;