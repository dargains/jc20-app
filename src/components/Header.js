import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store.js';
import cx from 'classnames'
import Icon from './Icon'
import Button from './Button'
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
  const [showDialog, setShowDialog] = useState(false)

  const handleToggleLang = lang => {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: lang })
  }
  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' })
  }
  const handleContact = () => {
    if (window.innerWidth < 768) {
      window.location.href = 'https://wa.me/351925595027?text=oi'
    } else {
      window.location.href = '/contacts'
    }
  }
  return (
    <header className="bg-green08 fixed bottom-0 z-20 w-screen">
      <nav className="container py-2 bg-green08 flex w-full items-center z-20 justify-between px-4">
        <HeaderIcon name="menu" handleClick={toggleMenu}>
          <Icon.Menu />
        </HeaderIcon>
        <HeaderIcon name="partilha">
          <Link className="mx-2" to="/share"><Icon.Share /></Link>
        </HeaderIcon>
        <HeaderIcon name="perfil">
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
        <div className="w-12 h-10" onClick={() => setShowDialog(!showDialog)}>
          <div className="absolute w-32 h-32" style={{top: -60, left: -40}}>
            <img src={whatsappImage} alt="Whatsapp"/>
          </div>
        </div>
      </nav>

      <aside className={cx(
        "fixed top-0 left-0 h-full w-full z-10 bg-white bg-opacity-50 pointer-events-none opacity-0 transition-opacity duration-300",
        {"pointer-events-auto opacity-100": showDialog}
        )}>
        <div className={cx("bg-white pt-16 pb-10 rounded-t-full w-full absolute text-center transform transition-transform duration-300 delay-150", {"translate-y-4": !showDialog})} style={{bottom: 58}}>
          <Icon.Close className="text-green08 absolute transform -translate-x-1/2 scale-75" style={{top: 20, left: '50%'}} handleClick={() => setShowDialog(false)} />
          <p className={cx(
            "text-green08 mb-6 font-display text-3xl transition-all  transform duration-200 delay-200",
            {"opacity-0 translate-y-4": !showDialog}
            )}>Precisa de <span className="text-green">ajuda?</span></p>
          <p className={cx(
            "text-md text-green08 mb-8 transition-all duration-200 delay-200",
            {"opacity-0 translate-y-4": !showDialog}
            )}>Vamos conversar por WhatsApp!</p>
          <Button text="abrir conversa" type="primary" className={cx(
            "transition-all duration-200 delay-200",
            {"opacity-0 transform-y-4": !showDialog}
            )} handleClick={handleContact}/>
        </div>
      </aside>
    </header>
  )
}

export default Header
