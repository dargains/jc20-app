import React from 'react'
import cx from 'classnames'

const Inputbox = ({type, color, name, placeholder, register, error}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      ref={register}
      className={cx(
        "border-b bg-transparent w-full py-1 mt-6 transition-all duration-200",
        {
          "text-white border-white": color === 'white',
          "text-green08 border-green08": color === 'green',
          "text-red border-red": error
        }
      )}
    />
  )
}

export default Inputbox
