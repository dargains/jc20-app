import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import { AppContext } from './store.js'
import db from './db'
import Axios from 'axios'
import { projectUrl } from './api.js'
import { isIOS } from './helpers.js'

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
          if (user.token) Axios.post(`${projectUrl}/auth/refresh`, {token: user.token}).then(response => {
            user.token = response.data.data.token
            dispatch({ type: 'SET_USER', payload: user })
          }).catch(() => {
            user.logged = false
            dispatch({ type: 'SET_USER', payload: user})
          })
        }
      })
    } else {
      dispatch({type: 'SET_AUTH'})
    }
    if (location.pathname === '/' || location.pathname === '/welcome') setPadding(0)
    else setPadding(isIOS() ? 74 : 58)
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