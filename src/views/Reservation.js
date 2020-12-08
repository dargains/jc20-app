import React from 'react'
import { useParams } from 'react-router-dom';
import Mask from '../components/Mask'

const Reservation = () => {
  const {id} = useParams();
  return (
    <section>
      <Mask />
      <div className="wrapper">
        <h1 className="font-display text-4xl font-semibold w-2/3 mb-8 text-black">
          Reserva
        </h1>
      </div>
    </section>
  )
}

export default Reservation
