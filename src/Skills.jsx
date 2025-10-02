import React from 'react';
import './Skills.css';

// --- Data Structure for Skills ---
const skillCategories = [
    {
        title: "Programming",
        skills: [
            { name: "Python", description: "High-level, versatile programming language" },
            { name: "JavaScript", description: "Core language for web development" },
            { name: "HTML", description: "Structure and semantic markup" },
            { name: "CSS", description: "Styling and layout" },
            { name: "Linux", description: "Command-line interface and scripting" },
        ],
    },
    {
        title: "Data Analysis & Visualization",
        skills: [
            { name: "Pandas", description: "Data manipulation and cleaning" },
            { name: "NumPy", description: "Efficient numerical computing" },
            { name: "Jupyter Notebooks", description: "Interactive coding and documentation" },
            { name: "Microsoft Excel", description: "Advanced spreadsheet analysis" },
            { name: "Power BI / Tableau", description: "Business intelligence and dashboarding" },
            { name: "Matplotlib / Plotly", description: "Data visualization libraries" },
            {name: "Streamlit", description: "Web apps for data science" },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", description: "Relational Database Management System (RDBMS)" },
            { name: "PostgreSQL", description: "Object-relational database system" },
            {name: "MongoDB", description: "NoSQL database for flexible data models" },
            { name: "SQL", description: "Structured Query Language for database operations" },
            { name: "Database Design", description: "Schema design and normalization" },
            { name: "Data Warehousing", description: "ETL processes and data storage" },
            { name: "Data Modeling", description: "Designing data structures and relationships" },
            {name: "Oracle DB", description: "Enterprise-level RDBMS" },
        ],
    },
    {
        title: "Machine Learning & AI",
        skills: [
            { name: "Scikit-learn", description: "Machine learning library for classical models" },
            { name: "TensorFlow / Keras", description: "Deep learning frameworks" },
            { name: "NLP", description: "Natural Language Processing techniques" },
            { name: "PyTorch", description: "Deep learning and neural networks" },
            { name: "Supervised Learning", description: "Classification and regression models" },
            { name: "Unsupervised Learning", description: "Clustering and dimensionality reduction" },
            { name: "Regression", description: "Predictive modeling techniques" },
        ],
    },
    {
        title: "Web Development",
        skills: [
            { name: "React", description: "Component-based JavaScript UI library" },
            { name: "Node.js", description: "JavaScript runtime environment" },
            { name: "RESTful APIs", description: "Designing and integrating web services" },
            { name: "Flask / FastAPI", description: "Python backend web frameworks" },
            { name: "Frontend/Backend Integration", description: "Full stack connectivity" },
        ],
    },
    {
        title: "Cloud & Dev Ops",
        skills: [
            { name: "AWS", description: "Amazon Web Services cloud platform" },
            { name: "Azure", description: "Microsoft cloud platform" },
            { name: "Docker", description: "Containerization for consistent environments" },
            { name: "Git / GitHub", description: "Version control and code hosting" },
            { name: "Kubernetes", description: "Container orchestration concepts" },
        ],
    },
];

// Helper Component: Renders the category title with gradient effect
const CategoryTitle = ({ text }) => (
    <h3 className="category-title">
        <span className="category-title-text">
            {text}
        </span>
    </h3>
);

// Main Skills Component
const Skills = () => {
    return (
        <div className="skills-list-container">
            {skillCategories.map((category) => (
                <div key={category.title} className="skill-category">
                    <CategoryTitle text={category.title} />
                    
                    <ul className="skill-list">
                        {category.skills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                <span className="skill-bullet"></span>
                                <div>
                                    <strong className="skill-name">{skill.name}</strong>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;