import Axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { itemsUrl } from '../api';
import { AppContext } from '../store';

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
  
  return (
    <section>
      Nome {client.name}
      Email {client.email}
      Telefone {client.phone}
      Log {client.log}
    </section>
  )
}

export default Client
