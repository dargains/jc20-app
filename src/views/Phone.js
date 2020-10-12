import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import cx from 'classnames'
import styled from 'styled-components'
import Button from '../components/Button'
import Inputbox from '../components/Inputbox'
import SocialMedia from '../components/SocialMedia';
import { Link } from 'react-router-dom';

const Phone = () => {
  const [emailSent, setEmailSent] = useState(false)
  const [date, setDate] = useState('')
  const { register, handleSubmit, errors } = useForm()
  const days = () => {
    const range = 8
    const today = new Date()
    const result = []
    let i = 0
    while (result.length < range) {
      const nextDay = new Date(today)
      nextDay.setDate(nextDay.getDate() + i)
      if (nextDay.getDay() === 6) {
        i++
        continue
      }
      result.push(`${nextDay.getDate()}/${nextDay.getMonth() + 1}`)
      i++
    }
    return result
  }
  const onSubmit = data => {
    console.log(data);
    setDate(`${data.day} - ${data.hour}`)
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
            <p className="text-white mb-8">
              A sua solicitação de contato por ligação foi marcada para dia e hora:
            </p>
            <p className="text-white border border-white rounded-lg p-4 text-center text-3xl font-bold mb-16">
              {date}
            </p>
            <SocialMedia color="white" size="md" />
            <Link to="/contacts">
              <Button text="voltar à contactos" type="secondary" />
            </Link>
          </div>
        : <div className="wrapper">
            <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-white">
              Nós ligamos <span className="text-green">para si</span>
            </h1>
            <p className="text-white">
              Confirme o seu telefone que entraremos em contato na data e horário escolhidos:
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
                type="tel"
                color="white"
                placeholder="telefone"
                name="phone"
                error={errors.phone}
                register={register({required: true})}
                required={true}
              />
              {errors.phone && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <select
                name="day"
                ref={register({required: true})}
                className={cx(
                  "border-b bg-transparent w-full py-1 mt-6 text-white border-white",
                  {
                    "text-red border-red": errors.phone
                  })
                }>
                <option value="">dia</option>
                {days().map(day => <option key={day} value={day}>{day}</option>)}
              </select>
              {errors.day && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <select
                name="hour"
                ref={register({required: true})}
                className={cx(
                  "border-b bg-transparent w-full py-1 mt-6 text-white border-white",
                  {
                    "text-red border-red": errors.phone
                  })
                }>
                <option value="">hora</option>
                <option value="9:00">9:00</option>
                <option value="9:30">9:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="14:00">15:00</option>
                <option value="14:00">15:30</option>
                <option value="14:00">16:00</option>
                <option value="14:00">16:30</option>
                <option value="14:00">17:00</option>
                <option value="14:00">17:30</option>
                <option value="14:00">18:00</option>
                <option value="14:00">18:30</option>
                <option value="14:00">19:00</option>
                <option value="14:00">19:30</option>
              </select>
              {errors.hour && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

              <Button
                text="enviar"
                type="secondary"
                className="mt-10"
              />
            </form>
            <p className="text-white mt-12 mb-4">
              ou através do número:
            </p>
            <p className="text-white border border-white rounded-lg p-4 text-center text-4xl font-bold font-display">
              <span className="text-black">+351</span> 978 456 432
            </p>
          </div>
      }
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;

`

export default Phone
