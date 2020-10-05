import React from 'react'
import cx from 'classnames'

const StatusTag = ({status}) => {
  const getStatus = status => {
    switch(status) {
      case 'available':
        return 'disponível'
      case 'reserved':
        return 'reservado'
      case 'not_available':
        return 'vendido'
      default:
        return ''
    }
  }
  return (
  <span className={cx(
    "text-xs py-1 px-4 border rounded-xl border-green07",
    {
      '': status === 'available',
      'bg-green01': status === 'reserved',
      'bg-green07 text-white': status === 'not_available'
    }
    )}>
    {getStatus(status)}
  </span>
  )
}

export default StatusTag
