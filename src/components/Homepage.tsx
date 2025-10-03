import React from 'react';
//import dp1 from "../dp1.jpg"

const HomePage: React.FC = () => {
  return (
    <div className="main-content">
      <img 
        src="/dp1.jpg" 
        alt="Your portrait" 
      />
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! My name is Tousif Izaz, and I am a passionate professional 
          in Software Development. This space 
          showcases my journey, achievements, and creative works.
        </p>
        <p>
          Feel free to explore my blog, learn more about my projects, or get in 
          touch!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
