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
    <div className={styles.cardBox + " " + styles[imgSelector]}>
      <div className={styles.titleBox}>
        <button className={styles.btnClose} onClick={handleOnClose}>
          X
        </button>
      </div>

      <Link to={`/ciudad/${id}`}>
        <h2 className="city">{name}</h2>
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
  );
}

//buscar proptypes
