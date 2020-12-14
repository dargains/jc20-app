import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from '../store.js';
import cx from 'classnames'
import Icon from './Icon'
import Button from './Button'
import Conditional from './Conditional.js';
import whatsappImage from '../assets/images/whatsapp.png'
import { isIOS, phone } from '../helpers.js';

const HeaderIcon = ({ children, name, handleClick, className }) => {
  return (
    <div onClick={handleClick} className={cx("flex flex-col items-center justify-center w-12 text-white text-xs", className)}>
      {children}
      {name}
    </div>
  )
}

const Header = () => {
  const [state, dispatch] = useContext(AppContext);
  const [showDialog, setShowDialog] = useState(false)
  const [down, setDown] = useState(false)
  const history = useHistory()

  const handleToggleLang = lang => {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: lang })
  }
  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU', payload: true })
  }
  const handleContact = () => {
    if (window.innerWidth < 768) {
      window.location.href = `https://wa.me/${phone}`
    } else {
      history.push('/contacts')
    }
  }

  useEffect(() => {
    setDown(state.headerDown)
  }, [state.headerDown])
  return (
    <header className={cx(
      "fixed bottom-0 pointer-events-none z-20 w-full"
      )}>
      <nav className={cx("absolute bottom-0 py-2 bg-green08 flex w-full items-center z-20 justify-between px-4 pointer-events-auto transform transition-transform duration-200",
      {
        "translate-y-20": down,
        "pb-6": isIOS()
      })}
      >
        <HeaderIcon
          name="menu"
          handleClick={toggleMenu}
          className={cx({ "opacity-50": state.menuIsOpen })}
        >
          <Icon.Menu />
        </HeaderIcon>
        <Link to="/share">
          <HeaderIcon name="partilha">
            <Icon.Share />
          </HeaderIcon>
        </Link>
        <Link to="/profile">
          <HeaderIcon name="perfil">
            <Icon.User />
          </HeaderIcon>
        </Link>
        <div>
          <Conditional if={state.language === "pt"}>
            <HeaderIcon
              name="idioma"
              handleClick={() => handleToggleLang("en")}
            >
              <Icon.Lang lang={state.language} />
            </HeaderIcon>
          </Conditional>
          <Conditional if={state.language === "en"}>
            <HeaderIcon
              name="idioma"
              handleClick={() => handleToggleLang("pt")}
            >
              <Icon.Lang lang={state.language} />
            </HeaderIcon>
          </Conditional>
        </div>
        <div className="w-12 h-10" onClick={() => setShowDialog(!showDialog)}>
          <div className="absolute w-32 h-32 pointer-events-none" style={{ top: -60, left: -40 }}>
            <img src={whatsappImage} alt="Whatsapp" />
          </div>
        </div>
      </nav>

      <aside
        className={cx(
          "absolute top-0 left-0 h-full w-full z-10 bg-white bg-opacity-50 pointer-events-none opacity-0 transition-opacity duration-300",
          { "pointer-events-auto opacity-100": showDialog }
        )}
      >
        <div
          className={cx(
            "bg-white pt-16 pb-10 rounded-t-full w-full shadow-lg absolute text-center transform transition-transform duration-300 delay-150",
            { "translate-y-4": !showDialog }
          )}
          style={{ bottom: 58, backgroundImage: 'linear-gradient(to bottom, #d3d7d6, #ffffff' }}
        >
          <Icon.Close
            className="text-green08 absolute transform -translate-x-1/2 scale-75"
            style={{ top: 20, left: "50%" }}
            handleClick={() => setShowDialog(false)}
          />
          <p
            className={cx(
              "text-green08 mb-6 font-display text-3xl transition-all  transform duration-200 delay-200",
              { "opacity-0 translate-y-4": !showDialog }
            )}
          >
            Precisa de <span className="text-green">ajuda?</span>
          </p>
          <p
            className={cx(
              "text-md text-green08 mb-8 transition-all duration-200 delay-200",
              { "opacity-0 translate-y-4": !showDialog }
            )}
          >
            Vamos conversar por WhatsApp!
          </p>
          <Button
            text="abrir conversa"
            type="primary"
            className={cx("transition-all duration-200 delay-200 md:hidden", {
              "opacity-0 transform-y-4": !showDialog,
            })}
            handleClick={handleContact}
          />
          <p className="hidden md:block font-display text-4xl text-green08 font-bold">
            +351 <span className="text-green">912 566 905</span>
          </p>
        </div>
      </aside>
    </header>
  );
}

export default Header
