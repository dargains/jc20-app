import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import { AppContext } from './store.js'
import db from './db'

const RouteContainer = (props) => {
  const [padding, setPadding] = useState(0)
  const location = useLocation()
  const history = useHistory()
  const [state, dispatch] = useContext(AppContext)
  
  useEffect(() => {
    dispatch({ type: 'CLOSE_MENU' })
    if (!state.user) {
      db.table('user').toArray().then(users => {
        const user = users[0]
        if (user) {
          dispatch({ type: 'SET_USER', payload: user })
        }
      })
    } else if (location.pathname === '/') history.push('/welcome')
    if (location.pathname === '/' || location.pathname === '/welcome') setPadding(0)
    else setPadding(58)
    window.scrollTo({top:0, behavior: 'smooth'})
    return () => {

    }
  }, [dispatch, history, location, state.user])
  return (
    <main style={{paddingBottom: `${padding}px`}}>
      {props.children}
    </main>
  )
}

export default withRouter(RouteContainer);