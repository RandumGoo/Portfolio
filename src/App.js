import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Languages from './Components/Languages/Languages';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import './Components/main.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <section id="About"><Header /></section>
        <section id="languages-used"><Languages /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
