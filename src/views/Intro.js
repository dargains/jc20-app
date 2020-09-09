import React from 'react'
import RCLogo from '../assets/images/rc logo.svg'
import ALLogo from '../assets/images/al logo.svg'
import Fachada from '../assets/images/fachada01.jpg'

const introStyle = { backgroundImage: `url(${Fachada})` }

const Intro = () => {
  return (
    <section className="min-w-screen min-h-screen bg-white z-20">
      <figure className="absolute top-0 left-0 w-full h-full bg-white animate-fadeInOut opacity-0 flex items-center justify-center">
        <img src={RCLogo} alt="Rio Capital" />
      </figure>
      <figure className="absolute top-0 left-0 w-full h-full bg-white animate-fadeInOut2 opacity-0 flex items-center justify-center">
        <img src={ALLogo} alt="Avenida Living" />
      </figure>
      <div className="absolute top-0 left-0 w-screen h-screen bg-cover bg-right bg-gray-400" style={introStyle}>
      </div>
    </section>
  )
}

export default Intro
