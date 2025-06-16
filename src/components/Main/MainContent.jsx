import React from 'react';
import SplitText from './SplitText';
import './Main.css';

const MainContent = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="main_content">
      <h1 className="main_text">
        <SplitText
            text="Abhijeet Singh"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
        />
      </h1>
      <p className="about"></p>
      <div className="social-buttons">
        <button className="button" type="button" id="b1">
          <span className="label">Resume</span>
        </button>
        <button className="button" type="button" id="b2">
          <span className="label">LinkedIn</span>
        </button>
      </div>
    </div>
  );
};

export default MainContent;