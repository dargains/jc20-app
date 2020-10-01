import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Axios from 'axios'
import styled from 'styled-components'
import cx from 'classnames'
import { baseUrl } from '../api'
import db from '../db'
import Conditional from '../components/Conditional';
import Icon from '../components/Icon';

const Unit = () => {
  let {id} = useParams();
  const [unit, setUnit] = useState({})
  const [showFloor, setShowFloor] = useState(true)
  useEffect(() => {
      db.table('units').get(id, dbUnit => {
        console.log(id, dbUnit);
        if (!dbUnit) Axios(`${baseUrl}/units/${id}?fields=*.*`).then(response => {
          const onlineUnits = response.data.data
          setUnit(onlineUnits)
        })
        else setUnit(dbUnit)
      })


    return () => {

    }
  }, [id])
  const getStatus = status => {
    switch(status) {
      case 'available':
        return 'disponível'
      case 'reserved':
        return 'reservado'
      case 'not_available':
        return 'vendido'
      default:
        return ''
    }
  }
  const changeView = () => {
    setShowFloor(!showFloor)
    window.scrollTo({top:0, behavior: 'smooth'})
  }
  return (
    <>
    {unit.title && <section>
      <Mask />
      <div className="pt-6 overflow-hidden">
        <div className="wrapper">
          <header className="mb-12">
            <p className="title font-light text-xl uppercase mb-2">
              <span className="text-green">Apartamento</span> {unit.title}
            </p>
            <span className={cx(
              "text-xs py-1 px-4 border rounded-xl border-green01",
              {
                '': unit.status === 'available',
                'bg-green06': unit.status === 'reserved',
                'bg-green01 text-white': unit.status === 'not_available'
              }
              )}>
              {getStatus(unit.status)}
            </span>
          </header>
        </div>
        <div className={cx(
          'flex transform transition-all duration-200',
          {'-translate-x-1/2': !showFloor}
        )} style={{width: '200vw'}}>
          <div className="wrapper">
            <figure className="w-4/5 mx-auto">
              <img src={unit.floorplan.data.full_url} alt="planta"/>
            </figure>
            <p className="text-center text-xs text-green06 my-2">Av. João Crisóstomo</p>
            <div className="bg-gray-300 rounded-xl flex items-center justify-between py-4 px-12">
              <Icon.Download fill={'#333'} />
              <Icon.Share fill={'#333'} />
              <Icon.Search fill={'#333'} />
            </div>
            <InfoGrid className="bg-gray-300 mt-8">
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Area />
                  <small className="block mt-1 text-2xs text-center">área bruta total</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.indoors_area + unit.outdoors_area} <small className="text-xs">m<sup>2</sup></small></p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Interna />
                  <small className="block mt-1 text-2xs text-center">área interna</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.indoors_area} <small className="text-xs">m<sup>2</sup></small></p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Externa />
                  <small className="block mt-1 text-2xs text-center">área externa</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.outdoors_area} <small className="text-xs">m<sup>2</sup></small></p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Bedroom />
                  <small className="block mt-1 text-2xs text-center">quartos</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.bedrooms}</p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Bathroom />
                  <small className="block mt-1 text-2xs text-center">i.s.</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.bathrooms}</p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Suite />
                  <small className="block mt-1 text-2xs text-center">suites</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.suites}</p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Car />
                  <small className="block mt-1 text-2xs text-center">lugares</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.parking_spots}</p>
              </article>
            </InfoGrid>
            <button onClick={changeView}>info</button>
          </div>
          <div className="wrapper">
            <p>Mapa de Acabamentos</p>
            <div>
              accordions
            </div>
            <button onClick={changeView}>planta</button>
          </div>
        </div>
      </div>
    </section>}
    </>
  )
}

const Mask = styled.div`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to bottom, #d3d7d6, #ffffff);
  pointer-events: none;
  position: absolute;
  top: 0;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  .icon {
    fill: gray;
  }
  article:first-of-type {
    grid-row: span 2;
  }
`

export default Unit
