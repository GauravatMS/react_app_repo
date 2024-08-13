import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SCRET_FROM_URL,SECRET_FROM_IDENTIFIER,ALT_SECRET,DEMO_ENV, CLIENT_ID, CLIENT_SECRET } from './constants';
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
        <p>
          Client ID of App Reg : {CLIENT_ID}
        </p>
        <p>
          Client secret of App Reg : {CLIENT_SECRET}
        </p>
        <div>
      <h1>staticwebapp.config.json Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
      </header>
    </div>
    
  );
}

export default App;
