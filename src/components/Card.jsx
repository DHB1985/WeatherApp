import React from "react";
import { Link } from "react-router-dom";

import CardTemp from "./CardTemp";
import styles from "./Card.module.css";

export default function Card({ name, min, max, img, onClose, id }) {
  let imgSelector = "i" + { img }.img;

  function handleOnClose() {
    if (typeof onClose === "function") onClose(id);
  }

  return (
    <div className={styles.cardBox}>
      <img
        className={styles[imgSelector]}
        src="https://i.imgur.com/eNNfbN4.jpg"
        alt=""
      />
      <div className={styles.content}>
        <div className={styles.titleBox}>
          <button className={styles.btnClose} onClick={handleOnClose}></button>
        </div>
        <div className={styles.celDataBox}>
          <Link to={`/ciudad/${id}`}>
            <span className={styles.cityName}>{name}</span>
          </Link>

          <div className={styles.tempBox}>
            <CardTemp label="Min" value={min} />
            <CardTemp label="Max" value={max} />
          </div>

          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="img ot found"
          />
        </div>
      </div>
    </div>
  );
}

//buscar proptypes
