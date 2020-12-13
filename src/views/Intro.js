import React, {useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../store.js';
import Fachada from '../assets/images/fachada01.jpg'
import Button from '../components/Button'

const Intro = () => {
  const [state, dispatch] = useContext(AppContext);
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
  }, [dispatch])
  return (
    <section className="min-w-screen bg-white z-20 p-12 flex flex-col itens-center justify-end bg-cover bg-right" style={{ backgroundImage: `url(${Fachada})`, marginBottom: '-58px', height: window.innerHeight }}>
      <Button text="português" type="tertiary" className="my-2" handleClick={() => chooseLang('pt')} />
      <Button text="english" type="tertiary" className="my-2" handleClick={() => chooseLang('en')} />
    </section>
  )
}

export default Intro
