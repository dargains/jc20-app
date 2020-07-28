import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store.js';

const Header = () => {
  const [state, dispatch] = useContext(AppContext);
  const [language, setLanguage] = useState(state.language)

  const handleChangeLang = e => {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: e.target.id })
    setLanguage(state.language)
  }
  return (
    <header className="container py-4">
      <p className="text-xl">header</p>
      <nav>
        <Link className="mx-2 text-blue-400" to="/">main</Link>
        <Link className="mx-2 text-blue-400" to="/home">home</Link>
        <Link className="mx-2 text-blue-400" to="/units">units</Link>
      </nav>
      <div>
        <p>
          language: {language}
        </p>
        <div>
          <label htmlFor="pt">portugues</label>
          <input id="pt" type="radio" value="pt" name="language" defaultChecked={language === 'pt'} onClick={handleChangeLang} />
        </div>
        <div>
          <label htmlFor="en">english</label>
          <input id="en" type="radio" value="en" name="language" defaultChecked={language === 'en'} onClick={handleChangeLang} />
        </div>
      </div>
    </header>
  )
}

export default Header
