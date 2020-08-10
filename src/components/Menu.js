import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cx from "classnames"
import { AppContext } from '../store.js';

const links = [
  { label: 'Apartamentos', link: '/units' },
  { label: 'Galeria', link: '/gallery' },
  { label: 'Obra', link: '/status' },
  { label: 'Saldanha', link: '/lifestyle' },
  { label: 'Sobre nós', link: '/about' },
  { label: 'Contatos', link: '/contact' }
]

const MenuItem = ({ link, label, color }) => {
  return (
    <Link to={link} className={cx('w-full px-8 flex flex-1 items-center justify-between ', `bg-green0${color}`)} style={{ boxShadow: 'box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);' }}>
      <div>ICONE</div>
      <p className="text-white text-2xl font-light">{label}</p>
    </Link>
  )
}

const Menu = () => {
  const [state] = useContext(AppContext);

  return (
    <div className={cx('menu',
      'w-full flex flex-col fixed top-0 left-0 transition-transform duration-200 transform',
      {
        'translate-x-0': state.menuIsOpen,
        'translate-x-full': state.menuIsOpen
      }
    )} style={{ height: 'calc(100vh - 61px' }}>
      {links.map((link, index) => <MenuItem {...link} color={links.length - index - 1} key={link.link} />)}
    </div>
  )
}

export default Menu
