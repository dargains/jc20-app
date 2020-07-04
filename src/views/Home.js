import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Axios from 'axios'
import { baseUrl } from '../api'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [user, setUser] = useState({ name: '', email: '' })
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const qs = useQuery().get('c')
  const history = useHistory();

  const handleChange = e => {
    const { id, value } = e.target;
    setUser(prevNames => ({ ...prevNames, [id]: value }))
  }
  const submit = async () => {
    setErrorMessage('')
    const agentId = qs
    Axios.post(`${baseUrl}/clients`, { ...user, agent_id: agentId }).then(response => {
      history.push('/about')
    }).catch(error => {
      setErrorMessage(error.response.data.error.message)
    })
  }

  useEffect(() => {
    Axios(`${baseUrl}/home`).then(response => {
      const content = response.data.data[0];
      setTitle(content.title)
      setSubtitle(content.subtitle)
    })
  }, [])
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <label htmlFor="name">Name</label><br />
      <input type="text" value={user.name} id="name" onChange={handleChange} /><br />
      <label htmlFor="email">Email</label><br />
      <input type="email" value={user.email} id="email" onChange={handleChange} /><br />
      <button onClick={submit} className="py-2 px-4 border rounded bg-gray-700 text-gray-200 cursor-pointer">submit</button>
      {!!errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default Home
