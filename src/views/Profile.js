import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Mask from '../components/Mask'

const Profile = () => {
  return (
    <section className="py-6">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          Aceda ao seu <br/><span className="text-green">Perfil</span>
        </h1>
        <Link to="/login#client" className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center pt-8 pb-12">
          <Icon.Construction height={64} />
          <p className="text-green08 text-2xl mt-4">Cliente</p>
        </Link>
        <Link to="/login#agent" className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center pt-8 pb-12 my-8">
          <Icon.Construction height={64} />
          <p className="text-green08 text-2xl mt-4">Consultor</p>
        </Link>
      </div>
    </section>
  )
}

export default Profile
