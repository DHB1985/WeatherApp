import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <nav className={styles.logoBar}>
      <div>
        <Link to="/" className={styles.link}>
          <span>WeatherApp</span>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      {/* <Link to="/about" className={styles.link}>
        <span>About</span>
      </Link> */}
    </nav>
  );
}

export default Nav;
