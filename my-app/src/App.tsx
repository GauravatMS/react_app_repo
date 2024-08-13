import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SCRET_FROM_URL,SECRET_FROM_IDENTIFIER,ALT_SECRET,DEMO_ENV } from './constants';
import data from './staticwebapp.config.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sceret without identifier id : {SCRET_FROM_URL}
        </p>
        <p>
          Sceret with identifier id : {SECRET_FROM_IDENTIFIER}
        </p>
        <p>
          Sceret alternate method : {ALT_SECRET}
        </p>
        <p>
          Demo Environment var : {DEMO_ENV}
        </p>
        <div>
      <h1>Config.JSON Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
      </header>
    </div>
    
  );
}

export default App;
