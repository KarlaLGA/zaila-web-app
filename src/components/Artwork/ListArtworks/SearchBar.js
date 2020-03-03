import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const handleSearch = () => {
    const search = document.getElementById("search-artwork").value;
    console.log(search);
    // TODO: ADD API CALL FOR SEARCH ARTWORK
  };

  return (
    <div className="search-bar">
      <label htmlFor="search-artwork">
        <input
          type="text"
          name="search-artwork"
          id="search-artwork"
          placeholder="Search here"
        />
      </label>
      <button onClick={handleSearch}>
        <FontAwesomeIcon size="lg" icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
