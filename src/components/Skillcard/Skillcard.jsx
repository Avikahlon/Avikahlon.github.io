import React from 'react';
import TiltedCard from '../Main/TiltedCard';
// import './SkillCard.css';

const SkillCard = ({ name, description, Icon }) => {
  if (!Icon) {
    return null;
  }

  return (
    <div className="skill_card">
      <div className="icon">
        <Icon />
      </div>
      <h3 className="skill_name">
        {name.split('').map((letter, index) => (
          <span 
            key={index} 
            className="letter" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </h3>
      <p className="skill_desc">{description}</p>
    </div>
  );
};

export default SkillCard;