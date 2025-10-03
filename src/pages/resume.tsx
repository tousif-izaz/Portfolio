import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="main-content">
      <h1>Resume</h1>
      <p>Download my resume below.</p>
      <a href="/resume.pdf" download>Download Resume</a>
    </div>
  );
};

export default Resume;
