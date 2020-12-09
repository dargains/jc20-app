import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';
import cx from 'classnames'
import { itemsUrl } from '../api';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import Mask from '../components/Mask'
import { AppContext } from '../store';
import { zeroPrefix } from '../helpers';

const PreReservation = () => {
  const {id} = useParams();
  const [client, setClient] = useState({})
  const [units, setUnits] = useState([])
  const [isDone, setIsDone] = useState(false)
  const [expiration, setExpiration] = useState({date:'', hour:''})
  const [state] = useContext(AppContext)
  const [errorMessage] = useState('')
  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = async data => {
    const unitTitle = units.find(u => u.id === parseInt(data.unit)).title
    const today = new Date()
    const hour = today.getHours() + ':' + zeroPrefix(today.getMinutes())
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    const log = `<p>Pré-reserva do apartamento ${unitTitle} feita em ${date} às ${hour}</p>`
    const headers = {
      Authorization: `Bearer ${state.user.token}`
    }
    const newLog = client.log += log
    await Axios.patch(`${itemsUrl}/clients/${id}`, {log: newLog}, {headers})
    await Axios.patch(`${itemsUrl}/units/${data.unit}`, {status: 'reserved'}, {headers})
    setExpiration({
      day: (today.getDate() + 2) + '/' + today.getMonth(),
      hour
    })
    setIsDone(true)
  }
  
  useEffect(() => {
    if (state.user && !client.name) {
      const headers = {
        Authorization: `Bearer ${state.user.token}`
      }
      Axios(`${itemsUrl}/clients/${id}`, {headers}).then(response => {
        setClient(response.data.data)
        setValue("name", response.data.data.name)
      })
      Axios(`${itemsUrl}/units?filter[status]=available`).then(response => {
        setUnits(response.data.data)
      })
    }
  }, [client.name, id, setValue, state.user])

  return (
    <section>
      <Mask />
      <div className="wrapper">
        {
          isDone
          ? <>
            <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
              Pré reserva feita com <span className="text-green">sucesso</span>
            </h1>
            <p>Parabéns! Estamos há apenas alguns passos de finalizar a venda. Fique atento a data de vencimento da pré reserva: </p>
            <div className="border border-green08 rounded-lg p-4 text-center text-3xl font-bold my-10">
              {expiration.day} - {expiration.hour}
            </div>
            <Link to={`/client/${id}`}>
              <Button text="voltar" type="primary" className="mt-6" />
            </Link>
          </>
          : <>
            <h1 className="font-display text-4xl font-semibold w-2/3 mb-8 text-black">
              <span className="text-green">Pré</span> Reserva
            </h1>
            <p>A Pré Reserva possui a validade de <strong>2 dias</strong>. Caso não haja formalização da proposta ou reserva efetiva dentro  deste período o apartamento volta a ficar disponível.</p>
            <form onSubmit={handleSubmit(onSubmit)} >
              <Inputbox
                type="text"
                color="green"
                placeholder="nome"
                name="name"
                error={errors.name}
                register={register({required: true})}
              />
              {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="email"
                color="green"
                placeholder="e-mail"
                name="email"
                error={errors.email}
                register={register({required: true})}
              />
              {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="tel"
                color="green"
                placeholder="telefone"
                name="phone"
                error={errors.phone}
                register={register({required: true})}
              />
              {errors.phone && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="text"
                color="green"
                placeholder="contribuinte"
                name="nif"
                error={errors.nif}
                register={register({required: true})}
              />
              {errors.nif && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              {
                !!units.length
                && <>
                    <select
                    name="unit"
                    ref={register({required: true})}
                    className={cx(
                      "border-b bg-transparent w-full py-1 mt-6 text-green08 border-green08",
                      {
                        "text-red border-red": errors.unit
                      })
                    }>
                    <option value="">apartamento</option>
                    {units.map(({id, title}) => <option key={id} value={id}>{title}</option>)}
                  </select>
                  {errors.unit && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
                </>
              }
              

              <p className="text-red mt-4 text-xs">{errorMessage}</p>
              <Button text="pré-reservar" type="primary" className="mt-10" />
              <Link to={`/client/${id}`}>
                <Button text="voltar" type="primary" className="mt-6" />
              </Link>
            </form>
          </>
        }
        
      </div>
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default PreReservation
