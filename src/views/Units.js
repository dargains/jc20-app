import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { baseUrl } from '../api'

const Units = () => {
  const [units, setUnits] = useState([])
  useEffect(() => {
    Axios(`${baseUrl}/units`).then(response => {
      setUnits(response.data.data)
    })
    return () => {

    }
  }, [])
  return (
    <div>
      {units.map(unit => <article key={unit.id}>
        <p>Price: {unit.price}</p>
        <p>Status: {unit.status}</p>
      </article>)}
    </div>
  )
}

export default Units
