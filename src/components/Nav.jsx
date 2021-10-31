import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="logoBar">
      <div>
        <Link to="/" className="link">
          <span>WeatherApp</span>
        </Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <Link to="/about" className="link">
        <span>About</span>
      </Link>
    </nav>
  );
}

export default Nav;
