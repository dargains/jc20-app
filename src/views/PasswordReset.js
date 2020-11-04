import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { AppContext } from '../store';
import Mask from '../components/Mask'
import Inputbox from '../components/Inputbox';
import styled from 'styled-components';
import Button from '../components/Button';
import { projectUrl } from '../api';
import Axios from 'axios';

const PasswordReset = () => {
  const [state] = useContext(AppContext);
  const { register, handleSubmit, errors, setValue } = useForm();
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const location = useLocation()
  const token = location.search.substr(7)
  const onSubmit = async data => {
    data.token = token
    try {
      await Axios.post(`${projectUrl}/auth/password/reset`, data)
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
          Nova <br/><span className="text-green">password</span>
        </h1>
        {
          emailSent
          ? <p>
              A password foi restaurada com sucesso
            </p>
          : <form onSubmit={handleSubmit(onSubmit)} >
              <Inputbox
                type={showPassword ? "text" : "password"}
                color="green"
                placeholder="password *"
                name="password"
                error={errors.password}
                register={register({required: true})}
                togglePassword={() => {setShowPassword(!showPassword)}}
              />
              {errors.password && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
              
              {errors.text && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
              <p className="text-red mt-4 text-xs">{errorMessage}</p>
              <Button text="aceitar" type="primary" className="mt-10" />
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

export default PasswordReset
