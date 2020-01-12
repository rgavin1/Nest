import React from 'react';
import '../styles/App.scss';
import Navigation from './Nav';
import Homepage from './HomePage/Home';
import { Controller, Scene } from 'react-scrollmagic';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
    </div>
  );
}

export default App;
