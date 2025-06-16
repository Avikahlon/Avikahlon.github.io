import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import SkillCard from '../../components/Skillcard/Skillcard';
import './skills_styles.css';
import { SkillIcons } from '../../components/icons/Icons';

const Skills = () => {
  return (
    <div className="skills-container">
        <Navbar />
        <div className="skills_container">
            <div className="skill_category">
                <h3 className="category_title">Programming & Scripting</h3>
                <div className="skills_grid">
                    <SkillCard 
                    name="Python"
                    description="High-level, versatile programming language"
                    Icon={SkillIcons.Python}
                    />
                    <SkillCard 
                    name="JavaScript"
                    description="High-level, versatile programming language"
                    Icon={SkillIcons.JavaScript}
                    />
                    <SkillCard 
                    name="HTML"
                    description="High-level, versatile programming language"
                    Icon={SkillIcons.HTML}
                    />
                    <SkillCard 
                    name="CSS"
                    description="High-level, versatile programming language"
                    Icon={SkillIcons.CSS}
                    />
                    <SkillCard 
                    name="Linux"
                    description="High-level, versatile programming language"
                    Icon={SkillIcons.Linux}
                    />
                </div>
            </div>

            <div className="skill_category">
                <h3 className="category_title">Data Analysis & Visualization</h3>
                <div className="skills_grid">
                    <SkillCard 
                        name="Pandas"
                        description="Data manipulation library"
                        Icon={SkillIcons.Pandas}
                    />
                    <SkillCard 
                        name="NumPy"
                        description="Numerical computing"
                        Icon={SkillIcons.NumPy}
                    />
                    <SkillCard 
                        name="Jupyter Notebooks"
                        description="Interactive coding environment"
                        Icon={SkillIcons.Jupyter}
                    />
                    <SkillCard 
                        name="Microsoft Excel"
                        description="Spreadsheet software"
                        Icon={SkillIcons.Excel}
                    />
                    <SkillCard 
                        name="Power BI"
                        description="Business intelligence tool"
                        Icon={SkillIcons.PowerBI}
                    />
                    <SkillCard 
                        name="Tableau"
                        description="Data visualization tool"
                        Icon={SkillIcons.Tableau}
                    />
                    <SkillCard 
                        name="Matplotlib"
                        description="Data visualization library"
                        Icon={SkillIcons.Matplotlib}
                    />
                </div>
            </div>

            <div className="skill_category">
                <h3 className="category_title">Databases</h3>
                <div className="skills_grid">
                    <SkillCard 
                        name="MySQL"
                        description="Relational Database"
                        Icon={SkillIcons.MySQL}
                    />
                    <SkillCard 
                        name="PostgreSQL"
                        description="Relational Database"
                        Icon={SkillIcons.PostgreSQL}
                    />
                </div>
            </div>

            <div className="skill_category">
                <h3 className="category_title">Machine Learning & AI</h3>
                <div className="skills_grid">
                    <SkillCard 
                        name="Scikit-learn"
                        description="ML library"
                        Icon={SkillIcons.Python}
                    />
                    <SkillCard 
                        name="Supervised"
                        description="Labeled data training"
                        Icon={SkillIcons.Python}
                    />
                    <SkillCard 
                        name="Unsupervised"
                        description="Pattern discovery"
                        Icon={SkillIcons.Python}
                    />
                    <SkillCard 
                        name="Regression"
                        description="Predictive modeling"
                        Icon={SkillIcons.Python}
                        />
                </div>
            </div>

            <div className="skill_category">
                <h3 className="category_title">Web Development</h3>
                <div className="skills_grid">
                    <SkillCard 
                        name="React"
                        description="JavaScript UI library"
                        Icon={SkillIcons.React}
                    />
                    <SkillCard 
                        name="Node.js"
                        description="JavaScript runtime"
                        Icon={SkillIcons.Nodejs}
                    />
                    <SkillCard 
                        name="RESTful APIs"
                        description="Web communication standard"
                        Icon={SkillIcons.REST}
                    />
                    <SkillCard 
                        name="Flask"
                        description="Python web framework"
                        Icon={SkillIcons.Flask}
                    />
                    <SkillCard 
                        name="FastAPI"
                        description="High-performance web framework"
                        Icon={SkillIcons.FastAPI}
                    />
                    <SkillCard 
                        name="Frontend/Backend Integration"
                        description="Full stack connectivity"
                        Icon={SkillIcons.Integration}
                    />
                </div>
            </div>

            <div className="skill_category">
                <h3 className="category_title">Cloud & Dev Ops</h3>
                <div className="skills_grid">
                    <SkillCard 
                        name="AWS"
                        description="Cloud platform"
                        Icon={SkillIcons.AWS}
                    />
                    <SkillCard 
                        name="Azure"
                        description="Microsoft cloud platform"
                        Icon={SkillIcons.Azure}
                    />
                    <SkillCard 
                        name="Docker"
                        description="Containerization tool"
                        Icon={SkillIcons.Docker}
                    />
                </div>
            </div>

            <div className="skill_category">
                <h3 className="category_title">Tools & Collaboration</h3>
                <div className="skills_grid">
                    <SkillCard 
                        name="Git"
                        description="Version control"
                        Icon={SkillIcons.Git}
                    />
                    <SkillCard 
                        name="GitHub"
                        description="Code hosting"
                        Icon={SkillIcons.GitHub}
                    />
                    <SkillCard 
                        name="Kubernetes"
                        description="Container Orchestration"
                        Icon={SkillIcons.Kubernetes}
                    />
                    <SkillCard 
                        name="Jira"
                        description="Project tracking"
                        Icon={SkillIcons.Jira}
                    />
                    <SkillCard 
                        name="Agile & Scrum"
                        description="Development methodologies"
                        Icon={SkillIcons.Agile}
                    />
                    <SkillCard 
                        name="VS Code"
                        description="Code editor"
                        Icon={SkillIcons.VSCode}
                    />
                </div>
            </div>

        </div>
    </div>
  );
};

export default Skills