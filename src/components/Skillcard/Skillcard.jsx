import React from 'react';
import TiltedCard from '../Main/TiltedCard';
import GlareHover from '../GlareHover/GlareHover';
// import './SkillCard.css';

const SkillCard = ({ name, description, Icon }) => {
  if (!Icon) {
    return null;
  }

  return (   
    <GlareHover className='skill_card'
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1200}
        playOnce={false}
        > 
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
    </GlareHover>
  );
};

export default SkillCard;