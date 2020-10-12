import React, {useState} from 'react'
import Mask from '../components/Mask';
import ImageOverlay from '../components/ImageOverlay';

const Gallery = () => {
  const [showImage, setShowImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState({})
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
      alt: 'Escadas',
      className: 'col-span-2'
    },
  ]
  return (
    <section className="py-6">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          <span className="text-green">Avenida Living</span><br/> na primeira linha do requinte
        </h1>
        <div className="grid grid-cols-2 gap-2">
          {images.map(image => <img key={image.src} src={image.src} alt={image.alt} className={image.className} onClick={() => {setShowImage(true); setSelectedImage(image)}} />)}
        </div>
      </div>
      <ImageOverlay src={selectedImage.src} alt={selectedImage.alt} showImage={showImage} handleClose={() => {setShowImage(false)}}/>
    </section>
  )
}

export default Gallery
