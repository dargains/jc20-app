import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { AppContext } from '../store';
import Mask from '../components/Mask'
import Inputbox from '../components/Inputbox';
import styled from 'styled-components';
import Button from '../components/Button';
import { projectUrl } from '../api';
import Axios from 'axios';

const RequestReset = () => {
  const [state] = useContext(AppContext);
  const { register, handleSubmit, errors, setValue } = useForm();
  const [errorMessage, setErrorMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const onSubmit = async data => {
    data.reset_url = 'localhost:3000/passwordreset'
    try {
      await Axios.post(`${projectUrl}/auth/password/request`, data)
      setEmailSent(true)
    } catch (error) {
      setErrorMessage(error.response.data.error.message)
    }
  }

  useEffect(() => {
    if (state.user) setValue('email', state.user.email)
  }, [setValue, state.user])


  return (
    <section>
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          Recuperar a sua <br/><span className="text-green">password</span>
        </h1>
        {
          emailSent
          ? <p>
              Email de reset enviado
            </p>
          : <form onSubmit={handleSubmit(onSubmit)} >
              <Inputbox
                type="email"
                color="green"
                placeholder="e-mail *"
                name="email"
                error={errors.email}
                register={register({required: true})}
              />
              {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
              
              {errors.text && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
              <p className="text-red mt-4 text-xs">{errorMessage}</p>
              <Button text="recuperar" type="primary" className="mt-10" />
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

export default RequestReset
