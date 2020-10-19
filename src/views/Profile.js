import React from 'react'
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
        <article className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center py-8">
          <Icon.Construction height={64} />
          <p className="text-green08 text-2xl mt-4">Cliente</p>
        </article>
        <article className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center py-8 my-8">
          <Icon.Construction height={64} />
          <p className="text-green08 text-2xl mt-4">Consultor</p>
        </article>
      </div>
    </section>
  )
}

export default Profile
