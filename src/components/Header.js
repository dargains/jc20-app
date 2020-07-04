import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="container py-4">
      <p className="text-xl">header</p>
      <Link className="mx-2 text-blue-400" to="/">main</Link>
      <Link className="mx-2 text-blue-400" to="/home">home</Link>
      <Link className="mx-2 text-blue-400" to="/units">units</Link>
    </header>
  )
}

export default Header
