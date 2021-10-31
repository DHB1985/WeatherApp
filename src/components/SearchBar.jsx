import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {

  let [city, setCity] = React.useState("")

  let  handleChange =(event) => {
    console.log(event.target.value)
    setCity({ city: event.target.value });
    console.log(city.city)
  }

  let handleOnSearch = (event) => {
    event.preventDefault();
       onSearch(city.city);
      setCity({ city: ""});
    
  }

  return (
    <div className="contentBox">
      <form action="" className="search-bar" onSubmit={handleOnSearch}>
        <input
          type="text"
          id="inputSearch"
          name="inputSearch"
          pattern=".*\S.*"
          required
          placeholder="Buscar Ciudad..."
          value ={city.city}
          onChange = {(e)=>handleChange(e)}
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
