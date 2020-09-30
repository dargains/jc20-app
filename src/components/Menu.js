import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cx from "classnames"
import Icon from './Icon'
import { AppContext } from '../store.js';

const links = [
  { label: 'Apartamentos', link: '/units', icon: 'Sofa' },
  { label: 'Galeria', link: '/gallery', icon: 'Art' },
  { label: 'Obra', link: '/status', icon: 'Building' },
  { label: 'Saldanha', link: '/lifestyle', icon: 'Drinks' },
  { label: 'Sobre nós', link: '/about', icon: 'RC' },
  { label: 'Contatos', link: '/contact', icon: 'Contact' }
]

const MenuItem = ({ link, label, icon, color }) => {
  return (
    <Link to={link} className={cx('w-full px-8 flex flex-1 items-center justify-between ', `bg-green0${color}`)} style={{ boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)', zIndex: color }}>
      <Icon.Complex type={icon} />
      <p className="text-white text-3xl font-hairline">{label}</p>
    </Link>
  )
}

const Menu = () => {
  const [state] = useContext(AppContext);

  return (
    <div className={cx('menu',
      'w-full flex flex-col fixed top-0 left-0 transition-transform duration-200 transform z-10',
      {
        'translate-x-0': state.menuIsOpen,
        'translate-x-full': !state.menuIsOpen
      }
    )} style={{ height: 'calc(100vh - 61px' }}>
      {links.map((link, index) => <MenuItem {...link} color={links.length - index - 1} key={link.link} />)}
    </div>
  )
}

export default Menu
