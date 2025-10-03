import React from 'react';
import CallToAction from '../components/CalltoAction';

const Home: React.FC = () => {
  return (
    <div className="main-content">
      <h1>Tousif Izaz</h1>
      <p>
        I am currently pursuing a Master's in Computer Science with a passion for software 
        engineering and machine learning. I have experience running food businesses and am now 
        transitioning into the tech industry.
      </p>
      <div className="highlight-reel">
        <h2>Highlights</h2>
        <ul>
          <li>Founded and managed two successful food businesses</li>
          <li>Built multiple machine learning projects</li>
          <li>Strong expertise in Python, React, and cloud technologies</li>
        </ul>
      </div>
      <CallToAction />
    </div>
  );
};

export default Home;
