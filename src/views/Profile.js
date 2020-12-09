import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from '../store';
import Icon from '../components/Icon'
import Mask from '../components/Mask'

const Profile = () => {
  const [state, dispatch] = useContext(AppContext);
  const history = useHistory();
  const {user} = state

  const handleLogout = () => {
    dispatch({type: "DELETE_USER"})
    history.push('/')
  }

  return (
    <section>
      <Mask />
      {
        user && user.logged
        ? <div className="wrapper">
          <h2 className="text-2xl capitalize mb-8">
            <span className="text-green font-bold">Olá,</span> {user.name}
          </h2>
          <Link to="/clientlist" className="bg-white text-green08 rounded-lg shadow-lg flex items-center justify-between px-6 py-8 mb-6">
            <Icon.Users height={64} />
            <span className="pl-4 text-2xl text-center flex-1">Meus registos</span>
          </Link>
          <Link to="/clientlist#sup" className="bg-white text-green08 rounded-lg shadow-lg flex items-center justify-between px-6 py-8 mb-6">
            <Icon.Users height={64} className="opacity-50" />
            <span className="pl-4 text-2xl text-center flex-1">Registos superados</span>
          </Link>
          <Link to="/documents" className="bg-white text-green08 rounded-lg shadow-lg flex items-center justify-between px-6 py-8 mb-6">
            <Icon.Document height={64} />
            <span className="pl-4 text-2xl text-center flex-1">Documentos comerciais</span>
          </Link>
          <Link to="/editprofile" className="bg-white text-green08 rounded-lg shadow-lg flex items-center justify-between px-6 py-8 mb-6">
            <Icon.Gear height={64} />
            <span className="pl-4 text-2xl text-center flex-1">Editar perfil</span>
          </Link>
          <article className="bg-white text-green08 rounded-lg shadow-lg flex items-center justify-between px-6 py-8 mb-6" onClick={handleLogout}>
            <Icon.Construction height={64} />
            <span className="pl-4 text-2xl text-center flex-1">Logout</span>
          </article>
        </div>
        : <div className="wrapper">
          <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
            Aceda ao seu <br/><span className="text-green">Perfil</span>
          </h1>
          <Link to="/login#client" className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center pt-8 pb-12">
            <Icon.Family height={64} />
            <p className="text-green08 text-2xl mt-4">Cliente</p>
          </Link>
          <Link to="/login#agent" className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center pt-8 pb-12 my-8">
            <Icon.Agent height={64} />
            <p className="text-green08 text-2xl mt-4">Mediador</p>
          </Link>
        </div>
      }
      
    </section>
  )
}

export default Profile
