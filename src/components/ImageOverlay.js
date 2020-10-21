import React from 'react'
import Icon from './Icon'
import cx from 'classnames'

const ImageOverlay = ({src, alt, showImage, handleClose, className}) => {
  return (
    <aside className={cx("text-white w-screen h-full fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center transition-opacity opacity-0 duration-200 pointer-events-none z-30", {"opacity-100 pointer-events-auto": showImage}, className)}>
      <div className="w-full h-full bg-gray-900 opacity-90 absolute top-0 left-0"></div>
      <div className="flex flex-col w-full items-start">
        <Icon.Close className="mb-4 self-end place-self-end mr-4" handleClick={handleClose}/>
        <figure className="w-full" style={{maxHeight: '90vh'}}>
          <img src={src} alt={alt} className="h-full object-contain"/>
        </figure>
      </div>
      <p className="text-left w-full mt-2 text-xs">{alt}</p>
    </aside>
  )
}

export default ImageOverlay
