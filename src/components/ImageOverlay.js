import React from 'react'
import Icon from './Icon'
import cx from 'classnames'
import { Carousel } from "react-responsive-carousel";



const Slide = ({src, alt}) => {
  return (
    <div className="flex flex-col h-full justify-center">
      <img src={src} alt={alt} style={{maxHeight: '70vh'}} />
      <div
        className="mt-4 text-left text-white px-6"
        dangerouslySetInnerHTML={{ __html: alt }}
      />
    </div>
  );
};


const ImageOverlay = ({src, alt, images = [], selectedItem, showImage, handleClose, className, spaced}) => {
  return (
    <aside className={cx("text-white w-screen h-full fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center transition-opacity opacity-0 duration-200 pointer-events-none z-30", {"opacity-100 pointer-events-auto": showImage}, className)}>
      <div className="w-screen h-full bg-gray-900 opacity-90 absolute top-0 left-0"></div>
      <div className="flex flex-col w-full items-center mt-2">
        <Icon.Close className="mb-4 mr-4 self-end place-self-end" handleClick={handleClose}/>
        {
          !!images.length
          ? <Carousel
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              selectedItem={selectedItem}
              swipeable
              emulateTouch
            >
              {images.map((image) => (
                <Slide
                  key={image.src}
                  {...image}
                />
              ))}
            </Carousel>
          : <figure
              className={cx("w-full")}
              style={{maxHeight: '80vh'}}
            >
              <img
                src={src}
                alt={alt}
                className={cx("h-full object-contain",{"p-4 bg-white": spaced})}
              />
              <figcaption className="px-4 mt-2 text-xs">{alt}</figcaption>
            </figure>
        }
      </div>
    </aside>
  )
}

export default ImageOverlay
