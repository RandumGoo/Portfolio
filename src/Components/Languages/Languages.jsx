import React from 'react';
import './Languages.scss';
import '../main.scss';

function Languages() {
  return (
    <div className="languages">
      <h2>Langages et outils utilisés</h2>
      <div className="icons">
        <div className="icon"><i className="fab fa-js"></i> JavaScript</div>
        <div className="icon"><i className="fab fa-html5"></i> HTML5</div>
        <div className="icon"><i className="fab fa-css3-alt"></i> CSS3</div>
        <div className="icon"><i className="fab fa-sass"></i> SASS</div>
        <div className="icon"><i className="fab fa-react"></i> React</div>
        <div className="icon"><i className="fab fa-node"></i> Node.js</div>
        <div className="icon"><i className="fas fa-database"></i> MongoDB</div>
      </div>
    </div>
  );
}

export default Languages;
