import React, { useState, useEffect } from "react";
import cx from "classnames";
import Button from "../components/Button";
import Mask from "../components/Mask";
import { Carousel } from "react-responsive-carousel";
import Axios from "axios";
import db from "../db";
import { baseUrl } from "../api";

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
          className="bg-green05 h-2 w-full rounded-xl absolute top-0 left-0 duration-300 transition-transform delay-300"
          style={{ transform: `translateX(-${100 - barStatus}%)` }}
        />
      </div>
    </article>
  );
};

const Slide = (image) => {
  const slide = image.directus_files_id;
  return (
    <div className="flex-1 flex flex-col">
      <img className="h-64" src={slide.data.full_url} alt={slide.title} />
      <div
        className="mt-12 text-left text-green08 px-6"
        dangerouslySetInnerHTML={{ __html: slide.description }}
      />
    </div>
  );
};

const Status = () => {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);
  useEffect(() => {
    if (window.navigator.onLine) {
      console.log("Online. Fetching from CMS...");
      Axios(`${baseUrl}/status?fields=*.*`).then((response) => {
        const onlineStatus = response.data.data[0].itens;
        setItems(onlineStatus);
        onlineStatus.forEach((status, index) => {
          db.table("status").put({ id: index, ...status });
        });
      });
      Axios(`${baseUrl}/gallery?fields=*.*.*`).then((response) => {
        const onlineGallery = response.data.data[0].imagens;
        setImages(onlineGallery);
        onlineGallery.forEach((image, index) => {
          db.table("images").put({ id: index, ...image });
        });
      });
    } else {
      console.log("Offline. Fetching from Local DB...");
      db.table("status")
        .toArray()
        .then((dbStatus) => {
          if (!dbStatus) console.log("nao tem Status na db");
          else setItems(dbStatus);
        });
      db.table("images")
        .toArray()
        .then((dbImages) => {
          if (!dbImages) console.log("nao tem Images na db");
          else setImages(dbImages);
        });
    }
    return () => {};
  }, []);
  const changeView = () => {
    setShowPhotos(!showPhotos);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-6 overflow-hidden">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          Acompanhe a obra do <span className="text-green">Avenida Living</span>
        </h1>
      </div>
      <div
        className={cx("flex transform transition-all duration-200", {
          "-translate-x-1/2": showPhotos,
        })}
        style={{ width: "200vw" }}
      >
        <div className="wrapper w-screen">
          <div>
            {items.map((item) => (
              <StatusItem key={item.label} {...item} />
            ))}
          </div>
          <Button
            text="Fotografias"
            type="primary"
            icon
            iconDirection="right"
            handleClick={changeView}
            className="mt-8"
          />
        </div>
        <div className="wrapper w-screen">
          <div className="-mx-6">
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
                  <Slide key={image.id} {...image} />
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
    </section>
  );
};

export default Status;
