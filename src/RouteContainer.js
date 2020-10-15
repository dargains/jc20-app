import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import { AppContext } from './store.js';
import db from './db'

const RouteContainer = (props) => {
  const [padding, setPadding] = useState(0)
  const location = useLocation()
  const history = useHistory();
  const [store, dispatch] = useContext(AppContext)
  console.log(store);
  useEffect(() => {
    dispatch({ type: 'CLOSE_MENU' })
    db.table('user').toArray().then(users => {
      const user = users[0]
      if (user) {
        dispatch({ type: 'SET_USER', payload: user })
        if (location.pathname === '/') history.push('/signup')
      }
    })
    if (location.pathname === '/signup') setPadding(0)
    else setPadding(58) 
    window.scrollTo({top:0, behavior: 'smooth'})
    return () => {

    }
  }, [dispatch, history, location])
  return (
    <main style={{paddingBottom: `${padding}px`}}>
      {props.children}
    </main>
  )
}

export default withRouter(RouteContainer);