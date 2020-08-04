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


    const users = await db.user.toArray()
    const data = {
      user_id: users[0].id,
      name: person.name,
      email: person.email,
      phone: person.phone
    }
    Axios.post(`${baseUrl}/clients`, data).then(response => {
      console.log(response)
      Axios.post('https://graffito.pt/directus/public/jc20/auth/authenticate', {
        email: 'andre.dargains@gmail.com',
        password: '123qwe'
      }).then(response => {
        const headers = {
          Authorization: `Bearer ${response.data.data.token}`
        }
        const data = {
          "to": { "email": 'andre.dargains@gmail.com', "name": 'contact email' },
          "subject": "Contact message",
          "body": "{{name}} from {{email}} has sent the following message: {{message}}",
          "type": "html",
          "data": {
            "name": 'token.name',
            "email": 'token.email',
            "message": 'token.message'
          }
        }
        Axios.post(`https://graffito.pt/directus/public/jc20/mail`, data, { headers })
      })
    })
  }

  const share = () => {
    navigator
      .share({
        title: document.title,
        text: 'Hello World',
        url: window.location.href
      })
      .then(() => console.log('Successful share! 🎉'))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <p>Share</p>

      <label htmlFor="name">Name</label><br />
      <input type="text" value={person.name} id="name" onChange={handleChange} /><br />
      <label htmlFor="email">Email</label><br />
      <input type="email" value={person.email} id="email" onChange={handleChange} /><br />
      <button onClick={submit} className="py-2 px-4 border rounded bg-gray-700 text-gray-200 cursor-pointer">submit</button>
      <button onClick={share} className="py-2 px-4 border rounded bg-gray-700 text-gray-200 cursor-pointer">share</button>

    </div>
  )
}

export default Share
