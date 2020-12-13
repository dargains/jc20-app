import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import RouteContainer from './RouteContainer';
import './tailwind.generated.css'

// components
import Menu from './components/Menu';
import Header from './components/Header';

// views
const Welcome = lazy(() => import('./views/Welcome'))
const Intro = lazy(() => import('./views/Intro'))
const About = lazy(() => import('./views/About'))
const Units = lazy(() => import('./views/Units'))
const Unit = lazy(() => import('./views/Unit'))
const Share = lazy(() => import('./views/Share'))
const Contacts = lazy(() => import('./views/Contacts'))
const Email = lazy(() => import('./views/Email'))
const Phone = lazy(() => import('./views/Phone'))
const Gallery = lazy(() => import('./views/Gallery'))
const Status = lazy(() => import('./views/Status'))
const Lifestyle = lazy(() => import('./views/Lifestyle'))
const Profile = lazy(() => import('./views/Profile'))
const Login = lazy(() => import('./views/Login'))
const SignUp = lazy(() => import('./views/SignUp'))
const ClientRegister = lazy(() => import('./views/ClientRegister'))
const ClientList = lazy(() => import('./views/ClientList'))
const EditProfile = lazy(() => import('./views/EditProfile'))
const RequestReset = lazy(() => import('./views/RequestReset'))
const PasswordReset = lazy(() => import('./views/PasswordReset'))
const Client = lazy(() => import('./views/Client'))
const PreReservation = lazy(() => import('./views/PreReservation'))
const Tender = lazy(() => import('./views/Tender'))
const Reservation = lazy(() => import('./views/Reservation'))


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
            </Switch>
          </RouteContainer>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
