import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'
import Dexie from 'dexie'
import Header from './components/Header';
import Home from './views/Home'
import Main from './views/Main'
import About from './views/About'
import './tailwind.generated.css';

function App() {
  const [db, setDb] = useState(null)

  useEffect(
    () => {
      const db = new Dexie('JC20')
      // create the store
      db.version(1).stores({ appData: 'id,value' })
      setDb(db)
    },
    // run effect whenever the database connection changes
    []
  )
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container mx-auto py-6">

          <Switch>
            <Route exact path="/">
              <Online>
                <Main db={db} />
              </Online>
              <Offline>Ops, parece que está offline</Offline>
            </Route>
            <Route path="/home">
              <Home db={db} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
