import React, { useEffect, useContext } from 'react'
import { useLocation, withRouter } from 'react-router-dom'
import { AppContext } from './store.js';

const RouteContainer = (props) => {
  const location = useLocation()
  const [store, dispatch] = useContext(AppContext)
  useEffect(() => {
    dispatch({ type: 'CLOSE_MENU' })
    return () => {

    }
  }, [location])
  return (
    <main className="container">
      {props.children}
    </main>
  )
}

export default withRouter(RouteContainer);