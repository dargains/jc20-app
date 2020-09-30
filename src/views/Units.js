import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import styled from 'styled-components'
import cx from 'classnames'
import { baseUrl } from '../api'
import db from '../db'

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

const Units = () => {
  let history = useHistory();
  const [units, setUnits] = useState([])
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
  const goToUnit = id => {
    history.push(`/unit/${id}`)
  }
  return (
    <section className={cx('apartments', 'bg-cover bg-no-repeat bg-center w-full h-screen')}>
      <p className="text-3xl bg-gray-500" style={{ height: 100 }}>Escolha o seu apartamento</p>
      <Building className="building px-6 grid my-6 mx-auto">
        {units.map((unit, index) => 
          <AptImage key={unit.id}  index={index} onClick={() => goToUnit(unit.id)}>
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
