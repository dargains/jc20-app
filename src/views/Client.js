import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { itemsUrl } from '../api';
import Button from '../components/Button';
import Mask from '../components/Mask';
import { AppContext } from '../store';

const zeroPrefix = (num, digit = 2) => {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}

const Client = () => {
  const {id} = useParams();
  const [client, setClient] = useState({})
  const [state] = useContext(AppContext)

  useEffect(() => {
    if (state.user) {
      const headers = {
        Authorization: `Bearer ${state.user.token}`
      }
      Axios(`${itemsUrl}/clients/${id}`, {headers}).then(response => {
        setClient(response.data.data)
      })
    }
  }, [id, state.user])
  const thisDate = new Date(client.created_on)
  const date = thisDate.getDate() + '/' + (thisDate.getMonth() + 1) + '/' + thisDate.getFullYear()
  const nextMonth = new Date(thisDate)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  const endDate = nextMonth.getDate() + '/' + (nextMonth.getMonth() + 1) + '/' + nextMonth.getFullYear()
  const hour = thisDate.getHours() + ':' + zeroPrefix(thisDate.getMinutes())
  
  return (
    <section>
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
          Registo
        </h1>
        {
          client.name
          ? <div className="bg-white rounded-lg shadow-lg p-6 text-green08 mb-8 overflow-hidden">
              <h2 className="text-xl capitalize font-bold mb-6">{client.name}</h2>
              <p className="text-sm mb-2">{client.email}****@*******</p>
              <p className="text-sm mb-4">******{client.phone}</p>
              <p className="text-sm mb-2">Registo {date}, às {hour}</p>
              <p className="text-red text-sm">Válido até {endDate}</p>
              <hr />
              <p className="text-sm" dangerouslySetInnerHTML={{__html: client.log}} />
            </div>
          : <p>A carregar...</p>
        }
        <Link to={`/prereservation/${id}`}>
          <Button text="pré-reserva" type="primary" className="mt-4"/>
        </Link>
        <Link to={`/proposal/${id}`}>
          <Button text="proposta" type="primary" className="mt-4"/>
        </Link>
        <Link to={`/reservation/${id}`}>
          <Button text="reserva" type="primary" className="mt-4"/>
        </Link>
        <Link to="/clientlist">
          <Button text="voltar" type="primary" className="mt-4" icon iconDirection="left"/>
        </Link>
      </div>
    </section>
  )
}

export default Client
