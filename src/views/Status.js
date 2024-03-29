import React, { useState, useContext, useEffect, useCallback } from 'react'
import cx from "classnames";
import Button from "../components/Button";
import Mask from "../components/Mask";
import { Carousel } from "react-responsive-carousel";
import Axios from "axios";
import { AppContext } from '../store.js';
import { itemsUrl } from '../api'
import db from '../db'
import ImageOverlay from "../components/ImageOverlay";
/*
const StatusItem = ({ label, status }) => {
  const [barStatus, setBarStatus] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setBarStatus(status);
    }, 100);
  });
  return (
    <article className="mb-4">
      <div className="flex items-center justify-between text-green07 mb-2 px-1">
        <p>{label}</p>
        <p>{status}%</p>
      </div>
      <div className="overflow-hidden w-full rounded-xl">
        <div className="bg-green01 h-2 w-full rounded-xl" />
        <div
          className="bg-green05 h-2 w-full rounded-xl absolute top-0 left-0 duration-500 transition-transform delay-300"
          style={{ transform: `translateX(-${100 - barStatus}%)` }}
        />
      </div>
    </article>
  );
};
*/
const Slide = ({handleClick, ...image}) => {
  const slide = image.directus_files_id;
  return (
    <div
      className="flex-1 flex flex-col"
      onClick={() =>
        handleClick({ src: slide.data.full_url, alt: slide.title })
      }
    >
      <img className="h-64" src={slide.data.full_url} alt={slide.title} />
      <div
        className="mt-12 text-left text-green08 px-6"
        dangerouslySetInnerHTML={{ __html: slide.description }}
      />
    </div>
  );
};

const Status = () => {
  const [state] = useContext(AppContext)
  const [images, setImages] = useState([]);
  const [content, setContent] = useState({})
  const [copy, setCopy] = useState({itens:[],images:[]})
  const [percentage, setPercentage] = useState(0)
  const [showPhotos, setShowPhotos] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState({})

  const changeCopy = useCallback(content => {
    const copy = content.find(translation => translation.language === state.language)
    setCopy(copy)
  },[state.language])

  useEffect(() => {
    if (!Object.keys(content).length) {
      if (window.navigator.onLine) {
        (async () => {
          const response = await Axios(`${itemsUrl}/status?fields=*.*.*`)
          const allContent = response.data.data[0].translations;
          // const galleryResponse = await Axios(`${itemsUrl}/status_gallery?fields=*.*.*`)
          // const allGallery = galleryResponse.data.data[0];
          setPercentage(response.data.data[0].status_value)
          setImages(response.data.data[0].images)
          
          setContent(allContent)
          db.content.put({ page: 'Status', content: allContent })
          changeCopy(allContent)

        })()
      } else {
        db.content.get('Status').then(contentDB => {
          setContent(contentDB.content)
          changeCopy(contentDB.content)
        })
      }
    } else {
      if (state.language !== copy.lang) {
        changeCopy(content)
      }
    }
    return () => {
      
    }
  }, [changeCopy, content, copy.lang, state.language])

  const changeView = () => {
    setShowPhotos(!showPhotos);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden">
      <Mask />
      <div className="wrapper">
        <h1 className="font-display text-4xl font-semibold w-2/3 mb-8 text-black" dangerouslySetInnerHTML={{
          __html: copy.title
        }} />
      </div>
      <div
        className={cx("flex transform transition-all duration-200", {
          "-translate-x-1/2": showPhotos,
        })}
        style={{ width: "200vw" }}
      >
        <div className="wrapper w-screen">
          <div>
            <div className="flex items-start justify-between text-green08 mb-6">
              <div className="text-center">
                <p>{copy.start_label}</p>
                <p className="font-bold">{copy.start_value}</p>
              </div>
              <div className="text-center">
                <p>{copy.finish_label}</p>
                <p className="font-bold">{copy.finish_value}</p>
              </div>
            </div>
            <div className="px-10 mb-6">
              <svg viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#a3b1af"
                  strokeWidth="4"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#32524d"
                  strokeWidth="4"
                  strokeDasharray={`${percentage}, 100`}
                />
              </svg>
              <div className="absolute-center text-center">
                <p className="font-bold font-display text-5xl">{percentage}%</p>
                <p className="font-bold">Concluída</p>
              </div>
            </div>
          </div>
          {/* <div>
            {copy.itens.map((item) => (
              <StatusItem key={item.label} {...item} />
            ))}
          </div> */}
          <Button
            text="Fotografias"
            type="primary"
            icon
            iconDirection="right"
            handleClick={changeView}
            className="mt-8"
            disabled={images.length === 0}
          />
        </div>
        <div className="wrapper w-screen">
          <div className="-mx-6">
            <p className="text-sm text-green05 text-right px-6 mb-2">ago 2020</p>
            {!!images.length && (
              <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                swipeable
                emulateTouch
                dynamicHeight
              >
                {images.map((image) => (
                  <Slide
                    key={image.id}
                    {...image}
                    handleClick={({src,alt}) => {
                      setShowImage(true);
                      setSelectedImage({ src, alt });
                    }}
                  />
                ))}
              </Carousel>
            )}
          </div>
          <Button
            text="status"
            type="primary"
            icon
            iconDirection="left"
            handleClick={changeView}
            className="mt-8"
          />
        </div>
      </div>
      <ImageOverlay
        src={selectedImage.src}
        alt={selectedImage.alt}
        showImage={showImage}
        handleClose={() => {
          setShowImage(false);
        }}
      />
    </section>
  );
};

export default Status;
