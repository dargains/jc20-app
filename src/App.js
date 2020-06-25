import React from 'react';
import logo from './logo.svg';
import './tailwind.generated.css';

function App() {
  return (
    <div className="App">
      <header className="App-header flex items-center flex-col">
        <img src={logo} className="App-logo w-1/2" alt="logo" />
        <p className="text-2xl text-gray-600">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
