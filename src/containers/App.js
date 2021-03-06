import React, { useState } from "react";
import { Route } from "react-router-dom";

import Cards from "../components/Cards.jsx";
import Nav from "../components/Nav";
// import About from "../components/About.jsx";
import Ciudad from "../components/Ciudad.jsx";

import styles from "./App.module.css";
import { newIcons } from "../utils/utils.js";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: newIcons(recurso.weather[0].icon),
            //img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className={styles.App}>
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      {/* <Route path="/about" component={About} /> */}
      <Route
        exact
        path="/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
    </div>
  );
}

export default App;
