import React from 'react'
import cx from 'classnames'
import Icon from './Icon'

const Inputbox = ({type, color, name, placeholder, register, error, togglePassword}) => {
  return (
    <label htmlFor={name}>
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
      {
        togglePassword &&
        <Icon.Eye handleClick={togglePassword} className="absolute right-0 top-0" />
      }
    </label>
  )
}

export default Inputbox
