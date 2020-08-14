import React from 'react'
import RCLogo from '../assets/images/rc logo.svg'
import ALLogo from '../assets/images/al logo.svg'

const Intro = () => {
  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center">
      <figure className="intro1 animate-fadeIn opacity-0">
        <img src={RCLogo} alt="Rio Capital" />
      </figure>
      <figure className="intro2 animate-fadeIn2 opacity-0">
        <img src={ALLogo} alt="Avenida Living" />
      </figure>
    </section>
  )
}

export default Intro
