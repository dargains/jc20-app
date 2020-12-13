import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import cx from 'classnames'
import styled from 'styled-components';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import Mask from '../components/Mask';
import Axios from 'axios';
import { itemsUrl } from '../api';
import { AppContext } from '../store';
import { zeroPrefix } from '../helpers';

const Tender = () => {
  const {id} = useParams();
  const [state] = useContext(AppContext)
  const [units, setUnits] = useState([])
  const [selectedUnit, setSelectedUnit] = useState({})
  const [client, setClient] = useState({})
  const [isDone, setIsDone] = useState(false)
  const [isFirst, setIsFirst] = useState(true)
  const [type, setType] = useState("rc")
  const [errorMessage] = useState('')
  const { register, handleSubmit, errors, setValue } = useForm();
  console.log(client);
  const submitFirstStep = data => {
    data.id = id
    setClient(data)
    setIsFirst(false)
  }

  const submitSecondStep = async data => {
    const today = new Date()
    const hour = today.getHours() + ':' + zeroPrefix(today.getMinutes())
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    const headers = {
      Authorization: `Bearer ${state.user.token}`
    }
    const tenderData = {
      price: data.price,
      unit: selectedUnit.id,
      tender: data.tender,
      obs: data.obs,
      client: id,
      status: 'waiting'
    }
    const oldLog = await (await Axios(`${itemsUrl}/clients/${id}`, {headers})).data.data.log
    const newLog = oldLog + `<p>Proposta ao apartamento ${selectedUnit.title} feita em ${date} às ${hour}</p>`
    await Axios.post(`${itemsUrl}/tenders`, tenderData, {headers})
    await Axios.patch(`${itemsUrl}/clients/${id}`, {log: newLog}, {headers})
    setIsDone(true)
    // send email
  }

  const toggleType = newType => {
    if (typeof newType !== 'string') newType = type === 'rc' ? 'custom' : 'rc'
    setValue('tender', newType === 'rc' ? selectedUnit.tender : '')
    setType(newType)
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
          Proposta {isDone && <span>enviada com <span className="text-green">sucesso</span></span>}
        </h1>
        {
          isDone
          ? <>
          <p className="mb-12 text-green08">Obrigado pelo envio da proposta! A Rio Capital está a analisá-la em breve entrará em contato.</p>
          <Link to={`/client/${id}`}>
            <Button text="registo" type="primary" icon iconDirection="left" />
          </Link>
          </>
          : isFirst
          ? <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est nam enim laboriosam ut nobis dicta fugiat. Impedit, iste modi.</p>
            <form onSubmit={handleSubmit(submitFirstStep)} >
              <Inputbox
                type="text"
                color="green"
                placeholder="nome"
                name="name"
                error={errors.name}
                register={register({required: true})}
              />
              {errors.name && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}

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

              <Inputbox
                type="text"
                color="green"
                placeholder="contribuinte"
                name="nif"
                error={errors.nif}
                register={register({required: true})}
              />
              {errors.nif && <ErrorMessage>Este campo é obrigatório</ErrorMessage>}
              

              <p className="text-red mt-4 text-xs">{errorMessage}</p>
              <Button text="avançar" type="primary" className="mt-10" icon iconDirection="right" />
              <Link to={`/client/${id}`}>
                <Button text="voltar" type="primary" className="mt-6" icon iconDirection="left" />
              </Link>
            </form>
          </>
          : <>
            <div className="flex items-center w-3/5 text-center mx-auto">
              <span
                className={cx("text-xs font-bold text-green06", {'opacity-50': type === 'custom'})}
                onClick={() => toggleType('rc')}
              >Proposta Rio Capital</span>
              <div
                className="bg-gray-400 rounded-xl w-10 mx-2 flex-shrink-0"
                style={{height: "1.2rem"}}
                onClick={toggleType}
              >
                <div className={cx("bg-white rounded-full w-4 h-4 transform duration-150 transition-transform",
                {
                  "translate-x-5": type === 'custom'
                }
                )} style={{top: 2, left: 2}}></div>
              </div>
              <span
                className={cx("text-xs font-bold text-green06", {'opacity-50': type === 'rc'})}
                onClick={() => toggleType('custom')}
              >Proposta personalizada</span>
            </div>

            <form onSubmit={handleSubmit(submitSecondStep)} >
              {
                !!units.length
                && <>
                  <p className="text-green08 text-sm mt-6 mb-2">Apartamento</p>
                    <select
                    name="unit"
                    ref={register({required: true})}
                    className={cx(
                      "border-b bg-transparent w-full py-1 text-green08 border-green08",
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
                      type="text"
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
                  
                  <p className="text-green08 font-bold mt-6 border-b border-green08">Observações</p>
                  <textarea
                    placeholder=""
                    name="obs"
                    rows="8"
                    error={errors.obs}
                    ref={register}
                    className={cx(
                      "border-b bg-transparent w-full py-1 text-green08 border-green08",
                      {
                        "text-red border-red": errors.obs
                      }
                    )}
                  />              
                </>
              }
              

              <p className="text-red mt-4 text-xs">{errorMessage}</p>
              <Button text="enviar proposta" type="primary" className="mt-10"/>
            </form>
            <Button text="voltar" type="primary" className="mt-6" icon iconDirection="left" handleClick={() => setIsFirst(true)} />
          </>
        }
        
      </div>
    </section>
  )
}

const ErrorMessage = styled.span`
  color: #fe0a01;
  font-size: 12px;
`

export default Tender
