import React, { useState, useEffect } from "react";
import Mask from "../components/Mask";
import Axios from "axios";
import db from "../db";
import { baseUrl } from "../api";

const Status = () => {
  const [items, setItems] = useState([]);
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
    } else {
      console.log("Offline. Fetching from Local DB...");
      db.table("status").toArray().then((dbStatus) => {
          if (!dbStatus) console.log("nao tem Status na db");
          else setItems(dbStatus);
        });
    }

    return () => {};
  }, []);

  return (
    <section className="pt-6">
      <Mask />
      <div className="wrapper">
        <h1 className=" font-display text-4xl font-semibold w-2/3 mb-8">
          Acompanhe a obra do <span className="text-green">Avenida Living</span>
        </h1>
        <div>
          {items.map((item) => (
            <StatusItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

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

export default Status;
