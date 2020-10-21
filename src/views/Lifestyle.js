import React, { useContext, useState } from 'react'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import lifestyleImage from '../assets/images/lifestyle.jpg'
import mapImage from '../assets/images/map.jpg'
import { useEffect } from 'react'
import Axios from 'axios'
import { baseUrl } from '../api'
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
          const response = await Axios(`${baseUrl}/lifestyle?fields=*.*.*`)
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
        <div className="-mx-6">
          <img src={lifestyleImage} alt="Saldanha"/>
        </div>
        <p className="text-white my-8">
          Breve texto sobre a fotografia indicada na imagem. Lorem ipsum condimentum euismod eros fames nisi quis turpis, conubia vivamus massa.
        </p>
        <div className="-mx-6">
          <img src={mapImage} alt="Saldanha"/>
        </div>

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
              <li className="py-2"><span className="rounded-full bg-red w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">1</span> Museu Fundação Gulbenkian</li>
              <li className="py-2"><span className="rounded-full bg-red w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">2</span> Jardim Zoológico</li>
              <li className="py-2"><span className="rounded-full bg-red w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">3</span> Campo Pequeno</li>
            </ol>
          </Accordion>
          <Accordion
            color="white"
            header="Cultura e lazer"
          >
            <ol className="text-white py-6 px-4">
              <li className="py-2"><span className="rounded-full bg-blue-800 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">1</span> Museu Fundação Gulbenkian</li>
              <li className="py-2"><span className="rounded-full bg-blue-800 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">2</span> Jardim Zoológico</li>
              <li className="py-2"><span className="rounded-full bg-blue-800 w-6 h-6 mr-4 inline-flex items-center justify-center text-xs">3</span> Campo Pequeno</li>
            </ol>
          </Accordion>
        </div>
        {content.map(item => <LifestyleItem key={item.title} {...item} />)}
      </div>
    </section>
  )
}

export default Lifestyle
