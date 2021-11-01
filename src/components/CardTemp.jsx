import React from "react";
import styles from "./CardTemp.module.css";

function CardTemp({ label, value }) {
  return (
    <div className={styles.inlineBox}>
      <label className={styles.label}>{label}</label>
      <span className={styles.value}>{value}º</span>
    </div>
  );
}

export default CardTemp;
