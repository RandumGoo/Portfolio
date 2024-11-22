import React from 'react';
import './Projects.scss';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="cards">
        <div className="card">
          <img src="/images/booki.png" alt="Booki" />
          <h3>Booki</h3>
          <span>Frontend</span>
          <p>Création de l'interface utilisateur d'un site d'hébérgement en utilisant HTML et CSS.</p>
          <a href="https://github.com/your-github/booki" target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        <div className="card">
          <img src="/images/kasa.png" alt="Kasa" />
          <h3>Kasa</h3>
          <span>Frontend</span>
          <p>Un site de location en ligne construit en utilisant React pour une interface dynamique et SASS pour le style.</p>
          <a href="https://github.com/your-github/kasa" target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        <div className="card">
          <img src="/images/sophie_bluel.png" alt="Sophie Bluel" />
          <h3>Sophie Bluel</h3>
          <span>Frontend</span>
          <p>Un site de Portfolio d'une photographe professionelle. Création de sa partie dynamique en utilisant JS.</p>
          <a href="https://github.com/your-github/sophie-bluel" target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        <div className="card">
          <img src="/images/grimoire.png" alt="Mon Vieux Grimoire" />
          <h3>Mon Vieux Grimoire</h3>
          <span>Backend</span>
          <p>Création du Backend pour une librairie en ligne pour gérer la notation de livres. En utilisant Node.js, Express, et MongoDB.</p>
          <a href="https://github.com/your-github/mon-vieux-grimoire" target="_blank" rel="noopener noreferrer" className="github-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
