import React, {useContext, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Axios from 'axios';
import cx from 'classnames'
import { useForm } from "react-hook-form";
import { baseUrl } from '../api';
import { useEffect } from 'react';
import { AppContext } from '../store';
import Button from '../components/Button'
import Inputbox from '../components/Inputbox'
import Mask from '../components/Mask'

const SignUp = () => {
  const [state, dispatch] = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState('')
  const [done, setDone] = useState(false)
  const { register, handleSubmit, errors, setValue } = useForm();
  const location = useLocation()

  const type = location.hash.substr(1)

  const onSubmit = async data => {
    delete data.terms
    data.agent = type === 'agent'
    try {
      await Axios.patch(`${baseUrl}/users/${state.user.id}`, data)
      setDone(true)
      data.id = state.user.id
      data.logged = true
      dispatch({type: 'SET_USER', payload: data})
    } catch (error) {
      setErrorMessage(error.response.data.error.message)
    }
  }

  useEffect(() => {
    if (state.user) {
      for (let key in state.user) {
        setValue(key, state.user[key])
      }
    }
  },[setValue, state.user])

  return (
    <section>
      <Mask />
      <div className="wrapper">
        {
          done
          ? <div>
            <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
              Sua conta foi criada com <span className="text-green">sucesso</span>
            </h1>
            <p className="text-green08 mb-4">
              Obrigado por se cadastrar no Avenida Living App!
            </p>
            
            {
              type === 'client'
              ? <p className="text-green08 mb-4">A área pessoal foi criada para facilitar a interação do cliente com a promotora e concentrar em um espaço único as informações sobre a evolução da sua obra.</p>
              : <p className="text-green08 mb-4">A área pessoal foi criada para facilitar a interação do consultor com a promotora e concentrar em um espaço único as informações e documentos necessários à apresentação e venda.</p>
            }
            {
              type === 'client'
              ? <p className="text-green08 mb-4">Seja bem-vindo!</p>
              : <p className="text-green08 mb-4">Boas vendas!</p>
            }
            
            <Link to="/profile" className="block mt-12">
              <Button text="aceder a conta" type="primary" />
            </Link>
          </div>
          : <div>
            <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
              Crie a sua <span className="text-green">conta</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} >
              <Inputbox
                type="text"
                color="green"
                placeholder="nome"
                name="name"
                error={errors.name}
                register={register({required: true})}
                required={true}
              />
              {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="email"
                color="green"
                placeholder="e-mail"
                name="email"
                error={errors.email}
                register={register({required: true})}
                required={true}
              />
              {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="tel"
                color="green"
                placeholder="telefone"
                name="phone"
                error={errors.phone}
                register={register({required: true})}
                required={true}
              />
              {errors.phone && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="password"
                color="green"
                placeholder="password"
                name="password"
                error={errors.password}
                register={register({required: true})}
                required={true}
              />
              {errors.password && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <select
                name="apartment"
                ref={register({required: true})}
                className={cx(
                  "border-b bg-transparent w-full py-1 mt-6 text-green08 border-green08",
                  {
                    "text-red border-red": errors.apartment
                  })
                }>
                  {
                    type === 'client'
                    ? <>
                      <option value="">apartamento</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">c</option>
                      <option value="D">d</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                      <option value="G">G</option>
                      <option value="H">H</option>
                    </>
                    : <>
                    <option value="">imobiliária</option>
                    <option value="remax">Remax</option>
                    <option value="century21">Century 21</option>
                    </>
                  }
              </select>
              {errors.apartment && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="password"
                color="green"
                placeholder="código cliente"
                name="code"
                error={errors.code}
                register={register({required: true})}
                required={true}
              />
              {errors.code && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <p className="text-red mt-4 text-xs">{errorMessage}</p>
              <Button text="criar" type="primary" className="mt-10" />
              <Link to="/login#client">
                <Button text="voltar" type="primary" className="mt-6" />
              </Link>
            </form>
          </div>
        }
      </div>
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default SignUp
