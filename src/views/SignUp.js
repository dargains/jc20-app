import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import Button from '../components/Button'
import Inputbox from '../components/Inputbox'
import Axios from 'axios';
import { baseUrl } from '../api';

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = async data => {
    const body = data
    try {
      await Axios.post(`${baseUrl}/users`, body)
      history.push('/hello')
    } catch (error) {
      setErrorMessage(error.response.data.error.message)
    }
  }
  return (
    <section className="bg-green01 p-6">
      <h1 className="text-white font-display font-semibold text-4xl w-2/3 mb-8">Bem-vindo ao <span className="block text-green">Avenida Living</span> App</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Inputbox
          type="text"
          color="white"
          placeholder="nome"
          name="name"
          error={errors.name}
          register={register({required: true})}
          required={true}
        />
        {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

        <Inputbox
          type="email"
          color="white"
          placeholder="e-mail"
          name="email"
          error={errors.email}
          register={register({required: true})}
          required={true}
        />
        {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

        <Inputbox
          type="tel"
          color="white"
          placeholder="telefone"
          name="phone"
          error={errors.phone}
          register={register()}
          required={true}
        />
        {errors.phone && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

        {errors.text && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
        <p className="text-red mt-4 text-xs">{errorMessage}</p>
        <Button text="enviar" type="secondary" className="mt-10" />
      </form>
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default Signup
