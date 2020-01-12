import React from 'react';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="brand-container">
        <span className="brand">N</span>
        <div>NEST</div>
      </div>
      <div className="hamburger-container">
        <div className="menu">
          <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>
        </div>
      </div>
      <div className="hero-container">
        <div className="welcome">Welcome Home</div>
      </div>
    </div>
  );
}

export default App;
