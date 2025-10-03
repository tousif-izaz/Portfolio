import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Node.js", "TensorFlow"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Docker", "Git", "AWS"]
    }
  ];

  return (
    <div className="main-content">
      <h1>About Me</h1>
      <p>
        My journey began as an entrepreneur in the food industry, where I learned valuable
        skills in leadership, problem-solving, and resilience. Currently, I am pursuing a
        Master's in Computer Science to pivot into tech, focusing on software engineering
        and machine learning.
      </p>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
