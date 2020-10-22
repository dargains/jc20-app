import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import RouteContainer from './RouteContainer';
import './tailwind.generated.css'

// views
import Intro from './views/Intro';
import Welcome from './views/Welcome'
import About from './views/About'
import Units from './views/Units';
import Unit from './views/Unit';
import Share from './views/Share';
import Contacts from './views/Contacts';
import Email from './views/Email';
import Phone from './views/Phone';
import Gallery from './views/Gallery';
import Status from './views/Status';
import Lifestyle from './views/Lifestyle';
import Profile from './views/Profile';
import Login from './views/Login';
import SignUp from './views/Signup';
import ClientRegister from './views/ClientRegister';
import ClientList from './views/ClientList';
import EditProfile from './views/EditProfile';

// components
import Menu from './components/Menu';
import Header from './components/Header';


function App() {
  useEffect(() => {
    // let vh = window.innerHeight * 0.01;
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
    // window.addEventListener('resize', () => {
    //   // We execute the same script as before
    //   let vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });
  })
  return (
    <div className="App h-full">
      <Router>
        <Menu />
        <Header />
        <RouteContainer>
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route exact path="/welcome">
              <Welcome />
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
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/status">
              <Status />
            </Route>
            <Route path="/contacts/email">
              <Email />
            </Route>
            <Route path="/contacts/phone">
              <Phone />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/lifestyle">
              <Lifestyle />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/editprofile">
              <EditProfile />
            </Route>
            <Route path="/clientregister">
              <ClientRegister />
            </Route>
            <Route path="/clientlist">
              <ClientList />
            </Route>
          </Switch>
        </RouteContainer>
      </Router>
    </div>
  );
}

export default App;
