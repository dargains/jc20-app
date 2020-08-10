import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store.js';
import Icon from './Icon'
import Conditional from './Conditional.js';

const Header = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleToggleLang = lang => {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: lang })
  }
  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' })
  }
  return (
    <header className="container py-2 bg-green00 fixed bottom-0">
      <nav className="flex w-full items-center justify-between px-4">
        <Icon.Menu handleClick={toggleMenu} />
        <Link className="mx-2 text-white" to="/share"><Icon.Share /></Link>
        <Icon.User />
        <div>
          <Conditional if={state.language === 'pt'}>
            <Icon.Lang lang={state.language} handleClick={() => { handleToggleLang('en') }} />
          </Conditional>
          <Conditional if={state.language === 'en'}>
            <Icon.Lang lang={state.language} handleClick={() => { handleToggleLang('pt') }} />
          </Conditional>
        </div>
        <Link className="mx-2 text-white" to="/home">home</Link>
      </nav>
    </header>
  )
}

export default Header
