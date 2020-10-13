import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import cx from "classnames"
import Icon from './Icon'
import { AppContext } from '../store.js';
import { baseUrl } from '../api'
import db from '../db'


const MenuItem = ({ link, label, icon, color }) => {
  return (
    <Link to={link} className={cx('w-full px-8 flex flex-1 items-center justify-between ', `bg-green0${color} text-white`)} style={{ boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)', zIndex: color }}>
      {icon}
      <p className="text-white text-3xl font-hairline">{label}</p>
    </Link>
  )
}

const linkList = [
  { key: 'apartments', label: 'Apartamentos', link: '/units', icon: <Icon.Interna height={40}/> },
  { key: 'gallery', label: 'Galeria', link: '/gallery', icon: <Icon.Image height={40}/> },
  { key: 'status', label: 'Obra', link: '/status', icon: <Icon.Construction height={40}/> },
  { key: 'lifestyle', label: 'Saldanha', link: '/lifestyle', icon: <Icon.Drink height={40}/> },
  { key: 'aboutus', label: 'Sobre nós', link: '/about', icon: <Icon.RC height={40}/> },
  { key: 'contacts', label: 'Contatos', link: '/contacts', icon: <Icon.Contact height={40}/> }
]
const Menu = () => {
  const [state] = useContext(AppContext);
  const [content, setContent] = useState({})
  const [links, setLinks] = useState(linkList)



  const changeCopy = useCallback(allContent => {
    const copy = allContent.find(translation => translation.language === state.language)
    const newLinks = []
    for (let key in copy) {
      const thisLink = links.find(item => item.key === key)
      console.log(thisLink);
      if (thisLink) {
        thisLink.label = copy[key]
        newLinks.push(thisLink)
      }
    }
    setLinks(newLinks)
  },[links, state.language])



  useEffect(() => {
    if (!Object.keys(content).length) {
      if (window.navigator.onLine) {
        Axios(`${baseUrl}/menu?fields=*.*`).then(response => {
          const allContent = response.data.data[0].translations;
          setContent(allContent)
          db.content.put({ page: 'Menu', content: allContent })
          // changeCopy(allContent)
        })
      } else {
        db.content.get('Menu').then(contentDB => {
          setContent(contentDB.content)
          // changeCopy(contentDB.content)
        })
      }
    } else {
      // changeCopy(content)
    }
    return () => {
      
    }
  }, [changeCopy, content])
  return (
    <aside className={cx('menu',
      'w-full flex flex-col fixed top-0 left-0 transition-transform duration-200 transform z-10',
      {
        'translate-x-0': state.menuIsOpen,
        'translate-x-full': !state.menuIsOpen
      }
    )} style={{ height: 'calc(100vh - 58px' }}>
      {links.map((link, index) => <MenuItem {...link} color={index + 2} key={link.link} />)}
    </aside>
  )
}

export default Menu
