import React, {useState, useContext, useEffect, useCallback} from 'react'
import { AppContext } from '../store.js';
import cx from 'classnames'
import Axios from 'axios';
import { itemsUrl } from '../api.js';
import db from '../db.js';
import Button from '../components/Button.js';

import Image01 from '../assets/images/cam-03-varanda.jpg'
import Image02 from '../assets/images/cam-04-hall.jpg'
import Image03 from '../assets/images/cam-07-escadas.jpg'
import Image04 from '../assets/images/cam-08-wc.jpg'
import Icon from '../components/Icon.js';
import { isIOS } from '../helpers.js';

const images = [Image01,Image02,Image03,Image04]
const RandomImage = images[Math.floor(Math.random() * Math.floor(3)) + 1]

const Welcome = () => {
  const [state, dispatch] = useContext(AppContext);
  const [showDialog, setShowDialog] = useState(true)
  const [name, setName] = useState('')
  const [content, setContent] = useState({})
  const [copy, setCopy] = useState({})

  const ios = isIOS();

  const changeCopy = useCallback(content => {
    const copy = content.find(translation => translation.language === state.language)
    setCopy(copy)
  },[state.language])

  const timeout = useCallback(() => {
    dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: true })
    if (state.user) {
      setName(state.user.name)
    }
    setTimeout(() => {
      dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: false })
      dispatch({ type: 'TOGGLE_MENU', payload: true })
    }, 3000);
  },[dispatch, state.user])

  const handleClose = () => {
    setShowDialog(false)
    timeout()
  }

  useEffect(() => {
    if (!Object.keys(content).length) {
      if (window.navigator.onLine) {
        Axios(`${itemsUrl}/page_welcome?fields=*.*`).then(response => {
          const allContent = response.data.data[0].translations;
          setContent(allContent)
          db.content.put({ page: 'Welcome', content: allContent })
          changeCopy(allContent)
        })
      } else {
        db.content.get('Welcome').then(contentDB => {
          setContent(contentDB.content)
          changeCopy(contentDB.content)
        })
      }
    } else {
      if (state.language !== copy.lang) {
        changeCopy(content)
      }
    }
    

  }, [changeCopy, content, copy.lang, dispatch, state.language, state.user, timeout])

  return (
    <section className="w-screen py-0 bg-green08" style={{height: window.innerHeight}}>
      <div
        className="w-full h-full flex items-end p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${RandomImage})` }}
        onClick={() => {dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: false })
        dispatch({ type: 'TOGGLE_MENU', payload: true })}}
      >
        <div className="bg-gray-800 bg-opacity-25 absolute w-full h-full pointer-events-none top-0 left-0"></div>
        <h2 className="font-display font-semibold text-5xl text-white w-4/5">
          <span className="block text-green">{copy.hello},</span>
          {name || copy.welcome}
        </h2>
      </div>
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
            handleClick={handleClose}
          />
          <p
            className={cx(
              "text-green08 mb-6 font-display text-4xl w-2/3 mx-auto transition-all transform duration-200 delay-200",
              { "opacity-0 translate-y-4": !showDialog }
            )}
          >
            Adicione o <span className="text-green">Avenida Living</span> ao seu ecrã principal
          </p>
          {
            ios
            ? <p
              className={cx(
                "text-md text-green08 mb-8 transition-all duration-200 delay-200",
                { "opacity-0 translate-y-4": !showDialog }
              )}
            >
              Clique em <Icon.Homescreen className="inline-block mx-1" /> e depois em "Ecrã principal"
            </p>
          : <Button
              text="abrir conversa"
              type="primary"
              className={cx("transition-all duration-200 delay-200 md:hidden", {
                "opacity-0 transform-y-4": !showDialog,
              })}
            />
          }
        </div>
      </aside>
    </section>
  )
}

export default Welcome
