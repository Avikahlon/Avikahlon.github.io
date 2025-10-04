import React from 'react';
import './Projects.css';
import SR1 from "./assets/SR1.png";
import IDV1 from "./assets/idv1.png";

const projectData = [
    {
        date: "Feb 2025",
        title: "Software Request System",
        link: "#",
        teaser: "During my professional practice project at university, I designed a Software Request System that collects software requirements through a Power Apps form and compiled findings via a Power BI dashboard, streamlining the software request process.",
        tech: ["Power BI", "Power Apps", "Python"],
        image: SR1,
    },
    {
        date: "Sep 2024",
        title: "Interactive Data Visualization System",
        link: "https://australianemployment.streamlit.app/",
        teaser: "A Python-based Interactive Data Visualization System that analyzes and visualizes open-source Australian employment and unemployment data using libraries like Streamlit, Plotly, and Matplotlib.",
        tech: ["Pandas", "Streamlit", "Plotly", "Matplotlib"],
        image: IDV1,
    },
    {
        date: "Jan 2024",
        title: "Emotion Recognition System",
        link: "#",
        teaser: "Designed and developed a real-time Emotion Recognition desktop application aimed at supporting children with disabilities by recognizing and responding to their emotional states.",
        tech: ["Pandas", "Customtkinter", "OpenCV", "MySQL"],
        image: "https://placehold.co/350x200/50ff7d/ffffff?text=Emotion+AI",
    },
    {
        date: "Jul 2025",
        title: "Full-stack Web App",
        link: "https://github.com/Avikahlon/LOL-Stats-Tracker",
        teaser: "A full-stack web application that delivers dynamic, interactive insights into professional League of Legends gameplay using a Python scraper, PostgreSQL, Flask, and React.",
        tech: ["Python", "React", "PostgreSQL", "Flask"],
        image: "https://placehold.co/350x200/ff50ff/ffffff?text=Full-Stack+Web",
    },
];

const Projects = () => {
    return (
        <div className="projects-wrapper">
            <section className="g-cards g-cards--home">
                <ul className="g-cards__list">
                    {projectData.map((project, index) => (
                        <li key={index} className="c-card">
                            <time className="c-card__date" dateTime={project.date.replace(/ /g, '/')}>
                                {project.date}
                            </time>
                            <img 
                                className="c-card__thumbnail o-image" 
                                src={project.image} 
                                alt={`Thumbnail for ${project.title}`}
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/350x200/374151/ffffff?text=Image+Missing"; }}
                            />

                            <a href={project.link} className="c-card__title" target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>

                            <div className="c-card__teaser o-rich-text">
                                <p>{project.teaser}</p>
                            </div>
                            
                            {/* Tech Stack Badges */}
                            <div className="tech-badges-container">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank" className="c-card__btn o-btn">
                                View Project Details
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Projects;