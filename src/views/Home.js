import React, { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleChange = e => {
    console.log(e.target.value)
  }
  return (
    <div>
      <h1>JC20</h1>
      <label htmlFor="name">Nome</label>
      <input type="text" value={name} id="name" onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" value={email} id="email" onChange={handleChange} />
    </div>
  )
}

export default Home
