import React, { useState } from 'react'
import Axios from 'axios';
import { baseUrl } from '../api';
import db from '../db';

const Share = () => {
  const [person, setPerson] = useState({ name: '', email: '' })

  const handleChange = e => {
    let { id, value } = e.target;
    setPerson(prevData => ({ ...prevData, [id]: value }))
  }

  const submit = async () => {
    // setErrorMessage('')
    db.user.toArray().then(users => {
      const user = users[0]
      Axios(`${baseUrl}/users/${user.id}`).then(response => {
        const share = response.data.data.shares || {}
        share[person.name] = person.email
        Axios.patch(`${baseUrl}/users/${user.id}`, { shares: share }).then(response => {
          console.log(response)
        }).catch(error => {
          // setErrorMessage(error.response.data.error.message)
        })
      })
    })
  }

  return (
    <div>
      <p>Share</p>

      <label htmlFor="name">Name</label><br />
      <input type="text" value={person.name} id="name" onChange={handleChange} /><br />
      <label htmlFor="email">Email</label><br />
      <input type="email" value={person.email} id="email" onChange={handleChange} /><br />
      <button onClick={submit} className="py-2 px-4 border rounded bg-gray-700 text-gray-200 cursor-pointer">submit</button>

    </div>
  )
}

export default Share
