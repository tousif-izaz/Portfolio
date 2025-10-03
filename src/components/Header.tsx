import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
       <h1>TOUSIF <span>IZAZ</span></h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </nav>
    </header>
  );
};

export default Header;
