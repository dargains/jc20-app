import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../store.js';
import cx from 'classnames'
import Fachada from '../assets/images/fachada01.jpg'
import Button from '../components/Button'

import AL from '../assets/images/al logo.svg'
import RC from '../assets/images/rc logo.svg'

const Intro = () => {
  const [state, dispatch] = useContext(AppContext);
  const [hideLogos, setHideLogos] = useState(false)


  console.log(state);
  const history = useHistory();
  const chooseLang = lang => {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: lang })
    history.push('/welcome')
  }
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      dispatch({ type: 'SET_INSTALLPROMPT', payload: e })
    })
    setTimeout(() => {
      setHideLogos(true)
    }, 2000);
  }, [dispatch])
  return (
    <section className="min-w-screen bg-white z-20 p-12 flex flex-col itens-center justify-end bg-cover bg-right" style={{ backgroundImage: `url(${Fachada})`, marginBottom: '-58px', height: window.innerHeight }}>
      <Button text="português" type="tertiary" className="my-2" handleClick={() => chooseLang('pt')} />
      <Button text="english" type="tertiary" className="my-2" handleClick={() => chooseLang('en')} />
      <div className={cx("w-full h-full bg-white absolute top-0 left-0 duration-300 transition-opacity delay-1000",{"opacity-0 pointer-events-none": hideLogos})}>
        <figure className="w-32 absolute-center">
          <img src={AL} alt="Avenida Living"/>
        </figure>
        <div className="center-horizontal bottom-0 flex flex-col items-center">
          <p className="text-sm mb-8">Promoção / Promoted by</p>
          <figure className="w-32 mb-10">
            <img src={RC} alt="Rio Capital"/>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Intro
