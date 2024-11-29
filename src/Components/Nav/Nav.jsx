import React, { useState, useEffect } from 'react';
import "./Nav.scss";

function Nav() {
  const [show, setShow] = useState(false);

  // Gestion de l'apparition du menu en fonction du scroll
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du défilement fluide
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Nettoyage pour éviter les listeners multiples
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <nav className={`nav ${show ? 'show' : ''}`}>
      <a href="#Header">A Propos</a>
      <a href="#languages-used">Langages et outils utilisés</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Nav;
