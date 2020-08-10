import React from 'react'

const Base = ({
  name,
  children,
  fill = "#fff",
  width = 32,
  viewbox = "0 0 32 32"
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox={viewbox}
      className={`icon icon--${name}`}
      fill={fill}
    >
      {children}
    </svg>
  );
}

export const Menu = () => {
  return (
    <Base name="menu">
      Menu
    </Base>
  )
}

export const User = () => {
  return (
    <Base name="user">
      <path id="Path_848" fill="#fff" d="M20.865 15.227a12.25 12.25 0 0 0-4.645-2.807 6.741 6.741 0 0 0 3.068-5.611A6.949 6.949 0 0 0 12.222 0a6.949 6.949 0 0 0-7.066 6.809 6.741 6.741 0 0 0 3.068 5.611 12.25 12.25 0 0 0-4.644 2.807A11.49 11.49 0 0 0 0 23.556h1.91a10.142 10.142 0 0 1 10.313-9.937 10.142 10.142 0 0 1 10.313 9.937h1.91a11.49 11.49 0 0 0-3.581-8.329zm-8.642-3.45a5.071 5.071 0 0 1-5.157-4.968 5.071 5.071 0 0 1 5.156-4.969 5.071 5.071 0 0 1 5.156 4.969 5.071 5.071 0 0 1-5.156 4.969z" data-name="Path 848" />
    </Base>
  )
}

export const Share = () => {
  return (
    <Base name="share" >
      <g id="compartilhar">
        <path id="Path_884" d="M320.84 19.086A3.086 3.086 0 1 1 317.754 16a3.086 3.086 0 0 1 3.086 3.086zm0 0" class="cls-1" data-name="Path 884" transform="translate(-300.662 -15.288)" />
        <path id="Path_885" d="M302.466 7.6a3.8 3.8 0 1 1 3.8-3.8 3.8 3.8 0 0 1-3.8 3.8zm0-6.172A2.374 2.374 0 1 0 304.84 3.8a2.377 2.377 0 0 0-2.374-2.374zm0 0" class="cls-1" data-name="Path 885" transform="translate(-285.374)" />
        <path id="Path_886" d="M320.84 360.418a3.086 3.086 0 1 1-3.086-3.086 3.086 3.086 0 0 1 3.086 3.086zm0 0" class="cls-1" data-name="Path 886" transform="translate(-300.662 -341.427)" />
        <path id="Path_887" d="M302.466 348.928a3.8 3.8 0 1 1 3.8-3.8 3.8 3.8 0 0 1-3.8 3.8zm0-6.172a2.374 2.374 0 1 0 2.374 2.374 2.377 2.377 0 0 0-2.374-2.374zm0 0" class="cls-1" data-name="Path 887" transform="translate(-285.374 -326.14)" />
        <path id="Path_888" d="M22.172 189.754a3.086 3.086 0 1 1-3.086-3.086 3.086 3.086 0 0 1 3.086 3.086zm0 0" class="cls-1" data-name="Path 888" transform="translate(-15.288 -178.359)" />
        <path id="Path_889" d="M3.8 178.264a3.8 3.8 0 1 1 3.8-3.8 3.8 3.8 0 0 1-3.8 3.8zm0-6.172a2.374 2.374 0 1 0 2.374 2.374 2.376 2.376 0 0 0-2.374-2.374zm0 0" class="cls-1" data-name="Path 889" transform="translate(0 -163.072)" />
        <path id="Path_890" d="M115.3 97.138a.95.95 0 0 1-.471-1.775l8.811-5.023a.95.95 0 1 1 .94 1.65l-8.811 5.023a.943.943 0 0 1-.469.124zm0 0" class="cls-1" data-name="Path 890" transform="translate(-109.259 -86.199)" />
        <path id="Path_891" d="M124.13 273.142a.943.943 0 0 1-.469-.124l-8.811-5.023a.95.95 0 0 1 .94-1.65l8.811 5.023a.95.95 0 0 1-.471 1.775zm0 0" class="cls-1" data-name="Path 891" transform="translate(-109.281 -254.369)" />
      </g>
    </Base>
  )
}

export default {
  Menu,
  User,
  Share
}
