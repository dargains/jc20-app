import React from 'react'
import Mask from '../components/Mask'

const Profile = () => {
  return (
    <section className="py-6">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          Aceda ao seu <br/><span className="text-green">Perfil</span>
        </h1>
      </div>
    </section>
  )
}

export default Profile
