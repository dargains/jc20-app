import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Axios from 'axios';
import { baseUrl } from '../api'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Main = ({ db }) => {
  const [name, setName] = useState('')
  const [corretores, setCorretores] = useState([])
  const qs = useQuery().get('c')

  useEffect(
    () => {
      // create the store
      db.version(1).stores({ appData: 'id,value' })
      // perform a read/write transatiction on the new store
      db.transaction('rw', db.appData, async () => {
        // get the first and last name from the data
        const dbName = await db.appData.get('name')
        // if the first or last name fields have not be added, add them
        if (!dbName) await db.appData.add({ id: 'name', value: qs || '' })

        // set the initial values
        setName(dbName ? dbName.value : qs || '')
      }).catch(e => {
        // log any errors
        console.log(e.stack || e)
      })

      Axios(`${baseUrl}/corretores`).then(response => { console.log(response.data.data); setCorretores(response.data.data) })

      // close the database connection if form is unmounted or the
      // database connection changes
      return () => db.close()
    },
    // run effect whenever the database connection changes
    [db, qs]
  )
  const handleSetName = e => {
    const { value } = e.target
    // update the store
    db.appData.put({ id: 'name', value })
    // update the state hook
    setName(value)
  }
  const handleClick = () => {
    db.appData.put({ id: 'name', value: name })
  }
  return (
    <div>
      <p>Nome do corretor</p>
      <input type="text" onChange={handleSetName} value={name} />
      <button onClick={handleClick}>click</button>
      <ul>
        {corretores.map(item => <li key={item.nome}>{item.nome} da {item.empresa}</li>)}
      </ul>
    </div>
  )
}
export default Main