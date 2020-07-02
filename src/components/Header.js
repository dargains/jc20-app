import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <p className="text-xl">header</p>
      <Link to="/">main</Link>
      <Link to="/home">home</Link>
    </div>
  )
}

export default Header
