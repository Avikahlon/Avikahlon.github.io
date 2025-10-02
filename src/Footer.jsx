import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="footer-links">
                    <li><a href="https://github.com/Avikahlon" target="_blank" rel="noopener" title="Github">
                            Github
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/abhijeet-singh-a14827236/" target="_blank" rel="noopener" title="LinkedIn">
                            LinkedIn
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                    </li>
                    <li><a href="https://www.instagram.com/avi_9.9.9" target="_blank" rel="noopener" title="Instagram">
                            Instagram
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37m1.5-4.87h.01"/></svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <p>Abhijeet Singh. {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;