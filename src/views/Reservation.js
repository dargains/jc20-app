import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import cx from 'classnames'
import styled from 'styled-components';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import Mask from '../components/Mask'
import Axios from 'axios';
import { itemsUrl, projectUrl } from '../api';
import Filebox from '../components/Filebox';
import { AppContext } from '../store';

const zeroPrefix = (num, digit = 2) => {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}

const Reservation = () => {
  const {id} = useParams();
  const [state] = useContext(AppContext)
  const [units, setUnits] = useState([])
  const [isDone, setIsDone] = useState(false)
  const [selectedUnit, setSelectedUnit] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, errors, setValue } = useForm();

  const fileUpload = async file => {
    
    const formData = new FormData();
    formData.append('file',file)
    const headers = {
      'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${state.user.token}`
    }
    return await Axios.post(`${projectUrl}/files`, formData, {headers})
  }

  const onSubmit = async data => {
    const today = new Date()
    const hour = today.getHours() + ':' + zeroPrefix(today.getMinutes())
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    
    const headers = {
      Authorization: `Bearer ${state.user.token}`
    }
    data.status = 'waiting'
    console.log(data);
    // file upload
    const reservation_document_info = await fileUpload(data.reservation_document[0])
    const payment_document_info = await fileUpload(data.payment_document[0])
    const client_document_info = await fileUpload(data.client_document[0])
    
    data.reservation_document = reservation_document_info.data.data.id
    data.payment_document = payment_document_info.data.data.id
    data.client_document = client_document_info.data.data.id

    const oldLog = await (await Axios(`${itemsUrl}/clients/${id}`, {headers})).data.data.log
    const newLog = oldLog + `<p>Reserva do apartamento ${selectedUnit.title} feita em ${date} às ${hour}</p>`
    await Axios.post(`${itemsUrl}/reservations`, data, {headers})
    await Axios.patch(`${itemsUrl}/clients/${id}`, {log: newLog}, {headers})
    await Axios.patch(`${itemsUrl}/units/${selectedUnit.id}`, {status: 'reserved'}, {headers})
    setIsDone(true)
    // send email
  }

  const selectUnit = e => {
    const unit = units.find(u => u.id === parseInt(e.target.value))
    setSelectedUnit(unit)
    setTimeout(() => {
      setValue('tender', unit.tender)
      setValue('price', unit.price)

    }, 10);
  }

  useEffect(() => {
    Axios(`${itemsUrl}/units?filter[status]=available`).then(response => {
      setUnits(response.data.data)
    })
  }, [])

  return (
    <section>
      <Mask />
      <div className="wrapper">
        <h1 className="font-display text-4xl font-semibold w-2/3 mb-8 text-black">
          Reserva {isDone && <span>enviada com <span className="text-green">sucesso</span></span>}
        </h1>
        
        <p className="text-green08 mb-10">
          A Reserva possui a validade de <strong>15 dias</strong>. Caso o CPCV não seja marcado dentro deste prazo, o montante do depósito será devolvido ao cliente e o apartamento voltará a ficar disponível.   
        </p>
        {
          isDone
          ? <Link to={`/client/${id}`}>
            <Button text="voltar" type="primary" icon iconDirection="left" />
          </Link>
          : <form onSubmit={handleSubmit(onSubmit)} >
            <Inputbox
              type="text"
              color="green"
              placeholder="nome completo do cliente"
              name="name"
              error={errors.name}
              register={register({required: true})}
            />
            {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="text"
              color="green"
              placeholder="contribuinte"
              name="doc_id"
              error={errors.doc_id}
              register={register}
            />
            {errors.doc_id && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <select
              name="civil_status"
              ref={register({required: true})}
              className={cx(
                "border-b bg-transparent w-full py-1 mt-6 text-green08 border-green08",
                {
                  "text-red border-red": errors.civil_status
                })
              }>
              <option value="">estado civil</option>
              <option>solteiro</option>
              <option>casado - comunhão de adiquiridos</option>
              <option>casado - comunhão geral</option>
              <option>casado - separação de bens</option>
              <option>divorciado</option>
              <option>viúvo</option>
            </select>
            {errors.civil_status && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="text"
              color="green"
              placeholder="nome completo do cônjuge"
              name="spouse_name"
              error={errors.spouse_name}
              register={register}
            />
            {errors.spouse_name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="text"
              color="green"
              placeholder="contribuinte"
              name="spouse_doc_id"
              error={errors.spouse_doc_id}
              register={register}
            />
            {errors.spouse_doc_id && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="text"
              color="green"
              placeholder="residência"
              name="address"
              error={errors.address}
              register={register}
            />
            {errors.address && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="email"
              color="green"
              placeholder="e-mail"
              name="email"
              error={errors.email}
              register={register({required: true})}
            />
            {errors.email && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            <Inputbox
              type="tel"
              color="green"
              placeholder="telefone"
              name="phone"
              error={errors.phone}
              register={register({required: true})}
            />
            {errors.phone && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

            {
              !!units.length
              && <>
                  <select
                  name="unit"
                  ref={register({required: true})}
                  className={cx(
                    "border-b bg-transparent w-full mt-6 py-1 text-green08 border-green08",
                    {
                      "text-red border-red": errors.unit
                    })
                  }
                  onChange={selectUnit}
                  >
                  <option value="">apartamento</option>
                  {units.map(({id, title}) => <option key={id} value={id}>{title}</option>)}
                </select>
                {errors.unit && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
              </>
            }
            {
              !!selectedUnit.title
              && <>
                <p className="text-green08 text-sm mt-6 mb-2">Valor do apartamento</p>
                <div className="flex items-center border rounded-md px-2 bg-transparent w-full py-1 text-green08 border-green08">
                  <input
                    type="number"
                    name="price"
                    error={errors.price}
                    ref={register({required: true})}
                    className="text-xl font-bold bg-transparent w-full"
                  />
                  <span>€</span>
                </div>
                {errors.price && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

                <p className="text-green08 font-bold mt-6 border-b border-green08">Proposta</p>
                <textarea
                  placeholder=""
                  name="tender"
                  rows="8"
                  error={errors.tender}
                  ref={register({required: true})}
                  className={cx(
                    "border-b bg-transparent w-full py-1 text-green08 border-green08",
                    {
                      "text-red border-red": errors.tender
                    }
                  )}
                />
                {errors.tender && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}          
              </>
            }

            <p className="text-green08 font-bold mt-6 mb-2">Ficha de reserva assinada</p>
            <Filebox 
              name="reservation_document"
              error={errors.reservation_document}
              register={register({required: true})}
            />
            {errors.reservation_document && <ErrorMessage>Este campo é obrigatório</ErrorMessage>} 

            <p className="text-green08 font-bold mt-6 mb-2">Comprovativo de pagamento</p>
            <Filebox 
              name="payment_document"
              error={errors.payment_document}
              register={register({required: true})}
            />
            {errors.payment_document && <ErrorMessage>Este campo é obrigatório</ErrorMessage>} 

            <p className="text-green08 font-bold mt-6 mb-2">Cópia documento cliente</p>
            <Filebox 
              name="client_document"
              error={errors.client_document}
              register={register({required: true})}
            />
            {errors.client_document && <ErrorMessage>Este campo é obrigatório</ErrorMessage>} 

            

            <p className="text-red mt-4 text-xs">{errorMessage}</p>
            <Button text="reservar" type="primary" className="mt-10"/>
            <Link to={`/client/${id}`}>
              <Button text="voltar" type="primary" className="mt-6" icon iconDirection="left" />
            </Link>
          </form>
        }
      </div>
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default Reservation
