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
      Axios(`${baseUrl}/home?fields=*.*`).then(response => {
        const allCopy = response.data.data[0];
        setContent(allCopy)
        const copy = allCopy.translations.find(translation => translation.language === state.language)
        setCopy(copy)
      })
    } else {
      setCopy(content.translations.find(translation => translation.language === state.language))
    }
    db.user.get(1).then(user => {
      setUser({ ...user })
    })
  }, [state.language, content])

  const handleChange = e => {
    let { id, value } = e.target;
    if (id === 'agent') value = e.target.checked
    setUser(prevData => ({ ...prevData, [id]: value }))
  }
  const submit = async () => {
    setErrorMessage('')
    console.log(user)
    Axios.post(`${baseUrl}/users`, { ...user }).then(response => {
      db.user.put({ ...user })
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
