import React from 'react'
import cx from "classnames"
import styled from 'styled-components'

const Button = ({text, type, icon, iconDirection}) => {
  return (
    <button className={cx(
      "button min-w-175 h-10 px-1 rounded-xl border flex items-center justify-between transition-all duration-200",
      {
        "bg-white hover:bg-green00 text-green00 hover:text-white border-green00": type === 'primary',
        "hover:bg-white text-white hover:text-green00 border-white": type === 'secondary',
        "bg-gray-600 hover:bg-gray-900 text-white border-gray-600 hover:border-gray-900": type === 'tertiary',
        "flex-row-reverse": iconDirection === 'right'
      }
    )}>
      {icon && <Chevron className={cx(
        "rounded-full bg-green00 text-white w-8 h-8 transform",
        {
          "-rotate-90": iconDirection === 'left',
          "rotate-90": iconDirection === 'right'
        }
        )} />}
      <span className="block uppercase font-bold text-sm flex-1">{text}</span>
    </button>
  )
}

const Chevron = styled.div`
&::before,&::after {
  content: '';
  position: absolute;
  height: 2px;
  background-color: white;
  width: 12px;
  display: block;
  top: 0;
  left: 0;
}
&::before {
  transform: rotate(-45deg) translate(-6px,14px);
}
&::after {
  transform: rotate(45deg) translate(20px,0px);
}
`

export default Button
