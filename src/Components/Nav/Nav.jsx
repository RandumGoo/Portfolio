import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./Nav.scss"

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${show ? 'show' : ''}`}>
      <Link to="Header" smooth={true} duration={500}>About</Link>
      <Link to="languages-used" smooth={true} duration={500}>Langages et outils utilisés</Link>
      <Link to="projects" smooth={true} duration={500}>Projets</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  );
}

export default Nav;
