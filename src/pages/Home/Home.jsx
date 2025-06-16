import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Beams from '../../components/Beams/Beams';
import MainContent from '../../components/Main/MainContent';
import ContactFooter from '../../components/footer/ContactFooter';

const Home = () => {
  return (
    <div className="home-container">
      <div className="beams-background">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={10}
        />
      </div>

      <div className="main-content">
        <Navbar />
        <MainContent />
        <ContactFooter />
      </div>
    </div>
  );
};

export default Home;