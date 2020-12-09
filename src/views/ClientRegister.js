import Axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { itemsUrl } from '../api';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import Mask from '../components/Mask'
import { useContext } from 'react';
import { AppContext } from '../store';

const ClientRegister = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const { register, handleSubmit, errors } = useForm();
  const [state] = useContext(AppContext)

  const onSubmit = async data => {
    const headers = {
      Authorization: `Bearer ${state.user.token}`
    }
    try {
      await Axios.post(`${itemsUrl}/clients`, data, {headers})
      setEmailSent(true)
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
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default ClientRegister
