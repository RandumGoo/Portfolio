import React from 'react';  
import './Projects.scss';  

function Projects() {  
  return (  
    <div className="projects">  
      <h2>Projets</h2>  
      <div className="cards">  

        <div className="card">  
          <img src="/images/booki.png" alt="Booki" />  
          <h3>Booki</h3>  
          <span>Frontend</span>  
          <p>Création de l'interface utilisateur d'un site d'hébergement en utilisant HTML et CSS.  
            Création de la structure de la page conformément aux normes établies par le W3C.  
            Respect des standards CSS.  
            Utilisation de flexbox pour le CSS et création de la partie responsive, avec des media queries définissant une largeur minimale et des unités flexibles (pourcentage et rem).  
          </p>  
          <a href="https://github.com/RandumGoo/P2-Booki.git" target="_blank" rel="noopener noreferrer" className="github-link">  
            <i className="fab fa-github"></i> GitHub  
          </a>  
        </div>  

        <div className="card">  
          <img src="/images/kasa.png" alt="Kasa" />  
          <h3>Kasa</h3>  
          <span>Frontend</span>  
          <p>Un site de location en ligne construit en utilisant React pour une interface dynamique et SASS pour le style.  
            Gestion de la navigation entre plusieurs pages sans rechargement en utilisant React Router.  
            Intégration et affichage des données d'un fichier JSON via fetch().  
            Gestion d'état et optimisation des performances avec le lazy loading.  
            Création d'un composant commun pour les éléments récurrents, en plus des composants réutilisables.  
          </p>  
          <a href="https://github.com/RandumGoo/P5.git" target="_blank" rel="noopener noreferrer" className="github-link">  
            <i className="fab fa-github"></i> GitHub  
          </a>  
        </div>  

        <div className="card">  
          <img src="/images/sophie_bluel.png" alt="Sophie Bluel" />  
          <h3>Sophie Bluel</h3>  
          <span>Frontend</span>  
          <p>Portfolio d'une photographe professionnelle. Création de la partie dynamique en JavaScript.  
            Gestion des erreurs de chargement d'images dynamiques.  
            Ajout et suppression d'images sans rechargement de la page.  
            Enregistrement des nouvelles images ajoutées.  
          </p>  
          <a href="https://github.com/RandumGoo/P3.git" target="_blank" rel="noopener noreferrer" className="github-link">  
            <i className="fab fa-github"></i> GitHub  
          </a>  
        </div>  

        <div className="card">  
          <img src="/images/grimoire.png" alt="Mon Vieux Grimoire" />  
          <h3>Mon Vieux Grimoire</h3>  
          <span>Backend</span>  
          <p>Création du backend pour une librairie en ligne permettant la notation de livres, en utilisant Node.js, Express et MongoDB.  
            Mise en place d'une API RESTful pour la gestion des livres (CRUD).  
            Création de la base de données et définition des schémas Mongoose pour structurer les utilisateurs et les livres sauvegardés.  
            Gestion de l'authentification pour garantir un accès sécurisé via la vérification des tokens.  
            Hashage des mots de passe pour renforcer la sécurité des connexions.  
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
