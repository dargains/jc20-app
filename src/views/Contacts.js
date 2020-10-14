import React from 'react'
import { Link } from 'react-router-dom'

import Mask from '../components/Mask'
import Button from '../components/Button'
import SocialMedia from '../components/SocialMedia'

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

        <Link to="/contacts/email">
          <Button type="primary" text="e-mail" className="my-8"/>
        </Link>
        <a href="https://wa.me/351925595027?text=oi">
          <Button type="primary" text="whatsapp" className="my-8"/>
        </a>
        <Link to="/contacts/phone">
          <Button type="primary" text="ligação" className="my-8"/>
        </Link>
          <SocialMedia color="green" size="sm" />
      </div>
    </section>
  )
}

export default Contacts
