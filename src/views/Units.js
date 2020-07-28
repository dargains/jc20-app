import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { baseUrl } from '../api'
import db from '../db'

const Units = () => {
  const [units, setUnits] = useState([])
  useEffect(() => {
    if (!db) return;
    if (window.navigator.onLine) {
      console.log('is online. fetching...')
      Axios(`${baseUrl}/units`).then(response => {
        const onlineUnits = response.data.data
        setUnits(onlineUnits)
        onlineUnits.forEach(unit => {
          db.table('units').put({ ...unit })
        })
      })

    } else {
      db.table('units').toArray().then(dbUnits => {
        if (!dbUnits) console.log('nao tem units na db')
        else setUnits(dbUnits)
      })

    }

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
