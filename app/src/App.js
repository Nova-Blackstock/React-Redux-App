import React from 'react';
import logo from './logo.svg';
import './App.css';

import AdaData from './components/AdaData'
import XrpData from './components/XrpData'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src='https://cryptologos.cc/logos/cardano-ada-logo.png' className="App-logo" alt="logo" />
        <AdaData />
        <XrpData />
      </header>
    </div>
  );
}

export default App;
