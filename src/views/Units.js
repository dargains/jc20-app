import React, { useEffect, useState, useRef } from 'react'
import useOnClickOutside from '../outsideHook'
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import styled from 'styled-components'
import cx from 'classnames'
import { baseUrl } from '../api'
import db from '../db'
import fachada from '../assets/images/fachada.jpg'

const getHeight = index => {
  switch(index) {
    case 0:
    case 1:
      return 85
    case 2:
    case 3:
    case 4:
      return 73
    default:
      return 150
  }
}
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

const Units = () => {
  let history = useHistory();
  const [units, setUnits] = useState([])
  const [unit, setUnit] = useState({})
  const ref = useRef()
  useOnClickOutside(ref, () => setUnit({}));
  useEffect(() => {
    if (window.navigator.onLine) {
      console.log('Online. Fetching from CMS...')
      Axios(`${baseUrl}/units?fields=*.*`).then(response => {
        const onlineUnits = response.data.data
        setUnits(onlineUnits)
        onlineUnits.forEach(unit => {
          db.table('units').put({ ...unit })
        })
      })

    } else {
      console.log('Offline. Fetching from Local DB...')
      db.table('units').toArray().then(dbUnits => {
        if (!dbUnits) console.log('nao tem units na db')
        else setUnits(dbUnits)
      })

    }

    return () => {

    }
  }, [])
  const selectUnit = selectedUnit => {
    if (unit === selectedUnit) goToUnit(unit.id)
    setUnit(selectedUnit)
    
  }
  const goToUnit = id => {
    history.push(`/unit/${id}`)
  }
  return (
    <section className={cx('apartments', 'bg-cover bg-no-repeat bg-center w-full h-screen')}>
      <div className="h-24 bg-green07 flex items-center justify-between px-4">
        {
          unit.title
          ? <div className={cx("w-full flex items-center justify-between",{'opacity-50': unit.status !== 'available'})}>
              <p className="font-display text-white uppercase text-3xl">T{unit.bedrooms} <span className="text-green">{unit.extra}</span></p>
              <div className="text-center text-white">
                <p className="uppercase mb-2">Apartamento <span className="text-green">{unit.title}</span></p>
                  <span className={cx(
                    "text-xs py-1 px-4 border rounded-xl border-white text-white",
                    {
                      'bg-green01 border-green01 text-green07': unit.status === 'reserved'
                    }
                    )}>
                    {getStatus(unit.status)}
                  </span>
              </div>
            </div>
          : <p className="text-2xl text-white uppercase font-display font-medium">Escolha o seu <span className="text-green font-light">apartamento</span></p>
        }
      </div>
      <Building className="building px-6 grid py-6" ref={ref} style={{backgroundImage: `url(${fachada})`}}>
        {units.map((unit, index) => 
          <AptImage key={unit.id}  index={index} onClick={() => selectUnit(unit)}>
            <img src={unit.thumbnail.data.full_url} alt={unit.title} />
          </AptImage>)}
      </Building>

    </section >
  )
}

const Building = styled.div`
  grid-template-columns: 1.2fr repeat(4, 1fr);
  justify-items: center;
  max-width: 730px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 670px;
  figure:nth-child(1) {
    grid-column: span 2;
    justify-self: right;
  }
  figure:nth-child(2) {
    grid-column: span 3;
    justify-self: left;
  }
  figure:nth-child(3),
  figure:nth-child(4),
  figure:nth-child(5),
  figure:nth-child(6) {
    grid-column: span 5;
  }
  &:hover {
    figure {
      opacity: 0.8;
    }
  }
`

const AptImage = styled.figure`
  // height: ${props => getHeight(props.index)}px;
  transition: all .2s ease-in-out;
  will-change: transform;
  &:hover {
    opacity: 1 !important;
    box-shadow: 0 3px 24px rgba(0,0,0,.7);
    transform: scale(1.05);
    z-index: 1;
  }
`


export default Units
