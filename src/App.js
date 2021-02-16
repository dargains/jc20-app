import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import RouteContainer from './RouteContainer';
import './tailwind.generated.css'

// components
import Menu from './components/Menu';
import Header from './components/Header';

// views
import Welcome from './views/Welcome'
import Intro from './views/Intro'
import About from './views/About'
import Units from './views/Units'
import Unit from './views/Unit'
import Share from './views/Share'
import Contacts from './views/Contacts'
import Email from './views/Email'
import Phone from './views/Phone'
import Gallery from './views/Gallery'
import Status from './views/Status'
import Lifestyle from './views/Lifestyle'
import Login from './views/Login'
import SignUp from './views/SignUp'
import DesktopTEMP from './views/DesktopTEMP';

const Profile = lazy(() => import('./views/Profile'))
const ClientRegister = lazy(() => import('./views/ClientRegister'))
const ClientList = lazy(() => import('./views/ClientList'))
const EditProfile = lazy(() => import('./views/EditProfile'))
const RequestReset = lazy(() => import('./views/RequestReset'))
const PasswordReset = lazy(() => import('./views/PasswordReset'))
const Client = lazy(() => import('./views/Client'))
const PreReservation = lazy(() => import('./views/PreReservation'))
const Tender = lazy(() => import('./views/Tender'))
const Reservation = lazy(() => import('./views/Reservation'))
const Documents = lazy(() => import('./views/Documents'))


function App() {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  })
  return (
    <div className="App h-full">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
              <Route path="/requestreset">
                <RequestReset />
              </Route>
              <Route path="/passwordreset">
                <PasswordReset />
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
              <Route path="/client/:id">
                <Client />
              </Route>
              <Route path="/prereservation/:id">
                <PreReservation />
              </Route>
              <Route path="/reservation/:id">
                <Reservation />
              </Route>
              <Route path="/tender/:id">
                <Tender />
              </Route>
              <Route path="/documents">
                <Documents />
              </Route>
            </Switch>
          </RouteContainer>
        </Suspense>
      </Router>
      <DesktopTEMP />
    </div>
  );
}

export default App;
