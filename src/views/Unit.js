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
  return (
    <Conditional if={unit.title} render={() => <section>
      <header>
      <p className="title">
        Apartamento {unit.title}
      </p>
      <p className="availability">
        {unit.available}
      </p>
      <figure className="w-4/5 mx-auto">
        <img src={unit.floorplan.data.full_url} alt="planta"/>
      </figure>
      <InfoGrid className="bg-gray-300">
        <article className="flex items-center justify-center bg-white">
          <div className='flex flex-col items-center w-16'>
            <Icon.User />
            <small className="block mt-2 text-xs text-center">área bruta total</small>
          </div>
          <p className="text-lg light">{unit.indoors_area + unit.outdoors_area} <small className="text-xs">m<sup>2</sup></small></p>
        </article>
        <article className="flex items-center justify-center bg-white">
          <div className='flex flex-col items-center w-16'>
            <Icon.User />
            <small className="block mt-2 text-xs text-center">área interna</small>
          </div>
          <p className="text-lg light">{unit.indoors_area} <small className="text-xs">m<sup>2</sup></small></p>
        </article>
        <article className="flex items-center justify-center bg-white">
          <div className='flex flex-col items-center w-16'>
            <Icon.User />
            <small className="block mt-2 text-xs text-center">área externa</small>
          </div>
          <p className="text-lg light">{unit.outdoors_area} <small className="text-xs">m<sup>2</sup></small></p>
        </article>
        <article className="flex items-center justify-center bg-white">
          <div className='flex flex-col items-center w-16'>
            <Icon.User />
            <small className="block mt-2 text-xs text-center">quartos</small>
          </div>
          <p className="text-lg light">{unit.bedrooms}</p>
        </article>
        <article className="flex items-center justify-center bg-white">
          <div className='flex flex-col items-center w-16'>
            <Icon.User />
            <small className="block mt-2 text-xs text-center">i.s.</small>
          </div>
          <p className="text-lg light">{unit.bathrooms}</p>
        </article>
      </InfoGrid>
      </header>
    </section>} />
    
  )
}

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  svg {
    fill: gray;
  }
`

export default Unit
