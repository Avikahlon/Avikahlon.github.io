import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import MainContent from '../../components/Main/MainContent';
import ContactPage from '../footer/ContactPage';
import './Home.css';

const Home = ({ fadeInComplete }) => {
  const [beamsStarted, setBeamsStarted] = useState(false);
  const [textAnimationStarted, setTextAnimationStarted] = useState(false);

  const handleBeamsComplete = () => {
    setTextAnimationStarted(true);
  };

  return (
    <div className="home-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className='center-text'>
        <MainContent/>
      </div>
    </div>
    
  );
};

export default Home;