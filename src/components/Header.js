import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store.js';
import Icon from './Icon'
import Conditional from './Conditional.js';
import whatsappImage from '../assets/images/whatsapp.png'

const HeaderIcon = ({ children, name, handleClick }) => {
  return (
    <div onClick={handleClick} className="flex flex-col items-center justify-center w-12 text-white text-xs">
      {children}
      {name}
    </div>
  )
}

const Header = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleToggleLang = lang => {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: lang })
  }
  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' })
  }
  return (
    <header className="py-2 bg-green08 fixed bottom-0 z-20 w-screen">
      <nav className="container flex w-full items-center justify-between px-4">
        <HeaderIcon name="menu" handleClick={toggleMenu}>
          <Icon.Menu />
        </HeaderIcon>
        <HeaderIcon name="share">
          <Link className="mx-2" to="/share"><Icon.Share /></Link>
        </HeaderIcon>
        <HeaderIcon name="user">
          <Icon.User />
        </HeaderIcon>
        <div>
          <Conditional if={state.language === 'pt'}>
            <HeaderIcon name="idioma" handleClick={() => handleToggleLang('en')} >
              <Icon.Lang lang={state.language} />
            </HeaderIcon>
          </Conditional>
          <Conditional if={state.language === 'en'}>
            <HeaderIcon name="idioma" handleClick={() => handleToggleLang('pt')} >
              <Icon.Lang lang={state.language}/>
            </HeaderIcon>
          </Conditional>
        </div>
        <Link to="/contacts" className="w-12 h-10">
          <div className="absolute w-32 h-32" style={{top: -60, left: -40}}>
            <img src={whatsappImage} alt="Whatsapp"/>
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Header
