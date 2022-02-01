import React from "react";
import { Link } from "react-router-dom";

import CardTemp from "./CardTemp";
import styles from "./Card.module.css";

export default function Card({ name, min, max, img, onClose, id }) {

  function handleOnClose() {
    if (typeof onClose === "function") onClose(id);
  }
let spanZise = {fontSize: "18px"}

  if(name.length >= 10){
    spanZise = {fontSize: "14px"}
  }

  return (
    <div className={styles.cardBox}>
      <img
        className={styles.imgBack}
        src="https://i.imgur.com/eNNfbN4.jpg"
        alt=""
      />
      <div className={styles.content}>
        <div className={styles.titleBox}>
          <button className={styles.btnClose} onClick={handleOnClose}></button>
        </div>
        <div className={styles.celDataBox}>
          <Link to={`/${id}`}>
            <span className={styles.cityName} style={spanZise}>{name}</span>
          </Link>

          <div className={styles.tempBox}>
            <CardTemp img="https://res.cloudinary.com/dbcrozoip/image/upload/v1643718239/Icons/Clima/frio_rrdg8v.png" value={min} />
            <CardTemp img="https://res.cloudinary.com/dbcrozoip/image/upload/v1643718239/Icons/Clima/caliente_mfvrbb.png" value={max} />
          </div>

          <img className={styles.imgWeather}
            //src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            src={img}
            alt="img ot found"
          />
        </div>
      </div>
    </div>
  );
}

//buscar proptypes
