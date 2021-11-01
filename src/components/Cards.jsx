import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";


export default function Cards({ cities, onClose }) {
  if ({ cities }) {
    return (
      <div className={styles.cardsBox}>
        {cities.map((city) => (
          <Card
            key={city.id}
            name={city.name}
            min={city.min}
            max={city.max}
            img={city.img}
            onClose={() => onClose(city.id)}
            id={city.id}
          />
        ))}
      </div>
    );
  } else {
    return <div className={styles.cardsBox}>Sin Ciudades</div>;
  }
}
