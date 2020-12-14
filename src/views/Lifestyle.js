import React, { useEffect, useContext, useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import lifestyleImage from '../assets/images/lifestyle.jpg'
import mapImage from '../assets/images/map.svg'
import Axios from 'axios'
import { itemsUrl } from '../api'
import db from '../db'
import { AppContext } from '../store'


const LifestyleItem = ({title, image, text, link}) => <article className="text-white my-12">
    <h2 className="font-display text-5xl font-medium capitalize -mb-6" style={{zIndex: 1}} >{title}</h2>
    <div className="-mx-6">
      <img src={image.data.full_url} alt="Gastronomia"/>
    </div>
    <p className="my-6">
      {text}
    </p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button text="saiba mais" type="secondary"  />
    </a>
  </article>

const Lifestyle = () => {
  const [state] = useContext(AppContext)
  const [content, setContent] = useState([])

  useEffect(() => {
    if (!Object.keys(content).length) {
      if (window.navigator.onLine) {
        (async () => {
          const response = await Axios(`${itemsUrl}/lifestyle?fields=*.*.*`)
          const allContent = response.data.data;
          
          setContent(allContent)
          db.content.put({ page: 'Lifestyle', content: allContent })
          // changeCopy(allContent)

        })()
      } else {
        db.content.get('Lifestyle').then(contentDB => {
          setContent(contentDB.content)
          // changeCopy(contentDB.content)
        })
      }
    } else {
      // if (state.language !== copy.lang) {
        // changeCopy(content)
      // }
    }
    return () => {
      
    }
  }, [content, state.language])
  return (
    <section className="bg-green05">
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-green">
          Saldanha<br/><span className="text-white font-light">life style</span>
        </h1>
        <figure className="-mx-6">
          <img src={lifestyleImage} alt="Saldanha"/>
        </figure>
        <p className="text-white my-8">
        Localizado no elegante bairro das Avenidas Novas, Avenida Living está no coração da cidade, beneficiando de toda a centralidade. Ao seu redor, dispõe de uma vasta oferta de espaços de cultura e lazer, bem como de escolas e hospitais e de diversas zonas que lhe oferecem um contacto imperdível com a natureza.
        </p>
        <figure className="-mx-6">
          <TransformWrapper pan={{disabled: true}}>
            <TransformComponent>
              <img src={mapImage} alt="Saldanha"/>
            </TransformComponent>
          </TransformWrapper>
        </figure>

        <div className="text-center my-12">

          <a
            href="https://goo.gl/maps/36hN888xgzqRSN1X9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            >
            <Button text="Google maps" type="secondary" />
          </a>
        </div>
        <div>
          <Accordion
            color="white"
            header="Cultura e lazer"
          >
            <ol className="text-white py-6 px-4">
              <li className="py-2"><span className="rounded-full bg-purple-900 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">1</span> Museu Fundação Gulbenkian</li>
              <li className="py-2"><span className="rounded-full bg-purple-900 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">2</span> Jardim Zoológico</li>
              <li className="py-2"><span className="rounded-full bg-purple-900 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">3</span> Campo Pequeno</li>
            </ol>
          </Accordion>
          <Accordion
            color="white"
            header="Shopping"
          >
            <ol className="text-white py-6 px-4">
              <li className="py-2"><span className="rounded-full bg-red w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">4</span> El Corte Inglés</li>
              <li className="py-2"><span className="rounded-full bg-red w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">5</span> Avenida da Liberdade</li>
              <li className="py-2"><span className="rounded-full bg-red w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">6</span> Atrium Saldanha</li>
            </ol>
          </Accordion>
          <Accordion
            color="white"
            header="Educação"
          >
            <ol className="text-white py-6 px-4">
              <li className="py-2"><span className="rounded-full bg-orange-500 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">7</span> Universidade Lisboa</li>
              <li className="py-2"><span className="rounded-full bg-orange-500 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">8</span> Universidade Católica</li>
              <li className="py-2"><span className="rounded-full bg-orange-500 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">9</span> Universidade Nova</li>
            </ol>
          </Accordion>
          <Accordion
            color="white"
            header="Desporto e Saúde"
          >
            <ol className="text-white py-6 px-4">
              <li className="py-2"><span className="rounded-full bg-blue-400 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">10</span> Estádio Universitário</li>
              <li className="py-2"><span className="rounded-full bg-blue-400 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">11</span> Piscina do Rego</li>
              <li className="py-2"><span className="rounded-full bg-blue-400 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">12</span> Hospital Santa Maria</li>
            </ol>
          </Accordion>
          <Accordion
            color="white"
            header="Natureza"
          >
            <ol className="text-white py-6 px-4">
              <li className="py-2"><span className="rounded-full bg-green w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">13</span> Monsanto</li>
              <li className="py-2"><span className="rounded-full bg-green w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">14</span> Jardim Gulbenkian</li>
              <li className="py-2"><span className="rounded-full bg-green w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">15</span> Parque Eduardo VII</li>
            </ol>
          </Accordion>
        </div>
        {content.map(item => <LifestyleItem key={item.title} {...item} />)}
      </div>
    </section>
  )
}

export default Lifestyle
