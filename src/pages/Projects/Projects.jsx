import React from "react";
import "./Projects.css";
import Navbar from "../../components/Navbar/navbar";
import requestForm from '../../images/requestForm.png';
import dashboard from '../../images/dashboard.png';
import dashboard2 from '../../images/dashboard2.png';
import idv1 from '../../images/idv1.png';
import { SkillIcons } from '../../components/icons/Icons';
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";

const Projects = () => {
  return (
    
      <div className="project_content">
        <Navbar />
        <div className="projects-grid">
    
        <SpotlightCard className="project-card" spotlightColor="#ccd5ae">
            <img src={requestForm} alt="Project 1" />
            <div className="project_desc">
              <h3>Software Request System</h3>
              <p>
                During my professional practice project at university, I consulted with Campus Technology at Murdoch University to design a Software Request System that collects software requirements through a Power Apps form. During the project, I negotiated and resolved technical challenges, including integrating data from three distinct sources, building a unified data model, and ensuring real-time data validation. I also compiled and presented findings and insights via a Power BI dashboard to university IT staff, which streamlined the software request process and significantly reduced manual workload.
              </p>
              <div className="tech_used">
                <span className="tech_badge">
                    <SkillIcons.PowerBI/>
                    Power BI
                </span>
                <span className="tech_badge">
                    <SkillIcons.PowerApps />
                    Power Apps
                </span>
                <span className="tech_badge">
                    <SkillIcons.Python />
                    Python
                </span>
              </div>
            </div>
        </SpotlightCard>
        

        <SpotlightCard className="project-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <img src={idv1} alt="Project 2" />
            <div className="project_desc">
              <h3>Interactive Data Visualization System</h3>
              <p>
               A Python-based Interactive Data Visualization System that analyzes and visualizes open-source Australian employment and unemployment data. The platform offers dynamic, user-friendly visualizations to uncover trends, patterns, and insights across states, industries, and time periods.
              </p>
              <div className="tech_used">
                <span className="tech_badge">
                    <SkillIcons.Pandas/>
                    Pandas
                </span>
                <span className="tech_badge">
                    <SkillIcons.Streamlit />
                    Streamlit
                </span>
                <span className="tech_badge">
                    <SkillIcons.Plotly />
                    Plotly
                </span>
                <span className="tech_badge">
                    <SkillIcons.Matplotlib />
                    Matplotlib
                </span>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="project-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <img src={idv1} alt="Project 3" />
            <div className="project_desc">
              <h3>Emotion Recognition System</h3>
              <p>
               Designed and developed a real-time Emotion Recognition desktop application aimed at supporting children with disabilities by recognizing and responding to their emotional states. The application includes role-based access for both users (e.g., educators or caregivers) and administrators, along with an interactive dashboard for monitoring emotion trends and user activity.
              </p>
              <div className="tech_used">
                <span className="tech_badge">
                    <SkillIcons.Pandas/>
                    Pandas
                </span>
                <span className="tech_badge">
                    <SkillIcons.Customtkinter />
                    Customtkinter
                </span>
                <span className="tech_badge">
                    <SkillIcons.OpenCV />
                    OpenCV
                </span>
                <span className="tech_badge">
                    <SkillIcons.NumPy />
                    NumPy
                </span>
                <span className="tech_badge">
                    <SkillIcons.Pillow />
                    Pillow
                </span>
                <span className="tech_badge">
                    <SkillIcons.MySQL />
                    MySQL
                </span>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="project-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <img src={idv1} alt="Project 3" />
            <div className="project_desc">
              <h3>Full-stack Web App</h3>
              <p>
               a full-stack web application that delivers dynamic, interactive insights into professional League of Legends gameplay. It features a custom Python web scraper that collects live player and match statistics, stored in a PostgreSQL database. The backend is powered by Flask, which exposes a RESTful API to serve data to a fast and responsive React + Vite frontend.
              </p>
              <div className="tech_used">
                <span className="tech_badge">
                    <SkillIcons.Python/>
                    Python
                </span>
                <span className="tech_badge">
                    <SkillIcons.React />
                    React
                </span>
                <span className="tech_badge">
                    <SkillIcons.PostgreSQL />
                    PostgreSQL
                </span>
                <span className="tech_badge">
                    <SkillIcons.Matplotlib />
                    Matplotlib
                </span>
                <span className="tech_badge">
                    <SkillIcons.Flask />
                    Flask
                </span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
  );
};

export default Projects;