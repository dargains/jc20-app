import React, { useState } from 'react'
import cx from 'classnames'
import Mask from '../components/Mask'
import Button from '../components/Button';
import Icon from '../components/Icon';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../store';
import { shareMobile } from '../helpers';

const Share = () => {
  const [state] = useContext(AppContext)
  const [noLoginError, setNoLoginError] = useState(false)
  const history = useHistory()

  const handleOpenRegister = () => {
    if (state.user && state.user.logged) {
      history.push('/clientregister')
    } else {
      setNoLoginError(true)
    }
  }
  
  return (
    <section>
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black">
          Recomende o <span className="text-green">Avenida Living</span> app
        </h1>
        <div>
          <article className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <p className="text-green08 text-lg mb-8">Compartilhe as informações do Avenida Living com <span className="text-green font-bold">amigos e familiares</span>: </p>
            <Button text="partilhe" type="primary" handleClick={shareMobile} />
          </article>
          <article className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <p className="text-green08 text-lg mb-8">É <span className="text-green font-bold">mediador imobiliário</span>? Partilhe as informações do Avenida Living com clientes e faça o <span className="text-green font-bold">registo automático</span>: </p>
            <Button text="registo" type="primary" handleClick={handleOpenRegister} />
          </article>
        </div>
      </div>



      {
        noLoginError &&
      <aside
        className={cx(
          "absolute top-0 left-0 h-full w-full z-10 bg-white bg-opacity-50 pointer-events-none opacity-0 transition-opacity duration-300",
          { "pointer-events-auto opacity-100": noLoginError }
        )}
      >
        <div
          className={cx(
            "pt-16 pb-10 rounded-t-full w-full absolute text-center bottom-0 transform transition-transform duration-300 delay-150",
            { "translate-y-4": !noLoginError }
          )}
          style={{ backgroundImage: "linear-gradient(to bottom, #d3d7d6, #ffffff" }}
        >
          <Icon.Close
            className="text-green08 absolute transform -translate-x-1/2 scale-75"
            style={{ top: 20, left: "50%" }}
            handleClick={() => setNoLoginError(false)}
          />
          <p
            className={cx(
              "text-green05 mb-6 font-bold text-lg w-1/2 mx-auto transition-all  transform duration-200 delay-200",
              { "opacity-0 translate-y-4": !noLoginError }
            )}
          >
            Ops… não é possível fazer o registo automático sem login
          </p>
          <p
            className={cx(
              "text-md text-green08 mb-8 w-3/4 mx-auto transition-all duration-200 delay-200",
              { "opacity-0 translate-y-4": !noLoginError }
              )}
          >
            Faça login na sua área pessoal para ter acesso a essa funcionalidade:
          </p>
          <Button
            text="login"
            type="primary"
            className={cx("transition-all duration-200 delay-200", {
              "opacity-0 transform-y-4": !noLoginError,
            })}
            handleClick={() => {history.push('/login#agent')}}
          />
        </div>
      </aside>
      }
    </section>
  )
}

export default Share
