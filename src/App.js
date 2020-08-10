import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'
import db from './db';
import './tailwind.generated.css';

// views
import Menu from './components/Menu';
import Header from './components/Header';
import Home from './views/Home'
import Main from './views/Main'
import About from './views/About'
import Units from './views/Units';
import Share from './views/Share';

function App() {
  return (
    <div className="App min-h-screen">
      {
        db &&
        <Router>
          <Header />
          <Menu />
          <div className="container py-6">
            <Switch>
              <Route exact path="/">
                <Online>
                  <Main />
                </Online>
                <Offline>Ops, parece que está offline</Offline>
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/units">
                <Units />
              </Route>
              <Route path="/share">
                <Share />
              </Route>
            </Switch>
          </div>
        </Router>
      }
    </div>
  );
}

export default App;
