import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="main-content">
      <h1>Projects</h1>
      <ProjectCard
        title="ML Stock Prediction"
        description="A project using Python and TensorFlow to predict stock prices."
      />
      <ProjectCard
        title="Restaurant Management System"
        description="Web app to manage restaurant orders and inventory."
      />
    </div>
  );
};

export default Projects;
