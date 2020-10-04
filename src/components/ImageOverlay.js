import React from 'react'
import Icon from './Icon'
import cx from 'classnames'

const ImageOverlay = ({src, alt, handleClose, className}) => {
  return (
    <aside className={cx("text-white w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-4", className)}>
      <div className="w-full h-full bg-gray-900 opacity-90 absolute top-0 left-0"></div>
      <div className="flex flex-col items-start">
        <Icon.Close className="mb-2 self-end place-self-end" handleClick={handleClose}/>
        <figure className="w-full">
          <img src={src} alt={alt}/>
        </figure>
      </div>
      <p className="text-left w-full mt-2 text-xs">{alt}</p>
    </aside>
  )
}

export default ImageOverlay
