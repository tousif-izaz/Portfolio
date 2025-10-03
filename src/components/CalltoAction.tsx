import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="cta">
      <button onClick={() => window.location.href = '/projects'}>
        Explore My Projects
      </button>
    </div>
  );
};

export default CallToAction;
