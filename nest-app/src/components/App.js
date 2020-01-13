import React from 'react';
import '../styles/App.scss';
import Navigation from './Nav';
import Homepage from './HomePage/Home';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
