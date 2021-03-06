import React, { useEffect, useState, useRef } from 'react'
import useOnClickOutside from '../outsideHook'
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components'
import Axios from 'axios'
import cx from 'classnames'
import { itemsUrl } from '../api'
import db from '../db'
import fachada from '../assets/images/fachada.jpg'
import Loading from '../components/Loading'

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
  useOnClickOutside(ref, e => {
    if (e.target.closest(".apt") || e.target.closest('.unit__header')) return
    else setUnit({});
  });
  useEffect(() => {
    if (window.navigator.onLine) {
      console.log('Online. Fetching from CMS...')
      Axios(`${itemsUrl}/units?fields=*.*`).then(response => {
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
    if (unit === selectedUnit) goToUnit(selectedUnit.id)
    setUnit(selectedUnit)
    
  }
  const goToUnit = id => {
    history.push(`/unit/${id}`)
  }
  return (
    <section className="py-0">
      <div
        className="unit__header h-24 fixed z-10 top-0 w-full bg-green07 flex items-center justify-between px-4"
      >
        {unit.title ? (
          <Link
          to={`/unit/${unit.id}`}
            className={cx("w-full flex items-center justify-between", {
              "opacity-75": unit.status !== "available",
            })}
          >
            <p className="font-display text-white uppercase text-3xl">
              T{unit.bedrooms} <span className="text-green">{unit.extra}</span>
            </p>
            <div className="text-center text-white">
              <p className="uppercase mb-2">
                Apartamento <span className="text-green inline-block w-2">{unit.title}</span>
              </p>
              <span
                className={cx(
                  "text-xs py-1 px-4 border rounded-xl border-white text-white",
                  {
                    "bg-green01 border-green01 text-green07":
                      unit.status === "reserved",
                  }
                )}
              >
                {getStatus(unit.status)}
              </span>
            </div>
          </Link>
        ) : (
          <p className="text-2xl text-white uppercase font-display font-medium">
            Escolha o seu <span className="text-green font-light">apartamento</span>
          </p>
        )}
      </div>
      {
        !!units.length
        ? <Building
          className="grid mx-auto mt-24"
          style={{ padding: "12% 2% 10%", backgroundImage: `url(${fachada})` }}
        >
          {units.map((unit, index) => (
            <AptImage
              key={unit.id}
              index={index}
              ref={ref}
              onClick={() => selectUnit(unit)}
              className="apt"
            >
              <img src={unit.thumbnail.data.full_url} alt={unit.title} />
            </AptImage>
          ))}
        </Building>
        : <Loading />
      }
      <svg height="0" xmlns="http://www.w3.org/2000/svg">
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood floodColor="rgba(0,0,0,0.7)" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
    </section>
  );
}

const Building = styled.div`
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  max-width: 768px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  figure:nth-child(7),
  figure:nth-child(8) {
    grid-column: span 2;
  }
  figure:nth-child(8) {
    grid-column: 4/6;
  }
  &:hover {
    figure {
      opacity: 0.8;
    }
  }
`;

const AptImage = styled.figure`
  transition: all 0.2s ease-in-out;
  will-change: transform;
  &:hover {
    opacity: 1 !important;
    -webkit-filter: drop-shadow(0 3px 25px rgba(0, 0, 0, 0.7));
    filter: url(#drop-shadow);
    -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
    filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
    transform: scale(1.1);
    z-index: 1;
  }
`;


export default Units
