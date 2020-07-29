import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { baseUrl } from '../api'
import { AppContext } from '../store.js';
import db from '../db'

const Home = () => {
  const [state] = useContext(AppContext);
  const [user, setUser] = useState({ name: '', email: '', agent: false })
  const [content, setContent] = useState({})
  const [copy, setCopy] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory();

  useEffect(() => {
    if (!Object.keys(content).length) {
      if (window.navigator.onLine) {
        Axios(`${baseUrl}/home?fields=*.*`).then(response => {
          const allCopy = response.data.data[0];
          setContent(allCopy)
          db.content.put({ page: 'Home', content: allCopy })
          changeCopy(allCopy)
        })
      } else {
        db.content.get('Home').then(contentDB => {
          setContent(contentDB.content)
          changeCopy(contentDB.content)
        })
      }
    } else {
      changeCopy(content)
    }
    db.user.toArray().then(users => {
      const user = users[0]
      setUser({ ...user })
    })
  }, [state.language, content])

  const changeCopy = all => {
    const copy = all.translations.find(translation => translation.language === state.language)
    setCopy(copy)
  }

  const handleChange = e => {
    let { id, value } = e.target;
    if (id === 'agent') value = e.target.checked
    setUser(prevData => ({ ...prevData, [id]: value }))
  }
  const submit = async () => {
    setErrorMessage('')
    console.log(user)
    Axios.post(`${baseUrl}/users`, { ...user }).then(response => {
      const dbUser = user;
      dbUser.id = response.data.data.id
      db.user.put({ ...dbUser })
      history.push('/about')
    }).catch(error => {
      setErrorMessage(error.response.data.error.message)
    })
  }

  return (
    <div>
      <p>lang: {state.language}</p>
      <h1>{copy.title}</h1>
      <h2>{copy.subtitle}</h2>
      {user.name && <p>Bem-vindo de volta, {user.name}</p>}
      <label htmlFor="name">Name</label><br />
      <input type="text" value={user.name} id="name" onChange={handleChange} /><br />
      <label htmlFor="email">Email</label><br />
      <input type="email" value={user.email} id="email" onChange={handleChange} /><br />
      <input type="checkbox" value={user.agent} id="agent" onChange={handleChange} />
      <label htmlFor="agent">Are you an agent?</label><br />
      <button onClick={submit} className="py-2 px-4 border rounded bg-gray-700 text-gray-200 cursor-pointer">submit</button>
      {!!errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default Home
