import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import cx from 'classnames'
import { itemsUrl } from '../api'
import { useContext } from 'react'
import { AppContext } from '../store'
import { Link, useLocation } from 'react-router-dom'
import Mask from '../components/Mask'
import Button from '../components/Button'
import Icon from '../components/Icon'

const zeroPrefix = (num, digit = 2) => {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}

const sortBy = (array, type) => {
  if (type === 'date') {
    return array.sort((a, b) => (a.created_on > b.created_on) ? 1 : (a.created_on === b.created_on) ? ((a.name > b.name) ? 1 : -1) : -1 )
  } else {
    return array.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.created_on > b.created_on) ? 1 : -1) : -1 )
  }
}

const ClientItem = ({created_on, email, name, phone, type}) => {
  const thisDate = new Date(created_on)
  const date = thisDate.getDate() + '/' + (thisDate.getMonth() + 1) + '/' + thisDate.getFullYear()
  const nextMonth = new Date(thisDate)
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  const endDate = nextMonth.getDate() + '/' + (nextMonth.getMonth() + 1) + '/' + nextMonth.getFullYear()
  const hour = thisDate.getHours() + ':' + zeroPrefix(thisDate.getMinutes())
  const today = new Date()
  const isHidden = type === 'sup' ? today - nextMonth < 0 : today - nextMonth > 0
  return (
    <article className={cx("bg-white rounded-lg shadow-lg p-6 text-green08 mb-8 overflow-hidden",
    {
      "hidden": isHidden
    }
    )}>
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
  const [order, setOrder] = useState('date')
  const [state] = useContext(AppContext)
  const location = useLocation()

  const type = location.hash.substr(1)

  const toggleOrder = () => {
    setOrder(order === 'date' ? 'alphabetically' : 'date')
  }

  useEffect(() => {
    if (state.user) {
      const headers = {
        Authorization: `Bearer ${state.user.token}`
      }
      Axios.get(`${itemsUrl}/clients`,{headers}).then(response => {
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
        <Link to="/clientregister">
          <Button text="novo registo" type="primary" />
        </Link>
        <div className="text-green08 flex items-center justify-end my-6" onClick={toggleOrder}>
          <p className="flex items-center text-sm"><Icon.Arrow height={12} />A</p>
          <div
            className="bg-gray-400 rounded-xl w-8 mx-2"
            style={{height: "1.2rem"}}
          >
            <div className={cx("bg-white rounded-full w-4 h-4 transform duration-150 transition-transform",
            {
              "translate-x-3": order === 'date'
            }
            )} style={{top: 2, left: 2}}></div>
          </div>
          <p className="flex items-center"><Icon.Arrow height={12} /><Icon.Clock height={16}/></p>
        </div>
        <div>
          {
            sortBy(list, order).map(item => <ClientItem key={item.id} {...item} type={type} />)
          }
        </div>
      </div>
    </section>
  )
}

export default ClientList
