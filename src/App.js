import React, { useEffect } from 'react';
import queryString from 'query-string'
import { Offline, Online } from 'react-detect-offline'
import Dexie from 'dexie'
import logo from './logo.svg';
import Main from './components/Main'
import './tailwind.generated.css';

function App() {
  useEffect(() => {
    console.log('qs: ', queryString.parse(window.location.search))
  }, [])
  return (
    <div className="App">
      <header className="App-header flex items-center flex-col">
        <img src={logo} className="App-logo w-1/2`" alt="logo" />
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
      <Online>
        <Main db={new Dexie('JC20')} />
      </Online>
      <Offline>Ops, parece que está offline</Offline>
    </div>
  );
}

export default App;
