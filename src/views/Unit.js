import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Axios from 'axios'
import styled from 'styled-components'
import ImageMap from "image-map"
import cx from 'classnames'
import { itemsUrl } from '../api'
import db from '../db'
import Icon from '../components/Icon';
import Button from '../components/Button';
import ImageOverlay from '../components/ImageOverlay';
import StatusTag from '../components/StatusTag'
import Accordion from '../components/Accordion';
import Mask from '../components/Mask';
import Loading from '../components/Loading';

const ContentItens = ({content}) => {
  return (
    <div
      className="bg-white rounded-lg rounded-t-none"
      style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)" }}
    >
      <Table>
        <tbody>
          {content.map((item, index) => (
            <tr key={index} className="items-center text-gray-600">
              <td className="text-center p-4">{item.title}</td>
              <td className="text-sm p-4">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const ImageArea = ({name, coordinates, handleClick}) => {
  return (
    <area
      alt={name}
      title={name}
      coords={coordinates}
      shape="poly"
      onClick={handleClick}
    />
  )
}

const Unit = () => {
  let {id} = useParams();
  const [unit, setUnit] = useState({})
  const [showFloorImage, setshowFloorImage] = useState(false)
  const [showRoomImage, setShowRoomImage] = useState(false)
  const [showFloor, setShowFloor] = useState(true)
  const [selectedArea, setSelectedArea] = useState({})
  useEffect(() => {
      db.table('units').get(id, dbUnit => {
        if (!dbUnit) Axios(`${itemsUrl}/units/${id}?fields=*.*.*`).then(response => {
          const onlineUnits = response.data.data
          setUnit(onlineUnits)
          setTimeout(() => {
            
            ImageMap('img[usemap]')
          }, 1000);
        })
        else {
          setUnit(dbUnit)
          ImageMap('img[usemap]')
        }
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
      {unit.title 
        ? <section>
          <Mask />
          <div className="overflow-hidden">
            {/* HEADER */}
            <header className="mb-12">
              <div className="wrapper flex items-center justify-between">
                <div>
                  <p className="title font-light text-xl uppercase mb-2">
                    <span className="text-green">Apartamento</span> {unit.title}
                  </p>
                  <StatusTag status={unit.status} />
                </div>
                <div className="text-center text-green08 text-xl w-20">
                  <p>T{unit.bedrooms} {unit.extra}</p>
                </div>
              </div>
            </header>

            <div
              className={cx("flex transform transition-all duration-200", {
                "-translate-x-1/2": !showFloor,
              })}
              style={{ width: "200vw" }}
            >
              {/* PLANTA */}
              <div className="wrapper w-screen">
                <div className="mb-12 h-8 border-b border-black">
                  <p className="flex items-center justify-between">
                    {
                      Object.keys(selectedArea).length
                      ? <>
                        <span className="text-xl flex items-center" onClick={() => {selectedArea.image && setShowRoomImage(true)}}>
                          {selectedArea.image && <Icon.Image className="mr-2" />} {selectedArea.name}
                        </span>
                        <span className="text-gray-600">{selectedArea.area} m<sup>2</sup></span>
                      </>
                      : <>
                        <span className="text-xs">Clique no ambiente para mais informações</span>
                        <Icon.Click/>
                      </>
                      
                    }
                  </p>
                </div>
                <figure>
                  <img src={unit.floorplan.data.full_url} alt="planta" useMap={unit.unit_areas && `#floorplan${unit.title}`} />
                  {
                    unit.unit_areas &&
                    <map name={`floorplan${unit.title}`}>
                      {unit.unit_areas.map(area => <ImageArea key={area.name} {...area} handleClick={() => {setSelectedArea(area)}} />)}
                    </map>
                  }
                </figure>

                <p className="text-center text-xs text-gray-600 mt-2 mb-6">
                  Av. João Crisóstomo
                </p>

                <div className="bg-gray-400 rounded-xl flex items-center justify-between py-3 px-12">
                  {unit.info_file && (
                    <a
                      href={unit.info_file.data.full_url}
                      title="info file"
                      download
                    >
                      <Icon.Download className="text-green00" />
                    </a>
                  )}
                  <Icon.Share
                    className="text-green00"
                    handleClick={handleShare}
                  />
                  <Icon.Search
                    className="text-green00"
                    handleClick={() => {setshowFloorImage(true)}}
                  />
                </div>
                
                <InfoGrid className="bg-gray-300 mt-8">
                  <article className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col items-center w-12">
                      <Icon.Area className="text-green00 h-8" />
                      <small className="block mt-1 text-2xs text-center">
                        área bruta total
                      </small>
                    </div>
                    <p className="text-lg font-light flex-1 text-center">
                      {parseFloat(unit.indoors_area) + parseFloat(unit.outdoors_area)}{" "}
                      <small className="text-xs">
                        m<sup>2</sup>
                      </small>
                    </p>
                  </article>
                  <article className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col items-center w-12">
                      <Icon.Interna className="text-green00 h-8" />
                      <small className="block mt-1 text-2xs text-center">
                        área interna
                      </small>
                    </div>
                    <p className="text-lg font-light flex-1 text-center">
                      {unit.indoors_area}{" "}
                      <small className="text-xs">
                        m<sup>2</sup>
                      </small>
                    </p>
                  </article>
                  <article className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col items-center w-12">
                      <Icon.Externa className="text-green00 h-8" />
                      <small className="block mt-1 text-2xs text-center">
                        área externa
                      </small>
                    </div>
                    <p className="text-lg font-light flex-1 text-center">
                      {unit.outdoors_area}{" "}
                      <small className="text-xs">
                        m<sup>2</sup>
                      </small>
                    </p>
                  </article>
                  <article className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col items-center w-12">
                      <Icon.Bedroom className="text-green00 h-8" />
                      <small className="block mt-1 text-2xs text-center">
                        quartos
                      </small>
                    </div>
                    <p className="text-lg font-light flex-1 text-center">
                      {unit.bedrooms}
                    </p>
                  </article>
                  <article className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col items-center w-12">
                      <Icon.Bathroom className="text-green00 h-8" />
                      <small className="block mt-1 text-2xs text-center">
                        i.s.
                      </small>
                    </div>
                    <p className="text-lg font-light flex-1 text-center">
                      {unit.bathrooms}
                    </p>
                  </article>
                  <article className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col items-center w-12">
                      <Icon.Suite className="text-green00 h-8" />
                      <small className="block mt-1 text-2xs text-center">
                        suites
                      </small>
                    </div>
                    <p className="text-lg font-light flex-1 text-center">
                      {unit.suites}
                    </p>
                  </article>
                  <article className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col items-center w-12">
                      <Icon.Car className="text-green00 h-8" />
                      <small className="block mt-1 text-2xs text-center">
                        lugares
                      </small>
                    </div>
                    <p className="text-lg font-light flex-1 text-center">
                      {unit.parking_spots}
                    </p>
                  </article>
                </InfoGrid>
                {/* <Button
                  text="acabamentos"
                  type="primary"
                  icon
                  iconDirection="right"
                  handleClick={changeView}
                  className="mt-8"
                /> */}
              </div>

              {/* INFO */}
              <div className="wrapper w-screen">
                <p className="p-4 text-lg text-green05 bg-gray-400 text-center mb-6 -ml-6 -mr-6">
                  Mapa de Acabamentos
                </p>
                <div>
                  {!!unit.finishes && unit.finishes.map(({ title, itens }) => (
                    <Accordion key={title} header={title} color="green">
                      <ContentItens content={itens} />
                    </Accordion>
                  ))}
                </div>
                <Button
                  text="planta"
                  type="primary"
                  icon
                  iconDirection="left"
                  handleClick={changeView}
                  className="mt-8"
                />
              </div>
            </div>
          </div>
          <ImageOverlay
            src={unit.floorplan.data.full_url}
            alt={`Planta - Apartamento ${unit.title}`}
            showImage={showFloorImage}
            spaced
            handleClose={() => {
              setshowFloorImage(false);
            }}
          />
          {
            selectedArea.image &&
            <ImageOverlay
              src={selectedArea.image.data.full_url}
              alt={selectedArea.name}
              showImage={showRoomImage}
              handleClose={() => {
                setShowRoomImage(false);
              }}
            />
          }
        </section>
        : <Loading />
      }
    </>
  );
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
const Table = styled.table`
  border-collapse: collapse;
  td,
  th {
    border: 1px solid #f7f7f7;
  }
  tr:first-child th {
    border-top: 0;
  }
  tr:last-child td {
    border-bottom: 0;
  }
  tr td:first-child,
  tr th:first-child {
    border-left: 0;
  }
  tr td:last-child,
  tr th:last-child {
    border-right: 0;
  }
`

export default Unit
