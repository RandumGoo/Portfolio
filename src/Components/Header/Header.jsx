// File: Header.js
import React from 'react';
import './Header.scss';
import '../main.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Zineb Chaal</h1>
        <p className="description">
Developpeuse Web se spécialisant dans la création d'interfaces dynamiques et responsives.
</p>
        <div className="icons">
          <a 
            href="https://github.com/RandumGoo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a 
            href="/resume.pdf" 
            download="Resume" 
            className="icon"
          >
            <i className="fas fa-file-pdf"></i> CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
