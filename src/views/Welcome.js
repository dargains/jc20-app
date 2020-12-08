import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../store.js';

import Image01 from '../assets/images/cam-03-varanda.jpg'
import Image02 from '../assets/images/cam-04-hall.jpg'
import Image03 from '../assets/images/cam-07-escadas.jpg'
import Image04 from '../assets/images/cam-08-wc.jpg'

const images = [Image01,Image02,Image03,Image04]
const RandomImage = images[Math.floor(Math.random() * Math.floor(3)) + 1]

const Welcome = () => {
  const [state, dispatch] = useContext(AppContext);
  const [name, setName] = useState('')


  useEffect(() => {
    dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: true })
    if (state.user) {
      setName(state.user.name)
      setTimeout(() => {
        dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: false })
        dispatch({ type: 'TOGGLE_MENU', payload: true })
      }, 3000);
    }
  }, [dispatch, state.user])

  return (
    <section className="w-screen py-0 bg-green08" style={{height: window.innerHeight}}>
      <div
        className="w-full h-full flex items-end p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${RandomImage})` }}
        onClick={() => {dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: false })
        dispatch({ type: 'TOGGLE_MENU', payload: true })}}
      >
        <div className="bg-gray-800 bg-opacity-25 absolute w-full h-full pointer-events-none top-0 left-0"></div>
        <h2 className="font-display font-semibold text-5xl text-white w-2/3">
          <span className="block text-green">Olá</span>
          {name}
        </h2>
      </div>
    </section>
  )
}

export default Welcome
