import React from "react";
import styles from "./CardTemp.module.css";

function CardTemp({ img, value }) {
  return (
    <div className={styles.inlineBox}>
      <img className={styles.imgTemp} src={img} alt="img ot found" />
      <span className={styles.value}>{value}</span>
      <img
        className={styles.imgC}
        src="https://res.cloudinary.com/dbcrozoip/image/upload/v1643718240/Icons/Clima/temperatura_xzfnwz.png"
        alt="img ot found"
      />
    </div>
  );
}

export default CardTemp;
