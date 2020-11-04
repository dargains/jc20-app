import React from 'react'
import Icon from './Icon'
import cx from 'classnames'
import { Carousel } from "react-responsive-carousel";



const Slide = ({src, alt}) => {
  return (
    <div className="flex-1 flex flex-col">
      <img className="h-64" src={src} alt={alt} />
      <div
        className="mt-12 text-left text-green08 px-6"
        dangerouslySetInnerHTML={{ __html: alt }}
      />
    </div>
  );
};


const ImageOverlay = ({src, alt, images = [], selectedItem, showImage, handleClose, className, spaced}) => {
  return (
    <aside className={cx("text-white w-screen h-full fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center transition-opacity opacity-0 duration-200 pointer-events-none z-30", {"opacity-100 pointer-events-auto": showImage}, className)}>
      <div className="w-screen h-full bg-gray-900 opacity-90 absolute top-0 left-0"></div>
      <div className="flex flex-col w-full items-start">
        <Icon.Close className="mb-4 self-end place-self-end mr-4" handleClick={handleClose}/>
        {
          !!images.length
          ? <Carousel
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              selectedItem={selectedItem}
              swipeable
              emulateTouch
              dynamicHeight
            >
              {images.map((image) => (
                <Slide
                  key={image.src}
                  {...image}
                />
              ))}
            </Carousel>
          : <figure
              className={cx("w-full", {"p-4 bg-white": spaced})}
              style={{maxHeight: '80vh'}}
            >
              <img
                src={src}
                alt={alt}
                className="h-full object-contain"
              />
              <figcaption className="px-4 mt-2 text-xs">{alt}</figcaption>
            </figure>
        }
      </div>
    </aside>
  )
}

export default ImageOverlay
