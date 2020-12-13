import React, { useState, useContext, useEffect, useCallback } from 'react'
import Mask from '../components/Mask';
import ImageOverlay from '../components/ImageOverlay';
import Axios from 'axios';
import { AppContext } from '../store.js';
import { itemsUrl } from '../api'
import db from '../db'

const Gallery = () => {
  const [state] = useContext(AppContext);
  const [content, setContent] = useState({})
  const [copy, setCopy] = useState({copy:{}, language: state.language})
  const [showImage, setShowImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const images = [
    {
      src: require("../assets/images/cam-01-fachada.jpg"),
      alt: 'fachada'
    },
    {
      src: require("../assets/images/cam-04-hall.jpg"),
      alt: 'Hall',
      className: 'row-span-2'
    },
    {
      src: require("../assets/images/cam-08-wc.jpg"),
      alt: 'wc'
    },
    {
      src: require("../assets/images/cam-06-sala.jpg"),
      alt: 'Sala',
      className: 'col-span-2'
    },
    {
      src: require("../assets/images/cam-05-cozinha.jpg"),
      alt: 'Cozinha',
      className: 'col-span-2'
    },
    {
      src: require("../assets/images/cam-09-suite.jpg"),
      alt: 'Suite',
      className: 'col-span-2'
    },
    {
      src: require("../assets/images/cam-03-varanda.jpg"),
      alt: 'Varanda',
      className: 'col-span-2'
    },
    {
      src: require("../assets/images/cam-02-patio.jpg"),
      alt: 'Patio'
    },
    {
      src: require("../assets/images/cam-07-escadas.jpg"),
      alt: 'Escadas',
      className: 'row-span-2'
    },
    {
      src: require("../assets/images/cam-10-garagem.jpg"),
      alt: 'Garagem'
    },
    {
      src: require("../assets/images/fachada.jpg"),
      alt: 'Fachada',
      className: 'col-span-2'
    },
  ]
  const selectImage = image => {
    setShowImage(true);
    setSelectedImage(images.indexOf(image))
  }

  const changeCopy = useCallback(content => {
    const copy = content.find(translation => translation.language === state.language)
    setCopy(copy)
  },[state.language])
  
  useEffect(() => {
    if (!Object.keys(content).length) {
      if (window.navigator.onLine) {
        Axios(`${itemsUrl}/page_gallery?fields=*.*`).then(response => {
          const allContent = response.data.data[0].translations;
          setContent(allContent)
          db.content.put({ page: 'Gallery', content: allContent })
          changeCopy(allContent)
        })
      } else {
        db.content.get('Gallery').then(contentDB => {
          setContent(contentDB.content)
          changeCopy(contentDB.content)
        })
      }
    } else {
      if (state.language !== copy.lang) {
        changeCopy(content)
      }
    }
    return () => {
      
    }
  }, [changeCopy, content, copy.lang, state.language])


  return (
    <section>
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8 text-black" dangerouslySetInnerHTML={{
          __html: copy.text
        }} />
        <div className="grid grid-cols-2 gap-2">
          {images.map(image => <img key={image.src} src={image.src} alt={image.alt} className={image.className} onClick={() => selectImage(image)} />)}
        </div>
      </div>
      <ImageOverlay
        images={images}
        selectedImage={selectedImage}
        showImage={showImage}
        handleClose={() => {setShowImage(false)}}
      />
    </section>
  )
}

export default Gallery
