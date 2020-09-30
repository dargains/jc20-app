import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import RouteContainer from './RouteContainer';
import './tailwind.generated.css'

// views
// import Intro from './views/Intro';
import SignUp from './views/SignUp'
import Home from './views/Home'
import About from './views/About'
import Units from './views/Units';
import Unit from './views/Unit';
import Share from './views/Share';

// components
import Menu from './components/Menu';
import Header from './components/Header';


function App() {
  return (
    <div className="App min-h-screen">
      <Router>
        <Header />
        <Menu />
        {/* <Intro /> */}
        <RouteContainer>
          <Switch>
            <Route exact path="/">
              <SignUp />
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
            <Route path="/unit/:id">
              <Unit />
            </Route>
            <Route path="/share">
              <Share />
            </Route>
          </Switch>
        </RouteContainer>
      </Router>
    </div>
  );
}

export default App;
