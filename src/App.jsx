import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

const HeaderSection = () => {
  return (
    <div className="header-section">
      <Navbar />
    </div>
  );
}

const TopSection = () => {
    return (
        <div id="hero" className="top-section text-center py-20 md:py-32 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white">
                Hello,<br />
                I'm Abhijeet.<br />
                Software Developer,<br/>
                Data Analyst
            </h1>
        </div>
    );
}

const ProjectsSection = () => {
    return (
        <div id="projects" className="projects-section pt-16 pb-20 border-t border-gray-800">
            <div className="projects-title font-bold text-center text-white mb-12">
              <h2>Projects</h2>
            </div>
            <Projects />
        </div>
    );
}

const SkillsSection = () => {
    return (
        <div id="skills" className="skills-section pt-16 pb-20 border-t border-gray-800">
            <div className="skills-title font-bold text-center text-white mb-12">
              <h2>Skills</h2>
            </div>
            <Skills />
        </div>
    );
}

function App() {
  return (
    <div className="app-global-style" style={{ position: 'relative' }}>
      <div className = "main-box">
        <HeaderSection />
        <TopSection />
        <ProjectsSection />
        <SkillsSection />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
