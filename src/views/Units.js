import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { baseUrl } from '../api'
import db from '../db'

const Units = () => {
  const [units, setUnits] = useState([])
  useEffect(() => {
    if (window.navigator.onLine) {
      console.log('Online. Fetching from CMS...')
      Axios(`${baseUrl}/units?fields=*.*`).then(response => {
        const onlineUnits = response.data.data
        setUnits(onlineUnits)
        onlineUnits.forEach(unit => {
          db.table('units').put({ ...unit })
        })
      })

    } else {
      console.log('Offline. Fetching from Local DB...')
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
        <p>Status: {unit.status === 'available' ? 'disponível' : 'não disponível'}</p>
        <figure className="w-1/3">
          <img src={unit.image.data.full_url} alt={unit.title} />
        </figure>
      </article>)}
    </div>
  )
}

export default Units
