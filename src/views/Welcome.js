import React, {useState, useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import Button from '../components/Button'
import Inputbox from '../components/Inputbox'
import Axios from 'axios';
import cx from 'classnames'
import db from '../db'
import { AppContext } from '../store.js';
import { baseUrl } from '../api';

import Image01 from '../assets/images/cam-03-varanda.jpg'
import Image02 from '../assets/images/cam-04-hall.jpg'
import Image03 from '../assets/images/cam-07-escadas.jpg'
import Image04 from '../assets/images/cam-08-wc.jpg'

const Welcome = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [showHello, setShowHello] = useState(true)
  const [state, dispatch] = useContext(AppContext);
  const [name, setName] = useState('')
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const showIntro = () => {
    setShowHello(true)
    setTimeout(() => {
      dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: false })
      dispatch({ type: 'TOGGLE_MENU', payload: true })
    }, 3000);
  }

  const onSubmit = async data => {
    delete data.terms
    try {
      const response = await Axios.post(`${baseUrl}/users`, data)
      const dbUser = data;
      dbUser.id = response.data.data.id
      await db.user.put({ ...dbUser })
      setName(data.name)
      showIntro()
    } catch (error) {
      setErrorMessage(error.response.data.error.message)
    }
  }
  const images = [Image01,Image02,Image03,Image04]
  const RandomImage = images[Math.floor(Math.random() * Math.floor(3)) + 1]

  useEffect(() => {
    dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: true })
    if (state.user) {
      setName(state.user.name)
      setShowHello(true)
      setTimeout(() => {
        dispatch({ type: 'TOGGLE_HEADER_DOWN', payload: false })
        dispatch({ type: 'TOGGLE_MENU', payload: true })
      }, 3000);
    }
    return () => {
      
    }
  }, [dispatch, history, name, state.user])

  return (
    <section className="w-screen min-h-full bg-green08 " style={{height: showHello ? window.innerHeight : ''}}>
      {
        !showHello
        ? <div className="wrapper py-6">
          <h1 className="text-white font-display font-semibold text-5xl mb-8 w-2/3">Bem-vindo ao <span className="block text-green">Avenida Living</span> App</h1>
          <form onSubmit={handleSubmit(onSubmit)} >
            <Inputbox
              type="text"
              color="white"
              placeholder="nome *"
              name="name"
              error={errors.name}
              register={register({required: true})}
            />
            {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="email"
              color="white"
              placeholder="e-mail *"
              name="email"
              error={errors.email}
              register={register({required: true})}
            />
            {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="tel"
              color="white"
              placeholder="telefone"
              name="phone"
              error={errors.phone}
              register={register()}
            />
            {errors.phone && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <p className="mt-4 text-xs text-white">* Campos obrigatórios</p>

            <label htmlFor="terms" className="checkboxField flex items-center mt-8">
              <input
                type="checkbox"
                placeholder="telefone"
                name="terms"
                id="terms"  
                error={errors.terms}
                ref={register({required:true})}
                className="hidden"
              />
              <span className={cx(
                "flex items-center justify-center h-4 border border-white rounded-md transition-all duration-200",
                {
                  'border-red': errors.terms
                }
                )} style={{flex: '0 0 1rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10.41" height="8.217" viewBox="0 0 10.41 8.217">
                  <path data-name="Path 1219" d="M-9.947,8.7a.782.782,0,0,0-1.233-.232l-5.777,5.194a.312.312,0,0,1-.492-.093l-1.145-1.912a.781.781,0,0,0-1.232-.232,1.246,1.246,0,0,0-.19,1.51l1.353,2.261-.006.005.475.794a.852.852,0,0,0,1.343.253l6.714-6.038A1.246,1.246,0,0,0-9.947,8.7Z" transform="translate(20.187 -8.257)" fill="#0b3229"/>
                </svg>

              </span>
              <p className="text-white text-2xs ml-4">Concordo e autorizo a utilização dos meus dados conforme estipulado  de privacidade de dados *</p>
            </label>
            {errors.terms && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
            {errors.text && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
            <p className="text-red mt-4 text-xs">{errorMessage}</p>
            <Button text="enviar" type="secondary" className="mt-10" />
          </form>
        </div>
        : <div
          className="w-full h-full flex items-end p-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${RandomImage})` }}
        >
          <div className="bg-gray-800 bg-opacity-25 absolute w-full h-full pointer-events-none top-0 left-0"></div>
          <h2 className="font-display font-semibold text-5xl text-white w-2/3">
            <span className="block text-green">Olá</span>
            {name}
          </h2>
        </div>
      }
      
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default Welcome
