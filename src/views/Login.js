import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form";
import cx from 'classnames'
import Mask from '../components/Mask'
import Inputbox from '../components/Inputbox';
import styled from 'styled-components';
import Button from '../components/Button';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState('')
  const location = useLocation()
  const type = location.hash.substr(1)
  const onSubmit = data => {
    console.log(data);
  }
  return (
    <section className="py-6">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          Aceda ao seu <br/><span className="text-green">Perfil</span> de {type === 'client' ? 'cliente' : 'consultor'}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} >

            <Inputbox
              type="email"
              color="green"
              placeholder="e-mail *"
              name="email"
              error={errors.email}
              register={register({required: true})}
            />
            {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="password"
              color="green"
              placeholder="password *"
              name="password"
              error={errors.password}
              register={register({required: true})}
            />
            {errors.password && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

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
                "flex items-center justify-center h-4 border border-green08 rounded-md transition-all duration-200",
                {
                  'border-red': errors.terms
                }
                )} style={{flex: '0 0 1rem'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10.41" height="8.217" viewBox="0 0 10.41 8.217">
                  <path data-name="Path 1219" d="M-9.947,8.7a.782.782,0,0,0-1.233-.232l-5.777,5.194a.312.312,0,0,1-.492-.093l-1.145-1.912a.781.781,0,0,0-1.232-.232,1.246,1.246,0,0,0-.19,1.51l1.353,2.261-.006.005.475.794a.852.852,0,0,0,1.343.253l6.714-6.038A1.246,1.246,0,0,0-9.947,8.7Z" transform="translate(20.187 -8.257)" fill="#0b3229"/>
                </svg>

              </span>
              <p className="text-green08 text-2xs ml-4">Concordo com os <a className="underline" href="terms.pdf" target="_blank" >termos de utilização</a> *</p>
            </label>
            {errors.terms && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            
            {errors.text && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
            <p className="text-red mt-4 text-xs">{errorMessage}</p>
            <Button text="aceder" type="primary" className="mt-10" />
          </form>
          <p className="text-green08 text-sm text-center mt-8">Não tem conta? <Link to="/signup" className="underline">Criar</Link></p>
          <p className="text-green08 text-sm text-center mt-4">Esqueceu-se da password? <Link to="/restore" className="underline">Restaure</Link></p>
      </div>
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default Login
