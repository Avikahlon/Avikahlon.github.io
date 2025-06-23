import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Beams from '../../components/Beams/Beams';
import MainContent from '../../components/Main/MainContent';
import ContactPage from '../footer/ContactPage';

const Home = ({ fadeInComplete }) => {
  const [beamsStarted, setBeamsStarted] = useState(false);
  const [textAnimationStarted, setTextAnimationStarted] = useState(false);

  useEffect(() => {
    if (fadeInComplete) {
      setBeamsStarted(true);
    }
  }, [fadeInComplete]);

  const handleBeamsComplete = () => {
    setTextAnimationStarted(true);
  };

  return (
    <div className="home-container">
      <div className="beams-background">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={1}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={10}
          running={beamsStarted}
          onComplete={handleBeamsComplete}
        />
      </div>

      <div className="main-content">
        <Navbar />
        <MainContent animate={textAnimationStarted} />
      </div>
    </div>
    
  );
};

export default Home;