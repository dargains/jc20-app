import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'
import Dexie from 'dexie'
import Header from './components/Header';
import Home from './views/Home'
import Main from './views/Main'
import About from './views/About'
import './tailwind.generated.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Online>
              <Main db={new Dexie('JC20')} />
            </Online>
            <Offline>Ops, parece que está offline</Offline>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
