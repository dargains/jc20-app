import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { baseUrl } from '../api'
import { useContext } from 'react'
import { AppContext } from '../store'
import { Link } from 'react-router-dom'
import Mask from '../components/Mask'
import Button from '../components/Button'

function zeroPrefix (num, digit = 2) {
  var zero = ''
  for (var i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}

const ClientItem = ({created_on, email, name, phone}) => {
  const thisDate = new Date(created_on)
  const date = thisDate.getDate() + '/' + (thisDate.getMonth() + 1) + '/' + thisDate.getFullYear()
  const nextMonth = new Date(thisDate)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  console.log(thisDate, nextMonth);
  const endDate = nextMonth.getDate() + '/' + (nextMonth.getMonth() + 1) + '/' + nextMonth.getFullYear()
  const hour = thisDate.getHours() + ':' + zeroPrefix(thisDate.getMinutes())
  return (
    <article className="bg-white rounded-lg shadow-lg p-6 text-green08 mb-8 overflow-hidden">
      <p className="text-xl mb-4 font-bold">{name}</p>
      <p className="mb-4">{email}****@*******</p>
      <p className="mb-8">******{phone}</p>
      <div className="bg-gray-400 -mx-6 -mb-6 px-6 py-2 flex items-center justify-between">
        <p className="text-sm">Registo {date}, às {hour}</p>
        <p className="text-green text-2xs w-12 text-center">Válido até {endDate}</p>
      </div>
    </article>
  )
}


const ClientList = () => {
  const [list, setList] = useState([])
  const [state] = useContext(AppContext)

  useEffect(() => {
    if (state.user) {
      const headers = {
        Authorization: `Bearer ${state.user.token}`
      }
      Axios.get(`${baseUrl}/clients`,{headers}).then(response => {
        setList(response.data.data)
      })
    }
    
  }, [state.user])

  return (
    <section>
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
          Meus <span className="text-green">registos</span>
        </h1>
        <Link to="/share">
          <Button text="novo registo" type="primary" />
        </Link>
        <div className="mt-12">
          {
            list.map(item => <ClientItem key={item.id} {...item} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ClientList
