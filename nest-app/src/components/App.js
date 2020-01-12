import React from 'react';
import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Hero from '../assets/Hero/Farmhouses-479.png';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="brand-container">
          <span className="brand">N</span>
          <div>NEST</div>
        </div>
        <div className="hamburger-container">
          <div className="menu">
            <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>
          </div>
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-image"></div>
        <div className="welcome">Welcome Home</div>
      </div>
      <div>
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </div>
    </div>
  );
}

export default App;
