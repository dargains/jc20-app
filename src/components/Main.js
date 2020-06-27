import React, { useEffect, useState } from 'react'

const Main = ({ db }) => {
  const [name, setName] = useState('')
  useEffect(
    () => {
      // create the store
      db.version(1).stores({ appData: 'id,value' })
      console.log(db.appData)
      // perform a read/write transatiction on the new store
      db.transaction('rw', db.appData, async () => {
        // get the first and last name from the data
        const dbName = await db.appData.get('name')

        // if the first or last name fields have not be added, add them
        if (!dbName) await db.appData.add({ id: 'name', value: '' })

        // set the initial values
        setName(dbName ? dbName.value : '')
      }).catch(e => {
        // log any errors
        console.log(e.stack || e)
      })

      // close the database connection if form is unmounted or the
      // database connection changes
      return () => db.close()
    },
    // run effect whenever the database connection changes
    [db]
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
    </div>
  )
}
export default Main