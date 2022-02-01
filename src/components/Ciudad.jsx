import React from "react";

import styles from "./Ciudad.module.css";

export default function Ciudad({ city }) {
  console.log(city);
  if (city !== null) {
    return (
      <div className="ciudad">
        <div className="container">
          <h2>{city.name}</h2>
          <div className={styles.info}>
            <img
              className={styles.icons}
              src="https://res.cloudinary.com/dbcrozoip/image/upload/v1643724476/Icons/Clima/global_awdcgp.png"
              alt=""
            />
            <p className={styles.text}>{city.temp} ºC</p>
            <img
              className={styles.icons}
              src="https://res.cloudinary.com/dbcrozoip/image/upload/v1643718240/Icons/Clima/ventoso_a2zxjz.png"
              alt=""
            />
            <p className={styles.text}>{city.wind} km/h</p>
            <img
              className={styles.icons}
              src="https://res.cloudinary.com/dbcrozoip/image/upload/v1643724856/Icons/Clima/brujula_v08tty.png"
              alt=""
            />
            <p className={styles.text}>
              {city.latitud}º/{city.longitud}º
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.error404}>
        <h1>Ciudad no encontrada</h1>
      </div>
    );
  }
}
