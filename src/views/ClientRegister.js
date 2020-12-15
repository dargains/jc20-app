import Axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import cx from 'classnames'
import { itemsUrl } from '../api';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import Mask from '../components/Mask'
import Icon from '../components/Icon';
import { useContext } from 'react';
import { AppContext } from '../store';
import { contactEmail, sendEmail, shareMobile } from '../helpers';
import { useHistory } from 'react-router-dom';

const ClientRegister = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [duplicatedClientError, setDuplicatedClientError] = useState(false)
  const { register, handleSubmit, errors } = useForm();
  const [state] = useContext(AppContext)
  const history = useHistory()

  const onSubmit = async data => {
    const headers = {
      Authorization: `Bearer ${state.user.token}`
    }
    try {
      const check = await Axios(`${itemsUrl}/clients?filter[name]=${data.name}`, {headers})
      if (check.data.data.length) {
        setDuplicatedClientError(true)
      } else {
        await Axios.post(`${itemsUrl}/clients`, data, {headers})
        // send email
        const email = {
          to: [contactEmail, state.user.email],
          subject: '[Avenida Living] Pré-Reserva',
          body: '{{name}} ({{email}}) registado',
          data: {
            name: data.name,
            email: data.email
          }
        }
        await sendEmail(email)
        setEmailSent(true)
        shareMobile()
      }
    } catch (error) {
      setErrorMessage(error.response.data.error.message)
    }
  }

  return (
    <section>
      <Mask />
      <div className="wrapper">
        {
          emailSent
          ? <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
              Seu registo foi feito com <span className="text-green">sucesso</span>
            </h1>
          : <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
              Registo automático <span className="text-green">de cliente</span>
            </h1>
        }
        
        <p className="green05">
          Ao partilhar as informações do Avenida Living, é feito um <span className="text-green font-bold">registo automático do seu cliente</span> com a Rio Capital. Esse registo pode ser consultado a sua área pessoal na área <span className="text-green font-bold">Meus Registos</span>.
        </p>
        {
          !emailSent
          && <form onSubmit={handleSubmit(onSubmit)} >
            <Inputbox
              type="text"
              color="green"
              placeholder="nome do cliente *"
              name="name"
              error={errors.name}
              register={register({required: true})}
              required={true}
            />
            {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="text"
              color="green"
              placeholder="3 primeiras letras do e-mail *"
              name="email"
              error={errors.email}
              register={register({required: true, maxLength: 3})}
              required={true}
            />
            {errors.email?.type === "required" && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
            {errors.email?.type === "maxLength" && <ErrorMessage>Excedeu os três caracteres</ErrorMessage>}

            <Inputbox
              type="text"
              color="green"
              placeholder="3 últimos dígitos do telefone *"
              name="phone"
              error={errors.phone}
              register={register({required: true, maxLength: 3})}
              required={true}
            />
            {errors.phone?.type === "required" && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
            {errors.phone?.type === "maxLength" && <ErrorMessage>Excedeu os três dígitos</ErrorMessage>}

            <p className="text-red mt-4 text-xs">{errorMessage}</p>
            <Button text="partilhar" type="primary" className="mt-10" />
          </form>
        }
      </div>



      {
        duplicatedClientError &&
      <aside
        className={cx(
          "absolute top-0 left-0 h-full w-full z-10 bg-white bg-opacity-50 pointer-events-none opacity-0 transition-opacity duration-300",
          { "pointer-events-auto opacity-100": duplicatedClientError }
        )}
      >
        <div
          className={cx(
            "pt-16 pb-10 rounded-t-full w-full absolute text-center bottom-0 transform transition-transform duration-300 delay-150",
            { "translate-y-4": !duplicatedClientError }
          )}
          style={{ backgroundImage: "linear-gradient(to bottom, #d3d7d6, #ffffff" }}
        >
          <Icon.Close
            className="text-green08 absolute transform -translate-x-1/2 scale-75"
            style={{ top: 20, left: "50%" }}
            handleClick={() => setDuplicatedClientError(false)}
          />
          <p
            className={cx(
              "text-green05 mb-6 font-bold text-lg w-1/2 mx-auto transition-all  transform duration-200 delay-200",
              { "opacity-0 translate-y-4": !duplicatedClientError }
            )}
          >
            Ops… esse cliente já se encontra registado por outro consultor
          </p>
          <p
            className={cx(
              "text-md text-green08 mb-8 w-3/4 mx-auto transition-all duration-200 delay-200",
              { "opacity-0 translate-y-4": !duplicatedClientError }
              )}
          >
            Favor entrar em contato com a Rio Capital para maiores esclarecimentos
          </p>
          <Button
            text="contatos"
            type="primary"
            className={cx("transition-all duration-200 delay-200", {
              "opacity-0 transform-y-4": !duplicatedClientError,
            })}
            handleClick={() => {history.push('/contacts')}}
          />
        </div>
      </aside>
      }

    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default ClientRegister
