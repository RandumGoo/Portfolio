import React from 'react';  
import './Projects.scss';  

function Projects() {  
  return (  
    <div className="projects">  
      <h2>Projets</h2>  
      <div className="cards">  

        {/* Projet Booki */}  
        <div className="card">  
          <img src="/images/booki.png" alt="Booki" />  
          <h3>Booki</h3>  
          <span>Frontend</span>  
          <p><strong>Description:</strong> Création de l'interface utilisateur d'un site d'hébergement avec HTML et CSS, et d'une interface responsive avec flexbox et media queries.</p>  
          <p><strong>Problématiques:</strong><br />  
            - Respect des standards W3C pour l'accessibilité.<br />  
            - Responsivité sur différents appareils et tailles d'écran.<br />  
            - Tests pour valider la compatibilité entre navigateurs.
          </p>  
          <p><strong>Solutions:</strong><br />  
            - Utilisation de flexbox et media queries pour la responsivité.<br />  
            - Validation du code HTML et CSS avec des outils en ligne.<br />  
            - Test avec Chrome DevTools pour simuler différentes résolutions.
          </p>  
          <a href="https://github.com/RandumGoo/P2-Booki.git" target="_blank" rel="noopener noreferrer" className="github-link">  
            <i className="fab fa-github"></i> GitHub  
          </a>  
        </div>  

        {/* Projet Kasa */}  
        <div className="card">  
          <img src="/images/kasa.png" alt="Kasa" />  
          <h3>Kasa</h3>  
          <span>Frontend</span>  
          <p><strong>Description:</strong> Développement d'un site de location en ligne avec React, intégration de la navigation avec React Router et gestion d'état avancée.</p>  
          <p><strong>Problématiques:</strong><br />  
            - Chargement dynamique des données sans rechargement de la page.<br />  
            - Sécurité des données utilisateurs lors des interactions.<br />  
            - Gestion des erreurs dans la navigation et les données.<br />  
          </p>  
          <p><strong>Solutions:</strong><br />  
            - Intégration de fetch() pour récupérer des données JSON.<br />  
            - Utilisation de React Router pour une navigation fluide.<br />  
            - Affichage des messages d'erreur clairs en cas de problèmes.<br />  
          </p>  
          <a href="https://github.com/RandumGoo/P5.git" target="_blank" rel="noopener noreferrer" className="github-link">  
            <i className="fab fa-github"></i> GitHub  
          </a>  
        </div>  

        {/* Projet Sophie Bluel */}  
        <div className="card">  
          <img src="/images/sophie_bluel.png" alt="Sophie Bluel" />  
          <h3>Sophie Bluel</h3>  
          <span>Frontend</span>  
          <p><strong>Description:</strong> Création du portfolio d'une photographe avec gestion dynamique des images et manipulation du DOM en JavaScript.</p>  
          <p><strong>Problématiques:</strong><br />  
            - Gestion des erreurs lors du chargement des images.<br />  
            - Ajout et suppression d'images sans rechargement de la page.<br />  
            - Sécurisation des formulaires d'ajout d'images.<br />  
            - Optimisation de la performance pour un chargement fluide.
          </p>  
          <p><strong>Solutions:</strong><br />  
            - Mise en place de gestion d'erreurs avec des messages d'alerte.<br />  
            - Utilisation de l'API Fetch pour gérer les opérations CRUD.<br />  
            - Vérification et validation des entrées utilisateurs.<br />  
            - Optimisation des scripts pour améliorer la fluidité.
          </p>  
          <a href="https://github.com/RandumGoo/P3.git" target="_blank" rel="noopener noreferrer" className="github-link">  
            <i className="fab fa-github"></i> GitHub  
          </a>  
        </div>  

        {/* Projet Mon Vieux Grimoire */}  
        <div className="card">  
          <img src="/images/grimoire.png" alt="Mon Vieux Grimoire" />  
          <h3>Mon Vieux Grimoire</h3>  
          <span>Backend</span>  
          <p><strong>Description:</strong> Création du backend d'une librairie en ligne avec Node.js, API RESTful, et gestion sécurisée des données avec MongoDB.</p>  
          <p><strong>Problématiques:</strong><br />  
            - Sécurisation des données sensibles (mots de passe, tokens).<br />  
            - Gestion des opérations CRUD pour les utilisateurs et les livres.<br />  
            - Mise en œuvre de la validation des schémas de données.<br />  
          </p>  
          <p><strong>Solutions:</strong><br />  
            - Utilisation de JWT pour l'authentification sécurisée.<br />  
            - Implémentation des schémas Mongoose pour structurer les données.<br />  
            - Hashage des mots de passe avec bcrypt.<br />  
          </p>  
          <a href="https://github.com/RandumGoo/P6v2.git" target="_blank" rel="noopener noreferrer" className="github-link">  
            <i className="fab fa-github"></i> GitHub  
          </a>  
        </div>  

      </div>  
    </div>  
  );  
}  

export default Projects;
