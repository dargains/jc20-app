import React from 'react'
import Mask from '../components/Mask'
import Button from '../components/Button'
import Icon from '../components/Icon'

const Contacts = () => {
  return (
    <section className="pt-6">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          Vamos <span className="text-green">conversar?</span>
        </h1>
        <p className="text-green08">
          Teremos todo o prazer em esclarecer as suas dúvidas e ir ao encontro de todas as suas necessidades.
        </p>
        <p className="text-green07">
          Escolhe o meio mais conveniente para si: 
        </p>

        <a href="mailto:cenas@cenas.com">
          <Button type="primary" text="e-mail" className="my-8"/>
        </a>
        <Button type="primary" text="whatsapp" className="my-8"/>
        <a href="tel:555pizza">
          <Button type="primary" text="ligação" className="my-8"/>
        </a>

        <div className="w-full text-center text-green07">
          <p className="text-xs mb-4">
            siga-nos em:
          </p>
          <div className="flex items-center justify-between mx-auto w-40">
            <a href="https://facebook.com/jc20" target="_blank" rel="noopener noreferrer">
              <Icon.Facebook height={32}/>
            </a>
            <a href="https://instagram.com/jc20" target="_blank" rel="noopener noreferrer">
              <Icon.Instagram height={32}/>
            </a>
            <a href="https://linkedin.com/jc20" target="_blank" rel="noopener noreferrer">
              <Icon.Linkedin height={32}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
