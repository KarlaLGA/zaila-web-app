import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <label htmlFor="search-artwork">
        <input
          type="text"
          name="search-artwork"
          id="search-artwork"
          placeholder="Search here"
          onChange={e => props.onSearch(e.target.value)}
        />
      </label>
      <button>
        <FontAwesomeIcon size="lg" icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
