import React, {useState} from 'react'
import cx from 'classnames'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Button from '../components/Button'
import Inputbox from '../components/Inputbox';
import { Link } from 'react-router-dom';
import SocialMedia from '../components/SocialMedia';

const Email = () => {
  const [emailSent, setEmailSent] = useState(false)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    setEmailSent(true)
  }
  return (
    <section className="bg-green04 py-6">
      {
        emailSent
        ? <div className="wrapper">
            <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-white">
              Obrigado pelo <span className="text-black">contacto</span>
            </h1>
            <p className="text-white mt-4">
              Sua mensagem foi enviada com sucesso e receberá a nossa melhor atenção. 
            </p>
            <p className="text-white mt-4">
              Prometemos ser breve na resposta. 
            </p>
            <div className="w-full text-center text-white mt-16">
              <SocialMedia color="white" size="md" />
              <Link to="/contacts">
                <Button text="voltar à contactos" type="secondary" />
              </Link>
            </div>
          </div>
        : <div className="wrapper">
            <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-white">
              Vamos <span className="text-green">conversar?</span>
            </h1>
            <p className="text-white">
              Confirme os seus dados e envie-nos a sua mensagem:
            </p>
            <form onSubmit={handleSubmit(onSubmit)} >
              <Inputbox
                type="text"
                color="white"
                placeholder="nome"
                name="name"
                error={errors.name}
                register={register({required: true})}
                required={true}
              />
              {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="email"
                color="white"
                placeholder="e-mail"
                name="email"
                error={errors.email}
                register={register({required: true})}
                required={true}
              />
              {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Inputbox
                type="text"
                color="white"
                placeholder="assunto"
                name="subject"
                error={errors.subject}
                register={register({required: true})}
                required={true}
              />
              {errors.subject && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <textarea
                color="white"
                placeholder="assunto"
                name="text"
                rows="5"
                error={errors.text}
                ref={register({required: true})}
                className={cx(
                  "border-b bg-transparent w-full py-1 mt-6 text-white border-white",
                  {
                    "text-red border-red": errors.text
                  }
                )}
              />
              {errors.text && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Button text="enviar" type="secondary" className="mt-10" />
            </form>
          </div>
      }
      

    </section>
  );
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;

`

export default Email
