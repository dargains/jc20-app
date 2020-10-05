import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Axios from 'axios'
import styled from 'styled-components'
import cx from 'classnames'
import { baseUrl } from '../api'
import db from '../db'
import Icon from '../components/Icon';
import Button from '../components/Button';
import ImageOverlay from '../components/ImageOverlay';
import StatusTag from '../components/StatusTag'
import Accordion from '../components/Accordion';
import Mask from '../components/Mask';

const Unit = () => {
  let {id} = useParams();
  const [unit, setUnit] = useState({})
  const [showImage, setShowImage] = useState(false)
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
  const changeView = () => {
    setShowFloor(!showFloor)
    window.scrollTo({top:0, behavior: 'smooth'})
  }
  const handleShare = async event => {
    if (navigator.canShare) {
      try {
        await navigator.share({
          title: document.title,
          url: document.location.href
        })
        console.log('share successful')
      } catch(err) {
        console.log(err)
      }
      
    } else {
      alert('nein')
    }
  }
  return (
    <>
    {unit.title && <section>
      <Mask />
      <div className="pt-6 overflow-hidden">
        {/* HEADER */}
        <header className="mb-12">
          <div className="wrapper flex items-center justify-between">
            <div>
              <p className="title font-light text-xl uppercase mb-2">
                <span className="text-green">Apartamento</span> {unit.title}
              </p>
              <StatusTag status={unit.status} />
            </div>
            <div className="text-center text-green08 text-xl">
              <p>T{unit.bedrooms}</p>
              <p>{unit.extra}</p>
            </div>
          </div>
        </header>
        
        <div className={cx(
          'flex transform transition-all duration-200',
          {'-translate-x-1/2': !showFloor}
        )} style={{width: '200vw'}}>

          {/* PLANTA */}
          <div className="wrapper">
            <figure>
              <img src={unit.floorplan.data.full_url} alt="planta"/>
            </figure>
            <p className="text-center text-xs text-gray-600 mt-2 mb-6">Av. João Crisóstomo</p>
            <div className="bg-gray-400 rounded-xl flex items-center justify-between py-3 px-12">
              {unit.info_file && <a href={unit.info_file.data.full_url} title="info file" download><Icon.Download className="text-green00" /></a>}
              <Icon.Share className="text-green00" handleClick={handleShare}/>
              <Icon.Search className="text-green00" handleClick={() => {setShowImage(true)}} />
            </div>
            <InfoGrid className="bg-gray-300 mt-8">
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Area className="text-green00 h-8" />
                  <small className="block mt-1 text-2xs text-center">área bruta total</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.indoors_area + unit.outdoors_area} <small className="text-xs">m<sup>2</sup></small></p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Interna className="text-green00 h-8" />
                  <small className="block mt-1 text-2xs text-center">área interna</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.indoors_area} <small className="text-xs">m<sup>2</sup></small></p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Externa className="text-green00 h-8" />
                  <small className="block mt-1 text-2xs text-center">área externa</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.outdoors_area} <small className="text-xs">m<sup>2</sup></small></p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Bedroom className="text-green00 h-8" />
                  <small className="block mt-1 text-2xs text-center">quartos</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.bedrooms}</p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Bathroom className="text-green00 h-8" />
                  <small className="block mt-1 text-2xs text-center">i.s.</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.bathrooms}</p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Suite className="text-green00 h-8" />
                  <small className="block mt-1 text-2xs text-center">suites</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.suites}</p>
              </article>
              <article className="flex items-center justify-between p-4 bg-white">
                <div className='flex flex-col items-center w-12'>
                  <Icon.Car className="text-green00 h-8" />
                  <small className="block mt-1 text-2xs text-center">lugares</small>
                </div>
                <p className="text-lg font-light flex-1 text-center">{unit.parking_spots}</p>
              </article>
            </InfoGrid>
            <Button text="acabamentos" type="primary" icon iconDirection="right" handleClick={changeView} className="mt-8" />
          </div>
          
          {/* INFO */}
          <div className="wrapper">
            <p className="p-4 text-lg text-green05 bg-gray-400 text-center mb-6 -ml-4 -mr-4">Mapa de Acabamentos</p>
            <div>
              <Accordion header="Sala" content={[{local: 'Piso', material: 'Madeira carvalho  com 10mm de espessura, dimensão da régua 0,30 x 1,30m acabamento a óleo invisível'},{local: 'Parede', material: 'Madeira carvalho  com 10mm de espessura, dimensão da régua 0,30 x 1,30m acabamento a óleo invisível'}]}/>
              <Accordion header="Sala" content={[{local: 'Piso', material: 'Madeira carvalho  com 10mm de espessura, dimensão da régua 0,30 x 1,30m acabamento a óleo invisível'},{local: 'Parede', material: 'Madeira carvalho  com 10mm de espessura, dimensão da régua 0,30 x 1,30m acabamento a óleo invisível'}]}/>
            </div>
            <Button text="planta" type="primary" icon iconDirection="left" handleClick={changeView} className="mt-8" />
          </div>
        </div>
      </div>
      <ImageOverlay src={unit.floorplan.data.full_url} alt={`Planta - Apartamento ${unit.title}`} showImage={showImage} handleClose={() => {setShowImage(false)}}/>
    </section>}
    </>
  )
}

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  article:first-of-type {
    grid-row: span 2;
  }
`

export default Unit
