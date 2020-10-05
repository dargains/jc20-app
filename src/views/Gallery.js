import React from 'react'
import Mask from '../components/Mask';

const Gallery = () => {
  return (
    <section className="pt-6">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          <span className="text-green">Avenida Living</span> na primeira linha do requinte
        </h1>
        <div className="grid grid-cols-2 gap-2">
          <img src={require("../assets/images/fachada01.jpg")} alt="1"/>
          <img src={require("../assets/images/cam-04-hall.jpg")} alt="1" className="row-span-2"/>
          <img src={require("../assets/images/cam-08-wc.jpg")} alt="1"/>
          <img src={require("../assets/images/cam-06-sala.jpg")} alt="1" className="col-span-2"/>
          <img src={require("../assets/images/cam-05-cozinha.jpg")} alt="1" className="col-span-2"/>
          <img src={require("../assets/images/cam-09-suite.jpg")} alt="1" className="col-span-2"/>
          <img src={require("../assets/images/cam-03-varanda.jpg")} alt="1" className="col-span-2"/>
          <img src={require("../assets/images/cam-02-patio.jpg")} alt="1"/>
          <img src={require("../assets/images/cam-07-escadas.jpg")} alt="1" className="row-span-2"/>
          <img src={require("../assets/images/cam-10-garagem.jpg")} alt="1"/>
          <img src={require("../assets/images/fachada.jpg")} alt="1" className="col-span-2"/>
        </div>
      </div>
    </section>
  )
}

export default Gallery
