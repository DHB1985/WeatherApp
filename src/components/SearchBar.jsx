import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  let [city, setCity] = React.useState("");

  let handleChange = (event) => {
    setCity({ city: event.target.value });
  };

  let handleOnSearch = (event) => {
    event.preventDefault();
    onSearch(city.city);
    setCity({ city: "" });
  };

  return (
    <div className={styles.contentBox}>
      <form className={styles.searchBar}>
        <input
          className={styles.inputSearch}
          type="text"
          id="inputSearch"
          name="inputSearch"
          pattern=".*\S.*"
          placeholder="Buscar Ciudad..."
          value={city.city || ""}
          onChange={handleChange}
        />
        <button className={styles.searchbtn} onClick={handleOnSearch}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
